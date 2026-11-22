window.MATERIAL_APOIO = window.MATERIAL_APOIO || {};

window.MATERIAL_APOIO.especificos_manutencao = {
  titulo: "Conhecimentos Específicos — Manutenção de Patrimônio",
  subtitulo: "Cargo 03 (PL.AL.062) — 20 questões na prova (4,0 pontos • 40% da nota!) • 1º critério de desempate por disciplina",
  secoes: [
    {
      id: "man-eletricidade",
      titulo: "1. Eletricidade, Instalações Prediais (NBR 5410 / NBR 14136) e NR-10",
      html: `
        <h5>Grandezas Elétricas, Lei de Ohm e Circuitos</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Grandeza</th><th>Símbolo / Unidade</th><th>Conceito Prático</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Tensão (d.d.p.)</strong></td><td>V ou U — <strong>Volt (V)</strong></td><td>Força que impulsiona os elétrons no circuito (ex.: 127 V / 220 V).</td></tr>
            <tr><td><strong>Corrente Elétrica</strong></td><td>I — <strong>Ampère (A)</strong></td><td>Fluxo ordenado de cargas elétricas no condutor.</td></tr>
            <tr><td><strong>Resistência</strong></td><td>R — <strong>Ohm (Ω)</strong></td><td>Oposição oferecida pelo material à passagem da corrente.</td></tr>
            <tr><td><strong>Potência Elétrica</strong></td><td>P — <strong>Watt (W)</strong></td><td>Taxa de conversão/consumo de energia elétrica por segundo.</td></tr>
          </tbody>
        </table>
        <div class="formula-box">
          <strong>Lei de Ohm e Potência:</strong><br>
          • V = R · I   (logo I = V / R  e  R = V / I)<br>
          • P = V · I = R · I² = V² / R<br>
          • Energia consumida (kWh) = Potência (kW) × Tempo (h)<br><br>
          <strong>Associação de Resistores:</strong><br>
          • <strong>Série:</strong> mesma corrente (I) em todos; tensões se somam; R_eq = R₁ + R₂ + ... (se uma lâmpada queima, todas apagam!)<br>
          • <strong>Paralelo:</strong> mesma tensão (V) em todos; correntes se somam; 1/R_eq = 1/R₁ + 1/R₂ + ... (padrão das instalações prediais: cada lâmpada/tomada opera independentemente!).
        </div>
        <ul>
          <li><strong>Corrente Contínua (CC / DC):</strong> sentido constante (pilhas, baterias, placas eletrônicas). <strong>Corrente Alternada (CA / AC):</strong> alterna de sentido periodicamente (rede elétrica pública no Brasil: frequência de <strong>60 Hz</strong>).</li>
          <li><strong>Sistemas de Fornecimento:</strong> <em>Monofásico</em> (1 fase + neutro), <em>Bifásico</em> (2 fases + neutro) e <em>Trifásico</em> (3 fases + neutro — cargas elevadas e motores industriais/elevadores/bombas).</li>
        </ul>
        <h5>Instalações Elétricas de Baixa Tensão — ABNT NBR 5410</h5>
        <ul>
          <li><strong>Cores Obrigatórias dos Condutores (NBR 5410):</strong>
            <ul>
              <li><strong>Neutro (N):</strong> <strong>Azul-claro</strong> (exclusivo!).</li>
              <li><strong>Proteção / Terra (PE):</strong> <strong>Verde</strong> ou <strong>Verde-amarelo</strong> (exclusivo!).</li>
              <li><strong>Fase (F):</strong> preto, vermelho, marrom, cinza (qualquer cor diferente de azul-claro e verde/verde-amarelo).</li>
            </ul>
          </li>
          <li><strong>Dispositivos de Proteção no Quadro de Distribuição:</strong>
            <ul>
              <li><strong>Disjuntor Termomagnético (DTM):</strong> protege <em>fios/cabos e equipamentos</em> contra <strong>sobrecarga</strong> (elemento térmico/bimetálico) e <strong>curto-circuito</strong> (elemento magnético).</li>
              <li><strong>Dispositivo Diferencial Residual (DR — 30 mA):</strong> protege <strong>pessoas e animais contra choques elétricos</strong> (detecta <strong>fuga de corrente</strong> para a terra ≥ 30 mA e desarma em milissegundos). Obrigatório em áreas molhadas (banheiros, cozinhas, áreas de serviço, tomadas externas). <em>Atenção:</em> DR NÃO protege contra curto-circuito entre fase e neutro (por isso atua em conjunto com disjuntor ou como disjuntor-DR)!</li>
              <li><strong>Dispositivo de Proteção contra Surtos (DPS):</strong> protege equipamentos eletrônicos contra <strong>sobretensões transitórias</strong> (descargas atmosféricas/raios e manobras na rede), desviando o surto para o sistema de aterramento.</li>
              <li><strong>Aterramento:</strong> escoa correntes de fuga e surtos para o solo, equipotencializa massas metálicas e viabiliza a atuação segura do DR e DPS.</li>
            </ul>
          </li>
        </ul>
        <h5>Tomadas e Plugues (ABNT NBR 14136), Instrumentos e Falhas</h5>
        <ul>
          <li><strong>ABNT NBR 14136 (Padrão brasileiro de 3 pinos):</strong>
            <ul>
              <li><strong>10 A:</strong> pinos de <strong>4,0 mm</strong> de diâmetro (equipamentos comuns: computadores, TVs, ventiladores).</li>
              <li><strong>20 A:</strong> pinos de <strong>4,8 mm</strong> de diâmetro (equipamentos de maior potência: micro-ondas, ar-condicionado, secadores). A tomada de 20 A aceita plugues de 10 A e 20 A; a tomada de 10 A <strong>NÃO</strong> aceita plugue de 20 A (segurança contra sobrecarga!).</li>
            </ul>
          </li>
          <li><strong>Interruptores:</strong> <em>Simples</em> (1 ponto comanda 1 lâmpada/grupo), <em>Paralelo / Three-way</em> (2 pontos comandam a mesma lâmpada — ex.: início e fim de corredor), <em>Intermediário / Four-way</em> (3 ou mais pontos). <em>Regra de segurança:</em> o interruptor deve sempre seccionar o condutor <strong>FASE</strong> (nunca o neutro!).</li>
          <li><strong>Instrumentos de Medição:</strong>
            <ul>
              <li><strong>Multímetro:</strong> mede tensão (voltímetro — ligado em <em>paralelo</em>), corrente (amperímetro — em <em>série</em>), resistência/continuidade (ohmímetro — circuito <em>desenergizado</em>!).</li>
              <li><strong>Alicate Amperímetro:</strong> mede a <strong>corrente elétrica</strong> por indução eletromagnética <em>sem precisar abrir/interromper o circuito</em> (abraça apenas <strong>UM condutor por vez</strong> — se abraçar fase e neutro juntos, os campos se anulam e a leitura dá zero!).</li>
            </ul>
          </li>
          <li><strong>Falhas Comuns:</strong> <em>Curto-circuito</em> (contato direto entre fase-neutro ou fase-fase com corrente altíssima); <em>Sobrecarga</em> (corrente acima da nominal por excesso de equipamentos ligados); <em>Fuga de corrente</em> (isolação danificada desviando corrente à massa/terra — dispara o DR); <em>Mau contato</em> (conexão frouxa/oxidada → gera resistência elevada e <strong>aquecimento/centelhamento</strong> com risco de incêndio!).</li>
        </ul>
        <div class="lei-seca">
          <span class="lei-titulo">NR-10 — Os 6 Passos Obrigatórios da Desenergização (Item 10.5.1)</span>
          <p>Somente serão consideradas desenergizadas as instalações elétricas liberadas para trabalho mediante os procedimentos apropriados, obedecida a sequência abaixo:</p>
          <p><strong>1º) Seccionamento</strong> (desligar disjuntor/chave);<br>
          <strong>2º) Impedimento de reenergização</strong> (bloqueio mecânico com cadeado/trava);<br>
          <strong>3º) Constatação da ausência de tensão</strong> (com instrumento testado antes e depois);<br>
          <strong>4º) Instalação de aterramento temporário com equipotencialização</strong> dos condutores dos circuitos;<br>
          <strong>5º) Proteção dos elementos energizados existentes na zona controlada</strong>;<br>
          <strong>6º) Instalação da sinalização de impedimento de reenergização</strong> (placas/etiquetas de bloqueio).</p>
        </div>
      `
    },
    {
      id: "man-hidraulica",
      titulo: "2. Instalações Hidráulicas e Sanitárias (NBR 5626 e NBR 8160)",
      html: `
        <h5>Normas Técnicas Prediais</h5>
        <ul>
          <li><strong>ABNT NBR 5626:</strong> Sistemas prediais de <strong>água fria e água quente</strong> (projeto, execução, operação e manutenção). Tubulações comuns: PVC rígido soldável (marrom) ou roscável (branco) para água fria; CPVC, PPR ou cobre para água quente.</li>
          <li><strong>ABNT NBR 8160:</strong> Sistemas prediais de <strong>esgoto sanitário</strong>. Principais componentes:
            <ul>
              <li><strong>Desconector (Sifão / Caixa Sifonada):</strong> mantém um <strong>fecho hídrico</strong> (lâmina d'água com altura mínima de <strong>50 mm</strong>) que <em>impede o retorno de gases e mau cheiro</em> do esgoto para os ambientes!</li>
              <li><strong>Tubo de Ventilação (Coluna de Ventilação):</strong> permite a entrada/saída de ar para equilibrar pressões e evitar que a sucção rompa o fecho hídrico dos sifões.</li>
              <li><strong>Caixa de Gordura:</strong> retém gorduras provenientes de pias de cozinha/copas antes de entrarem na rede de esgoto (evitando entupimentos).</li>
              <li><strong>Caixa de Inspeção:</strong> permite acesso para limpeza e desobstrução da tubulação de esgoto (tubos de esgoto são sempre de cor branca/cinza, trabalham por gravidade com declividade mínima de 1% a 2%).</li>
            </ul>
          </li>
        </ul>
        <h5>Registros, Válvulas e Aparelhos Sanitários</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Componente</th><th>Função Correta (Clássico de Prova!)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Registro de Gaveta</strong></td><td>Usado para <strong>fechamento total ou abertura total</strong> (manutenção de ramais/ambientes). <em>NÃO deve ser usado para regular vazão</em> (meia abertura desgasta a cunha!).</td></tr>
            <tr><td><strong>Registro de Pressão</strong></td><td>Usado para <strong>controlar/regular a vazão</strong> da água em pontos de uso (ex.: chuveiros e duchas).</td></tr>
            <tr><td><strong>Registro de Esfera</strong></td><td>Abertura/fechamento rápido (1/4 de volta), muito usado em saídas de reservatórios e bombas.</td></tr>
            <tr><td><strong>Válvula de Retenção</strong></td><td>Permite o fluxo da água em <strong>apenas um sentido</strong>, impedindo retorno/refluxo (essencial na saída de bombas de recalque!).</td></tr>
            <tr><td><strong>Válvula de Pé com Crivo</strong></td><td>Instalada na extremidade inferior da tubulação de sucção da bomba para evitar perda da escorva (esvaziamento) e barrar sólidos.</td></tr>
            <tr><td><strong>Torneira de Boia</strong></td><td>Controla automaticamente o nível máximo de enchimento da caixa d'água.</td></tr>
          </tbody>
        </table>
        <h5>Reservatórios (Caixas d'Água), Bombas e Reparos</h5>
        <ul>
          <li><strong>Limpeza e Desinfecção de Reservatórios:</strong> periodicidade recomendada de <strong>6 em 6 meses</strong> (semestralmente), utilizando escova macia (nunca escova de aço nem sabão/detergente!) e solução de <strong>hipoclorito de sódio (água sanitária)</strong> com tempo de contato adequado (aprox. 2 horas) seguido de enxágue, mantendo a tampa bem vedada e o extravasor (ladrão) telado.</li>
          <li><strong>Bombas de Recalque x Pressurizadores:</strong> <em>Bomba de recalque</em> eleva água do reservatório inferior (cisterna) para o reservatório superior; <em>Pressurizador</em> aumenta a pressão nos pontos de consumo quando a pressão gravitacional (altura da caixa) é insuficiente.</li>
          <li><strong>Vazamentos, Entupimentos e Uso Racional:</strong> vazamento em torneira comum geralmente decorre de desgaste da vedação ("carrapeta"/anel O-ring); descarga correndo continuamente indica defeito na vedação da válvula ou desregulagem da boia. Medidas de uso racional: torneiras com arejadores/fechamento automático, caixas acopladas com duplo acionamento (3L/6L) e inspeção periódica de hidrômetro.</li>
        </ul>
      `
    },
    {
      id: "man-maquinas-climatizacao",
      titulo: "3. Manutenção, Climatização (PMOC — Lei 13.589/2018), Ferramentas e Mecânica",
      html: `
        <h5>Tipos de Manutenção (Cobrança Certa na CETAP!)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Tipo</th><th>Definição</th><th>Exemplo Prático</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Manutenção Corretiva</strong></td><td>Executada <strong>após</strong> a ocorrência da falha ou quebra (pode ser <em>não planejada/emergencial</em> ou <em>planejada</em>).</td><td>Substituir um disjuntor queimado ou reparar vazamento após rompimento do tubo.</td></tr>
            <tr><td><strong>Manutenção Preventiva</strong></td><td>Executada em <strong>intervalos programados</strong> (tempo ou horas de uso) para reduzir probabilidade de falha.</td><td>Limpeza mensal de filtros de ar-condicionado; limpeza semestral de caixas d'água; lubrificação programada.</td></tr>
            <tr><td><strong>Manutenção Preditiva</strong></td><td>Baseada no <strong>monitoramento de parâmetros/condições</strong> do equipamento em operação para prever a falha antes que ocorra.</td><td>Termografia em quadros elétricos, análise de vibração/ruído em rolamentos de motores, medição periódica de corrente/pressão.</td></tr>
          </tbody>
        </table>
        <h5>Climatização e Lei do PMOC (Lei nº 13.589/2018)</h5>
        <div class="lei-seca">
          <span class="lei-titulo">Lei nº 13.589/2018 — PMOC (Plano de Manutenção, Operação e Controle)</span>
          <p>Torna obrigatório que <strong>todos os edifícios de uso público e coletivo</strong> que possuem ambientes de ar interior climatizado artificialmente disponham de um <strong>PMOC</strong> dos respectivos sistemas de climatização, visando à eliminação ou minimização de riscos potenciais à saúde dos ocupantes (qualidade do ar interior — parâmetros da ANVISA, Resolução RE nº 09/2003).</p>
          <p><em>Nota técnica (Portaria GM/MS 3.523/1998):</em> sistemas com capacidade acima de <strong>60.000 BTU/h (5 TR)</strong> exigem obrigatoriamente Responsável Técnico habilitado.</p>
        </div>
        <ul>
          <li><strong>Ar-condicionado (Janela e Split):</strong> o modelo <em>Janela</em> integra evaporadora e condensadora em um só gabinete; o modelo <em>Split</em> separa a <strong>evaporadora</strong> (unidade interna — troca calor/resfria o ambiente, possui filtro de ar e bandeja/dreno) da <strong>condensadora</strong> (unidade externa — dissipa calor e abriga o compressor).</li>
          <li><strong>Falhas comuns e manutenção básica:</strong> filtro sujo reduz fluxo de ar, aumenta consumo elétrico e provoca congelamento da serpentina; dreno entupido causa gotejamento interno; baixa carga de fluido refrigerante compromete o resfriamento.</li>
          <li><strong>Bebedouros e Compressores de Ar:</strong> bebedouros exigem higienização periódica e troca do elemento filtrante (vela/refil de carvão ativado); compressores de ar exigem verificação do nível de óleo, limpeza do filtro de ar e <strong>drenagem periódica da água condensada</strong> no reservatório (purgador) para evitar corrosão interna!</li>
        </ul>
        <h5>Ferramentas, Mecânica Básica, Lubrificação e Ordens de Serviço</h5>
        <ul>
          <li><strong>Ferramentas Manuais e Elétricas:</strong> usar cada ferramenta apenas para sua finalidade (nunca usar chave de fenda como talhadeira/alavanca); verificar isolamento de cabos/punhos em serviços elétricos; desconectar da tomada antes de trocar brocas/discos; manter limpas e secas contra oxidação.</li>
          <li><strong>Lubrificação:</strong> reduz atrito, desgaste, ruído e aquecimento entre peças móveis (rolamentos, engrenagens, dobradiças, motores), além de proteger contra corrosão. <em>Óleos lubrificantes</em> (baixa/média viscosidade, alta rotação/dissipação de calor) x <em>Graxas</em> (pastosas, boa vedação contra poeira/água, menor frequência de relubrificação).</li>
          <li><strong>Controle de Ferramentas e Ordens de Serviço (OS):</strong> toda solicitação de reparo ou preventiva deve gerar <strong>Ordem de Serviço (OS)</strong> contendo data, solicitante, local, equipamento/tombamento, descrição do defeito, serviços executados, peças utilizadas e assinatura; manter livro/planilha de cautela de entrada e saída de máquinas e ferramentas.</li>
        </ul>
      `
    },
    {
      id: "man-seguranca-incendio",
      titulo: "4. Segurança do Trabalho (NR-6, NR-35, NR-26), Incêndio (NR-23) e Primeiros Socorros",
      html: `
        <h5>EPI e EPC — Norma Regulamentadora nº 6 (NR-6)</h5>
        <ul>
          <li><strong>Hierarquia das medidas de proteção:</strong> priorizam-se sempre as medidas de proteção <strong>coletiva (EPC)</strong> (ex.: guarda-corpo, exaustor, sinalização, isolação acústica, DR) e administrativas; o <strong>EPI</strong> (Equipamento de Proteção Individual) é adotado quando os EPCs forem inviáveis, insuficientes ou estiverem em implantação.</li>
          <li><strong>Obrigações do Empregador/Órgão (NR-6):</strong> fornecer EPI adequado ao risco <strong>gratuitamente</strong>, em perfeito estado, com <strong>CA (Certificado de Aprovação)</strong> válido, exigir seu uso, orientar/treinar e substituir imediatamente quando danificado/extraviado.</li>
          <li><strong>Obrigações do Trabalhador/Servidor:</strong> usar apenas para a finalidade a que se destina, responsabilizar-se pela guarda e conservação, comunicar qualquer alteração que o torne impróprio e cumprir as determinações sobre uso adequado.</li>
        </ul>
        <h5>Trabalho em Altura — NR-35</h5>
        <div class="quadro-atencao">
          <strong class="quadro-titulo">Conceito Cobrado em Quase Toda Prova (NR-35)</strong>
          Considera-se <strong>trabalho em altura</strong> toda atividade executada <strong>acima de 2,00 m (dois metros)</strong> do nível inferior, onde haja risco de queda!
        </div>
        <ul>
          <li>Exige trabalhador capacitado e autorizado (treinamento periódico <strong>bienal — a cada 2 anos</strong>, carga horária mínima de 8h), Análise de Risco (AR), Permissão de Trabalho (PT) quando não rotineiro, e uso de <strong>Sistema de Proteção Individual contra Quedas (SPIQ)</strong>: cinturão tipo <strong>paraquedista</strong> + talabarte/trava-quedas conectado a ponto de ancoragem seguro.</li>
          <li><strong>Escadas e Andaimes:</strong> escadas de uso elétrico devem ser de material isolante (<strong>fibra de vidro ou madeira</strong> — nunca alumínio perto de eletricidade!); andaimes devem possuir piso completo, guarda-corpo, rodapé e travamento das rodas.</li>
        </ul>
        <h5>Sinalização de Segurança — NR-26 (Cores Oficiais)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Cor (NR-26)</th><th>Significado e Uso Principal</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Vermelho</strong></td><td>Equipamentos de <strong>proteção e combate a incêndio</strong> (extintores, hidrantes, alarmes) e botões de parada de emergência.</td></tr>
            <tr><td><strong>Amarelo</strong></td><td><strong>Cuidado / Atenção / Advertência</strong> (corrimãos, parapeitos, pisos escorregadios, faixas de circulação, obstáculos baixos).</td></tr>
            <tr><td><strong>Laranja</strong></td><td><strong>Perigo</strong> (partes móveis/perigosas de máquinas, interior de caixas/painéis elétricos energizados).</td></tr>
            <tr><td><strong>Verde</strong></td><td><strong>Segurança</strong> (caixas de primeiros socorros, chuveiros de emergência, macas, saídas de emergência/rotas de fuga).</td></tr>
            <tr><td><strong>Azul</strong></td><td><strong>Ação obrigatória</strong> ou cuidado contra movimentação acidental de equipamento em manutenção ("Não ligue esta chave").</td></tr>
            <tr><td><strong>Branco / Preto / Cinza</strong></td><td>Branco = passarelas/corredores/localização de bebedouros; Preto = inflamáveis/combustíveis de alta viscosidade; Cinza claro = eletrodutos.</td></tr>
          </tbody>
        </table>
        <h5>Prevenção e Combate a Incêndios — NR-23</h5>
        <p><strong>Tetraedro do Fogo (4 elementos):</strong> <strong>Combustível</strong> (material que queima), <strong>Comburente</strong> (oxigênio do ar), <strong>Calor</strong> (fonte de ignição) e <strong>Reação em Cadeia</strong>. A extinção ocorre por <em>resfriamento</em> (retira calor), <em>abafamento</em> (retira oxigênio), <em>isolamento/retirada do material</em> ou <em>quebra da reação em cadeia</em> (extinção química).</p>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Classe</th><th>Tipo de Combustível</th><th>Agente Extintor Indicado</th><th>PROIBIDO / Atenção!</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Classe A</strong></td><td>Sólidos comuns que deixam resíduos/brasas (madeira, papel, tecido, plástico).</td><td><strong>Água Pressurizada</strong> (resfriamento), Espuma, Pó ABC.</td><td>CO₂ tem baixa eficácia em brasas profundas.</td></tr>
            <tr><td><strong>Classe B</strong></td><td>Líquidos e gases inflamáveis (gasolina, álcool, óleo, GLP — queimam em superfície).</td><td><strong>Pó Químico Seco (BC/ABC)</strong>, <strong>CO₂</strong>, <strong>Espuma</strong> (abafamento).</td><td><strong>NÃO usar jato pleno de água</strong> (espalha o líquido inflamável!).</td></tr>
            <tr><td><strong>Classe C</strong></td><td>Equipamentos e instalações elétricas <strong>energizadas</strong> (quadros, computadores, motores).</td><td><strong>CO₂ (Gás Carbônico)</strong> — ideal para eletrônicos pois não deixa resíduos! — e <strong>Pó Químico Seco (BC/ABC)</strong>.</td><td><strong>PROIBIDO usar Água ou Espuma</strong> (conduzem eletricidade → risco de choque fatal!).</td></tr>
            <tr><td><strong>Classe D</strong></td><td>Metais pirofóricos (magnésio, sódio, titânio, potássio).</td><td>Pó químico especial (Classe D).</td><td>Nunca usar água (reação explosiva!).</td></tr>
            <tr><td><strong>Classe K</strong></td><td>Óleos e gorduras de cozinha (fritadeiras comerciais).</td><td>Agente químico úmido (acetato de potássio — saponificação).</td><td>Nunca usar água.</td></tr>
          </tbody>
        </table>
        <ul>
          <li><strong>Inspeção e Recarga de Extintores:</strong> inspeção visual periódica (lacre intacto, pino de segurança, mangueira/bico desobstruído, manômetro na <strong>faixa verde</strong>, validade, desobstrução do acesso); recarga geralmente <strong>anual</strong> (ou imediatamente após uso/despressurização) e teste hidrostático a cada 5 anos.</li>
          <li><strong>Abandono de Edificação:</strong> acionar alarme, <strong>NUNCA utilizar elevadores</strong> (usar escadas/saídas de emergência sinalizadas e sempre destrancadas/desobstruídas), manter a calma, deslocar-se agachado se houver fumaça densa e dirigir-se ao ponto de encontro externo.</li>
        </ul>
        <h5>Noções de Primeiros Socorros</h5>
        <ul>
          <li><strong>Choque Elétrico:</strong> <strong>NUNCA tocar diretamente na vítima</strong> enquanto estiver em contato com a fonte energizada! Primeiro <strong>desligar o disjuntor/chave geral</strong> (ou afastar o condutor com material seco e isolante), depois verificar consciência/respiração e acionar SAMU (192) / Bombeiros (193).</li>
          <li><strong>Queimaduras:</strong> resfriar a área com <strong>água corrente em temperatura ambiente</strong> (10–15 min); <em>nunca</em> aplicar pasta de dente, manteiga, pó de café ou gelo direto, nem furar bolhas!</li>
          <li><strong>Hemorragia externa:</strong> compressão direta sobre o ferimento com gaze/pano limpo (usando luvas descartáveis). <strong>Desmaio:</strong> deitar a vítima em local ventilado e elevar levemente as pernas (não dar água/álcool a pessoa desacordada!).</li>
        </ul>
      `
    },
    {
      id: "man-alepa-gestao-patrimonio",
      titulo: "5. ALEPA, Relacionamento Interpessoal, RJU-PA (5.810/94), Gestão Patrimonial e Sustentabilidade",
      html: `
        <h5>A Assembleia Legislativa do Estado do Pará (ALEPA)</h5>
        <ul>
          <li><strong>Funções do Poder Legislativo Estadual:</strong> <em>Típicas</em> = legislar (elaborar leis estaduais e emendas à CE/PA) e fiscalizar (controle externo contábil, financeiro e orçamentário com auxílio do TCE-PA). <em>Atípicas</em> = administrar (sua própria estrutura, pessoal, licitações e patrimônio) e julgar (ex.: crimes de responsabilidade em hipóteses constitucionais).</li>
          <li><strong>Estrutura Básica:</strong> <strong>41 Deputados Estaduais</strong> (legislatura de 4 anos); <strong>Plenário</strong> (órgão soberano de deliberação); <strong>Mesa Diretora</strong> (dirige os trabalhos legislativos e administrativos, mandato de 2 anos); <strong>Comissões Permanentes</strong> (ex.: CCJ, CCFO) e <strong>Temporárias</strong> (CPIs, Especiais); e unidades administrativas/técnicas (incluindo o setor de manutenção e patrimônio).</li>
        </ul>
        <h5>Relacionamento Interpessoal, Conflitos e Ética (Lei Estadual nº 5.810/1994)</h5>
        <ul>
          <li><strong>Relacionamento no Trabalho:</strong> comunicação clara e respeitosa, cooperação, trabalho em equipe, empatia, cordialidade, respeito à diversidade e gestão construtiva de conflitos (foco na solução do problema, diálogo assertivo, sem ataques pessoais).</li>
          <li><strong>Atendimento a Demandas Internas:</strong> presteza, qualidade técnica, priorização por urgência/risco à segurança (ex.: risco elétrico ou vazamento ativo tem prioridade máxima!) e comunicação imediata à chefia de qualquer anormalidade que comprometa pessoas ou bens.</li>
          <li><strong>Deveres e Proibições (Lei Estadual nº 5.810/1994 — RJU-PA):</strong>
            <ul>
              <li><em>Deveres (Art. 177):</em> exercer com zelo e dedicação as atribuições; ser leal às instituições; observar normas legais e regulamentares; cumprir ordens superiores (<strong>exceto quando manifestamente ilegais</strong>); atender com presteza ao público; <strong>zelar pela economia do material e pela conservação do patrimônio público</strong>; manter conduta compatível com a moralidade administrativa; ser assíduo e pontual; tratar com urbanidade as pessoas.</li>
              <li><em>Proibições (Art. 178):</em> ausentar-se do serviço sem prévia autorização; retirar sem prévia anuência qualquer documento ou objeto da repartição; valer-se do cargo para proveito pessoal/terceiros; utilizar pessoal ou recursos materiais da repartição em serviços particulares; proceder de forma desidiosa; recusar fé a documentos públicos.</li>
              <li><em>Penalidades (Art. 183):</em> <strong>Repreensão</strong> (prescreve em 180 dias), <strong>Suspensão</strong> até 90 dias (prescreve em 2 anos), <strong>Demissão</strong>, <strong>Destituição</strong> e <strong>Cassação</strong> (prescrevem em 5 anos).</li>
            </ul>
          </li>
        </ul>
        <h5>Gestão do Trabalho (PDCA), Gestão Patrimonial e Sustentabilidade</h5>
        <ul>
          <li><strong>Ciclo PDCA (Melhoria Contínua):</strong> <strong>P</strong>lan (Planejar o cronograma de manutenção e metas) → <strong>D</strong>o (Executar conforme padrão) → <strong>C</strong>heck (Verificar indicadores, falhas e resultados) → <strong>A</strong>ct (Corrigir desvios e padronizar melhorias).</li>
          <li><strong>Gestão Patrimonial de Bens Públicos:</strong>
            <ul>
              <li><strong>Tombamento:</strong> registro contábil e identificação física de cada bem permanente (durabilidade > 2 anos) com número patrimonial único (plaqueta/etiqueta) e vinculação via <strong>Termo de Responsabilidade</strong>.</li>
              <li><strong>Guarda, Conservação e Movimentação:</strong> manter integridade física e operacional; toda transferência de bem entre salas/setores exige <strong>Guia/Termo de Movimentação</strong> formal (jamais mover equipamento tombado sem registro!).</li>
              <li><strong>Inventário Patrimonial:</strong> levantamento físico periódico para conferir a existência, localização e estado de conservação dos bens frente aos registros contábeis.</li>
              <li><strong>Classificação de Bens Inservíveis (Desfazimento):</strong> <em>Ocioso</em> (em perfeitas condições, mas sem uso), <em>Recuperável</em> (reparo viável ≤ 50% do valor de mercado), <em>Antieconômico</em> (manutenção onerosa ou rendimento precário) e <em>Irrecuperável</em> (não serve mais ou reparo > 50% do valor).</li>
            </ul>
          </li>
          <li><strong>Sustentabilidade na Administração Pública:</strong> uso racional de energia (lâmpadas LED, manutenção de filtros de climatização, desligar equipamentos ociosos), uso racional de água (combate a vazamentos, arejadores), política dos <strong>Rs</strong> (Reduzir, Reutilizar, Reciclar), coleta seletiva e <strong>descarte ambientalmente adequado de resíduos perigosos</strong> (pilhas, baterias, lâmpadas fluorescentes com mercúrio, óleo lubrificante e lixo eletrônico — logística reversa!).</li>
        </ul>
      `
    }
  ]
};
