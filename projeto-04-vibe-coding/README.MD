<div align="center">

# ⬛ Projeto 04 — IA Generativa com Copilot e OpenAI

**Gerador de QR Code moderno e altamente customizável**
com preview em tempo real, integração com IA generativa e armazenamento em nuvem.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?logo=firebase&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai&logoColor=white)
![Copilot](https://img.shields.io/badge/GitHub-Copilot-black?logo=githubcopilot&logoColor=white)
![Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?logo=google&logoColor=white)

</div>

---

# 🔗 Repositório do Projeto

Acesse o projeto completo:

[Projeto 04 — IA Generativa com Copilot e OpenAI](https://github.com/CauanDev00/portfolio-cauan-lima-de-souza-silva/tree/main/projeto-04-ia-generativa-com-copilot-e-openai)

---

# 📌 Sobre o Projeto

O **ABNGrid** é uma aplicação web desenvolvida com **React + TypeScript** voltada para geração avançada de QR Codes personalizados.

O projeto utiliza conceitos de **IA Generativa**, integração com APIs modernas e técnicas de **Prompt Engineering** para acelerar desenvolvimento, geração de componentes e automação de tarefas de front-end.

A aplicação permite:

- geração dinâmica de QR Codes
- customização visual avançada
- preview em tempo real
- autenticação de usuários
- armazenamento em nuvem
- integração com IA para auxílio no desenvolvimento

---

# 🧠 Estratégia de IA Generativa Utilizada

O desenvolvimento utilizou ferramentas de IA como:

- **GitHub Copilot**
- **OpenAI**
- **Gemini AI**

A estratégia aplicada envolveu diferentes abordagens de Prompt Engineering para geração de código e otimização de componentes React.

---

# ⚙️ Técnicas de Prompt Engineering Aplicadas

## 🔹 Zero-Shot Prompting

Utilizado para gerar componentes simples sem exemplos prévios.

### Exemplo:

```txt
Crie um componente React responsivo para customização de QR Code
utilizando TailwindCSS e TypeScript.
```

### Resultado

- geração rápida de componentes
- redução do tempo de desenvolvimento
- código inicial funcional

---

## 🔹 Few-Shot Prompting

Aplicado para manter padronização visual e estrutural entre componentes.

A IA recebeu exemplos prévios da arquitetura utilizada antes de gerar novos elementos.

### Benefícios observados

- maior consistência visual
- redução de retrabalho
- melhor reutilização de padrões

---

## 🔹 Context Window

Os modelos foram utilizados considerando limite de contexto para preservar:

- coerência estrutural
- padronização do código
- reutilização de componentes
- continuidade semântica

---

## 🔹 Controle de Temperatura

Prompts foram adaptados para diferentes níveis de criatividade.

### Temperatura baixa

Utilizada para:

- geração previsível
- código técnico
- componentes críticos

### Temperatura alta

Utilizada para:

- criatividade visual
- sugestões de UI/UX
- experimentação estética

---

# 📊 Resultados Obtidos

## Métricas observadas durante o desenvolvimento

- ✔ **Redução aproximada de 50% no tempo de criação de componentes**
- ✔ **Aumento da produtividade no front-end**
- ✔ **Menor incidência de erros repetitivos**
- ✔ **Maior velocidade na prototipagem**
- ✔ **Melhoria na consistência visual**

---

# 🖼 Evidência Visual

## Figura 1 — Prompt utilizado e resposta gerada pela IA

![Figura 1](./assets/prompt-openai-copilot.png)

---

# ✨ Funcionalidades

- 🎨 Customização completa de QR Code
- 🖼️ Upload de logo personalizada
- 👁️ Preview em tempo real
- 💾 Salvamento em nuvem
- 🔐 Autenticação via Firebase
- ☁️ Upload de imagens no Firebase Storage
- 🤖 Integração com IA generativa
- 📱 Interface responsiva
- ⚡ Atualização dinâmica instantânea

---

# 🚀 Arquitetura Tecnológica

| Categoria | Tecnologia |
|---|---|
| Front-end | React 19 |
| Linguagem | TypeScript |
| Build Tool | Vite |
| Estilização | TailwindCSS |
| Backend | Firebase |
| IA Generativa | OpenAI / Gemini |
| Assistente IA | GitHub Copilot |
| Gerador QR | qr-code-styling |
| Estado Global | Zustand |

---

# 🏗️ Estrutura do Projeto

```txt
abngrid/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── stores/
│   └── main.tsx
│
├── firestore.rules
├── firebase.json
├── vite.config.ts
├── package.json
├── .env.example
└── README.md
```

---

# 🔒 Segurança

O projeto utiliza práticas de segurança voltadas para aplicações com integração em nuvem.

## Medidas implementadas

- isolamento de usuários no Firestore
- autenticação via Firebase Auth
- proteção de variáveis sensíveis
- uso de `.env.local`
- separação entre ambiente local e produção

---

# ⚠️ Uso Seguro de API Keys

As chaves de API não devem ser expostas em repositórios públicos.

O projeto utiliza variáveis de ambiente para proteger credenciais sensíveis.

---

# 📁 Arquivo `.env.local`

```env
OPENAI_API_KEY="sua_chave_aqui"
GEMINI_API_KEY="sua_chave_aqui"
APP_URL="http://localhost:3000"
```

> ⚠️ Nunca publique suas chaves reais no GitHub.

---

# ⚙️ Como Executar o Projeto

## Pré-requisitos

- Node.js 18+
- Conta Firebase
- Chave OpenAI
- Chave Gemini
- Git instalado

---

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/CauanDev00/portfolio-cauan-lima-de-souza-silva
```

---

## 2️⃣ Entrar na pasta do projeto

```bash
cd projeto-04-ia-generativa-com-copilot-e-openai
```

---

## 3️⃣ Instalar dependências

```bash
npm install
```

---

## 4️⃣ Configurar variáveis de ambiente

```bash
cp .env.example .env.local
```

---

## 5️⃣ Inserir suas chaves de API

Configure:

- OPENAI_API_KEY
- GEMINI_API_KEY

---

## 6️⃣ Executar aplicação

```bash
npm run dev
```

Aplicação disponível em:

```txt
http://localhost:3000
```

---

# 🔧 Scripts Disponíveis

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run clean
```

---

# 🧪 Comparação entre Modelos Utilizados

| Modelo | Uso Principal | Motivo |
|---|---|---|
| OpenAI GPT-4o | Geração técnica de código | Melhor coerência estrutural |
| GitHub Copilot | Autocomplete e produtividade | Velocidade no desenvolvimento |
| Gemini AI | Experimentação criativa | Sugestões visuais e ideação |

---

# 💡 Aprendizados Obtidos

- IA acelera significativamente desenvolvimento front-end
- Prompt Engineering impacta diretamente qualidade do código
- Context window influencia coerência estrutural
- Temperatura altera previsibilidade das respostas
- Few-shot prompting melhora consistência visual
- Copilot aumenta produtividade em tarefas repetitivas

---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos e experimentação em IA Generativa.

---

# 👨‍💻 Autor

Desenvolvido por **Cauan Lima de Souza Silva**

---

# 🔗 Navegação

[Voltar ao início](https://github.com/CauanDev00/portfolio-cauan-lima-de-souza-silva)
