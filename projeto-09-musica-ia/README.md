# 🎵 Projeto Música & IA: Composição Generativa com Gemini e Suno

![GitHub language count](https://img.shields.io/github/languages/count/1Naju/portfolio-ana-julia-oliveira-de-freitas?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/1Naju/portfolio-ana-julia-oliveira-de-freitas?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge)

## 📝 Descrição do Projeto

Este projeto explora a intersecção entre criatividade humana e Inteligência Artificial. Utilizando técnicas de **RAG (Retrieval-Augmented Generation)** através do Gemini Gems, foi criado um assistente especializado na análise lírica de **Kehlani**. O objetivo final foi a produção de um EP com 5 faixas inéditas, cujas letras foram geradas pela IA e a produção musical realizada via Suno AI.

## 🛠️ Tecnologias Utilizadas

* **Gemini Gems:** Criação de base de conhecimento e geração de letras.
* **Suno AI:** Geração de áudio e arranjos instrumentais.
* **GitHub:** Documentação e versionamento do projeto.

## 🚀 Assistente Personalizado

O assistente (Gems) utilizado para modelagem das letras pode ser acessado através do link abaixo:
> [Link para o Fake Kehlani — Gemini Gems](https://gemini.google.com/gem/1jQyEL3sxmo-0NOjANuthaVH1yjVciLFW?usp=sharing)

## 🎧 Músicas Geradas

| Faixa | Título | Estilo/Referência | Link do Áudio |
| :--- | :--- | :--- | :--- |
| 01 | love language | Contemporary R&B, slow tempo, heavy bass | [Arquivo MP3](./audio/love%20language.mp3) |
| 02 | bodies | Contemporary R&B, sensual, slow burn | [Arquivo MP3](./audio/bodies.mp3) |
| 03 | Vintage Love | Classic R&B, 2000s R&B, neo soul | [Arquivo MP3](./audio/Vintage%20Love.mp3) |
| 04 | Back 2U | Contemporary R&B, emotional, confessional | [Arquivo MP3](./audio/Back%202U.mp3) |
| 05 | Glow | Contemporary R&B, upbeat, empowering | [Arquivo MP3](./audio/Glow.mp3) |

## 🔬 Análise de Qualidade e Parâmetros

### Parâmetros Utilizados no Suno AI

| Faixa | BPM estimado | Parâmetros de Estilo |
| :--- | :--- | :--- |
| love language | Lento (~70 BPM) | R&B, contemporary R&B, slow tempo, heavy bass, atmospheric synth |
| bodies | Lento (~75 BPM) | R&B, contemporary R&B, slow burn, heavy bass, sensual, female vocals |
| Vintage Love | Moderado (~85 BPM) | classic R&B, 2000s R&B, neo soul, 808 beats, electric piano, vocal harmonies |
| Back 2U | Lento (~70 BPM) | R&B, contemporary R&B, slow tempo, deep bass, rain ambience, raspy vocals |
| Glow | Moderado (~90 BPM) | contemporary R&B, upbeat, empowering, bright synths, punchy bass |

### Hiperparâmetros na Geração Musical

O Suno AI opera com parâmetros equivalentes ao **Temperature** e **Top-p** usados em LLMs, controlando criatividade e coerência do output:

| Hiperparâmetro | O que controla | Como foi aplicado |
| :--- | :--- | :--- |
| **Style Tags** (equivalente ao Temperature) | Criatividade e variação sonora — tags mais específicas reduzem a aleatoriedade, tags genéricas aumentam a variação | Faixas emocionais receberam tags específicas (`raspy vocals`, `rain ambience`) para reduzir variação e aumentar precisão estilística |
| **Estrutura lírica** ([Verse]/[Chorus]) | Coerência e repetição — equivalente ao Top-p, define o quanto o modelo segue a estrutura fornecida | Todas as faixas usaram marcações explícitas de estrutura para forçar coerência entre melodia e letra |
| **BPM implícito** (`slow tempo`, `upbeat`) | Controla o ritmo e energia — afeta diretamente a temperatura emocional da faixa | Faixas melancólicas usaram `slow tempo` (~70 BPM) e faixas empoderadoras usaram `upbeat` (~90 BPM) |

> A principal descoberta foi que **especificidade nas tags funciona como redução de Temperature** — quanto mais descritivo o prompt de estilo, menos o modelo "improvisa" e mais ele segue a intenção original.

### Avaliação do Output

- **Coerência estilística:** O modelo Suno v4.5 manteve consistência com os parâmetros de estilo R&B fornecidos, gerando arranjos com baixo marcado e vocais femininos em todas as faixas.
- **Qualidade vocal:** As faixas com parâmetro `raspy vocals` apresentaram maior expressividade emocional, aproximando-se do estilo confessional de Kehlani.
- **Aderência às letras:** O modelo respeitou a estrutura de [Verse], [Chorus] e [Bridge] em todas as composições, sincronizando a melodia com a métrica das letras.
- **Pontos de melhoria:** Algumas faixas geraram backing vocals genéricos não previstos nos parâmetros. O refinamento dos prompts de estilo com termos mais específicos (ex: `no background vocals`, `minimal production`) poderia reduzir esse comportamento.



1. **Curadoria:** Seleção de letras de Kehlani como base de conhecimento, representando seu estilo confessional, vulnerável e direto do R&B contemporâneo.
2. **Prompt Engineering:** Configuração do Gems ("Fake Kehlani") com instruções detalhadas para mimetizar o vocabulário, a métrica e os temas recorrentes da artista — amor, cura, autoconhecimento e relações complexas.
3. **Composição:** Geração de 5 letras inéditas com temas sugeridos, garantindo originalidade e evitando reprodução literal das referências.
4. **Produção:** Conversão das letras em áudio no Suno AI, com ajuste de parâmetros de gênero musical, BPM, timbre vocal e instrumentação para cada faixa.

---

Desenvolvido por [Ana Julia Oliveira de Freitas](https://github.com/1Naju)
