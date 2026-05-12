import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { useQrStore } from '../../store/useQrStore';

interface QrItemProps {
  content: string;
  title?: string;
  settings: any;
  useBrandColors?: boolean;
  key?: any;
}

const BRAND_COLORS: Record<string, { dots: string; corners: string; gradient?: any }> = {
  instagram: { 
    dots: '#E4405F', 
    corners: '#E4405F',
    gradient: {
      type: 'linear',
      rotation: 45,
      colorStops: [
        { offset: 0, color: '#833AB4' }, // Purple
        { offset: 0.5, color: '#FD1D1D' }, // Pink/Red
        { offset: 1, color: '#FCB045' }  // Orange/Yellow
      ]
    }
  },
  facebook: { dots: '#1877F2', corners: '#1877F2' },
  youtube: { dots: '#FF0000', corners: '#FF0000' },
  github: { dots: '#181717', corners: '#181717' },
  telegram: { dots: '#26A5E4', corners: '#26A5E4' },
  x: { dots: '#000000', corners: '#000000' },
  twitter: { dots: '#1DA1F2', corners: '#1DA1F2' },
  whatsapp: { dots: '#25D366', corners: '#25D366' },
  linkedin: { dots: '#0077B5', corners: '#0077B5' },
  tiktok: { dots: '#000000', corners: '#000000' },
  spotify: { dots: '#1DB954', corners: '#1DB954' },
  pinterest: { dots: '#BD081C', corners: '#BD081C' },
  snapchat: { dots: '#FFFC00', corners: '#000000' },
  discord: { dots: '#5865F2', corners: '#5865F2' },
  twitch: { dots: '#9146FF', corners: '#9146FF' },
};

function getBrandSettings(title: string, currentSettings: any) {
  const normalizedTitle = title.toLowerCase().trim();
  const brand = Object.keys(BRAND_COLORS).find(key => normalizedTitle.includes(key));
  
  if (brand) {
    const colors = BRAND_COLORS[brand];
    return {
      ...currentSettings,
      dotsColor: colors.dots,
      dotsGradient: colors.gradient,
      cornerSquareColor: colors.corners,
      cornerDotColor: colors.corners,
    };
  }
  return currentSettings;
}

function QrItem({ content, title, settings, useBrandColors }: QrItemProps) {
  const qrRef = useRef<HTMLDivElement>(null);
  
  const effectiveSettings = useBrandColors && title 
    ? getBrandSettings(title, settings) 
    : settings;

  const qrCode = useRef<QRCodeStyling>(new QRCodeStyling({
    width: effectiveSettings.width,
    height: effectiveSettings.height,
    type: 'svg',
    data: content || ' ',
    margin: effectiveSettings.margin,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: effectiveSettings.errorCorrectionLevel,
    },
    dotsOptions: {
      color: effectiveSettings.dotsColor,
      type: effectiveSettings.dotsType,
      gradient: effectiveSettings.dotsGradient,
    },
    backgroundOptions: {
      color: '#F7F7F7', // Match the requested background color
    },
    cornersSquareOptions: {
      color: effectiveSettings.cornerSquareColor,
      type: effectiveSettings.cornerSquareType,
    },
    cornersDotOptions: {
      color: effectiveSettings.cornerDotColor,
      type: effectiveSettings.cornerDotType,
    },
    image: effectiveSettings.logo,
    imageOptions: effectiveSettings.imageOptions,
  }));

  useEffect(() => {
    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.current.append(qrRef.current);
    }
  }, []);

  useEffect(() => {
    qrCode.current.update({
      data: content || ' ',
      width: effectiveSettings.width,
      height: effectiveSettings.height,
      margin: effectiveSettings.margin,
      dotsOptions: {
        color: effectiveSettings.dotsColor,
        type: effectiveSettings.dotsType,
        gradient: effectiveSettings.dotsGradient,
      },
      backgroundOptions: {
        color: '#F7F7F7',
      },
      cornersSquareOptions: {
        color: effectiveSettings.cornerSquareColor,
        type: effectiveSettings.cornerSquareType,
      },
      cornersDotOptions: {
        color: effectiveSettings.cornerDotColor,
        type: effectiveSettings.cornerDotType,
      },
      image: effectiveSettings.logo,
      imageOptions: effectiveSettings.imageOptions,
    });
  }, [content, effectiveSettings]);

  return (
    <div className="flex flex-col items-center gap-3 shrink-0">
      <div 
        className="p-1"
        style={{ width: settings.width + 8, height: settings.height + 8 }}
      >
        <div 
          ref={qrRef} 
          className="qr-container [&>canvas]:max-w-full [&>canvas]:h-auto [&>svg]:max-w-full [&>svg]:h-auto"
        />
      </div>
      {title && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 text-center max-w-[80px] truncate">
          {title}
        </span>
      )}
    </div>
  );
}

export function QrPreview() {
  const settings = useQrStore();

  if (settings.mode === 'multi') {
    return (
      <div className="w-full p-4">
        {/* Premium Card Container */}
        <div className="relative bg-[#F7F7F7] rounded-[24px] p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-visible">
          <div className="relative z-10 flex flex-col items-center gap-12">
            {/* Refined Typography Header */}
            <div className="text-center space-y-3">
              <div className="h-0.5 w-12 bg-slate-900 mx-auto mb-6 opacity-20" />
              <h2 className="text-3xl font-light tracking-tight text-slate-900 font-serif italic">
                {settings.multiTitle}
              </h2>
              <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-400">{settings.multiSubtitle}</p>
            </div>

            {/* QR Codes Row - Compact Layout */}
            <div className="flex flex-row flex-wrap justify-center items-start gap-2 w-full">
              {settings.multiQr.map((item, index) => (
                <QrItem 
                  key={index}
                  title={item.title}
                  content={item.content}
                  useBrandColors={item.useBrandColors}
                  settings={{
                    ...settings,
                    width: 75, // Even smaller to fit better
                    height: 75,
                    margin: 2,
                  }}
                />
              ))}
            </div>

            {/* Minimalist Footer */}
            <div className="pt-8 w-full flex justify-center">
              <div className="px-4 py-1 bg-slate-50 rounded-full border border-slate-100">
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">abngrid.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <QrItem 
        content={settings.content}
        settings={settings}
      />
    </div>
  );
}
