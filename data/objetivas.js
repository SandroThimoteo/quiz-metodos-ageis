// Questões objetivas. Cada alternativa: [texto, correta (1/0), explicação, âncora no resumo].
// No fim do arquivo, as listas viram objetos { texto, correta, explicacao, ancora }.
(function () {
  const B1 = "01 · Crise do Software", B2 = "02 · Fundamentos do Scrum", B3 = "03 · Eventos e time-boxes",
        B4 = "04 · Responsabilidades", B5 = "05 · Requisito, restrição e premissa",
        B6 = "06 · Histórias de usuário", B7 = "07 · RUP";

  const Q = [
    // ---------- Bloco 01 ----------
    [B1, "Qual alternativa representa uma causa associada à Crise do Software?", [
      ["Excesso de profissionais especializados.", 0, "Equipes maiores e especializadas foram efeito do crescimento dos sistemas, não a causa central.", "crise-complexidade"],
      ["Complexidade crescente sem evolução equivalente das práticas.", 1, "Os sistemas cresceram em tamanho, integração e criticidade, mas os métodos de coordenação não acompanharam.", "crise-complexidade"],
      ["Uso excessivo de métodos ágeis.", 0, "Os métodos iterativos e ágeis surgiram depois, como resposta aos problemas.", "crise-iterativo"],
      ["Estagnação dos computadores.", 0, "Hardware sozinho não explica problemas de requisitos, gestão e qualidade.", "crise-complexidade"]]],
    [B1, "Sobre o relatório CHAOS (1994), qual interpretação é a adequada?", [
      ["Os 16,2% de sucesso são a taxa atual de qualquer projeto de software.", 0, "Os números não devem ser apresentados como taxas atuais universais.", "crise-chaos"],
      ["Os números descrevem a amostra e a metodologia daquele período e servem como contextualização histórica.", 1, "É assim que a prova usa esses dados.", "crise-chaos"],
      ["52,7% dos projetos foram cancelados.", 0, "52,7% foram \"desafiados\"; os cancelados foram 31,1%.", "crise-chaos"],
      ["O relatório comprova que métodos ágeis fracassam.", 0, "O estudo é de 1994 e descreve projetos daquela época, sem tratar de ágil.", "crise-chaos"]]],
    [B1, "Qual alternativa NÃO é uma causa gerencial da Crise do Software?", [
      ["Cronogramas definidos antes da compreensão do problema.", 0, "É uma causa gerencial, portanto não responde à pergunta.", "crise-causas-gerenciais"],
      ["Controle baseado em percentual concluído.", 0, "É uma causa gerencial, portanto não responde à pergunta.", "crise-causas-gerenciais"],
      ["Participação insuficiente dos usuários.", 1, "Essa é uma causa ligada aos requisitos, não à gestão.", "crise-causas-requisitos"],
      ["Subestimação do esforço.", 0, "É uma causa gerencial, portanto não responde à pergunta.", "crise-causas-gerenciais"]]],
    [B1, "Por que \"programar não bastava\" diante da crise?", [
      ["Porque as linguagens da época não compilavam código grande.", 0, "O material não trata de limitação de linguagem.", "crise-programar"],
      ["Porque código funcional em partes não garante sistema utilizável, seguro e sustentável; eram necessários requisitos, arquitetura, testes, configuração e manutenção.", 1, "Programar é só uma parte; a engenharia de software inteira é necessária.", "crise-programar"],
      ["Porque bastava contratar mais programadores.", 0, "Equipes maiores aumentam a complexidade de coordenação.", "crise-complexidade"],
      ["Porque documentação substitui testes.", 0, "Testes e integração são práticas necessárias por si só.", "crise-programar"]]],
    [B1, "No desenvolvimento iterativo e incremental, \"incrementar\" significa:", [
      ["Melhorar o que já existe.", 0, "Isso é iterar.", "crise-iterativo"],
      ["Acrescentar capacidade ao produto.", 1, "Incrementar acrescenta capacidade; iterar melhora o que já existe.", "crise-iterativo"],
      ["Validar tudo apenas ao final.", 0, "É justamente o problema da resposta sequencial.", "crise-sequencial"],
      ["Documentar todo o sistema antes de começar.", 0, "É característica da abordagem sequencial, não do incremento.", "crise-sequencial"]]],
    [B1, "Qual é o principal limite da resposta sequencial quando o conhecimento muda durante o projeto?", [
      ["A validação tardia aumenta o retrabalho.", 1, "Hipóteses ficam sem teste e usuários veem o produto tarde.", "crise-sequencial"],
      ["Ela impede qualquer documentação.", 0, "No modelo sequencial as mudanças percorrem muitos documentos.", "crise-sequencial"],
      ["Ela entrega valor cedo demais.", 0, "O problema é o oposto, porque o usuário vê o produto tarde.", "crise-sequencial"],
      ["Ela elimina riscos de integração.", 0, "Integrações acumulam riscos.", "crise-sequencial"]]],

    // ---------- Bloco 02 ----------
    [B2, "O Scrum é melhor descrito como:", [
      ["Um processo detalhado com todas as disciplinas e artefatos definidos.", 0, "Essa descrição é mais próxima do RUP.", "rup-nao-scrum"],
      ["Uma estrutura mínima (framework) para produzir valor em problemas complexos.", 1, "Scrum define responsabilidades, eventos, artefatos e regras mínimas.", "scrum-framework"],
      ["Uma metodologia sequencial com fases fixas.", 0, "O Scrum é empírico e iterativo.", "scrum-empirismo"],
      ["Um conjunto de ferramentas de software.", 0, "O Scrum define responsabilidades, eventos, artefatos e regras, não ferramentas.", "scrum-framework"]]],
    [B2, "Qual alternativa NÃO corresponde ao pensamento Lean no Scrum?", [
      ["Menos trabalho parcialmente concluído.", 0, "É Lean, portanto não responde à pergunta.", "scrum-lean"],
      ["Qualidade incorporada ao processo.", 0, "É Lean, portanto não responde à pergunta.", "scrum-lean"],
      ["Assumir grandes compromissos antes da aprendizagem.", 1, "O Lean defende o contrário: aprendizagem antes de grandes compromissos.", "scrum-lean"],
      ["Foco no valor do produto.", 0, "É Lean, portanto não responde à pergunta.", "scrum-lean"]]],
    [B2, "Um Product Backlog desatualizado compromete principalmente qual pilar?", [
      ["Transparência.", 1, "O backlog ordenado e acessível é um exemplo direto de transparência.", "scrum-transparencia"],
      ["Inspeção.", 0, "A inspeção é afetada depois, porque inspecionar sem transparência gera conclusões frágeis.", "scrum-inspecao"],
      ["Adaptação.", 0, "Não é o efeito inicial predominante.", "scrum-ciclo-pilares"],
      ["Empirismo.", 0, "Empirismo é a base do Scrum, não um dos três pilares.", "scrum-empirismo"]]],
    [B2, "Uma Retrospectiva identifica problemas, mas nenhuma ação de melhoria é definida. Qual pilar é comprometido?", [
      ["Transparência.", 0, "Os problemas foram vistos e discutidos.", "scrum-transparencia"],
      ["Inspeção.", 0, "A inspeção aconteceu, já que os problemas foram identificados.", "scrum-inspecao"],
      ["Adaptação.", 1, "É \"inspeção sem adaptação\": a retrospectiva vira ritual.", "scrum-inspecao-sem-adaptacao"],
      ["Nenhum, porque a Retrospectiva é opcional.", 0, "A Retrospectiva é um evento formal da Sprint.", "eventos-retro"]]],
    [B2, "Uma equipe cancela as Dailys e mantém um backlog desatualizado. Quais pilares são afetados primeiro?", [
      ["Adaptação e qualidade.", 0, "Qualidade não é pilar, e a adaptação é afetada só depois.", "scrum-pilares"],
      ["Inspeção e transparência.", 1, "Daily cancelada reduz a inspeção; backlog desatualizado reduz a transparência.", "scrum-ciclo-pilares"],
      ["Transparência e planejamento preditivo.", 0, "Planejamento preditivo não é pilar do Scrum.", "scrum-pilares"],
      ["Colaboração e contrato.", 0, "Não são pilares do Scrum.", "scrum-pilares"]]],
    [B2, "Qual sequência descreve corretamente o ciclo entre os pilares?", [
      ["Adaptação → inspeção → transparência.", 0, "A ordem está invertida.", "scrum-ciclo-pilares"],
      ["Transparência permite enxergar → inspeção permite compreender → adaptação permite melhorar → nova transparência mostra o efeito.", 1, "É o ciclo de aprendizagem do Scrum.", "scrum-ciclo-pilares"],
      ["Inspeção permite enxergar → transparência permite melhorar.", 0, "Os papéis estão trocados.", "scrum-pilares"],
      ["Os pilares são independentes e não se relacionam.", 0, "Eles formam um ciclo de aprendizagem.", "scrum-ciclo-pilares"]]],

    // ---------- Bloco 03 ----------
    [B3, "Para uma Sprint de duas semanas, qual proposta está claramente incorreta?", [
      ["Planning de 4 horas.", 0, "Fica dentro do máximo de 8 h.", "eventos-timeboxes"],
      ["Review de 4 horas.", 0, "É o máximo de uma Sprint de um mês, então não ultrapassa o limite.", "eventos-timeboxes"],
      ["Retrospectiva de 3 horas.", 0, "É o máximo de uma Sprint de um mês, então não ultrapassa o limite.", "eventos-timeboxes"],
      ["Daily Scrum de 30 minutos.", 1, "A Daily tem duração fixa de 15 minutos, qualquer que seja o tamanho da Sprint.", "eventos-daily"]]],
    [B3, "Qual é a duração máxima de uma Sprint?", [
      ["Duas semanas.", 0, "É uma duração comum, não o limite.", "eventos-sprint"],
      ["Um mês.", 1, "A Sprint tem duração fixa de até um mês.", "eventos-sprint"],
      ["Três meses.", 0, "Ultrapassa o limite.", "eventos-sprint"],
      ["Não há limite.", 0, "A Sprint tem duração fixa de até um mês.", "eventos-sprint"]]],
    [B3, "Qual pergunta NÃO faz parte da Sprint Planning?", [
      ["Por que esta Sprint é valiosa?", 0, "Faz parte da Planning.", "eventos-planning"],
      ["O que pode ser concluído?", 0, "Faz parte da Planning.", "eventos-planning"],
      ["Como o trabalho escolhido será realizado?", 0, "Faz parte da Planning.", "eventos-planning"],
      ["Como podemos melhorar nossas interações e ferramentas?", 1, "Esse é o foco da Sprint Retrospective.", "eventos-retro"]]],
    [B3, "Sobre a Daily Scrum, qual afirmação está correta?", [
      ["É um relatório de status para o Scrum Master.", 0, "Ela pertence aos Developers e não é relatório ao SM.", "eventos-erros-daily"],
      ["Os Developers inspecionam o progresso rumo ao Objetivo da Sprint e adaptam o Sprint Backlog.", 1, "É exatamente a finalidade da Daily.", "eventos-daily"],
      ["Deve seguir obrigatoriamente três perguntas fixas.", 0, "O formato é definido pelos Developers.", "eventos-erros-daily"],
      ["Serve para distribuir as tarefas do dia.", 0, "Não serve para distribuir tarefas.", "eventos-erros-daily"]]],
    [B3, "Quem participa da Sprint Review e qual o foco dela?", [
      ["Só os Developers, revisando o código.", 0, "Participam Scrum Team e interessados, e o foco é o resultado.", "eventos-review"],
      ["Scrum Team e interessados inspecionam o Incremento e o contexto e discutem adaptações no Product Backlog.", 1, "É a definição da Sprint Review.", "eventos-review"],
      ["Só o Scrum Master, avaliando o desempenho individual.", 0, "O SM não aprova individualmente o trabalho.", "papeis-sm"],
      ["Scrum Team discute processos e ferramentas.", 0, "Esse é o foco da Retrospectiva.", "eventos-retro"]]],
    [B3, "No meio da Sprint, surge uma mudança de entendimento sobre um item. O que é coerente com as regras do Scrum?", [
      ["O escopo pode ser esclarecido e renegociado com o Product Owner, desde que a mudança não ameace o Objetivo da Sprint.", 1, "O objetivo é protegido; o escopo pode evoluir.", "eventos-regras"],
      ["Nada pode mudar; o backlog fica congelado.", 0, "O Product Backlog pode ser refinado e o escopo, renegociado.", "eventos-regras"],
      ["O Objetivo da Sprint deve ser trocado sempre que surgir algo novo.", 0, "O objetivo oferece estabilidade; quem evolui é o escopo.", "eventos-objetivo-escopo"],
      ["O Scrum Master decide sozinho a mudança.", 0, "Quem ajuda a negociar o escopo é o PO.", "eventos-objetivo-escopo"]]],
    [B3, "O prazo apertou e a equipe propõe pular os testes exigidos pela Definição de Pronto. Avalie.", [
      ["É permitido se o PO autorizar.", 0, "Pressão de prazo não autoriza reduzir o padrão de qualidade.", "eventos-qualidade"],
      ["Não é aceitável: a qualidade não diminui durante a Sprint, e trabalho que não atende à Definição de Pronto não integra o Incremento.", 1, "A Definição de Pronto continua valendo mesmo sob pressão.", "eventos-qualidade"],
      ["É aceitável, porque a Definição de Pronto vale só na Review.", 0, "A Definição de Pronto continua válida o tempo todo.", "eventos-qualidade"],
      ["É aceitável se o débito for registrado depois.", 0, "Débitos ocultos reduzem a transparência.", "eventos-qualidade"]]],

    // ---------- Bloco 04 ----------
    [B4, "Quem ordena o Product Backlog?", [
      ["Scrum Master.", 0, "O SM estabelece o Scrum, mas não decide prioridades do produto.", "papeis-sm"],
      ["Product Owner.", 1, "Ordenar o Product Backlog é responsabilidade do PO.", "papeis-po"],
      ["Developers.", 0, "Eles criam o plano da Sprint, não ordenam o Product Backlog.", "papeis-developers"],
      ["O gerente do projeto.", 0, "O Scrum Team não tem esse papel nem hierarquia interna.", "papeis-sem-hierarquia"]]],
    [B4, "Qual atitude é coerente com o papel do Scrum Master?", [
      ["Distribuir as tarefas entre os Developers.", 0, "O SM não distribui tarefas.", "papeis-sm"],
      ["Aprovar individualmente o trabalho de cada Developer.", 0, "O SM não aprova individualmente o trabalho.", "papeis-sm"],
      ["Apoiar a remoção de impedimentos e ajudar todos a compreender teoria e prática do Scrum.", 1, "Ele atua por serviço, ensino, facilitação e influência.", "papeis-sm"],
      ["Decidir sozinho como o software será desenvolvido.", 0, "Quem decide como trabalhar são os Developers.", "papeis-developers"]]],
    [B4, "Quem decide internamente quem faz o quê, quando e como?", [
      ["O Product Owner.", 0, "A autoridade do PO é sobre o produto, não sobre o modo de trabalho.", "papeis-po"],
      ["O Scrum Master.", 0, "O SM não é gerente da equipe.", "papeis-sm"],
      ["O próprio Scrum Team, por autogestão, dentro dos limites organizacionais.", 1, "É a definição de autogestão.", "papeis-autogestao"],
      ["A diretoria da empresa.", 0, "A organização define propósito e limites, não a divisão interna do trabalho.", "papeis-autogestao"]]],
    [B4, "Numa empresa, o \"time de QA\" só recebe o código depois que os devs terminam, por meio de uma passagem formal. Isso está de acordo com o Scrum?", [
      ["Sim, porque especialidades existem.", 0, "Especialidades existem, mas não dividem a responsabilidade pelo Incremento.", "papeis-sem-hierarquia"],
      ["Não, porque no Scrum Team não há passagem formal entre departamentos internos e a qualidade pertence ao time inteiro.", 1, "Sem subequipes nem hierarquias.", "papeis-sem-hierarquia"],
      ["Sim, se o Scrum Master aprovar.", 0, "Isso não depende de aprovação do SM.", "papeis-sm"],
      ["Sim, porque testes não fazem parte da Definição de Pronto.", 0, "A qualidade segue a Definição de Pronto e é responsabilidade dos Developers.", "papeis-developers"]]],
    [B4, "\"O Product Owner é o chefe dos Developers.\" Essa afirmação é:", [
      ["Correta, porque o PO ordena o backlog.", 0, "Ordenar o backlog é decidir prioridade de produto, não chefiar pessoas.", "papeis-po"],
      ["Incorreta: PO e SM não comandam os Developers como chefes funcionais; o PO decide prioridades e os Developers decidem como realizar o trabalho.", 1, "Autoridade direta é uma interpretação incorreta.", "papeis-autoridade"],
      ["Correta só em Sprints de um mês.", 0, "A duração da Sprint não muda os papéis.", "papeis-autoridade"],
      ["Correta, porque o PO pode delegar tarefas.", 0, "Ele pode delegar atividades de gestão do backlog, não comandar o trabalho técnico.", "papeis-po"]]],

    // ---------- Bloco 05 ----------
    [B5, "\"O projeto deve terminar até 15 de dezembro.\" Como classificar?", [
      ["Requisito.", 0, "A data não descreve uma função ou capacidade do produto.", "proj-requisito"],
      ["Restrição.", 1, "É um limite que reduz as opções de planejamento.", "proj-restricao"],
      ["Premissa.", 0, "Não é algo aceito como verdadeiro sob incerteza, é um limite imposto.", "proj-premissa"],
      ["História de usuário.", 0, "Não tem ator, capacidade nem benefício.", "hist-modelo"]]],
    [B5, "\"O fornecedor entregará os servidores até o início dos testes.\" Como classificar?", [
      ["Requisito.", 0, "Não descreve capacidade do sistema.", "proj-requisito"],
      ["Restrição.", 0, "Não é um limite imposto, é uma suposição.", "proj-restricao"],
      ["Premissa, que pode originar um risco se não se confirmar.", 1, "É aceita como verdadeira para planejar, sem garantia.", "proj-premissa"],
      ["Critério de aceitação.", 0, "Não verifica o resultado de uma história.", "hist-criterio"]]],
    [B5, "\"O sistema deve emitir relatórios de estoque em tempo real.\" Como classificar?", [
      ["Requisito.", 1, "Descreve uma capacidade esperada e origina critérios de aceitação e testes.", "proj-requisito"],
      ["Restrição.", 0, "Não limita opções, descreve o que deve ser atendido.", "proj-restricao"],
      ["Premissa.", 0, "Não é uma suposição de planejamento.", "proj-premissa"],
      ["Time-box.", 0, "Time-box é duração de evento Scrum.", "eventos-timeboxes"]]],
    [B5, "O que fazer com uma premissa instável?", [
      ["Ignorar até ela falhar.", 0, "Ela deve ser acompanhada como fonte de risco.", "proj-premissa-risco"],
      ["Tratar como requisito do produto.", 0, "Cada categoria exige tratamento diferente.", "proj-por-que"],
      ["Registrar o responsável pela confirmação, definir data de verificação, avaliar o impacto se for falsa e preparar resposta.", 1, "É o acompanhamento de premissa como fonte de risco.", "proj-premissa-risco"],
      ["Removê-la do plano.", 0, "Ela sustenta o plano; o certo é monitorá-la.", "proj-premissa"]]],

    // ---------- Bloco 06 ----------
    [B6, "Qual alternativa apresenta corretamente uma história de usuário?", [
      ["Como usuário, quero avaliar o entregador para compartilhar a qualidade do serviço.", 1, "Tem ator, capacidade e benefício.", "hist-exemplo"],
      ["Criar tabela rating no banco.", 0, "Descreve solução técnica.", "hist-nao-tecnica"],
      ["Implementar módulo de estrelas.", 0, "Descreve implementação, sem ator nem benefício.", "hist-nao-tecnica"],
      ["RF-047: persistir avaliação.", 0, "É um requisito em outro formato, sem a perspectiva do usuário.", "hist-definicao"]]],
    [B6, "Os \"três Cs\" das histórias de usuário são:", [
      ["Cliente, Código e Contrato.", 0, "Não são os três Cs.", "hist-3cs"],
      ["Cartão, Conversa e Confirmação.", 1, "Lembrete conciso, construção de entendimento e critérios de aceitação.", "hist-3cs"],
      ["Custo, Cronograma e Comunicação.", 0, "Esses termos lembram gestão de projetos, não histórias.", "hist-3cs"],
      ["Captura, Codificação e Conclusão.", 0, "Não são os três Cs.", "hist-3cs"]]],
    [B6, "Qual é um bom critério de aceitação para a história de avaliar o entregador?", [
      ["\"A avaliação deve ser boa e rápida.\"", 0, "Não é específico nem verificável.", "hist-criterio"],
      ["\"Após uma entrega concluída, o usuário pode atribuir de 1 a 5 estrelas e registrar comentário opcional.\"", 1, "É específico, verificável e serve de base para teste.", "hist-criterio"],
      ["\"Usar PostgreSQL com índice na tabela ratings.\"", 0, "É decisão técnica, não critério de aceitação.", "hist-nao-tecnica"],
      ["\"O time deve terminar em 2 dias.\"", 0, "É prazo (restrição), não critério do resultado.", "proj-restricao"]]],
    [B6, "Sobre histórias de usuário no Scrum, é correto afirmar:", [
      ["São obrigatórias para todo item do Product Backlog.", 0, "O Guia do Scrum não prescreve o formato dos itens.", "hist-backlog"],
      ["São uma técnica possível; o backlog também pode ter defeitos, pesquisas e melhorias.", 1, "História é técnica, não exigência do Scrum.", "hist-backlog"],
      ["Devem ser divididas por camada técnica (front, back, banco).", 0, "Deve-se evitar divisão exclusivamente por camada técnica.", "hist-divisao"],
      ["Devem conter os detalhes de banco e API.", 0, "Esses detalhes pertencem à discussão de solução.", "hist-nao-tecnica"]]],

    // ---------- Bloco 07 ----------
    [B7, "Qual descrição representa melhor o RUP?", [
      ["Método totalmente ágil e idêntico ao Scrum.", 0, "O RUP é mais prescritivo e documental que o Scrum.", "rup-nao-scrum"],
      ["Modelo sequencial sem iterações.", 0, "O RUP é iterativo; as fases indicam ênfase.", "rup-nao-cascata"],
      ["Processo iterativo com atenção a arquitetura, riscos e documentação.", 1, "Iterativo, centrado na arquitetura e dirigido por riscos.", "rup-definicao"],
      ["Substituto do PMBOK criado pelo PMI.", 0, "O RUP é um processo de desenvolvimento de software, não um guia do PMI.", "rup-definicao"]]],
    [B7, "Em qual fase do RUP a equipe estabiliza a arquitetura e produz uma arquitetura executável?", [
      ["Concepção.", 0, "Na Concepção se avaliam visão, escopo e viabilidade.", "rup-concepcao"],
      ["Elaboração.", 1, "A Elaboração estabiliza a arquitetura e reduz os riscos mais importantes.", "rup-elaboracao"],
      ["Construção.", 0, "A Construção produz capacidades por iterações sobre a arquitetura já estabilizada.", "rup-construcao"],
      ["Transição.", 0, "A Transição trata de implantação e adoção.", "rup-transicao"]]],
    [B7, "Implantação, treinamento e aceitação pertencem a qual fase do RUP?", [
      ["Concepção.", 0, "A Concepção avalia visão, escopo e viabilidade.", "rup-concepcao"],
      ["Elaboração.", 0, "A Elaboração estabiliza a arquitetura.", "rup-elaboracao"],
      ["Construção.", 0, "A Construção foca em implementação, testes e incrementos.", "rup-construcao"],
      ["Transição.", 1, "A Transição leva o produto aos usuários.", "rup-transicao"]]],
    [B7, "Por que se diz que o RUP ocupa uma posição intermediária?", [
      ["Porque combina adaptação iterativa com forte estrutura de engenharia e governança: é mais adaptativo que o sequencial e mais prescritivo que o Scrum.", 1, "Essa é a posição intermediária descrita no material.", "rup-intermediario"],
      ["Porque é usado só em projetos médios.", 0, "O tamanho do projeto não define a posição.", "rup-intermediario"],
      ["Porque fica entre o Scrum e o Kanban.", 0, "O material compara o RUP com abordagens preditivas e adaptativas.", "rup-intermediario"],
      ["Porque não tem fases.", 0, "O RUP tem quatro fases.", "rup-fases"]]]
  ];

  window.OBJETIVAS = Q.map(([bloco, enunciado, alts], i) => ({
    id: i + 1,
    bloco,
    enunciado,
    alternativas: alts.map(([texto, correta, explicacao, ancora]) => ({ texto, correta: !!correta, explicacao, ancora }))
  }));
})();
