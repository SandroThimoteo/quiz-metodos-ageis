// Registro das matérias. Cada arquivo em data/<matéria>/ chama registrar(matéria, tipo, dados).
// "prefixo" separa o que fica salvo no navegador de cada matéria.
window.MATERIAS = {
  ageis: {
    id: 'ageis',
    titulo: 'Métodos Ágeis de Desenvolvimento',
    curto: 'Métodos Ágeis',
    professor: 'Prof. Marcos Bussab',
    descricao: 'Crise do Software, Scrum, requisito × restrição × premissa, histórias de usuário e RUP.',
    fonte: '"Conteúdos complementares de Métodos Ágeis" (Aula 05, Prof. Marcos Bussab).',
    prefixo: 'qma'
  },
  usabilidade: {
    id: 'usabilidade',
    titulo: 'Padrões de Usabilidade e Desenvolvimento de Interfaces',
    curto: 'Padrões de Usabilidade',
    professor: 'Profª Drª Alessandra Preto Bittante',
    prova: 'N1',
    descricao: 'ISO 9241-11, heurísticas de Nielsen, Norman, cores, WCAG, telas, WIMP, affordances e semiótica.',
    fonte: '"REVISÃO – GABARITO" (55 questões, Profª Drª Alessandra Preto Bittante), N1.',
    prefixo: 'qpu'
  }
};

window.registrar = function (materia, tipo, dados) {
  window.MATERIAS[materia][tipo] = dados;
};
