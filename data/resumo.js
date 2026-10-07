// Resumo: "Conteúdos complementares de Métodos Ágeis" (Aula 05, Prof. Marcos Bussab)
// Cada bloco e cada seção têm um id usado como âncora pelos links "Ver no resumo".
// Use "pegadinha" para caixas de destaque.
window.RESUMO = [
  {
    id: "abertura", num: "", titulo: "Abertura",
    secoes: [
      { id: "abertura-objetivos", titulo: "Objetivos e blocos",
        html: `<p><strong>Objetivos:</strong> reconhecer causas e efeitos da Crise do Software; relacionar os pilares do Scrum a eventos e artefatos; distinguir requisito, restrição e premissa; escrever histórias de usuário com critérios de aceitação; posicionar o RUP entre abordagens preditivas e adaptativas.</p>
<p><strong>Os 8 blocos:</strong> 01 Crise do Software · 02 Fundamentos do Scrum · 03 Eventos, regras e time-boxes · 04 Responsabilidades e autonomia · 05 Requisito, restrição e premissa · 06 Histórias de usuário · 07 Posicionamento do RUP · 08 Integração para as provas.</p>`,
        pegadinha: "Diagnóstico inicial: você deve saber justificar que a Daily Scrum dura no máximo 15 minutos, que o Scrum Master não distribui tarefas, que uma premissa pode virar risco, que história de usuário não é especificação técnica e que o RUP é iterativo, incremental e dirigido por riscos." }
    ]
  },
  {
    id: "crise", num: "01", titulo: "Crise do Software",
    secoes: [
      { id: "crise-definicao", titulo: "O significado de crise",
        html: `<p>O crescimento dos sistemas expôs limites técnicos e gerenciais do desenvolvimento. "Crise" descreve dificuldades <strong>recorrentes</strong> para produzir software confiável dentro das condições acordadas.</p>` },
      { id: "crise-sintomas", titulo: "Sintomas",
        html: `<p>Projetos excediam prazos e custos; produtos não atendiam às necessidades reais; defeitos surgiam em operação; a manutenção consumia esforço crescente.</p>` },
      { id: "crise-complexidade", titulo: "Complexidade acima da capacidade de gestão",
        html: `<p>A quantidade de componentes cresceu mais rápido que os métodos usados para coordená-los: dependências difíceis de visualizar, equipes maiores e especializadas, mudanças com efeitos indiretos e estimativas baseadas em informação incompleta. Hardware sozinho não explica problemas de requisitos, gestão e qualidade.</p>` },
      { id: "crise-causas-gerenciais", titulo: "Causas gerenciais",
        html: `<p>Planos frágeis eram tratados como compromissos precisos: subestimação do esforço, cronogramas definidos antes da compreensão do problema, comunicação fragmentada e controle baseado em percentual concluído.</p>` },
      { id: "crise-causas-requisitos", titulo: "Causas ligadas aos requisitos",
        html: `<p>Erros de entendimento contaminavam projeto, código e testes: necessidades ambíguas, participação insuficiente dos usuários, mudanças tratadas apenas como desvio e validação tardia do produto.</p>` },
      { id: "crise-programar", titulo: "Programar não bastava",
        html: `<p>Código funcional em partes não garante um sistema utilizável, seguro e sustentável. Também são necessários engenharia de requisitos, arquitetura e projeto, testes e integração, gestão de configuração, documentação e manutenção.</p>` },
      { id: "crise-chaos", titulo: "O relatório CHAOS (1994)",
        html: `<p>O estudo de 1994 quantificou resultados problemáticos de projetos: <strong>31,1%</strong> cancelados antes da conclusão, <strong>52,7%</strong> classificados como "desafiados" e <strong>16,2%</strong> concluídos no prazo e no orçamento.</p>`,
        pegadinha: "Os números descrevem a amostra e a metodologia <strong>daquele período</strong>, e não são taxas atuais universais. Amostra, critérios e contexto influenciam o resultado, e \"sucesso\" pode incluir valor, qualidade e adoção. A prova usa esses números como <strong>contextualização histórica</strong>." },
      { id: "crise-engenharia", titulo: "Engenharia de Software como resposta",
        html: `<p>A disciplina organizou práticas para transformar necessidades em sistemas confiáveis: processos explícitos, papéis e responsabilidades, métodos de especificação, verificação e validação, medição e melhoria.</p>` },
      { id: "crise-sequencial", titulo: "Limite da resposta sequencial",
        html: `<p>Quando o conhecimento muda durante o projeto, a validação tardia aumenta o retrabalho: hipóteses ficam sem teste, usuários veem o produto tarde, integrações acumulam riscos e mudanças percorrem muitos documentos.</p>` },
      { id: "crise-iterativo", titulo: "Desenvolvimento iterativo e incremental",
        html: `<p>Ciclos menores reduzem o intervalo entre decisão, resultado e aprendizagem. <strong>Iterar</strong> melhora o que já existe; <strong>incrementar</strong> acrescenta capacidade; entregas permitem validação; o feedback orienta o próximo ciclo.</p>` }
    ]
  },
  {
    id: "scrum", num: "02", titulo: "Fundamentos do Scrum",
    secoes: [
      { id: "scrum-framework", titulo: "Scrum como framework",
        html: `<p>Scrum oferece uma <strong>estrutura mínima</strong> para produzir valor diante de problemas complexos: responsabilidades definidas, eventos formais, artefatos transparentes e regras que conectam esses elementos.</p>` },
      { id: "scrum-empirismo", titulo: "Empirismo",
        html: `<p>O conhecimento surge da experiência e da observação dos resultados. Decisões usam as evidências disponíveis, incrementos tornam resultados observáveis, a inspeção identifica diferenças e a adaptação altera o curso do trabalho.</p>` },
      { id: "scrum-lean", titulo: "Pensamento Lean",
        html: `<p>O Scrum também busca reduzir desperdícios e concentrar esforço no essencial: menos trabalho parcialmente concluído, qualidade incorporada ao processo, <strong>aprendizagem antes de grandes compromissos</strong> e foco no valor do produto.</p>` },
      { id: "scrum-pilares", titulo: "Os três pilares",
        html: `<p><strong>Transparência, inspeção e adaptação</strong> sustentam o controle empírico. A transparência cria entendimento comum, a inspeção compara resultado e objetivo, e a adaptação corrige desvios e aproveita a aprendizagem.</p>` },
      { id: "scrum-transparencia", titulo: "Transparência",
        html: `<p>As informações relevantes precisam estar visíveis e compreendidas por quem decide: Product Backlog ordenado e acessível, Objetivo do Produto conhecido, Sprint Backlog atualizado e Definição de Pronto compartilhada.</p>` },
      { id: "scrum-inspecao", titulo: "Inspeção",
        html: `<p>Equipe e interessados examinam artefatos e progresso com frequência adequada. A Daily Scrum inspeciona o avanço da Sprint, a Sprint Review examina o resultado e o contexto, e a Retrospectiva examina a forma de trabalhar.</p>`,
        pegadinha: "Inspeção sem transparência produz conclusões frágeis." },
      { id: "scrum-adaptacao", titulo: "Adaptação",
        html: `<p>Quando a inspeção revela uma diferença relevante, a equipe ajusta o produto ou o processo: reordena itens futuros, revisa o plano da Sprint, melhora práticas técnicas, trata impedimentos ou experimenta uma mudança de processo.</p>` },
      { id: "scrum-inspecao-sem-adaptacao", titulo: "Inspeção sem adaptação",
        html: `<p>Reuniões perdem valor quando os problemas identificados não geram decisões. Retrospectivas viram rituais, erros se repetem, impedimentos permanecem e a confiança da equipe diminui.</p>` },
      { id: "scrum-ciclo-pilares", titulo: "Relação entre os pilares",
        html: `<p>Os pilares formam um ciclo de aprendizagem: transparência permite <strong>enxergar</strong>, inspeção permite <strong>compreender</strong>, adaptação permite <strong>melhorar</strong>, e uma nova transparência mostra o efeito da mudança.</p>
<p>Em situações-problema, cada caso tem um pilar <strong>inicialmente</strong> mais afetado: backlog desatualizado afeta a transparência, Daily cancelada afeta a inspeção e retrospectiva sem ação afeta a adaptação.</p>` }
    ]
  },
  {
    id: "eventos", num: "03", titulo: "Eventos, regras e time-boxes",
    secoes: [
      { id: "eventos-sprint", titulo: "A Sprint contém os demais eventos",
        html: `<p>Cada Sprint transforma ideias em valor por meio de um <strong>Incremento utilizável</strong>. Tem duração fixa de <strong>até um mês</strong>, a nova Sprint começa imediatamente após a anterior, o Objetivo da Sprint orienta as decisões e todos os outros eventos ocorrem dentro dela.</p>` },
      { id: "eventos-planning", titulo: "Sprint Planning",
        html: `<p>A equipe inicia a Sprint definindo valor, seleção de trabalho e plano inicial. Responde três perguntas: <strong>por que</strong> esta Sprint é valiosa, <strong>o que</strong> pode ser concluído e <strong>como</strong> o trabalho escolhido será realizado. Time-box: <strong>até 8 horas</strong> para Sprint de um mês.</p>` },
      { id: "eventos-daily", titulo: "Daily Scrum",
        html: `<p>Os <strong>Developers</strong> inspecionam o progresso e adaptam o Sprint Backlog. É um evento diário, com duração máxima de <strong>15 minutos</strong>, foco no Objetivo da Sprint e formato definido pelos próprios Developers.</p>` },
      { id: "eventos-review", titulo: "Sprint Review",
        html: `<p>O Scrum Team e os interessados inspecionam o resultado e discutem o que fazer depois: o Incremento e o contexto do produto, mudanças no ambiente e possíveis adaptações no Product Backlog. Time-box: <strong>até 4 horas</strong> para Sprint de um mês.</p>` },
      { id: "eventos-retro", titulo: "Sprint Retrospective",
        html: `<p>A equipe planeja maneiras de aumentar qualidade e efetividade, olhando para pessoas e interações, processos e ferramentas e Definição de Pronto. Time-box: <strong>até 3 horas</strong> para Sprint de um mês.</p>` },
      { id: "eventos-timeboxes", titulo: "Time-boxes oficiais",
        html: `<table><thead><tr><th>Evento</th><th>Máximo (Sprint de 1 mês)</th></tr></thead><tbody>
<tr><td>Sprint</td><td>até 1 mês</td></tr>
<tr><td>Sprint Planning</td><td>até 8 h</td></tr>
<tr><td>Daily Scrum</td><td>15 min (fixo)</td></tr>
<tr><td>Sprint Review</td><td>até 4 h</td></tr>
<tr><td>Sprint Retrospective</td><td>até 3 h</td></tr>
</tbody></table>
<p>Sprints menores normalmente usam eventos mais curtos. <strong>A Daily é sempre de 15 minutos.</strong></p>` },
      { id: "eventos-erros-daily", titulo: "Erros frequentes sobre a Daily",
        html: `<p>A Daily pertence aos Developers e <strong>não é relatório ao Scrum Master</strong>. Ela não precisa seguir três perguntas fixas, não serve para distribuir tarefas, não substitui conversas ao longo do dia e deve resultar em plano atualizado quando necessário.</p>` },
      { id: "eventos-regras", titulo: "Regras durante a Sprint",
        html: `<p>A equipe protege o Objetivo da Sprint enquanto aprende com o trabalho. Mudanças não podem ameaçar o Objetivo da Sprint, a qualidade não diminui, o Product Backlog pode ser refinado e o escopo pode ser esclarecido e renegociado com o Product Owner.</p>` },
      { id: "eventos-objetivo-escopo", titulo: "Objetivo da Sprint e escopo",
        html: `<p>O objetivo oferece <strong>estabilidade</strong>, enquanto o escopo pode <strong>evoluir</strong> conforme a aprendizagem. O objetivo explica por que o trabalho importa, os itens selecionados são um plano inicial, os Developers ajustam o plano e o Product Owner ajuda a negociar o escopo.</p>` },
      { id: "eventos-qualidade", titulo: "Qualidade durante a Sprint",
        html: `<p>Pressão de prazo <strong>não autoriza</strong> reduzir o padrão de qualidade acordado. A Definição de Pronto continua válida, trabalho incompleto não integra o Incremento, débitos ocultos reduzem a transparência e a qualidade sustenta a capacidade futura de adaptação.</p>` }
    ]
  },
  {
    id: "papeis", num: "04", titulo: "Responsabilidades e autonomia",
    secoes: [
      { id: "papeis-scrum-team", titulo: "Um Scrum Team",
        html: `<p>Product Owner, Scrum Master e Developers compartilham a responsabilidade pelo valor produzido. É uma equipe coesa, com foco no Objetivo do Produto, as competências necessárias ao trabalho e autogestão dentro dos limites organizacionais.</p>` },
      { id: "papeis-po", titulo: "Product Owner",
        html: `<p>Responde pela <strong>maximização do valor</strong> e pela gestão efetiva do Product Backlog. Comunica o Objetivo do Produto, cria e comunica itens, <strong>ordena o Product Backlog</strong> e garante transparência e compreensão.</p>`,
        pegadinha: "O PO <strong>não é distribuidor de tarefas</strong>. A autoridade dele é sobre decisões de produto, não sobre o modo de trabalho dos Developers. Ele pode delegar atividades de gestão do backlog, mas continua responsável pelos resultados dessas decisões." },
      { id: "papeis-sm", titulo: "Scrum Master",
        html: `<p>Responde por estabelecer o Scrum conforme definido no Guia. Ajuda todos a compreender teoria e prática, promove a efetividade do Scrum Team, apoia a remoção de impedimentos e facilita eventos quando necessário.</p>`,
        pegadinha: "O Scrum Master <strong>não é gerente da equipe</strong>. Ele não distribui tarefas, não aprova individualmente o trabalho, não decide sozinho como desenvolver e não substitui a responsabilidade dos Developers. Atua por <strong>serviço, ensino, facilitação e influência</strong>." },
      { id: "papeis-developers", titulo: "Developers",
        html: `<p>Criam qualquer aspecto de um Incremento utilizável a cada Sprint. Criam o plano da Sprint, mantêm a qualidade segundo a Definição de Pronto, adaptam o plano diariamente e responsabilizam-se mutuamente como profissionais.</p>` },
      { id: "papeis-autogestao", titulo: "Autogestão",
        html: `<p>O Scrum Team decide internamente <strong>quem faz o quê, quando e como</strong>. A autonomia exige objetivos claros, as decisões respeitam competências e dependências, a responsabilidade acompanha a autonomia e a gestão organizacional continua definindo propósito e limites.</p>` },
      { id: "papeis-sem-hierarquia", titulo: "Sem subequipes ou hierarquias",
        html: `<p>Especialidades existem, mas não dividem a responsabilidade pelo Incremento. Programação, testes e design colaboram, a qualidade pertence ao time inteiro, não existe passagem formal entre departamentos internos e o foco comum reduz a otimização local.</p>` },
      { id: "papeis-autoridade", titulo: "Autoridade direta é uma interpretação incorreta",
        html: `<p>PO e Scrum Master não comandam os Developers como chefes funcionais. O PO decide prioridades do produto, o SM protege a compreensão do framework, os Developers decidem como realizar o trabalho e conflitos exigem diálogo e clareza de responsabilidades.</p>` }
    ]
  },
  {
    id: "proj", num: "05", titulo: "Requisito, restrição e premissa",
    secoes: [
      { id: "proj-por-que", titulo: "Por que separar os conceitos",
        html: `<p>Classificações incorretas geram planos frágeis e riscos invisíveis. O requisito descreve o que precisa ser atendido, a restrição limita opções, a premissa sustenta o plano enquanto não há confirmação, e cada categoria exige tratamento diferente.</p>` },
      { id: "proj-requisito", titulo: "Requisito",
        html: `<p>Condição ou capacidade necessária para satisfazer uma necessidade, contrato, norma ou especificação. Pode ser funcional ou não funcional, precisa de origem identificável e deve permitir verificação ou validação.</p>
<p class="exemplo"><strong>Exemplo:</strong> "O sistema deve emitir relatórios de estoque em tempo real." Descreve uma capacidade esperada, pode exigir esclarecimento de desempenho, origina critérios de aceitação e testes e integra o escopo do produto.</p>` },
      { id: "proj-restricao", titulo: "Restrição",
        html: `<p>Limite que reduz as opções disponíveis para o projeto ou para a solução: prazo contratual, orçamento máximo, tecnologia obrigatória, norma regulatória, equipe ou infraestrutura disponível.</p>
<p class="exemplo"><strong>Exemplo:</strong> "O projeto deve terminar até 15 de dezembro." A data limita o planejamento e não descreve uma função do produto. Pode exigir redução de escopo ou aumento de capacidade, e precisa ser monitorada.</p>` },
      { id: "proj-premissa", titulo: "Premissa",
        html: `<p>Condição considerada verdadeira para fins de planejamento, embora ainda exista incerteza. Exemplos: o fornecedor entregará no prazo, o especialista estará disponível, os dados fornecidos terão qualidade adequada, os usuários participarão das validações.</p>
<p class="exemplo"><strong>Exemplo:</strong> "O fornecedor entregará os servidores até o início dos testes." A afirmação permite construir o cronograma, mas a equipe não controla totalmente sua confirmação. Se for falsa, o plano precisará mudar, e a premissa pode originar um risco.</p>` },
      { id: "proj-comparacao", titulo: "Comparação direta",
        html: `<table><thead><tr><th>Categoria</th><th>Pergunta-chave</th></tr></thead><tbody>
<tr><td>Requisito</td><td>O que deve ser atendido?</td></tr>
<tr><td>Restrição</td><td>Qual limite precisa ser respeitado?</td></tr>
<tr><td>Premissa</td><td>O que estamos aceitando como verdadeiro?</td></tr>
</tbody></table>` },
      { id: "proj-premissa-risco", titulo: "Premissas e riscos",
        html: `<p>Uma premissa instável merece acompanhamento como fonte de risco: registrar o responsável pela confirmação, definir a data de verificação, avaliar o impacto se a condição for falsa e preparar uma resposta quando necessário.</p>` }
    ]
  },
  {
    id: "hist", num: "06", titulo: "Histórias de usuário",
    secoes: [
      { id: "hist-definicao", titulo: "O que é uma história de usuário",
        html: `<p>Uma forma leve de registrar necessidades e promover conversa. Descreve uma necessidade sob a perspectiva de quem busca determinado benefício: linguagem compreensível ao negócio, foco no resultado esperado, detalhamento progressivo e convite para conversa.</p>` },
      { id: "hist-modelo", titulo: "Modelo mais conhecido",
        html: `<p><strong>"Como [tipo de usuário], quero [capacidade], para [benefício]."</strong> Mostra quem possui a necessidade, o que precisa fazer e por que isso produz valor. O modelo auxilia o aprendizado, mas <strong>não é regra universal</strong>.</p>` },
      { id: "hist-exemplo", titulo: "Exemplo completo",
        html: `<p class="exemplo">"Como usuário do aplicativo, quero avaliar o entregador após o pedido, para que outros usuários conheçam a qualidade do serviço."</p>
<p>Ator: usuário do aplicativo · Capacidade: avaliar o entregador · Benefício: compartilhar informação sobre a qualidade.</p>` },
      { id: "hist-3cs", titulo: "Os três Cs",
        html: `<p><strong>Cartão</strong> registra um lembrete conciso · <strong>Conversa</strong> constrói o entendimento · <strong>Confirmação</strong> usa exemplos e critérios de aceitação. Os três Cs descrevem a natureza <strong>social</strong> das histórias.</p>` },
      { id: "hist-criterio", titulo: "Critério de aceitação",
        html: `<p class="exemplo">Exemplo: "Após uma entrega concluída, o usuário pode atribuir de 1 a 5 estrelas e registrar comentário opcional."</p>
<p>Um bom critério é específico e verificável, relacionado à história, compreensível por negócio e equipe, e serve de base para testes e demonstração.</p>` },
      { id: "hist-nao-tecnica", titulo: "História não é especificação técnica",
        html: `<p>Detalhes de banco de dados e arquitetura pertencem à discussão de solução. A história preserva o problema e o valor, a equipe decide a implementação, restrições técnicas podem ser registradas separadamente e os critérios de aceitação tornam o resultado verificável.</p>`,
        pegadinha: "\"Implementar endpoint POST /ratings e persistir dados em tabela relacional\" é uma <strong>história muito técnica</strong>. Descreve solução, não necessidade, e não identifica benefício ao usuário. Pode ser uma tarefa técnica associada, mas não substitui a história de valor." },
      { id: "hist-divisao", titulo: "Divisão de histórias",
        html: `<p>Uma história precisa caber em um ciclo sem perder valor observável. Separe fluxos alternativos e regras complexas, entregue primeiro o caminho principal e <strong>evite dividir exclusivamente por camada técnica</strong>.</p>` },
      { id: "hist-backlog", titulo: "Histórias e Product Backlog",
        html: `<p>História de usuário é uma técnica possível para descrever itens, <strong>não uma exigência do Scrum</strong>. O Guia do Scrum não prescreve o formato dos itens, o backlog pode conter defeitos, pesquisas e melhorias, cada item precisa ser transparente e o refinamento acrescenta tamanho e detalhes.</p>` }
    ]
  },
  {
    id: "rup", num: "07", titulo: "Posicionamento do RUP",
    secoes: [
      { id: "rup-definicao", titulo: "O que é RUP",
        html: `<p>O <strong>Rational Unified Process</strong> organiza o desenvolvimento em ciclos, fases, disciplinas, papéis e artefatos. É <strong>iterativo e incremental, orientado por casos de uso, centrado na arquitetura e dirigido por riscos</strong>.</p>` },
      { id: "rup-fases", titulo: "As quatro fases",
        html: `<p><strong>Concepção → Elaboração → Construção → Transição.</strong> Cada fase tem objetivos próprios e pode conter <strong>várias iterações</strong>.</p>` },
      { id: "rup-concepcao", titulo: "Concepção",
        html: `<p>A organização avalia visão, escopo, viabilidade e justificativa do investimento: principais interessados, casos de uso críticos, riscos iniciais e estimativa preliminar.</p>` },
      { id: "rup-elaboracao", titulo: "Elaboração",
        html: `<p>A equipe <strong>estabiliza a arquitetura</strong> e reduz os riscos mais importantes: arquitetura executável, requisitos críticos detalhados, provas técnicas e plano refinado para a construção.</p>` },
      { id: "rup-construcao", titulo: "Construção",
        html: `<p>Iterações produzem capacidades até que o produto esteja preparado para uso: implementação e integração, testes contínuos, incrementos sucessivos e gestão de mudanças e configuração.</p>` },
      { id: "rup-transicao", titulo: "Transição",
        html: `<p>O produto chega aos usuários e recebe ajustes para adoção e operação: implantação, treinamento, correção de problemas, aceitação e disponibilização.</p>` },
      { id: "rup-nao-cascata", titulo: "RUP não é Cascata",
        html: `<p>As fases indicam ênfase e objetivos, mas o desenvolvimento ocorre por iterações. Disciplinas atravessam as fases, riscos orientam prioridades, a arquitetura evolui por evidências e incrementos permitem feedback.</p>` },
      { id: "rup-nao-scrum", titulo: "RUP não é Scrum",
        html: `<p>O RUP oferece um processo mais detalhado, com papéis e artefatos adaptáveis ao contexto. O Scrum define um framework mínimo, enquanto o RUP descreve disciplinas e produtos de trabalho. Ambos podem trabalhar iterativamente, e o RUP pode se tornar pesado quando mal adaptado.</p>` },
      { id: "rup-intermediario", titulo: "Posição intermediária",
        html: `<p>O RUP combina adaptação iterativa com forte estrutura de engenharia e governança. É mais adaptativo que uma execução estritamente sequencial, mais prescritivo e documental que o Scrum, adequado a riscos arquiteturais relevantes e precisa de adaptação para evitar burocracia.</p>` }
    ]
  },
  {
    id: "rev", num: "08", titulo: "Integração para as provas",
    secoes: [
      { id: "rev-mapa", titulo: "Mapa de decisão",
        html: `<p>A leitura cuidadosa do enunciado revela qual conceito está sendo avaliado:</p>
<table><thead><tr><th>Se o enunciado fala de…</th><th>…o conceito é</th></tr></thead><tbody>
<tr><td>História e causas</td><td>Crise do Software</td></tr>
<tr><td>Regras formais</td><td>Guia do Scrum</td></tr>
<tr><td>Limites e hipóteses</td><td>Vocabulário de projetos</td></tr>
<tr><td>Necessidade e valor</td><td>História de usuário</td></tr>
<tr><td>Iterações com processo estruturado</td><td>RUP</td></tr>
</tbody></table>` },
      { id: "rev-scrum", titulo: "Revisão rápida: Scrum",
        html: `<p>A Daily Scrum dura 15 minutos · o Scrum Team não possui hierarquia interna · o Product Owner ordena o Product Backlog · os Developers decidem como trabalhar · transparência, inspeção e adaptação formam os pilares.</p>` },
      { id: "rev-projetos", titulo: "Revisão rápida: projetos",
        html: `<p>Capacidade a atender é <strong>requisito</strong> · limite a respeitar é <strong>restrição</strong> · condição aceita como verdadeira é <strong>premissa</strong> · premissa instável pode originar <strong>risco</strong>.</p>` },
      { id: "rev-historias", titulo: "Revisão rápida: histórias",
        html: `<p>Ator · capacidade · benefício · critérios de aceitação · detalhes técnicos tratados no momento adequado.</p>` },
      { id: "rev-rup", titulo: "Revisão rápida: RUP",
        html: `<p>Quatro fases · arquitetura central · riscos orientam iterações · casos de uso orientam requisitos · artefatos devem ser adaptados ao contexto.</p>` },
      { id: "rev-sintese", titulo: "Síntese final",
        html: `<p>As provas exigem menos memorização isolada e mais ligar cada conceito à sua finalidade: a <strong>Crise</strong> explica por que a disciplina evoluiu, o <strong>Scrum</strong> organiza a aprendizagem empírica, o <strong>vocabulário de projetos</strong> melhora o planejamento, as <strong>histórias</strong> aproximam necessidade e conversa e o <strong>RUP</strong> combina iteração e estrutura.</p>` }
    ]
  }
];
