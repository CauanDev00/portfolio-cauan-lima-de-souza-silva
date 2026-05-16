# 📖 Capítulo Aberto

> Rede social literária com videochamadas ao vivo para criadores de conteúdo e leitores.

---

## 🎯 Sobre a Atividade

Atividade prática da disciplina de **Engenharia de Prompts e Aplicações de IA**, com objetivo de integrar a **Manus AI** com o framework open-source **Jitsi Meet** para criar um aplicativo Android funcional e criativo.

---

## 💡 Problema que o App Resolve

Criadores de conteúdo literário (booktubers, bookstagrammers) não possuem um espaço integrado para realizar sessões ao vivo de resenha **exclusivas para seus membros**, organizar maratonas coletivas e registrar a jornada de leitura — tudo em um único lugar.

O **Capítulo Aberto** resolve isso unindo o melhor do **Skoob** e do **Maratona.app** com videochamadas via **Jitsi Meet SDK**.

---

## 🧠 Processo de Engenharia de Prompts

### Referências analisadas
- **Skoob** — estante virtual, resenhas com estrelas, feed social, aviso de spoiler, seção de Booktubers
- **Maratona.app** — maratonas literárias, registro de emoções, sala de foco com temporizador, Atts de progresso

### Prompt utilizado na Manus AI

```
Crie um aplicativo Android chamado Capítulo Aberto, uma rede social literária
com videochamadas ao vivo para criadores de conteúdo literário e seus leitores.
O app combina funcionalidades inspiradas no Skoob e no Maratona.app com
integração de videoconferência via Jitsi Meet SDK.

Autenticação e Perfil:
- Cadastro e login por e-mail e senha
- Perfil público com foto, bio e estante virtual
- Sistema de seguir perfis e solicitar entrada em canais

Estante Virtual (inspirada no Skoob):
- Organizar livros por status: Lido, Lendo, Quero Ler e Favoritos
- Avaliar livros com nota de 1 a 5 estrelas
- Publicar resenhas com opção de marcar spoiler
- Meta de leitura anual com contador de progresso

Leituras Coletivas (inspiradas no Maratona.app):
- Criar maratonas literárias com livro, período e limite de participantes
- Postar "Atts" de progresso com página atual e emoção vinculada
- Sala de Foco com temporizador, sons ambiente relaxantes e resumo
  estatístico ao finalizar

Videochamada — Canal do Criador (diferencial do app):
- Criação de canais literários com nome, descrição e livro em pauta
- Sistema de membros aprovados pelo criador
- Live exclusiva para membros via Jitsi Meet Android SDK
- Após a live, publicação de resenha oficial vinculada ao livro

Feed Principal:
- Lives em andamento dos canais seguidos
- Atts e resenhas recentes
- Banner de maratonas abertas

Visual:
- Tons de creme, terracota e verde-musgo
- Tipografia serifada nos títulos

Stack técnica: Kotlin, Jitsi Meet Android SDK, Firebase (Auth + Firestore + FCM)
```

### Funcionalidade adicionada via sugestão da Manus AI
- **Sala de Foco aprimorada** — sons ambiente relaxantes, controle de volume, modal de estatísticas e contador de sessões ao finalizar o cronômetro

---

## 🗺️ Arquitetura da Informação e Jornada do Usuário

O principal desafio do projeto foi organizar **três perfis de usuário distintos** (leitor casual, maratonista e criador de conteúdo) em uma única interface sem sobrecarregar a navegação.

### Decisões de Design

| Desafio | Decisão Tomada | Justificativa |
| :--- | :--- | :--- |
| **Hierarquia de conteúdo** | Feed principal prioriza lives em andamento no topo | Conteúdo ao vivo tem maior urgência e engajamento |
| **Acesso ao Canal do Criador** | Sistema de aprovação de membros antes do acesso à live | Protege o criador e aumenta o valor percebido da exclusividade |
| **Complexidade da Estante** | 4 status fixos (Lido, Lendo, Quero Ler, Favoritos) | Reduz fricção cognitiva — o leitor classifica em segundos |
| **Sala de Foco** | Modal de estatísticas só aparece ao finalizar o timer | Não interrompe o estado de foco durante a sessão |
| **Proteção de spoiler** | Toggle explícito na publicação da resenha | Respeita a experiência de outros leitores sem censurar o conteúdo |

### Fluxo Principal do Usuário

```
Cadastro → Perfil → Estante Virtual
                          ↓
                    Seguir Criadores
                          ↓
              Feed → Live em andamento → Entrar no Canal
                          ↓
                  Maratona Literária → Sala de Foco → Att de progresso
                          ↓
                    Resenha Final
```

> A navegação foi projetada para que qualquer perfil de usuário consiga completar sua jornada principal em **no máximo 3 toques** a partir do feed.

---

## ✨ Funcionalidades do App

- Estante virtual com status de leitura e avaliação por estrelas
- Resenhas com proteção de spoiler
- Meta de leitura anual
- Maratonas literárias coletivas
- Atts de progresso com registro de emoção
- Sala de Foco com sons ambiente e estatísticas
- Canal do criador com lives exclusivas via Jitsi Meet
- Feed com lives, resenhas e maratonas

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|---|---|
| Kotlin | Linguagem principal do app Android |
| Jitsi Meet Android SDK | Motor de videochamada |
| Firebase Authentication | Login e cadastro |
| Firebase Firestore | Banco de dados |
| Firebase Cloud Messaging | Notificações push |
| Manus AI | Geração e estruturação do código |

---

## 🚀 Instruções de Instalação

### Pré-requisitos
- Android Studio Hedgehog ou superior
- JDK 17
- Conta no Firebase (gratuita)
- Dispositivo ou emulador com Android 8.0 (API 26) ou superior

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/1Naju/portfolio-ana-julia-oliveira-de-freitas.git
cd portfolio-ana-julia-oliveira-de-freitas/aula-08-capitulo-aberto
```

**2. Configure o Firebase**
- Acesse [console.firebase.google.com](https://console.firebase.google.com)
- Crie um novo projeto chamado `capitulo-aberto`
- Adicione um app Android com o pacote `com.capitulo.aberto`
- Baixe o arquivo `google-services.json` e cole na pasta `/app`

**3. Abra no Android Studio**
```
File > Open > selecione a pasta do projeto
```

**4. Sincronize o Gradle**
```
Build > Sync Project with Gradle Files
```

**5. Execute o app**
```
Run > Run 'app' (Shift + F10)
```

---

## 📱 Preview

🔗 **Link de pré-visualização (Manus AI):** [Clique aqui para visualizar o app](https://manus.im/app-preview/KoyYrBwc4QQ7T7mSABmK6e?sessionId=zz70hOFoRoDtxGjhYMydbG)

<img width="1365" height="626" alt="manusqrcode" src="https://github.com/user-attachments/assets/7a4a36d7-8800-403a-9d80-251db9d7c950" />
