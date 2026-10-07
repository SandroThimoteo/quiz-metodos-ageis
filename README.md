# Quiz de Métodos Ágeis

Site estático de estudo para a disciplina **Métodos Ágeis de Desenvolvimento** (ADS, 4º semestre, USCS), baseado nos "Conteúdos complementares de Métodos Ágeis" (Aula 05, Prof. Marcos Bussab).

- **Resumo** dos 8 blocos, com âncora em cada subtópico (ex.: `index.html#proj-premissa-risco`).
- **36 questões objetivas** com feedback imediato, explicação de todas as alternativas, filtro por bloco, opção de embaralhar e nota de 0 a 10.
- **8 questões dissertativas** com rascunho salvo no navegador, resposta modelo, checklist de pontos-chave e autoavaliação.
- Cada explicação tem um link **Ver no resumo** que abre o trecho certo, destaca e oferece **Voltar para a questão**.

Só HTML, CSS e JavaScript puros: abre direto pelo `index.html` ou pelo GitHub Pages, sem build.

## Estrutura

```
index.html          estrutura e abas
style.css           tema claro/escuro e layout
app.js              renderização, navegação e pontuação
data/resumo.js      seções do resumo (ids de âncora)
data/objetivas.js   questões de múltipla escolha
data/dissertativas.js
.nojekyll
```

## Conferir os dados

Abra o console do navegador e rode `verificarDados()`. A função lista âncoras quebradas e questões sem exatamente uma alternativa correta (também roda sozinha ao carregar a página).

## Publicar

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
