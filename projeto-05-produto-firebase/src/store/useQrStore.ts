import { create } from 'zustand';
import { QrStore, QrSettings } from '../types/qr';
import { auth, db, saveUserToFirestore } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const generateTextLogo = (color: string) => {
  const svg = `
    <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
      <style>
        .qr { font: italic 900 90px sans-serif; letter-spacing: -5px; }
        .small { font: 700 35px sans-serif; }
        .thin { font: 400 35px sans-serif; }
      </style>
      <text x="0" y="95" class="qr" fill="${color}">QR</text>
      <text x="155" y="55" class="small" fill="${color}">code</text>
      <text x="155" y="95" class="thin" fill="${color}">styling</text>
    </svg>
  `.trim();
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const initialSettings: QrSettings = {
  mode: 'single',
  multiQr: [
    { title: 'QR 1', content: '', useBrandColors: false },
    { title: 'QR 2', content: '', useBrandColors: false },
    { title: 'QR 3', content: '', useBrandColors: false },
  ],
  content: 'https://google.com',
  width: 300,
  height: 300,
  margin: 10,
  dotsColor: '#0F172A', // slate-900
  dotsType: 'square',
  backgroundColor: '#FFFFFF',
  cornerSquareColor: '#0F172A',
  cornerSquareType: 'square',
  cornerDotColor: '#0F172A',
  cornerDotType: 'square',
  errorCorrectionLevel: 'H', // Default to H because we have a logo now
  logo: generateTextLogo('#0F172A'),
  logoSize: 0.2, // Default to 20% as per rule
  logoMargin: 0,
  multiTitle: 'Premium Connect',
  multiSubtitle: 'Digital Business Card',
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.2,
    margin: 0,
  },
};

export const useQrStore = create<QrStore>((set) => ({
  ...initialSettings,
  user: null,
  isAuthReady: false,
  savedQrCodes: [],
  theme: 'dark', // Default to dark for a futuristic look
  setSettings: (newSettings) => set((state) => {
    const updated = { ...state, ...newSettings };
    
    // If dotsColor changed and we are using the branded logo, update its color
    const isBrandedLogo = !state.logo || state.logo.startsWith('data:image/svg+xml;base64,');
    
    if (newSettings.dotsColor && isBrandedLogo) {
      updated.logo = generateTextLogo(newSettings.dotsColor);
    }

    // If logo was explicitly set to undefined/null (removed by user), restore branding
    if ('logo' in newSettings && !newSettings.logo) {
      updated.logo = generateTextLogo(updated.dotsColor);
    }

    // Business Rule: Use H (30%) if there is a logo
    if (updated.logo && !state.logo) {
      updated.errorCorrectionLevel = 'H';
    }
    return updated;
  }),
  resetSettings: () => set({ ...initialSettings, user: useQrStore.getState().user, isAuthReady: true, savedQrCodes: useQrStore.getState().savedQrCodes, theme: useQrStore.getState().theme }),
  setUser: (user) => set({ user }),
  setAuthReady: (ready) => set({ isAuthReady: ready }),
  setSavedQrCodes: (qrCodes) => set({ savedQrCodes: qrCodes }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  addMultiQrItem: () => set((state) => ({
    multiQr: [...state.multiQr, { title: '', content: '', useBrandColors: false }]
  })),
  removeMultiQrItem: (index: number) => set((state) => ({
    multiQr: state.multiQr.filter((_, i) => i !== index)
  })),
}));

// Initialize Auth Listener
if (typeof window !== 'undefined') {
  onAuthStateChanged(auth, async (user) => {
    const store = useQrStore.getState();
    store.setUser(user);
    store.setAuthReady(true);
    
    if (user) {
      // Save user profile to Firestore
      await saveUserToFirestore(user);
      
      // Listen for saved QR codes
      const qrCodesRef = collection(db, 'users', user.uid, 'qr_codes');
      const q = query(qrCodesRef, orderBy('createdAt', 'desc'));
      
      onSnapshot(q, (snapshot) => {
        const qrCodes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        store.setSavedQrCodes(qrCodes);
      }, (error) => {
        console.error('Error fetching QR codes:', error);
      });
    } else {
      store.setSavedQrCodes([]);
    }
  });
}
