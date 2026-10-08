// Resumo: Padrões de Usabilidade e Desenvolvimento de Interfaces
// Baseado no material "REVISÃO – GABARITO" (55 questões, Profª Drª Alessandra Preto Bittante), N1.
// Todos os ids começam com "u-" para não colidir com as âncoras de outras matérias.
registrar('usabilidade', 'resumo', [
  {
    id: "u-abertura", num: "", titulo: "Abertura",
    secoes: [
      { id: "u-dica-prova", titulo: "Dica de prova",
        html: `<p>O padrão das questões é sempre o mesmo: a alternativa certa é <strong>equilibrada e centrada no usuário</strong>. As erradas usam <strong>palavras absolutas</strong> ("exclusivamente", "sempre", "totalmente", "elimina", "proíbe") ou falam de <strong>hardware, banco de dados ou código</strong> quando o assunto é experiência do usuário. Desconfie dessas.</p>`,
        pegadinha: "A regra tem exceção: na questão das cores (até 90 segundos), a alternativa <strong>certa</strong> diz que os julgamentos se baseiam \"exclusivamente\" na paleta de cores. Use a dica para eliminar alternativas, mas leia o conteúdo." },
      { id: "u-autores", titulo: "Quem é quem (autores que caem)",
        html: `<table><thead><tr><th>Autor / fonte</th><th>Conceito</th></tr></thead><tbody>
<tr><td>ISO 9241-11</td><td>Definição de usabilidade: eficácia, eficiência e satisfação num contexto de uso</td></tr>
<tr><td>Jakob Nielsen (1993)</td><td>Atributos de usabilidade (aprendizagem, memorabilidade…) e as 10 heurísticas</td></tr>
<tr><td>Nielsen &amp; Rolf Molich</td><td>Avaliação heurística</td></tr>
<tr><td>Donald Norman (<em>The Design of Everyday Things</em>)</td><td>Mapeamento, restrições, affordance percebida</td></tr>
<tr><td>James J. Gibson (1968)</td><td>Affordance (psicologia ecológica)</td></tr>
<tr><td>Sharp, Rogers e Preece</td><td>Design de Interação (IxD)</td></tr>
<tr><td>Varela, Thompson e Rosch</td><td>Teoria enativa da cognição</td></tr>
<tr><td>Charles Sanders Peirce</td><td>Signo triádico: representâmen, objeto, interpretante</td></tr>
<tr><td>Andersen (1997)</td><td>Semiótica de máquinas: níveis físico, funcional e semiótico</td></tr>
<tr><td>B. F. Skinner (1966)</td><td>Aprendizagem e generalização comportamental</td></tr>
<tr><td>Thompson &amp; Spencer (1966)</td><td>Habituação visual</td></tr>
<tr><td>Card et al. (1999)</td><td>Visualização de informação</td></tr>
</tbody></table>` }
    ]
  },
  {
    id: "u-fund", num: "01", titulo: "Fundamentos, metas e princípios",
    secoes: [
      { id: "u-iso", titulo: "ISO 9241-11",
        html: `<p>Usabilidade é a capacidade de um produto ser usado por <strong>usuários específicos</strong> para atingir <strong>objetivos específicos</strong> com <strong>eficácia, eficiência e satisfação</strong> num <strong>contexto específico de uso</strong>.</p>`,
        pegadinha: "Usabilidade <strong>não é propriedade fixa</strong>, igual para iniciantes e especialistas: depende de quem usa e do contexto." },
      { id: "u-metas", titulo: "Metas: eficácia, eficiência e satisfação",
        html: `<table><thead><tr><th>Meta</th><th>Significado</th><th>Pegadinha comum</th></tr></thead><tbody>
<tr><td>Eficácia</td><td>Precisão e completude com que o usuário atinge o objetivo (ex.: emitir a certidão correta)</td><td>Não é rapidez nem "menor esforço computacional"</td></tr>
<tr><td>Eficiência</td><td>Relação entre a acurácia alcançada e os recursos/tempo gastos</td><td>Não é "exclusivamente precisão, independente do esforço"</td></tr>
<tr><td>Satisfação</td><td>Quão agradável é a experiência; gera percepção positiva e incentiva o uso contínuo</td><td>É a resposta da Questão 1 (gabarito corrigido em 03/10)</td></tr>
</tbody></table>
<p class="exemplo"><strong>Exemplo:</strong> num portal de certidões, a <strong>taxa de conclusão sem erros</strong> mede a eficácia e o <strong>tempo gasto</strong> mede a eficiência. Ser rápido não garante acertar.</p>` },
      { id: "u-nielsen-atributos", titulo: "Nielsen (1993): aprendizagem × memorabilidade",
        html: `<p><strong>Facilidade de aprendizagem (learnability):</strong> rapidez com que um usuário <strong>novato</strong> realiza tarefas no primeiro contato.</p>
<p><strong>Memorabilidade:</strong> o usuário <strong>casual</strong> volta ao sistema depois de meses sem uso e executa as tarefas sem reaprender. É essencial em sistemas de uso esporádico, como um ERP usado poucas vezes por ano.</p>`,
        pegadinha: "Errado: \"memorabilidade = fazer tarefa complexa na 1ª tentativa sem aprendizado prévio\" e \"usabilidade é propriedade fixa, igual para iniciantes e especialistas\"." },
      { id: "u-ui-ux-ixd", titulo: "UI × UX e IxD",
        html: `<p><strong>UI:</strong> o meio, o arranjo visual/funcional pelo qual o usuário opera o sistema.</p>
<p><strong>UX:</strong> percepção holística, emoções e sentimentos <strong>antes, durante e depois</strong> da interação.</p>
<p><strong>IxD (Sharp, Rogers, Preece):</strong> projetar produtos interativos que apoiem e melhorem como as pessoas se comunicam e interagem no cotidiano e no trabalho, com <strong>usabilidade intuitiva, conforto gráfico, funcionalidade objetiva e legibilidade</strong>.</p>`,
        pegadinha: "UI e UX não são sinônimos, e uma alternativa comum <strong>inverte</strong> os dois (UI = sensações; UX = código das cores). Está errada." },
      { id: "u-norman-mapeamento", titulo: "Norman: mapeamento (mapping)",
        html: `<p>Relação entre os controles e seus efeitos no mundo real. Ex.: girar o volante para mudar a direção das rodas; botões das lâmpadas no app organizados na mesma disposição dos cômodos da casa.</p>` },
      { id: "u-norman-restricoes", titulo: "Norman: restrições (constraints)",
        html: `<p>Limitam o tipo de interação possível para reduzir erros. Ex.: desabilitar o botão "Ligar Ar-Condicionado" se o aparelho estiver desconectado.</p>
<table><thead><tr><th>Tipo</th><th>Exemplo</th></tr></thead><tbody>
<tr><td>Física</td><td>Impedir fisicamente o USB invertido</td></tr>
<tr><td>Lógica</td><td>Desativar opções de menu que não fazem sentido no contexto</td></tr>
<tr><td>Cultural</td><td>Usar vermelho para alertas críticos ou erros</td></tr>
</tbody></table>` },
      { id: "u-controle-usuario", titulo: "Controle do usuário e liberdade",
        html: `<p>Princípio de Nielsen/Norman: "saídas de emergência" claras, <strong>desfazer (undo)</strong> e <strong>refazer (redo)</strong> para abandonar estados indesejados. É o princípio que permite <strong>reverter ações</strong>.</p>` }
    ]
  },
  {
    id: "u-heur", num: "02", titulo: "Heurísticas de Nielsen e avaliação heurística",
    secoes: [
      { id: "u-aval-heuristica", titulo: "Avaliação heurística (Nielsen & Molich)",
        html: `<p>Inspeção sistemática feita por <strong>especialistas</strong>, com base em diretrizes (heurísticas), para identificar problemas de usabilidade de forma <strong>rápida e econômica</strong>.</p>`,
        pegadinha: "Não exige centenas de usuários, <strong>não substitui</strong> os testes com usuários, não avalia código ou banco de dados e não é \"puramente matemática\": depende do julgamento dos especialistas." },
      { id: "u-aval-fases", titulo: "As três fases",
        html: `<table><thead><tr><th>Fase</th><th>O que acontece</th></tr></thead><tbody>
<tr><td>1. Planejamento</td><td>Definição de objetivos e seleção do conjunto de heurísticas</td></tr>
<tr><td>2. Execução</td><td>Inspeção <strong>individual e independente</strong> por especialistas</td></tr>
<tr><td>3. Revisão</td><td>Consolidação e priorização dos problemas encontrados</td></tr>
</tbody></table>` },
      { id: "u-aval-vantagens", titulo: "Vantagens × desvantagens",
        html: `<table><thead><tr><th>Vantagens</th><th>Desvantagens</th></tr></thead><tbody>
<tr><td>Feedback rápido</td><td>Exige avaliadores especialistas qualificados</td></tr>
<tr><td>Custo relativamente baixo</td><td>Pode deixar passar problemas que só aparecem com usuários reais no contexto de uso</td></tr>
<tr><td>Não precisa recrutar usuários de imediato</td><td></td></tr>
</tbody></table>` },
      { id: "u-heuristicas-exemplos", titulo: "Heurísticas na prática (exemplos que caíram)",
        html: `<table><thead><tr><th>Heurística</th><th>Exemplo correto</th></tr></thead><tbody>
<tr><td>Visibilidade do status do sistema</td><td>Barra de progresso do buffer; indicação do perfil ativo no app de streaming</td></tr>
<tr><td>Compatibilidade entre sistema e mundo real</td><td>Metáfora da "lixeira" para remover itens; "engrenagem" para configurações</td></tr>
<tr><td>Controle do usuário e liberdade</td><td>Desfazer/refazer; saídas de emergência</td></tr>
<tr><td>Reconhecimento em vez de memorização</td><td>Mostrar opções em vez de exigir que o usuário decore caminhos</td></tr>
</tbody></table>`,
        pegadinha: "Alternativas erradas distorcem as heurísticas com termos absolutos: \"consistência <strong>obriga</strong> elementos idênticos em todas as plataformas\", \"prevenção de erros <strong>substitui totalmente</strong> as mensagens de erro\"." }
    ]
  },
  {
    id: "u-cores", num: "03", titulo: "Psicologia das cores e hierarquia visual",
    secoes: [
      { id: "u-cores-90s", titulo: "Primeira impressão: até 90 segundos",
        html: `<p>O usuário forma uma opinião subconsciente sobre um app novo em <strong>até 90 segundos</strong>, e a maioria desses julgamentos se baseia só nas <strong>cores</strong>.</p>` },
      { id: "u-cores-significado", titulo: "Significado das cores",
        html: `<p><strong>Verde:</strong> transações financeiras, confirmações de pedido, sucesso e ganho.</p>
<p><strong>Vermelho (e laranja):</strong> alertas críticos, erros e urgência.</p>
<p><strong>Azul:</strong> transmite confiança; é muito usado em bancos e sistemas corporativos.</p>` },
      { id: "u-cores-603010", titulo: "Regra 60-30-10",
        html: `<table><thead><tr><th>Proporção</th><th>Onde usar</th></tr></thead><tbody>
<tr><td>60%</td><td>Fundos gerais, áreas estruturais, respiros (off-white, cinzas claros)</td></tr>
<tr><td>30%</td><td>Cards, painéis laterais, barras de navegação e blocos de conteúdo secundário</td></tr>
<tr><td>10%</td><td>Botões de ação (CTAs), links ativos, ícones de destaque</td></tr>
</tbody></table>` },
      { id: "u-cores-b2b-b2c", titulo: "B2B/ERP × B2C",
        html: `<p><strong>Sistemas corporativos/ERP (B2B):</strong> tons neutros e cinzas estruturados, baixo contraste cromático. Isso previne exaustão visual e fadiga ocular em jornadas longas (ex.: 8 h/dia). Cores saturadas ficam só para <strong>exceções críticas</strong>, e por isso chamam atenção imediata.</p>
<p><strong>Apps de consumo (B2C):</strong> mais saturação e engajamento emocional (ex.: compras por impulso).</p>` },
      { id: "u-cores-tokens", titulo: "Tokens de design",
        html: `<p>Variáveis de cor no CSS ou em frameworks (ex.: Tailwind) permitem <strong>alterações globais imediatas</strong> na paleta e suporte nativo a temas (Light/Dark Mode). O certo é <strong>não</strong> deixar cores fixas (hardcoded) no código.</p>` },
      { id: "u-cores-pecado", titulo: "O \"pecado capital\" das cores",
        html: `<p>Usar <strong>mais de 5 cores principais</strong> na mesma tela gera poluição visual e caos informacional.</p>`,
        pegadinha: "Mais de 10 cores <strong>não</strong> \"melhora a retenção cognitiva\". Consistência no significado das cores, validação de contraste e suporte a temas são <strong>boas práticas</strong>, não pecados." }
    ]
  },
  {
    id: "u-acess", num: "04", titulo: "Acessibilidade, WCAG e modos de visualização",
    secoes: [
      { id: "u-wcag-contraste", titulo: "Contraste mínimo: WCAG nível AA",
        html: `<p><strong>4.5:1</strong> para texto normal e <strong>3:1</strong> para texto grande.</p>` },
      { id: "u-daltonismo", titulo: "Daltonismo",
        html: `<p>Cerca de <strong>8% dos homens</strong>, principalmente vermelho × verde. Nunca comunicar estado crítico <strong>só pela cor</strong>: combinar com ícones descritivos e texturas (redundância), sem banir as cores.</p>` },
      { id: "u-dark-mode", titulo: "Dark Mode",
        html: `<p>Além do conforto em pouca luz, reduz drasticamente o consumo de energia em telas <strong>OLED/AMOLED</strong> (o pixel preto fica apagado).</p>` },
      { id: "u-dark-mode-erro", titulo: "Erro no Dark Mode",
        html: `<p>A <strong>inversão bruta</strong> (preto ↔ branco) causa sombras incorretas e contraste excessivo, que machuca a retina. Usar paletas dedicadas com <strong>cinzas escuros profundos</strong>.</p>` }
    ]
  },
  {
    id: "u-telas", num: "05", titulo: "Padrões de telas e navegação",
    secoes: [
      { id: "u-splash", titulo: "Splash Screen",
        html: `<p>Tela de abertura, exibida durante o carregamento. <strong>Até 3 segundos</strong>, de preferência menos, com elementos visuais leves e discretos.</p>` },
      { id: "u-onboarding", titulo: "Onboarding",
        html: `<p>Integração de novos usuários. Destacar só <strong>3 funcionalidades ou benefícios por tela</strong> e sempre oferecer a opção <strong>"Pular"</strong>.</p>` },
      { id: "u-feed", titulo: "Feed",
        html: `<p>Conteúdo contínuo. <strong>Títulos claros e resumos objetivos</strong>, para o usuário decidir rápido se vale abrir o conteúdo.</p>` },
      { id: "u-checkout", titulo: "Checkout",
        html: `<p>Compra como <strong>visitante (guest checkout)</strong>, preenchimento automático e menos etapas. Não esconder taxas nem exigir conta complexa antes do pagamento.</p>` }
    ]
  },
  {
    id: "u-estetica", num: "06", titulo: "Evolução estética: Flat Design e semi-realismo",
    secoes: [
      { id: "u-flat-design", titulo: "Skeuomorfismo × Flat Design",
        html: `<p><strong>Skeuomorfismo:</strong> imita texturas físicas (couro, madeira).</p>
<p><strong>Flat Design (2007–2013):</strong> remove texturas pesadas e usa retângulos coloridos planos.</p>` },
      { id: "u-generalizacao", titulo: "Generalização comportamental (Skinner, 1966)",
        html: `<p>O usuário abstrai conceitos funcionais, independentemente do estilo. Ex.: entende que um retângulo colorido destacado é um botão.</p>` },
      { id: "u-habituacao", titulo: "Habituação visual (Thompson & Spencer, 1966)",
        html: `<p>Estímulos repetidos e idênticos perdem valor de atenção com o tempo, gerando fadiga mental ou apatia.</p>`,
        pegadinha: "Não confundir com a <strong>Lei de Fitts</strong>, que trata do tempo para atingir um alvo (tamanho e distância)." },
      { id: "u-semi-realismo", titulo: "Volta ao semi-realismo (Liquid Glass)",
        html: `<p>Gradientes sutis, refração e profundidade: é uma <strong>evolução</strong> baseada em padrões vivos. Agrega riqueza visual para saciar a necessidade humana de novidade e imersão, <strong>sem descartar a clareza funcional</strong>. Não é retrocesso.</p>` },
      { id: "u-metricas", titulo: "Métricas modernas",
        html: `<p>Além da conversão: <strong>satisfação estética e engajamento emocional</strong>, medidos com pesquisas longitudinais e <strong>rastreamento ocular (eye-tracking)</strong>.</p>` }
    ]
  },
  {
    id: "u-wimp", num: "07", titulo: "Interfaces de comando, WIMP, multimodais e enativas",
    secoes: [
      { id: "u-wimp-def", titulo: "WIMP",
        html: `<p><strong>W</strong>indows, <strong>I</strong>cons, <strong>M</strong>enus e <strong>P</strong>ointing device. Padrão dominante a partir dos anos 1980, na transição da <strong>CLI</strong> (linha de comando) para a <strong>GUI</strong> (interface gráfica).</p>` },
      { id: "u-menus-icones", titulo: "Menus e ícones",
        html: `<p><strong>Menu:</strong> componente que apresenta coleções estruturadas de opções e comandos (plano, em cascata ou contextual).</p>
<p><strong>Ícones:</strong> representam objetos familiares e, em regra, são mais fáceis de memorizar que comandos de texto puro (CLI). Rótulos de texto junto aos ícones e técnicas participativas como o <strong>Icon Design Game</strong> ajudam na compreensão.</p>` },
      { id: "u-enativa", titulo: "Teoria enativa (Varela, Thompson, Rosch)",
        html: `<p><strong>Modelo tradicional/cognitivista (anos 1960/70):</strong> a mente é um processador que manipula representações simbólicas internas e estáticas.</p>
<p><strong>Abordagem enativa:</strong> a cognição emerge do acoplamento dinâmico entre <strong>ação e percepção corporificada</strong>. O usuário aprende "fazendo", pela própria experiência (ensinar o usuário a usar enquanto ele usa).</p>` },
      { id: "u-visualizacao", titulo: "Visualização de informação (Card et al., 1999)",
        html: `<p>Amplifica a cognição. Uma boa interface deixa o usuário ver <strong>padrões, tendências e anomalias</strong> diretamente na representação visual.</p>` },
      { id: "u-multimodais", titulo: "Interfaces multimodais",
        html: `<p>Toque, gestos, AR, fala. Nas interfaces gestuais em AR, um desafio é a <strong>dificuldade em tarefas de precisão</strong>, que exige ambientes controlados e algum treinamento.</p>` }
    ]
  },
  {
    id: "u-afford", num: "08", titulo: "Affordances, semiótica e emoção",
    secoes: [
      { id: "u-affordance", titulo: "Affordance: Gibson × Norman",
        html: `<table><thead><tr><th>Gibson (1968)</th><th>Norman (affordance percebida)</th></tr></thead><tbody>
<tr><td>Propriedade física e real do ambiente, <strong>independente da percepção</strong>: aquilo que o objeto oferece ao organismo</td><td>No design digital, o fator crítico é a affordance <strong>percebida</strong>: pistas visuais que sinalizam e comunicam a interatividade</td></tr>
</tbody></table>
<p><strong>Definição geral:</strong> propriedade física ou percebida de um objeto que determina ou sugere como ele pode ser usado.</p>` },
      { id: "u-peirce", titulo: "Semiótica de Peirce (signo triádico)",
        html: `<table><thead><tr><th>Elemento</th><th>Exemplo: ícone de "salvar" (disquete)</th></tr></thead><tbody>
<tr><td>Representâmen (o signo)</td><td>A imagem gráfica do disquete na tela</td></tr>
<tr><td>Objeto</td><td>A ação/conceito de armazenar dados permanentemente</td></tr>
<tr><td>Interpretante</td><td>A compreensão, na mente do usuário, de que clicar ali salva o trabalho</td></tr>
</tbody></table>`,
        pegadinha: "\"Sintaxe, Semântica e Pragmática\" são as dimensões da semiótica de <strong>Morris</strong>, não a tríade de Peirce." },
      { id: "u-andersen", titulo: "Semiótica de máquinas (Andersen, 1997)",
        html: `<p>Três níveis: <strong>físico</strong> (propriedades mecânicas), <strong>funcional</strong> (funções algorítmicas) e <strong>semiótico</strong>. No nível semiótico, as máquinas produzem e interpretam sinais que representam conceitos e ferramentas virtuais (ex.: o pincel num programa de desenho).</p>` },
      { id: "u-emocao-erros", titulo: "Computação afetiva e mensagens de erro",
        html: `<p>A frustração costuma vir de mensagens de erro <strong>vagas, confusas, intimidadoras ou que culpam o usuário</strong> (ex.: "Erro fatal 98547").</p>
<p class="exemplo"><strong>Caso clássico:</strong> formulário de 20 campos que apaga tudo e mostra "ERRO FATAL 0x80004005" gera alta frustração e quebra de confiança. A correção é <strong>preservar os dados digitados</strong>, <strong>explicar o problema em linguagem clara</strong> e <strong>oferecer um caminho direto de resolução</strong>.</p>` },
      { id: "u-confianca", titulo: "Confiança (e-commerce, internet banking)",
        html: `<p>Segurança robusta (criptografia), transparência nas políticas, usabilidade intuitiva, feedback imediato e design profissional.</p>` }
    ]
  },
  {
    id: "u-guide", num: "09", titulo: "Guidelines avançadas e checklist de experiência",
    secoes: [
      { id: "u-carga-cognitiva", titulo: "Carga cognitiva",
        html: `<p>O usuário não deve memorizar grandes volumes de informação; limite a blocos gerenciáveis (<strong>regra dos 7 itens / chunks</strong>).</p>
<p><strong>Três diretrizes:</strong> agrupar em blocos (chunking), trocar digitação livre por listas/caixas de seleção e oferecer ações reversíveis (undo).</p>` },
      { id: "u-ciclo-vida", titulo: "Ciclo de vida da experiência",
        html: `<p>Do ponto de vista do <strong>usuário</strong>: Instalação → Primeiro uso e customização → Uso regular → Gerenciamento e manutenção → Desinstalar ou atualizar.</p>`,
        pegadinha: "Programação → compilação → deploy, ou requisitos → protótipo → codificação, são ciclos de <strong>desenvolvimento</strong>, não da experiência do usuário." },
      { id: "u-janelas", titulo: "Janelas",
        html: `<p><strong>Web:</strong> suportar resolução mínima efetiva de <strong>800×600</strong> e layouts redimensionáveis para <strong>1024×768</strong> ou mais.</p>
<p><strong>Janelas de propriedades:</strong> centralizadas no topo da janela proprietária.</p>
<p><strong>Janelas contextuais:</strong> abertas perto do objeto que as originou.</p>` },
      { id: "u-padronizacao", titulo: "Padronização",
        html: `<p>Definir padrões consistentes para <strong>textos</strong> (títulos, seções, formulários), <strong>controles</strong> (listas suspensas, caixas de pesquisa, seleção), <strong>comandos</strong> (menus, barras de ferramentas, botões) e <strong>janelas de mensagens</strong> (avisos, erros, confirmações).</p>` }
    ]
  },
  {
    id: "u-rev", num: "10", titulo: "Revisão rápida: gabarito das 55 questões",
    secoes: [
      { id: "u-rev-gabarito", titulo: "Uma linha por questão",
        html: `<ol class="gabarito">
<li>Satisfação = experiência agradável, incentiva uso contínuo</li>
<li>Controle do usuário e liberdade (undo/redo)</li>
<li>Mapeamento (mapping)</li>
<li>Restrição cultural: vermelho para alertas/erros</li>
<li>Avaliação heurística: inspeção por especialistas, rápida e econômica</li>
<li>Opinião em até 90 s, baseada nas cores</li>
<li>Verde: finanças, confirmação, sucesso</li>
<li>30% = cards, painéis, navegação, blocos secundários</li>
<li>ERP/B2B: neutros e cinzas (ergonomia)</li>
<li>Tokens: mudanças globais + Light/Dark</li>
<li>WCAG AA: 4.5:1 e 3:1</li>
<li>Nunca só cor: ícones + texturas</li>
<li>Dark Mode economiza energia em OLED/AMOLED</li>
<li>Inversão bruta: contraste excessivo; usar cinzas escuros</li>
<li>Pecado: mais de 5 cores principais</li>
<li>Splash Screen</li>
<li>Splash até 3 s, leve e discreta</li>
<li>Onboarding: 3 itens por tela + "Pular"</li>
<li>Feed: títulos claros + resumos objetivos</li>
<li>Checkout: visitante, autopreenchimento, menos etapas</li>
<li>Flat Design (2007–2013)</li>
<li>Skinner: abstrair conceitos funcionais</li>
<li>Habituação visual (Thompson &amp; Spencer, 1966)</li>
<li>Liquid Glass: evolução, novidade + clareza</li>
<li>Métricas: satisfação estética, eye-tracking</li>
<li>WIMP: Menu</li>
<li>Ícones: objetos familiares, mais fáceis que CLI</li>
<li>Enativa: percepção e ação, aprender usando</li>
<li>Card: ver padrões, tendências, anomalias</li>
<li>AR gestual: difícil para tarefas de precisão</li>
<li>Affordance: propriedade que sugere o uso</li>
<li>Peirce: representâmen, objeto, interpretante</li>
<li>Andersen: máquinas produzem e interpretam sinais</li>
<li>Frustração: mensagens de erro vagas/que culpam</li>
<li>Confiança: segurança, transparência, feedback</li>
<li>Carga cognitiva: blocos de 7 itens/chunks</li>
<li>Ciclo: instalação → uso → manutenção → desinstalar</li>
<li>Janelas web: mín. 800×600, layouts 1024×768</li>
<li>Propriedades no topo; contextuais perto do objeto</li>
<li>Padrões: textos, controles, comandos, mensagens</li>
<li>Eficácia = precisão/completude; eficiência = recursos</li>
<li>IxD: apoiar como pessoas se comunicam e interagem</li>
<li>UI = meio visual; UX = percepção holística</li>
<li>Aprendizagem (novato) × memorabilidade (casual)</li>
<li>Status: barra de buffer; mundo real: lixeira</li>
<li>Mapeamento: botões = cômodos; restrição: desabilitar</li>
<li>Planejamento → Execução → Revisão</li>
<li>Rápida e barata × exige especialistas</li>
<li>Windows, Icons, Menus, Pointing device</li>
<li>Tradicional simbólico × enativo corporificado</li>
<li>Gibson: real × Norman: percebida</li>
<li>Disquete: imagem → salvar → compreensão</li>
<li>Erro fatal: preservar dados, linguagem clara</li>
<li>Chunking + seleção + undo</li>
<li>B2B neutro previne fadiga; saturadas para exceções</li>
</ol>
<p class="nota-temas">A resposta da Questão 1 foi corrigida pela professora em 03/10: a correta é a C (satisfação).</p>` }
    ]
  }
]);
