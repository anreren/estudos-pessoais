window.MATERIAL_APOIO = window.MATERIAL_APOIO || {};

window.MATERIAL_APOIO.especificos_adm = {
  titulo: "Conhecimentos Específicos — Assistência Administrativa",
  subtitulo: "Cargo 04 (PL.AL.060) — 20 questões na prova (4,0 pontos • 40% da nota!) • 1º critério de desempate por disciplina",
  secoes: [
    {
      id: "esp-constitucional",
      titulo: "1. Noções de Direito Constitucional",
      html: `
        <h5>Teoria da Constituição e Princípios Fundamentais (Arts. 1º a 4º CF/88)</h5>
        <ul>
          <li><strong>Classificação da CF/88:</strong> Promulgada (democrática), Escrita (codificada), Analítica (prolixa), Dogmática, <strong>Rígida</strong> (processo de alteração mais dificultoso que leis comuns), Formal e Eclética.</li>
          <li><strong>Elementos da Constituição:</strong> Orgânicos (estrutura do Estado/Poderes), Limitativos (direitos individuais), Socioideológicos (ordem econômica/social), de Estabilização Constitucional (controle de constitucionalidade, intervenção) e Formais de Aplicabilidade (preâmbulo, ADCT).</li>
          <li><strong>Supremacia e Controle de Constitucionalidade:</strong> a CF ocupa o topo do ordenamento (pirâmide de Kelsen). Controle <em>preventivo</em> (CCJ, veto jurídico do Executivo) e <em>repressivo</em> (Poder Judiciário: <em>difuso</em> por qualquer juiz no caso concreto; <em>concentrado</em> no STF via ADI, ADC, ADPF e ADO — e no TJ-PA frente à CE/PA).</li>
        </ul>
        <div class="quadro-resumo">
          <strong class="quadro-titulo">Mnemônicos Clássicos dos Arts. 1º, 3º e 4º da CF/88</strong>
          • <strong>Fundamentos (Art. 1º — SO-CI-DI-VA-PLU):</strong> <strong>So</strong>berania, <strong>Ci</strong>dadania, <strong>Di</strong>gnidade da pessoa humana, <strong>Va</strong>lores sociais do trabalho e da livre iniciativa, <strong>Plu</strong>ralismo político.<br>
          • <strong>Objetivos Fundamentais (Art. 3º — CON-GA-ER-PRO — verbos no infinitivo!):</strong> <strong>Con</strong>struir sociedade livre/justa/solidária; <strong>Ga</strong>rantir desenvolvimento nacional; <strong>Er</strong>radicar pobreza/marginalização e reduzir desigualdades; <strong>Pro</strong>mover o bem de todos sem preconceitos.<br>
          • <strong>Relações Internacionais (Art. 4º):</strong> independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre Estados, defesa da paz, solução pacífica de conflitos, repúdio ao terrorismo e ao racismo, cooperação entre os povos, concessão de asilo político.
        </div>
        <h5>Direitos e Garantias Fundamentais (Arts. 5º a 17) e Remédios Constitucionais</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Remédio Constitucional</th><th>Finalidade</th><th>Gratuito?</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Habeas Corpus (HC)</strong></td><td>Proteger a <strong>liberdade de locomoção</strong> (ir e vir) contra ilegalidade ou abuso de poder.</td><td>Sim (sempre)</td></tr>
            <tr><td><strong>Habeas Data (HD)</strong></td><td>Assegurar acesso ou retificação de <strong>informações pessoais</strong> em bancos de dados públicos ou de caráter público (exige prévia recusa administrativa!).</td><td>Sim (sempre)</td></tr>
            <tr><td><strong>Mandado de Segurança (MS)</strong></td><td>Proteger <strong>direito líquido e certo</strong> (comprovado de plano) não amparado por HC nem HD (prazo decadencial de 120 dias; pode ser individual ou coletivo).</td><td>Não (salvo justiça gratuita)</td></tr>
            <tr><td><strong>Mandado de Injunção (MI)</strong></td><td>Suprir <strong>falta de norma regulamentadora</strong> que torne inviável o exercício de direitos constitucionais.</td><td>Não</td></tr>
            <tr><td><strong>Ação Popular</strong></td><td><strong>Qualquer cidadão</strong> (eleitor em dia) pode anular ato lesivo ao patrimônio público, moralidade administrativa, meio ambiente ou patrimônio histórico/cultural.</td><td>Isento de custas (salvo comprovada má-fé)</td></tr>
          </tbody>
        </table>
        <ul>
          <li><strong>Direitos Sociais (Art. 6º):</strong> educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, assistência aos desamparados.</li>
          <li><strong>Nacionalidade (Art. 12):</strong> Brasileiros <em>natos</em> (nascidos no Brasil — <em>jus soli</em>, salvo pais estrangeiros a serviço de seu país; ou filhos de brasileiros no exterior a serviço do Brasil / registrados / opção após maioridade) e <em>naturalizados</em>. Cargos privativos de brasileiro nato (<strong>MP3.COM</strong>): Presidente/Vice da República, Presidente da Câmara, Presidente do Senado, Ministro do STF, Carreira Diplomática, Oficial das Forças Armadas e Ministro de Estado da Defesa.</li>
          <li><strong>Direitos Políticos (Arts. 14 a 17):</strong> Voto obrigatório (18 a 70 anos); facultativo (analfabetos, maiores de 70, 16 a 18 anos); inalistáveis (estrangeiros e conscritos). Idades mínimas de elegibilidade (<strong>35-30-21-18</strong>): 35 (Presidente/Senador), 30 (Governador), 21 (Deputado Federal/Estadual, Prefeito), 18 (Vereador).</li>
        </ul>
        <h5>Organização do Estado, Poder Legislativo e Processo Legislativo (CF/88)</h5>
        <ul>
          <li><strong>Federação (Art. 18):</strong> União, Estados, DF e Municípios — todos <strong>autônomos</strong> (não soberanos; só a República Federativa tem soberania!).</li>
          <li><strong>Repartição de Competências:</strong> União (privativa legislativa art. 22 — delegável por LC; exclusiva administrativa art. 21 — indelegável); Comum administrativa (art. 23 — todos os entes); Concorrente legislativa (art. 24 — União, Estados e DF: União edita normas gerais, Estados suplementam); <strong>Estados-membros (Art. 25):</strong> competência <em>remanescente/reservada</em> (tudo que não lhes for vedado pela CF) e auto-organização por suas Constituições Estaduais; Municípios (art. 30 — interesse local).</li>
          <li><strong>Poder Legislativo:</strong> Federal é <em>bicameral</em> (Congresso Nacional = Câmara dos Deputados [povo, proporcional, 4 anos] + Senado Federal [Estados/DF, majoritário, 8 anos, 3 por ente]). Estadual é <em>unicameral</em> (Assembleias Legislativas — Deputados Estaduais, 4 anos).</li>
          <li><strong>Espécies Normativas (Art. 59):</strong> Emendas à Constituição (2 turnos, 3/5 em cada Casa), Leis Complementares (maioria absoluta), Leis Ordinárias (maioria simples), Leis Delegadas, Medidas Provisórias (relevância e urgência, 60+60 dias), Decretos Legislativos (competência exclusiva do Legislativo, sem sanção) e Resoluções (matéria interna corporis, sem sanção).</li>
        </ul>
      `
    },
    {
      id: "esp-administrativo",
      titulo: "2. Direito Administrativo, RJU-PA (Lei nº 5.810/1994), Orçamento e Lei 14.133/2021",
      html: `
        <h5>Princípios da Administração Pública (Art. 37 CF/88)</h5>
        <p><strong>Expressos (LIMPE):</strong> <strong>L</strong>egalidade (o administrador só faz o que a lei autoriza), <strong>I</strong>mpessoalidade (finalidade pública, vedada promoção pessoal), <strong>M</strong>oralidade (probidade/boa-fé), <strong>P</strong>ublicidade (transparência, regra geral para eficácia) e <strong>E</strong>ficiência (resultados, economicidade, celeridade). <em>Implícitos:</em> Supremacia e Indisponibilidade do Interesse Público, Autotutela (Súmula 473 STF: anular ilegais e revogar inoportunos), Razoabilidade/Proporcionalidade, Continuidade e Motivação.</p>
        <h5>Servidores na CF/88 (Art. 37 e 41)</h5>
        <ul>
          <li>Concurso público: validade de até <strong>2 anos</strong>, prorrogável <strong>uma vez</strong> por igual período.</li>
          <li><strong>Estabilidade (Art. 41):</strong> após <strong>3 anos</strong> de efetivo exercício em cargo efetivo + avaliação especial de desempenho. Perda do cargo estável: sentença judicial transitada em julgado, PAD com ampla defesa, avaliação periódica insuficiente ou excesso de despesa com pessoal (art. 169).</li>
          <li><strong>Acumulação lícita (Art. 37, XVI — havendo compatibilidade de horários):</strong> 2 cargos de professor; 1 de professor + 1 técnico/científico; ou 2 privativos de profissionais de saúde com profissões regulamentadas.</li>
        </ul>
        <div class="lei-seca">
          <span class="lei-titulo">Lei Estadual nº 5.810/1994 — RJU dos Servidores Públicos Civis do Pará (Lei Seca Essencial)</span>
          <p><strong>Formas de Provimento (Art. 5º):</strong> Nomeação, Promoção, Reintegração, Transferência*, Reversão, Aproveitamento, Readaptação e Recondução. <em>(*Atenção: Transferência consta no texto original da lei, embora declarada inconstitucional pelo STF — na letra da lei 5.810 ela aparece!)</em></p>
          <p><strong>Posse (Art. 22):</strong> Prazo de <strong>30 dias</strong> da publicação do ato de provimento, prorrogável por mais <strong>15 dias</strong> (a juízo da Administração, comprovada necessidade). Se não tomar posse → ato <strong>tornado sem efeito</strong>.</p>
          <p><strong>Exercício (Arts. 23–25):</strong> Prazo de <strong>15 dias</strong> contados da posse. Se não entrar em exercício → <strong>exoneração de ofício</strong>.</p>
          <p><strong>Estágio Probatório (Art. 32):</strong> 3 anos de efetivo exercício, avaliando assiduidade, disciplina, capacidade de iniciativa, produtividade e responsabilidade (avaliação final 4 meses antes do término).</p>
          <p><strong>Vacância (Art. 58):</strong> Exoneração, Demissão, Promoção, Aposentadoria, Readaptação, Falecimento, Transferência e Destituição.</p>
          <p><strong>Penalidades Disciplinares (Art. 183):</strong> <strong>Repreensão</strong> (ATENÇÃO: na Lei 5.810/PA é <em>Repreensão</em>, não "advertência"!), <strong>Suspensão</strong> (até 90 dias; pode ser convertida em multa de 50% por dia se conveniência do serviço), <strong>Demissão</strong>, <strong>Destituição de cargo em comissão / função gratificada</strong> e <strong>Cassação de aposentadoria ou disponibilidade</strong>.</p>
          <p><strong>Prescrição Disciplinar (Art. 198):</strong> <strong>5 anos</strong> (demissão, cassação, destituição); <strong>2 anos</strong> (suspensão); <strong>180 dias</strong> (repreensão). Corre da data em que o fato se tornou conhecido. Abertura de sindicância ou PAD <em>interrompe</em> a prescrição.</p>
        </div>
        <h5>Atos Administrativos e Organização Administrativa</h5>
        <ul>
          <li><strong>Elementos/Requisitos (CO-FI-FO-M-OB):</strong> <strong>Co</strong>mpetência (vinculado), <strong>Fi</strong>nalidade (vinculado), <strong>Fo</strong>rma (vinculado), <strong>M</strong>otivo (pode ser discricionário — <em>Teoria dos Motivos Determinantes!</em>) e <strong>Ob</strong>jeto (pode ser discricionário).</li>
          <li><strong>Atributos (P-A-T-I):</strong> <strong>P</strong>resunção de legitimidade/veracidade (relativa), <strong>A</strong>utoexecutoriedade, <strong>T</strong>ipicidade e <strong>I</strong>mperatividade.</li>
          <li><strong>Extinção:</strong> <em>Anulação</em> (vício de ilegalidade — Administração ou Judiciário — efeito <strong>ex tunc</strong>/retroativo); <em>Revogação</em> (conveniência e oportunidade sobre ato lícito — somente a Administração — efeito <strong>ex nunc</strong>); <em>Cassação</em> (beneficiário descumpriu condições).</li>
          <li><strong>Organização Administrativa:</strong> <em>Administração Direta</em> (União, Estados, DF, Municípios e seus órgãos sem personalidade jurídica própria — <strong>desconcentração</strong>) e <em>Administração Indireta</em> (entidades com personalidade jurídica própria — <strong>descentralização</strong>: <strong>F</strong>undações Públicas, <strong>A</strong>utarquias, <strong>S</strong>ociedades de Economia Mista e <strong>E</strong>mpresas Públicas — mnemônico <strong>FASE</strong>).</li>
          <li><strong>Serviços Públicos:</strong> regidos pelos princípios da continuidade, generalidade/universalidade, modicidade tarifária, cortesia e atualidade; delegação mediante <em>concessão</em> (sempre licitação — concorrência/diálogo competitivo, PJ/consórcio, contrato) ou <em>permissão</em> (licitação, PF ou PJ, contrato de adesão precário).</li>
        </ul>
        <h5>Ordem Econômica/Financeira e Orçamento Público</h5>
        <ul>
          <li><strong>Ordem Econômica (Art. 170 CF):</strong> fundada na valorização do trabalho humano e na livre iniciativa; atuação direta do Estado na economia é exceção (segurança nacional ou relevante interesse coletivo — art. 173).</li>
          <li><strong>Princípios Orçamentários:</strong> <em>Unidade/Totalidade</em> (um único orçamento por ente), <em>Universalidade</em> (todas as receitas e despesas), <em>Anualidade</em> (exercício financeiro = 1º/jan a 31/dez), <em>Exclusividade</em> (LOA não contém matéria estranha, salvo créditos suplementares e ARO), <em>Orçamento Bruto</em> (sem deduções), <em>Não Afetação de Impostos</em> (vedada vinculação de receita de impostos, salvo exceções como saúde/educação) e <em>Legalidade</em>.</li>
          <li><strong>Ciclo Orçamentário:</strong> Elaboração (Executivo) → Discussão, Emendas e Votação (<strong>Poder Legislativo / ALEPA + CCFO</strong>) → Execução → Controle e Avaliação (Controle Interno + Externo via ALEPA/TCE).</li>
        </ul>
        <h5>Licitações e Contratos — Nova Lei nº 14.133/2021</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Tópico na Lei 14.133/2021</th><th>Regras Essenciais</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>5 Modalidades</strong></td><td><strong>Pregão</strong> (obrigatório para bens e serviços comuns), <strong>Concorrência</strong> (bens/serviços especiais e obras), <strong>Concurso</strong> (trabalho técnico/artístico/científico), <strong>Leilão</strong> (alienação de bens móveis inservíveis ou imóveis) e <strong>Diálogo Competitivo</strong> (inovação/solução técnica complexa). <em>Obs.: Tomada de Preços e Convite foram EXTINTOS!</em></td></tr>
            <tr><td><strong>Critérios de Julgamento</strong></td><td>Menor preço; Maior desconto; Melhor técnica ou conteúdo artístico; Técnica e preço; Maior lance (leilão); Maior retorno econômico.</td></tr>
            <tr><td><strong>Contratação Direta</strong></td><td><strong>Inexigibilidade (Art. 74):</strong> inviabilidade de competição (rol exemplificativo — fornecedor exclusivo, artista consagrado, notória especialização).<br><strong>Dispensa (Art. 75):</strong> competição possível, mas lei dispensa (rol taxativo — baixo valor, emergência/calamidade até 1 ano, licitação deserta/fracassada).</td></tr>
            <tr><td><strong>Fases (Ordem Padrão)</strong></td><td>Preparatória → Divulgação do Edital → Apresentação de Propostas/Lances → <strong>Julgamento</strong> → <strong>Habilitação</strong> (inversão virou regra!) → Recursal → Homologação.</td></tr>
            <tr><td><strong>Contratos Administrativos</strong></td><td>Cláusulas exorbitantes (alteração unilateral, rescisão unilateral, fiscalização, aplicação de sanções); acréscimo/supressão unilateral de até <strong>25%</strong> (e até <strong>50%</strong> de acréscimo para reforma de edifício/equipamento); acompanhamento obrigatório por <strong>Fiscal</strong> e <strong>Gestor de Contrato</strong>.</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "esp-tecnica-leg",
      titulo: "3. Técnica Legislativa e Documentos Legislativos Não Normativos",
      html: `
        <p><strong>Técnica Legislativa:</strong> arte e ciência de redigir normas jurídicas claras, precisas e harmônicas com o ordenamento (disciplinada pela <strong>LC nº 95/1998</strong> — veja também a Seção 6 de Legislação).</p>
        <h5>Linguagem Jurídico-Legislativa e Vícios de Redação</h5>
        <ul>
          <li><strong>Princípios da redação normativa:</strong> <em>Clareza</em> (fácil compreensão), <em>Precisão</em> (sentido exato, sem dubiedade), <em>Concisão</em> (economia verbal), <em>Impessoalidade</em> e <em>Formalidade</em>. Usar frases curtas, ordem direta, tempo verbal no presente ou futuro simples e uniformidade terminológica (mesma palavra para o mesmo conceito).</li>
          <li><strong>Vícios de Redação a evitar:</strong>
            <ul>
              <li><strong>Ambiguidade:</strong> duplo sentido de frase ou vocábulo.</li>
              <li><strong>Contradição (Antinomia interna):</strong> dispositivo que diz o oposto de outro na mesma norma.</li>
              <li><strong>Obscuridade:</strong> falta de clareza, frases excessivamente longas ou jargão incompreensível.</li>
              <li><strong>Pleonasmo / Redundância:</strong> repetição inútil de ideias.</li>
            </ul>
          </li>
          <li><strong>Estrutura Hipotética da Norma Jurídica:</strong> a norma opera sob a fórmula lógica <strong>"Se [hipótese fática / preceito], então [consequência jurídica / sanção]"</strong> (ex.: <em>Se o servidor faltar sem justificativa, então sofrerá desconto proporcional</em>).</li>
        </ul>
        <h5>Alteração, Consolidação e Codificação</h5>
        <ul>
          <li><strong>Alteração (Art. 12, LC 95/98):</strong> mediante <em>reprodução integral em novo texto</em> (quando a alteração for considerável), <em>revogação parcial</em> ou <em>substituição/acréscimo</em> no próprio texto com "(NR)". <em>Revogação total</em> = ab-rogação; <em>Revogação parcial</em> = derrogação.</li>
          <li><strong>Consolidação:</strong> integração de todas as leis pertinentes a determinada matéria em um único diploma legal, <em>sem alterar o mérito</em> (apenas organiza, atualiza remissões e elimina dispositivos tacitamente revogados).</li>
          <li><strong>Codificação:</strong> criação de um novo sistema normativo unitário e inovador sobre grande ramo do Direito (ex.: Código Civil, Código Penal), podendo alterar substancialmente o conteúdo das normas anteriores.</li>
        </ul>
        <h5>Documentos Legislativos Não Normativos</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Documento</th><th>Finalidade e Estrutura Básica</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Parecer</strong></td><td>Pronunciamento técnico/político de <strong>Comissão</strong> (ex.: CCJ, CCFO) sobre proposição. Estrutura: <em>Relatório</em> (síntese da matéria), <em>Voto do Relator</em> (fundamentação jurídica/mérito) e <em>Conclusão/Parecer da Comissão</em> (aprovação/rejeição/emendas).</td></tr>
            <tr><td><strong>Indicação</strong></td><td>Proposição pela qual o parlamentar <strong>sugere</strong> a outro Poder ou autoridade administrativa a adoção de providência ou envio de projeto de iniciativa privativa do Executivo.</td></tr>
            <tr><td><strong>Requerimento</strong></td><td>Pedido formal dirigido à Presidência ou ao Plenário para deliberação sobre ato regimental ou administrativo (ex.: pedido de urgência, informações a Secretário, constituição de comissão, adiamento).</td></tr>
            <tr><td><strong>Moção</strong></td><td>Manifestação da Casa sobre acontecimento relevante: <em>aplauso/congratulação, apoio, pesar, protesto ou repúdio</em>.</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "esp-adm-publica",
      titulo: "4. Noções de Administração Pública e Gestão de Processos",
      html: `
        <h5>Estruturas Organizacionais e Departamentalização</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Tipo de Estrutura</th><th>Características Principais</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Linear</strong></td><td>Baseada na autoridade única e linhas diretas de comando (pirâmide rígida). Simples e clara, mas inflexível e sobrecarga na chefia.</td></tr>
            <tr><td><strong>Funcional</strong></td><td>Baseada na <strong>especialização</strong>; subordinação múltipla conforme a área técnica (ex.: RH, TI, Finanças). Risco de conflito de ordens.</td></tr>
            <tr><td><strong>Linha-Staff</strong></td><td>Combina autoridade de <strong>linha</strong> (execução/comando) com órgãos de <strong>staff</strong> (assessoria/consultoria técnica — ex.: Procuradoria, Assessoria Legislativa). Muito comum no setor público!</td></tr>
            <tr><td><strong>Matricial</strong></td><td>Combina estrutura funcional (vertical) + projetos/produtos (horizontal). Dupla subordinação; flexível para projetos complexos.</td></tr>
          </tbody>
        </table>
        <p><strong>Critérios de Departamentalização:</strong> por <em>funções</em> (mais comum em órgãos públicos), por <em>produtos/serviços</em>, <em>geográfica/territorial</em>, por <em>clientela/usuários</em>, por <em>processos</em> ou por <em>projetos</em>.</p>
        <h5>Centralização, Descentralização, Concentração e Desconcentração</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Conceito</th><th>Significado no Direito e na Administração</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Centralização</strong></td><td>O próprio ente político (Administração Direta) executa diretamente a atividade.</td></tr>
            <tr><td><strong>Descentralização</strong></td><td>Transferência de competência para <strong>outra pessoa jurídica</strong> (Administração Indireta — por outorga/lei — ou particulares — por delegação/contrato). <strong>NÃO há hierarquia</strong>, apenas tutela/vinculação!</td></tr>
            <tr><td><strong>Concentração</strong></td><td>Acúmulo de competências em um único órgão central (sem subdivisões internas).</td></tr>
            <tr><td><strong>Desconcentração</strong></td><td>Distribuição interna de competências entre <strong>órgãos da MESMA pessoa jurídica</strong> (ex.: diretorias e departamentos da ALEPA). <strong>HÁ hierarquia</strong> e subordinação!</td></tr>
          </tbody>
        </table>
        <div class="quadro-resumo">
          <strong class="quadro-titulo">Dica de Memorização CETAP</strong>
          Des<strong>CO</strong>ncentração = cria <strong>Ó</strong>rgãos (mesma PJ, COM hierarquia).<br>
          Des<strong>CE</strong>ntralização = cria/transfere para <strong>E</strong>ntidades (outra PJ, SEM hierarquia — apenas controle finalístico/tutela).
        </div>
        <h5>Gestão de Processos (BPM) e Ciclo PDCA</h5>
        <ul>
          <li><strong>Processo:</strong> conjunto de atividades inter-relacionadas que transformam <em>entradas (inputs)</em> em <em>saídas (outputs)</em> com valor para o cidadão/usuário. Podem ser <em>finalísticos/primários</em> (ex.: legislar), <em>de apoio/suporte</em> (ex.: protocolo, RH, almoxarifado) ou <em>gerenciais</em>.</li>
          <li><strong>Mapeamento:</strong> usa <strong>Fluxograma</strong> (oval = início/fim; retângulo = atividade; losango = decisão) e notação <strong>BPMN</strong>.</li>
          <li><strong>Ciclo PDCA (Melhoria Contínua):</strong> <strong>P</strong>lan (Planejar) → <strong>D</strong>o (Executar) → <strong>C</strong>heck (Verificar/Medir) → <strong>A</strong>ct (Agir corretivamente/Padronizar).</li>
        </ul>
      `
    },
    {
      id: "esp-secretaria",
      titulo: "5. Noções Básicas de Secretaria, Modelos de Gestão e Atendimento ao Público",
      html: `
        <h5>Rotinas de Secretaria e Controle de Documentos</h5>
        <ul>
          <li><strong>Preparo e tratamento de documentos:</strong> redação oficial conforme o <strong>MRPR (3ª ed.)</strong> (Padrão Ofício, atas, certidões, despachos, declarações, portarias), revisão ortográfica, numeração sequencial anual, conferência de anexos e sigilo funcional.</li>
          <li><strong>Relatórios, formulários e planilhas:</strong> <em>Relatórios</em> apresentam dados objetivos sobre andamento de atividades; <em>formulários</em> padronizam coleta de informações; <em>planilhas</em> organizam controles de frequência, patrimônio, protocolos e indicadores.</li>
          <li><strong>Controle de envio e recebimento:</strong> registro obrigatório em livro/sistema de protocolo com data, hora, remetente, destinatário, assunto, número de processo e recibo/comprovante de entrega.</li>
        </ul>
        <h5>Modelos de Gestão (Cobrança Direta no Edital)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Modelo</th><th>Foco Principal</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Gestão por Competências</strong></td><td>Alinha o desenvolvimento das pessoas aos objetivos institucionais usando o tripé <strong>CHA</strong>: <strong>C</strong>onhecimentos (saber), <strong>H</strong>abilidades (saber fazer) e <strong>A</strong>titudes (querer fazer/postura). Mapeia lacunas (gaps) de competência.</td></tr>
            <tr><td><strong>Gestão por Processos</strong></td><td>Visão horizontal (de ponta a ponta) quebrando "silos" departamentais, buscando eliminação de retrabalho, padronização e valor ao cidadão.</td></tr>
            <tr><td><strong>Gestão de Projetos</strong></td><td>Esforço <strong>temporário</strong> (início e fim definidos) para criar produto/serviço/resultado <strong>único</strong> (PMBOK: Iniciação, Planejamento, Execução, Monitoramento/Controle e Encerramento; restrição tripla: escopo, tempo e custo).</td></tr>
            <tr><td><strong>Gestão por Resultados</strong></td><td>Foco nos <strong>impactos e entregas reais</strong> à sociedade (eficácia e efetividade), não apenas no cumprimento burocrático de procedimentos; utiliza indicadores de desempenho e metas pactuadas.</td></tr>
          </tbody>
        </table>
        <h5>Noções de Atendimento ao Público</h5>
        <ul>
          <li><strong>Pilares da qualidade no atendimento:</strong> <em>Cortesia e urbanidade</em>, <em>presteza</em> (agilidade), <em>escuta ativa</em>, <em>empatia</em>, <em>clareza e objetividade</em>, <em>impessoalidade</em> (sem favorecimentos) e <em>sigilo</em>.</li>
          <li><strong>Atendimento Prioritário (Lei 10.048/2000 e Estatuto da Pessoa Idosa):</strong> pessoas com deficiência, pessoas com TEA, <strong>idosos (60+ anos, com prioridade especial para 80+ anos)</strong>, gestantes, lactantes, pessoas com criança de colo, obesos, mobilidade reduzida e doadores de sangue.</li>
          <li><strong>Direitos dos Usuários de Serviços Públicos (Lei 13.460/2017):</strong> participação, informação clara (Carta de Serviços ao Usuário), proteção de dados pessoais, eliminação de exigências burocráticas desnecessárias e acesso à Ouvidoria.</li>
        </ul>
      `
    },
    {
      id: "esp-arquivologia",
      titulo: "6. Noções de Arquivologia e Lei nº 8.159/1991",
      html: `
        <h5>Princípios Fundamentais da Arquivologia</h5>
        <ul>
          <li><strong>Proveniência (Respeito aos Fundos):</strong> princípio-base! Os arquivos de uma entidade/órgão <em>não devem ser misturados</em> aos de outra entidade produtora.</li>
          <li><strong>Organicidade:</strong> os documentos refletem a estrutura, funções e atividades do órgão que os produziu, mantendo relação orgânica entre si.</li>
          <li><strong>Unicidade:</strong> cada documento de arquivo tem caráter único no contexto em que foi produzido (mesmo havendo cópias).</li>
          <li><strong>Indivisibilidade (Integridade):</strong> os fundos de arquivo devem ser preservados sem dispersão, mutilação ou alienação.</li>
          <li><strong>Cumulatividade:</strong> o arquivo forma-se de modo natural e progressivo, como sedimento das atividades diárias.</li>
          <li><strong>Ordem Original:</strong> deve-se respeitar o arranjo dado pelo órgão produtor.</li>
        </ul>
        <div class="lei-seca">
          <span class="lei-titulo">Lei nº 8.159/1991 — Política Nacional de Arquivos Públicos e Privados</span>
          <p><strong>Art. 1º:</strong> É dever do Poder Público a gestão documental e a proteção especial a documentos de arquivos, como instrumento de apoio à administração, à cultura, ao desenvolvimento científico e como elementos de prova e informação.</p>
          <p><strong>Art. 3º (Gestão de Documentos):</strong> conjunto de procedimentos e operações técnicas referentes à sua <strong>produção, tramitação, uso, avaliação e arquivamento</strong> em fase corrente e intermediária, visando a sua <strong>eliminação ou recolhimento para guarda permanente</strong>.</p>
          <p><strong>Art. 8º (Teoria das Três Idades):</strong><br>
          • <strong>Arquivos Correntes (1ª idade):</strong> em curso ou, mesmo sem movimentação, objeto de consultas frequentes (valor primário).<br>
          • <strong>Arquivos Intermediários (2ª idade):</strong> não sendo de uso corrente, aguardam <strong>eliminação ou recolhimento</strong> por razões de interesse administrativo (valor primário; transferência!).<br>
          • <strong>Arquivos Permanentes (3ª idade):</strong> conjuntos de valor <strong>histórico, probatório e informativo</strong> que devem ser <strong>definitivamente preservados</strong> (valor secundário; recolhimento!). <em>Art. 10: Os documentos de valor permanente são inalienáveis e imprescritíveis!</em></p>
          <p><strong>Art. 9º:</strong> A eliminação de documentos públicos será realizada mediante <strong>autorização da instituição arquivística pública</strong> na sua específica esfera de competência.</p>
        </div>
        <h5>Protocolo, Classificação, Tabela de Temporalidade e Métodos de Arquivamento</h5>
        <ul>
          <li><strong>Atividades do Protocolo (Fase Corrente!):</strong> <strong>Recebimento</strong> → <strong>Registro</strong> (cadastro) → <strong>Autuação</strong> (formação de processo) → <strong>Classificação</strong> (código de assunto) → <strong>Distribuição/Movimentação/Tramitação</strong> → <strong>Expedição</strong>.</li>
          <li><strong>Tabela de Temporalidade de Documentos (TTD):</strong> instrumento de <em>avaliação</em> (elaborado pela CPAD) que define os <strong>prazos de guarda</strong> (corrente e intermediário) e a <strong>destinação final</strong> (eliminação ou guarda permanente).</li>
          <li><strong>Movimentações (Pegadinha CETAP!):</strong> Corrente → Intermediário = <strong>Transferência</strong>. Corrente/Intermediário → Permanente = <strong>Recolhimento</strong>.</li>
          <li><strong>Métodos de Arquivamento (Ordenação):</strong>
            <ul>
              <li><em>Básicos:</em> <strong>Alfabético</strong> (por nome — sobrenomes compostos/graus de parentesco como <em>Filho, Júnior, Neto, Sobrinho</em> acompanham o último sobrenome: <code>SILVA FILHO, João</code>; títulos como <em>Dr., Deputado</em> não entram na ordenação!), <strong>Geográfico</strong> (por localidade), <strong>Numérico</strong> (simples, cronológico ou <strong>dígito-terminal</strong> — lido da direita para a esquerda em pares!) e <strong>Ideográfico/Assunto</strong> (alfabético ou numérico — ex.: método decimal).</li>
              <li><em>Padronizados:</em> Variadex (cores), Automático, Soundex (fonético), Mnemônico, Rôneo.</li>
            </ul>
          </li>
          <li><strong>Tipologia Documental x Espécie Documental:</strong> <em>Espécie</em> = configuração física/formato (ex.: Ofício, Ata, Contrato); <em>Tipo/Tipologia</em> = Espécie + atividade/função (ex.: <em>Ata de Sessão Plenária</em>, <em>Contrato de Prestação de Serviços</em>).</li>
          <li><strong>Suportes Físicos:</strong> papel, filme, mídia magnética/óptica/digital. Conservação preventiva exige controle de temperatura (~20 °C), umidade relativa (45%–55%), luminosidade (evitar UV) e higienização.</li>
        </ul>
      `
    },
    {
      id: "esp-materiais",
      titulo: "7. Noções de Administração de Recursos Materiais e Gestão Patrimonial",
      html: `
        <h5>Classificação de Materiais</h5>
        <ul>
          <li><strong>Consumo x Permanente (Critério Contábil/Público):</strong>
            <ul>
              <li><em>Material de Consumo:</em> perde sua identidade física e/ou tem durabilidade limitada a, no máximo, <strong>2 anos</strong> (ex.: papel A4, toner, canetas).</li>
              <li><em>Material Permanente:</em> não perde a identidade física e tem durabilidade superior a <strong>2 anos</strong> (ex.: computadores, mesas, ar-condicionado — sujeito a <strong>tombamento</strong>!).</li>
            </ul>
          </li>
          <li><strong>Classificação ABC (Princípio de Pareto — Valor de Consumo):</strong>
            <ul>
              <li><strong>Classe A:</strong> poucos itens (~20%), mas altíssimo valor (~80% do orçamento) → controle rigoroso!</li>
              <li><strong>Classe B:</strong> itens e valor intermediários (~30% itens / ~15% valor).</li>
              <li><strong>Classe C:</strong> muitos itens (~50%), mas baixo valor (~5% do orçamento) → controle simplificado.</li>
            </ul>
          </li>
          <li><strong>Classificação XYZ (Criticidade / Impacto da Falta):</strong> <strong>Z</strong> = máxima criticidade (sua falta paralisa serviços essenciais, sem substituto imediato); <strong>Y</strong> = criticidade média; <strong>X</strong> = baixa criticidade (fácil substituição).</li>
        </ul>
        <h5>Gestão de Estoques, Recebimento e Armazenagem</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Conceito / Método</th><th>Explicação de Prova</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>PEPS (FIFO)</strong></td><td><em>Primeiro que Entra, Primeiro que Sai</em> (ideal para itens perecíveis; estoque final fica avaliado pelos preços mais recentes).</td></tr>
            <tr><td><strong>UEPS (LIFO)</strong></td><td><em>Último que Entra, Primeiro que Sai</em> (NÃO aceito para fins fiscais/contábeis no Brasil!).</td></tr>
            <tr><td><strong>Custo Médio Ponderado</strong></td><td>Recalcula o valor médio unitário a cada nova entrada (muito utilizado no setor público).</td></tr>
            <tr><td><strong>Ponto de Pedido (PP)</strong></td><td>Nível de estoque que dispara nova solicitação de compra: <code>PP = (Consumo médio × Tempo de reposição) + Estoque de segurança</code>.</td></tr>
            <tr><td><strong>Recebimento</strong></td><td>Etapas: 1) Entrada/descarga e conferência documental (NF x Empenho); 2) <strong>Conferência Quantitativa</strong> (contagem/pesagem); 3) <strong>Conferência Qualitativa</strong> (especificação técnica); 4) <strong>Regularização</strong> (recebimento definitivo e entrada no sistema/almoxarifado).</td></tr>
            <tr><td><strong>Armazenagem</strong></td><td>Critérios de estocagem: por agrupamento, tamanho/peso, frequência de movimentação (itens de maior giro ficam mais próximos à saída!), compatibilidade física e segurança.</td></tr>
          </tbody>
        </table>
        <h5>Gestão Patrimonial (Bens Permanentes)</h5>
        <ul>
          <li><strong>Tombamento:</strong> identificação física e registro contábil de cada bem permanente com um número único (plaqueta/código de barras/RFID) e emissão do Termo de Responsabilidade para o agente/setor detentor.</li>
          <li><strong>Inventário Físico:</strong> levantamento periódico para confrontar a existência física dos bens com os registros contábeis (tipos: <em>anual, inicial, de transferência de responsabilidade, de extinção/transformação e eventual</em>).</li>
          <li><strong>Depreciação:</strong> redução do valor de bens tangíveis pelo desgaste de uso, ação da natureza ou obsolescência.</li>
          <li><strong>Desfazimento / Baixa Patrimonial:</strong> retirada do bem do acervo (por alienação/leilão, doação, permuta, cessão ou inutilização) quando considerado <em>ocioso, recuperável, antieconômico ou irrecuperável</em>.</li>
        </ul>
      `
    }
  ]
};
