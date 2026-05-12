<div align="center">

# ⬛ Qr Code Styling

**Gerador de QR Code moderno e altamente customizável**
com preview em tempo real, suporte a logos e diferentes estilos de pontos e cantos.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## 📌 Sobre o Projeto

**ABNGrid** é uma aplicação web construída com React + TypeScript que permite gerar QR Codes personalizados com preview em tempo real. O usuário pode customizar cores, estilos de pontos, cantos, inserir logos e salvar seus QR Codes na nuvem via Firebase.

Desenvolvido e hospedado no **Google AI Studio** com integração à API **Gemini**.

🔗 [Ver no AI Studio](https://ai.studio/apps/047ceef1-bd45-4354-916f-fa00c471cbbd)

---

## ✨ Funcionalidades

- 🎨 Customização completa de estilo (pontos, cantos, cores)
- 🖼️ Suporte a logo centralizado no QR Code
- 👁️ Preview em tempo real durante a edição
- 💾 Salvar QR Codes na conta do usuário (Firebase Firestore)
- 🔐 Autenticação via Firebase Auth
- ☁️ Armazenamento de imagens via Firebase Storage
- 🤖 Integração com Gemini AI (`@google/genai`)

---

## 🚀 Rodando Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18+)
- Conta no [Firebase](https://firebase.google.com/)
- Chave de API do [Gemini](https://aistudio.google.com/app/apikey)

### Instalação

```bash
# 1. Clone o repositório
git clone <seu-repositorio>
cd abngrid

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
```

### Variáveis de Ambiente

Edite o arquivo `.env.local` com suas credenciais:

```env
# Obrigatória — chave da API Gemini
GEMINI_API_KEY="sua_chave_aqui"

# URL da aplicação (preenchida automaticamente no AI Studio)
APP_URL="http://localhost:3000"
```

### Executar

```bash
npm run dev
# Aplicação disponível em http://localhost:3000
```

---

## 🏗️ Stack Tecnológica

| Categoria | Tecnologia | Versão |
|---|---|---|
| UI | React | 19 |
| Linguagem | TypeScript | 5.8 |
| Build | Vite | 6 |
| Estilo | Tailwind CSS | 4 |
| Animações | Motion | 12 |
| Ícones | Lucide React | 0.546 |
| QR Code | qr-code-styling | 1.9 |
| Estado global | Zustand | 5 |
| Backend | Firebase | 12 |
| IA | @google/genai | 1.29 |

---

## 🗄️ Estrutura do Banco de Dados (Firestore)

```
firestore/
├── users/
│   └── {userId}/               ← Perfil do usuário
│       ├── uid
│       ├── email
│       ├── displayName
│       ├── photoURL
│       ├── createdAt
│       ├── lastLogin
│       └── qr_codes/
│           └── {qrId}/         ← QR Code salvo
│               ├── id
│               ├── userId
│               ├── name
│               ├── content
│               ├── settings    ← Objeto com estilos do QR
│               ├── createdAt
│               └── imageUrl    ← URL no Firebase Storage
```

### Regras de Segurança

- Cada usuário **só acessa seus próprios dados** (`isOwner`)
- Validação de campos obrigatórios no Firestore Rules
- Conteúdo do QR limitado a **2048 caracteres**
- Nome do QR limitado a **100 caracteres**
- Perfis de usuário **não podem ser deletados**
- QR Codes podem ser criados, lidos, atualizados e deletados pelo dono

---

## 📁 Estrutura do Projeto

```
abngrid/
├── src/
│   └── main.tsx              ← Entrada da aplicação
├── index.html                ← HTML base
├── vite.config.ts            ← Configuração do Vite + aliases
├── tsconfig.json             ← Configuração TypeScript
├── package.json              ← Dependências e scripts
├── firestore.rules           ← Regras de segurança Firestore
├── firebase-blueprint.json   ← Schema das entidades Firebase
├── firebase-applet-config.json ← Configuração do projeto Firebase
├── metadata.json             ← Metadados do app (AI Studio)
├── .env.example              ← Exemplo de variáveis de ambiente
└── .gitignore
```

---

## 🔧 Scripts Disponíveis

```bash
npm run dev       # Servidor de desenvolvimento (porta 3000)
npm run build     # Build de produção
npm run preview   # Preview do build
npm run lint      # Verificação de tipos TypeScript
npm run clean     # Remove a pasta dist
```

---

## 🔒 Segurança

- Chaves de API nunca devem ser comitadas — use `.env.local` (já incluído no `.gitignore`)
- As regras do Firestore garantem isolamento total entre usuários
- O `firebase-applet-config.json` contém configurações públicas do Firebase (sem dados sensíveis de servidor)

> ⚠️ **Nunca exponha** sua `GEMINI_API_KEY` em repositórios públicos.

---

## 📄 Licença

Este projeto foi gerado e hospedado via **Google AI Studio**.

---

*ABNGrid · QR Code Generator · React + Firebase + Gemini AI*
