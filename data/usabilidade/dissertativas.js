// Dissertativas de Padrões de Usabilidade: versões abertas das questões 41 a 55 da revisão
// (as "Dissertativas 1 a 15"). Resposta modelo e pontos-chave com âncora no resumo.
registrar('usabilidade', 'dissertativas', [
  {
    id: "D1", bloco: "01 · Fundamentos e princípios", origem: "Questão 41 da revisão",
    enunciado: "Num teste de usabilidade de um portal governamental para emissão de certidões, a equipe mediu a taxa de conclusão sem erros e o tempo total gasto pelo cidadão. Com base na ISO 9241-11, explique a diferença entre eficácia e eficiência e diga qual métrica corresponde a cada uma.",
    respostaModelo: "Pela ISO 9241-11, usabilidade é a capacidade de um produto ser usado por usuários específicos para atingir objetivos específicos com eficácia, eficiência e satisfação num contexto de uso. Eficácia é a precisão e a completude com que o usuário atinge o objetivo, ou seja, emitir a certidão correta; por isso a taxa de conclusão sem erros mede a eficácia. Eficiência é a relação entre o resultado alcançado e os recursos ou o tempo gastos; por isso o tempo total para emitir o documento mede a eficiência. Uma não garante a outra: ser rápido não significa acertar.",
    pontosChave: [
      { texto: "Definição da ISO 9241-11", ancora: "u-iso" },
      { texto: "Eficácia = precisão e completude (taxa sem erros)", ancora: "u-metas" },
      { texto: "Eficiência = resultado × recursos/tempo (tempo gasto)", ancora: "u-metas" },
      { texto: "Uma não garante a outra", ancora: "u-metas" }
    ]
  },
  {
    id: "D2", bloco: "01 · Fundamentos e princípios", origem: "Questão 42 da revisão",
    enunciado: "Segundo Sharp, Rogers e Preece, qual é o objetivo central do Design de Interação (IxD) e quais são seus pilares?",
    respostaModelo: "O IxD busca projetar produtos interativos que apoiem e melhorem a forma como as pessoas se comunicam e interagem no cotidiano e no trabalho. O foco está nas pessoas e na interação, não em backend, banco de dados ou custo de hardware. Seus pilares são usabilidade intuitiva, conforto gráfico, funcionalidade objetiva e legibilidade.",
    pontosChave: [
      { texto: "Objetivo: apoiar e melhorar como as pessoas se comunicam e interagem", ancora: "u-ui-ux-ixd" },
      { texto: "Centrado nas pessoas, não na tecnologia", ancora: "u-ui-ux-ixd" },
      { texto: "Pilares: usabilidade intuitiva, conforto gráfico, funcionalidade objetiva, legibilidade", ancora: "u-ui-ux-ixd" }
    ]
  },
  {
    id: "D3", bloco: "01 · Fundamentos e princípios", origem: "Questão 43 da revisão",
    enunciado: "Na reformulação de um aplicativo bancário, explique a diferença entre UI e UX e dê um exemplo de cada no app.",
    respostaModelo: "UI (Interface do Usuário) é o meio: o arranjo visual e funcional pelo qual o usuário opera o sistema, como telas, botões, ícones e cores. UX (Experiência do Usuário) é a percepção holística: as emoções e os sentimentos vividos antes, durante e depois da interação. No app bancário, a UI é, por exemplo, o layout da tela de transferência; a UX inclui a sensação de segurança ao transferir, a facilidade para resolver um problema e a confiança que fica depois. UI e UX não são sinônimos.",
    pontosChave: [
      { texto: "UI = meio visual/funcional de operação", ancora: "u-ui-ux-ixd" },
      { texto: "UX = percepção holística antes, durante e depois", ancora: "u-ui-ux-ixd" },
      { texto: "Exemplo de cada no app bancário", ancora: "u-ui-ux-ixd" },
      { texto: "Confiança como parte da experiência", ancora: "u-confianca" }
    ]
  },
  {
    id: "D4", bloco: "01 · Fundamentos e princípios", origem: "Questão 44 da revisão",
    enunciado: "Explique os atributos Facilidade de Aprendizagem e Memorabilidade definidos por Nielsen (1993) e por que a memorabilidade é crítica num ERP de uso esporádico.",
    respostaModelo: "Facilidade de aprendizagem (learnability) é a rapidez com que um usuário novato consegue realizar tarefas no primeiro contato com o sistema. Memorabilidade é a capacidade de um usuário casual voltar ao sistema depois de meses sem uso e executar as tarefas sem precisar reaprender. Num ERP de uso esporádico, o usuário fica longos períodos sem usar o sistema; se a interface não for memorável, ele precisa reaprender o fluxo a cada uso, perdendo tempo e errando mais. Isso mostra que a usabilidade não é fixa: depende do tipo de usuário e do contexto.",
    pontosChave: [
      { texto: "Aprendizagem = novato no primeiro contato", ancora: "u-nielsen-atributos" },
      { texto: "Memorabilidade = usuário casual volta após meses sem reaprender", ancora: "u-nielsen-atributos" },
      { texto: "Por que importa no ERP esporádico", ancora: "u-nielsen-atributos" },
      { texto: "Usabilidade depende do usuário e do contexto", ancora: "u-iso" }
    ]
  },
  {
    id: "D5", bloco: "02 · Heurísticas", origem: "Questão 45 da revisão",
    enunciado: "Num aplicativo de streaming de vídeo, explique e dê um exemplo prático de duas heurísticas de Nielsen: (1) Visibilidade do status do sistema e (2) Compatibilidade entre o sistema e o mundo real.",
    respostaModelo: "(1) Visibilidade do status do sistema: a interface mantém o usuário informado sobre o que está acontecendo. Exemplo: barra de progresso do buffer e indicação do perfil ativo. (2) Compatibilidade entre o sistema e o mundo real: a interface usa a linguagem e as metáforas do cotidiano do usuário. Exemplo: ícone de lixeira para remover itens da lista e engrenagem para configurações. Mostrar tela em branco durante o carregamento ou usar termos técnicos de rede violaria essas heurísticas.",
    pontosChave: [
      { texto: "Visibilidade do status: definição e exemplo (buffer, perfil ativo)", ancora: "u-heuristicas-exemplos" },
      { texto: "Mundo real: metáforas do cotidiano (lixeira, engrenagem)", ancora: "u-heuristicas-exemplos" },
      { texto: "Contraexemplo que violaria as heurísticas", ancora: "u-heuristicas-exemplos" }
    ]
  },
  {
    id: "D6", bloco: "01 · Fundamentos e princípios", origem: "Questão 46 da revisão",
    enunciado: "Num painel de controle para casa inteligente, explique e exemplifique os conceitos de Mapeamento e Restrições de Donald Norman.",
    respostaModelo: "Mapeamento é a relação entre os controles e seus efeitos no mundo real, como girar o volante para virar as rodas. No app, os botões das lâmpadas ficam organizados na mesma disposição dos cômodos da casa, então o usuário sabe qual botão acende qual luz. Restrições limitam as interações possíveis para reduzir erros. No app, o botão \"Ligar Ar-Condicionado\" fica desabilitado quando o aparelho está desconectado. As restrições podem ser físicas (USB que só encaixa de um jeito), lógicas (desativar opções sem sentido no contexto) ou culturais (vermelho para erro).",
    pontosChave: [
      { texto: "Mapeamento: relação controle → efeito", ancora: "u-norman-mapeamento" },
      { texto: "Exemplo: botões na disposição dos cômodos", ancora: "u-norman-mapeamento" },
      { texto: "Restrições: limitar ações para evitar erros (botão desabilitado)", ancora: "u-norman-restricoes" },
      { texto: "Tipos: física, lógica e cultural", ancora: "u-norman-restricoes" }
    ]
  },
  {
    id: "D7", bloco: "02 · Heurísticas", origem: "Questão 47 da revisão",
    enunciado: "Descreva as três fases de uma Avaliação Heurística, segundo Nielsen e Molich, aplicada à interface de um sistema hospitalar.",
    respostaModelo: "1. Planejamento: definir os objetivos da avaliação e selecionar o conjunto de heurísticas a usar. 2. Execução: cada especialista inspeciona a interface de forma individual e independente, registrando os problemas encontrados. 3. Revisão: os resultados são consolidados e os problemas priorizados, gerando a lista do que corrigir primeiro. A avaliação é feita por especialistas, não por usuários leigos.",
    pontosChave: [
      { texto: "Planejamento: objetivos e escolha das heurísticas", ancora: "u-aval-fases" },
      { texto: "Execução: inspeção individual e independente", ancora: "u-aval-fases" },
      { texto: "Revisão: consolidar e priorizar", ancora: "u-aval-fases" },
      { texto: "Feita por especialistas", ancora: "u-aval-heuristica" }
    ]
  },
  {
    id: "D8", bloco: "02 · Heurísticas", origem: "Questão 48 da revisão",
    enunciado: "O gerente quer saber se a equipe deve fazer uma Avaliação Heurística ou um Teste de Usabilidade com usuários. Cite duas vantagens e duas desvantagens da Avaliação Heurística.",
    respostaModelo: "Vantagens: dá feedback rápido e tem custo relativamente baixo, sem necessidade de recrutar usuários de imediato. Desvantagens: exige avaliadores especialistas qualificados e pode deixar passar problemas que só aparecem com usuários reais no contexto de uso. Por isso a avaliação heurística não substitui os testes com usuários; as duas técnicas se complementam.",
    pontosChave: [
      { texto: "Vantagem: feedback rápido", ancora: "u-aval-vantagens" },
      { texto: "Vantagem: custo baixo, sem recrutar usuários", ancora: "u-aval-vantagens" },
      { texto: "Desvantagem: exige especialistas", ancora: "u-aval-vantagens" },
      { texto: "Desvantagem: pode deixar passar problemas; não substitui testes", ancora: "u-aval-vantagens" }
    ]
  },
  {
    id: "D9", bloco: "07 · WIMP, multimodais e enativas", origem: "Questão 49 da revisão",
    enunciado: "Explique o significado da sigla WIMP, descreva cada elemento e diga em que transição esse modelo se consolidou.",
    respostaModelo: "WIMP significa Windows, Icons, Menus e Pointing device. As janelas delimitam áreas de trabalho; os ícones representam objetos e ferramentas familiares; os menus apresentam coleções estruturadas de opções e comandos (planos, em cascata ou contextuais); o dispositivo apontador, como o mouse, permite selecionar e manipular os elementos. O modelo se consolidou como padrão dominante a partir dos anos 1980, na transição da interface de linha de comando (CLI) para a interface gráfica (GUI). Ícones de objetos familiares são, em regra, mais fáceis de memorizar que comandos de texto.",
    pontosChave: [
      { texto: "Significado da sigla", ancora: "u-wimp-def" },
      { texto: "Função de cada elemento (menu, ícones…)", ancora: "u-menus-icones" },
      { texto: "Transição CLI → GUI nos anos 1980", ancora: "u-wimp-def" },
      { texto: "Ícones mais fáceis de memorizar que comandos de texto", ancora: "u-menus-icones" }
    ]
  },
  {
    id: "D10", bloco: "07 · WIMP, multimodais e enativas", origem: "Questão 50 da revisão",
    enunciado: "Compare o modelo cognitivista tradicional (anos 1960/70) com a abordagem enativa de Varela, Thompson e Rosch. Como a abordagem enativa se aplica ao design de interfaces?",
    respostaModelo: "No modelo tradicional, a mente é vista como um processador que manipula representações simbólicas internas e estáticas, como um computador. Na abordagem enativa, a cognição emerge do acoplamento dinâmico entre ação e percepção corporificada: aprendemos agindo. No design, isso significa interfaces que ensinam o usuário enquanto ele usa, permitindo aprender fazendo, pela própria experiência, em vez de exigir o estudo de manuais antes do uso.",
    pontosChave: [
      { texto: "Tradicional: mente como processador simbólico e estático", ancora: "u-enativa" },
      { texto: "Enativa: ação + percepção corporificada", ancora: "u-enativa" },
      { texto: "Aplicação: aprender fazendo, ensinar enquanto usa", ancora: "u-enativa" }
    ]
  },
  {
    id: "D11", bloco: "08 · Affordances, semiótica e emoção", origem: "Questão 51 da revisão",
    enunciado: "Diferencie a affordance de Gibson da affordance percebida de Norman e explique por que Norman precisou desse novo termo para interfaces digitais.",
    respostaModelo: "Para Gibson (1968, psicologia ecológica), affordance é uma propriedade física e real do ambiente, que existe independentemente de ser percebida: aquilo que o objeto oferece ao organismo. Norman adaptou o conceito e introduziu a affordance percebida porque, numa tela plana, não há propriedades físicas que indiquem o uso: o fator crítico são as pistas visuais que sinalizam e comunicam a interatividade, como um botão que parece clicável. De forma geral, affordance é a propriedade física ou percebida que sugere como algo pode ser usado.",
    pontosChave: [
      { texto: "Gibson: propriedade real, independente da percepção", ancora: "u-affordance" },
      { texto: "Norman: affordance percebida", ancora: "u-affordance" },
      { texto: "Na tela, o que vale são as pistas visuais", ancora: "u-affordance" }
    ]
  },
  {
    id: "D12", bloco: "08 · Affordances, semiótica e emoção", origem: "Questão 52 da revisão",
    enunciado: "Explique o modelo triádico do signo de Charles Sanders Peirce aplicado ao ícone de \"salvar\" (disquete).",
    respostaModelo: "O signo de Peirce tem três elementos. O representâmen é o signo em si: a imagem gráfica do disquete na tela. O objeto é aquilo que o signo representa: a ação ou o conceito de armazenar os dados permanentemente. O interpretante é o efeito na mente de quem vê: a compreensão de que clicar ali salva o trabalho.",
    pontosChave: [
      { texto: "Representâmen = a imagem do disquete", ancora: "u-peirce" },
      { texto: "Objeto = a ação de armazenar os dados", ancora: "u-peirce" },
      { texto: "Interpretante = a compreensão do usuário", ancora: "u-peirce" }
    ]
  },
  {
    id: "D13", bloco: "08 · Affordances, semiótica e emoção", origem: "Questão 53 da revisão",
    enunciado: "Um usuário preenche um formulário de 20 campos e, ao clicar em \"Enviar\", o sistema apaga todos os dados e exibe \"ERRO FATAL 0x80004005: Ação Inválida!\". Avalie o impacto emocional segundo a Computação Afetiva e proponha a correção.",
    respostaModelo: "A situação gera alto nível de frustração e quebra de confiança: o usuário perde todo o trabalho e recebe uma mensagem técnica, vaga e intimidadora, que o pune e o culpa. Mensagens de erro assim estão entre as principais fontes de frustração. A correção é preservar os dados digitados, explicar o problema em linguagem clara e oferecer um caminho direto de resolução.",
    pontosChave: [
      { texto: "Alta frustração e quebra de confiança", ancora: "u-emocao-erros" },
      { texto: "Mensagem vaga, técnica e que culpa o usuário", ancora: "u-emocao-erros" },
      { texto: "Preservar os dados digitados", ancora: "u-emocao-erros" },
      { texto: "Linguagem clara + caminho de resolução", ancora: "u-emocao-erros" }
    ]
  },
  {
    id: "D14", bloco: "09 · Guidelines e checklist", origem: "Questão 54 da revisão",
    enunciado: "Apresente três diretrizes de interface voltadas à redução da carga cognitiva do usuário e à prevenção de erros.",
    respostaModelo: "1. Agrupar informações complexas em blocos gerenciáveis (chunking), seguindo a regra de cerca de 7 itens, para que o usuário não precise memorizar grandes volumes. 2. Substituir a digitação livre por listas e caixas de seleção sempre que possível, o que reduz a memória exigida e os erros de digitação. 3. Oferecer mecanismos claros de ação reversível (undo), para que um erro possa ser desfeito facilmente.",
    pontosChave: [
      { texto: "Chunking / regra dos 7 itens", ancora: "u-carga-cognitiva" },
      { texto: "Seleção em vez de digitação livre", ancora: "u-carga-cognitiva" },
      { texto: "Ações reversíveis (undo)", ancora: "u-controle-usuario" }
    ]
  },
  {
    id: "D15", bloco: "03 · Cores e hierarquia visual", origem: "Questão 55 da revisão",
    enunciado: "Justifique o uso de tons neutros e de cores saturadas apenas para exceções num sistema hospitalar ERP/B2B usado 8 horas por dia, comparando com um app B2C de eventos focado em compras por impulso.",
    respostaModelo: "Num sistema B2B usado em longas jornadas, a paleta neutra e de baixo contraste cromático previne a exaustão visual e a fadiga ocular. As cores saturadas ficam reservadas para exceções críticas: como aparecem pouco, chamam atenção imediata para falhas sem poluir o fluxo de trabalho. Já o app B2C de compras por impulso usa mais saturação para gerar engajamento emocional. Nos dois casos, vale evitar mais de 5 cores principais por tela e distribuir as cores com a regra 60-30-10.",
    pontosChave: [
      { texto: "Neutro previne fadiga em longas jornadas", ancora: "u-cores-b2b-b2c" },
      { texto: "Saturadas só para exceções críticas", ancora: "u-cores-b2b-b2c" },
      { texto: "B2C busca engajamento emocional", ancora: "u-cores-b2b-b2c" },
      { texto: "Limite de cores e regra 60-30-10", ancora: "u-cores-603010" }
    ]
  }
]);
