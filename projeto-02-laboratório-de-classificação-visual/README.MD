# 🤖 Viés em IA — Classificação de Tênis Masculino vs Feminino

> Estudo de caso prático sobre como algoritmos de **Machine Learning** podem desenvolver vieses a partir de datasets limitados, utilizando o **Teachable Machine** como ferramenta de experimentação e análise de classificação supervisionada.

![Badge](https://img.shields.io/badge/IA-Machine%20Learning-blue)
![Badge](https://img.shields.io/badge/Modelo-Classificação%20de%20Imagens-green)
![Badge](https://img.shields.io/badge/Ferramenta-Teachable%20Machine-orange)
![Badge](https://img.shields.io/badge/Status-Concluído-success)

---

# 📌 Visão Geral

Este projeto demonstra, de forma prática, como um modelo de classificação de imagens pode apresentar **viés algorítmico** ao identificar o gênero de um tênis utilizando aprendizado supervisionado.

O experimento foi desenvolvido utilizando o **Teachable Machine (Google)** e executado em tempo real através de webcam para avaliar o comportamento do modelo durante o processo de inferência.

O objetivo principal foi analisar como datasets limitados ou pouco diversos impactam diretamente a capacidade de generalização do modelo e sua acurácia.

---

# 🧠 Arquitetura do Experimento

O modelo foi desenvolvido utilizando abordagem de **classificação supervisionada de imagens**.

O conjunto de treinamento foi dividido em duas classes principais:

- `tenis homen`
- `tenis mulher`

Cada classe recebeu imagens rotuladas manualmente (**labels**) para permitir que o modelo aprendesse padrões visuais durante o treinamento.

A etapa de inferência foi realizada em tempo real utilizando webcam, permitindo avaliar:

- generalização do modelo
- reconhecimento em diferentes ângulos
- comportamento sob variações de iluminação
- impacto de fundos complexos

---

# ⚙️ Como o Viés Acontece

## 🔍 Mecanismo do Viés

O viés ocorre quando o algoritmo aprende padrões superficiais presentes em datasets limitados ou desbalanceados.

Durante o treinamento, o modelo recebeu exemplos predominantemente associados a determinadas características visuais.

Exemplo:

- tênis claros → `tenis mulher`
- tênis escuros → `tenis homen`

Com isso, o modelo passou a utilizar atributos irrelevantes como principal fator de decisão.

```txt
Dataset limitado
        ↓
Aprendizado de padrões incorretos
        ↓
Inferência enviesada
        ↓
Classificação errada
```

---

# 📊 Métricas Observadas

Durante os testes práticos, o modelo apresentou alta confiança em classificações incorretas.

## Resultados observados:

- ✔ 100% de confiança em classificação errada
- ✔ baixa capacidade de generalização
- ✔ sensibilidade elevada a cores e iluminação
- ✔ dificuldade em cenários fora do conjunto de treinamento

O experimento demonstrou que:

> **Alta confiança do modelo não representa necessariamente alta acurácia.**

---

# 🧹 Sanitização de Dados

Foi realizada uma curadoria parcial do dataset para reduzir ruídos visuais e minimizar enviesamentos durante o treinamento.

Entretanto, devido à baixa diversidade do conjunto de treinamento, o modelo apresentou dificuldades em cenários com:

- fundos complexos
- iluminação inconsistente
- ângulos diferentes
- cores semelhantes entre classes
- objetos parcialmente ocultos

Esses fatores impactaram diretamente a acurácia durante o processo de inferência.

---

# ⚠️ Consequência Social

O erro apresentado pelo modelo vai além de uma simples falha técnica.

Sistemas enviesados podem gerar impactos sociais relevantes.

| Impacto | Descrição |
|---|---|
| Classificação injusta | Produtos ou perfis atribuídos incorretamente |
| Constrangimento | Usuários podem ser mal identificados |
| Exclusão | Grupos sub-representados tendem a sofrer mais erros |
| Reforço de estereótipos | O modelo perpetua padrões sociais enviesados |

> **O algoritmo não é neutro — ele reproduz os padrões presentes nos dados utilizados no treinamento.**

---

# 🛠️ Ferramenta Utilizada

## Teachable Machine (Google)

| Item | Detalhe |
|---|---|
| Plataforma | https://teachablemachine.withgoogle.com |
| Tipo de modelo | Classificação de imagens |
| Técnica | Aprendizado supervisionado |
| Input | Webcam em tempo real |
| Dataset | Imagens rotuladas manualmente |
| Classes treinadas | `tenis homen` / `tenis mulher` |
| Processo analisado | Inferência em tempo real |

---

# 🧪 Resultado do Experimento

```txt
Input: Foto de tênis masculino (capturada ao vivo)

Output:

tenis homen   ░░░░░░░░░░░░░░░░  0%
tenis mulher  ████████████████ 100%  ← ERRO
```

O modelo apresentou confiança total em uma classificação incorreta, evidenciando limitação na capacidade de generalização do dataset utilizado.

---

# 🖼 Evidências Visuais

## Figura 1 — Modelo realizando inferência em tempo real

![Figura 1](./assets/modelo-classificando.png)

---

## Figura 2 — Matriz de confusão ou resultados dos testes

![Figura 2](./assets/matriz-confusao.png)

---

# ✅ Estratégia Mitigadora — Human-in-the-loop

A principal estratégia para redução de vieses é manter revisão humana contínua durante o desenvolvimento do modelo.

## 🔍 O que é Human-in-the-loop?

Abordagem em que pessoas participam ativamente da validação, revisão e correção dos dados e decisões da IA.

---

## ✔ Aplicação prática no experimento

```txt
1. Revisão do conjunto de treinamento
        ↓
2. Balanceamento das classes
        ↓
3. Inclusão de imagens mais diversas
        ↓
4. Testes em cenários variados
        ↓
5. Monitoramento contínuo do modelo
        ↓
6. Re-treinamento com dados corrigidos
```

---

# 💡 Lições Aprendidas

## 1️⃣ Dados definem o comportamento do modelo

> Um modelo é limitado pela qualidade e diversidade do dataset utilizado durante o treinamento.

---

## 2️⃣ Alta confiança ≠ alta precisão

> O modelo apresentou 100% de confiança em uma resposta incorreta, demonstrando que confiança isolada não representa qualidade da inferência.

---

## 3️⃣ Viés é um problema de design

> O viés surge das escolhas humanas relacionadas à coleta, rotulagem e balanceamento dos dados.

---

## 4️⃣ Sanitização de dados é essencial

> A curadoria do dataset reduz ruídos e melhora significativamente a capacidade de generalização do modelo.

---

## 5️⃣ Human-in-the-loop reduz falhas críticas

> Revisão humana contínua é uma das principais estratégias para reduzir vieses em sistemas de IA.

---

# ⚙️ Como Executar o Projeto

## Pré-requisitos

- Google Chrome
- Webcam
- Conta Google
- Acesso ao Teachable Machine

---

## Passos para Reproduzir

1. Acesse o Teachable Machine
2. Crie um projeto de classificação de imagens
3. Adicione duas classes:
   - `tenis homen`
   - `tenis mulher`
4. Capture imagens utilizando webcam
5. Treine o modelo
6. Execute a inferência em tempo real
7. Teste imagens diferentes das utilizadas no treinamento

---

# 🚀 Tecnologias Utilizadas

- Teachable Machine
- Machine Learning
- Classificação Supervisionada
- Webcam Input
- Inteligência Artificial
- Markdown
- GitHub

---

# 🔗 Referências

- https://teachablemachine.withgoogle.com
- https://aif360.mybluemix.net
- https://www.media.mit.edu/projects/algorithmic-bias/overview/

---

# 👨‍💻 Autor

Desenvolvido por **Cauan Lima de Souza Silva**

---

# 🔗 Navegação

[Voltar ao início](https://github.com/CauanDev00/portfolio-cauan-lima-de-souza-silva)
