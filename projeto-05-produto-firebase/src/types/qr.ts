import { User } from 'firebase/auth';

export type DotType = 'square' | 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'extra-rounded';
export type CornerSquareType = 'square' | 'dot' | 'extra-rounded';
export type CornerDotType = 'square' | 'dot';
export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export type QrMode = 'single' | 'multi';

export interface MultiQrItem {
  title: string;
  content: string;
  useBrandColors?: boolean;
}

export interface QrSettings {
  mode: QrMode;
  multiQr: MultiQrItem[];
  content: string;
  width: number;
  height: number;
  margin: number;
  dotsColor: string;
  dotsType: DotType;
  backgroundColor: string;
  cornerSquareColor: string;
  cornerSquareType: CornerSquareType;
  cornerDotColor: string;
  cornerDotType: CornerDotType;
  errorCorrectionLevel: ErrorCorrectionLevel;
  logo?: string;
  logoSize: number;
  logoMargin: number;
  multiTitle?: string;
  multiSubtitle?: string;
  imageOptions: {
    hideBackgroundDots: boolean;
    imageSize: number;
    margin: number;
  };
}

export interface QrStore extends QrSettings {
  user: User | null;
  isAuthReady: boolean;
  savedQrCodes: any[];
  theme: 'light' | 'dark';
  setSettings: (settings: Partial<QrSettings>) => void;
  resetSettings: () => void;
  setUser: (user: User | null) => void;
  setAuthReady: (ready: boolean) => void;
  setSavedQrCodes: (qrCodes: any[]) => void;
  toggleTheme: () => void;
  addMultiQrItem: () => void;
  removeMultiQrItem: (index: number) => void;
}
