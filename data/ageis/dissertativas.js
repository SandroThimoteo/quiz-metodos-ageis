// Questões dissertativas: enunciado, resposta modelo e pontos-chave com âncora no resumo.
registrar('ageis', 'dissertativas', [
  {
    id: "D1", bloco: "01 · Crise do Software",
    enunciado: "Explique o que foi a Crise do Software e cite duas causas gerenciais e duas causas ligadas aos requisitos.",
    respostaModelo: "A Crise do Software descreve dificuldades recorrentes para produzir software confiável dentro das condições acordadas, quando o crescimento dos sistemas superou a capacidade dos métodos de coordená-los. Projetos estouravam prazo e custo, produtos não atendiam às necessidades reais e a manutenção ficava cada vez mais cara. Causas gerenciais: subestimação do esforço e cronogramas definidos antes de entender o problema. Causas de requisitos: necessidades ambíguas e validação tardia do produto.",
    pontosChave: [
      { texto: "Dificuldades recorrentes / complexidade acima da capacidade de gestão", ancora: "crise-complexidade" },
      { texto: "Sintomas (prazo, custo, necessidades, defeitos, manutenção)", ancora: "crise-sintomas" },
      { texto: "Duas causas gerenciais", ancora: "crise-causas-gerenciais" },
      { texto: "Duas causas de requisitos", ancora: "crise-causas-requisitos" }
    ]
  },
  {
    id: "D2", bloco: "02 · Fundamentos do Scrum",
    enunciado: "Explique os três pilares do Scrum, como eles se relacionam em ciclo e dê um exemplo de evento que exercita a inspeção.",
    respostaModelo: "Transparência garante que as informações relevantes (backlog, Objetivo do Produto, Definição de Pronto) estejam visíveis e compreendidas. Inspeção compara resultado e objetivo com frequência adequada. Adaptação ajusta produto ou processo quando a inspeção revela diferença relevante. Eles formam um ciclo: transparência permite enxergar, inspeção permite compreender, adaptação permite melhorar, e uma nova transparência mostra o efeito da mudança. A Daily Scrum, por exemplo, inspeciona o avanço da Sprint.",
    pontosChave: [
      { texto: "Definição de transparência com exemplo", ancora: "scrum-transparencia" },
      { texto: "Definição de inspeção com exemplo de evento", ancora: "scrum-inspecao" },
      { texto: "Definição de adaptação", ancora: "scrum-adaptacao" },
      { texto: "Ciclo entre os pilares", ancora: "scrum-ciclo-pilares" }
    ]
  },
  {
    id: "D3", bloco: "03 · Eventos e time-boxes",
    enunciado: "Uma equipe com Sprints de duas semanas propõe: (1) Daily de 30 minutos, (2) cancelar a Retrospectiva porque \"o prazo está apertado\" e (3) pular os testes para entregar mais itens. Analise cada proposta à luz das regras do Scrum.",
    respostaModelo: "(1) Incorreta: a Daily tem duração fixa de 15 minutos. (2) Incorreta: a Retrospectiva é o evento em que a equipe planeja melhorias de qualidade e efetividade; sem ela, perde-se a adaptação do processo e problemas se repetem. (3) Incorreta: pressão de prazo não autoriza reduzir o padrão de qualidade; a Definição de Pronto continua válida e trabalho incompleto não integra o Incremento. O caminho correto é renegociar o escopo com o PO sem ameaçar o Objetivo da Sprint.",
    pontosChave: [
      { texto: "Daily = 15 min fixos", ancora: "eventos-daily" },
      { texto: "Papel da Retrospectiva", ancora: "eventos-retro" },
      { texto: "Inspeção sem adaptação", ancora: "scrum-inspecao-sem-adaptacao" },
      { texto: "Qualidade não diminui / Definição de Pronto", ancora: "eventos-qualidade" },
      { texto: "Renegociar escopo com o PO", ancora: "eventos-regras" }
    ]
  },
  {
    id: "D4", bloco: "04 · Responsabilidades",
    enunciado: "Explique por que o Scrum Master não é gerente da equipe e por que o Product Owner não é distribuidor de tarefas. Relacione com autogestão.",
    respostaModelo: "O Scrum Master responde por estabelecer o Scrum: ensina teoria e prática, facilita eventos e apoia a remoção de impedimentos. Ele atua por serviço e influência, sem distribuir tarefas, aprovar trabalho individual ou decidir como desenvolver. O Product Owner tem autoridade sobre o produto: maximiza valor e ordena o Product Backlog, mas não decide o modo de trabalho dos Developers. Pela autogestão, o próprio Scrum Team decide quem faz o quê, quando e como, dentro dos limites da organização, e a responsabilidade acompanha essa autonomia.",
    pontosChave: [
      { texto: "O que o SM faz e não faz", ancora: "papeis-sm" },
      { texto: "Autoridade do PO é sobre o produto", ancora: "papeis-po" },
      { texto: "Autogestão", ancora: "papeis-autogestao" },
      { texto: "Autoridade direta é interpretação incorreta", ancora: "papeis-autoridade" }
    ]
  },
  {
    id: "D5", bloco: "05 · Requisito, restrição e premissa",
    enunciado: "O prazo final do projeto é fixo e a entrega do servidor pelo fornecedor ainda não foi confirmada. Classifique as duas informações, explique a diferença entre os três conceitos e diga como tratar a premissa.",
    respostaModelo: "O prazo é uma restrição: um limite que reduz as opções do planejamento. A entrega do servidor é uma premissa: algo aceito como verdadeiro para planejar, mas sem garantia. Um requisito, por sua vez, é uma capacidade que o produto deve atender (ex.: emitir relatórios em tempo real). Se a entrega atrasar, a premissa vira um risco, então ela deve ser acompanhada: responsável pela confirmação, data de verificação, avaliação de impacto e resposta preparada.",
    pontosChave: [
      { texto: "Prazo = restrição", ancora: "proj-restricao" },
      { texto: "Entrega do servidor = premissa", ancora: "proj-premissa" },
      { texto: "Definição de requisito", ancora: "proj-requisito" },
      { texto: "Pergunta-chave de cada um", ancora: "proj-comparacao" },
      { texto: "Premissa instável vira risco e como tratar", ancora: "proj-premissa-risco" }
    ]
  },
  {
    id: "D6", bloco: "06 · Histórias de usuário",
    enunciado: "Escreva uma história de usuário para: \"o cliente de um app de delivery quer acompanhar onde está o pedido\". Inclua dois critérios de aceitação e explique os três Cs.",
    respostaModelo: "Exemplo: \"Como cliente do aplicativo, quero acompanhar a localização do meu pedido em tempo real, para saber quando ele vai chegar.\" Critérios: (1) após o pedido sair para entrega, o mapa mostra a posição do entregador, atualizada pelo menos a cada 30 segundos; (2) o app exibe a previsão de chegada em minutos e notifica quando o entregador estiver a menos de 5 minutos. Os três Cs: o Cartão registra o lembrete conciso, a Conversa constrói o entendimento entre negócio e equipe e a Confirmação usa exemplos e critérios de aceitação para verificar o resultado.",
    pontosChave: [
      { texto: "Modelo ator / capacidade / benefício", ancora: "hist-modelo" },
      { texto: "Critérios específicos e verificáveis", ancora: "hist-criterio" },
      { texto: "Três Cs", ancora: "hist-3cs" },
      { texto: "Sem detalhes técnicos de implementação", ancora: "hist-nao-tecnica" }
    ]
  },
  {
    id: "D7", bloco: "06 · Histórias de usuário",
    enunciado: "Uma especificação detalha o banco de dados e a API de avaliações, mas não informa o usuário nem o benefício. Ela é uma história de usuário? Justifique e diga onde esse texto se encaixa.",
    respostaModelo: "Não. O texto descreve uma solução técnica e não traz ator, capacidade na perspectiva do usuário nem benefício. Detalhes de banco e arquitetura pertencem à discussão de solução. O texto pode funcionar como tarefa técnica ou decisão de implementação associada a uma história, mas a necessidade e o valor ainda precisam ser esclarecidos (ex.: \"Como usuário, quero avaliar o entregador, para que outros conheçam a qualidade do serviço\").",
    pontosChave: [
      { texto: "Falta ator e benefício", ancora: "hist-modelo" },
      { texto: "História não é especificação técnica", ancora: "hist-nao-tecnica" },
      { texto: "Pode ser tarefa técnica associada", ancora: "hist-nao-tecnica" },
      { texto: "Exemplo correto de história", ancora: "hist-exemplo" }
    ]
  },
  {
    id: "D8", bloco: "07 · RUP",
    enunciado: "Descreva as quatro fases do RUP e explique por que ele não é Cascata nem Scrum, ocupando uma posição intermediária.",
    respostaModelo: "Concepção: avalia visão, escopo, viabilidade e riscos iniciais. Elaboração: estabiliza a arquitetura (arquitetura executável) e reduz os riscos mais importantes. Construção: produz capacidades por iterações, com testes contínuos e integração. Transição: implanta, treina e ajusta o produto para uso. Não é Cascata porque as fases indicam ênfase, o desenvolvimento ocorre em iterações e as disciplinas atravessam as fases. Não é Scrum porque descreve disciplinas, papéis e artefatos detalhados, enquanto o Scrum é um framework mínimo. Por isso fica no meio: mais adaptativo que o sequencial e mais prescritivo e documental que o Scrum, podendo ficar burocrático se mal adaptado.",
    pontosChave: [
      { texto: "Quatro fases", ancora: "rup-fases" },
      { texto: "Concepção: visão, escopo, viabilidade", ancora: "rup-concepcao" },
      { texto: "Elaboração: arquitetura executável", ancora: "rup-elaboracao" },
      { texto: "Construção: iterações e testes contínuos", ancora: "rup-construcao" },
      { texto: "Transição: implantação e treinamento", ancora: "rup-transicao" },
      { texto: "Iterativo, dirigido por riscos, centrado na arquitetura", ancora: "rup-definicao" },
      { texto: "Não é Cascata", ancora: "rup-nao-cascata" },
      { texto: "Não é Scrum", ancora: "rup-nao-scrum" },
      { texto: "Posição intermediária", ancora: "rup-intermediario" }
    ]
  }
]);
