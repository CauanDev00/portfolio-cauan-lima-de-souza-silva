/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout } from './components/layout/Layout';
import { QrCode, Link2, Palette, Settings2, Download, LogIn, LogOut, Save, History, User as UserIcon, Sun, Moon, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { useQrStore } from './store/useQrStore';
import { Input, Section, cn, Slider } from './components/ui/Controls';
import { QrPreview } from './components/qr/QrPreview';
import QRCodeStyling from 'qr-code-styling';
import { Image as ImageIcon, X } from 'lucide-react';
import { signInWithGoogle, logout, db, storage, trackEvent, getRemoteValue } from './lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';

export default function App() {
  const { content, setSettings, logo, user, isAuthReady, savedQrCodes, theme, toggleTheme } = useQrStore();
  const settings = useQrStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [isSaving, setIsSaving] = useState(false);
  const [qrName, setQrName] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    qr0: true,
    qr1: false,
    qr2: false,
    plate: false
  });

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isDark = theme === 'dark';
  const welcomeMessage = getRemoteValue('welcome_message') || 'Bem-vindo ao ABNGrid!';

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        setSettings({ logo: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = (extension: 'png' | 'svg' | 'webp') => {
    const qrCode = new QRCodeStyling({
      ...settings,
      data: settings.content,
      image: settings.logo,
      type: extension === 'svg' ? 'svg' : 'canvas'
    });
    qrCode.download({ name: "qr-code", extension });
    trackEvent('download_qr', { format: extension });
  };

  const handleSaveQr = async () => {
    if (!user) {
      alert("Por favor, faça login para salvar seus QR Codes.");
      return;
    }
    if (!qrName) {
      alert("Dê um nome ao seu QR Code.");
      return;
    }

    setIsSaving(true);
    try {
      // 1. Generate the QR code as a data URL (for storage)
      const qrCode = new QRCodeStyling({
        ...settings,
        data: settings.content,
        image: settings.logo,
        width: 1000,
        height: 1000,
      });
      
      const blob = await qrCode.getRawData('png') as Blob;
      if (!blob) throw new Error("Falha ao gerar imagem do QR Code");
      
      const reader = new FileReader();
      const dataUrlPromise = new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
      const dataUrl = await dataUrlPromise;

      // 2. Upload to Firebase Storage
      const storageRef = ref(storage, `users/${user.uid}/qr_codes/${Date.now()}.png`);
      await uploadString(storageRef, dataUrl, 'data_url');
      const imageUrl = await getDownloadURL(storageRef);

      // 3. Save metadata to Firestore
      const qrCodesRef = collection(db, 'users', user.uid, 'qr_codes');
      await addDoc(qrCodesRef, {
        userId: user.uid,
        name: qrName,
        content: settings.content,
        settings: JSON.parse(JSON.stringify(settings)), // Sanitize for Firestore
        imageUrl,
        createdAt: serverTimestamp(),
      });

      setQrName("");
      alert("QR Code salvo com sucesso!");
      trackEvent('save_qr', { name: qrName });
    } catch (error) {
      console.error("Erro ao salvar QR Code:", error);
      alert("Erro ao salvar QR Code. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  };

  const loadSavedQr = (saved: any) => {
    setSettings(saved.settings);
    setShowHistory(false);
    trackEvent('load_saved_qr', { id: saved.id });
  };

  return (
    <Layout
      accentColor={settings.dotsColor}
      header={
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-none transition-colors",
              isDark ? "bg-white/5 border border-white/10" : "bg-white/10"
            )}>
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white uppercase">
              ABN<span className="text-slate-400 font-medium lowercase italic">Grid</span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-none border transition-all",
                isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white/10 border-transparent text-white hover:bg-white/20"
              )}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {isAuthReady && (
              user ? (
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{user.displayName}</span>
                    <button onClick={logout} className="text-[9px] text-slate-400 hover:text-white transition-colors uppercase font-bold">Sair</button>
                  </div>
                  <img src={user.photoURL || ""} alt={user.displayName || ""} className="w-8 h-8 rounded-full border border-white/20" />
                </div>
              ) : (
                <button 
                  onClick={signInWithGoogle}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-none",
                    isDark ? "bg-white text-black hover:bg-slate-200" : "bg-white text-slate-900 hover:bg-slate-100"
                  )}
                >
                  <LogIn className="w-4 h-4" />
                  Entrar
                </button>
              )
            )}
          </div>
        </div>
      }
      sidebar={
        <div className="space-y-10">
          {user && (
            <div className="flex gap-2">
              <button 
                onClick={() => setShowHistory(false)}
                className={cn(
                  "flex-1 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all rounded-none",
                  !showHistory 
                    ? (isDark ? "bg-white text-black border-white" : "bg-slate-900 border-slate-900 text-white") 
                    : (isDark ? "bg-transparent border-white/10 text-white/40 hover:border-white/30" : "bg-white border-slate-200 text-slate-400 hover:border-slate-300")
                )}
              >
                Editor
              </button>
              <button 
                onClick={() => setShowHistory(true)}
                className={cn(
                  "flex-1 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all rounded-none flex items-center justify-center gap-2",
                  showHistory 
                    ? (isDark ? "bg-white text-black border-white" : "bg-slate-900 border-slate-900 text-white") 
                    : (isDark ? "bg-transparent border-white/10 text-white/40 hover:border-white/30" : "bg-white border-slate-200 text-slate-400 hover:border-slate-300")
                )}
              >
                <History className="w-3 h-3" />
                Histórico ({savedQrCodes.length})
              </button>
            </div>
          )}

          {showHistory ? (
            <div className="space-y-4">
              <div className={cn(
                "px-8 py-3 -mx-8 -mt-8 mb-4 border-b",
                isDark ? "bg-white/5 border-white/10" : "bg-[#d7d7d7] border-slate-300"
              )}>
                <h2 className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em]",
                  isDark ? "text-white/60" : "text-slate-700"
                )}>Seus QR Codes Salvos</h2>
              </div>
              
              {savedQrCodes.length === 0 ? (
                <div className="py-12 text-center space-y-3">
                  <History className="w-8 h-8 text-slate-200 mx-auto opacity-20" />
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Nenhum QR Code salvo ainda</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {savedQrCodes.map((saved) => (
                    <button 
                      key={saved.id}
                      onClick={() => loadSavedQr(saved)}
                      className={cn(
                        "group flex items-center gap-4 p-3 border transition-all text-left rounded-none",
                        isDark 
                          ? "bg-white/5 border-white/10 hover:border-white/40" 
                          : "bg-white border-slate-200 hover:border-slate-900"
                      )}
                    >
                      <img src={saved.imageUrl} alt={saved.name} className={cn(
                        "w-12 h-12 object-contain border",
                        isDark ? "bg-white/10 border-white/10" : "bg-slate-50 border-slate-100"
                      )} />
                      <div className="flex-1 min-w-0">
                        <h3 className={cn(
                          "text-[10px] font-black uppercase truncate",
                          isDark ? "text-white" : "text-slate-900"
                        )}>{saved.name}</h3>
                        <p className="text-[9px] text-slate-400 truncate">{saved.content}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <>
              <div className={cn(
                "px-8 py-3 -mx-8 -mt-8 mb-4 border-b",
                isDark ? "bg-white/5 border-white/10" : "bg-[#d7d7d7] border-slate-300"
              )}>
                <h2 className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em]",
                  isDark ? "text-white/60" : "text-slate-700"
                )}>Principais opções</h2>
              </div>

              <div className="space-y-4">
                <div className={cn(
                  "flex items-center gap-2 p-1 border rounded-none",
                  isDark ? "bg-white/5 border-white/10" : "bg-slate-100 border-slate-200"
                )}>
                  <button
                    onClick={() => setSettings({ mode: 'single' })}
                    className={cn(
                      "flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all rounded-none",
                      settings.mode === 'single' 
                        ? (isDark ? "bg-white text-black" : "bg-white text-slate-900 shadow-sm") 
                        : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    Individual
                  </button>
                  <button
                    onClick={() => setSettings({ mode: 'multi' })}
                    className={cn(
                      "flex-1 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all rounded-none",
                      settings.mode === 'multi' 
                        ? (isDark ? "bg-white text-black" : "bg-white text-slate-900 shadow-sm") 
                        : "text-slate-400 hover:text-slate-600"
                    )}
                  >
                    Múltiplos (3)
                  </button>
                </div>

                {settings.mode === 'single' ? (
                  <>
                    <div className="flex items-center gap-4">
                      <label className={cn(
                        "text-[10px] font-bold uppercase tracking-wider shrink-0 w-32 whitespace-nowrap",
                        isDark ? "text-white/40" : "text-slate-400"
                      )}>Dados</label>
                      <Input 
                        placeholder="Digite a URL ou texto..." 
                        value={content}
                        onChange={(e) => setSettings({ content: e.target.value })}
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <label className={cn(
                        "text-[10px] font-bold uppercase tracking-wider shrink-0 w-32 whitespace-nowrap",
                        isDark ? "text-white/40" : "text-black"
                      )}>Arquivo de imagem</label>
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <button 
                          onClick={() => fileInputRef.current?.click()}
                          className={cn(
                            "px-3 py-1.5 border text-[10px] transition-colors rounded-none shrink-0",
                            isDark 
                              ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
                              : "bg-[#efefef] border-[#767676] text-black hover:bg-[#e5e5e5]"
                          )}
                        >
                          Escolher Arquivo
                        </button>
                        <span className={cn(
                          "text-[10px] truncate",
                          isDark ? "text-white/60" : "text-black"
                        )}>
                          {fileName || "Nenhum arquivo escolhido"}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6 pt-2">
                    {settings.multiQr.map((item, index) => {
                      const sectionId = `qr${index}`;
                      const isExpanded = expandedSections[sectionId];

                      return (
                        <div key={index} className={cn(
                          "border rounded-none relative transition-all duration-300",
                          isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
                        )}>
                          <button 
                            onClick={() => toggleSection(sectionId)}
                            className={cn(
                              "w-full flex items-center justify-between px-4 py-2.5 text-[9px] font-black uppercase tracking-wider transition-colors",
                              isDark ? "hover:bg-white/5 text-white/60" : "hover:bg-slate-100 text-slate-500"
                            )}
                          >
                            <span className="flex items-center gap-2">
                              <QrCode className="w-3 h-3" />
                              QR Code {index + 1}
                              {item.title && <span className="opacity-40 italic lowercase font-medium">({item.title})</span>}
                            </span>
                            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>

                          {isExpanded && (
                            <div className="p-4 pt-0 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                              <div className="space-y-2">
                                <label className="text-[9px] font-bold uppercase text-slate-400">Título do QR</label>
                                <Input 
                                  placeholder="Ex: Site Oficial" 
                                  value={item.title}
                                  onChange={(e) => {
                                    const newMulti = [...settings.multiQr];
                                    newMulti[index].title = e.target.value;
                                    setSettings({ multiQr: newMulti });
                                  }}
                                />
                              </div>
                              <div className="space-y-2">
                                <label className="text-[9px] font-bold uppercase text-slate-400">Link / Dados</label>
                                <Input 
                                  placeholder="https://..." 
                                  value={item.content}
                                  onChange={(e) => {
                                    const newMulti = [...settings.multiQr];
                                    newMulti[index].content = e.target.value;
                                    setSettings({ multiQr: newMulti });
                                  }}
                                />
                              </div>
                              <div className="flex items-center gap-2 pt-1">
                                <input 
                                  type="checkbox"
                                  id={`brand-colors-${index}`}
                                  checked={item.useBrandColors}
                                  onChange={(e) => {
                                    const newMulti = [...settings.multiQr];
                                    newMulti[index].useBrandColors = e.target.checked;
                                    setSettings({ multiQr: newMulti });
                                  }}
                                  className={cn(
                                    "w-3 h-3 rounded-none border-slate-300 focus:ring-slate-900",
                                    isDark ? "bg-white/10 border-white/20" : "text-slate-900"
                                  )}
                                />
                                <label htmlFor={`brand-colors-${index}`} className="text-[9px] font-bold uppercase text-slate-500 cursor-pointer">
                                  Aplicar cores da plataforma
                                </label>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    <div className={cn(
                      "border rounded-none relative mt-4 transition-all duration-300",
                      isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
                    )}>
                      <button 
                        onClick={() => toggleSection('plate')}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-2.5 text-[9px] font-black uppercase tracking-wider transition-colors",
                          isDark ? "hover:bg-white/5 text-white/60" : "hover:bg-slate-100 text-slate-500"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <ImageIcon className="w-3 h-3" />
                          Textos da Placa
                        </span>
                        {expandedSections.plate ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>

                      {expandedSections.plate && (
                        <div className="p-4 pt-0 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase text-slate-400">Título Principal</label>
                            <Input 
                              placeholder="Ex: Premium Connect" 
                              value={settings.multiTitle}
                              onChange={(e) => setSettings({ multiTitle: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[9px] font-bold uppercase text-slate-400">Subtítulo</label>
                            <Input 
                              placeholder="Ex: Digital Business Card" 
                              value={settings.multiSubtitle}
                              onChange={(e) => setSettings({ multiSubtitle: e.target.value })}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                />
              </div>

              <Section title="Estilo" icon={<Palette className="w-4 h-4" />}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className={cn(
                        "text-[10px] font-bold uppercase tracking-wider ml-1",
                        isDark ? "text-white/40" : "text-slate-400"
                      )}>Cor dos Pontos</label>
                      <div className={cn(
                        "flex items-center gap-2 p-1 border rounded-none",
                        isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
                      )}>
                        <input 
                          type="color" 
                          value={settings.dotsColor}
                          onChange={(e) => setSettings({ dotsColor: e.target.value })}
                          className="w-8 h-8 rounded-none cursor-pointer border-none bg-transparent"
                        />
                        <span className={cn(
                          "text-xs font-mono uppercase",
                          isDark ? "text-white/60" : "text-slate-600"
                        )}>{settings.dotsColor}</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className={cn(
                        "text-[10px] font-bold uppercase tracking-wider ml-1",
                        isDark ? "text-white/40" : "text-slate-400"
                      )}>Cor do Fundo</label>
                      <div className={cn(
                        "flex items-center gap-2 p-1 border rounded-none",
                        isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
                      )}>
                        <input 
                          type="color" 
                          value={settings.backgroundColor}
                          onChange={(e) => setSettings({ backgroundColor: e.target.value })}
                          className="w-8 h-8 rounded-none cursor-pointer border-none bg-transparent"
                        />
                        <span className={cn(
                          "text-xs font-mono uppercase",
                          isDark ? "text-white/60" : "text-slate-600"
                        )}>{settings.backgroundColor}</span>
                      </div>
                    </div>
                  </div>

                  {settings.mode === 'single' && (
                    <>
                      <div className="space-y-1.5">
                        <label className={cn(
                          "text-[10px] font-bold uppercase tracking-wider ml-1",
                          isDark ? "text-white/40" : "text-slate-400"
                        )}>Correção de Erro</label>
                        <div className="grid grid-cols-4 gap-2">
                          {(['L', 'M', 'Q', 'H'] as const).map((level) => (
                            <button
                              key={level}
                              onClick={() => setSettings({ errorCorrectionLevel: level })}
                              className={cn(
                                "py-2 text-[10px] font-bold uppercase rounded-none border transition-all",
                                settings.errorCorrectionLevel === level 
                                  ? (isDark ? "bg-white border-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20") 
                                  : (isDark ? "bg-transparent border-white/10 text-white/40 hover:border-white/30" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300")
                              )}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className={cn(
                          "text-[10px] font-bold uppercase tracking-wider ml-1",
                          isDark ? "text-white/40" : "text-slate-400"
                        )}>Formato dos Pontos</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'square', label: 'Square' },
                            { id: 'classy', label: 'Gapped' },
                            { id: 'dots', label: 'Circle' },
                            { id: 'rounded', label: 'Rounded' }
                          ].map((item) => (
                            <button
                              key={item.id}
                              onClick={() => setSettings({ dotsType: item.id as any })}
                              className={cn(
                                "py-2 text-[10px] font-bold uppercase rounded-none border transition-all",
                                settings.dotsType === item.id 
                                  ? (isDark ? "bg-white border-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20") 
                                  : (isDark ? "bg-transparent border-white/10 text-white/40 hover:border-white/30" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300")
                              )}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className={cn(
                          "text-[10px] font-bold uppercase tracking-wider ml-1",
                          isDark ? "text-white/40" : "text-slate-400"
                        )}>Estilo dos Cantos</label>
                        <div className="grid grid-cols-3 gap-2">
                          {(['square', 'dot', 'extra-rounded'] as const).map((type) => (
                            <button
                              key={type}
                              onClick={() => setSettings({ cornerSquareType: type, cornerDotType: type === 'extra-rounded' ? 'square' : type as any })}
                              className={cn(
                                "py-2 text-[10px] font-bold uppercase rounded-none border transition-all",
                                settings.cornerSquareType === type 
                                  ? (isDark ? "bg-white border-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/20") 
                                  : (isDark ? "bg-transparent border-white/10 text-white/40 hover:border-white/30" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300")
                              )}
                            >
                              {type.replace('-', ' ')}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Section>

              {settings.mode === 'single' && (
                <Section title="Configurações" icon={<Settings2 className="w-4 h-4" />}>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Slider 
                        label="Tamanho" 
                        value={settings.width} 
                        min={100} 
                        max={1000} 
                        step={10} 
                        suffix="px"
                        onChange={(e) => setSettings({ width: Number(e.target.value), height: Number(e.target.value) })}
                      />
                      <Slider 
                        label="Margem" 
                        value={settings.margin} 
                        min={0} 
                        max={100} 
                        suffix="px"
                        onChange={(e) => setSettings({ margin: Number(e.target.value) })}
                      />
                      {logo && (
                        <>
                          <Slider 
                            label="Tamanho da Logo" 
                            value={settings.logoSize * 100} 
                            min={5} 
                            max={20} // Rule: Max 20% of total area
                            suffix="%"
                            onChange={(e) => setSettings({ logoSize: Number(e.target.value) / 100 })}
                          />
                          <Slider 
                            label="Margem da Logo" 
                            value={settings.logoMargin} 
                            min={0} 
                            max={50} 
                            suffix="px"
                            onChange={(e) => setSettings({ logoMargin: Number(e.target.value) })}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </Section>
              )}

              <div className={cn(
                "pt-8 border-t",
                isDark ? "border-white/10" : "border-slate-100"
              )}>
                <button 
                  onClick={() => settings.resetSettings()}
                  className={cn(
                    "w-full py-3 text-[10px] font-bold uppercase tracking-widest transition-all rounded-none",
                    isDark ? "text-white/30 hover:text-red-400 hover:bg-red-400/10" : "text-slate-400 hover:text-red-500 hover:bg-red-50"
                  )}
                >
                  Resetar Configurações
                </button>
              </div>
            </>
          )}
        </div>
      }
    >
      <div className={cn(
        "flex flex-col items-center gap-8 w-full transition-all duration-500",
        settings.mode === 'multi' ? "max-w-2xl" : "max-w-md"
      )}>
        <div className="text-center space-y-2 mb-4">
          <h2 className={cn(
            "text-2xl md:text-3xl font-black uppercase tracking-tighter transition-colors",
            isDark ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" : "text-slate-900"
          )}>{welcomeMessage}</h2>
          <p className={cn(
            "text-[10px] font-bold uppercase tracking-[0.3em]",
            isDark ? "text-white/40" : "text-slate-400"
          )}>Design & Tecnologia</p>
        </div>

        <div className={cn(
          "w-full rounded-none flex items-center justify-center relative group overflow-hidden transition-all duration-700",
          settings.mode === 'multi' ? "p-4 min-h-[400px]" : "aspect-square p-12",
          isDark 
            ? "bg-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_80px_-20px_rgba(255,255,255,0.2)]" 
            : "bg-white shadow-2xl shadow-slate-200/60 border border-slate-100"
        )}>
          {/* Futuristic Corner Accents */}
          {isDark && (
            <>
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/40" />
            </>
          )}
          <QrPreview />
        </div>

        <div className="space-y-4 w-full">
          {user && !showHistory && (
            <div className={cn(
              "flex gap-2 p-4 border rounded-none transition-all",
              isDark ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
            )}>
              <Input 
                placeholder="Nome para salvar..." 
                value={qrName}
                onChange={(e) => setQrName(e.target.value)}
                className="flex-1"
              />
              <button 
                onClick={handleSaveQr}
                disabled={isSaving}
                className={cn(
                  "px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-none flex items-center gap-2 disabled:opacity-50",
                  isDark ? "bg-white text-black hover:bg-slate-200" : "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                {isSaving ? "Salvando..." : (
                  <>
                    <Save className="w-4 h-4" />
                    Salvar
                  </>
                )}
              </button>
            </div>
          )}

          <div className="flex gap-3 w-full">
            <button 
              onClick={() => handleDownload('png')}
              className={cn(
                "flex-1 py-4 rounded-none font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2",
                isDark 
                  ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]" 
                  : "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800"
              )}
            >
              <Download className="w-5 h-5" />
              PNG
            </button>
            <button 
              onClick={() => handleDownload('webp')}
              className={cn(
                "px-4 py-4 border rounded-none font-bold transition-all active:scale-[0.98]",
                isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"
              )}
            >
              WebP
            </button>
            <button 
              onClick={() => handleDownload('svg')}
              className={cn(
                "px-4 py-4 border rounded-none font-bold transition-all active:scale-[0.98]",
                isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"
              )}
            >
              SVG
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}



