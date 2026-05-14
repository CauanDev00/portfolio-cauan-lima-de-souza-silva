# ⚔️ Projeto 03 — Batalha de Modelos com Prompt XML

![Badge](https://img.shields.io/badge/IA-Generative%20AI-blue)
![Badge](https://img.shields.io/badge/Prompt-XML-orange)
![Badge](https://img.shields.io/badge/Testes-Comparativos-success)
![Badge](https://img.shields.io/badge/HTML-CSS-red)
![Badge](https://img.shields.io/badge/Status-Concluído-brightgreen)

> Análise comparativa entre diferentes modelos de Inteligência Artificial utilizando o mesmo prompt estruturado em XML para geração de páginas HTML Single Page com CSS integrado.

---

# 🔗 Repositório do Projeto

Acesse o projeto completo:

[Projeto 03 — Batalha de Modelos](https://github.com/CauanDev00/portfolio-cauan-lima-de-souza-silva/tree/main/projeto-03-batalha-de-modelos)

---

# 👥 Equipe

- Ana Julia Oliveira de Freitas
- Cauan Lima de Souza Silva
- Victoria Lohany Almeida dos Santos

---

# 📌 Objetivo

O objetivo deste experimento foi realizar uma **batalha comparativa entre modelos de IA generativa**, avaliando como diferentes arquiteturas interpretam um mesmo prompt estruturado em XML.

Os modelos foram avaliados considerando:

- aderência ao prompt
- qualidade estrutural do HTML
- criatividade visual
- precisão sintática
- consumo de tokens
- interpretação hierárica do XML

O experimento também buscou identificar diferenças relacionadas a:

- generalização das instruções
- comportamento diante de restrições
- verbosidade
- capacidade de seguir hiperparâmetros implícitos no prompt

---

# 🧬 Prompt XML Utilizado

```xml
<tarefa>
  <objetivo>Criar uma página HTML5 única com CSS3 interno (single page).</objetivo>
  <tema>[INSIRA O TEMA DA SUA PÁGINA AQUI]</tema>

  <diretrizes_design>
    <layout>Responsivo e minimalista.</layout>
    <paleta_cores>[DEFINA SUAS CORES]</paleta_cores>
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

# 📊 Quadro Comparativo dos Modelos

| Critério | ChatGPT | Gemini | DeepSeek | Qwen | Grok | Maritaca | Claude |
|---|---|---|---|---|---|---|---|
| **Precisão do Prompt** | ✅ Boa | ✅ Boa | ⭐ Ótima | ⚠️ Mediana | ❌ Baixa | ✅ Boa | 🏆 Excelente |
| **Precisão do HTML** | ⭐ Ótimo | ⚠️ Mediano | ⭐ Ótimo | ⭐ Ótimo | ✅ Boa | ✅ Boa | 🏆 Excelente |
| **Criatividade** | ❌ Fraca | ⚠️ Média | ⭐ Ótima | ✅ Boa | ❌ Fraca | ❌ Pobre | 🏆 Excelente |
| **Erros de Sintaxe** | Nenhum | Pequenos erros | Nenhum | Erros de âncora | Sem imagens | Sem imagens | Pequenos erros nav |
| **Consumo de Tokens** | 950–1.100 | 1.150 | 3.120 | 1.450 | 1.050–1.350 | 950 | 4.800–5.200 |

---

# 🖼 Evidência Visual

## Figura 1 — Comparação entre os modelos testados

![Figura 1](./assets/comparacao-modelos.png)

---

# 🧠 Análise Técnica Comparativa

## 🤖 ChatGPT

O modelo apresentou boa aderência estrutural ao prompt XML, mantendo organização consistente do HTML gerado.

### Pontos positivos

- boa interpretação hierárquica do XML
- ausência de erros sintáticos
- baixa incidência de sobreajuste visual
- geração estável

### Limitações

O modelo apresentou baixa criatividade e pouca exploração visual.

A baixa diversidade estética indica comportamento mais conservador durante a inferência.

---

## 🔵 Gemini

O Gemini apresentou boa interpretação semântica do prompt, porém demonstrou inconsistências estruturais durante a geração do código.

### Problemas observados

- erros de digitação
- pequenos problemas sintáticos
- inconsistência em elementos HTML

Esses fatores impactaram diretamente as métricas de precisão estrutural.

---

## 🟢 DeepSeek

O DeepSeek apresentou excelente equilíbrio entre criatividade e precisão técnica.

### Destaques técnicos

- alta aderência ao XML
- excelente organização estrutural
- criatividade elevada
- baixo nível de ruído no código

O modelo demonstrou boa capacidade de generalização sem comprometer a integridade sintática.

### Limitação

O consumo elevado de tokens sugere maior custo computacional durante a inferência.

---

## 🟡 Qwen

O modelo apresentou boa geração estrutural de HTML, porém demonstrou dificuldades em interpretar corretamente relações hierárquicas do XML.

### Problemas encontrados

- erros de âncora
- navegação inconsistente
- baixa interpretação contextual das tags

Isso sugere limitação na interpretação semântica de prompts estruturados.

---

## ⚡ Grok

O Grok apresentou baixa aderência ao prompt original.

### Problemas observados

- inclusão de elementos não solicitados
- perda parcial das restrições
- ausência de imagens na galeria

O comportamento sugere menor controle de validação contextual durante a inferência.

---

## 🇧🇷 Maritaca

O modelo apresentou boa eficiência computacional e baixo consumo de tokens.

### Pontos positivos

- execução rápida
- baixo custo
- geração funcional

### Limitações

- baixa criatividade
- pouca inovação visual
- respostas excessivamente simples

O modelo priorizou desempenho computacional em detrimento da profundidade estética.

---

## 🟣 Claude

O Claude apresentou o melhor desempenho geral entre os modelos avaliados.

### Destaques técnicos

- excelente interpretação do XML
- alta criatividade
- código estruturalmente consistente
- ótima organização semântica

O modelo demonstrou maior capacidade de compreender restrições implícitas e explícitas do prompt.

### Métricas observadas

- maior profundidade de resposta
- maior consumo de tokens
- melhor equilíbrio entre criatividade e precisão

O consumo elevado de tokens foi proporcional à qualidade da entrega.

---

# 📈 Métricas e Avaliação Técnica

## Métricas utilizadas

- aderência ao prompt
- precisão estrutural
- criatividade visual
- consistência sintática
- consumo de tokens
- interpretação hierárquica

---

## Análise de desempenho

O Claude apresentou melhor desempenho geral devido à maior capacidade de interpretação contextual e melhor generalização das restrições do XML.

O DeepSeek obteve excelente equilíbrio entre criatividade e precisão estrutural.

Já modelos como Grok e Qwen apresentaram maior incidência de erros relacionados à interpretação semântica das instruções.

---

# 🔬 Considerações Técnicas

## Sobreajuste (Overfitting)

Alguns modelos demonstraram comportamento semelhante a sobreajuste semântico, repetindo padrões previsíveis sem explorar soluções criativas.

---

## Hiperparâmetros Implícitos

Mesmo sem controle direto dos hiperparâmetros internos dos modelos, foi possível observar diferenças relacionadas a:

- criatividade
- temperatura de geração
- verbosidade
- profundidade de inferência

---

## Validação Cruzada Informal

A repetição do mesmo prompt em diferentes arquiteturas permitiu uma forma de validação cruzada qualitativa entre modelos.

---

# 📊 Consumo de Tokens

```txt
Maritaca   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   950
ChatGPT    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   950 – 1.100
Gemini     ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   1.150
Grok       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   1.050 – 1.350
Qwen       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   1.450
DeepSeek   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   3.120
Claude     ████████████████████████████████  4.800 – 5.200
```

> O Claude consumiu aproximadamente **5x mais tokens** que modelos mais simples, porém apresentou desempenho proporcionalmente superior.

---

# 🏆 Ranking Final

| Posição | Modelo | Destaque |
|---|---|---|
| 🥇 1º | **Claude** | Melhor equilíbrio entre criatividade e precisão |
| 🥈 2º | **DeepSeek** | Excelente estrutura e criatividade |
| 🥉 3º | **ChatGPT** | Estável e confiável |
| 4º | Qwen | Boa estrutura, baixa interpretação XML |
| 5º | Gemini | Pequenos erros estruturais |
| 6º | Maritaca | Econômico, porém simples |
| 7º | Grok | Baixa aderência ao prompt |

---

# ⚙️ Como Executar o Projeto

## Pré-requisitos

- Navegador atualizado
- Conta nas plataformas de IA utilizadas
- Editor de código (VS Code recomendado)

---

## Modelos utilizados

- ChatGPT
- Gemini
- DeepSeek
- Qwen
- Grok
- Maritaca
- Claude

---

## Passos para reprodução

### 1️⃣ Copie o prompt XML

Utilize exatamente o prompt documentado neste README.

---

### 2️⃣ Execute nos modelos

Cole o prompt individualmente em cada ferramenta de IA.

---

### 3️⃣ Gere os códigos HTML

Solicite a criação de uma página HTML Single Page com CSS integrado.

---

### 4️⃣ Compare os resultados

Analise:

- criatividade
- estrutura HTML
- aderência ao XML
- erros sintáticos
- tokens consumidos

---

# 🚀 Tecnologias Utilizadas

- XML
- HTML5
- CSS3
- Engenharia de Prompt
- Inteligência Artificial Generativa
- Markdown
- GitHub

---

# 💡 Conclusão

O experimento demonstrou que diferentes modelos de IA apresentam comportamentos significativamente distintos mesmo diante do mesmo prompt estruturado.

Os resultados evidenciam que:

- modelos maiores tendem a gerar respostas mais profundas
- criatividade varia drasticamente entre arquiteturas
- aderência estrutural depende da interpretação semântica do prompt
- maior consumo de tokens nem sempre significa desperdício computacional

A comparação permitiu observar diferenças importantes relacionadas à inferência, interpretação contextual e qualidade estrutural do código gerado.

---

# 👨‍💻 Autor

Desenvolvido por:

- Ana Julia Oliveira de Freitas
- Cauan Lima de Souza Silva
- Victoria Lohany Almeida dos Santos

---

# 🔗 Navegação

[Voltar ao início](https://github.com/CauanDev00/portfolio-cauan-lima-de-souza-silva)
