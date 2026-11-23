window.MATERIAL_APOIO = window.MATERIAL_APOIO || {};

window.MATERIAL_APOIO.portugues = {
  titulo: "Língua Portuguesa",
  subtitulo: "Anexo II — 10 questões na prova (2,0 pontos) • Padrão Fundação CETAP",
  secoes: [
    {
      id: "port-interpretacao",
      titulo: "1. Compreensão, Interpretação, Argumentação e Comunicação Assertiva",
      html: `
        <p>Na Fundação CETAP, as primeiras questões da prova geralmente partem de um texto-base (crônica, artigo de opinião ou texto jornalístico/institucional) cobrando tanto <strong>compreensão</strong> quanto <strong>interpretação</strong>.</p>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Conceito</th><th>O que exige do candidato</th><th>Comandos típicos da CETAP</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Compreensão</strong></td><td>Informação <em>explícita</em> no texto (o que está literalmente escrito ou parafraseado).</td><td>"Segundo o texto...", "De acordo com o autor...", "O texto afirma que..."</td></tr>
            <tr><td><strong>Interpretação</strong></td><td>Informação <em>implícita</em>, inferência lógica ou conclusão sustentada pelas pistas textuais.</td><td>"Infere-se do texto que...", "Depreende-se que...", "Pode-se concluir que..."</td></tr>
          </tbody>
        </table>
        <h5>Argumentação e Persuasão</h5>
        <ul>
          <li><strong>Tese:</strong> ponto de vista defendido pelo autor.</li>
          <li><strong>Argumentos:</strong> provas que sustentam a tese — <em>autoridade</em> (citação de especialistas), <em>exemplificação</em>, <em>dados estatísticos</em>, <em>causa e consequência</em>, <em>comparação/analogia</em> e <em>consenso/senso comum</em>.</li>
          <li><strong>Persuasão:</strong> uso de recursos linguísticos (modalizadores, verbos no imperativo, perguntas retóricas, adjetivação valorativa) para convencer ou mobilizar o interlocutor.</li>
        </ul>
        <h5>Comunicação Assertiva</h5>
        <p>Caracteriza-se por <strong>linguagem simples, concisa e objetiva</strong>, expressando ideias e solicitações com clareza, respeito e firmeza, sem passividade (omissão/submissão) nem agressividade (imposição/hostilidade). Evita prolixidade, jargões desnecessários e ambiguidades.</p>
        <div class="quadro-atencao">
          <strong class="quadro-titulo">Armadilhas clássicas em Interpretação (CETAP)</strong>
          Desconfie de alternativas com termos absolutizantes não presentes no texto (<em>sempre, nunca, exclusivamente, todos, apenas</em>) — erro de <strong>extrapolação</strong> — ou que reduzem o sentido geral a um único detalhe — erro de <strong>redução</strong>.
        </div>
      `
    },
    {
      id: "port-ortografia",
      titulo: "2. Ortografia, Acentuação Gráfica e Uso dos Porquês",
      html: `
        <h5>Regras Gerais de Acentuação Gráfica (Acordo Ortográfico vigente)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Classificação</th><th>Regra de Acentuação</th><th>Exemplos</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Monossílabos tônicos</strong></td><td>Terminados em <strong>A(s), E(s), O(s)</strong> e ditongos abertos <strong>éi(s), éu(s), ói(s)</strong>.</td><td>pá, fé, nós, réis, céu, dói</td></tr>
            <tr><td><strong>Oxítonas</strong></td><td>Terminadas em <strong>A(s), E(s), O(s), EM, ENS</strong> e ditongos abertos <strong>éi(s), éu(s), ói(s)</strong>.</td><td>Pará, café, cipó, alguém, parabéns, papéis, herói</td></tr>
            <tr><td><strong>Paroxítonas</strong></td><td>NÃO terminadas em A(s), E(s), O(s), EM, ENS. (Terminadas em L, I(s), N, U(s), R, X, PS, Ã(s), ÃO(s), UM/UNS, ON(s) e ditongo crescente/decrescente).</td><td>fácil, júri, hífen, bônus, caráter, tórax, bíceps, órfã, órgão, álbum, próton, história</td></tr>
            <tr><td><strong>Proparoxítonas</strong></td><td><strong>Todas</strong> são acentuadas.</td><td>público, jurídico, código, assembleia? (NÃO — paroxítona!)</td></tr>
            <tr><td><strong>Hiatos (I e U)</strong></td><td>Acentuam-se <strong>I</strong> e <strong>U</strong> tônicos, segunda vogal do hiato, sozinhos ou seguidos de <em>s</em>, desde que não precedidos de ditongo (em paroxítonas) nem seguidos de <em>nh</em>.</td><td>saúde, saída, país, baú. <em>Exceções sem acento:</em> rainha, feiura, baiuca.</td></tr>
          </tbody>
        </table>
        <div class="quadro-resumo">
          <strong class="quadro-titulo">Mudanças do Acordo Ortográfico muito cobradas</strong>
          <ul>
            <li><strong>Perderam o acento:</strong> ditongos abertos <em>ei / oi</em> em paroxítonas (<em>ideia, assembleia, heroico, jiboia</em>); vogais dobradas <em>ee / oo</em> (<em>leem, veem, voo, enjoo</em>); acento diferencial em <em>para</em> (verbo), <em>pelo</em>, <em>polo</em>, <em>pera</em>; trema (<em>linguiça, tranquilo</em>).</li>
            <li><strong>Mantiveram o acento diferencial:</strong> <em>pôde</em> (passado) x <em>pode</em> (presente); <em>pôr</em> (verbo) x <em>por</em> (preposição); <em>têm / vêm</em> (plural) x <em>tem / vem</em> (singular); derivados de ter/vir: <em>mantém / mantêm</em>, <em>intervém / intervêm</em>.</li>
          </ul>
        </div>
        <h5>Uso dos Porquês</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Forma</th><th>Emprego</th><th>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Por que</strong></td><td>Perguntas diretas ou indiretas (= por qual motivo); ou preposição + pronome relativo (= pelo qual / pela qual).</td><td><em>Por que</em> o projeto parou? / A razão <em>por que</em> lutamos.</td></tr>
            <tr><td><strong>Por quê</strong></td><td>No final da frase ou antes de pausa forte/pontuação (leva acento por ficar tônico).</td><td>O servidor faltou, <em>por quê</em>?</td></tr>
            <tr><td><strong>Porque</strong></td><td>Conjunção explicativa ou causal (= pois, uma vez que, já que).</td><td>Estudei <em>porque</em> quero aprovação.</td></tr>
            <tr><td><strong>Porquê</strong></td><td>Substantivo (= o motivo, a razão). Vem acompanhado de determinante (artigo, pronome, numeral).</td><td>Ninguém explicou <em>o porquê</em> do adiamento.</td></tr>
          </tbody>
        </table>
        <h5>Ortografia Essencial (Emprego de S, Z, X, CH, G, J e Hífen)</h5>
        <ul>
          <li><strong>Hífen:</strong> usa-se quando o prefixo termina com a <strong>mesma vogal</strong> ou <strong>mesma consoante</strong> que inicia a segunda palavra (<em>micro-ônibus, anti-inflamatório, inter-regional, sub-bibliotecário</em>) ou diante de <strong>H</strong> (<em>anti-higiênico, super-homem</em>).</li>
          <li><strong>Sem hífen (junta):</strong> vogais diferentes (<em>autoestima, infraestrutura, extraoficial</em>). Se o prefixo termina em vogal e a segunda palavra começa com <strong>R</strong> ou <strong>S</strong>, dobra-se a consoante (<em>antirracismo, contrassenso, minissaia</em>).</li>
          <li><strong>Sufixos importantes:</strong> <em>-esa/-ês</em> (origem/título: <em>paraense, duquesa</em>); <em>-ez/-eza</em> (substantivos abstratos derivados de adjetivos: <em>rigidez, clareza</em>); <em>-isar</em> (quando a palavra primitiva já tem S: <em>análise → analisar, pesquisa → pesquisar</em>) x <em>-izar</em> (quando não tem S: <em>atual → atualizar, padrão → padronizar</em>).</li>
        </ul>
      `
    },
    {
      id: "port-crase",
      titulo: "3. Emprego do Sinal Indicativo de Crase",
      html: `
        <p><strong>Crase</strong> é a fusão da preposição <strong>a</strong> com o artigo definido feminino <strong>a(s)</strong>, ou com o <strong>a</strong> inicial dos pronomes demonstrativos <em>aquele(s), aquela(s), aquilo</em>, ou com o pronome demonstrativo <em>a(s)</em> (= aquela).</p>
        <div class="quadro-resumo">
          <strong class="quadro-titulo">Regra Prática (Troca pelo Masculino)</strong>
          Troque o substantivo feminino por um masculino equivalente: se aparecer <strong>AO(S)</strong>, há crase (<strong>À(S)</strong>). Ex.: <em>Fui à sessão</em> → <em>Fui ao plenário</em>.
        </div>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Situação</th><th>Casos Principais</th><th>Exemplos</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Obrigatória</strong></td><td>Antes de palavras femininas determinadas que exigem preposição; locuções adverbiais, prepositivas e conjuntivas femininas; horas exatas; "à moda de" implícito.</td><td><em>Às 9h; à medida que; à vista; à direita; bife à milanesa; refiro-me àquela lei.</em></td></tr>
            <tr><td><strong>Proibida</strong></td><td>Antes de palavras masculinas; verbos; pronomes em geral (pessoais, tratamento, indefinidos — exceto <em>senhora, senhorita, dona</em>); entre palavras repetidas; <em>a</em> no singular antes de plural; antes de "casa" (sem especificador) e "terra" (= solo firme, sem especificador).</td><td><em>Andar a pé; começou a falar; entreguei a ela; cara a cara; refiro-me a leis (mas: às leis); voltou a casa (mas: voltou à casa dos pais).</em></td></tr>
            <tr><td><strong>Facultativa</strong></td><td>Antes de: (1) nomes próprios femininos; (2) pronomes possessivos femininos no singular; (3) depois da preposição <em>até</em>.</td><td><em>Entreguei a/à Maria; refiro-me a/à minha sala; foi até a/à porta.</em></td></tr>
          </tbody>
        </table>
        <p><strong>Nomes de lugares:</strong> "Vou <strong>a</strong>, volto <strong>da</strong> → crase <strong>há</strong>!" (<em>Vou à Bahia / volto da Bahia</em>). "Vou <strong>a</strong>, volto <strong>de</strong> → crase <strong>pra quê</strong>?" (<em>Vou a Belém / volto de Belém</em>). Se o lugar vier especificado, há crase: <em>Vou à Belém das mangueiras</em>.</p>
      `
    },
    {
      id: "port-coesao-semantica",
      titulo: "4. Coesão, Coerência e Significação das Palavras",
      html: `
        <h5>Coesão x Coerência</h5>
        <ul>
          <li><strong>Coesão Textual:</strong> conexão <em>superficial/gramatical</em> entre frases e parágrafos. Divide-se em <strong>referencial</strong> (anáfora retoma o que já foi dito: <em>"O projeto foi lido; ele agradou"</em>; catáfora antecipa o que virá: <em>"Só quero isto: aprovação"</em>; elipse; substituição lexical) e <strong>sequencial</strong> (uso de conjunções e articuladores lógicos que fazem o texto progredir).</li>
          <li><strong>Coerência Textual:</strong> unidade de <em>sentido lógico</em> do texto (não contradição, progressão temática e adequação à realidade/contexto).</li>
        </ul>
        <h5>Significação das Palavras (Semântica)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Termo</th><th>Definição</th><th>Exemplos muito cobrados</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Sinônimos</strong></td><td>Sentido semelhante/equivalente no contexto.</td><td><em>ratificar = confirmar; prescindir = dispensar</em></td></tr>
            <tr><td><strong>Antônimos</strong></td><td>Sentidos opostos.</td><td><em>ratificar ≠ retificar (corrigir); deferir ≠ indeferir</em></td></tr>
            <tr><td><strong>Homônimos</strong></td><td>Mesma pronúncia e/ou grafia, sentidos distintos. Podem ser <em>perfeitos</em> (cedo/cedo), <em>homógrafos</em> (almoço/almoço) ou <em>homófonos</em> (sessão/seção/cessão).</td><td><strong>Sessão</strong> (reunião plenária), <strong>Seção</strong> (setor/parte), <strong>Cessão</strong> (ato de ceder).</td></tr>
            <tr><td><strong>Parônimos</strong></td><td>Grafia e pronúncia <em>parecidas</em>, sentidos diferentes.</td><td><strong>Mandado</strong> (ordem judicial) x <strong>Mandato</strong> (período político); <strong>Eminente</strong> (ilustre) x <strong>Iminente</strong> (prestes a ocorrer); <strong>Descrição</strong> x <strong>Discrição</strong>; <strong>Infringir</strong> (violar) x <strong>Infligir</strong> (aplicar pena).</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "port-classes",
      titulo: "5. Classes de Palavras (Morfologia)",
      html: `
        <p>A Língua Portuguesa possui <strong>10 classes gramaticais</strong>: 6 variáveis (substantivo, adjetivo, artigo, numeral, pronome, verbo) e 4 invariáveis (advérbio, preposição, conjunção, interjeição).</p>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Classe</th><th>Função Essencial</th><th>Pontos críticos para a CETAP</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Substantivo</strong></td><td>Nomeia seres, conceitos, ações e estados.</td><td>Comum/próprio, concreto/abstrato, coletivo; flexão de gênero e plural dos compostos (<em>decretos-leis, quintas-feiras, guarda-chuvas</em>).</td></tr>
            <tr><td><strong>Adjetivo</strong></td><td>Qualifica/caracteriza o substantivo.</td><td>Locução adjetiva; graus comparativo e superlativo; diferença entre adjetivo e advérbio.</td></tr>
            <tr><td><strong>Artigo</strong></td><td>Define (<em>o, a, os, as</em>) ou indefine (<em>um, uma...</em>) e substantiva qualquer palavra.</td><td>O artigo definido antes de substantivo feminino viabiliza a crase.</td></tr>
            <tr><td><strong>Numeral</strong></td><td>Indica quantidade, ordem, multiplicação ou fração.</td><td>Cardinais, ordinais, multiplicativos, fracionários (atenção à leitura de artigos de lei: até 9º ordinal; de 10 em diante cardinal!).</td></tr>
            <tr><td><strong>Pronome</strong></td><td>Substitui ou acompanha o substantivo.</td><td>Pessoais (retos/oblíquos), possessivos, demonstrativos (<em>este</em> = perto/catáfora; <em>esse</em> = perto do ouvinte/anáfora; <em>aquele</em> = distante), relativos (<em>que, qual, cujo, onde</em> — "onde" só para lugar físico!), indefinidos e de tratamento.</td></tr>
            <tr><td><strong>Verbo</strong></td><td>Indica ação, estado ou fenômeno.</td><td>Modos (Indicativo = certeza; Subjuntivo = hipótese/dúvida; Imperativo = ordem); vozes (ativa, passiva analítica/sintética, reflexiva); tempos compostos; correlação verbal.</td></tr>
            <tr><td><strong>Advérbio</strong></td><td>Modifica verbo, adjetivo ou outro advérbio (invariável).</td><td>Circunstâncias de tempo, modo, lugar, intensidade, negação, afirmação, dúvida. <em>Meio</em> = um pouco (invariável: "ela está meio cansada").</td></tr>
            <tr><td><strong>Preposição</strong></td><td>Liga termos subordinando o segundo ao primeiro.</td><td>Essenciais: <em>a, ante, até, após, com, contra, de, desde, em, entre, para, per, perante, por, sem, sob, sobre, trás</em>.</td></tr>
            <tr><td><strong>Conjunção</strong></td><td>Liga orações ou termos de mesma função sintática.</td><td><strong>Altíssima incidência!</strong> Veja a tabela de conjunções na seção 6.</td></tr>
            <tr><td><strong>Interjeição</strong></td><td>Expressa emoções, sentimentos súbitos ou apelos.</td><td><em>Ah!, Olá!, Psiu!, Caramba!</em></td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "port-sintaxe-pontuacao",
      titulo: "6. Período Simples, Período Composto e Pontuação",
      html: `
        <h5>Termos da Oração (Período Simples)</h5>
        <ul>
          <li><strong>Essenciais:</strong> Sujeito (simples, composto, oculto/desinencial, indeterminado, oração sem sujeito — ex.: <em>haver</em> = existir, fenômenos da natureza) e Predicado (verbal, nominal, verbo-nominal).</li>
          <li><strong>Integrantes:</strong> Complemento verbal (OD sem preposição obrigatória; OI com preposição obrigatória), Complemento nominal (completa nome — substantivo abstrato, adjetivo ou advérbio — sempre com preposição) e Agente da passiva.</li>
          <li><strong>Acessórios:</strong> Adjunto adnominal (concreto ou abstrato, agente/posse), Adjunto adverbial (circunstância) e Aposto (explica/enumera). <strong>Vocativo</strong> é termo independente (chamamento, sempre isolado por vírgula).</li>
        </ul>
        <h5>Tipos de Predicado (Todos os Casos e Exemplos)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Tipo de Predicado</th><th>Estrutura e Núcleo(s)</th><th>Exemplos (todos os casos)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Predicado Verbal</strong></td>
              <td><strong>1 núcleo:</strong> verbo significativo (de ação/fenômeno — VI, VTD, VTI ou VTDI). <em>Não</em> possui predicativo.</td>
              <td>
                • <em>Com VI:</em> "A sessão <strong>começou</strong> pontualmente."<br>
                • <em>Com VTD:</em> "O servidor <strong>protocolou</strong> o ofício."<br>
                • <em>Com VTI:</em> "Todos <strong>obedeceram</strong> ao regimento."<br>
                • <em>Com VTDI:</em> "A técnica <strong>entregou</strong> o processo ao relator."
              </td>
            </tr>
            <tr>
              <td><strong>2. Predicado Nominal</strong></td>
              <td><strong>1 núcleo:</strong> nome (<strong>Predicativo do Sujeito</strong>), ligado ao sujeito por <strong>Verbo de Ligação</strong> (<em>ser, estar, parecer, permanecer, ficar, continuar, tornar-se, andar/virar</em> indicando estado).</td>
              <td>
                • <em>Estado permanente:</em> "A lei <strong>é clara</strong>."<br>
                • <em>Estado transitório/aparente:</em> "A servidora <strong>parecia confiante</strong>."<br>
                • <em>Verbo de ação usado como ligação:</em> "A relatora <strong>anda atenta</strong> aos prazos." / "Tereza <strong>virou rainha</strong>."
              </td>
            </tr>
            <tr>
              <td><strong>3A. Predicado Verbo-Nominal</strong><br><em>(com Predicativo do Sujeito)</em></td>
              <td><strong>2 núcleos:</strong> verbo significativo (ação) + <strong>Predicativo do Sujeito</strong> (estado/qualidade momentânea do sujeito durante a ação).</td>
              <td>
                • <em>Com VI:</em> "O candidato <strong>chegou</strong> <strong>otimista</strong> à prova."<br>
                • <em>Com VTD:</em> "Os assistentes <strong>concluíram</strong> o relatório <strong>satisfeitos</strong>."<br>
                • <em>Com VTI:</em> "Os deputados <strong>votaram</strong> no projeto <strong>apreensivos</strong>."
              </td>
            </tr>
            <tr>
              <td><strong>3B. Predicado Verbo-Nominal</strong><br><em>(com Predicativo do Objeto)</em></td>
              <td><strong>2 núcleos:</strong> verbo significativo (ação/julgamento) + <strong>Predicativo do Objeto</strong> (qualidade atribuída ao objeto direto ou indireto).</td>
              <td>
                • <em>Predicativo do OD:</em> "A CCJ <strong>julgou</strong> o projeto <strong>inconstitucional</strong>." / "A Mesa <strong>considerou</strong> a proposta <strong>válida</strong>."<br>
                • <em>Predicativo do OI:</em> "A equipe <strong>chamou</strong> ao técnico <strong>de competente</strong>."
              </td>
            </tr>
          </tbody>
        </table>
        <div class="quadro-atencao">
          <strong class="quadro-titulo">Pegadinha Clássica da CETAP: Adjunto Adnominal × Predicativo</strong>
          Em <em>"O setor arquivou os processos antigos"</em>, o adjetivo <em>antigos</em> é apenas <strong>adjunto adnominal</strong> dentro do objeto direto (substituindo o objeto por pronome, ele some: <em>"O setor arquivou-os"</em>) → <strong>Predicado Verbal</strong>!<br>
          Já em <em>"A CCJ julgou o projeto inconstitucional"</em>, ao trocar o objeto por pronome, o predicativo permanece fora dele: <em>"A CCJ julgou-o <strong>inconstitucional</strong>"</em> → <strong>Predicado Verbo-Nominal</strong>!
        </div>
        <h5>Principais Conjunções (Período Composto — Coordenadas e Subordinadas Adverbiais)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Valor Semântico</th><th>Principais Conectivos</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Aditiva</strong></td><td>e, nem, não só... mas também, bem como</td></tr>
            <tr><td><strong>Adversativa</strong></td><td>mas, porém, contudo, todavia, entretanto, no entanto, não obstante</td></tr>
            <tr><td><strong>Alternativa</strong></td><td>ou, ou... ou, ora... ora, quer... quer, seja... seja</td></tr>
            <tr><td><strong>Conclusiva</strong></td><td>logo, portanto, por conseguinte, pois (<em>posposto ao verbo</em>), assim, então</td></tr>
            <tr><td><strong>Explicativa</strong></td><td>porque, pois (<em>anteposto ao verbo</em>), porquanto, que</td></tr>
            <tr><td><strong>Causal</strong></td><td>porque, visto que, já que, uma vez que, como (no início da frase), porquanto</td></tr>
            <tr><td><strong>Concessiva</strong></td><td>embora, conquanto, ainda que, mesmo que, posto que, apesar de que, se bem que</td></tr>
            <tr><td><strong>Condicional</strong></td><td>se, caso, contanto que, desde que, salvo se, a menos que</td></tr>
            <tr><td><strong>Consecutiva</strong></td><td>tão/tanto/tamanho... que, de modo que, de sorte que</td></tr>
            <tr><td><strong>Final</strong></td><td>para que, a fim de que, com o intuito de que</td></tr>
            <tr><td><strong>Proporcional</strong></td><td>à medida que, à proporção que, quanto mais... mais</td></tr>
            <tr><td><strong>Temporal</strong></td><td>quando, enquanto, assim que, logo que, mal, apenas</td></tr>
          </tbody>
        </table>
        <h5>Orações Adjetivas e Pontuação Essencial</h5>
        <ul>
          <li><strong>Adjetiva Restritiva (SEM vírgula):</strong> delimita parte do conjunto. Ex.: <em>Os servidores que faltaram foram notificados</em> (apenas os que faltaram).</li>
          <li><strong>Adjetiva Explicativa (COM vírgula):</strong> generaliza/explica todo o conjunto. Ex.: <em>Os servidores, que faltaram, foram notificados</em> (todos faltaram).</li>
          <li><strong>Regra de Ouro da Vírgula:</strong> <strong>NUNCA</strong> se separa por uma única vírgula o <em>sujeito do verbo</em> nem o <em>verbo de seus complementos</em> (na ordem direta).</li>
          <li><strong>Vírgula Obrigatória:</strong> isolar vocativo, aposto explicativo, adjunto adverbial deslocado de longa extensão (3+ palavras), conjunções adversativas/conclusivas deslocadas, termos intercalados e enumerações.</li>
        </ul>
      `
    },
    {
      id: "port-concordancia-regencia",
      titulo: "7. Concordância, Regência e Colocação Pronominal",
      html: `
        <h5>Concordância Verbal — Casos Clássicos de Prova</h5>
        <ul>
          <li><strong>Haver (existir / tempo decorrido) e Fazer (tempo / clima):</strong> são <strong>impessoais</strong> → ficam sempre na <strong>3ª pessoa do singular</strong> (<em>Havia muitas vagas; Faz dois anos</em>). Transmitem impessoalidade ao auxiliar: <em>Deve haver projetos</em>.</li>
          <li><strong>Existir, ocorrer, acontecer:</strong> têm sujeito → concordam normalmente (<em>Existem muitas vagas</em>).</li>
          <li><strong>Partícula SE:</strong>
            <ul>
              <li><em>VTD / VTDI + SE</em> (Pronome Apassivador) → verbo concorda com o sujeito paciente: <em>Alugam-se salas; Analisaram-se os projetos.</em></li>
              <li><em>VTI / VI / VL + SE</em> (Índice de Indeterminação do Sujeito) → verbo sempre na <strong>3ª pessoa do singular</strong>: <em>Precisa-se de técnicos; Confia-se nos servidores.</em></li>
            </ul>
          </li>
          <li><strong>Porcentagem:</strong> concorda com o número ou com o termo especificador (<em>20% da verba foi usada / foram usados</em>). Se houver determinante antes, concorda com ele (<em>Os 20% da verba foram usados</em>).</li>
        </ul>
        <h5>Concordância Nominal — Pegadinhas Frequentes</h5>
        <ul>
          <li><strong>Anexo, incluso, obrigado, mesmo, próprio, quite:</strong> <em>variam</em> em gênero e número (<em>Seguem anexas as certidões; Estamos quites</em>). Obs.: <em>em anexo</em> é invariável.</li>
          <li><strong>Bastante:</strong> adjetivo = varia (<em>bastantes processos</em> = muitos); advérbio = invariável (<em>estavam bastante cansados</em> = muito).</li>
          <li><strong>É proibido / É necessário / É bom:</strong> sem artigo, ficam invariáveis (<em>É proibido entrada</em>); com artigo, variam (<em>É proibida a entrada</em>).</li>
        </ul>
        <h5>Regência Verbal (Verbos que Mudam de Sentido)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Verbo</th><th>Regência e Sentido</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Assistir</strong></td><td>Ver/presenciar = <strong>VTI (a)</strong> (<em>Assistir ao debate</em> — não aceita <em>lhe</em>, usa <em>a ele</em>); Ajudar/socorrer = <strong>VTD</strong> (<em>Assistir o doente</em>); Caber direito = <strong>VTI (a)</strong> (<em>Assiste-lhe o direito</em>).</td></tr>
            <tr><td><strong>Visar</strong></td><td>Almejar/objetivar = <strong>VTI (a)</strong> (<em>Visar ao cargo</em>); Mirar ou dar visto = <strong>VTD</strong> (<em>Visar o cheque</em>).</td></tr>
            <tr><td><strong>Aspirar</strong></td><td>Desejar/almejar = <strong>VTI (a)</strong> (<em>Aspirar à aprovação</em>); Cheirar/inalar = <strong>VTD</strong> (<em>Aspirar o ar</em>).</td></tr>
            <tr><td><strong>Preferir</strong></td><td><em>Preferir uma coisa A outra</em> (nunca "do que", nunca "mais/muito mais").</td></tr>
            <tr><td><strong>Implicar</strong></td><td>Acarretar/gerar consequência = <strong>VTD</strong> (<em>Isso implica responsabilidade</em> — sem "em"!).</td></tr>
            <tr><td><strong>Obedecer / Desobedecer</strong></td><td>Sempre <strong>VTI (a)</strong>: <em>Obedecer às normas / Obedecer-lhes</em>.</td></tr>
            <tr><td><strong>Esquecer / Lembrar</strong></td><td>Sem pronome = VTD (<em>Esqueci o prazo</em>); Com pronome = VTI com <em>de</em> (<em>Esqueci-me do prazo</em>).</td></tr>
          </tbody>
        </table>
        <h5>Colocação dos Pronomes Oblíquos Átonos (me, te, se, o, a, lhe, nos, vos)</h5>
        <ul>
          <li><strong>Próclise (antes do verbo) — Obrigatória com palavras atrativas:</strong> negação (<em>não, nunca, jamais</em>), advérbios sem pausa (<em>já, sempre, aqui</em>), pronomes relativos (<em>que, onde, cujo</em>), indefinidos (<em>tudo, alguém, ninguém</em>), interrogativos, conjunções subordinativas (<em>porque, embora, quando, se</em>) e frases exclamativas/optativas.</li>
          <li><strong>Mesóclise (no meio do verbo):</strong> apenas com verbo no <strong>Futuro do Presente</strong> ou <strong>Futuro do Pretérito</strong>, desde que <em>não haja fator de próclise</em> (<em>Realizar-se-á a sessão</em>).</li>
          <li><strong>Ênclise (depois do verbo):</strong> obrigatória no <strong>início de período</strong> (não se inicia frase com pronome oblíquo átono!), após pausa (vírgula/ponto e vírgula), imperativo afirmativo e gerúndio sem <em>em</em>.</li>
        </ul>
      `
    },
    {
      id: "port-figuras-redacao",
      titulo: "8. Figuras de Linguagem e Redação Oficial (MRPR — 3ª Edição)",
      html: `
        <h5>Principais Figuras de Linguagem</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Figura</th><th>Definição</th><th>Exemplo</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Metáfora</strong></td><td>Comparação implícita (sem conectivo comparativo).</td><td><em>A Constituição é a bússola do Estado.</em></td></tr>
            <tr><td><strong>Metonímia</strong></td><td>Substituição por contiguidade (parte pelo todo, autor pela obra, continente pelo conteúdo).</td><td><em>O Plenário aprovou a lei</em> (= os deputados).</td></tr>
            <tr><td><strong>Antítese / Paradoxo</strong></td><td>Antítese = ideias opostas lado a lado; Paradoxo = contradição lógica simultânea.</td><td><em>Claros e escuros</em> (antítese); <em>Silêncio ensurdecedor</em> (paradoxo).</td></tr>
            <tr><td><strong>Eufemismo</strong></td><td>Suavização de expressão dura ou desagradável.</td><td><em>Faltou com a verdade</em> (= mentiu).</td></tr>
            <tr><td><strong>Hipérbole</strong></td><td>Exagero intencional.</td><td><em>Esperei mil anos pelo despacho.</em></td></tr>
            <tr><td><strong>Ironia</strong></td><td>Dizer o oposto do que se pensa com intenção crítica.</td><td><em>Que eficiência: atrasou três horas!</em></td></tr>
            <tr><td><strong>Personificação (Prosopopeia)</strong></td><td>Atribuir características humanas a seres inanimados.</td><td><em>A lei exige respeito.</em></td></tr>
            <tr><td><strong>Elipse / Zeugma</strong></td><td>Omissão de termo subentendido (Zeugma = termo já dito antes).</td><td><em>Ele redigiu o ofício; eu, a ata.</em> (zeugma)</td></tr>
          </tbody>
        </table>
        <h5>Redação Oficial — Manual de Redação da Presidência da República (3ª Edição)</h5>
        <p><strong>Atributos da Redação Oficial:</strong> <strong>Clareza e Precisão</strong>, <strong>Objetividade</strong>, <strong>Concisão</strong>, <strong>Coesão e Coerência</strong>, <strong>Impessoalidade</strong> (quem comunica é sempre o Serviço Público, nunca a pessoa física), <strong>Formalidade e Padronização</strong> e <strong>Uso da Norma Padrão da Língua Portuguesa</strong>.</p>
        <div class="quadro-resumo">
          <strong class="quadro-titulo">Unificação da 3ª Edição do MRPR (Muito cobrado!)</strong>
          A 3ª edição <strong>extinguiu a distinção</strong> entre Ofício, Aviso e Memorando: todos foram unificados no <strong>Padrão Ofício</strong>!
        </div>
        <h5>Estrutura do Padrão Ofício</h5>
        <ol>
          <li><strong>Cabeçalho</strong> (apenas na primeira página).</li>
          <li><strong>Identificação do expediente:</strong> Tipo + número + sigla do órgão + ano (ex.: <em>OFÍCIO Nº 12/2026/ALEPA</em>).</li>
          <li><strong>Local e data:</strong> alinhados à direita, com ponto final (ex.: <em>Belém, 13 de dezembro de 2026.</em>).</li>
          <li><strong>Endereçamento:</strong> dados do destinatário (cargo/órgão/endereço).</li>
          <li><strong>Assunto:</strong> resumo objetivo do teor do documento (em negrito).</li>
          <li><strong>Texto:</strong> introdução, desenvolvimento e conclusão (parágrafos numerados a partir do 1º, exceto quando houver apenas um parágrafo; fecho não é numerado!).</li>
          <li><strong>Fechos oficiais (APENAS DOIS!):</strong>
            <ul>
              <li><strong>Respeitosamente,</strong> → para autoridades de hierarquia <strong>superior</strong> à do remetente (inclusive o Presidente da República).</li>
              <li><strong>Atenciosamente,</strong> → para autoridades de <strong>mesma hierarquia</strong> ou <strong>hierarquia inferior</strong> (e particulares).</li>
            </ul>
          </li>
          <li><strong>Identificação do signatário:</strong> nome (em letras maiúsculas e negrito) e cargo abaixo.</li>
        </ol>
        <h5>Pronomes de Tratamento (MRPR — 3ª Edição)</h5>
        <ul>
          <li><strong>Concordância:</strong> Embora se refiram à 2ª pessoa, os verbos e pronomes vão para a <strong>3ª pessoa</strong> (<em>Vossa Excelência encaminhou <strong>seu</strong> parecer</em> — nunca "vosso"!). O adjetivo concorda com o <strong>sexo da pessoa</strong> (<em>Vossa Excelência está atento / atenta</em>).</li>
          <li><strong>Vossa Excelência (V. Exa.):</strong> Chefes dos Poderes (Presidente, Governadores, Prefeitos), Ministros, Secretários de Estado, Parlamentares (Senadores, Deputados Federais e <strong>Deputados Estaduais</strong>), Magistrados, Membros do MP e Tribunais de Contas. <em>Vocativo:</em> "Excelentíssimo Senhor" apenas para Chefes de Poder (Presidente da República, do Congresso e do STF); para os demais (inclusive Deputados), usa-se <strong>"Senhor(a) [Cargo],"</strong> (ex.: <em>Senhor Deputado,</em>).</li>
          <li><strong>Vossa Senhoria (V. Sa.):</strong> Demais autoridades e particulares. <em>Vocativo:</em> "Prezado(a) Senhor(a)," ou "Senhor(a) [Cargo],".</li>
          <li><strong>Obs.:</strong> Aboliu-se o uso de "Digníssimo (DD.)" e "Ilustríssimo (Ilmo.)" no MRPR!</li>
        </ul>
      `
    }
  ]
};
