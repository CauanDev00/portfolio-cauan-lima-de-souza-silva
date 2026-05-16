# 🔧 Gestão Low-Code com Bubble.io — Taskly

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Bubble.io-blue?style=for-the-badge)
![Type](https://img.shields.io/badge/Type-Low--Code-purple?style=for-the-badge)

## 📝 Descrição do Projeto

O **Taskly** é uma aplicação web de gerenciamento de tarefas desenvolvida com **Bubble.io**, utilizando a IA da plataforma como acelerador de desenvolvimento. O projeto aplica boas práticas de engenharia de software: modelagem prévia de dados, regras de privacidade (Privacy by Design), Option Sets, organização de workflows e documentação in-platform.

Desenvolvido como parte da disciplina de **Engenharia de Prompt e Aplicações em IA**, o projeto demonstra na prática que a IA gera apenas um rascunho — a engenharia real começa onde a IA termina.

🔗 **Acesse o app:** [anajuliafreitas0407.bubbleapps.io/version-test](https://anajuliafreitas0407.bubbleapps.io/version-test/)

---

## 🛠️ Tecnologias Utilizadas

* **Plataforma:** Bubble.io (Plano Spark)
* **IA utilizada:** Bubble AI Agent
* **Banco de dados:** Bubble Data (NoSQL Cloud)
* **Infraestrutura:** Bubble Hosting (HTTPS gratuito)

---

## 🗄️ Modelagem do Banco de Dados

A estrutura foi planejada **antes** da construção no Bubble, evitando retrabalho e garantindo escalabilidade.

### Data Types

| Tabela | Campos | Tipos |
| :--- | :--- | :--- |
| **User** | email, name, password_hash | text |
| **Project** | name, description, owner, created_by | text, User |
| **Task** | title, description, due_date, status, priority, project, created_by | text, date, Option Sets, Project, User |

### Option Sets (sem hardcode)

| Option Set | Opções |
| :--- | :--- |
| **Status_Tarefa** | A_Fazer, Em_Andamento, Concluida |
| **Prioridade_Tarefa** | Baixa, Media, Alta |

> 📎 Diagrama ERD completo: [Gemini_Generated_Image_eu0933eu0933eu09.pdf](./Gemini_Generated_Image_eu0933eu0933eu09.pdf)

---

## 🔐 Privacidade e Segurança (Privacy by Design)

Cada usuário enxerga **apenas os próprios dados** — nenhum usuário acessa projetos ou tarefas de outro.

**Regras aplicadas:**

* **Tabela Project:** condição `O usuário atual é o criador deste projeto` → todos os campos visíveis apenas ao criador
* **Tabela Task:** condição `O usuário atual é o criador desta tarefa` → todos os campos visíveis apenas ao criador
* **Todos os outros:** sem permissões (campos desmarcados por padrão)

> 📎 Prints das regras: [Screenshot_13.pdf](./Screenshot_13.pdf) | [Screenshot_15.pdf](./Screenshot_15.pdf)

---

## ⚙️ Workflows e Governança

Os workflows foram organizados com cores e comentados com Notes para facilitar manutenção:

| Cor | Significado | Exemplo |
| :--- | :--- | :--- |
| 🟢 Verde | Sucesso / Navegação | Criar projeto, abrir popup |
| 🔴 Vermelho | Cancelamento / Exclusão | Fechar popup sem salvar |

Todos os 4 workflows possuem **Notes** explicando sua lógica:
1. `Button dashboard-new-project-btn is clicked` — Abre o popup para criar novo projeto
2. `Button new-project-close-btn is clicked` — Fecha o popup sem salvar
3. `Button new-project-cancel-btn is clicked` — Cancela a criação e fecha o popup
4. `Button new-project-submit-btn is clicked` — Salva novo projeto e fecha o popup

> 📎 Print dos workflows: [Screenshot_22.pdf](./Screenshot_22.pdf)

---

## 🚪 Estratégia de Saída

O Bubble retém o código-fonte, o que representa um risco de **Vendor Lock-in**. A estratégia de saída adotada:

1. **Exportação via Data API** — habilitando `Settings > API > Enable Data API`, é possível exportar todas as tabelas (User, Project, Task) em formato JSON
2. **Migração para stack tradicional** — os dados exportados podem ser importados em PostgreSQL e a lógica reconstruída em React + Node.js
3. **Documentação interna** — todos os workflows estão comentados com Notes, facilitando a tradução para código por qualquer desenvolvedor

> 📎 Documento completo: [estrategia_saida_bubble.pdf](./estrategia_saida_bubble.pdf)

---

## 🔧 Processo de Criação

1. **Planejamento** — modelagem do banco de dados fora do Bubble (ERD com User, Project, Task e Option Sets)
2. **Geração com IA** — prompt enviado ao Bubble AI para gerar o blueprint do app
3. **Auditoria** — identificação e correção de 23 erros gerados automaticamente pela IA
4. **Segurança** — configuração das regras de Privacy by Design para isolamento de dados
5. **Governança** — organização dos workflows com cores e Notes
6. **Publicação** — deploy e teste de isolamento entre usuários

> 💡 Os erros remanescentes nos stat cards do dashboard são falsos positivos gerados pela IA — não afetam o funcionamento do cadastro e isolamento de dados, demonstrando na prática que ferramentas de IA cometem erros e exigem atuação humana para correção.

---

## 📎 Arquivos do Projeto

| Arquivo | Descrição |
| :--- | :--- |
| [ENTREGA_TASKLY.pdf](./ENTREGA_TASKLY.pdf) | Documento completo de entrega |
| [estrategia_saida_bubble.pdf](./estrategia_saida_bubble.pdf) | Estratégia de saída e migração |
| [Diagrama ERD](./Gemini_Generated_Image_eu0933eu0933eu09.pdf) | Diagrama do banco de dados |
| [Screenshot_13.pdf](./Screenshot_13.pdf) | Privacy — tabela Project |
| [Screenshot_15.pdf](./Screenshot_15.pdf) | Privacy — tabela Task |
| [Screenshot_22.pdf](./Screenshot_22.pdf) | Workflows organizados |
| [Screenshot_29.pdf](./Screenshot_29.pdf) | Option Sets |
| [Screenshot_35.pdf](./Screenshot_35.pdf) | Interface do app |
| [links-e-entrega.md](./links-e-entrega.md) | Links de entrega |

---

Desenvolvido por [Ana Julia Oliveira de Freitas](https://github.com/1Naju)
