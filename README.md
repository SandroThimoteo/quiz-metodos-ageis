# Quiz de Estudos · ADS USCS

Site estático de estudo para as provas de ADS (4º semestre, USCS). Na tela inicial você escolhe a matéria; cada uma tem resumo, questões e progresso **separados**.

| Matéria | Fonte | Conteúdo |
|---|---|---|
| Métodos Ágeis de Desenvolvimento | "Conteúdos complementares de Métodos Ágeis" (Aula 05, Prof. Marcos Bussab) | Resumo em 8 blocos, 36 objetivas, 8 dissertativas |
| Padrões de Usabilidade e Desenvolvimento de Interfaces (N1) | "REVISÃO – GABARITO" (55 questões, Profª Drª Alessandra Preto Bittante) | Resumo em 10 blocos, 55 objetivas, 15 dissertativas |

Em cada matéria:

- **Resumo** com âncora em cada subtópico.
- **Objetivas** com feedback imediato, explicação de todas as alternativas, filtro por tema e nota de 0 a 10.
- **Dissertativas** com rascunho salvo no navegador, resposta modelo, checklist de pontos-chave e autoavaliação.
- **Embaralhar** e **Refazer** sorteiam uma nova ordem das perguntas; a **ordem dos temas** pode ser alterada.
- Cada explicação tem um link **Ver no resumo** que abre o trecho certo, destaca e oferece **Voltar para a questão**.

Só HTML, CSS e JavaScript puros: abre direto pelo `index.html` ou pelo GitHub Pages, sem build.

## Links

- `#ageis`, `#usabilidade`: abre o resumo da matéria.
- `#usabilidade/objetivas`, `#ageis/dissertativas`: abre a aba da matéria.
- `#u-peirce`, `#proj-premissa-risco`: abre o trecho do resumo (a matéria é descoberta pela âncora).

## Estrutura

```
index.html                 estrutura, tela inicial e abas
style.css                  tema claro/escuro, cor de cada matéria e layout
app.js                     renderização, navegação, pontuação e ordem das questões
data/materias.js           cadastro das matérias e função registrar()
data/ageis/                resumo.js, objetivas.js, dissertativas.js
data/usabilidade/          resumo.js, objetivas.js, dissertativas.js
.nojekyll
```

## Adicionar outra matéria

1. Cadastre a matéria em `data/materias.js` (com um `prefixo` próprio para o que fica salvo no navegador).
2. Crie `data/<matéria>/resumo.js`, `objetivas.js` e `dissertativas.js` chamando `registrar('<matéria>', '<tipo>', [...])`. Use ids de âncora que não existam em outra matéria.
3. Inclua os três arquivos no `index.html`, antes do `app.js`.

## Conferir os dados

Abra o console do navegador e rode `verificarDados()`. A função lista âncoras quebradas ou repetidas entre matérias e questões sem exatamente uma alternativa correta (também roda sozinha ao carregar a página).

## Publicar

Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
