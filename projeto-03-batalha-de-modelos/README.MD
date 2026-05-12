# ⚔️ Batalha de Modelos — Engenharia de Prompt com XML

> Análise comparativa de 7 modelos de IA testados com o mesmo prompt estruturado em XML para geração de uma página HTML Single Page com CSS integrado.

**Equipe:** Ana Julia Oliveira de Freitas · Cauan Lima de Souza Silva · Victoria Lohany Almeida dos Santos

---

## 📌 Objetivo

Construir um **Prompt Estruturado em XML** e testá-lo nas principais ferramentas de IA do mercado, avaliando precisão, criatividade, qualidade do código e consumo de tokens.

---

## 🧬 O Prompt XML Utilizado

```xml
<tarefa>
  <objetivo>Criar uma página HTML5 única com CSS3 interno (single page).</objetivo>
  <tema> [INSIRA O TEMA DA SUA PÁGINA AQUI] </tema>

  <diretrizes_design>
    <layout>Responsivo e minimalista.</layout>
    <paleta_cores> [DEFINA SUAS CORES] </paleta_cores>
    <tipografia>Sans-serif para títulos, Serif para corpo.</tipografia>
  </diretrizes_design>

  <obrigatoriedades_tecnicas>
    <item>Menu de navegação funcional (âncoras).</item>
    <item>Seção de portfólio ou galeria.</item>
    <item>Rodapé com informações de contato simuladas.</item>
    <item>[CRIAR UM ITEM]</item>
  </obrigatoriedades_tecnicas>

  <metrica_obrigatoria>
    Ao final da resposta, informe uma estimativa de quantos tokens
    foram gerados para este código.
  </metrica_obrigatoria>
</tarefa>
```

---

## 📊 Quadro Comparativo

| Critério | ChatGPT | Gemini | DeepSeek | Qwen | Grok | Maritaca | Claude |
|---|---|---|---|---|---|---|---|
| **Precisão do Prompt** | ✅ Boa | ✅ Boa | ⭐ Ótima | ⚠️ Mediana | ❌ Baixa | ✅ Boa | 🏆 Perfeito |
| **Precisão do HTML** | ⭐ Ótimo | ⚠️ Mediano | ⭐ Ótimo | ⭐ Ótimo | ✅ Boa | ✅ Boa | 🏆 Excelente |
| **Criatividade** | ❌ Fraca | ⚠️ Média | ⭐ Ótima | ✅ Boa | ❌ Fraca | ❌ Pobre | 🏆 Excelente |
| **Erros de Sintaxe** | Nenhum | Erros de digitação | Nenhum | Erros de âncora | Sem imagens | Sem imagens | Pequenos erros nav |
| **Tokens gastos** | 950–1.100 | 1.150 | 3.120 | 1.450 | 1.050–1.350 | 950 | 4.800–5.200 |

---

## 🔍 Análise por Modelo

### 🤖 ChatGPT
- Seguiu o prompt normalmente, sem desvios
- Código HTML sem erros
- **Ponto fraco:** criatividade baixa — resultado previsível e sem personalidade visual

### 🔵 Gemini
- Seguiu o prompt, mas com execução mediana
- Apresentou **erros de digitação no código**
- Criatividade limitada

### 🟢 DeepSeek
- Seguiu o prompt com **perfeição estrutural**
- Código limpo e sem erros
- Surpreendeu na criatividade — melhor desempenho entre os modelos intermediários
- Consumo de tokens elevado (3.120) para o resultado entregue

### 🟡 Qwen
- Não aproveitou bem a estrutura XML do prompt
- Código HTML correto, mas com **erros de âncora** na navegação
- Criatividade razoável

### ⚡ Grok
- Adicionou itens não solicitados no prompt — **baixa aderência às instruções**
- Não gerou imagens, limitando a seção de galeria
- Criatividade fraca

### 🇧🇷 Maritaca
- Seguiu o prompt dentro do esperado
- Não gerou imagens para a galeria
- Ausência de criatividade e inovação visual
- Menor consumo de tokens (950)

### 🟣 Claude
- **Melhor desempenho geral** — superou as expectativas do prompt
- Código excelente, sem erros estruturais
- Alta criatividade, conforto visual e inovação no uso de cores
- Maior consumo de tokens (4.800–5.200), justificado pela profundidade da entrega
- Pequenos erros: cores e barra de navegação

---

## 📈 Consumo de Tokens

```
Maritaca   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   950
ChatGPT    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   950 – 1.100
Gemini     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   1.150
Grok       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   1.050 – 1.350
Qwen       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   1.450
DeepSeek   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   3.120
Claude     ████████████████████████████████  4.800 – 5.200
```

> Claude consumiu até **5x mais tokens** que os demais modelos — mas entregou proporcionalmente mais qualidade, detalhamento e criatividade.

---

## 💬 Reflexão Crítica

### 1. Qual modelo demonstrou maior compreensão da estrutura XML?
**Claude** — interpretou cada tag do XML com precisão, respeitando hierarquia, obrigatoriedades e métricas. Superou o esperado sem adicionar ruído desnecessário.

### 2. Houve diferença significativa na verbosidade entre as IAs?
**Sim, enorme.** A variação foi de ~950 tokens (Maritaca) a ~5.200 tokens (Claude) para o mesmo prompt. Isso reflete diferenças em profundidade de geração, não apenas em comprimento de resposta.

### 3. Qual ferramenta para cada cenário?

| Cenário | Modelo Recomendado | Motivo |
|---|---|---|
| Prototipagem rápida | **Maritaca / ChatGPT** | Baixo consumo, entrega funcional |
| Criatividade e design | **Claude / DeepSeek** | Alta inovação visual |
| Código complexo | **Claude** | Excelente precisão e profundidade |
| Custo-benefício geral | **DeepSeek** | Ótima qualidade com tokens moderados |

---

## 🏆 Ranking Final

| Posição | Modelo | Destaque |
|---|---|---|
| 🥇 1º | **Claude** | Melhor em tudo — precisão, criatividade e HTML |
| 🥈 2º | **DeepSeek** | Surpreendeu na criatividade e precisão |
| 🥉 3º | **ChatGPT** | Sólido e confiável, mas sem criatividade |
| 4º | Qwen | Bom HTML, fraco no prompt XML |
| 5º | Gemini | Erros de código comprometem |
| 6º | Maritaca | Funcional, mas sem inovação |
| 7º | Grok | Baixa aderência ao prompt |

---

*Engenharia de Prompt e Aplicações em IA · Batalha de Modelos · Prompt XML · HTML Single Page*
