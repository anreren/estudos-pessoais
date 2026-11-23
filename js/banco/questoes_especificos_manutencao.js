window.BANCO_QUESTOES = window.BANCO_QUESTOES || {};

window.BANCO_QUESTOES.especificos_manutencao = [
  {
    "id": "man-01",
    "topico": "Eletricidade — Lei de Ohm e Potência",
    "materialSecao": "man-eletricidade",
    "enunciado": "Um equipamento elétrico resistivo instalado em um gabinete da ALEPA opera sob tensão de 220 V e é percorrido por uma corrente elétrica de 5 A. Aplicando a Lei de Ohm e a relação de potência elétrica, os valores da resistência elétrica e da potência dissipada são, respectivamente:",
    "alternativas": [
      "44 Ω e 1.100 W.",
      "1.100 Ω e 44 W.",
      "225 Ω e 440 W.",
      "22 Ω e 550 W.",
      "44 Ω e 440 W."
    ],
    "correta": 0,
    "explicacao": "Pela Lei de Ohm: R = V / I = 220 / 5 = 44 Ω. Pela fórmula da potência: P = V · I = 220 × 5 = 1.100 W."
  },
  {
    "id": "man-02",
    "topico": "Eletricidade — Circuitos em Série e Paralelo (Estilo CETAP)",
    "materialSecao": "man-eletricidade",
    "enunciado": "O técnico Roberto revisa circuitos de iluminação e tomadas em um pavimento da ALEPA. Acerca das associações em série e em paralelo, analise as afirmativas abaixo:\nI. Nas instalações prediais de iluminação e tomadas, as cargas são ligadas em paralelo para que recebam a mesma tensão nominal e operem de forma independente.\nII. Em um circuito puramente em série, a corrente elétrica é a mesma em todos os componentes e a abertura de um ponto interrompe todo o circuito.\nIII. Na associação em paralelo de resistores idênticos, a resistência equivalente é sempre menor do que a resistência individual de cada resistor.\nIV. Em um circuito paralelo, a queima de uma única lâmpada apaga imediatamente todas as demais lâmpadas do mesmo circuito.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! IV é falsa (pegadinha clássica): no circuito em paralelo os ramos são independentes — a queima de uma lâmpada NÃO apaga as outras."
  },
  {
    "id": "man-03",
    "topico": "Eletricidade — Resistência Equivalente",
    "materialSecao": "man-eletricidade",
    "enunciado": "Considere três resistores idênticos de 6 Ω cada. Os valores da resistência equivalente quando ligados em SÉRIE e quando ligados em PARALELO são, respectivamente:",
    "alternativas": [
      "18 Ω e 2 Ω.",
      "2 Ω e 18 Ω.",
      "12 Ω e 3 Ω.",
      "18 Ω e 6 Ω.",
      "9 Ω e 1 Ω."
    ],
    "correta": 0,
    "explicacao": "Em série: R_eq = 6 + 6 + 6 = 18 Ω. Em paralelo (resistores iguais): R_eq = R / n = 6 / 3 = 2 Ω."
  },
  {
    "id": "man-04",
    "topico": "Eletricidade — CC, CA e Sistemas de Fornecimento (Estilo CETAP)",
    "materialSecao": "man-eletricidade",
    "enunciado": "Acerca de corrente contínua (CC), corrente alternada (CA) e sistemas de fornecimento predial, analise as afirmativas:\nI. A corrente contínua (CC) mantém sentido constante de fluxo elétrico (como em pilhas, baterias e fontes eletrônicas).\nII. A corrente alternada (CA) inverte periodicamente seu sentido de circulação, operando no Brasil na frequência padrão de **60 Hz**.\nIII. Motores elétricos de grande porte, bombas de recalque e elevadores em edifícios públicos utilizam preferencialmente sistemas **trifásicos**.\nIV. O sistema monofásico dispensa disjuntor de proteção e condutor neutro.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! IV é falsa porque o sistema monofásico típico utiliza fase + neutro (+ terra) e exige proteção por disjuntor."
  },
  {
    "id": "man-05",
    "topico": "ABNT NBR 5410 — Cores dos Condutores",
    "materialSecao": "man-eletricidade",
    "enunciado": "De acordo com a norma ABNT NBR 5410 (Instalações Elétricas de Baixa Tensão), a padronização obrigatória das cores da isolação dos condutores NEUTRO e de PROTEÇÃO (Terra / PE) é, respectivamente:",
    "alternativas": [
      "Preto (neutro) e vermelho (proteção).",
      "Azul-claro (neutro) e verde ou verde-amarelo (proteção).",
      "Verde (neutro) e azul-claro (proteção).",
      "Branco (neutro) e marrom (proteção).",
      "Vermelho (neutro) e cinza (proteção)."
    ],
    "correta": 1,
    "explicacao": "NBR 5410: Condutor Neutro = obrigatoriamente AZUL-CLARO; Condutor de Proteção (PE/Terra) = obrigatoriamente VERDE ou VERDE-AMARELO (dupla coloração). Fases usam outras cores (preto, vermelho, marrom, etc.)."
  },
  {
    "id": "man-06",
    "topico": "ABNT NBR 5410 — Dispositivo DR",
    "materialSecao": "man-eletricidade",
    "enunciado": "Na proteção de instalações elétricas prediais de baixa tensão (ABNT NBR 5410), o Dispositivo Diferencial Residual (DR) de alta sensibilidade (30 mA) tem como finalidade primordial:",
    "alternativas": [
      "Substituir o aterramento em prédios antigos, dispensando a instalação do condutor de proteção.",
      "Proteger equipamentos eletrônicos exclusivamente contra descargas atmosféricas (raios) na rede externa.",
      "Proteger pessoas e animais contra choques elétricos, detectando fugas de corrente para a terra e seccionando rapidamente o circuito.",
      "Aumentar a tensão nominal da rede de 127 V para 220 V em circuitos de iluminação.",
      "Impedir exclusivamente sobrecargas térmicas em cabos subdimensionados."
    ],
    "correta": 2,
    "explicacao": "O DR (30 mA) compara a corrente que entra e sai do circuito; havendo diferença ≥ 30 mA (fuga de corrente — ex.: pessoa tomando choque), desliga em milissegundos, protegendo vidas! (Raios = DPS; sobrecarga/curto-circuito = Disjuntor Termomagnético)."
  },
  {
    "id": "man-07",
    "topico": "ABNT NBR 5410 — Dispositivos de Proteção Elétrica (Estilo CETAP)",
    "materialSecao": "man-eletricidade",
    "enunciado": "Em um quadro de distribuição elétrica predial conforme a ABNT NBR 5410, assinale a única alternativa INCORRETA sobre os dispositivos de proteção:",
    "alternativas": [
      "O Disjuntor Termomagnético (DTM) protege o circuito contra sobrecargas (ação térmica) e curtos-circuitos (ação magnética).",
      "O Dispositivo de Proteção contra Surtos (DPS) desvia sobretensões transitórias (como descargas atmosféricas) para o sistema de aterramento.",
      "O Dispositivo Diferencial Residual (DR) de 30 mA protege pessoas contra choques elétricos provocados por fuga de corrente para a terra.",
      "Os eletrodutos têm a função mecânica de acondicionar e proteger os condutores isolados no interior das edificações.",
      "O DPS funciona desconectado do barramento de aterramento e substitui integralmente o disjuntor termomagnético contra curtos-circuitos."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! O DPS DEPENDE obrigatoriamente do sistema de aterramento para escoar o surto e NÃO substitui o disjuntor termomagnético (sobrecarga/curto-circuito) nem o DR (choque elétrico)."
  },
  {
    "id": "man-08",
    "topico": "ABNT NBR 14136 — Tomadas e Plugues (Estilo CETAP)",
    "materialSecao": "man-eletricidade",
    "enunciado": "De acordo com o padrão brasileiro de plugues e tomadas (ABNT NBR 14136), assinale a única alternativa INCORRETA:",
    "alternativas": [
      "Os plugues de 10 A possuem pinos de 4,0 mm de diâmetro, enquanto os plugues de 20 A possuem pinos mais grossos, de 4,8 mm.",
      "A tomada de 20 A aceita tanto plugues de 20 A quanto plugues de 10 A.",
      "A tomada de 10 A impede fisicamente o encaixe de plugues de 20 A, evitando sobrecarga e sobreaquecimento do circuito.",
      "O terceiro pino central do padrão brasileiro corresponde ao condutor de proteção (Terra / PE) e não deve ser removido ou inutilizado.",
      "Aparelhos de alta potência com plugue de 20 A devem ser ligados rotineiramente em tomadas de 10 A mediante adaptadores ('benjamins') para economizar energia."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! O uso de adaptadores para ligar cargas de 20 A em tomadas/circuitos de 10 A anula a proteção dimensional da NBR 14136 e provoca superaquecimento, derretimento e risco de incêndio."
  },
  {
    "id": "man-09",
    "topico": "Eletricidade — Interruptores e Esquemas Elétricos",
    "materialSecao": "man-eletricidade",
    "enunciado": "Em um longo corredor administrativo da ALEPA, deseja-se acender e apagar o mesmo conjunto de luminárias a partir de DOIS pontos distintos (início e fim do corredor). Além disso, por norma de segurança, qual condutor deve ser seccionado pelo interruptor?",
    "alternativas": [
      "Interruptor simples; deve seccionar o condutor Neutro.",
      "Interruptor paralelo (three-way); deve seccionar o condutor Fase.",
      "Interruptor paralelo (three-way); deve seccionar o condutor de Proteção (Terra).",
      "Interruptor simples em série; deve seccionar o condutor Neutro e o Terra juntos.",
      "Interruptor intermediário isolado; dispensa condutor de retorno."
    ],
    "correta": 1,
    "explicacao": "Para comandar uma lâmpada de 2 pontos distintos usa-se um par de interruptores paralelos (three-way). Por segurança (NBR 5410), o interruptor SEMPRE secciona o condutor FASE, evitando que o soquete fique energizado com a lâmpada apagada!"
  },
  {
    "id": "man-10",
    "topico": "Instrumentos de Medição — Multímetro",
    "materialSecao": "man-eletricidade",
    "enunciado": "Na utilização correta do multímetro digital durante diagnósticos em instalações elétricas prediais, assinale a alternativa CORRETA:",
    "alternativas": [
      "Para medir a tensão elétrica (voltímetro), as pontas de prova devem ser ligadas em série, interrompendo o fio do circuito.",
      "Para medir resistência elétrica ou continuidade (ohmímetro), o circuito deve estar obrigatoriamente DESENERGIZADO.",
      "Para medir resistência elétrica, recomenda-se manter o disjuntor ligado para aumentar a precisão do display.",
      "Ao medir tensão alternada da rede predial (127 V / 220 V), deve-se selecionar a escala de corrente contínua (DCV / V⎓).",
      "O multímetro não possui capacidade para testar continuidade de cabos ou fusíveis."
    ],
    "correta": 1,
    "explicacao": "Regra fundamental: medição de resistência/continuidade (Ω) exige circuito 100% DESENERGIZADO (caso contrário queima o aparelho e oferece risco!). Tensão (V) mede-se em PARALELO na escala ACV (V~) para rede predial."
  },
  {
    "id": "man-11",
    "topico": "Instrumentos de Medição — Alicate Amperímetro",
    "materialSecao": "man-eletricidade",
    "enunciado": "Um técnico de manutenção utiliza um alicate amperímetro para medir a corrente de operação de um aparelho de ar-condicionado ligado. Para obter uma leitura correta sem desligar o equipamento, o técnico deve:",
    "alternativas": [
      "Abraçar com a garra do alicate o cabo completo (fase, neutro e terra juntos) ao mesmo tempo.",
      "Envolver com a garra do alicate apenas UM condutor (por exemplo, somente o condutor fase) por vez.",
      "Cortar o condutor fase e conectar o alicate amperímetro em paralelo com a tomada.",
      "Desligar o disjuntor geral antes de realizar a medição de corrente de carga.",
      "Selecionar a escala de resistência (Ω) para medir corrente em ampères."
    ],
    "correta": 1,
    "explicacao": "O alicate amperímetro mede o campo magnético induzido pela corrente. Se abraçar fase e neutro juntos, as correntes em sentidos opostos anulam o campo magnético e o visor marca zero! Por isso, deve-se envolver apenas UM condutor por vez."
  },
  {
    "id": "man-12",
    "topico": "Diagnóstico de Falhas Elétricas",
    "materialSecao": "man-eletricidade",
    "enunciado": "Durante uma vistoria preventiva no quadro de distribuição de um setor, o técnico observa sinais de derretimento na isolação de um cabo conectado ao borne de um disjuntor, acompanhado de aquecimento excessivo no ponto de conexão e oscilações de luz. A falha mais provável nesse ponto específico é:",
    "alternativas": [
      "Atuação normal do DPS.",
      "Mau contato elétrico (conexão frouxa ou oxidada), que eleva a resistência de contato e gera efeito Joule (superaquecimento).",
      "Falta de lâmpadas LED no circuito.",
      "Excesso de aterramento no quadro.",
      "Redução da frequência da rede para 30 Hz."
    ],
    "correta": 1,
    "explicacao": "Conexões frouxas ou oxidadas provocam MAU CONTATO, elevando a resistência elétrica no ponto de junção. Pela Lei de Joule (P = R·I²), isso gera intenso aquecimento localizado, derretimento de isolação, centelhamento e risco grave de incêndio."
  },
  {
    "id": "man-13",
    "topico": "Diagnóstico de Falhas — Fuga de Corrente",
    "materialSecao": "man-eletricidade",
    "enunciado": "Sempre que um bebedouro metálico é ligado na tomada da copa, o dispositivo DR do quadro de distribuição desarma instantaneamente, embora o disjuntor termomagnético permaneça armado. Esse comportamento indica tipicamente:",
    "alternativas": [
      "Defeito obrigatório no disjuntor geral do prédio.",
      "Fuga de corrente elétrica (falha de isolação interna) para a carcaça metálica/terra do equipamento.",
      "Queda de tensão momentânea na concessionária de energia.",
      "Que o equipamento está consumindo menos corrente do que o normal.",
      "Ausência de filtro de água no bebedouro."
    ],
    "correta": 1,
    "explicacao": "Desarme do DR sem desarme do disjuntor termomagnético é o sintoma clássico de FUGA DE CORRENTE (isolação comprometida vazando corrente para a carcaça/terra). O DR agiu corretamente evitando um choque elétrico!"
  },
  {
    "id": "man-14",
    "topico": "NR-10 — Sequência de Desenergização",
    "materialSecao": "man-eletricidade",
    "enunciado": "Nos termos do item 10.5.1 da Norma Regulamentadora nº 10 (NR-10), para que uma instalação elétrica seja considerada efetivamente DESENERGIZADA e liberada para trabalho, devem ser cumpridos 6 procedimentos em sequência rigorosa. Os TRÊS PRIMEIROS passos dessa sequência são:",
    "alternativas": [
      "1º Sinalização; 2º Aterramento temporário; 3º Seccionamento.",
      "1º Seccionamento; 2º Impedimento de reenergização; 3º Constatação da ausência de tensão.",
      "1º Constatação da ausência de tensão; 2º Seccionamento; 3º Proteção de elementos energizados.",
      "1º Aterramento temporário; 2º Seccionamento; 3º Impedimento de reenergização.",
      "1º Impedimento de reenergização; 2º Sinalização; 3º Constatação da ausência de tensão."
    ],
    "correta": 1,
    "explicacao": "Sequência obrigatória da NR-10 (item 10.5.1): 1º Seccionamento → 2º Impedimento de reenergização (bloqueio) → 3º Constatação da ausência de tensão → 4º Aterramento temporário com equipotencialização → 5º Proteção dos elementos energizados na zona controlada → 6º Sinalização de impedimento de reenergização."
  },
  {
    "id": "man-15",
    "topico": "NR-10 — Bloqueio, Sinalização e Reenergização (Estilo CETAP)",
    "materialSecao": "man-eletricidade",
    "enunciado": "Sobre os procedimentos de bloqueio, sinalização e reenergização disciplinados pela NR-10 durante manutenção em quadros elétricos, analise os itens:\nI. O bloqueio mecânico (cadeado de travamento) combinado com etiqueta de sinalização impede a reenergização acidental por terceiros durante o serviço.\nII. A reenergização somente deve ser autorizada após a retirada de todas as ferramentas, utensílios, equipamentos e de todos os trabalhadores não envolvidos no processo de reenergização.\nIII. A sequência de reenergização segue a ordem inversa da desenergização (remoção do aterramento temporário, retirada da sinalização, destravamento e religação).\nEstão CORRETOS:",
    "alternativas": [
      "Apenas I.",
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I e III.",
      "Todos os itens (I, II e III)."
    ],
    "correta": 4,
    "explicacao": "Todos os três itens correspondem rigorosamente aos itens 10.5.1 e 10.5.2 da Norma Regulamentadora nº 10 (NR-10)!"
  },
  {
    "id": "man-16",
    "topico": "Eletricidade — Consumo de Energia (kWh)",
    "materialSecao": "man-eletricidade",
    "enunciado": "Um conjunto de refletores de 2.000 W (2 kW) de um auditório permaneceu ligado por 5 horas diárias durante 20 dias úteis em um mês. O consumo total de energia elétrica desse conjunto no mês foi de:",
    "alternativas": [
      "100 kWh.",
      "200 kWh.",
      "400 kWh.",
      "2.000 kWh.",
      "50 kWh."
    ],
    "correta": 1,
    "explicacao": "Energia (kWh) = Potência (kW) × Tempo total (h). Tempo total = 5 h/dia × 20 dias = 100 horas. Energia = 2 kW × 100 h = 200 kWh."
  },
  {
    "id": "man-17",
    "topico": "Hidráulica — ABNT NBR 5626 e NBR 8160",
    "materialSecao": "man-hidraulica",
    "enunciado": "No âmbito das instalações prediais brasileiras, as normas técnicas ABNT NBR 5626 e ABNT NBR 8160 regulamentam, respectivamente:",
    "alternativas": [
      "Instalações elétricas de baixa tensão (NBR 5626) e tomadas/plugues (NBR 8160).",
      "Sistemas prediais de água fria e água quente (NBR 5626) e sistemas prediais de esgoto sanitário (NBR 8160).",
      "Sistemas de esgoto sanitário (NBR 5626) e prevenção de incêndios (NBR 8160).",
      "Sistemas de climatização (NBR 5626) e redes de águas pluviais (NBR 8160).",
      "Elevadores prediais (NBR 5626) e caixas d'água industriais (NBR 8160)."
    ],
    "correta": 1,
    "explicacao": "ABNT NBR 5626 = Sistemas prediais de água fria e água quente (atualizada unificando água fria e quente). ABNT NBR 8160 = Sistemas prediais de esgoto sanitário."
  },
  {
    "id": "man-18",
    "topico": "Hidráulica — Registros de Gaveta e de Pressão",
    "materialSecao": "man-hidraulica",
    "enunciado": "Na manutenção hidráulica de banheiros e copas de um prédio público, há diferença técnica fundamental entre o Registro de Gaveta e o Registro de Pressão. Assinale a alternativa CORRETA:",
    "alternativas": [
      "O registro de gaveta deve operar preferencialmente semiaberto para regular a vazão de chuveiros.",
      "O registro de gaveta destina-se exclusivamente ao fechamento ou abertura TOTAL do fluxo (manutenção de ramais), enquanto o registro de pressão destina-se a regular/controlar a vazão em pontos de utilização (como chuveiros).",
      "O registro de pressão não pode ser instalado em chuveiros por suportar apenas água quente.",
      "Ambos os registros possuem exatamente o mesmo mecanismo interno e podem ser trocados indistintamente sem perda de durabilidade.",
      "O registro de gaveta impede automaticamente o refluxo da água em bombas de recalque."
    ],
    "correta": 1,
    "explicacao": "Regra clássica de hidráulica: Registro de GAVETA = abre tudo ou fecha tudo (bloqueio para manutenção; operar meia-abertura danifica a cunha!). Registro de PRESSÃO = controla/regula a vazão (chuveiros/duchas). Impedir refluxo = Válvula de Retenção."
  },
  {
    "id": "man-19",
    "topico": "Hidráulica — Válvula de Retenção e Válvula de Pé",
    "materialSecao": "man-hidraulica",
    "enunciado": "Em um sistema de bombeamento que eleva água da cisterna (reservatório inferior) para a caixa d'água superior, qual componente é instalado na tubulação de recalque para permitir o escoamento em APENAS UM SENTIDO e impedir o retorno da coluna d'água sobre a bomba quando ela desliga?",
    "alternativas": [
      "Registro de pressão.",
      "Válvula de retenção.",
      "Sifão articulado.",
      "Caixa de gordura.",
      "Arejador de vazão."
    ],
    "correta": 1,
    "explicacao": "A Válvula de Retenção (unidirecional) permite o fluxo somente no sentido de recalque e bloqueia automaticamente o retorno da água quando a bomba desliga, protegendo o rotor contra golpe de aríete e esvaziamento da coluna."
  },
  {
    "id": "man-20",
    "topico": "Esgoto Sanitário — Fecho Hídrico e Desconector (NBR 8160)",
    "materialSecao": "man-hidraulica",
    "enunciado": "Em um sanitário da ALEPA, servidores relatam forte odor de esgoto vindo do ralo do piso e da pia. Segundo a ABNT NBR 8160, o elemento responsável por formar o FECHO HÍDRICO (barreira líquida com altura mínima de 50 mm) que impede a passagem de gases do esgoto para os ambientes é:",
    "alternativas": [
      "O registro de gaveta.",
      "O desconector (sifão ou caixa sifonada).",
      "A válvula de retenção de recalque.",
      "A torneira de boia.",
      "O hidrômetro predial."
    ],
    "correta": 1,
    "explicacao": "Pela NBR 8160, o desconector (sifão ou caixa sifonada) mantém uma lâmina d'água permanente (fecho hídrico ≥ 50 mm) que bloqueia a passagem de gases fétidos do esgoto para o ambiente interno."
  },
  {
    "id": "man-21",
    "topico": "Esgoto Sanitário — NBR 8160 (Ventilação e Caixa de Gordura — Estilo CETAP)",
    "materialSecao": "man-hidraulica",
    "enunciado": "Acerca dos subsistemas de esgoto sanitário predial regidos pela ABNT NBR 8160, analise as proposições:\nI. O **tubo de ventilação** equaliza as pressões atmosféricas no interior das tubulações de esgoto, impedindo a ruptura do fecho hídrico dos desconectores por sucção (sifonamento).\nII. A **caixa de gordura** retém resíduos gordurosos provenientes de pias de copa/cozinha antes que atinjam a rede coletora, evitando entupimentos.\nIII. O **fecho hídrico** presente em sifões e caixas sifonadas impede a passagem de gases fétidos e insetos para os ambientes sanitários.\nIV. A caixa de gordura deve receber também os despejos diretos de vasos sanitários (esgoto primário) para facilitar a diluição.\nEstão CORRETAS apenas as proposições:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! IV é falsa: vasos sanitários NUNCA descarregam na caixa de gordura (vão diretamente para a rede primária de esgoto/caixa de inspeção)."
  },
  {
    "id": "man-22",
    "topico": "Hidráulica — Limpeza e Desinfecção de Reservatórios (Estilo CETAP)",
    "materialSecao": "man-hidraulica",
    "enunciado": "Quanto aos procedimentos corretos de limpeza e desinfecção de reservatórios de água potável (caixas d'água e cisternas) em prédios públicos, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "Recomenda-se realizar a limpeza e desinfecção semestralmente (a cada 6 meses).",
      "As paredes e o fundo do reservatório devem ser lavados com escova macia ou pano limpo, sem utilizar sabão ou detergente.",
      "A desinfecção é feita com solução à base de hipoclorito de sódio (água sanitária) em proporção adequada, seguida de enxágue.",
      "A tampa da caixa d'água deve permanecer bem vedada e o tubo extravasor (\"ladrão\") protegido com tela contra insetos e vetores.",
      "Durante a lavagem, deve-se esfregar o interior com palha de aço e detergente perfumado, deixando a tampa entreaberta para ventilar permanentemente a água."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! Palha de aço risca o revestimento facilitando biofilme/sujeira, detergente contamina a água potável e tampa aberta permite entrada de sujeira, insetos e vetores como o Aedes aegypti."
  },
  {
    "id": "man-23",
    "topico": "Hidráulica — Bombas de Recalque e Pressurizadores",
    "materialSecao": "man-hidraulica",
    "enunciado": "Qual é a principal diferença funcional entre uma BOMBA DE RECALQUE e um PRESSURIZADOR em instalações hidráulicas prediais?",
    "alternativas": [
      "A bomba de recalque aquece a água para chuveiros, enquanto o pressurizador filtra impurezas sólidas.",
      "A bomba de recalque transfere água de um reservatório inferior (cisterna) para um reservatório superior, enquanto o pressurizador aumenta a pressão nos ramais/pontos de consumo quando a pressão por gravidade é insuficiente.",
      "O pressurizador substitui a tubulação de esgoto sanitário nos andares superiores.",
      "A bomba de recalque funciona exclusivamente sem energia elétrica.",
      "Não existe diferença técnica: ambos têm a única função de drenar água de chuva."
    ],
    "correta": 1,
    "explicacao": "Bomba de recalque eleva a água do reservatório inferior para o superior; pressurizador eleva a pressão nos pontos de utilização (muito usado no último pavimento onde a altura da caixa d'água gera pouca carga hidráulica)."
  },
  {
    "id": "man-24",
    "topico": "Hidráulica — Aparelhos Sanitários e Descargas",
    "materialSecao": "man-hidraulica",
    "enunciado": "Em um banheiro institucional, o vaso sanitário com caixa acoplada apresenta fluxo contínuo de água escorrendo para a bacia mesmo sem acionamento da descarga, gerando grande desperdício. As causas mais comuns dessa falha são:",
    "alternativas": [
      "Obstrução da caixa de gordura ou falta de tubo de ventilação.",
      "Desregulagem/defeito na boia de entrada (permitindo que a água transborde pelo extravasor interno) ou desgaste/sujeira na vedação do obturador (torre de saída).",
      "Excesso de pressão na rede de esgoto pluvial.",
      "Ausência de registro de pressão no lavatório ao lado.",
      "Queima da resistência elétrica do chuveiro."
    ],
    "correta": 1,
    "explicacao": "Em caixas acopladas, o vazamento contínuo na bacia quase sempre decorre da torre de entrada/boia desregulada (nível acima do ladrão interno) ou da borracha de vedação do mecanismo de saída (obturador) ressecada/desalinhada."
  },
  {
    "id": "man-25",
    "topico": "Hidráulica — Materiais para Água Fria e Água Quente",
    "materialSecao": "man-hidraulica",
    "enunciado": "Na manutenção de tubulações prediais, qual material NÃO é tecnicamente adequado para condução de ÁGUA QUENTE sob pressão, devendo ser restrito a água fria?",
    "alternativas": [
      "Cobre.",
      "CPVC (Policloreto de Vinila Clorado).",
      "PPR (Polipropileno Copolímero Random).",
      "PVC rígido marrom comum (soldável para água fria).",
      "PEX (Polietileno Reticulado) específico para água quente."
    ],
    "correta": 3,
    "explicacao": "O PVC rígido marrom comum suporta apenas água fria (temperatura ambiente até ~20–45 °C); com água quente ele amolece, deforma e rompe! Para água quente utilizam-se CPVC, PPR, cobre ou PEX."
  },
  {
    "id": "man-26",
    "topico": "Hidráulica — Vazamentos e Reparos em Torneiras",
    "materialSecao": "man-hidraulica",
    "enunciado": "Uma torneira convencional (de vedação por compressão) continua pingando mesmo quando o volante está completamente fechado. O primeiro procedimento técnico de manutenção após fechar o registro do ambiente consiste em:",
    "alternativas": [
      "Quebrar a parede para substituir toda a coluna de água fria.",
      "Desmontar o mecanismo/castelo da torneira para inspecionar e substituir o vedante de borracha ('carrapeta') ou o reparo/anel de vedação desgastado.",
      "Aplicar cola de PVC diretamente na saída do arejador.",
      "Substituir a caixa d'água superior.",
      "Aumentar a pressão do pressurizador do prédio."
    ],
    "correta": 1,
    "explicacao": "Gotejamento com torneira fechada em modelos convencionais decorre tipicamente do desgaste do vedante ('carrapeta') ou do mecanismo de vedação (ou cartucho cerâmico em modelos de 1/4 de volta), resolvido de forma simples após fechar o registro de gaveta."
  },
  {
    "id": "man-27",
    "topico": "Hidráulica — Detecção de Vazamentos Ocultos e Infiltrações",
    "materialSecao": "man-hidraulica",
    "enunciado": "Para verificar rapidamente se há um vazamento oculto no ramal alimentado diretamente pela rede pública (antes do reservatório), qual teste prático simples o técnico de manutenção pode executar?",
    "alternativas": [
      "Abrir todas as torneiras do edifício ao mesmo tempo e observar a cor da água.",
      "Fechar todos os pontos de consumo e travar a boia do reservatório (ou fechar seu registro de entrada) e observar se o ponteiro/indicador do hidrômetro continua girando.",
      "Desligar a bomba de recalque durante 5 minutos e medir a tensão elétrica.",
      "Retirar o fecho hídrico de todos os sifões do banheiro.",
      "Jogar detergente na caixa de inspeção de esgoto."
    ],
    "correta": 1,
    "explicacao": "Com todos os pontos de consumo e a entrada da caixa fechados, o hidrômetro deve ficar completamente parado. Se continuar registrando passagem de água, há vazamento na tubulação entre o cavalete/hidrômetro e o reservatório!"
  },
  {
    "id": "man-28",
    "topico": "Hidráulica — Entupimentos e Boas Práticas",
    "materialSecao": "man-hidraulica",
    "enunciado": "Ao realizar a desobstrução de pias e ralos em copas e banheiros institucionais, assinale a conduta tecnicamente RECOMENDADA e segura:",
    "alternativas": [
      "Despejar soda cáustica pura em grandes quantidades e água fervente dentro de tubulações de PVC sem EPI.",
      "Utilizar métodos mecânicos adequados (desentupidor de borracha, desmontagem e limpeza do sifão, cabo flexível desentupidor) usando luvas e óculos de proteção, além de promover limpeza preventiva periódica da caixa de gordura.",
      "Introduzir vergalhões metálicos pontiagudos batendo com marreta dentro de joelhos de PVC.",
      "Remover permanentemente a grade dos ralos para facilitar a passagem de resíduos sólidos.",
      "Descartar óleo de cozinha usado diretamente na pia com água fria."
    ],
    "correta": 1,
    "explicacao": "Soda cáustica gera reação exotérmica violenta (danifica PVC, endurece gordura virando sabão sólido e causa queimaduras químicas graves!). A boa prática prioriza desobstrução mecânica (limpeza do sifão, cabo flexível), uso de EPI e manutenção preventiva da caixa de gordura."
  },
  {
    "id": "man-29",
    "topico": "Hidráulica — Uso Racional da Água em Prédios Públicos (Estilo CETAP)",
    "materialSecao": "man-hidraulica",
    "enunciado": "O técnico Lucas elabora um plano de redução do consumo de água na sede da ALEPA. Analise as medidas propostas abaixo:\nI. Instalação de torneiras com arejadores ou válvulas de fechamento hidromecânico/temporizado.\nII. Substituição de caixas de descarga antigas por modelos de duplo acionamento (3 L / 6 L).\nIII. Inspeção periódica de vazamentos visíveis e ocultos em ramais, registros e vasos sanitários.\nIV. Aproveitamento de água de chuva e de condensado de aparelhos de ar-condicionado para fins não potáveis (como rega de jardins e lavagem de pisos).\nSão medidas tecnicamente EFETIVAS para o uso racional da água:",
    "alternativas": [
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I, II e III.",
      "Apenas I, III e IV.",
      "Todas (I, II, III e IV)."
    ],
    "correta": 4,
    "explicacao": "Todas as quatro medidas (I, II, III e IV) são boas práticas consagradas de eficiência hídrica e sustentabilidade em edificações públicas!"
  },
  {
    "id": "man-30",
    "topico": "Manutenção — Preventiva, Corretiva e Preditiva",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Um técnico realiza inspeções com câmera termográfica nos quadros elétricos da ALEPA e mede a vibração de rolamentos de bombas d'água em funcionamento, identificando aquecimento anormal em um disjuntor antes que ele falhe e agendando sua substituição. Essa modalidade de manutenção é classificada como:",
    "alternativas": [
      "Manutenção Corretiva não planejada.",
      "Manutenção Preventiva por tempo fixo.",
      "Manutenção Preditiva.",
      "Manutenção Emergencial de quebra.",
      "Manutenção de Desfazimento."
    ],
    "correta": 2,
    "explicacao": "Manutenção PREDITIVA monitora condições/parâmetros reais do equipamento em operação (termografia, vibração, ruído, análise de óleo) para prever o desgaste e intervir antes da falha. Preventiva = intervalos fixos de tempo/uso; Corretiva = após a falha."
  },
  {
    "id": "man-31",
    "topico": "Manutenção — Classificação de Intervenções",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Associe corretamente os exemplos abaixo aos respectivos tipos de manutenção:\nI. Troca mensal programada ou limpeza quinzenal dos filtros de ar-condicionado conforme cronograma.\nII. Substituição imediata de um capacitor queimado após o ventilador parar de funcionar.\nIII. Monitoramento periódico da corrente elétrica e temperatura de motores para detectar desgaste iminente.\nA sequência correta é:",
    "alternativas": [
      "I – Corretiva; II – Preditiva; III – Preventiva.",
      "I – Preventiva; II – Corretiva; III – Preditiva.",
      "I – Preditiva; II – Preventiva; III – Corretiva.",
      "I – Preventiva; II – Preditiva; III – Corretiva.",
      "I – Corretiva; II – Preventiva; III – Preditiva."
    ],
    "correta": 1,
    "explicacao": "I = Preventiva (programada em calendário fixo); II = Corretiva (após a quebra/parada); III = Preditiva (monitoramento de grandezas para antecipar a falha)."
  },
  {
    "id": "man-32",
    "topico": "Climatização — Lei do PMOC (Lei nº 13.589/2018)",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "De acordo com a Lei Federal nº 13.589/2018, o Plano de Manutenção, Operação e Controle (PMOC) dos sistemas de climatização é:",
    "alternativas": [
      "Facultativo para órgãos públicos estaduais, aplicando-se apenas a shopping centers privados.",
      "Obrigatório em todos os edifícios de uso público e coletivo que possuem ambientes de ar interior climatizado artificialmente, visando eliminar ou minimizar riscos potenciais à saúde dos ocupantes.",
      "Destinado exclusivamente à redução da conta de energia elétrica, sem relação com a qualidade do ar interior.",
      "Dispensado em prédios que utilizam aparelhos do tipo Split.",
      "Executado uma única vez na inauguração do edifício, sem necessidade de registros periódicos."
    ],
    "correta": 1,
    "explicacao": "A Lei nº 13.589/2018 torna o PMOC OBRIGATÓRIO para todos os edifícios de uso público e coletivo com ambientes climatizados artificialmente, focando na qualidade do ar interior e prevenção de riscos à saúde (como fungos, bactérias e Síndrome do Edifício Doente)."
  },
  {
    "id": "man-33",
    "topico": "Climatização — Ar-Condicionado Janela e Split",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Em um aparelho de ar-condicionado do tipo SPLIT instalado em um gabinete da Assembleia Legislativa, assinale a alternativa CORRETA sobre seus componentes e falhas típicas:",
    "alternativas": [
      "A unidade evaporadora fica instalada na parte externa do prédio e abriga o compressor.",
      "A unidade evaporadora fica no ambiente interno (contendo serpentina, ventilador, filtro de ar e bandeja/dreno), enquanto a unidade condensadora fica na área externa (dissipando calor e abrigando o compressor).",
      "O gotejamento de água pela unidade interna (evaporadora) indica obrigatoriamente que o compressor queimou.",
      "Filtros de ar obstruídos por poeira melhoram o resfriamento e diminuem o consumo de energia elétrica.",
      "Os aparelhos tipo Janela possuem unidade condensadora separada instalada no telhado do prédio."
    ],
    "correta": 1,
    "explicacao": "No Split: Evaporadora = unidade interna (resfria o ar, tem filtro e dreno); Condensadora = unidade externa (dissipa calor e abriga o compressor). Gotejamento interno geralmente é dreno entupido/bandeja obstruída; filtro sujo piora o rendimento, aumenta o consumo e pode congelar a serpentina!"
  },
  {
    "id": "man-34",
    "topico": "Climatização — Manutenção de Filtros e Serpentinas",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Um aparelho de ar-condicionado Split apresenta baixo fluxo de ar frio, aumento do consumo elétrico e formação de gelo na serpentina da unidade interna. Antes de suspeitar de defeito grave no compressor, a primeira verificação básica de manutenção que deve ser feita é:",
    "alternativas": [
      "Aumentar a bitola do disjuntor no quadro elétrico.",
      "Verificar se os filtros de ar e a serpentina estão obstruídos por sujeira (realizando a limpeza adequada) e checar o funcionamento da turbina/ventilador e eventual vazamento de fluido refrigerante.",
      "Desconectar o tubo de dreno para melhorar a ventilação.",
      "Lavar a placa eletrônica da evaporadora com jato de água sob alta pressão.",
      "Cobrir completamente a saída de ar da condensadora externa."
    ],
    "correta": 1,
    "explicacao": "Filtros/serpentina entupidos reduzem a troca térmica e fazem a serpentina congelar (assim como falta de fluido refrigerante ou falha no ventilador interno). Nunca se lava placa eletrônica com jato d'água nem se obstrui a condensadora."
  },
  {
    "id": "man-35",
    "topico": "Equipamentos — Compressores de Ar",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Na manutenção preventiva de um compressor de ar comprimido utilizado na oficina de manutenção predial, qual procedimento periódico é essencial para evitar a corrosão interna do vaso de pressão (reservatório) e o comprometimento das ferramentas pneumáticas?",
    "alternativas": [
      "Retirar a válvula de segurança para evitar perda de pressão.",
      "Realizar a drenagem periódica da água condensada acumulada no fundo do reservatório (por meio do purgador/registro de dreno), além de verificar nível de óleo, tensão de correias e filtro de ar.",
      "Preencher metade do reservatório com óleo lubrificante para impedir entrada de umidade.",
      "Soldar chapas extras sobre o reservatório sempre que notar ferrugem superficial.",
      "Operar o compressor continuamente acima da pressão máxima indicada no manômetro."
    ],
    "correta": 1,
    "explicacao": "Ao comprimir ar úmido (especialmente no clima úmido do Pará!), há condensação constante de água dentro do tanque do compressor. A drenagem regular pelo purgador previne corrosão interna e risco de ruptura do vaso de pressão!"
  },
  {
    "id": "man-36",
    "topico": "Equipamentos — Bebedouros, Ventiladores e Compressores (Estilo CETAP)",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Sobre a manutenção preventiva de equipamentos auxiliares em repartições públicas (bebedouros, ventiladores e compressores de ar), analise os itens:\nI. Em bebedouros, deve-se trocar periodicamente o elemento filtrante conforme especificação do fabricante (em geral a cada 6 meses ou volume-limite) e higienizar reservatório e torneiras.\nII. Em ventiladores, a limpeza periódica das pás/grades e a verificação de rolamentos e capacitor evitam vibrações excessivas e superaquecimento do motor.\nIII. Em compressores de ar comprimido, a drenagem periódica da água condensada no reservatório (purga) previne corrosão interna e perda de capacidade útil.\nEstão CORRETOS:",
    "alternativas": [
      "Apenas I.",
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I e III.",
      "Todos os itens (I, II e III)."
    ],
    "correta": 4,
    "explicacao": "Todos os três itens apresentam procedimentos técnicos essenciais de manutenção preventiva de bebedouros, ventiladores e compressores prediais!"
  },
  {
    "id": "man-37",
    "topico": "Ferramentas Manuais e Elétricas",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Quanto ao uso adequado, conservação e segurança no manuseio de ferramentas manuais e elétricas na manutenção patrimonial, assinale a alternativa INCORRETA:",
    "alternativas": [
      "Antes de trocar brocas em furadeiras ou discos em esmerilhadeiras, a ferramenta deve ser desconectada da fonte de energia elétrica.",
      "Para serviços próximos a instalações elétricas, devem ser utilizadas ferramentas com cabos dotados de isolamento elétrico adequado (normatizado até 1.000 V).",
      "Pode-se utilizar uma chave de fenda comum como talhadeira ou alavanca, batendo com martelo em seu cabo, sempre que a ferramenta apropriada não estiver disponível.",
      "Chaves fixas ou combinadas devem ter o encaixe exato à cabeça do parafuso/porca, evitando folgas que danificam a peça e provocam acidentes.",
      "Após o uso, as ferramentas devem ser limpas, inspecionadas quanto a folgas ou cabos danificados e guardadas em local seco e organizado."
    ],
    "correta": 2,
    "explicacao": "A letra C está INCORRETA: improvisar ferramenta (usar chave de fenda como talhadeira/alavanca ou alicate como martelo) danifica o equipamento e é causa frequente de acidentes graves com estilhaços e lesões nas mãos."
  },
  {
    "id": "man-38",
    "topico": "Noções de Mecânica Básica e Lubrificação",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "No contexto da mecânica básica aplicada à conservação de máquinas, portas, portões, motores e equipamentos prediais, assinale a alternativa CORRETA sobre a lubrificação:",
    "alternativas": [
      "A lubrificação serve exclusivamente para fins estéticos, não interferindo na temperatura ou na vida útil dos componentes.",
      "A lubrificação reduz o atrito entre superfícies em movimento relativo, diminui o desgaste mecânico e o aquecimento, reduz ruídos e auxilia na proteção contra corrosão.",
      "Óleos e graxas de diferentes especificações podem ser misturados livremente sem perda de propriedades físico-químicas.",
      "Quanto maior o excesso de graxa colocado em um rolamento fechado, menor será a temperatura de operação do motor.",
      "Correias de borracha em sistemas de transmissão devem ser sempre untadas com óleo lubrificante para evitar ruído."
    ],
    "correta": 1,
    "explicacao": "Lubrificação reduz atrito, desgaste, calor e corrosão. Atenção às pegadinhas: excesso de graxa em rolamentos causa SUPERAQUECIMENTO (por batimento/atrito fluido), não se mistura lubrificantes incompatíveis e JAMAIS se passa óleo em correias de transmissão (faz patinar e degrada a borracha!)."
  },
  {
    "id": "man-39",
    "topico": "Controle de Ferramentas e Ordens de Serviço (OS)",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Para assegurar rastreabilidade, controle patrimonial de equipamentos e histórico confiável de manutenção na ALEPA, qual instrumento formal deve registrar a solicitação de reparo, o local, o bem/tombamento, os materiais empregados, o técnico executor e o encerramento da atividade?",
    "alternativas": [
      "Apenas um bilhete informal em papel avulso.",
      "Ordem de Serviço (OS) acompanhada de relatório de manutenção e controle de cautela de entrada/saída de ferramentas.",
      "Nota de empenho orçamentário do PPA.",
      "Ato de nomeação no Diário Oficial.",
      "Alvará judicial de funcionamento."
    ],
    "correta": 1,
    "explicacao": "A Ordem de Serviço (OS) é o documento técnico-administrativo que formaliza a demanda, registra a execução, controla custos/materiais e constrói o histórico de falhas de cada equipamento (fundamental para planejar manutenções preventivas e justificar baixa de bens antieconômicos!)."
  },
  {
    "id": "man-40",
    "topico": "Mecânica Básica — Transmissões e Fixações",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Em equipamentos prediais com transmissão por polias e correias (como exaustores e compressores), qual verificação mecânica básica evita desgaste prematuro, ruído excessivo e perda de eficiência?",
    "alternativas": [
      "Retirar a proteção metálica das polias para facilitar a inspeção visual com a máquina ligada.",
      "Conferir o alinhamento das polias, o estado de conservação (ausência de rachaduras/ressecamento) e a tensão adequada da correia — sempre com a máquina desligada e bloqueada.",
      "Deixar a correia completamente frouxa para poupar o eixo do motor.",
      "Aplicar graxa pesada nos canais da polia.",
      "Substituir parafusos de fixação por arame comum."
    ],
    "correta": 1,
    "explicacao": "Alinhamento das polias, tensão correta e integridade da correia garantem transmissão eficiente e vida útil dos rolamentos — sempre inspecionando com equipamento desligado/bloqueado e reinstalando a proteção de partes móveis antes de religar!"
  },
  {
    "id": "man-41",
    "topico": "Climatização — Parâmetros do PMOC e Responsabilidade Técnica",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "De acordo com a regulamentação sanitária correlata à Lei nº 13.589/2018 (PMOC), a exigência clássica de manutenção de um Responsável Técnico habilitado supervisionando o sistema de climatização aplica-se especialmente a edificações cuja soma da capacidade térmica dos equipamentos ultrapasse:",
    "alternativas": [
      "9.000 BTU/h (0,75 TR).",
      "18.000 BTU/h (1,5 TR).",
      "60.000 BTU/h (5 TR).",
      "600.000 BTU/h (50 TR).",
      "1.200.000 BTU/h (100 TR)."
    ],
    "correta": 2,
    "explicacao": "O marco clássico herdado da Portaria GM/MS nº 3.523/1998 e aplicado em conjunto com a Lei nº 13.589/2018 é a carga térmica acima de 60.000 BTU/h (5 TR) para obrigatoriedade de Responsável Técnico habilitado (sendo o PMOC obrigatório para todos os edifícios de uso público e coletivo)."
  },
  {
    "id": "man-42",
    "topico": "Manutenção — Relatórios de Ocorrências",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Ao identificar durante uma ronda rotineira uma fissura com infiltração próxima a um quadro elétrico energizado no subsolo da ALEPA, a conduta prioritária do Auxiliar Técnico Legislativo — Manutenção de Patrimônio deve ser:",
    "alternativas": [
      "Aguardar o fechamento do relatório mensal para mencionar o problema no próximo trimestre.",
      "Isolar/sinalizar a área para evitar risco imediato a pessoas e comunicar imediatamente à chefia superior registrando a ocorrência formalmente para providências urgentes.",
      "Limpar a água com pano úmido diretamente sobre os disjuntores energizados.",
      "Ignorar o fato, pois infiltrações não representam risco elétrico.",
      "Desligar a energia de todo o prédio sem avisar ninguém e abandonar o expediente."
    ],
    "correta": 1,
    "explicacao": "Água + quadro elétrico energizado representa risco grave e iminente de choque elétrico e curto-circuito/incêndio! A conduta correta (inclusive expressa na síntese do Cargo 03 no Anexo I) é isolar/sinalizar o risco e comunicar IMEDIATAMENTE à chefia, efetuando registro de ocorrência."
  },
  {
    "id": "man-43",
    "topico": "Segurança do Trabalho — NR-6 (Obrigações sobre EPI — Estilo CETAP)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Nos termos da Norma Regulamentadora nº 6 (NR-6), acerca dos Equipamentos de Proteção Individual (EPI), assinale a única alternativa INCORRETA:",
    "alternativas": [
      "Cabe ao empregador/órgão fornecer gratuitamente ao trabalhador o EPI adequado ao risco, em perfeito estado de conservação e funcionamento.",
      "Todo EPI comercializado e utilizado deve possuir Certificado de Aprovação (CA) expedido pelo órgão nacional competente em matéria de segurança e saúde no trabalho.",
      "Cabe ao empregador/órgão orientar, treinar o trabalhador sobre o uso adequado, guarda e conservação e exigir a utilização do EPI.",
      "Cabe ao trabalhador utilizar o EPI apenas para a finalidade a que se destina, responsabilizar-se pela guarda e conservação e comunicar qualquer alteração que o torne impróprio para uso.",
      "O valor de compra dos EPIs obrigatórios pode ser descontado mensalmente do salário do técnico de manutenção mesmo durante uso regular no serviço."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! Pela NR-6 e pela CLT, o fornecimento de EPI adequado ao risco é estritamente GRATUITO ao trabalhador (o desconto salarial é vedado!)."
  },
  {
    "id": "man-44",
    "topico": "Segurança do Trabalho — NR-35 (Trabalho em Altura)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "De acordo com a Norma Regulamentadora nº 35 (NR-35), considera-se TRABALHO EM ALTURA toda atividade executada:",
    "alternativas": [
      "Acima de 1,00 m do nível inferior, independentemente de haver risco de queda.",
      "Acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.",
      "Somente acima de 5,00 m de altura em fachadas externas.",
      "Apenas quando realizada sobre telhados inclinados acima de 10 metros.",
      "Acima de 3,50 m exclusivamente em obras de construção civil."
    ],
    "correta": 1,
    "explicacao": "Definição literal da NR-35 (item 35.1.2): considera-se trabalho em altura toda atividade executada ACIMA DE 2,00 m (dois metros) do nível inferior, onde haja risco de queda."
  },
  {
    "id": "man-45",
    "topico": "Segurança do Trabalho — NR-35 (Escadas, Andaimes e Quedas)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Um técnico precisa substituir luminárias no teto de um salão a 4 metros de altura próximo a pontos elétricos. À luz da NR-35 e das boas práticas com escadas e andaimes, assinale a alternativa CORRETA:",
    "alternativas": [
      "Deve-se utilizar preferencialmente escada de alumínio por ser mais leve e conduzir bem a eletricidade.",
      "É obrigatório possuir capacitação válida em NR-35 (reciclagem bienal), Análise de Risco, uso de escada isolante (fibra de vidro ou madeira) ou andaime devidamente travado com guarda-corpo e rodapé, além de cinturão tipo paraquedista ancorado em ponto seguro.",
      "O cinto abdominal simples (sem alças nos ombros e pernas) é o equipamento recomendado pela NR-35 para retenção de quedas.",
      "Andaimes móveis com rodízios podem ser deslocados com o trabalhador em cima da plataforma para economizar tempo.",
      "É permitido apoiar uma escada comum sobre caixas ou cadeiras para alcançar pontos mais altos."
    ],
    "correta": 1,
    "explicacao": "NR-35 exige capacitação (reciclagem a cada 2 anos), Análise de Risco, cinturão tipo PARAQUEDISTA (cinto abdominal é proibido para retenção de queda!), ponto de ancoragem adequado, escada isolante (fibra de vidro/madeira perto de eletricidade) e travamento total de andaimes (jamais mover com pessoa em cima!)."
  },
  {
    "id": "man-46",
    "topico": "Segurança do Trabalho — NR-26 (Cores de Segurança)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "De acordo com a Norma Regulamentadora nº 26 (NR-26 — Sinalização de Segurança), as cores padronizadas para identificar, respectivamente, (1) equipamentos de combate a incêndio, (2) cuidado/advertência (ex.: pisos escorregadios/corrimãos), (3) perigo (partes móveis de máquinas/interior de caixas elétricas) e (4) segurança/primeiros socorros são:",
    "alternativas": [
      "Vermelho — Amarelo — Laranja — Verde.",
      "Laranja — Vermelho — Amarelo — Azul.",
      "Vermelho — Verde — Azul — Amarelo.",
      "Amarelo — Vermelho — Verde — Laranja.",
      "Azul — Laranja — Vermelho — Branco."
    ],
    "correta": 0,
    "explicacao": "Cores clássicas da NR-26: Vermelho = incêndio/parada de emergência; Amarelo = cuidado/advertência; Laranja = perigo (partes móveis, interior de painéis elétricos); Verde = segurança (primeiros socorros, chuveiros de emergência, rotas de fuga)."
  },
  {
    "id": "man-47",
    "topico": "Prevenção de Incêndios — Tetraedro do Fogo (NR-23)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Na teoria da combustão adotada na prevenção e combate a incêndios (NR-23), o chamado TETRAEDRO DO FOGO é composto pelos seguintes quatro elementos:",
    "alternativas": [
      "Água, oxigênio, dióxido de carbono e calor.",
      "Combustível, comburente (oxigênio), calor e reação em cadeia.",
      "Combustível, eletricidade, fumaça e chama.",
      "Calor, resfriamento, abafamento e isolamento.",
      "Oxigênio, nitrogênio, pó químico e faísca."
    ],
    "correta": 1,
    "explicacao": "Tetraedro do Fogo = 4 elementos: Combustível + Comburente (em geral oxigênio) + Calor + Reação em Cadeia. Retirando-se qualquer um desses quatro elementos, extingue-se o fogo!"
  },
  {
    "id": "man-48",
    "topico": "Combate a Incêndios — Classes de Incêndio (Classe C)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Ocorreu um princípio de incêndio em um quadro de distribuição elétrica ENERGIZADO e em servidores de informática da ALEPA (incêndio Classe C). Qual agente extintor é o MAIS INDICADO por não conduzir eletricidade e não deixar resíduos que danifiquem circuitos eletrônicos?",
    "alternativas": [
      "Água Pressurizada (AP).",
      "Espuma Mecânica.",
      "Gás Carbônico (CO₂).",
      "Jato pleno de hidrante predial.",
      "Água com detergente."
    ],
    "correta": 2,
    "explicacao": "Para incêndio Classe C (equipamentos elétricos energizados), é PROIBIDO usar Água ou Espuma (conduzem eletricidade → choque fatal!). Usam-se CO₂ ou Pó Químico Seco, sendo o CO₂ o mais indicado em equipamentos eletrônicos/quadros sensíveis por ser um gás limpo que não deixa resíduos."
  },
  {
    "id": "man-49",
    "topico": "Combate a Incêndios — Classes A, B, D e K",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Assinale a alternativa que associa CORRETAMENTE a classe de incêndio ao tipo de material combustível:",
    "alternativas": [
      "Classe A: líquidos inflamáveis (gasolina e álcool); Classe B: madeira e papel.",
      "Classe A: sólidos comuns que deixam resíduos/brasas (papel, madeira, tecido); Classe B: líquidos e gases inflamáveis; Classe D: metais pirofóricos (magnésio, sódio); Classe K: óleos e gorduras de cozinha.",
      "Classe C: óleos vegetais em fritadeiras; Classe K: equipamentos elétricos energizados.",
      "Classe D: papel e papelão acumulados em arquivos.",
      "Classe B: exclusivamente equipamentos de informática energizados."
    ],
    "correta": 1,
    "explicacao": "Classificação oficial: A = sólidos comuns com brasa (madeira, papel, tecido); B = líquidos/gases inflamáveis (gasolina, álcool, GLP); C = elétricos energizados; D = metais combustíveis/pirofóricos; K = óleos e gorduras de cozinha."
  },
  {
    "id": "man-50",
    "topico": "Combate a Incêndios — Métodos de Extinção",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Ao combater um princípio de incêndio com extintor de Água Pressurizada em um foco de papel (Classe A) e com extintor de CO₂ em um líquido inflamável (Classe B), os métodos principais de extinção empregados são, respectivamente:",
    "alternativas": [
      "Abafamento (água) e Isolamento (CO₂).",
      "Resfriamento (água — reduz o calor) e Abafamento (CO₂ — desloca/reduz o oxigênio comburente).",
      "Extinção química exclusiva (água) e Resfriamento exclusivo (CO₂).",
      "Combustão espontânea e Pressurização.",
      "Aterramento e Condução térmica."
    ],
    "correta": 1,
    "explicacao": "A água atua principalmente por RESFRIAMENTO (retira o calor abaixo do ponto de combustão). O CO₂ atua principalmente por ABAFAMENTO (gás mais denso que o ar que desloca o oxigênio/comburente), além de leve resfriamento secundário."
  },
  {
    "id": "man-51",
    "topico": "Combate a Incêndios — Inspeção e Manutenção de Extintores",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Durante a inspeção visual periódica dos extintores de incêndio instalados nos corredores da ALEPA, o técnico de manutenção verifica que o ponteiro do manômetro de um extintor de pó químico está na faixa VERMELHA (despressurizado) e que há caixas de arquivo empilhadas na frente do abrigo do hidrante. Qual é a avaliação correta?",
    "alternativas": [
      "O extintor está normal (faixa vermelha indica carga máxima) e as caixas podem ficar ali temporariamente.",
      "Ambos constituem não conformidades graves: o manômetro deve estar na faixa VERDE (extintor despressurizado deve ser imediatamente substituído/enviado para recarga) e os acessos a extintores e hidrantes devem permanecer 100% desobstruídos e sinalizados.",
      "Basta agitar o extintor para o ponteiro retornar à faixa verde.",
      "Extintores de pó químico nunca precisam de recarga periódica enquanto o lacre estiver intacto.",
      "Hidrantes e mangotinhos só podem ser inspecionados pelo fabricante."
    ],
    "correta": 1,
    "explicacao": "Na inspeção de extintores: manômetro deve estar na faixa VERDE (vermelha = despressurizado/sobrecarregado → retirar e substituir imediatamente), lacre intacto, validade em dia (recarga em regra anual; teste hidrostático a cada 5 anos) e acesso totalmente livre e sinalizado."
  },
  {
    "id": "man-52",
    "topico": "Combate a Incêndios — Abandono de Edificação (NR-23)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Em caso de acionamento do alarme de incêndio e necessidade de abandono de edificação de múltiplos pavimentos, conforme a NR-23 e as normas de segurança contra incêndio, assinale a conduta CORRETA:",
    "alternativas": [
      "Utilizar os elevadores para evacuar os andares superiores com maior rapidez.",
      "Manter as portas das saídas de emergência trancadas a chave durante o expediente para evitar saída não autorizada.",
      "Descer ordenadamente pelas escadas e saídas de emergência (que devem abrir no sentido do fluxo de fuga e permanecer destrancadas e desobstruídas), NUNCA usar elevadores, proteger vias respiratórias e deslocar-se agachado se houver fumaça densa.",
      "Retornar imediatamente ao gabinete para recolher bolsas, notebooks e documentos pessoais.",
      "Abrir todas as janelas da sala em chamas para ventilar o fogo."
    ],
    "correta": 2,
    "explicacao": "Regras vitais de abandono: NUNCA usar elevadores (risco de pane elétrica e efeito chaminé), usar rotas/escadas de emergência (portas destrancadas abrindo no sentido da fuga), não retornar para buscar pertences e andar agachado em caso de fumaça (ar mais limpo e frio fica próximo ao piso)."
  },
  {
    "id": "man-53",
    "topico": "Primeiros Socorros — Choque Elétrico",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Um colega de manutenção sofre um choque elétrico ao encostar em uma máquina energizada e permanece preso ao condutor. Qual deve ser a PRIMEIRA atitude de primeiros socorros do servidor que presencia o acidente?",
    "alternativas": [
      "Segurar imediatamente os braços da vítima com as mãos nuas para puxá-la com força.",
      "Jogar um balde de água sobre a vítima para resfriar o corpo.",
      "NÃO tocar diretamente na vítima; desligar imediatamente a chave geral/disjuntor (ou, se impossível, afastar o fio com objeto seco e isolante como madeira seca) antes de prestar socorro e acionar o serviço de emergência (SAMU 192 / Bombeiros 193).",
      "Oferecer água com açúcar à vítima ainda em contato com o equipamento.",
      "Aguardar 10 minutos para ver se o disjuntor desarma sozinho."
    ],
    "correta": 2,
    "explicacao": "Em choque elétrico, a prioridade absoluta é a segurança do socorrista: JAMAIS tocar na vítima energizada! Desligue a energia na chave/disjuntor (ou afaste a fonte com material seco e isolante), só então avalie sinais vitais e acione socorro especializado."
  },
  {
    "id": "man-54",
    "topico": "Primeiros Socorros — Queimaduras",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Durante um reparo em tubulação de água quente ou solda, um técnico sofre uma queimadura de 2º grau (com formação de bolhas) no antebraço. A conduta correta de primeiros socorros consiste em:",
    "alternativas": [
      "Furar imediatamente todas as bolhas e aplicar pasta de dente ou manteiga sobre o local.",
      "Colocar gelo diretamente sobre a pele queimada por 30 minutos.",
      "Resfriar a região queimada com água corrente limpa em temperatura ambiente por cerca de 10 a 15 minutos, NÃO furar bolhas, NÃO aplicar pomadas caseiras/produtos estranhos e cobrir suavemente com gaze limpa/estéril encaminhando para atendimento médico.",
      "Esfregar álcool 70% sobre a ferida para desinfetar.",
      "Arrancar com força fragmentos de roupa que estejam grudados na pele queimada."
    ],
    "correta": 2,
    "explicacao": "Em queimaduras: água corrente em temperatura ambiente (nunca gelo direto!), não furar bolhas (protegem contra infecção), nunca passar manteiga/pasta de dente/café/álcool e nunca puxar roupas aderidas à pele."
  },
  {
    "id": "man-55",
    "topico": "Primeiros Socorros — Hemorragias, Desmaios e Choque Elétrico (Estilo CETAP)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Acerca das condutas corretas de primeiros socorros em ambiente de oficina e manutenção predial, analise as afirmativas:\nI. Em caso de hemorragia externa em membro, deve-se aplicar compressão direta e firme sobre o ferimento utilizando gaze ou pano limpo (preferencialmente com luvas descartáveis).\nII. Em episódio de desmaio (síncope) sem suspeita de trauma na coluna, recomenda-se deitar a vítima em local ventilado, afrouxar roupas apertadas e elevar suavemente as pernas.\nIII. Ao socorrer colega vítima de choque elétrico ainda em contato com condutor energizado, deve-se primeiro desligar a energia (disjuntor/chave geral) antes de tocar na pessoa.\nIV. Em caso de desmaio, deve-se oferecer imediatamente água ou café quente pela boca enquanto a pessoa ainda estiver inconsciente.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! IV é erro grave de primeiros socorros: NUNCA se oferece líquidos ou alimentos a pessoa inconsciente ou seminconsciente devido ao risco imediato de engasgo e broncoaspiração!"
  },
  {
    "id": "man-56",
    "topico": "Combate a Incêndios — Sistemas Fixos e Iluminação de Emergência (Estilo CETAP)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Sobre os sistemas fixos de segurança contra incêndio (hidrantes, alarmes e iluminação de emergência) em edifícios públicos, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "A iluminação de emergência deve acender automaticamente em caso de falha da rede elétrica normal, garantindo visibilidade das rotas de fuga e saídas de emergência.",
      "As luminárias de emergência necessitam de testes periódicos de autonomia de suas baterias.",
      "Abrigos de hidrantes, mangotinhos e extintores devem permanecer permanentemente desobstruídos e claramente sinalizados.",
      "Sinalizações fotoluminescentes auxiliam na orientação de abandono mesmo em ambientes com fumaça ou falta de iluminação.",
      "É permitido utilizar o interior da caixa de hidrante como depósito temporário de ferramentas e produtos de limpeza para economizar espaço nos corredores."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! Abrigos de hidrantes e áreas de acesso a extintores jamais podem ser obstruídos ou usados como depósito, pois qualquer segundo perdido compromete o combate a um princípio de incêndio."
  },
  {
    "id": "man-57",
    "topico": "ALEPA — Funções e Estrutura Organizacional",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "Sobre a Assembleia Legislativa do Estado do Pará (ALEPA), suas funções e estrutura institucional, assinale a alternativa CORRETA:",
    "alternativas": [
      "A ALEPA exerce exclusivamente a função de executar obras viárias em todo o Estado do Pará.",
      "As funções típicas da ALEPA são legislar e fiscalizar (controle externo com auxílio do TCE-PA), exercendo também funções atípicas como administrar sua própria estrutura interna, servidores e patrimônio.",
      "A Mesa Diretora da ALEPA é nomeada livremente pelo Governador do Estado.",
      "O Plenário não possui competência deliberativa, cabendo todas as decisões finais às unidades administrativas.",
      "A ALEPA é composta por 24 Deputados Estaduais com mandato de dois anos."
    ],
    "correta": 1,
    "explicacao": "Funções típicas do Poder Legislativo = legislar e fiscalizar; atípicas = administrar (organizar seus serviços, servidores, patrimônio e licitações) e julgar em hipóteses constitucionais. A ALEPA tem 41 Deputados Estaduais (legislatura de 4 anos) e Mesa Diretora eleita pelos próprios parlamentares."
  },
  {
    "id": "man-58",
    "topico": "RJU-PA (Lei nº 5.810/1994) — Deveres e Proibições",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "À luz dos deveres e proibições do servidor público previstos na Lei Estadual nº 5.810/1994 (RJU-PA), assinale a alternativa CORRETA:",
    "alternativas": [
      "O servidor é obrigado a cumprir todas as ordens superiores, mesmo quando forem manifestamente ilegais.",
      "Constitui dever expresso do servidor zelar pela economia do material e pela conservação do patrimônio público, sendo-lhe proibido utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares.",
      "O servidor pode levar ferramentas elétricas da ALEPA para reformas em sua residência particular nos fins de semana, desde que as devolva na segunda-feira.",
      "É permitido ao servidor retirar objetos da repartição sem prévia anuência da autoridade competente.",
      "A penalidade mais branda aplicável por descumprimento de deveres no RJU-PA denomina-se advertência oral informal."
    ],
    "correta": 1,
    "explicacao": "Lei Estadual nº 5.810/1994: zelar pela economia do material e conservação do patrimônio público é DEVER expresso; utilizar recursos materiais da repartição em atividades particulares ou retirar objetos sem prévia anuência é PROIBIÇÃO! Ordens manifestamente ilegais NÃO devem ser cumpridas; e a pena leve no RJU-PA é REPREENSÃO por escrito."
  },
  {
    "id": "man-59",
    "topico": "Relacionamento Interpessoal e Gestão de Conflitos",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "Durante uma manutenção corretiva urgente em um gabinete, dois servidores divergem sobre o melhor horário para desligar o circuito de iluminação, gerando tensão no ambiente. Aplicando os princípios de relacionamento interpessoal e gestão de conflitos no serviço público, a postura mais adequada do técnico de manutenção é:",
    "alternativas": [
      "Elevar o tom de voz para impor sua autoridade técnica e desligar a energia sem aviso prévio.",
      "Praticar a escuta ativa, manter a calma e a cordialidade, explicar com clareza os riscos técnicos envolvidos e negociar de forma colaborativa um procedimento seguro que atenda à urgência com o menor transtorno possível.",
      "Abandonar o serviço e comentar negativamente sobre o colega nos corredores da Casa.",
      "Transferir a responsabilidade do conflito para o público externo.",
      "Executar o serviço elétrico com o circuito ligado apenas para evitar diálogo com o setor."
    ],
    "correta": 1,
    "explicacao": "Gestão construtiva de conflitos no setor público combina escuta ativa, empatia, cordialidade, comunicação clara/assertiva e foco na solução segura e colaborativa (jamais abrindo mão da segurança!)."
  },
  {
    "id": "man-60",
    "topico": "Noções de Gestão — Priorização de Demandas e Ciclo PDCA",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "A equipe de manutenção recebe quatro chamados simultâneos na segunda-feira pela manhã: (1) troca de placa decorativa de porta; (2) vazamento ativo de água próximo a um quadro de distribuição elétrica; (3) pintura estética de corredor sem risco; (4) solicitação de orçamento de cadeira nova. Segundo os critérios de priorização de demandas e gestão do trabalho, qual chamado deve ser atendido EM PRIMEIRO LUGAR, e qual ferramenta de melhoria contínua organiza as etapas Planejar–Executar–Verificar–Agir?",
    "alternativas": [
      "Chamado 1 (placa decorativa) e Matriz 5W2H.",
      "Chamado 2 (vazamento próximo ao quadro elétrico — risco iminente à segurança) e Ciclo PDCA.",
      "Chamado 3 (pintura estética) e Fluxograma linear.",
      "Chamado 4 (orçamento) e Curva ABC.",
      "Atender estritamente por ordem alfabética do solicitante e Diagrama de Venn."
    ],
    "correta": 1,
    "explicacao": "Na gestão de manutenção, demandas com risco à integridade de pessoas ou danos graves ao patrimônio (vazamento próximo a eletricidade!) têm PRIORIDADE MÁXIMA absoluta. A ferramenta Planejar–Executar–Verificar–Agir é o Ciclo PDCA."
  },
  {
    "id": "man-61",
    "topico": "Gestão Patrimonial — Tombamento e Movimentação",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "No setor de patrimônio de um órgão público, um computador de mesa e um aparelho de ar-condicionado recém-adquiridos são identificados com plaquetas numeradas únicas, cadastrados no sistema contábil e vinculados a um chefe de setor. Posteriormente, o computador precisa ser transferido para outro departamento. Os instrumentos correspondentes a esses dois atos são, respectivamente:",
    "alternativas": [
      "Baixa patrimonial e Leilão administrativo.",
      "Tombamento (com Termo de Responsabilidade) e Guia/Termo de Movimentação (Transferência) Patrimonial.",
      "Inventário de extinção e Desfazimento.",
      "Depreciação acelerada e Eliminação documental.",
      "Conferência informal e Cautela verbal."
    ],
    "correta": 1,
    "explicacao": "Tombamento = registro contábil + plaqueta patrimonial + Termo de Responsabilidade. Qualquer mudança de sala/setor de um bem permanente exige formalização por Guia/Termo de Movimentação (Transferência) para manter o controle de quem detém a guarda!"
  },
  {
    "id": "man-62",
    "topico": "Gestão Patrimonial — Inventário e Classificação de Bens Inservíveis",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "Durante o inventário patrimonial anual da ALEPA, a comissão encontra: (I) impressoras novas e funcionando perfeitamente, mas sem uso no depósito; e (II) um aparelho de ar-condicionado antigo cujo conserto custaria 85% do valor de um equipamento novo. Na classificação de bens para fins de desfazimento, os bens I e II são classificados, respectivamente, como:",
    "alternativas": [
      "Irrecuperáveis e Ociosos.",
      "Ociosos e Irrecuperáveis (ou antieconômicos quando a manutenção é onerosa).",
      "Recuperáveis e Ociosos.",
      "Permanentes ativos e Materiais de consumo.",
      "Inalienáveis e Imprescritíveis."
    ],
    "correta": 1,
    "explicacao": "Classificação clássica de bens inservíveis: Ocioso = em perfeitas condições, mas sem aproveitamento; Recuperável = reparo ≤ 50% do valor de mercado; Antieconômico = manutenção onerosa ou rendimento precário; Irrecuperável = não serve mais ou custo de recuperação > 50% do valor de mercado."
  },
  {
    "id": "man-63",
    "topico": "Sustentabilidade na Administração Pública",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "A equipe de Manutenção de Patrimônio substituiu 120 lâmpadas fluorescentes tubulares antigas (que contêm vapor de mercúrio) por lâmpadas LED de maior eficiência energética. Quanto ao descarte das lâmpadas fluorescentes queimadas/retiradas, a conduta ambientalmente correta e alinhada à sustentabilidade na Administração Pública é:",
    "alternativas": [
      "Quebrar todas as lâmpadas dentro de sacos pretos comuns para reduzir o volume no lixo orgânico.",
      "Armazená-las intactas em embalagens adequadas e encaminhá-las para coleta/descarte especializado por meio de logística reversa ou empresa licenciada para descontaminação de resíduos perigosos.",
      "Enterrá-las no jardim externo da repartição.",
      "Descartá-las junto com o papel reciclável da coleta seletiva comum.",
      "Jogar os tubos diretamente nas caçambas de entulho de obra."
    ],
    "correta": 1,
    "explicacao": "Lâmpadas fluorescentes contêm mercúrio (metal pesado tóxico!). Pela Política Nacional de Resíduos Sólidos (Lei 12.305/2010), estão sujeitas à LOGÍSTICA REVERSA e descarte ambientalmente adequado sem quebra dos tubos (assim como pilhas, baterias, óleos lubrificantes e lixo eletrônico)."
  },
  {
    "id": "man-64",
    "topico": "Sustentabilidade — Eficiência Energética",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "Assinale a alternativa que apresenta um conjunto de práticas CORRETAS de uso racional de energia elétrica na manutenção predial de órgãos públicos:",
    "alternativas": [
      "Manter aparelhos de ar-condicionado ajustados em 16 °C com portas e janelas abertas para renovar o ar.",
      "Limpeza periódica dos filtros de ar-condicionado, regulagem térmica adequada (23 °C–24 °C), vedação de portas/janelas climatizadas, substituição de lâmpadas antigas por LED, instalação de sensores de presença em corredores/banheiros e eliminação de fugas/maus contatos elétricos.",
      "Deixar computadores, monitores e luminárias ligados durante toda a madrugada para evitar desgaste dos interruptores.",
      "Usar extensões múltiplas sobrecarregadas em vez de circuitos dedicados.",
      "Desativar o monitoramento de consumo elétrico mensal do edifício."
    ],
    "correta": 1,
    "explicacao": "Eficiência energética predial alia tecnologia (LED, sensores de presença, equipamentos selo Procel A), operação racional (23–24 °C com ambiente fechado) e manutenção preventiva (filtros limpos e instalações elétricas sem fuga ou mau contato)."
  },
  {
    "id": "man-65",
    "topico": "Atendimento às Demandas Internas e Qualidade",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "No atendimento às demandas dos setores e usuários internos da ALEPA, a postura profissional esperada do Auxiliar Técnico Legislativo — Manutenção de Patrimônio caracteriza-se por:",
    "alternativas": [
      "Atender primeiro os pedidos de amigos pessoais, independentemente da gravidade técnica dos demais chamados.",
      "Qualidade técnica, cortesia, presteza, organização do local após o serviço (deixando o ambiente limpo e seguro), sigilo sobre documentos vistos nos gabinetes e registro formal da conclusão da Ordem de Serviço.",
      "Realizar reparos provisórios precários sem informar à chefia para encerrar rapidamente os chamados.",
      "Deixar sobras de fios, ferramentas e poeira nos gabinetes para que a equipe de limpeza recolha posteriormente.",
      "Recusar-se a explicar ao setor solicitante a previsão de conclusão do reparo."
    ],
    "correta": 1,
    "explicacao": "Excelência no atendimento interno em manutenção envolve presteza, cortesia, impessoalidade (prioridade por critério técnico/risco), qualidade na execução, limpeza/organização pós-serviço, respeito ao sigilo institucional dos gabinetes e registro formal da OS."
  },
  {
    "id": "man-66",
    "topico": "Asserção-Razão — Proteção Elétrica NBR 5410 (DR, DTM e DPS — Estilo CETAP)",
    "materialSecao": "man-eletricidade",
    "enunciado": "Analise as duas asserções a seguir e a relação proposta entre elas, com base na ABNT NBR 5410:\n\nI. Em quadros de distribuição de prédios públicos, o Dispositivo Diferencial Residual (DR) de alta sensibilidade (30 mA) é obrigatório em circuitos de áreas molhadas e tomadas externas, porém NÃO dispensa a instalação de disjuntores termomagnéticos (DTM) nem do Dispositivo de Proteção contra Surtos (DPS).\n\n**PORQUE**\n\nII. Cada dispositivo atua sobre um fenômeno distinto: o DR protege pessoas contra choques por fuga de corrente à terra, o DTM protege os condutores contra sobrecarga e curto-circuito, e o DPS desvia surtos transitórios de tensão (como descargas atmosféricas) para o sistema de aterramento.\n\nA respeito dessas asserções, assinale a alternativa CORRETA:",
    "alternativas": [
      "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
      "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.",
      "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
      "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
      "As asserções I e II são proposições falsas."
    ],
    "correta": 0,
    "explicacao": "Formato Asserção-Razão (PORQUE) no padrão CETAP! Ambas as asserções são verdadeiras e a II explica perfeitamente a complementaridade entre DR, DTM e DPS na NBR 5410."
  },
  {
    "id": "man-67",
    "topico": "Asserção-Razão — NR-10 (Desenergização e Reenergização — Estilo CETAP)",
    "materialSecao": "man-eletricidade",
    "enunciado": "Analise as duas asserções a seguir e a relação proposta entre elas, conforme o item 10.5 da Norma Regulamentadora nº 10 (NR-10):\n\nI. Para que uma instalação elétrica seja considerada efetivamente desenergizada e liberada para manutenção, basta desligar o disjuntor geral no quadro de distribuição, sendo dispensável constatar a ausência de tensão com instrumento adequado.\n\n**PORTANTO**\n\nII. A NR-10 estabelece uma sequência obrigatória de procedimentos para desenergização — seccionamento, impedimento de reenergização, constatação da ausência de tensão, instalação de aterramento temporário com equipotencialização, proteção dos elementos energizados na zona controlada e instalação de sinalização de impedimento.\n\nA respeito dessas asserções, assinale a alternativa CORRETA:",
    "alternativas": [
      "As asserções I e II são proposições verdadeiras, e a II é uma consequência lógica correta da I.",
      "As asserções I e II são proposições verdadeiras, mas a II não decorre logicamente da I.",
      "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
      "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
      "As asserções I e II são proposições falsas."
    ],
    "correta": 3,
    "explicacao": "Padrão Asserção-Razão da CETAP! A asserção I é FALSA (desligar apenas o disjuntor NÃO garante desenergização — exige-se bloqueio e constatação de ausência de tensão!). A asserção II é VERDADEIRA, reproduzindo exatamente os 6 passos do item 10.5.1 da NR-10."
  },
  {
    "id": "man-68",
    "topico": "Asserção-Razão — Climatização e Lei do PMOC (Lei nº 13.589/2018 — Estilo CETAP)",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Analise as duas asserções a seguir e a relação proposta entre elas sobre sistemas de climatização em edifícios públicos:\n\nI. Nos termos da Lei Federal nº 13.589/2018, todos os edifícios de uso público e coletivo que possuem ambientes de ar interior climatizado artificialmente devem dispor de um Plano de Manutenção, Operação e Controle (PMOC) dos respectivos sistemas de climatização.\n\n**PORQUE**\n\nII. A execução periódica do PMOC — incluindo limpeza de filtros, bandejas de condensado, serpentinas e controle da qualidade do ar — tem por finalidade eliminar ou minimizar riscos potenciais à saúde dos ocupantes (como fungos, bactérias e 'síndrome do edifício doente'), além de reduzir o consumo de energia elétrica.\n\nA respeito dessas asserções, assinale a alternativa CORRETA:",
    "alternativas": [
      "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
      "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.",
      "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
      "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
      "As asserções I e II são proposições falsas."
    ],
    "correta": 0,
    "explicacao": "Ambas as asserções são verdadeiras (art. 1º da Lei nº 13.589/2018) e a II justifica exatamente a obrigatoriedade legal e técnica do PMOC em prédios públicos."
  },
  {
    "id": "man-69",
    "topico": "Instalações Hidráulicas e Sanitárias — NBR 5626 e NBR 8160 (Estilo CETAP)",
    "materialSecao": "man-hidraulica",
    "enunciado": "O técnico Eduardo realiza inspeção hidráulica e sanitária nos banheiros e reservatórios da ALEPA. À luz das normas ABNT NBR 5626 e NBR 8160, analise as afirmativas:\nI. O **registro de gaveta** destina-se a operar totalmente aberto ou totalmente fechado para bloqueio de manutenção, não devendo ser usado para regulagem parcial de vazão.\nII. O **fecho hídrico** (camada líquida mantida no interior de sifões e caixas sifonadas) impede o retorno de gases fétidos e vetores da rede de esgoto para os ambientes internos.\nIII. A **tubulação de PVC marrom (soldável)** para água fria suporta continuamente água quente pressurizada a 70 °C sem deformação, substituindo perfeitamente o CPVC ou PPR.\nIV. Recomenda-se realizar a limpeza e desinfecção periódica das caixas d'água e cisternas a cada 6 meses (semestralmente), mantendo a tampa hermeticamente vedada.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e IV.",
      "II e III.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e IV estão corretas! III é falsa (pegadinha clássica): PVC rígido marrom é exclusivo para ÁGUA FRIA; água quente exige CPVC, PPR, PEX ou cobre!"
  },
  {
    "id": "man-70",
    "topico": "Gestão da Manutenção — Preventiva, Preditiva, Corretiva e OS (Estilo CETAP)",
    "materialSecao": "man-maquinas-climatizacao",
    "enunciado": "Sobre os tipos de manutenção predial e o controle operacional por Ordens de Serviço (OS), analise os itens abaixo:\nI. A **manutenção preventiva** é planejada em intervalos pré-definidos (tempo ou horas de uso) para reduzir a probabilidade de falhas, como a limpeza periódica de filtros e reaperto programado de barramentos.\nII. A **manutenção preditiva** baseia-se no monitoramento contínuo ou periódico de parâmetros reais do equipamento (termografia, análise de vibração, ultrassom) para intervir somente quando há indício objetivo de degradação.\nIII. A **manutenção corretiva não planejada** ocorre após a quebra ou falha inesperada do ativo, geralmente implicando custos maiores e indisponibilidade imediata do serviço.\nIV. A **Ordem de Serviço (OS)** registra solicitante, local, diagnóstico, peças utilizadas, técnico executor e data de encerramento, formando o histórico essencial do patrimônio.\nEstão CORRETOS:",
    "alternativas": [
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I, II e III.",
      "Apenas I, III e IV.",
      "Todos os itens (I, II, III e IV)."
    ],
    "correta": 4,
    "explicacao": "Todos os quatro itens (I, II, III e IV) apresentam definições rigorosamente precisas da engenharia de manutenção predial."
  },
  {
    "id": "man-71",
    "topico": "Segurança do Trabalho — NR-6 (EPI/EPC) e NR-35 (Trabalho em Altura — Estilo CETAP)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Acerca das Normas Regulamentadoras NR-6 e NR-35 aplicadas à manutenção predial em órgãos públicos, analise as proposições abaixo:\nI. Segundo a NR-35, considera-se trabalho em altura toda atividade executada acima de **2,00 metros** do nível inferior, onde haja risco de queda.\nII. Na hierarquia das medidas de proteção contra riscos ocupacionais, os **Equipamentos de Proteção Coletiva (EPC)** têm prioridade sobre os **Equipamentos de Proteção Individual (EPI)**.\nIII. De acordo com a NR-6, o EPI fornecido ao trabalhador deve possuir Certificado de Aprovação (CA) válido, sendo dever do empregador/órgão fornecê-lo gratuitamente e exigir seu uso.\nIV. Para trocar luminárias a 4 metros de altura próximo a circuitos elétricos energizados, recomenda-se o uso de escada metálica de alumínio sem cinto paraquedista para facilitar o deslocamento.\nEstão CORRETAS apenas as proposições:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! IV viola gravemente a NR-10 e a NR-35: próximo à eletricidade deve-se usar escada ISOLANTE (fibra de vidro, NUNCA alumínio!) e acima de 2,00 m é obrigatório sistema de proteção contra quedas (cinturão tipo paraquedista + talabarte/trava-quedas em ponto de ancoragem)."
  },
  {
    "id": "man-72",
    "topico": "Incêndio e Sinalização — NR-23 e NR-26 (Estilo CETAP)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Na prevenção e combate a incêndios (NR-23) e sinalização de segurança (NR-26) em edificações públicas, analise as afirmativas:\nI. Os elementos do **Tetraedro do Fogo** são: combustível, comburente (oxigênio), calor (energia de ativação) e reação em cadeia.\nII. Em princípios de incêndio **Classe C** (equipamentos elétricos energizados), deve-se utilizar extintor de **CO₂** (gás carbônico) ou **Pó Químico Seco (PQS)**, sendo proibido o uso de água pressurizada ou espuma.\nIII. Na NR-26, a cor **vermelha** identifica equipamentos de combate a incêndio, a cor **amarela** indica cuidado/atenção e a cor **verde** caracteriza segurança (como caixas de primeiros socorros e rotas seguras).\nIV. Durante o abandono de emergência em incêndio, os servidores devem utilizar prioritariamente os elevadores comuns para evacuar mais rápido os andares superiores.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! IV é erro fatal de segurança: em caso de incêndio, NUNCA se utilizam elevadores (risco de falta de energia, aprisionamento e chaminé de fumaça); a evacuação deve ser feita exclusivamente pelas escadas de emergência sinalizadas!"
  },
  {
    "id": "man-73",
    "topico": "Primeiros Socorros na Manutenção Predial (Estilo CETAP)",
    "materialSecao": "man-seguranca-incendio",
    "enunciado": "Durante uma rotina de manutenção na oficina da ALEPA, podem ocorrer acidentes exigindo atendimento inicial correto até a chegada do socorro especializado (SAMU 192 / Bombeiros 193). Assinale a única alternativa INCORRETA sobre primeiros socorros:",
    "alternativas": [
      "Em caso de choque elétrico em que a vítima permaneça presa ao condutor energizado, a primeira providência segura é desligar a fonte de energia (disjuntor/chave geral) antes de tocar na vítima.",
      "Em queimaduras térmicas de 1º ou 2º grau, deve-se resfriar a região com água corrente limpa em temperatura ambiente e proteger o local sem estourar eventuais bolhas.",
      "Em hemorragia externa de membro, a medida prioritária é exercer compressão direta e firme sobre o ferimento utilizando gaze ou pano limpo (usando luvas de proteção, se disponíveis).",
      "Em episódio de desmaio (síncope) sem suspeita de trauma, deve-se deitar a pessoa em local arejado, afrouxar roupas apertadas e elevar levemente as pernas para favorecer o retorno venoso.",
      "Em queimaduras de 2º grau com bolhas, deve-se perfurar imediatamente todas as bolhas e aplicar pasta de dente, manteiga ou pó de café sobre a lesão para selar a pele."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! Nunca se estouram bolhas de queimadura (elas protegem a derme contra infecção) e jamais se aplicam produtos caseiros (pasta de dente, manteiga, café, óleo), pois retêm calor e contaminam a ferida."
  },
  {
    "id": "man-74",
    "topico": "RJU-PA (Lei nº 5.810/1994) — Deveres, Proibições e Posse (Estilo CETAP)",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "Paulo, recém-aprovado para o cargo de Auxiliar Técnico Legislativo — Manutenção de Patrimônio da ALEPA, estuda seus direitos, deveres e proibições na Lei Estadual nº 5.810/1994 (RJU-PA). Assinale a única alternativa INCORRETA:",
    "alternativas": [
      "Zelar pela economia do material e pela conservação do patrimônio público constitui dever expresso do servidor público estadual.",
      "Guardar sigilo sobre assunto da repartição e tratar com urbanidade as pessoas são deveres funcionais previstos no Estatuto.",
      "É proibido ao servidor retirar, sem prévia anuência da autoridade competente, qualquer documento ou objeto da repartição, bem como utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares.",
      "O prazo legal para a posse no RJU-PA é de 30 dias contados da publicação do ato de provimento, prorrogável por mais 15 dias em caso de necessidade comprovada.",
      "É permitido ao servidor de manutenção utilizar livremente ferramentas, materiais elétricos e veículos oficiais da ALEPA em reformas particulares nos finais de semana, desde que os devolva na segunda-feira."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! Utilizar recursos materiais, ferramentas ou pessoal da repartição em serviços particulares é PROIBIÇÃO grave prevista na Lei Estadual nº 5.810/1994 (podendo acarretar inclusive penalidade de demissão e improbidade administrativa)."
  },
  {
    "id": "man-75",
    "topico": "Gestão Patrimonial, Bens Inservíveis e Sustentabilidade (Estilo CETAP)",
    "materialSecao": "man-alepa-gestao-patrimonio",
    "enunciado": "Acerca da gestão patrimonial de bens permanentes e das práticas de sustentabilidade na manutenção predial de órgãos públicos, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "O tombamento de um bem permanente compreende o registro no sistema patrimonial, a fixação de plaqueta/etiqueta de identificação e a emissão de Termo de Responsabilidade para o setor detentor da guarda.",
      "Qualquer transferência definitiva de mobiliário ou equipamento tombado entre gabinetes deve ser formalizada por Termo ou Guia de Movimentação Patrimonial.",
      "Na classificação de bens inservíveis, um bem em perfeitas condições de uso, porém sem aproveitamento no órgão, classifica-se como **ocioso**, enquanto aquele cujo reparo ultrapassa 50% do valor de mercado classifica-se como **irrecuperável**.",
      "Lâmpadas fluorescentes queimadas, pilhas, baterias e resíduos eletroeletrônicos contêm metais pesados e devem ser destinados à logística reversa ou descarte ambientalmente licenciado, nunca quebrados no lixo comum.",
      "Para agilizar a rotina dos setores, o técnico de manutenção pode remanejar livremente computadores e condicionadores de ar tombados entre diretorias sem qualquer registro no sistema patrimonial."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! A movimentação informal de bens permanentes sem registro patrimonial quebra a cadeia de responsabilidade dos Termos de Guarda e gera divergências graves no inventário anual."
  }
];
