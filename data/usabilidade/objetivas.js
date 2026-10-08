// Questões objetivas de Padrões de Usabilidade (as 55 da "REVISÃO – GABARITO").
// Cada questão: [bloco, enunciado, alternativas, número na revisão, dissertativa (opcional)].
// Cada alternativa: [texto, correta (1/0), explicação, âncora no resumo].
(function () {
  const U1 = "01 · Fundamentos e princípios", U2 = "02 · Heurísticas", U3 = "03 · Cores e hierarquia visual",
        U4 = "04 · Acessibilidade e WCAG", U5 = "05 · Telas e navegação", U6 = "06 · Flat Design e comportamento",
        U7 = "07 · WIMP, multimodais e enativas", U8 = "08 · Affordances, semiótica e emoção",
        U9 = "09 · Guidelines e checklist";
  const ABS = "u-dica-prova"; // alternativas com termos absolutos ou fora do assunto (hardware, código, banco)

  const Q = [
    // ---------- Questões 1 a 40 ----------
    [U1, "Segundo a ISO 9241-11, usabilidade é a capacidade de um produto ser usado por usuários específicos para atingir objetivos específicos com eficácia, eficiência e satisfação em um contexto específico de uso. Considerando os conceitos fundamentais de usabilidade e metas de interação, assinale a alternativa correta.", [
      ["A usabilidade de um sistema é uma propriedade intrínseca e fixa, garantindo que o mesmo nível de desempenho e facilidade seja experimentado igualmente por iniciantes e especialistas.", 0, "Usabilidade depende do usuário e do contexto de uso; não é propriedade fixa, igual para todos.", "u-iso"],
      ["A eficiência refere-se exclusivamente à precisão e à completude com que os usuários alcançam seus objetivos finais, independentemente do esforço ou tempo despendido.", 0, "Precisão e completude definem a eficácia. Eficiência relaciona o resultado aos recursos e ao tempo gastos.", "u-metas"],
      ["A satisfação diz respeito ao quão agradável é a experiência do usuário ao interagir com o sistema, promovendo uma percepção positiva e incentivando o uso contínuo.", 1, "É a definição de satisfação. Gabarito corrigido pela professora em 03/10.", "u-metas"],
      ["A memorabilidade é a capacidade de o usuário realizar uma tarefa complexa na primeira tentativa, sem necessidade de aprendizado prévio ou exposição anterior ao sistema.", 0, "Memorabilidade é conseguir usar de novo depois de um tempo sem uso, sem reaprender.", "u-nielsen-atributos"],
      ["A eficácia mede a rapidez com que os usuários conseguem concluir uma tarefa utilizando o menor esforço computacional possível.", 0, "Rapidez e esforço têm a ver com eficiência; eficácia é atingir o objetivo com precisão e completude.", "u-metas"]], 1],
    [U1, "Os princípios clássicos de Jakob Nielsen e Donald Norman orientam interfaces centradas no ser humano. Entre eles, destaca-se um mecanismo essencial para mitigar a frustração e garantir que o usuário possa reverter ações indesejadas. Assinale a alternativa que descreve corretamente esse princípio.", [
      ["Visibilidade do status do sistema, que garante que a interface sempre mantenha o usuário informado sobre o que está acontecendo por meio de feedbacks visuais em tempo real.", 0, "A heurística existe, mas trata de informar o usuário, não de reverter ações.", "u-heuristicas-exemplos"],
      ["Controle do usuário e liberdade, que oferece saídas de emergência claramente marcadas, como funções de desfazer (undo) e refazer (redo), permitindo abandonar estados indesejados.", 1, "Reverter ações = desfazer/refazer = controle do usuário e liberdade.", "u-controle-usuario"],
      ["Consistência e padrões, que obriga o uso de elementos visuais idênticos em todas as plataformas, independentemente das convenções do sistema operacional.", 0, "Distorce a heurística com termo absoluto (\"obriga\") e ignora as convenções de cada plataforma.", ABS],
      ["Prevenção de erros, que substitui totalmente a necessidade de mensagens de erro ao bloquear o acesso do usuário a qualquer funcionalidade avançada.", 0, "\"Substitui totalmente\" é absoluto; prevenir erros não elimina mensagens de erro nem bloqueia recursos.", ABS],
      ["Reconhecimento em vez de memorização, que obriga o usuário a decorar caminhos complexos para exercitar a memória de curto prazo.", 0, "É o contrário: mostrar opções para que o usuário não precise decorar caminhos.", "u-heuristicas-exemplos"]], 2],
    [U1, "No livro The Design of Everyday Things, Donald Norman introduz conceitos cruciais para a interação entre o ser humano e os artefatos. O conceito que define a relação estrutural entre os controles de um dispositivo e os efeitos resultantes no mundo real — como girar um volante para mudar a direção das rodas — é denominado:", [
      ["Affordance física.", 0, "Affordance é o que o objeto sugere sobre como usá-lo, não a relação controle → efeito.", "u-affordance"],
      ["Mapeamento (mapping).", 1, "Mapeamento é a relação entre os controles e seus efeitos no mundo real.", "u-norman-mapeamento"],
      ["Restrição cultural.", 0, "Restrição limita as ações possíveis; a cultural usa convenções, como vermelho para erro.", "u-norman-restricoes"],
      ["Visibilidade restrita.", 0, "Não é um conceito de Norman para essa relação.", "u-norman-mapeamento"],
      ["Consistência lógica.", 0, "Consistência trata de padrões uniformes, não da relação controle → efeito.", "u-norman-mapeamento"]], 3],
    [U1, "As restrições (constraints) de Donald Norman delimitam o tipo de interação possível em um dado momento, reduzindo a margem para equívocos operacionais. Um exemplo clássico de restrição de natureza cultural no design de interfaces é:", [
      ["Desativar opções de menu dependentes de contexto lógico.", 0, "É uma restrição lógica, não cultural.", "u-norman-restricoes"],
      ["Impedir fisicamente a inserção invertida de um conector USB.", 0, "É uma restrição física.", "u-norman-restricoes"],
      ["Utilizar a cor vermelha para indicar alertas críticos ou erros.", 1, "Vermelho = perigo é uma convenção cultural.", "u-norman-restricoes"],
      ["Exigir autenticação de dois fatores para transações financeiras.", 0, "É uma medida de segurança, não uma restrição cultural de Norman.", "u-norman-restricoes"],
      ["Ocultar botões secundários durante o fluxo de cadastro.", 0, "Não depende de convenção cultural; é uma decisão de layout.", "u-norman-restricoes"]], 4],
    [U2, "A avaliação heurística é uma técnica de inspeção de usabilidade desenvolvida por Jakob Nielsen e Rolf Molich, na qual especialistas examinam a interface em busca de desvios em relação a princípios estabelecidos. Sobre as características e o processo dessa técnica, é correto afirmar que:", [
      ["Exige obrigatoriamente a participação de centenas de usuários reais em laboratórios controlados para gerar dados estatísticos de desempenho.", 0, "É feita por especialistas e não exige recrutar usuários.", "u-aval-heuristica"],
      ["Substitui de forma definitiva e com maior precisão todos os testes de usabilidade empíricos realizados na fase de pós-produção.", 0, "Não substitui os testes com usuários: pode deixar passar problemas que só aparecem no uso real.", "u-aval-vantagens"],
      ["Consiste em uma inspeção sistemática conduzida por especialistas com base em diretrizes de usabilidade para identificar problemas de forma rápida e econômica.", 1, "É a definição da avaliação heurística.", "u-aval-heuristica"],
      ["Foca exclusivamente na avaliação de aspectos de código-fonte, arquitetura de banco de dados e desempenho de servidores em nuvem.", 0, "Não avalia código nem banco de dados; avalia a interface.", "u-aval-heuristica"],
      ["É uma metodologia puramente matemática que elimina qualquer viés subjetivo na interpretação dos problemas de interface.", 0, "Depende do julgamento dos especialistas, portanto tem componente subjetivo.", "u-aval-heuristica"]], 5],
    [U3, "Estudos de psicologia visual aplicados ao design de software indicam que o cérebro humano processa estímulos cromáticos de forma determinante nos primeiros momentos de contato com uma aplicação. Com base nos fundamentos psicológicos das cores em interfaces digitais, assinale a alternativa correta.", [
      ["O tempo médio que um usuário leva para formar uma opinião subconsciente sobre um aplicativo mobile novo é de até 90 segundos, sendo que a maioria desses julgamentos iniciais baseia-se exclusivamente na paleta de cores.", 1, "Dado-chave: até 90 s, com julgamento baseado nas cores. Atenção: é uma exceção à dica das palavras absolutas.", "u-cores-90s"],
      ["Cores corporativas sólidas e neutras aumentam a barreira de desconfiança e elevam a taxa de rejeição no onboarding de novos usuários.", 0, "Cores sólidas e neutras transmitem seriedade; não aumentam a desconfiança.", "u-cores-significado"],
      ["O uso simultâneo de mais de 10 cores principais em uma única tela melhora a retenção cognitiva e acelera a tomada de decisão em sistemas densos.", 0, "Mais de 5 cores principais já é \"pecado capital\": gera poluição visual.", "u-cores-pecado"],
      ["A cor azul é universalmente evitada em sistemas corporativos e bancos por induzir estados de alerta e urgência operacional.", 0, "O azul transmite confiança e é muito usado por bancos.", "u-cores-significado"],
      ["O cérebro humano evita naturalmente pontos de alto contraste, buscando uniformidade cromática para descansar a visão em interfaces complexas.", 0, "Pontos de contraste atraem a atenção; é assim que a hierarquia visual funciona (ex.: os 10% de destaque).", "u-cores-603010"]], 6],
    [U3, "A escolha das cores primárias em um Design System deve estar alinhada aos efeitos emocionais e comportamentais esperados pelo usuário. Assinale a alternativa que associa corretamente a cor primária ao seu efeito emocional predominante em sistemas digitais:", [
      ["Vermelho e Laranja: utilizados exclusivamente para transmitir paz, tranquilidade e estabilidade emocional de longo prazo.", 0, "Vermelho e laranja comunicam alerta e urgência, não paz.", "u-cores-significado"],
      ["Verde: indispensável em transações financeiras, confirmações de pedidos e indicadores de sucesso e ganho.", 1, "Verde = sucesso, confirmação e dinheiro.", "u-cores-significado"],
      ["Amarelo: aplicado estritamente como fundo padrão para todas as telas de leitura intensiva de documentos corporativos.", 0, "Fundos de leitura longa usam tons neutros (off-white, cinzas), não amarelo.", "u-cores-603010"],
      ["Roxo: utilizado em sistemas de controle de estoque industrial para indicar falhas críticas de hardware.", 0, "Falhas críticas são sinalizadas com vermelho, não roxo.", "u-cores-significado"],
      ["Cinza escuro: empregado unicamente em botões de conversão agressiva do tipo 'Comprar Agora'.", 0, "CTAs usam a cor de destaque (os 10%); cinza é cor estrutural.", "u-cores-603010"]], 7],
    [U3, "A Regra de Ouro 60-30-10 é uma diretriz arquitetural para a distribuição de cores em interfaces escaláveis. Nesse modelo, a proporção de 30% deve ser aplicada em:", [
      ["Fundos gerais, áreas estruturais principais e espaçadores de respiro (off-whites ou cinzas claros).", 0, "Isso são os 60%.", "u-cores-603010"],
      ["Cards, painéis laterais, barras de navegação e blocos de conteúdo secundário que dividem a informação.", 1, "30% = estrutura secundária.", "u-cores-603010"],
      ["Botões de ação principal (CTAs), links ativos e ícones de destaque interativo.", 0, "Isso são os 10%.", "u-cores-603010"],
      ["Elementos puramente decorativos de fundo com animações em três dimensões.", 0, "Não faz parte da regra 60-30-10.", "u-cores-603010"],
      ["Textos de rodapé e avisos legais de termos de uso da aplicação.", 0, "Não faz parte da regra 60-30-10.", "u-cores-603010"]], 8],
    [U3, "Ao projetar interfaces para diferentes contextos, como aplicativos móveis B2C e sistemas corporativos B2B/ERP, o designer deve ajustar a saturação e o foco cromático. Sobre essa diferenciação, é correto afirmar que:", [
      ["Aplicativos de consumo B2C priorizam paletas de cores neutras e baixas taxas de saturação para evitar o engajamento emocional.", 0, "Está invertida: B2C usa mais saturação justamente para gerar engajamento emocional.", "u-cores-b2b-b2c"],
      ["Sistemas corporativos e ERPs utilizam paletas baseadas em tons neutros e cinzas estruturados para garantir ergonomia visual de longo prazo e evitar a exaustão do operador.", 1, "B2B = neutro, pensando em longas jornadas.", "u-cores-b2b-b2c"],
      ["Softwares de gestão empresarial devem empregar cores altamente saturadas e vibrantes em todas as tabelas de dados para estimular a distração positiva.", 0, "Cores saturadas em tudo cansam; no B2B elas ficam só para exceções críticas.", "u-cores-b2b-b2c"],
      ["Aplicativos mobile evitam o uso de feedback visual por cores nos botões de toque para economizar largura de banda de rede.", 0, "Cor não gasta banda de rede, e feedback visual é boa prática.", ABS],
      ["A ergonomia visual de longo prazo é irrelevante em softwares desktop operados por 8 horas diárias.", 0, "É o contrário: em jornadas de 8 h a ergonomia visual é essencial.", "u-cores-b2b-b2c"]], 9],
    [U3, "O uso de variáveis de design e tokens no CSS ou em frameworks utilitários (como Tailwind) é uma prática recomendada na engenharia de cores de um software. O principal benefício técnico dessa abordagem é:", [
      ["Garantir que as cores fiquem fixas e hardcoded no código de cada componente, impedindo alterações acidentais.", 0, "É o oposto: tokens existem para não deixar cores fixas no código.", "u-cores-tokens"],
      ["Permitir alterações globais imediatas na paleta de cores e assegurar o suporte nativo a temas (como Light Mode e Dark Mode).", 1, "Muda em um lugar, reflete em tudo, e viabiliza temas.", "u-cores-tokens"],
      ["Aumentar o tamanho do arquivo binário compilado para forçar o navegador a otimizar o cache de vídeo.", 0, "Não tem relação com tokens de design.", "u-cores-tokens"],
      ["Eliminar totalmente a necessidade de validação de contraste de acessibilidade WCAG.", 0, "Tokens não dispensam a checagem de contraste.", "u-wcag-contraste"],
      ["Substituir a lógica de programação de backend por estilização puramente dinâmica baseada em inteligência artificial.", 0, "Tokens são variáveis de estilo; não substituem backend.", "u-cores-tokens"]], 10],
    [U4, "O WCAG (Web Content Accessibility Guidelines) estabelece padrões internacionais para garantir que produtos digitais sejam acessíveis a pessoas com deficiências visuais. Qual é a taxa mínima de contraste exigida pelo WCAG Nível AA para textos normais e textos grandes, respectivamente?", [
      ["2.0:1 e 1.5:1", 0, "Valores baixos demais para o nível AA.", "u-wcag-contraste"],
      ["4.5:1 e 3:1", 1, "Decore: nível AA = 4.5:1 (texto normal) e 3:1 (texto grande).", "u-wcag-contraste"],
      ["10:1 e 7:1", 0, "Valores acima do exigido pelo nível AA.", "u-wcag-contraste"],
      ["1:1 e 0.5:1", 0, "1:1 significa nenhum contraste.", "u-wcag-contraste"],
      ["7.5:1 e 5:1", 0, "Não são os valores do nível AA.", "u-wcag-contraste"]], 11],
    [U4, "Aproximadamente 8% da população masculina possui algum grau de daltonismo, principalmente com dificuldade em distinguir vermelho e verde. Diante dessa limitação, uma diretriz fundamental de design de interfaces acessíveis determina que:", [
      ["O desenvolvedor deve banir completamente o uso das cores vermelha e verde de qualquer sistema computacional.", 0, "Não é preciso banir as cores; basta não depender só delas.", "u-daltonismo"],
      ["Nunca se deve comunicar um estado crítico ou erro utilizando exclusivamente a cor vermelha ou verde, devendo-se combiná-las com ícones descritivos e texturas.", 1, "A regra é redundância: cor + ícone, texto ou textura.", "u-daltonismo"],
      ["Os textos da interface devem ser ocultados para daltônicos, substituindo-os por comandos de voz obrigatórios.", 0, "Não faz sentido ocultar texto; daltonismo afeta cores, não leitura.", "u-daltonismo"],
      ["A aplicação deve inverter automaticamente todas as cores para tons de azul e amarelo sem aviso prévio.", 0, "Mudança automática sem aviso tira o controle do usuário.", "u-controle-usuario"],
      ["O uso de padrões visuais redundantes deve ser evitado para não poluir a interface de usuários sem deficiência.", 0, "Redundância (cor + ícone/textura) é justamente a recomendação.", "u-daltonismo"]], 12],
    [U4, "O Dark Mode (Modo Escuro) tornou-se um recurso padrão em sistemas operacionais e aplicativos modernos. Além de minimizar o cansaço visual em ambientes de pouca luz, uma de suas principais vantagens técnicas é:", [
      ["Acelerar o clock do processador central durante a execução de algoritmos de inteligência artificial.", 0, "Tema de cores não altera o clock do processador.", ABS],
      ["Reduzir drasticamente o consumo de energia em telas do tipo OLED e AMOLED.", 1, "Em OLED/AMOLED o pixel preto fica apagado e economiza bateria.", "u-dark-mode"],
      ["Eliminar a necessidade de uso de folhas de estilo em Cascata (CSS) nos navegadores web.", 0, "O Dark Mode é feito justamente com CSS (ex.: tokens de cor).", "u-cores-tokens"],
      ["Garantir 100% de precisão na conversão de cores no formato CMYK para impressão física.", 0, "Não tem relação com impressão.", "u-dark-mode"],
      ["Aumentar a refletividade da tela sob luz solar direta em ambientes externos.", 0, "Não é uma vantagem do Dark Mode.", "u-dark-mode"]], 13],
    [U4, "Um erro comum ao implementar o Dark Mode é a simples inversão de cores (brute force), trocando o preto pelo branco de forma direta. Essa prática inadequada gera falhas porque:", [
      ["Causa sombras incorretas e contraste excessivo que machuca a retina, exigindo o uso de paletas dedicadas com cinzas escuros profundos.", 1, "Branco puro sobre preto puro cansa a vista; dark mode bom usa cinzas escuros.", "u-dark-mode-erro"],
      ["Impede que o sistema operacional reconheça a API de preferência de tema do usuário.", 0, "A inversão de cores não afeta a detecção da preferência de tema.", "u-dark-mode-erro"],
      ["Altera automaticamente a resolução de vídeo do monitor para padrões obsoletos.", 0, "Cores não mudam a resolução do monitor.", ABS],
      ["Desativa permanentemente os botões de ação principal (CTAs) em dispositivos móveis.", 0, "Não há relação com desativar botões.", "u-dark-mode-erro"],
      ["Provoca o travamento do kernel do sistema operacional por estouro de pilha.", 0, "Problema técnico inventado; o erro é visual.", ABS]], 14],
    [U3, "No desenvolvimento de interfaces, os 'Pecados Capitais' no uso de cores incluem práticas que comprometem a usabilidade e a experiência do usuário. Assinale a alternativa que descreve corretamente um desses pecados capitais:", [
      ["Utilizar até duas cores neutras em páginas de leitura contínua.", 0, "É boa prática, não pecado.", "u-cores-603010"],
      ["Empregar consistência de significado para a cor vermelha em todas as telas do sistema.", 0, "Consistência é boa prática.", "u-cores-pecado"],
      ["Utilizar mais de 5 cores principais na mesma tela, criando poluição visual e caos informacional.", 1, "O pecado é o excesso de cores (mais de 5).", "u-cores-pecado"],
      ["Integrar ferramentas automatizadas de linting para validação de contraste no pipeline de CI/CD.", 0, "Validar contraste automaticamente é boa prática.", "u-wcag-contraste"],
      ["Oferecer suporte nativo à preferência de sistema do usuário para temas claros e escuros.", 0, "É boa prática (tokens de cor e temas).", "u-cores-tokens"]], 15],
    [U5, "O design de aplicativos é estruturado com base em diferentes tipos de telas que compõem a jornada do usuário. A tela inicial de abertura, frequentemente exibida durante o carregamento do aplicativo, é conhecida como:", [
      ["Tela de Checkout.", 0, "Checkout é a finalização da compra.", "u-checkout"],
      ["Splash Screen.", 1, "Splash Screen = tela de abertura durante o carregamento.", "u-splash"],
      ["Tela de Feed Contínuo.", 0, "Feed é a lista contínua de conteúdo.", "u-feed"],
      ["Dashboard Analítico.", 0, "Dashboard é painel de dados, não tela de abertura.", "u-splash"],
      ["Modal de Configuração.", 0, "Modal de configuração não é tela de abertura.", "u-splash"]], 16],
    [U5, "Em relação às boas práticas no projeto de uma Splash Screen, o tempo ideal de permanência recomendado para evitar frustrações e mascarar o tempo de carregamento inicial é de:", [
      ["Exatamente 15 segundos com animações complexas em 3D.", 0, "Longo demais e pesado demais.", "u-splash"],
      ["Até 3 segundos, preferencialmente menos, utilizando elementos visuais leves e discretos.", 1, "Regra: até 3 s, leve e discreta.", "u-splash"],
      ["Entre 30 e 60 segundos para garantir a leitura completa dos termos de licença de uso.", 0, "Splash não é lugar de termos de uso, e esse tempo gera frustração.", "u-splash"],
      ["O tempo necessário para que o banco de dados realize o backup completo de todas as tabelas locais.", 0, "Fala de banco de dados, não de experiência do usuário.", ABS],
      ["Apenas o tempo em que o usuário mantiver o dedo pressionado sobre a tela sensível ao toque.", 0, "A splash não depende de o usuário pressionar a tela.", "u-splash"]], 17],
    [U5, "A tela de integração inicial de novos usuários, conhecida como Onboarding, tem como objetivo apresentar o aplicativo e aumentar a retenção. Entre as regras de ouro recomendadas para o design eficaz de Onboarding, destaca-se:", [
      ["Exigir o preenchimento obrigatório de um formulário com mais de 50 campos de dados pessoais antes de permitir qualquer visualização.", 0, "Cria barreira logo na entrada.", "u-onboarding"],
      ["Ocultar permanentemente o botão 'Pular' para forçar o usuário a assistir a todos os tutoriais disponíveis.", 0, "O botão \"Pular\" deve existir sempre.", "u-onboarding"],
      ["Destacar apenas 3 funcionalidades ou benefícios principais por tela e oferecer sempre a opção 'Pular' para evitar barreiras desnecessárias.", 1, "Pouco por tela (3) e sempre com \"Pular\".", "u-onboarding"],
      ["Apresentar de forma simultânea e densa todas as centenas de recursos avançados do sistema na primeira tela.", 0, "Sobrecarrega o usuário; o certo é destacar só 3 itens por tela.", "u-carga-cognitiva"],
      ["Utilizar termos estritamente técnicos e jargões de engenharia de software para qualificar o público-alvo.", 0, "Jargão técnico afasta o usuário; a linguagem deve ser a dele.", "u-heuristicas-exemplos"]], 18],
    [U5, "A tela de Feed (conteúdo contínuo), usada em redes sociais e portais de notícias, exige uma estrutura consistente para facilitar a rolagem e a leitura. Um elemento essencial de UX que contribui para a eficiência de um feed é:", [
      ["A exibição de textos intencionalmente longos sem qualquer separação visual entre as postagens.", 0, "Dificulta escanear o feed.", "u-feed"],
      ["A combinação de títulos claros e resumos objetivos que ajudam o usuário a decidir rapidamente se vale a pena acessar o conteúdo.", 1, "Feed eficiente é escaneável: título claro + resumo.", "u-feed"],
      ["O uso de cores altamente piscantes e aleatórias em cada novo item carregado para capturar a atenção forçada.", 0, "Gera poluição visual e cansaço.", "u-cores-pecado"],
      ["A ocultação de cabeçalhos e ícones separadores para maximizar o espaço em branco na tela.", 0, "Sem separação, o usuário não identifica onde começa cada item.", "u-feed"],
      ["A atualização automática da página a cada segundo, reposicionando o foco do usuário imprevisivelmente.", 0, "Tira o controle do usuário sobre a leitura.", "u-controle-usuario"]], 19],
    [U5, "Na tela de finalização de compra (Checkout), o abandono de carrinhos é um dos principais desafios do comércio eletrônico. Para otimizar a conversão e reduzir o atrito nessa etapa, as melhores práticas de UX recomendam:", [
      ["Exigir obrigatoriamente a criação de uma conta complexa e verificação por e-mail antes de iniciar o pagamento.", 0, "Aumenta o atrito e o abandono.", "u-checkout"],
      ["Aumentar o número de etapas e páginas para segmentar os dados bancários em formulários extensos.", 0, "O certo é reduzir etapas.", "u-checkout"],
      ["Oferecer opção de compra como visitante (guest checkout), preenchimento automático de dados e redução de etapas no fluxo.", 1, "Menos atrito: visitante, autopreenchimento e menos etapas.", "u-checkout"],
      ["Ocultar os valores parciais e taxas de entrega até o momento posterior à conclusão definitiva da cobrança.", 0, "Esconder taxas quebra a confiança; os valores devem ser transparentes.", "u-confianca"],
      ["Utilizar textos ambíguos nos botões de confirmação para testar a atenção do comprador.", 0, "Botões devem ser claros; ambiguidade gera erros.", "u-checkout"]], 20],
    [U6, "A alternância estética entre o minimalismo rígido e o realismo visual nas interfaces pode ser explicada por fenômenos da ciência do comportamento. O movimento estético que predominou entre 2007 e 2013, caracterizado pela remoção de texturas físicas pesadas em favor de retângulos coloridos planos, é denominado:", [
      ["Skeuomorfismo.", 0, "É o oposto: o skeuomorfismo imita texturas reais (couro, madeira).", "u-flat-design"],
      ["Flat Design.", 1, "Retângulos planos sem textura = Flat Design.", "u-flat-design"],
      ["Liquid Glass.", 0, "Liquid Glass é a volta recente ao semi-realismo (gradientes, refração).", "u-semi-realismo"],
      ["Neomorfismo Avançado.", 0, "Não é o movimento descrito no material.", "u-flat-design"],
      ["Realismo Dimensional.", 0, "Não é o movimento descrito no material.", "u-flat-design"]], 21],
    [U6, "O aprendizado e a generalização comportamental explicam como os usuários reconhecem elementos interativos nas interfaces. Segundo B. F. Skinner (1966), a generalização comportamental permite que os usuários:", [
      ["Rejeitem qualquer interface que não utilize texturas de couro e madeira idênticas ao mundo físico.", 0, "É o contrário: a generalização permite aceitar estilos novos.", "u-generalizacao"],
      ["Abstraiam conceitos funcionais independentemente do estilo visual aplicado (por exemplo, generalizar que um retângulo colorido destacado é um botão interativo).", 1, "O usuário transfere o aprendizado (\"isso é um botão\") para estilos novos.", "u-generalizacao"],
      ["Decorem linhas de código em linguagem assembly através da observação de ícones minimalistas.", 0, "Fala de código, não de experiência do usuário.", ABS],
      ["Identifiquem falhas de hardware em servidores remotos apenas sentindo a vibração do mouse.", 0, "Fala de hardware, sem relação com generalização.", ABS],
      ["Anulem completamente a necessidade de feedback visual após a execução de cliques.", 0, "\"Anulem completamente\" é absoluto; feedback continua necessário.", ABS]], 22],
    [U6, "O fenômeno psicológico no qual estímulos visuais repetidos e idênticos perdem o valor de atenção ao longo do tempo, gerando fadiga mental ou apatia, é conhecido como:", [
      ["Efeito de Primazia Cognitiva.", 0, "Não é o fenômeno descrito.", "u-habituacao"],
      ["Habituação Visual (Thompson & Spencer, 1966).", 1, "Estímulo repetido perde atenção = habituação visual.", "u-habituacao"],
      ["Lei de Fitts.", 0, "A Lei de Fitts trata do tempo para atingir um alvo (tamanho e distância).", "u-habituacao"],
      ["Viés de Confirmação Estética.", 0, "Não é o fenômeno descrito.", "u-habituacao"],
      ["Carga Cognitiva Extrínseca.", 0, "Carga cognitiva trata do volume de informação a processar.", "u-carga-cognitiva"]], 23],
    [U6, "A guinada recente no mercado digital — abandonando o flat design estrito rumo a gradientes sutis, refração e profundidade (como o Liquid Glass) — representa na engenharia de UX:", [
      ["Um retrocesso tecnológico total aos padrões de computadores de 1980.", 0, "Não é retrocesso; é evolução.", "u-semi-realismo"],
      ["Uma evolução baseada em padrões vivos que agrega riqueza visual para saciar a necessidade humana por novidade estética e imersão, sem descartar a clareza funcional.", 1, "Combate a habituação visual com novidade, mantendo a clareza.", "u-semi-realismo"],
      ["Uma imposição arbitrária que obriga os usuários a reaprenderem do zero a função de links e campos de texto.", 0, "Pela generalização comportamental, o usuário não precisa reaprender.", "u-generalizacao"],
      ["A eliminação definitiva de qualquer elemento tridimensional em softwares corporativos B2B.", 0, "O movimento acrescenta profundidade, não elimina.", "u-semi-realismo"],
      ["A substituição completa de telas sensíveis ao toque por interfaces estritamente textuais em modo CLI.", 0, "Não tem relação com o semi-realismo.", "u-semi-realismo"]], 24],
    [U6, "Para avaliar o sucesso de interfaces modernas que incorporam o semi-realismo e buscam combater a habituação visual, os profissionais de UX utilizam novas métricas além das conversões tradicionais, tais como:", [
      ["Quantidade de linhas de código eliminadas no repositório Git.", 0, "Métrica de código, não de UX.", ABS],
      ["Satisfação estética e engajamento emocional, avaliados por meio de pesquisas longitudinais e rastreamento ocular (eye-tracking).", 1, "Métricas de UX: satisfação estética, engajamento emocional, eye-tracking.", "u-metricas"],
      ["Velocidade de rotação do cooler do computador durante a renderização de gráficos vetoriais.", 0, "Métrica de hardware.", ABS],
      ["Número de bugs relatados por usuários iniciantes na primeira hora de uso.", 0, "Não mede satisfação estética nem engajamento.", "u-metricas"],
      ["Custo financeiro por servidor alugado em nuvem pública.", 0, "Métrica de infraestrutura.", ABS]], 25],
    [U7, "As interfaces baseadas no paradigma WIMP (Windows, Icons, Menus and Pointing device) revolucionaram a computação pessoal. O componente WIMP responsável por apresentar coleções estruturadas de opções e comandos ao usuário de forma plana, em cascata ou contextual é denominado:", [
      ["Janela de Sistema (Window).", 0, "Janelas delimitam áreas de trabalho.", "u-wimp-def"],
      ["Ícone Gráfico (Icon).", 0, "Ícones representam objetos e ferramentas.", "u-menus-icones"],
      ["Menu (Menu).", 1, "Coleções de opções e comandos (plano, cascata, contextual) = Menu.", "u-menus-icones"],
      ["Dispositivo Apontador (Pointing device).", 0, "É o mouse, por exemplo.", "u-wimp-def"],
      ["Barra de Rolagem (Scrollbar).", 0, "Não é um dos quatro elementos da sigla WIMP.", "u-wimp-def"]], 26],
    [U7, "No projeto de ícones, o uso de rótulos de texto associados e de técnicas participativas como o Icon Design Game auxiliam na compreensão. Sobre a usabilidade de ícones, é correto afirmar que:", [
      ["Ícones abstratos sem texto de apoio são sempre mais fáceis de memorizar do que comandos textuais em qualquer cultura.", 0, "Errada pelo \"sempre\" e por \"abstratos sem texto\".", "u-menus-icones"],
      ["Ícones representam objetos familiares e ferramentas, sendo em regra mais fáceis de memorizar do que comandos de texto puro da linha de comando (CLI).", 1, "Ícones de objetos familiares ajudam a memorizar.", "u-menus-icones"],
      ["O tamanho dos ícones deve ser inferior a 8 pixels para forçar o usuário a exercitar a acuidade visual extrema.", 0, "Ícones minúsculos prejudicam o uso.", "u-menus-icones"],
      ["A animação contínua e intermitente de todos os ícones da tela melhora consideravelmente a concentração do operador.", 0, "Animação em tudo distrai e gera habituação.", "u-habituacao"],
      ["Convenções internacionais de design proíbem o uso de texto junto a ícones em sistemas corporativos.", 0, "\"Proíbem\" é absoluto; texto junto ao ícone é recomendado.", "u-menus-icones"]], 27],
    [U7, "A teoria enativa da cognição, de Francisco Varela, Evan Thompson e Eleanor Rosch, propõe uma abordagem alternativa para entender interação e aprendizado em sistemas digitais. De acordo com essa teoria, as interfaces enativas baseiam-se no princípio de que:", [
      ["O cérebro humano armazena representações mentais estáticas do mundo sem necessidade de interação física com o ambiente.", 0, "Descreve o modelo cognitivista tradicional, não o enativo.", "u-enativa"],
      ["A mente está constantemente engajada em processos de percepção e ação (enaction), onde o usuário aprende a usar o sistema através da própria experiência e ação direta (ensinar o usuário a usá-lo enquanto ele usa).", 1, "Enação = aprender fazendo (percepção + ação).", "u-enativa"],
      ["O aprendizado de um software ocorre exclusivamente pela leitura exaustiva de manuais impressos antes do primeiro acesso.", 0, "\"Exclusivamente\" e manuais: o oposto de aprender fazendo.", "u-enativa"],
      ["As máquinas possuem consciência autônoma idêntica à humana, dispensando o projeto centrado no usuário.", 0, "Não é o que a teoria afirma.", "u-enativa"],
      ["A cognição é um processo localizado estritamente na memória cache do computador.", 0, "Fala de hardware; a cognição enativa é do usuário, corporificada.", ABS]], 28],
    [U7, "A visualização de grandes volumes de dados complexos tem como objetivo principal amplificar a cognição humana. Segundo Card et al. (1999), uma interface bem projetada deve permitir que os usuários:", [
      ["Imprimam fisicamente todos os registros do banco de dados em formato de matriz de pontos.", 0, "Não é objetivo da visualização de informação.", "u-visualizacao"],
      ["Vejam padrões, tendências e anomalias diretamente na representação visual dos dados.", 1, "Visualização serve para enxergar padrões, tendências e anomalias.", "u-visualizacao"],
      ["Ocultem todas as informações numéricas para evitar qualquer tomada de decisão baseada em fatos.", 0, "É o contrário de amplificar a cognição.", "u-visualizacao"],
      ["Substituam gráficos estatísticos por textos descritivos extensos sem formatação.", 0, "Texto extenso dificulta enxergar padrões.", "u-visualizacao"],
      ["Executem códigos de programação em linguagem de máquina diretamente na tela de visualização.", 0, "Fala de código, não de visualização.", ABS]], 29],
    [U7, "As interfaces multimodais combinam múltiplos modos de interação, como toque, gestos em realidade aumentada (AR), reconhecimento de fala e dispositivos tradicionais. Ao projetar interfaces gestuais baseadas em AR, um dos principais desafios de usabilidade é:", [
      ["A facilidade absoluta em realizar tarefas de alta precisão milimétrica sem nenhum treinamento prévio do usuário.", 0, "É o oposto: precisão é justamente o ponto fraco.", "u-multimodais"],
      ["A dificuldade em realizar tarefas de precisão, exigindo ambientes controlados e certo nível de treinamento operacional.", 1, "Gestos no ar são imprecisos: tarefas finas exigem treino e ambiente controlado.", "u-multimodais"],
      ["A ausência total de requisitos de processamento gráfico nos dispositivos de captura de movimento.", 0, "AR exige processamento; e isso não é um desafio de usabilidade.", "u-multimodais"],
      ["A incompatibilidade nativa com qualquer sistema operacional baseado em janelas WIMP.", 0, "\"Qualquer\" é absoluto; não é o desafio citado.", "u-multimodais"],
      ["A obrigatoriedade de uso exclusivo de comandos de texto digitados em teclados físicos mecânicos.", 0, "Contradiz a ideia de interface multimodal.", "u-multimodais"]], 30],
    [U8, "O conceito de affordance, cunhado por James J. Gibson (1968) e adaptado por Donald Norman para o design de interfaces (perceived affordance), refere-se a:", [
      ["A propriedade física ou percebida de um objeto que determina ou sugere a um organismo como ele pode ser interagido ou utilizado.", 1, "Affordance = o que o objeto sugere sobre como usá-lo (ex.: botão em relevo \"pede\" clique).", "u-affordance"],
      ["O custo financeiro total para licenciar um framework de desenvolvimento de software em nuvem.", 0, "Sem relação com affordance.", "u-affordance"],
      ["A velocidade máxima de transmissão de dados em uma rede sem fio de alta performance.", 0, "Fala de rede, não de interação.", ABS],
      ["O nível de criptografia exigido para proteger senhas de usuários contra ataques cibernéticos.", 0, "Fala de segurança, não de affordance.", "u-affordance"],
      ["A quantidade de memória RAM consumida por uma aplicação em segundo plano.", 0, "Fala de hardware.", ABS]], 31],
    [U8, "A semiótica, estudo dos signos e dos processos de significação, é aplicada na análise de interfaces humano-computador. Na teoria do signo de Charles Sanders Peirce, a relação triádica fundamental da semiose envolve os seguintes elementos:", [
      ["Servidor, Cliente e Banco de Dados.", 0, "Arquitetura de sistemas, não semiótica.", "u-peirce"],
      ["Representâmen (signo), Objeto e Interpretante.", 1, "É a tríade de Peirce.", "u-peirce"],
      ["Sintaxe, Semântica e Pragmática.", 0, "São as dimensões da semiótica de Morris, não a tríade de Peirce.", "u-peirce"],
      ["Hardware, Software e Firmware.", 0, "Componentes de computador, não semiótica.", "u-peirce"],
      ["Input, Processamento e Output.", 0, "Modelo de processamento de dados, não semiótica.", "u-peirce"]], 32],
    [U8, "Na semiótica de máquinas proposta por Andersen (1997), a análise da interação ocorre em três níveis: físico, funcional e semiótico. No nível semiótico, as máquinas são vistas como sistemas que:", [
      ["Interagem estritamente com o ambiente através de propriedades mecânicas e atrito térmico.", 0, "Isso é o nível físico.", "u-andersen"],
      ["Executam funções algorítmicas discretas de processamento lógico sem intervenção humana.", 0, "Isso é o nível funcional.", "u-andersen"],
      ["Produzem e interpretam sinais que representam conceitos e ferramentas virtuais (como o pincel em um programa de desenho).", 1, "Nível semiótico = signos e significados (o pincel virtual).", "u-andersen"],
      ["Armazenam dados brutos em discos rígidos magnéticos de longo prazo.", 0, "Armazenamento não é o nível semiótico.", "u-andersen"],
      ["Conduzem a transmissão de energia elétrica entre os componentes da placa-mãe.", 0, "Fala de hardware (nível físico).", "u-andersen"]], 33],
    [U8, "A computação afetiva estuda como sistemas podem reconhecer, modelar e responder às emoções humanas. A frustração é frequentemente causada por falhas de design. Assinale a alternativa que descreve uma situação geradora de alto desconforto e frustração segundo os princípios de usabilidade emocional:", [
      ["Mensagens de erro vagas, confusas, intimidadoras ou que culpam o usuário (como 'Erro fatal 98547').", 1, "A pergunta pede o que CAUSA frustração; as outras são boas práticas.", "u-emocao-erros"],
      ["O uso de paletas de cores neutras e agradáveis em painéis de controle analíticos.", 0, "É boa prática, não causa frustração.", "u-cores-b2b-b2c"],
      ["O fornecimento imediato de feedback visual claro após a conclusão de uma tarefa bem-sucedida.", 0, "É boa prática.", "u-heuristicas-exemplos"],
      ["A inclusão de links diretos para a central de ajuda e documentação próxima ao campo de erro.", 0, "É boa prática.", "u-emocao-erros"],
      ["A implementação de salvamento automático para evitar a perda de dados em formulários longos.", 0, "É boa prática.", "u-emocao-erros"]], 34],
    [U8, "A confiança dos usuários é um pilar essencial em sistemas web, especialmente em comércio eletrônico e internet banking. Entre os elementos que contribuem diretamente para inspirar e consolidar essa confiança na interface, destacam-se:", [
      ["Ocultar políticas de privacidade e remover qualquer canal de suporte ao cliente para simplificar o layout.", 0, "Transparência e suporte geram confiança; ocultar destrói.", "u-confianca"],
      ["Implementar medidas robustas de segurança (criptografia), transparência nas políticas, usabilidade intuitiva, feedback imediato e design profissional.", 1, "Confiança = segurança + transparência + usabilidade + feedback + aparência profissional.", "u-confianca"],
      ["Utilizar pop-ups publicitários agressivos e chamadas piscantes de urgência extrema em todas as páginas de transação.", 0, "Passa sensação de golpe e polui a tela.", "u-confianca"],
      ["Exigir que o usuário adivinhe as regras de negócio do sistema sem auxílio visual ou documentação.", 0, "Gera insegurança e erros.", "u-confianca"],
      ["Empregar mensagens de erro sonorizadas com alertas em volume máximo sem controle do operador.", 0, "Intimida e tira o controle do usuário.", "u-emocao-erros"]], 35],
    [U9, "As guidelines (diretrizes) de ergonomia de software e design de interfaces fornecem orientações de alto nível para a tomada de decisões. Um dos objetivos centrais dessas diretrizes em relação à carga cognitiva é:", [
      ["Forçar o usuário a memorizar sequências complexas de comandos textuais para exercitar a memória de longo prazo.", 0, "É o contrário de reduzir carga cognitiva.", "u-carga-cognitiva"],
      ["Garantir que o usuário não precise memorizar grandes volumes de informação, limitando o acesso a blocos gerenciáveis de dados (como a regra dos 7 itens ou chunks).", 1, "Reduzir carga cognitiva: blocos pequenos (cerca de 7 itens).", "u-carga-cognitiva"],
      ["Ocultar informações essenciais para obrigar o usuário a consultar manuais impressos externos.", 0, "Aumenta o esforço do usuário.", "u-carga-cognitiva"],
      ["Aumentar a complexidade dos formulários para filtrar usuários com menor nível de escolaridade.", 0, "Exclui usuários; contraria o design centrado no usuário.", "u-carga-cognitiva"],
      ["Eliminar o uso de listas de seleção, substituindo-as integralmente por digitação livre em texto corrido.", 0, "É o oposto: trocar digitação livre por listas de seleção.", "u-carga-cognitiva"]], 36],
    [U9, "O ciclo de vida da experiência do usuário abrange múltiplos estágios ao longo do tempo de uso de um produto digital. Assinale a alternativa que lista corretamente esses estágios sequenciais:", [
      ["Instalação, Primeiro uso e customização, Uso regular, Gerenciamento e manutenção, Desinstalar ou atualizar.", 1, "Ciclo do ponto de vista do USUÁRIO: instalar → usar → manter → sair.", "u-ciclo-vida"],
      ["Programação, Compilação, Teste de unidade, Deploy em produção e Desativação do servidor.", 0, "É um ciclo de desenvolvimento, não de experiência do usuário.", "u-ciclo-vida"],
      ["Planejamento financeiro, Contratação de equipe, Marketing digital, Vendas e Suporte técnico.", 0, "É um ciclo de negócio.", "u-ciclo-vida"],
      ["Análise semiótica, Inspeção heurística, Teste cego, Homologação e Certificação ISO.", 0, "São técnicas de avaliação, não o ciclo de vida da experiência.", "u-ciclo-vida"],
      ["Coleta de requisitos, Prototipagem em papel, Wireframing, Codificação e Refatoração.", 0, "É um ciclo de desenvolvimento.", "u-ciclo-vida"]], 37],
    [U9, "De acordo com os checklists de experiência do usuário para aplicações web e padrões de janelas, os layouts devem acomodar diferentes resoluções de tela. Uma diretriz padrão recomendada para o dimensionamento de janelas web é:", [
      ["Fixar obrigatoriamente a resolução em 300×200 pixels, impedindo qualquer tipo de redimensionamento pelo usuário.", 0, "Resolução minúscula e sem redimensionamento.", "u-janelas"],
      ["Suportar resolução mínima efetiva de 800×600 pixels e disponibilizar layouts redimensionáveis para resoluções de 1024×768 pixels e superiores.", 1, "Decore: mínimo 800×600; redimensionável para 1024×768 ou mais.", "u-janelas"],
      ["Exigir monitores de ultra-alta definição 8K para exibir elementos básicos de navegação textual.", 0, "Exigência absurda de hardware.", ABS],
      ["Ocultar todas as barras de rolagem vertical em resoluções menores que 1200 pixels.", 0, "Esconder a rolagem impede o acesso ao conteúdo.", "u-janelas"],
      ["Restringir o uso de aplicativos web exclusivamente a computadores de mesa sem suporte a toque.", 0, "\"Exclusivamente\" é absoluto e exclui usuários.", "u-janelas"]], 38],
    [U9, "Ao projetar janelas contextuais e de propriedades em sistemas interativos, o posicionamento na interface deve seguir orientações ergonômicas precisas. O padrão recomendado para a exibição inicial dessas janelas determina que:", [
      ["Janelas de propriedades devem ser exibidas centralizadas no topo da janela proprietária, enquanto janelas contextuais devem ser sempre exibidas próximas ao objeto de onde foram iniciadas.", 1, "Propriedades: centro/topo da janela dona. Contextuais: perto do objeto clicado.", "u-janelas"],
      ["Todas as janelas devem aparecer de forma aleatória na tela para testar a agilidade visual do operador.", 0, "Posição aleatória confunde o usuário.", "u-janelas"],
      ["Janelas contextuais devem abrir obrigatoriamente no canto inferior direito da tela principal, independentemente da posição do cursor.", 0, "Contextuais abrem perto do objeto que as originou.", "u-janelas"],
      ["Janelas de propriedades devem cobrir 100% da área de trabalho para evitar distrações periféricas.", 0, "Devem ficar centralizadas no topo da janela proprietária.", "u-janelas"],
      ["O posicionamento das janelas deve ser recalculado por algoritmos estocásticos a cada clique do mouse.", 0, "Imprevisível; quebra a consistência.", "u-janelas"]], 39],
    [U9, "A padronização de elementos visuais em um projeto de interface reduz ambiguidades e melhora a eficiência operacional. Conforme as recomendações de estruturação de design systems e guidelines, o desenvolvedor deve definir padrões consistentes para:", [
      ["Textos (títulos, seções, conteúdos, formulários), controles (listas suspensas, caixas de pesquisa, seleção), comandos (menus, barras de ferramentas, botões) e janelas de mensagens (avisos, erros, confirmações).", 1, "Só esta fala de elementos de interface.", "u-padronizacao"],
      ["Modelos de processadores de hardware, arquitetura de barramento de memória e protocolos de rede TCP/IP.", 0, "Fala de hardware e rede.", ABS],
      ["Estruturas de tabelas relacionais em bancos de dados SQL, chaves primárias e chaves estrangeiras.", 0, "Fala de banco de dados.", ABS],
      ["Estratégias de marketing de conteúdo, campanhas de redes sociais e funil de vendas corporativas.", 0, "Fala de negócios.", "u-padronizacao"],
      ["Custos operacionais de servidores em nuvem, taxas de juros bancárias e margens de lucro empresarial.", 0, "Fala de finanças.", "u-padronizacao"]], 40],

    // ---------- Questões 41 a 55 (as "dissertativas" da revisão) ----------
    [U1, "Durante um teste de usabilidade de um portal governamental para emissão de certidões, a equipe de UX avaliou duas métricas: a taxa de conclusão de solicitações sem erros e o tempo total gasto pelos cidadãos para emitir o documento. Com base na ISO 9241-11, assinale a alternativa que analisa corretamente a relação entre eficácia e eficiência nesse contexto.", [
      ["A eficácia é demonstrada quando o cidadão emite a certidão em menos de 30 segundos, enquanto a eficiência ocorre quando ele não comete nenhum erro de digitação.", 0, "Troca os conceitos: tempo é eficiência; acerto é eficácia.", "u-metas"],
      ["A eficácia mede a precisão e completude com que o cidadão atinge o objetivo (emitir a certidão correta), enquanto a eficiência afere a relação entre a acurácia alcançada e os recursos/tempo gastos.", 1, "Taxa de conclusão sem erro = eficácia; tempo gasto = eficiência.", "u-metas"],
      ["Eficácia e eficiência são conceitos idênticos que medem unicamente o nível de satisfação emocional do usuário ao interagir com a interface visual do sistema.", 0, "São metas diferentes, e satisfação é uma terceira meta.", "u-metas"],
      ["A eficiência é uma propriedade puramente estética do layout, enquanto a eficácia refere-se ao consumo de memória RAM do servidor web durante a consulta.", 0, "Fala de estética e hardware; nenhuma das duas definições está certa.", ABS],
      ["Garantir 100% de eficiência assegura automaticamente a eficácia do sistema, pois a rapidez elimina qualquer possibilidade de erro humano na entrada de dados.", 0, "Ser rápido não garante acertar; \"elimina qualquer\" é absoluto.", "u-metas"]], 41, 1],
    [U1, "O Design de Interação (IxD) é uma disciplina fundamental na criação de produtos digitais modernos. Conforme Sharp, Rogers e Preece, o objetivo central do IxD e seus pilares estruturantes são descritos corretamente em:", [
      ["Desenvolver algoritmos de inteligência artificial para automação de código backend, focando na otimização de consultas a bancos de dados relacionais.", 0, "Fala de backend e banco de dados.", ABS],
      ["Projetar produtos interativos que apoiem e melhorem a forma como as pessoas se comunicam e interagem em seu cotidiano e trabalho, fundamentando-se em usabilidade intuitiva, conforto gráfico, funcionalidade objetiva e legibilidade.", 1, "IxD é centrado nas pessoas e em como elas interagem.", "u-ui-ux-ixd"],
      ["Garantir a redução de custos de hardware por meio da simplificação de folhas de estilo CSS e desativação de animações interativas.", 0, "Fala de custo de hardware.", "u-ui-ux-ixd"],
      ["Restringir o acesso dos usuários a interfaces estritamente textuais em linha de comando para evitar falhas de segurança cibernética.", 0, "Restringe o usuário; o IxD busca melhorar a interação.", "u-ui-ux-ixd"],
      ["Criar manuais impressos extensos de treinamento operacional para substituir a necessidade de design de interface amigável.", 0, "Manual não substitui uma boa interface.", "u-ui-ux-ixd"]], 42, 2],
    [U1, "Uma startup de tecnologia contratou especialistas para reformular seu aplicativo bancário. Na reunião de alinhamento, debateu-se a divisão de escopo entre a Interface do Usuário (UI) e a Experiência do Usuário (UX). Assinale a alternativa que expressa corretamente a distinção conceitual e prática entre UI e UX.", [
      ["UI trata das sensações profundas e lealdade à marca, enquanto UX refere-se exclusivamente à escolha do código hexadecimal das cores dos botões.", 0, "Inverte os dois conceitos.", "u-ui-ux-ixd"],
      ["UI representa o meio e o arranjo visual/funcional pelo qual o usuário opera o sistema; UX abrange a percepção holística, emoções e sentimentos vivenciados antes, durante e após a interação com o produto.", 1, "UI = interface (o meio). UX = experiência completa (antes, durante e depois).", "u-ui-ux-ixd"],
      ["UI aplica-se apenas a softwares desktop, enquanto UX é um conceito exclusivo para dispositivos móveis de tela sensível ao toque.", 0, "Os dois valem para qualquer plataforma.", "u-ui-ux-ixd"],
      ["UX e UI são sinônimos perfeitos e substituíveis que tratam unicamente do alinhamento de pixel em ferramentas de prototipagem como o Figma.", 0, "Não são sinônimos.", "u-ui-ux-ixd"],
      ["A UI substitui a necessidade de testes com usuários, enquanto a UX garante o correto processamento de scripts no lado do servidor.", 0, "Nada substitui testes com usuários, e UX não trata de servidor.", "u-ui-ux-ixd"]], 43, 3],
    [U1, "Em 1993, Jakob Nielsen definiu atributos de usabilidade, entre eles a Facilidade de Aprendizagem (Learnability) e a Facilidade de Relembrar (Memorability). Sobre a aplicação desses princípios em um sistema ERP de uso esporádico, assinale a afirmativa correta.", [
      ["A facilidade de aprendizagem refere-se à rapidez com que um usuário novato realiza tarefas no primeiro contato; a memorabilidade garante que o usuário casual retorne ao sistema após meses sem usá-lo e execute tarefas sem precisar reaprender o fluxo.", 1, "Aprendizagem = novato no 1º contato. Memorabilidade = usuário casual que volta depois de meses.", "u-nielsen-atributos"],
      ["A memorabilidade exige que o usuário decore todas as teclas de atalho antes do primeiro acesso, ao passo que a aprendizagem elimina a necessidade de menus gráficos.", 0, "Memorabilidade não exige decorar nada antes do uso.", "u-nielsen-atributos"],
      ["A facilidade de aprendizagem avalia exclusivamente a taxa de consumo de CPU, enquanto memorabilidade mede o espaço em disco ocupado pelos dados do usuário.", 0, "Fala de hardware.", ABS],
      ["Ambos os atributos exigem que o sistema bloqueie o acesso a novos recursos até que o operador passe por um teste teórico formal presencial.", 0, "Bloquear recursos contraria a facilidade de uso.", "u-nielsen-atributos"],
      ["A memorabilidade aplica-se apenas a jogos digitais, sendo irrelevante para a eficiência de softwares corporativos de gestão.", 0, "É especialmente importante em ERP de uso esporádico.", "u-nielsen-atributos"]], 44, 4],
    [U2, "Considere duas heurísticas de usabilidade de Nielsen em um aplicativo de streaming de vídeo: (1) Visibilidade do status do sistema e (2) Compatibilidade entre o sistema e o mundo real. Assinale a alternativa que apresenta exemplos práticos e corretos de implementação dessas heurísticas, respectivamente.", [
      ["(1) Exibir uma barra de progresso visual do buffer e o perfil ativo do usuário; (2) Utilizar a metáfora de um ícone de 'lixeira' para remover itens da lista e ícone de 'engrenagem' para configurações.", 1, "Status = mostrar o que acontece. Mundo real = metáforas do cotidiano.", "u-heuristicas-exemplos"],
      ["(1) Ocultar a velocidade de download para economizar processamento; (2) Utilizar códigos em sintaxe SQL para exibir mensagens de aviso na tela.", 0, "Ocultar status e usar SQL contrariam as duas heurísticas.", "u-heuristicas-exemplos"],
      ["(1) Apresentar telas em branco durante o carregamento de vídeos; (2) Exigir que o usuário digite o caminho de diretório de arquivos em modo CLI.", 0, "Tela em branco não informa nada; CLI não é linguagem do mundo real.", "u-heuristicas-exemplos"],
      ["(1) Utilizar termos estritamente técnicos de rede no topo da tela; (2) Mudar aleatoriamente a função dos botões a cada novo clique.", 0, "Jargão técnico e botões imprevisíveis contrariam as heurísticas.", "u-heuristicas-exemplos"],
      ["(1) Notificar o usuário apenas após o travamento total do sistema; (2) Banir o uso de qualquer linguagem simbólica ou ícone cotidiano.", 0, "Avisar só depois do travamento não é dar visibilidade; banir ícones é o oposto do mundo real.", "u-heuristicas-exemplos"]], 45, 5],
    [U1, "No clássico The Design of Everyday Things, Donald Norman descreve como pilares do design intuitivo o Mapeamento e as Restrições (Constraints). Um projeto de painel de controle para casa inteligente precisa aplicar esses conceitos de forma exemplar. Assinale a opção que ilustra corretamente essa aplicação.", [
      ["Mapeamento: organizar os botões virtuais das lâmpadas no aplicativo na mesma disposição espacial física dos cômodos da casa. Restrição: desabilitar o botão de 'Ligar Ar-Condicionado' se o dispositivo estiver desconectado da rede.", 1, "Mapeamento = layout espelha a casa real. Restrição = impedir ação impossível ou errada.", "u-norman-mapeamento"],
      ["Mapeamento: utilizar textos aleatórios para acionar dispositivos; Restrição: forçar o desligamento do sistema a cada 10 minutos de uso contínuo.", 0, "Textos aleatórios não mapeiam nada, e desligar o sistema não é restrição útil.", "u-norman-mapeamento"],
      ["Mapeamento: inverter os comandos de volume de som para testar o reflexo do usuário; Restrição: permitir que qualquer pessoa altere senhas de administrador sem autenticação.", 0, "Inverter comandos quebra o mapeamento; liberar senhas é o oposto de restringir.", "u-norman-mapeamento"],
      ["Mapeamento: exibir relatórios financeiros em gráficos de pizza; Restrição: ocultar o botão de desligar para evitar que o usuário saia da aplicação.", 0, "Gráfico não é relação controle → efeito; ocultar a saída tira o controle do usuário.", "u-controle-usuario"],
      ["Mapeamento: substituir todos os controles visuais por comandos digitados em código hexadecimal; Restrição: remover o feedback tátil da tela.", 0, "Código hexadecimal não espelha o mundo real.", "u-norman-restricoes"]], 46, 6],
    [U2, "Uma equipe de engenharia de software decidiu realizar uma Avaliação Heurística na interface de um sistema de saúde hospitalar para identificar falhas graves de usabilidade. Para garantir o rigor metodológico proposto por Nielsen e Molich, a equipe deve seguir a sequência correta de três fases:", [
      ["Compilação de código, Teste de carga e Deploy em produção.", 0, "São etapas de desenvolvimento e infraestrutura.", "u-aval-fases"],
      ["Planejamento (definição de objetivos e seleção do conjunto de heurísticas), Execução (inspeção individual e independente realizada por especialistas) e Revisão (consolidação e priorização dos problemas identificados).", 1, "Planejamento → Execução (individual e independente) → Revisão (consolida e prioriza).", "u-aval-fases"],
      ["Entrevista com investidores, Definição do preço de venda e Campanha de marketing digital.", 0, "São etapas de negócio.", "u-aval-fases"],
      ["Teste de usabilidade cego com usuários leigos, Aplicação de questionários quantitativos e Auditoria contábil.", 0, "Avaliação heurística é feita por especialistas, não por usuários leigos.", "u-aval-heuristica"],
      ["Prototipagem em papel, Instalação de servidores físicos e Treinamento presencial obrigatório.", 0, "Não são as fases da avaliação heurística.", "u-aval-fases"]], 47, 7],
    [U2, "Durante uma reunião de alinhamento, o gerente questionou se a equipe deveria realizar uma Avaliação Heurística ou um Teste de Usabilidade com usuários finais. O especialista em UX explicou que a Avaliação Heurística possui trade-offs bem definidos. Assinale a alternativa que sintetiza adequadamente duas vantagens e duas desvantagens dessa técnica de inspeção.", [
      ["Vantagens: exige zero conhecimento prévio em UX e substitui 100% dos testes de segurança; Desvantagens: é extremamente demorada e possui alto custo com infraestrutura de laboratório.", 0, "Inverte tudo: a técnica é rápida e barata, e exige especialistas.", "u-aval-vantagens"],
      ["Vantagens: fornece feedback rápido e possui custo relativamente baixo sem necessidade de recrutamento imediato de usuários; Desvantagens: exige avaliadores especialistas qualificados e pode deixar passar problemas específicos que só emergem com usuários reais em contexto de uso.", 1, "Rápida e barata × exige especialistas e não pega tudo.", "u-aval-vantagens"],
      ["Vantagens: descobre automaticamente todos os bugs de banco de dados e melhora a velocidade da internet; Desvantagens: é proibida por normas internacionais e requer aprovação judicial.", 0, "Não avalia banco de dados, e não é proibida.", "u-aval-heuristica"],
      ["Vantagens: elimina a necessidade de código-fonte e gera protótipos automáticos; Desvantagens: depende de equipamentos de ressonância magnética e rastreamento de satélite.", 0, "Vantagens e desvantagens inventadas.", "u-aval-vantagens"],
      ["Vantagens: é realizada diretamente por robôs de IA sem intervenção humana; Desvantagens: não produz nenhum tipo de relatório final aproveitável.", 0, "É feita por especialistas humanos e gera uma lista priorizada de problemas.", "u-aval-fases"]], 48, 8],
    [U7, "A transição das Interfaces de Linha de Comando (CLI) para as Interfaces Gráficas de Usuário (GUI) consolidou o modelo WIMP como o padrão dominante na computação pessoal a partir da década de 1980. Assinale a alternativa que apresenta o significado exato da sigla WIMP e seus elementos fundamentais.", [
      ["Web, Internet, Modem e Protocol — representa a infraestrutura de comunicação em rede de computadores locais.", 0, "Sigla errada; fala de rede.", "u-wimp-def"],
      ["Windows, Icons, Menus e Pointing device — engloba a gestão de janelas delimitadas, ícones gráficos representativos, menus estruturados de comandos e dispositivos apontadores (como o mouse).", 1, "WIMP = Windows, Icons, Menus, Pointing device.", "u-wimp-def"],
      ["Widgets, Input, Memory e Processing — refere-se aos componentes internos de hardware para processamento gráfico.", 0, "Sigla errada; fala de hardware.", "u-wimp-def"],
      ["Wireless, Interactive, Mobile e Portable — define o paradigma exclusivo de telefones celulares modernos sem botão físico.", 0, "Sigla errada.", "u-wimp-def"],
      ["Workspace, Information, Management e Performance — representa um framework corporativo para avaliação de processos de negócios.", 0, "Sigla errada.", "u-wimp-def"]], 49, 9],
    [U7, "A teoria enativa da cognição (proposta por Varela, Thompson e Rosch) revolucionou a forma como a ciência do design compreende a interação humano-computador. Assinale a alternativa que contrapõe corretamente a premissa enativa ao modelo cognitivista tradicional dos anos 1960/1970.", [
      ["O modelo tradicional via a mente como um processador que manipula representações simbólicas internas e estáticas; a abordagem enativa propõe que a cognição emerge do acoplamento dinâmico entre ação e percepção corporificada, onde o usuário aprende 'fazendo' na interação direta.", 1, "Tradicional = mente como computador simbólico. Enativa = corpo + ação + percepção.", "u-enativa"],
      ["O modelo tradicional defendia a aprendizagem por toque na tela, enquanto a teoria enativa exige o estudo exclusivo de teorias matemáticas abstratas antes do uso.", 0, "Inverte e distorce as duas abordagens.", "u-enativa"],
      ["A visão enativa considera que a mente não possui nenhuma relação com o corpo ou com o ambiente, focando em processamento em nuvem.", 0, "É o contrário: a cognição enativa é corporificada.", "u-enativa"],
      ["Ambas as abordagens defendem que o cérebro armazena cópias idênticas de pixels de todas as telas já vistas pelo usuário.", 0, "Nenhuma das duas defende isso.", "u-enativa"],
      ["A teoria enativa afirma que interfaces gráficas são ineficientes, defendendo o retorno exclusivo aos cartões perfurados.", 0, "Não é o que a teoria afirma.", "u-enativa"]], 50, 10],
    [U8, "O conceito de Affordance possui raízes na psicologia ecológica de James J. Gibson e foi posteriormente adaptado por Donald Norman para a Engenharia de Usabilidade. Sobre a diferenciação teórica e a introdução do termo 'Affordance Percebida' (Perceived Affordance), é correto afirmar que:", [
      ["Gibson defendia que affordance dependia de software, enquanto Norman provou que ela se aplica apenas a telas de vidro de smartphones.", 0, "Gibson tratava do ambiente físico, não de software.", "u-affordance"],
      ["Para Gibson, affordance é uma propriedade física e real do ambiente independente da percepção; Norman introduziu 'affordance percebida' para interfaces digitais porque o fator crítico no software é como as pistas visuais sinalizam e comunicam a interatividade ao usuário.", 1, "Gibson: real, independe da percepção. Norman: percebida, depende de pistas visuais.", "u-affordance"],
      ["Norman rejeitou totalmente o trabalho de Gibson por considerar que objetos físicos não possuem utilidade ou usabilidade.", 0, "Norman adaptou o conceito de Gibson, não o rejeitou.", "u-affordance"],
      ["Affordance percebida significa a capacidade de um sistema de computar dados em alta velocidade sem travar a placa de vídeo.", 0, "Fala de hardware.", ABS],
      ["Ambos os autores concordam que telas planas digitais possuem affordances físicas idênticas a botões mecânicos com mola.", 0, "Por isso Norman criou a affordance percebida: na tela, o que vale são as pistas visuais.", "u-affordance"]], 51, 11],
    [U8, "A Semiótica oferece arcabouço teórico para analisar a linguagem e a sinalização em interfaces digitais. Com base no modelo triádico do signo formulado por Charles Sanders Peirce, assinale a alternativa que explica corretamente os três elementos da semiose aplicada a um ícone de 'salvar' (disquete).", [
      ["Representâmen: o código em linguagem C; Objeto: a memória RAM do computador; Interpretante: o fabricante do hardware.", 0, "Fala de código e hardware, não de signo.", "u-peirce"],
      ["Representâmen: a imagem gráfica do disquete na tela; Objeto: a ação/conceito de armazenar dados permanentemente no sistema; Interpretante: a compreensão na mente do usuário de que clicar ali salvará seu trabalho.", 1, "Representâmen = o que se vê; Objeto = o que representa; Interpretante = o sentido na mente do usuário.", "u-peirce"],
      ["Representâmen: a placa de rede; Objeto: o servidor em nuvem; Interpretante: a velocidade de transmissão em Mbps.", 0, "Fala de rede.", "u-peirce"],
      ["Representâmen: a cor de fundo da página; Objeto: a marca da empresa; Interpretante: a taxa de conversão de vendas.", 0, "Não descreve o ícone de salvar.", "u-peirce"],
      ["Representâmen: o teclado físico; Objeto: a tela do monitor; Interpretante: o cabo de energia elétrica.", 0, "Fala de hardware.", "u-peirce"]], 52, 12],
    [U8, "Um usuário preenche um formulário complexo de 20 campos e, ao clicar em 'Enviar', o sistema apaga todos os dados e exibe o alerta: 'ERRO FATAL 0x80004005: Ação Inválida!'. No âmbito da Computação Afetiva e do Design Emocional, assinale a alternativa que avalia corretamente o impacto emocional e a diretriz de correção recomendada.", [
      ["Essa mensagem gera baixo desconforto, pois o código hexadecimal acalma o usuário ao mostrar rigor técnico; a diretriz é manter o texto exatamente como está.", 0, "Código técnico intimida e não explica nada.", "u-emocao-erros"],
      ["A situação causa alto nível de frustração e quebra de confiança por punir e culpar o usuário; a correção exige preservar os dados digitados, explicar o problema em linguagem clara e oferecer um caminho direto de resolução.", 1, "Perder dados + mensagem técnica = frustração. Corrigir: preservar dados, linguagem clara, caminho de solução.", "u-emocao-erros"],
      ["A frustração é irrelevante para a experiência do usuário, desde que o banco de dados receba os logs de erro do servidor.", 0, "Fala de banco de dados; a frustração importa para a UX.", ABS],
      ["O sistema deve emitir um sinal sonoro em volume máximo para garantir que o usuário aprenda a não errar novamente na próxima tentativa.", 0, "Punir o usuário aumenta a frustração.", "u-emocao-erros"],
      ["A solução recomendada é bloquear o acesso do usuário à aplicação por 24 horas para reestabelecer o equilíbrio emocional.", 0, "Bloquear o usuário piora a experiência.", "u-emocao-erros"]], 53, 13],
    [U9, "As normas ergonômicas internacionais para desenvolvimento de software (como a ISO 9241) enfatizam a importância do cumprimento de guidelines de interface para o controle da Carga Cognitiva do usuário. Assinale a alternativa que apresenta três diretrizes diretamente voltadas à redução da sobrecarga de memória e à prevenção de erros.", [
      ["Exigir digitação livre de códigos numéricos extensos, ocultar botões de confirmação e proibir a função de desfazer (undo).", 0, "As três aumentam a carga e os erros.", "u-carga-cognitiva"],
      ["Agrupar informações complexas em blocos gerenciáveis (chunking), substituir a digitação livre por caixas de seleção/listas sempre que possível e fornecer mecanismos claros de ação reversível (undo).", 1, "Chunking + seleção em vez de digitação + undo.", "u-carga-cognitiva"],
      ["Aumentar a densidade de texto por página, utilizar termos técnicos de banco de dados e eliminar o contraste visual.", 0, "As três pioram a carga cognitiva.", "u-carga-cognitiva"],
      ["Forçar o usuário a decorar sequências de 15 etapas, desativar mensagens de status e remover todos os ícones visuais.", 0, "As três obrigam o usuário a memorizar.", "u-carga-cognitiva"],
      ["Utilizar cores vibrantes piscantes em todos os parágrafos, remover rodapés e ocultar links de navegação.", 0, "Polui a tela e esconde a navegação.", "u-cores-pecado"]], 54, 14],
    [U3, "Projetar a paleta de cores para um sistema corporativo de gestão hospitalar (ERP/B2B) operado durante 8 horas diárias exige escolhas muito distintas do design para um aplicativo móvel de eventos (B2C) focado em compras por impulso. Assinale a alternativa que justifica adequadamente o uso estrito de tons neutros e o uso parcimonioso de cores saturadas no software corporativo B2B.", [
      ["Os tons neutros são utilizados em sistemas B2B apenas para economizar tinta de impressora caso o operador decida imprimir as telas.", 0, "O motivo é ergonomia visual, não economia de tinta.", "u-cores-b2b-b2c"],
      ["A paleta neutra e de baixo contraste cromático previne a exaustão visual e a fadiga ocular em longas jornadas, enquanto a reserva de cores saturadas exclusivamente para exceções críticas atrai a atenção imediata para falhas sem poluir o fluxo de trabalho.", 1, "Neutro = conforto em longas jornadas; cor saturada só para o crítico, por isso chama atenção.", "u-cores-b2b-b2c"],
      ["Aplicativos B2C proíbem o uso de qualquer cor primária para evitar que o usuário perca o interesse na navegação rápida.", 0, "B2C usa mais cor e saturação.", "u-cores-b2b-b2c"],
      ["Sistemas B2B devem evitar cores neutras, devendo utilizar fundos amarelos neon para manter os operadores vigilantes durante o turno.", 0, "Neon em tudo causa fadiga visual.", "u-cores-b2b-b2c"],
      ["A escolha cromática em softwares corporativos não possui nenhum impacto na taxa de erros operacionais ou no desempenho dos funcionários.", 0, "A cor impacta a fadiga e os erros.", "u-cores-b2b-b2c"]], 55, 15]
  ];

  registrar('usabilidade', 'objetivas', Q.map(([bloco, enunciado, alts, num, diss], i) => ({
    id: i + 1,
    bloco,
    enunciado,
    origem: `Questão ${num} da revisão` + (diss ? ` · Dissertativa ${diss}` : ''),
    alternativas: alts.map(([texto, correta, explicacao, ancora]) => ({ texto, correta: !!correta, explicacao, ancora }))
  })));
})();
