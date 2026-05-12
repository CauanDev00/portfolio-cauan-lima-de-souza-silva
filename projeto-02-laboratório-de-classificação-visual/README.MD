# 🤖 Viés em IA — Classificação de Tênis Masculino vs Feminino

> Estudo de caso prático sobre como algoritmos de Machine Learning podem desenvolver vieses a partir de dados limitados, utilizando o **Teachable Machine** como ferramenta de experimentação.

---

## 📌 Visão Geral

Este projeto demonstra, de forma prática, como um modelo de classificação de imagens pode errar ao identificar o gênero de um tênis — e o que isso significa socialmente. O modelo foi treinado com a ferramenta **Teachable Machine (Google)** e testado em tempo real via câmera.

---

## ⚙️ Como o Viés Acontece

### Mecanismo do Viés

O viés ocorre quando o algoritmo **aprende com dados limitados ou não representativos**. Durante o treinamento, se o modelo recebe imagens predominantemente de um tipo (ex: tênis brancos como femininos e tênis escuros como masculinos), ele aprende padrões superficiais e incorretos.

```
Dado limitado → Padrão incorreto aprendido → Classificação errada
```

**Exemplo real registrado:**
> Um tênis masculino foi classificado com **100% de confiança** como `tenis mulher` pelo modelo treinado.

---

## ⚠️ Consequência Social

Esse tipo de erro vai além de uma simples falha técnica:

| Impacto | Descrição |
|---|---|
| Classificação injusta | Produtos, perfis ou recomendações atribuídos de forma incorreta |
| Constrangimento | Pessoas podem ser mal identificadas em sistemas automatizados |
| Exclusão | Grupos sub-representados nos dados tendem a ser mais prejudicados |
| Reforço de estereótipos | O modelo aprende e perpetua padrões sociais enviesados |

> **O algoritmo não é neutro — ele reflete os dados com os quais foi alimentado.**

---

## 🛠️ Ferramenta Utilizada

### Teachable Machine (Google)

| Item | Detalhe |
|---|---|
| Plataforma | [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) |
| Tipo de modelo | Classificação de imagens |
| Input | Câmera em tempo real (Webcam) |
| Classes treinadas | `tenis homen` / `tenis mulher` |
| Output observado | 100% `tenis mulher` para um tênis masculino |

---

## 🧪 Resultado do Experimento

```
Input:   Foto de tênis masculino (capturada ao vivo)
Output:
  tenis homen  ░░░░░░░░░░░░░░░░  0%
  tenis mulher ████████████████  100%  ← ERRO
```

O modelo demonstrou **confiança total em uma classificação incorreta**, evidenciando que alta confiança não significa alta precisão quando os dados de treino são enviesados.

---

## ✅ Ação Mitigadora — Human-in-the-loop

A principal estratégia para reduzir esse tipo de viés é manter um **humano no processo de revisão**, especialmente antes e durante o treinamento do modelo.

### O que é Human-in-the-loop?

É uma abordagem em que pessoas revisam, validam e corrigem os dados e as decisões do modelo em pontos críticos do pipeline de IA.

### Como aplicar neste caso:

```
1. Revisar os dados de treinamento antes de alimentar o modelo
        ↓
2. Garantir diversidade de imagens (cores, marcas, ângulos, contextos)
        ↓
3. Balancear o número de amostras por classe
        ↓
4. Testar o modelo com casos variados antes de publicar
        ↓
5. Monitorar erros em produção e re-treinar com dados corrigidos
```

---

## 💡 Lições Aprendidas

### 1. Dados definem o comportamento do modelo
> Um modelo só é tão bom quanto os dados com os quais foi treinado. Diversidade nos dados é qualidade no resultado.

### 2. Alta confiança ≠ alta precisão
> O modelo indicou 100% de certeza em uma resposta errada. Isso mostra que métricas de confiança isoladas podem enganar.

### 3. Viés é um problema de design, não só de algoritmo
> A origem do viés está nas escolhas humanas sobre quais dados coletar e como rotulá-los.

### 4. Human-in-the-loop é essencial em sistemas críticos
> Revisão humana contínua é a principal defesa contra vieses que impactam pessoas reais.

---

## 🔗 Referências

- [Teachable Machine — Google](https://teachablemachine.withgoogle.com)
- [AI Fairness 360 — IBM](https://aif360.mybluemix.net/)
- [Algorithmic Bias — MIT Media Lab](https://www.media.mit.edu/projects/algorithmic-bias/overview/)

---

*Estudo de Caso · Viés em IA · Machine Learning · Human-in-the-loop*
