window.BANCO_QUESTOES = window.BANCO_QUESTOES || {};

window.BANCO_QUESTOES.especificos_manutencao = [
  /* ===== BLOCO 1: ELETRICIDADE, NBR 5410, NBR 14136 E NR-10 (man-01 a man-16) ===== */
  {
    id: "man-01",
    topico: "Eletricidade — Lei de Ohm e Potência",
    materialSecao: "man-eletricidade",
    enunciado: "Um equipamento elétrico resistivo instalado em um gabinete da ALEPA opera sob tensão de 220 V e é percorrido por uma corrente elétrica de 5 A. Aplicando a Lei de Ohm e a relação de potência elétrica, os valores da resistência elétrica e da potência dissipada são, respectivamente:",
    alternativas: [
      "44 Ω e 1.100 W.",
      "1.100 Ω e 44 W.",
      "225 Ω e 440 W.",
      "22 Ω e 550 W.",
      "44 Ω e 440 W."
    ],
    correta: 0,
    explicacao: "Pela Lei de Ohm: R = V / I = 220 / 5 = 44 Ω. Pela fórmula da potência: P = V · I = 220 × 5 = 1.100 W."
  },
  {
    id: "man-02",
    topico: "Eletricidade — Circuitos em Série e Paralelo",
    materialSecao: "man-eletricidade",
    enunciado: "Sobre as características dos circuitos elétricos ligados em série e em paralelo em instalações prediais, assinale a alternativa CORRETA:",
    alternativas: [
      "Em uma ligação em série, a tensão elétrica é exatamente a mesma em todos os aparelhos e a queima de uma lâmpada não afeta as demais.",
      "Nas instalações prediais de iluminação e tomadas, as cargas são ligadas em paralelo para que recebam a mesma tensão nominal e funcionem de maneira independente.",
      "Na associação em paralelo de resistores idênticos, a resistência equivalente é sempre maior do que a soma das resistências individuais.",
      "Em uma associação em série, a corrente elétrica se divide proporcionalmente entre os componentes.",
      "Em um circuito paralelo, se uma única lâmpada queimar, todas as demais lâmpadas do mesmo circuito se apagam imediatamente."
    ],
    correta: 1,
    explicacao: "No circuito em paralelo, todos os pontos recebem a mesma tensão (ex.: 127 V ou 220 V) e a interrupção de um ramo não interrompe os outros. Na série, a corrente é a mesma, a tensão se divide e a abertura de um ponto desliga todo o circuito."
  },
  {
    id: "man-03",
    topico: "Eletricidade — Resistência Equivalente",
    materialSecao: "man-eletricidade",
    enunciado: "Considere três resistores idênticos de 6 Ω cada. Os valores da resistência equivalente quando ligados em SÉRIE e quando ligados em PARALELO são, respectivamente:",
    alternativas: [
      "18 Ω e 2 Ω.",
      "2 Ω e 18 Ω.",
      "12 Ω e 3 Ω.",
      "18 Ω e 6 Ω.",
      "9 Ω e 1 Ω."
    ],
    correta: 0,
    explicacao: "Em série: R_eq = 6 + 6 + 6 = 18 Ω. Em paralelo (resistores iguais): R_eq = R / n = 6 / 3 = 2 Ω."
  },
  {
    id: "man-04",
    topico: "Eletricidade — CC, CA e Sistemas de Fornecimento",
    materialSecao: "man-eletricidade",
    enunciado: "Acerca de corrente contínua (CC), corrente alternada (CA) e sistemas monofásico, bifásico e trifásico, assinale a alternativa CORRETA:",
    alternativas: [
      "A rede pública de distribuição de energia elétrica no Brasil fornece corrente contínua com frequência de 120 Hz.",
      "A corrente contínua mantém sentido constante de fluxo (como em pilhas e baterias), enquanto a corrente alternada inverte periodicamente seu sentido (60 Hz na rede brasileira).",
      "O sistema monofásico utiliza obrigatoriamente três condutores fase e nenhum condutor neutro.",
      "Motores elétricos de grande porte, elevadores e bombas de alta potência em prédios públicos utilizam preferencialmente sistemas monofásicos simples em vez de trifásicos.",
      "O sistema bifásico dispensa qualquer tipo de disjuntor de proteção."
    ],
    correta: 1,
    explicacao: "CC (DC) tem polaridade/sentido constante (baterias, pilhas, circuitos eletrônicos); CA (AC) alterna de sentido a 60 Hz na rede pública brasileira. Sistemas trifásicos (3 fases + neutro) alimentam cargas de maior potência como bombas e elevadores."
  },
  {
    id: "man-05",
    topico: "ABNT NBR 5410 — Cores dos Condutores",
    materialSecao: "man-eletricidade",
    enunciado: "De acordo com a norma ABNT NBR 5410 (Instalações Elétricas de Baixa Tensão), a padronização obrigatória das cores da isolação dos condutores NEUTRO e de PROTEÇÃO (Terra / PE) é, respectivamente:",
    alternativas: [
      "Preto (neutro) e vermelho (proteção).",
      "Azul-claro (neutro) e verde ou verde-amarelo (proteção).",
      "Verde (neutro) e azul-claro (proteção).",
      "Branco (neutro) e marrom (proteção).",
      "Vermelho (neutro) e cinza (proteção)."
    ],
    correta: 1,
    explicacao: "NBR 5410: Condutor Neutro = obrigatoriamente AZUL-CLARO; Condutor de Proteção (PE/Terra) = obrigatoriamente VERDE ou VERDE-AMARELO (dupla coloração). Fases usam outras cores (preto, vermelho, marrom, etc.)."
  },
  {
    id: "man-06",
    topico: "ABNT NBR 5410 — Dispositivo DR",
    materialSecao: "man-eletricidade",
    enunciado: "Na proteção de instalações elétricas prediais de baixa tensão (ABNT NBR 5410), o Dispositivo Diferencial Residual (DR) de alta sensibilidade (30 mA) tem como finalidade primordial:",
    alternativas: [
      "Substituir o aterramento em prédios antigos, dispensando a instalação do condutor de proteção.",
      "Proteger equipamentos eletrônicos exclusivamente contra descargas atmosféricas (raios) na rede externa.",
      "Proteger pessoas e animais contra choques elétricos, detectando fugas de corrente para a terra e seccionando rapidamente o circuito.",
      "Aumentar a tensão nominal da rede de 127 V para 220 V em circuitos de iluminação.",
      "Impedir exclusivamente sobrecargas térmicas em cabos subdimensionados."
    ],
    correta: 2,
    explicacao: "O DR (30 mA) compara a corrente que entra e sai do circuito; havendo diferença ≥ 30 mA (fuga de corrente — ex.: pessoa tomando choque), desliga em milissegundos, protegendo vidas! (Raios = DPS; sobrecarga/curto-circuito = Disjuntor Termomagnético)."
  },
  {
    id: "man-07",
    topico: "ABNT NBR 5410 — DPS e Disjuntores",
    materialSecao: "man-eletricidade",
    enunciado: "Assinale a alternativa que relaciona CORRETAMENTE cada dispositivo de proteção instalado no quadro de distribuição elétrica à sua função principal segundo a ABNT NBR 5410:",
    alternativas: [
      "Disjuntor termomagnético protege contra sobrecarga e curto-circuito; DPS protege contra surtos de tensão (sobretensões transitórias, como descargas atmosféricas).",
      "DPS protege exclusivamente contra curto-circuito entre fase e neutro; Disjuntor protege contra raios.",
      "Disjuntor termomagnético substitui o DR na proteção contra choques por fuga de 30 mA.",
      "DPS funciona desconectado do barramento de aterramento do quadro.",
      "Eletrodutos têm a função de conduzir corrente elétrica no lugar do condutor neutro."
    ],
    correta: 0,
    explicacao: "DTM (Disjuntor Termomagnético) atua em sobrecargas (térmico) e curtos-circuitos (magnético). DPS (Dispositivo de Proteção contra Surtos) desvia picos de tensão transitórios (raios/manobras) para o sistema de aterramento."
  },
  {
    id: "man-08",
    topico: "ABNT NBR 14136 — Tomadas e Plugues",
    materialSecao: "man-eletricidade",
    enunciado: "De acordo com o padrão brasileiro de plugues e tomadas (ABNT NBR 14136), sobre os modelos de 10 A e 20 A, assinale a alternativa CORRETA:",
    alternativas: [
      "O plugue de 20 A possui pinos de 4,0 mm e encaixa perfeitamente em tomadas de 10 A.",
      "A tomada de 20 A possui orifícios de 4,8 mm, aceitando tanto plugues de 20 A (4,8 mm) quanto de 10 A (4,0 mm); já a tomada de 10 A impede o encaixe de plugues de 20 A por segurança contra sobrecarga.",
      "O terceiro pino central corresponde ao condutor neutro e pode ser cortado sem perda de segurança.",
      "Aparelhos de alta potência como fornos micro-ondas e secadores devem utilizar adaptadores ('benjamins') em tomadas de 10 A.",
      "As tomadas de 10 A e 20 A possuem exatamente o mesmo diâmetro de pinos, diferindo apenas na cor do espelho plástico."
    ],
    correta: 1,
    explicacao: "NBR 14136: 10 A = pinos de 4,0 mm; 20 A = pinos de 4,8 mm. A tomada de 20 A aceita ambos os plugues, mas a tomada de 10 A bloqueia fisicamente o plugue de 20 A para evitar sobrecarga e incêndio. O pino central é o TERRA (PE) e jamais deve ser cortado."
  },
  {
    id: "man-09",
    topico: "Eletricidade — Interruptores e Esquemas Elétricos",
    materialSecao: "man-eletricidade",
    enunciado: "Em um longo corredor administrativo da ALEPA, deseja-se acender e apagar o mesmo conjunto de luminárias a partir de DOIS pontos distintos (início e fim do corredor). Além disso, por norma de segurança, qual condutor deve ser seccionado pelo interruptor?",
    alternativas: [
      "Interruptor simples; deve seccionar o condutor Neutro.",
      "Interruptor paralelo (three-way); deve seccionar o condutor Fase.",
      "Interruptor paralelo (three-way); deve seccionar o condutor de Proteção (Terra).",
      "Interruptor simples em série; deve seccionar o condutor Neutro e o Terra juntos.",
      "Interruptor intermediário isolado; dispensa condutor de retorno."
    ],
    correta: 1,
    explicacao: "Para comandar uma lâmpada de 2 pontos distintos usa-se um par de interruptores paralelos (three-way). Por segurança (NBR 5410), o interruptor SEMPRE secciona o condutor FASE, evitando que o soquete fique energizado com a lâmpada apagada!"
  },
  {
    id: "man-10",
    topico: "Instrumentos de Medição — Multímetro",
    materialSecao: "man-eletricidade",
    enunciado: "Na utilização correta do multímetro digital durante diagnósticos em instalações elétricas prediais, assinale a alternativa CORRETA:",
    alternativas: [
      "Para medir a tensão elétrica (voltímetro), as pontas de prova devem ser ligadas em série, interrompendo o fio do circuito.",
      "Para medir resistência elétrica ou continuidade (ohmímetro), o circuito deve estar obrigatoriamente DESENERGIZADO.",
      "Para medir resistência elétrica, recomenda-se manter o disjuntor ligado para aumentar a precisão do display.",
      "Ao medir tensão alternada da rede predial (127 V / 220 V), deve-se selecionar a escala de corrente contínua (DCV / V⎓).",
      "O multímetro não possui capacidade para testar continuidade de cabos ou fusíveis."
    ],
    correta: 1,
    explicacao: "Regra fundamental: medição de resistência/continuidade (Ω) exige circuito 100% DESENERGIZADO (caso contrário queima o aparelho e oferece risco!). Tensão (V) mede-se em PARALELO na escala ACV (V~) para rede predial."
  },
  {
    id: "man-11",
    topico: "Instrumentos de Medição — Alicate Amperímetro",
    materialSecao: "man-eletricidade",
    enunciado: "Um técnico de manutenção utiliza um alicate amperímetro para medir a corrente de operação de um aparelho de ar-condicionado ligado. Para obter uma leitura correta sem desligar o equipamento, o técnico deve:",
    alternativas: [
      "Abraçar com a garra do alicate o cabo completo (fase, neutro e terra juntos) ao mesmo tempo.",
      "Envolver com a garra do alicate apenas UM condutor (por exemplo, somente o condutor fase) por vez.",
      "Cortar o condutor fase e conectar o alicate amperímetro em paralelo com a tomada.",
      "Desligar o disjuntor geral antes de realizar a medição de corrente de carga.",
      "Selecionar a escala de resistência (Ω) para medir corrente em ampères."
    ],
    correta: 1,
    explicacao: "O alicate amperímetro mede o campo magnético induzido pela corrente. Se abraçar fase e neutro juntos, as correntes em sentidos opostos anulam o campo magnético e o visor marca zero! Por isso, deve-se envolver apenas UM condutor por vez."
  },
  {
    id: "man-12",
    topico: "Diagnóstico de Falhas Elétricas",
    materialSecao: "man-eletricidade",
    enunciado: "Durante uma vistoria preventiva no quadro de distribuição de um setor, o técnico observa sinais de derretimento na isolação de um cabo conectado ao borne de um disjuntor, acompanhado de aquecimento excessivo no ponto de conexão e oscilações de luz. A falha mais provável nesse ponto específico é:",
    alternativas: [
      "Atuação normal do DPS.",
      "Mau contato elétrico (conexão frouxa ou oxidada), que eleva a resistência de contato e gera efeito Joule (superaquecimento).",
      "Falta de lâmpadas LED no circuito.",
      "Excesso de aterramento no quadro.",
      "Redução da frequência da rede para 30 Hz."
    ],
    correta: 1,
    explicacao: "Conexões frouxas ou oxidadas provocam MAU CONTATO, elevando a resistência elétrica no ponto de junção. Pela Lei de Joule (P = R·I²), isso gera intenso aquecimento localizado, derretimento de isolação, centelhamento e risco grave de incêndio."
  },
  {
    id: "man-13",
    topico: "Diagnóstico de Falhas — Fuga de Corrente",
    materialSecao: "man-eletricidade",
    enunciado: "Sempre que um bebedouro metálico é ligado na tomada da copa, o dispositivo DR do quadro de distribuição desarma instantaneamente, embora o disjuntor termomagnético permaneça armado. Esse comportamento indica tipicamente:",
    alternativas: [
      "Defeito obrigatório no disjuntor geral do prédio.",
      "Fuga de corrente elétrica (falha de isolação interna) para a carcaça metálica/terra do equipamento.",
      "Queda de tensão momentânea na concessionária de energia.",
      "Que o equipamento está consumindo menos corrente do que o normal.",
      "Ausência de filtro de água no bebedouro."
    ],
    correta: 1,
    explicacao: "Desarme do DR sem desarme do disjuntor termomagnético é o sintoma clássico de FUGA DE CORRENTE (isolação comprometida vazando corrente para a carcaça/terra). O DR agiu corretamente evitando um choque elétrico!"
  },
  {
    id: "man-14",
    topico: "NR-10 — Sequência de Desenergização",
    materialSecao: "man-eletricidade",
    enunciado: "Nos termos do item 10.5.1 da Norma Regulamentadora nº 10 (NR-10), para que uma instalação elétrica seja considerada efetivamente DESENERGIZADA e liberada para trabalho, devem ser cumpridos 6 procedimentos em sequência rigorosa. Os TRÊS PRIMEIROS passos dessa sequência são:",
    alternativas: [
      "1º Sinalização; 2º Aterramento temporário; 3º Seccionamento.",
      "1º Seccionamento; 2º Impedimento de reenergização; 3º Constatação da ausência de tensão.",
      "1º Constatação da ausência de tensão; 2º Seccionamento; 3º Proteção de elementos energizados.",
      "1º Aterramento temporário; 2º Seccionamento; 3º Impedimento de reenergização.",
      "1º Impedimento de reenergização; 2º Sinalização; 3º Constatação da ausência de tensão."
    ],
    correta: 1,
    explicacao: "Sequência obrigatória da NR-10 (item 10.5.1): 1º Seccionamento → 2º Impedimento de reenergização (bloqueio) → 3º Constatação da ausência de tensão → 4º Aterramento temporário com equipotencialização → 5º Proteção dos elementos energizados na zona controlada → 6º Sinalização de impedimento de reenergização."
  },
  {
    id: "man-15",
    topico: "NR-10 — Bloqueio, Sinalização e Reenergização",
    materialSecao: "man-eletricidade",
    enunciado: "De acordo com a NR-10, acerca do bloqueio, sinalização e estado de desenergização durante intervenções em quadros elétricos, assinale a alternativa CORRETA:",
    alternativas: [
      "Basta avisar verbalmente os colegas da sala para impedir que alguém religue o disjuntor durante a manutenção.",
      "O procedimento de bloqueio (travamento com cadeado/dispositivo mecânico) e etiqueta de sinalização garante o impedimento de reenergização acidental, e a reenergização só ocorre na ordem inversa após retirada de ferramentas e pessoal.",
      "Apenas desligar o interruptor de parede dispensa o seccionamento no quadro de disjuntores para serviços de troca de fiação.",
      "O servidor pode trabalhar usando anéis, relógios e pulseiras metálicas se estiver usando luvas comuns de algodão.",
      "Após o seccionamento, é dispensável constatar a ausência de tensão com instrumento de medição."
    ],
    correta: 1,
    explicacao: "A NR-10 exige impedimento físico (travamento/cadeado) + sinalização, proibição de adornos pessoais metálicos (item 10.2.9.3), constatação efetiva da ausência de tensão e reenergização na sequência inversa após retirada de todos os trabalhadores não envolvidos e ferramentas."
  },
  {
    id: "man-16",
    topico: "Eletricidade — Consumo de Energia (kWh)",
    materialSecao: "man-eletricidade",
    enunciado: "Um conjunto de refletores de 2.000 W (2 kW) de um auditório permaneceu ligado por 5 horas diárias durante 20 dias úteis em um mês. O consumo total de energia elétrica desse conjunto no mês foi de:",
    alternativas: [
      "100 kWh.",
      "200 kWh.",
      "400 kWh.",
      "2.000 kWh.",
      "50 kWh."
    ],
    correta: 1,
    explicacao: "Energia (kWh) = Potência (kW) × Tempo total (h). Tempo total = 5 h/dia × 20 dias = 100 horas. Energia = 2 kW × 100 h = 200 kWh."
  },

  /* ===== BLOCO 2: INSTALAÇÕES HIDRÁULICAS E SANITÁRIAS (man-17 a man-29) ===== */
  {
    id: "man-17",
    topico: "Hidráulica — ABNT NBR 5626 e NBR 8160",
    materialSecao: "man-hidraulica",
    enunciado: "No âmbito das instalações prediais brasileiras, as normas técnicas ABNT NBR 5626 e ABNT NBR 8160 regulamentam, respectivamente:",
    alternativas: [
      "Instalações elétricas de baixa tensão (NBR 5626) e tomadas/plugues (NBR 8160).",
      "Sistemas prediais de água fria e água quente (NBR 5626) e sistemas prediais de esgoto sanitário (NBR 8160).",
      "Sistemas de esgoto sanitário (NBR 5626) e prevenção de incêndios (NBR 8160).",
      "Sistemas de climatização (NBR 5626) e redes de águas pluviais (NBR 8160).",
      "Elevadores prediais (NBR 5626) e caixas d'água industriais (NBR 8160)."
    ],
    correta: 1,
    explicacao: "ABNT NBR 5626 = Sistemas prediais de água fria e água quente (atualizada unificando água fria e quente). ABNT NBR 8160 = Sistemas prediais de esgoto sanitário."
  },
  {
    id: "man-18",
    topico: "Hidráulica — Registros de Gaveta e de Pressão",
    materialSecao: "man-hidraulica",
    enunciado: "Na manutenção hidráulica de banheiros e copas de um prédio público, há diferença técnica fundamental entre o Registro de Gaveta e o Registro de Pressão. Assinale a alternativa CORRETA:",
    alternativas: [
      "O registro de gaveta deve operar preferencialmente semiaberto para regular a vazão de chuveiros.",
      "O registro de gaveta destina-se exclusivamente ao fechamento ou abertura TOTAL do fluxo (manutenção de ramais), enquanto o registro de pressão destina-se a regular/controlar a vazão em pontos de utilização (como chuveiros).",
      "O registro de pressão não pode ser instalado em chuveiros por suportar apenas água quente.",
      "Ambos os registros possuem exatamente o mesmo mecanismo interno e podem ser trocados indistintamente sem perda de durabilidade.",
      "O registro de gaveta impede automaticamente o refluxo da água em bombas de recalque."
    ],
    correta: 1,
    explicacao: "Regra clássica de hidráulica: Registro de GAVETA = abre tudo ou fecha tudo (bloqueio para manutenção; operar meia-abertura danifica a cunha!). Registro de PRESSÃO = controla/regula a vazão (chuveiros/duchas). Impedir refluxo = Válvula de Retenção."
  },
  {
    id: "man-19",
    topico: "Hidráulica — Válvula de Retenção e Válvula de Pé",
    materialSecao: "man-hidraulica",
    enunciado: "Em um sistema de bombeamento que eleva água da cisterna (reservatório inferior) para a caixa d'água superior, qual componente é instalado na tubulação de recalque para permitir o escoamento em APENAS UM SENTIDO e impedir o retorno da coluna d'água sobre a bomba quando ela desliga?",
    alternativas: [
      "Registro de pressão.",
      "Válvula de retenção.",
      "Sifão articulado.",
      "Caixa de gordura.",
      "Arejador de vazão."
    ],
    correta: 1,
    explicacao: "A Válvula de Retenção (unidirecional) permite o fluxo somente no sentido de recalque e bloqueia automaticamente o retorno da água quando a bomba desliga, protegendo o rotor contra golpe de aríete e esvaziamento da coluna."
  },
  {
    id: "man-20",
    topico: "Esgoto Sanitário — Fecho Hídrico e Desconector (NBR 8160)",
    materialSecao: "man-hidraulica",
    enunciado: "Em um sanitário da ALEPA, servidores relatam forte odor de esgoto vindo do ralo do piso e da pia. Segundo a ABNT NBR 8160, o elemento responsável por formar o FECHO HÍDRICO (barreira líquida com altura mínima de 50 mm) que impede a passagem de gases do esgoto para os ambientes é:",
    alternativas: [
      "O registro de gaveta.",
      "O desconector (sifão ou caixa sifonada).",
      "A válvula de retenção de recalque.",
      "A torneira de boia.",
      "O hidrômetro predial."
    ],
    correta: 1,
    explicacao: "Pela NBR 8160, o desconector (sifão ou caixa sifonada) mantém uma lâmina d'água permanente (fecho hídrico ≥ 50 mm) que bloqueia a passagem de gases fétidos do esgoto para o ambiente interno."
  },
  {
    id: "man-21",
    topico: "Esgoto Sanitário — Tubo de Ventilação e Caixa de Gordura",
    materialSecao: "man-hidraulica",
    enunciado: "Acerca dos subsistemas de esgoto sanitário regidos pela ABNT NBR 8160, assinale a alternativa CORRETA:",
    alternativas: [
      "O subsistema de ventilação serve para equalizar as pressões atmosféricas na tubulação de esgoto, evitando o rompimento do fecho hídrico dos desconectores por sucção (sifonamento).",
      "A caixa de gordura deve receber obrigatoriamente os despejos dos vasos sanitários para facilitar a limpeza.",
      "As tubulações de esgoto sanitário funcionam sob alta pressão positiva gerada por pressurizadores.",
      "As caixas de inspeção são lacradas permanentemente com concreto para impedir qualquer manutenção futura.",
      "Os ralos secos dispensam caixa sifonada quando conectados diretamente à coluna principal de esgoto."
    ],
    correta: 0,
    explicacao: "A ventilação do esgoto equilibra pressões, impedindo a perda do fecho hídrico e encaminhando gases para a atmosfera acima da cobertura. A caixa de gordura recebe APENAS efluentes de pias de cozinha/copa (jamais vasos sanitários!), e o esgoto trabalha por gravidade."
  },
  {
    id: "man-22",
    topico: "Hidráulica — Limpeza e Desinfecção de Reservatórios",
    materialSecao: "man-hidraulica",
    enunciado: "Quanto à limpeza, desinfecção e periodicidade de manutenção de reservatórios de água potável (caixas d'água e cisternas) em prédios públicos, assinale a alternativa CORRETA:",
    alternativas: [
      "A limpeza deve ser realizada a cada 5 anos, utilizando-se detergente neutro e escova de aço para remover o lodo.",
      "Recomenda-se a limpeza e desinfecção semestral (a cada 6 meses), utilizando escova macia ou pano limpo (sem sabão/detergente) e solução desinfetante à base de hipoclorito de sódio (água sanitária), com posterior enxágue e vedação adequada da tampa.",
      "A tampa da caixa d'água deve permanecer entreaberta para permitir a entrada de luz solar direta e evitar fungos.",
      "O tubo extravasor ('ladrão') deve permanecer completamente destelado para facilitar a saída de água em caso de transbordamento.",
      "É dispensável esvaziar e fechar o registro de entrada antes de iniciar a higienização do reservatório."
    ],
    correta: 1,
    explicacao: "Padrão sanitário e ABNT NBR 5626: limpeza/desinfecção a cada 6 meses; usar escova macia (nunca escova de aço nem sabão/detergente); desinfecção com hipoclorito de sódio (água sanitária); manter tampa vedada e extravasor protegido por tela contra insetos e vetores."
  },
  {
    id: "man-23",
    topico: "Hidráulica — Bombas de Recalque e Pressurizadores",
    materialSecao: "man-hidraulica",
    enunciado: "Qual é a principal diferença funcional entre uma BOMBA DE RECALQUE e um PRESSURIZADOR em instalações hidráulicas prediais?",
    alternativas: [
      "A bomba de recalque aquece a água para chuveiros, enquanto o pressurizador filtra impurezas sólidas.",
      "A bomba de recalque transfere água de um reservatório inferior (cisterna) para um reservatório superior, enquanto o pressurizador aumenta a pressão nos ramais/pontos de consumo quando a pressão por gravidade é insuficiente.",
      "O pressurizador substitui a tubulação de esgoto sanitário nos andares superiores.",
      "A bomba de recalque funciona exclusivamente sem energia elétrica.",
      "Não existe diferença técnica: ambos têm a única função de drenar água de chuva."
    ],
    correta: 1,
    explicacao: "Bomba de recalque eleva a água do reservatório inferior para o superior; pressurizador eleva a pressão nos pontos de utilização (muito usado no último pavimento onde a altura da caixa d'água gera pouca carga hidráulica)."
  },
  {
    id: "man-24",
    topico: "Hidráulica — Aparelhos Sanitários e Descargas",
    materialSecao: "man-hidraulica",
    enunciado: "Em um banheiro institucional, o vaso sanitário com caixa acoplada apresenta fluxo contínuo de água escorrendo para a bacia mesmo sem acionamento da descarga, gerando grande desperdício. As causas mais comuns dessa falha são:",
    alternativas: [
      "Obstrução da caixa de gordura ou falta de tubo de ventilação.",
      "Desregulagem/defeito na boia de entrada (permitindo que a água transborde pelo extravasor interno) ou desgaste/sujeira na vedação do obturador (torre de saída).",
      "Excesso de pressão na rede de esgoto pluvial.",
      "Ausência de registro de pressão no lavatório ao lado.",
      "Queima da resistência elétrica do chuveiro."
    ],
    correta: 1,
    explicacao: "Em caixas acopladas, o vazamento contínuo na bacia quase sempre decorre da torre de entrada/boia desregulada (nível acima do ladrão interno) ou da borracha de vedação do mecanismo de saída (obturador) ressecada/desalinhada."
  },
  {
    id: "man-25",
    topico: "Hidráulica — Materiais para Água Fria e Água Quente",
    materialSecao: "man-hidraulica",
    enunciado: "Na manutenção de tubulações prediais, qual material NÃO é tecnicamente adequado para condução de ÁGUA QUENTE sob pressão, devendo ser restrito a água fria?",
    alternativas: [
      "Cobre.",
      "CPVC (Policloreto de Vinila Clorado).",
      "PPR (Polipropileno Copolímero Random).",
      "PVC rígido marrom comum (soldável para água fria).",
      "PEX (Polietileno Reticulado) específico para água quente."
    ],
    correta: 3,
    explicacao: "O PVC rígido marrom comum suporta apenas água fria (temperatura ambiente até ~20–45 °C); com água quente ele amolece, deforma e rompe! Para água quente utilizam-se CPVC, PPR, cobre ou PEX."
  },
  {
    id: "man-26",
    topico: "Hidráulica — Vazamentos e Reparos em Torneiras",
    materialSecao: "man-hidraulica",
    enunciado: "Uma torneira convencional (de vedação por compressão) continua pingando mesmo quando o volante está completamente fechado. O primeiro procedimento técnico de manutenção após fechar o registro do ambiente consiste em:",
    alternativas: [
      "Quebrar a parede para substituir toda a coluna de água fria.",
      "Desmontar o mecanismo/castelo da torneira para inspecionar e substituir o vedante de borracha ('carrapeta') ou o reparo/anel de vedação desgastado.",
      "Aplicar cola de PVC diretamente na saída do arejador.",
      "Substituir a caixa d'água superior.",
      "Aumentar a pressão do pressurizador do prédio."
    ],
    correta: 1,
    explicacao: "Gotejamento com torneira fechada em modelos convencionais decorre tipicamente do desgaste do vedante ('carrapeta') ou do mecanismo de vedação (ou cartucho cerâmico em modelos de 1/4 de volta), resolvido de forma simples após fechar o registro de gaveta."
  },
  {
    id: "man-27",
    topico: "Hidráulica — Detecção de Vazamentos Ocultos e Infiltrações",
    materialSecao: "man-hidraulica",
    enunciado: "Para verificar rapidamente se há um vazamento oculto no ramal alimentado diretamente pela rede pública (antes do reservatório), qual teste prático simples o técnico de manutenção pode executar?",
    alternativas: [
      "Abrir todas as torneiras do edifício ao mesmo tempo e observar a cor da água.",
      "Fechar todos os pontos de consumo e travar a boia do reservatório (ou fechar seu registro de entrada) e observar se o ponteiro/indicador do hidrômetro continua girando.",
      "Desligar a bomba de recalque durante 5 minutos e medir a tensão elétrica.",
      "Retirar o fecho hídrico de todos os sifões do banheiro.",
      "Jogar detergente na caixa de inspeção de esgoto."
    ],
    correta: 1,
    explicacao: "Com todos os pontos de consumo e a entrada da caixa fechados, o hidrômetro deve ficar completamente parado. Se continuar registrando passagem de água, há vazamento na tubulação entre o cavalete/hidrômetro e o reservatório!"
  },
  {
    id: "man-28",
    topico: "Hidráulica — Entupimentos e Boas Práticas",
    materialSecao: "man-hidraulica",
    enunciado: "Ao realizar a desobstrução de pias e ralos em copas e banheiros institucionais, assinale a conduta tecnicamente RECOMENDADA e segura:",
    alternativas: [
      "Despejar soda cáustica pura em grandes quantidades e água fervente dentro de tubulações de PVC sem EPI.",
      "Utilizar métodos mecânicos adequados (desentupidor de borracha, desmontagem e limpeza do sifão, cabo flexível desentupidor) usando luvas e óculos de proteção, além de promover limpeza preventiva periódica da caixa de gordura.",
      "Introduzir vergalhões metálicos pontiagudos batendo com marreta dentro de joelhos de PVC.",
      "Remover permanentemente a grade dos ralos para facilitar a passagem de resíduos sólidos.",
      "Descartar óleo de cozinha usado diretamente na pia com água fria."
    ],
    correta: 1,
    explicacao: "Soda cáustica gera reação exotérmica violenta (danifica PVC, endurece gordura virando sabão sólido e causa queimaduras químicas graves!). A boa prática prioriza desobstrução mecânica (limpeza do sifão, cabo flexível), uso de EPI e manutenção preventiva da caixa de gordura."
  },
  {
    id: "man-29",
    topico: "Hidráulica — Uso Racional da Água",
    materialSecao: "man-hidraulica",
    enunciado: "Assinale a alternativa que apresenta medidas EFETIVAS para o uso racional da água em edifícios públicos como a ALEPA:",
    alternativas: [
      "Substituição de caixas acopladas por válvulas antigas desreguladas de fluxo contínuo.",
      "Instalação de torneiras com arejadores ou fechamento hidromecânico/temporizado, descargas de duplo acionamento (3L/6L), inspeção periódica de vazamentos e aproveitamento de água da chuva/condensado de ar-condicionado para fins não potáveis.",
      "Aumento indiscriminado da pressão de recalque em todos os pavimentos.",
      "Lavagem diária de calçadas e estacionamentos utilizando mangueira aberta em alta vazão.",
      "Retirada dos hidrômetros setoriais para reduzir custos de leitura."
    ],
    correta: 1,
    explicacao: "Dispositivos economizadores (arejadores, temporizadores, duplo acionamento 3L/6L), monitoramento de vazamentos e reuso de água não potável (chuva ou dreno de ar-condicionado para limpeza/rega) são práticas consolidadas de eficiência hídrica."
  },

  /* ===== BLOCO 3: MÁQUINAS, EQUIPAMENTOS, CLIMATIZAÇÃO E PMOC (man-30 a man-42) ===== */
  {
    id: "man-30",
    topico: "Manutenção — Preventiva, Corretiva e Preditiva",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Um técnico realiza inspeções com câmera termográfica nos quadros elétricos da ALEPA e mede a vibração de rolamentos de bombas d'água em funcionamento, identificando aquecimento anormal em um disjuntor antes que ele falhe e agendando sua substituição. Essa modalidade de manutenção é classificada como:",
    alternativas: [
      "Manutenção Corretiva não planejada.",
      "Manutenção Preventiva por tempo fixo.",
      "Manutenção Preditiva.",
      "Manutenção Emergencial de quebra.",
      "Manutenção de Desfazimento."
    ],
    correta: 2,
    explicacao: "Manutenção PREDITIVA monitora condições/parâmetros reais do equipamento em operação (termografia, vibração, ruído, análise de óleo) para prever o desgaste e intervir antes da falha. Preventiva = intervalos fixos de tempo/uso; Corretiva = após a falha."
  },
  {
    id: "man-31",
    topico: "Manutenção — Classificação de Intervenções",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Associe corretamente os exemplos abaixo aos respectivos tipos de manutenção:\nI. Troca mensal programada ou limpeza quinzenal dos filtros de ar-condicionado conforme cronograma.\nII. Substituição imediata de um capacitor queimado após o ventilador parar de funcionar.\nIII. Monitoramento periódico da corrente elétrica e temperatura de motores para detectar desgaste iminente.\nA sequência correta é:",
    alternativas: [
      "I – Corretiva; II – Preditiva; III – Preventiva.",
      "I – Preventiva; II – Corretiva; III – Preditiva.",
      "I – Preditiva; II – Preventiva; III – Corretiva.",
      "I – Preventiva; II – Preditiva; III – Corretiva.",
      "I – Corretiva; II – Preventiva; III – Preditiva."
    ],
    correta: 1,
    explicacao: "I = Preventiva (programada em calendário fixo); II = Corretiva (após a quebra/parada); III = Preditiva (monitoramento de grandezas para antecipar a falha)."
  },
  {
    id: "man-32",
    topico: "Climatização — Lei do PMOC (Lei nº 13.589/2018)",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "De acordo com a Lei Federal nº 13.589/2018, o Plano de Manutenção, Operação e Controle (PMOC) dos sistemas de climatização é:",
    alternativas: [
      "Facultativo para órgãos públicos estaduais, aplicando-se apenas a shopping centers privados.",
      "Obrigatório em todos os edifícios de uso público e coletivo que possuem ambientes de ar interior climatizado artificialmente, visando eliminar ou minimizar riscos potenciais à saúde dos ocupantes.",
      "Destinado exclusivamente à redução da conta de energia elétrica, sem relação com a qualidade do ar interior.",
      "Dispensado em prédios que utilizam aparelhos do tipo Split.",
      "Executado uma única vez na inauguração do edifício, sem necessidade de registros periódicos."
    ],
    correta: 1,
    explicacao: "A Lei nº 13.589/2018 torna o PMOC OBRIGATÓRIO para todos os edifícios de uso público e coletivo com ambientes climatizados artificialmente, focando na qualidade do ar interior e prevenção de riscos à saúde (como fungos, bactérias e Síndrome do Edifício Doente)."
  },
  {
    id: "man-33",
    topico: "Climatização — Ar-Condicionado Janela e Split",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Em um aparelho de ar-condicionado do tipo SPLIT instalado em um gabinete da Assembleia Legislativa, assinale a alternativa CORRETA sobre seus componentes e falhas típicas:",
    alternativas: [
      "A unidade evaporadora fica instalada na parte externa do prédio e abriga o compressor.",
      "A unidade evaporadora fica no ambiente interno (contendo serpentina, ventilador, filtro de ar e bandeja/dreno), enquanto a unidade condensadora fica na área externa (dissipando calor e abrigando o compressor).",
      "O gotejamento de água pela unidade interna (evaporadora) indica obrigatoriamente que o compressor queimou.",
      "Filtros de ar obstruídos por poeira melhoram o resfriamento e diminuem o consumo de energia elétrica.",
      "Os aparelhos tipo Janela possuem unidade condensadora separada instalada no telhado do prédio."
    ],
    correta: 1,
    explicacao: "No Split: Evaporadora = unidade interna (resfria o ar, tem filtro e dreno); Condensadora = unidade externa (dissipa calor e abriga o compressor). Gotejamento interno geralmente é dreno entupido/bandeja obstruída; filtro sujo piora o rendimento, aumenta o consumo e pode congelar a serpentina!"
  },
  {
    id: "man-34",
    topico: "Climatização — Manutenção de Filtros e Serpentinas",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Um aparelho de ar-condicionado Split apresenta baixo fluxo de ar frio, aumento do consumo elétrico e formação de gelo na serpentina da unidade interna. Antes de suspeitar de defeito grave no compressor, a primeira verificação básica de manutenção que deve ser feita é:",
    alternativas: [
      "Aumentar a bitola do disjuntor no quadro elétrico.",
      "Verificar se os filtros de ar e a serpentina estão obstruídos por sujeira (realizando a limpeza adequada) e checar o funcionamento da turbina/ventilador e eventual vazamento de fluido refrigerante.",
      "Desconectar o tubo de dreno para melhorar a ventilação.",
      "Lavar a placa eletrônica da evaporadora com jato de água sob alta pressão.",
      "Cobrir completamente a saída de ar da condensadora externa."
    ],
    correta: 1,
    explicacao: "Filtros/serpentina entupidos reduzem a troca térmica e fazem a serpentina congelar (assim como falta de fluido refrigerante ou falha no ventilador interno). Nunca se lava placa eletrônica com jato d'água nem se obstrui a condensadora."
  },
  {
    id: "man-35",
    topico: "Equipamentos — Compressores de Ar",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Na manutenção preventiva de um compressor de ar comprimido utilizado na oficina de manutenção predial, qual procedimento periódico é essencial para evitar a corrosão interna do vaso de pressão (reservatório) e o comprometimento das ferramentas pneumáticas?",
    alternativas: [
      "Retirar a válvula de segurança para evitar perda de pressão.",
      "Realizar a drenagem periódica da água condensada acumulada no fundo do reservatório (por meio do purgador/registro de dreno), além de verificar nível de óleo, tensão de correias e filtro de ar.",
      "Preencher metade do reservatório com óleo lubrificante para impedir entrada de umidade.",
      "Soldar chapas extras sobre o reservatório sempre que notar ferrugem superficial.",
      "Operar o compressor continuamente acima da pressão máxima indicada no manômetro."
    ],
    correta: 1,
    explicacao: "Ao comprimir ar úmido (especialmente no clima úmido do Pará!), há condensação constante de água dentro do tanque do compressor. A drenagem regular pelo purgador previne corrosão interna e risco de ruptura do vaso de pressão!"
  },
  {
    id: "man-36",
    topico: "Equipamentos — Bebedouros e Ventiladores",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Acerca da manutenção básica de bebedouros industriais/de coluna e ventiladores em repartições públicas, assinale a alternativa CORRETA:",
    alternativas: [
      "O elemento filtrante (refil/vela) de bebedouros nunca precisa ser trocado se a água da rede pública for tratada.",
      "Em bebedouros, deve-se realizar a troca periódica do elemento filtrante conforme especificação do fabricante (em geral a cada 6 meses ou limite de litros), higienização do reservatório/torneiras e verificação do termostato; em ventiladores, limpeza das pás/grades e verificação de rolamentos/capacitor.",
      "Quando um ventilador liga e emite zumbido sem girar (ou gira muito lentamente), a causa mais comum é o disjuntor geral subdimensionado.",
      "A limpeza interna do reservatório de água gelada do bebedouro deve ser feita com solvente industrial ou querosene.",
      "A grade de proteção de ventiladores de parede pode ser removida para aumentar o fluxo de ar."
    ],
    correta: 1,
    explicacao: "Bebedouros requerem troca periódica do refil filtrante, higienização sanitária e checagem de termostato/sistema frigorífico. Em ventiladores que zumbem e não giram, as causas clássicas são capacitor de partida enfraquecido ou eixo/buchas travados por sujeira e falta de lubrificação."
  },
  {
    id: "man-37",
    topico: "Ferramentas Manuais e Elétricas",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Quanto ao uso adequado, conservação e segurança no manuseio de ferramentas manuais e elétricas na manutenção patrimonial, assinale a alternativa INCORRETA:",
    alternativas: [
      "Antes de trocar brocas em furadeiras ou discos em esmerilhadeiras, a ferramenta deve ser desconectada da fonte de energia elétrica.",
      "Para serviços próximos a instalações elétricas, devem ser utilizadas ferramentas com cabos dotados de isolamento elétrico adequado (normatizado até 1.000 V).",
      "Pode-se utilizar uma chave de fenda comum como talhadeira ou alavanca, batendo com martelo em seu cabo, sempre que a ferramenta apropriada não estiver disponível.",
      "Chaves fixas ou combinadas devem ter o encaixe exato à cabeça do parafuso/porca, evitando folgas que danificam a peça e provocam acidentes.",
      "Após o uso, as ferramentas devem ser limpas, inspecionadas quanto a folgas ou cabos danificados e guardadas em local seco e organizado."
    ],
    correta: 2,
    explicacao: "A letra C está INCORRETA: improvisar ferramenta (usar chave de fenda como talhadeira/alavanca ou alicate como martelo) danifica o equipamento e é causa frequente de acidentes graves com estilhaços e lesões nas mãos."
  },
  {
    id: "man-38",
    topico: "Noções de Mecânica Básica e Lubrificação",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "No contexto da mecânica básica aplicada à conservação de máquinas, portas, portões, motores e equipamentos prediais, assinale a alternativa CORRETA sobre a lubrificação:",
    alternativas: [
      "A lubrificação serve exclusivamente para fins estéticos, não interferindo na temperatura ou na vida útil dos componentes.",
      "A lubrificação reduz o atrito entre superfícies em movimento relativo, diminui o desgaste mecânico e o aquecimento, reduz ruídos e auxilia na proteção contra corrosão.",
      "Óleos e graxas de diferentes especificações podem ser misturados livremente sem perda de propriedades físico-químicas.",
      "Quanto maior o excesso de graxa colocado em um rolamento fechado, menor será a temperatura de operação do motor.",
      "Correias de borracha em sistemas de transmissão devem ser sempre untadas com óleo lubrificante para evitar ruído."
    ],
    correta: 1,
    explicacao: "Lubrificação reduz atrito, desgaste, calor e corrosão. Atenção às pegadinhas: excesso de graxa em rolamentos causa SUPERAQUECIMENTO (por batimento/atrito fluido), não se mistura lubrificantes incompatíveis e JAMAIS se passa óleo em correias de transmissão (faz patinar e degrada a borracha!)."
  },
  {
    id: "man-39",
    topico: "Controle de Ferramentas e Ordens de Serviço (OS)",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Para assegurar rastreabilidade, controle patrimonial de equipamentos e histórico confiável de manutenção na ALEPA, qual instrumento formal deve registrar a solicitação de reparo, o local, o bem/tombamento, os materiais empregados, o técnico executor e o encerramento da atividade?",
    alternativas: [
      "Apenas um bilhete informal em papel avulso.",
      "Ordem de Serviço (OS) acompanhada de relatório de manutenção e controle de cautela de entrada/saída de ferramentas.",
      "Nota de empenho orçamentário do PPA.",
      "Ato de nomeação no Diário Oficial.",
      "Alvará judicial de funcionamento."
    ],
    correta: 1,
    explicacao: "A Ordem de Serviço (OS) é o documento técnico-administrativo que formaliza a demanda, registra a execução, controla custos/materiais e constrói o histórico de falhas de cada equipamento (fundamental para planejar manutenções preventivas e justificar baixa de bens antieconômicos!)."
  },
  {
    id: "man-40",
    topico: "Mecânica Básica — Transmissões e Fixações",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Em equipamentos prediais com transmissão por polias e correias (como exaustores e compressores), qual verificação mecânica básica evita desgaste prematuro, ruído excessivo e perda de eficiência?",
    alternativas: [
      "Retirar a proteção metálica das polias para facilitar a inspeção visual com a máquina ligada.",
      "Conferir o alinhamento das polias, o estado de conservação (ausência de rachaduras/ressecamento) e a tensão adequada da correia — sempre com a máquina desligada e bloqueada.",
      "Deixar a correia completamente frouxa para poupar o eixo do motor.",
      "Aplicar graxa pesada nos canais da polia.",
      "Substituir parafusos de fixação por arame comum."
    ],
    correta: 1,
    explicacao: "Alinhamento das polias, tensão correta e integridade da correia garantem transmissão eficiente e vida útil dos rolamentos — sempre inspecionando com equipamento desligado/bloqueado e reinstalando a proteção de partes móveis antes de religar!"
  },
  {
    id: "man-41",
    topico: "Climatização — Parâmetros do PMOC e Responsabilidade Técnica",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "De acordo com a regulamentação sanitária correlata à Lei nº 13.589/2018 (PMOC), a exigência clássica de manutenção de um Responsável Técnico habilitado supervisionando o sistema de climatização aplica-se especialmente a edificações cuja soma da capacidade térmica dos equipamentos ultrapasse:",
    alternativas: [
      "9.000 BTU/h (0,75 TR).",
      "18.000 BTU/h (1,5 TR).",
      "60.000 BTU/h (5 TR).",
      "600.000 BTU/h (50 TR).",
      "1.200.000 BTU/h (100 TR)."
    ],
    correta: 2,
    explicacao: "O marco clássico herdado da Portaria GM/MS nº 3.523/1998 e aplicado em conjunto com a Lei nº 13.589/2018 é a carga térmica acima de 60.000 BTU/h (5 TR) para obrigatoriedade de Responsável Técnico habilitado (sendo o PMOC obrigatório para todos os edifícios de uso público e coletivo)."
  },
  {
    id: "man-42",
    topico: "Manutenção — Relatórios de Ocorrências",
    materialSecao: "man-maquinas-climatizacao",
    enunciado: "Ao identificar durante uma ronda rotineira uma fissura com infiltração próxima a um quadro elétrico energizado no subsolo da ALEPA, a conduta prioritária do Auxiliar Técnico Legislativo — Manutenção de Patrimônio deve ser:",
    alternativas: [
      "Aguardar o fechamento do relatório mensal para mencionar o problema no próximo trimestre.",
      "Isolar/sinalizar a área para evitar risco imediato a pessoas e comunicar imediatamente à chefia superior registrando a ocorrência formalmente para providências urgentes.",
      "Limpar a água com pano úmido diretamente sobre os disjuntores energizados.",
      "Ignorar o fato, pois infiltrações não representam risco elétrico.",
      "Desligar a energia de todo o prédio sem avisar ninguém e abandonar o expediente."
    ],
    correta: 1,
    explicacao: "Água + quadro elétrico energizado representa risco grave e iminente de choque elétrico e curto-circuito/incêndio! A conduta correta (inclusive expressa na síntese do Cargo 03 no Anexo I) é isolar/sinalizar o risco e comunicar IMEDIATAMENTE à chefia, efetuando registro de ocorrência."
  },

  /* ===== BLOCO 4: SEGURANÇA DO TRABALHO, INCÊNDIOS E PRIMEIROS SOCORROS (man-43 a man-56) ===== */
  {
    id: "man-43",
    topico: "Segurança do Trabalho — NR-6 (EPI e EPC)",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Nos termos da Norma Regulamentadora nº 6 (NR-6), acerca dos Equipamentos de Proteção Individual (EPI) e Coletiva (EPC), assinale a alternativa CORRETA:",
    alternativas: [
      "O uso do EPI deve ter prioridade absoluta sobre as medidas de proteção coletiva (EPC).",
      "O empregador/órgão deve fornecer gratuitamente o EPI adequado ao risco, em perfeito estado de conservação e com Certificado de Aprovação (CA) válido, cabendo ao trabalhador usá-lo apenas para a finalidade a que se destina e zelar por sua guarda e conservação.",
      "O custo de reposição de EPI danificado durante o trabalho normal deve ser descontado integralmente do salário do servidor.",
      "Qualquer equipamento comprado em loja de construção pode ser utilizado como EPI, mesmo sem Certificado de Aprovação (CA).",
      "O guarda-corpo em andaimes e o sistema de exaustão local são exemplos clássicos de EPI."
    ],
    correta: 1,
    explicacao: "NR-6: EPCs têm prioridade sobre EPIs (guarda-corpo e exaustor são EPCs!). O EPI deve possuir CA válido, ser fornecido GRATUITAMENTE pelo empregador e conservado/usado corretamente pelo trabalhador."
  },
  {
    id: "man-44",
    topico: "Segurança do Trabalho — NR-35 (Trabalho em Altura)",
    materialSecao: "man-seguranca-incendio",
    enunciado: "De acordo com a Norma Regulamentadora nº 35 (NR-35), considera-se TRABALHO EM ALTURA toda atividade executada:",
    alternativas: [
      "Acima de 1,00 m do nível inferior, independentemente de haver risco de queda.",
      "Acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.",
      "Somente acima de 5,00 m de altura em fachadas externas.",
      "Apenas quando realizada sobre telhados inclinados acima de 10 metros.",
      "Acima de 3,50 m exclusivamente em obras de construção civil."
    ],
    correta: 1,
    explicacao: "Definição literal da NR-35 (item 35.1.2): considera-se trabalho em altura toda atividade executada ACIMA DE 2,00 m (dois metros) do nível inferior, onde haja risco de queda."
  },
  {
    id: "man-45",
    topico: "Segurança do Trabalho — NR-35 (Escadas, Andaimes e Quedas)",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Um técnico precisa substituir luminárias no teto de um salão a 4 metros de altura próximo a pontos elétricos. À luz da NR-35 e das boas práticas com escadas e andaimes, assinale a alternativa CORRETA:",
    alternativas: [
      "Deve-se utilizar preferencialmente escada de alumínio por ser mais leve e conduzir bem a eletricidade.",
      "É obrigatório possuir capacitação válida em NR-35 (reciclagem bienal), Análise de Risco, uso de escada isolante (fibra de vidro ou madeira) ou andaime devidamente travado com guarda-corpo e rodapé, além de cinturão tipo paraquedista ancorado em ponto seguro.",
      "O cinto abdominal simples (sem alças nos ombros e pernas) é o equipamento recomendado pela NR-35 para retenção de quedas.",
      "Andaimes móveis com rodízios podem ser deslocados com o trabalhador em cima da plataforma para economizar tempo.",
      "É permitido apoiar uma escada comum sobre caixas ou cadeiras para alcançar pontos mais altos."
    ],
    correta: 1,
    explicacao: "NR-35 exige capacitação (reciclagem a cada 2 anos), Análise de Risco, cinturão tipo PARAQUEDISTA (cinto abdominal é proibido para retenção de queda!), ponto de ancoragem adequado, escada isolante (fibra de vidro/madeira perto de eletricidade) e travamento total de andaimes (jamais mover com pessoa em cima!)."
  },
  {
    id: "man-46",
    topico: "Segurança do Trabalho — NR-26 (Cores de Segurança)",
    materialSecao: "man-seguranca-incendio",
    enunciado: "De acordo com a Norma Regulamentadora nº 26 (NR-26 — Sinalização de Segurança), as cores padronizadas para identificar, respectivamente, (1) equipamentos de combate a incêndio, (2) cuidado/advertência (ex.: pisos escorregadios/corrimãos), (3) perigo (partes móveis de máquinas/interior de caixas elétricas) e (4) segurança/primeiros socorros são:",
    alternativas: [
      "Vermelho — Amarelo — Laranja — Verde.",
      "Laranja — Vermelho — Amarelo — Azul.",
      "Vermelho — Verde — Azul — Amarelo.",
      "Amarelo — Vermelho — Verde — Laranja.",
      "Azul — Laranja — Vermelho — Branco."
    ],
    correta: 0,
    explicacao: "Cores clássicas da NR-26: Vermelho = incêndio/parada de emergência; Amarelo = cuidado/advertência; Laranja = perigo (partes móveis, interior de painéis elétricos); Verde = segurança (primeiros socorros, chuveiros de emergência, rotas de fuga)."
  },
  {
    id: "man-47",
    topico: "Prevenção de Incêndios — Tetraedro do Fogo (NR-23)",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Na teoria da combustão adotada na prevenção e combate a incêndios (NR-23), o chamado TETRAEDRO DO FOGO é composto pelos seguintes quatro elementos:",
    alternativas: [
      "Água, oxigênio, dióxido de carbono e calor.",
      "Combustível, comburente (oxigênio), calor e reação em cadeia.",
      "Combustível, eletricidade, fumaça e chama.",
      "Calor, resfriamento, abafamento e isolamento.",
      "Oxigênio, nitrogênio, pó químico e faísca."
    ],
    correta: 1,
    explicacao: "Tetraedro do Fogo = 4 elementos: Combustível + Comburente (em geral oxigênio) + Calor + Reação em Cadeia. Retirando-se qualquer um desses quatro elementos, extingue-se o fogo!"
  },
  {
    id: "man-48",
    topico: "Combate a Incêndios — Classes de Incêndio (Classe C)",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Ocorreu um princípio de incêndio em um quadro de distribuição elétrica ENERGIZADO e em servidores de informática da ALEPA (incêndio Classe C). Qual agente extintor é o MAIS INDICADO por não conduzir eletricidade e não deixar resíduos que danifiquem circuitos eletrônicos?",
    alternativas: [
      "Água Pressurizada (AP).",
      "Espuma Mecânica.",
      "Gás Carbônico (CO₂).",
      "Jato pleno de hidrante predial.",
      "Água com detergente."
    ],
    correta: 2,
    explicacao: "Para incêndio Classe C (equipamentos elétricos energizados), é PROIBIDO usar Água ou Espuma (conduzem eletricidade → choque fatal!). Usam-se CO₂ ou Pó Químico Seco, sendo o CO₂ o mais indicado em equipamentos eletrônicos/quadros sensíveis por ser um gás limpo que não deixa resíduos."
  },
  {
    id: "man-49",
    topico: "Combate a Incêndios — Classes A, B, D e K",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Assinale a alternativa que associa CORRETAMENTE a classe de incêndio ao tipo de material combustível:",
    alternativas: [
      "Classe A: líquidos inflamáveis (gasolina e álcool); Classe B: madeira e papel.",
      "Classe A: sólidos comuns que deixam resíduos/brasas (papel, madeira, tecido); Classe B: líquidos e gases inflamáveis; Classe D: metais pirofóricos (magnésio, sódio); Classe K: óleos e gorduras de cozinha.",
      "Classe C: óleos vegetais em fritadeiras; Classe K: equipamentos elétricos energizados.",
      "Classe D: papel e papelão acumulados em arquivos.",
      "Classe B: exclusivamente equipamentos de informática energizados."
    ],
    correta: 1,
    explicacao: "Classificação oficial: A = sólidos comuns com brasa (madeira, papel, tecido); B = líquidos/gases inflamáveis (gasolina, álcool, GLP); C = elétricos energizados; D = metais combustíveis/pirofóricos; K = óleos e gorduras de cozinha."
  },
  {
    id: "man-50",
    topico: "Combate a Incêndios — Métodos de Extinção",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Ao combater um princípio de incêndio com extintor de Água Pressurizada em um foco de papel (Classe A) e com extintor de CO₂ em um líquido inflamável (Classe B), os métodos principais de extinção empregados são, respectivamente:",
    alternativas: [
      "Abafamento (água) e Isolamento (CO₂).",
      "Resfriamento (água — reduz o calor) e Abafamento (CO₂ — desloca/reduz o oxigênio comburente).",
      "Extinção química exclusiva (água) e Resfriamento exclusivo (CO₂).",
      "Combustão espontânea e Pressurização.",
      "Aterramento e Condução térmica."
    ],
    correta: 1,
    explicacao: "A água atua principalmente por RESFRIAMENTO (retira o calor abaixo do ponto de combustão). O CO₂ atua principalmente por ABAFAMENTO (gás mais denso que o ar que desloca o oxigênio/comburente), além de leve resfriamento secundário."
  },
  {
    id: "man-51",
    topico: "Combate a Incêndios — Inspeção e Manutenção de Extintores",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Durante a inspeção visual periódica dos extintores de incêndio instalados nos corredores da ALEPA, o técnico de manutenção verifica que o ponteiro do manômetro de um extintor de pó químico está na faixa VERMELHA (despressurizado) e que há caixas de arquivo empilhadas na frente do abrigo do hidrante. Qual é a avaliação correta?",
    alternativas: [
      "O extintor está normal (faixa vermelha indica carga máxima) e as caixas podem ficar ali temporariamente.",
      "Ambos constituem não conformidades graves: o manômetro deve estar na faixa VERDE (extintor despressurizado deve ser imediatamente substituído/enviado para recarga) e os acessos a extintores e hidrantes devem permanecer 100% desobstruídos e sinalizados.",
      "Basta agitar o extintor para o ponteiro retornar à faixa verde.",
      "Extintores de pó químico nunca precisam de recarga periódica enquanto o lacre estiver intacto.",
      "Hidrantes e mangotinhos só podem ser inspecionados pelo fabricante."
    ],
    correta: 1,
    explicacao: "Na inspeção de extintores: manômetro deve estar na faixa VERDE (vermelha = despressurizado/sobrecarregado → retirar e substituir imediatamente), lacre intacto, validade em dia (recarga em regra anual; teste hidrostático a cada 5 anos) e acesso totalmente livre e sinalizado."
  },
  {
    id: "man-52",
    topico: "Combate a Incêndios — Abandono de Edificação (NR-23)",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Em caso de acionamento do alarme de incêndio e necessidade de abandono de edificação de múltiplos pavimentos, conforme a NR-23 e as normas de segurança contra incêndio, assinale a conduta CORRETA:",
    alternativas: [
      "Utilizar os elevadores para evacuar os andares superiores com maior rapidez.",
      "Manter as portas das saídas de emergência trancadas a chave durante o expediente para evitar saída não autorizada.",
      "Descer ordenadamente pelas escadas e saídas de emergência (que devem abrir no sentido do fluxo de fuga e permanecer destrancadas e desobstruídas), NUNCA usar elevadores, proteger vias respiratórias e deslocar-se agachado se houver fumaça densa.",
      "Retornar imediatamente ao gabinete para recolher bolsas, notebooks e documentos pessoais.",
      "Abrir todas as janelas da sala em chamas para ventilar o fogo."
    ],
    correta: 2,
    explicacao: "Regras vitais de abandono: NUNCA usar elevadores (risco de pane elétrica e efeito chaminé), usar rotas/escadas de emergência (portas destrancadas abrindo no sentido da fuga), não retornar para buscar pertences e andar agachado em caso de fumaça (ar mais limpo e frio fica próximo ao piso)."
  },
  {
    id: "man-53",
    topico: "Primeiros Socorros — Choque Elétrico",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Um colega de manutenção sofre um choque elétrico ao encostar em uma máquina energizada e permanece preso ao condutor. Qual deve ser a PRIMEIRA atitude de primeiros socorros do servidor que presencia o acidente?",
    alternativas: [
      "Segurar imediatamente os braços da vítima com as mãos nuas para puxá-la com força.",
      "Jogar um balde de água sobre a vítima para resfriar o corpo.",
      "NÃO tocar diretamente na vítima; desligar imediatamente a chave geral/disjuntor (ou, se impossível, afastar o fio com objeto seco e isolante como madeira seca) antes de prestar socorro e acionar o serviço de emergência (SAMU 192 / Bombeiros 193).",
      "Oferecer água com açúcar à vítima ainda em contato com o equipamento.",
      "Aguardar 10 minutos para ver se o disjuntor desarma sozinho."
    ],
    correta: 2,
    explicacao: "Em choque elétrico, a prioridade absoluta é a segurança do socorrista: JAMAIS tocar na vítima energizada! Desligue a energia na chave/disjuntor (ou afaste a fonte com material seco e isolante), só então avalie sinais vitais e acione socorro especializado."
  },
  {
    id: "man-54",
    topico: "Primeiros Socorros — Queimaduras",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Durante um reparo em tubulação de água quente ou solda, um técnico sofre uma queimadura de 2º grau (com formação de bolhas) no antebraço. A conduta correta de primeiros socorros consiste em:",
    alternativas: [
      "Furar imediatamente todas as bolhas e aplicar pasta de dente ou manteiga sobre o local.",
      "Colocar gelo diretamente sobre a pele queimada por 30 minutos.",
      "Resfriar a região queimada com água corrente limpa em temperatura ambiente por cerca de 10 a 15 minutos, NÃO furar bolhas, NÃO aplicar pomadas caseiras/produtos estranhos e cobrir suavemente com gaze limpa/estéril encaminhando para atendimento médico.",
      "Esfregar álcool 70% sobre a ferida para desinfetar.",
      "Arrancar com força fragmentos de roupa que estejam grudados na pele queimada."
    ],
    correta: 2,
    explicacao: "Em queimaduras: água corrente em temperatura ambiente (nunca gelo direto!), não furar bolhas (protegem contra infecção), nunca passar manteiga/pasta de dente/café/álcool e nunca puxar roupas aderidas à pele."
  },
  {
    id: "man-55",
    topico: "Primeiros Socorros — Hemorragias e Desmaios",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Acerca dos procedimentos básicos de primeiros socorros em caso de corte com hemorragia externa no braço ou episódio de desmaio (síncope) no local de trabalho, assinale a alternativa CORRETA:",
    alternativas: [
      "Em hemorragia externa, realizar compressão direta e firme sobre o ferimento utilizando gaze ou pano limpo (com proteção de luvas descartáveis), evitando torniquetes improvisados desnecessários.",
      "Em caso de desmaio, manter a vítima sentada ereta e oferecer café quente ou álcool para cheirar enquanto desacordada.",
      "Em caso de corte profundo com objeto encravado (ex.: caco de vidro ou prego), deve-se retirar o objeto imediatamente antes da chegada do resgate.",
      "Em hemorragia, deve-se aplicar pó de café sobre o corte para estancar o sangue.",
      "A pessoa desmaiada deve beber água imediatamente, mesmo inconsciente."
    ],
    correta: 0,
    explicacao: "Compressão direta com gaze/pano limpo (usando luvas) é a medida padrão para hemorragias externas! Nunca se retira objeto encravado, nunca se dá líquidos a pessoa desacordada (risco de broncoaspiração) e, no desmaio, deita-se a pessoa em local arejado elevando levemente as pernas."
  },
  {
    id: "man-56",
    topico: "Combate a Incêndios — Iluminação de Emergência e Hidrantes",
    materialSecao: "man-seguranca-incendio",
    enunciado: "Sobre os sistemas fixos de segurança contra incêndio (hidrantes, mangotinhos, alarmes e iluminação de emergência) em edifícios públicos, assinale a alternativa CORRETA:",
    alternativas: [
      "A iluminação de emergência deve acender automaticamente em caso de falha da rede elétrica normal, garantindo visibilidade das rotas de fuga e saídas de emergência, e precisa de testes periódicos de autonomia das baterias.",
      "O mangotinho exige obrigatoriamente equipe de quatro bombeiros para ser operado, não podendo ser usado por brigadistas treinados.",
      "Os abrigos de hidrantes devem ser usados para guardar materiais de limpeza e vassouras do pavimento.",
      "A água do reservatório técnico de incêndio (RTI) deve ser consumida diariamente para lavagem dos banheiros.",
      "Botoeiras de alarme de incêndio devem ficar escondidas dentro de salas trancadas."
    ],
    correta: 0,
    explicacao: "A iluminação de emergência entra em ação automaticamente na falta de energia para orientar a evacuação segura e requer testes regulares de bateria. O mangotinho é de operação rápida por uma só pessoa treinada, e a reserva técnica de incêndio (RTI) é intocável para consumo comum!"
  },

  /* ===== BLOCO 5: ALEPA, RELACIONAMENTO, RJU-PA, PDCA E GESTÃO PATRIMONIAL (man-57 a man-65) ===== */
  {
    id: "man-57",
    topico: "ALEPA — Funções e Estrutura Organizacional",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "Sobre a Assembleia Legislativa do Estado do Pará (ALEPA), suas funções e estrutura institucional, assinale a alternativa CORRETA:",
    alternativas: [
      "A ALEPA exerce exclusivamente a função de executar obras viárias em todo o Estado do Pará.",
      "As funções típicas da ALEPA são legislar e fiscalizar (controle externo com auxílio do TCE-PA), exercendo também funções atípicas como administrar sua própria estrutura interna, servidores e patrimônio.",
      "A Mesa Diretora da ALEPA é nomeada livremente pelo Governador do Estado.",
      "O Plenário não possui competência deliberativa, cabendo todas as decisões finais às unidades administrativas.",
      "A ALEPA é composta por 24 Deputados Estaduais com mandato de dois anos."
    ],
    correta: 1,
    explicacao: "Funções típicas do Poder Legislativo = legislar e fiscalizar; atípicas = administrar (organizar seus serviços, servidores, patrimônio e licitações) e julgar em hipóteses constitucionais. A ALEPA tem 41 Deputados Estaduais (legislatura de 4 anos) e Mesa Diretora eleita pelos próprios parlamentares."
  },
  {
    id: "man-58",
    topico: "RJU-PA (Lei nº 5.810/1994) — Deveres e Proibições",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "À luz dos deveres e proibições do servidor público previstos na Lei Estadual nº 5.810/1994 (RJU-PA), assinale a alternativa CORRETA:",
    alternativas: [
      "O servidor é obrigado a cumprir todas as ordens superiores, mesmo quando forem manifestamente ilegais.",
      "Constitui dever expresso do servidor zelar pela economia do material e pela conservação do patrimônio público, sendo-lhe proibido utilizar pessoal ou recursos materiais da repartição em serviços ou atividades particulares.",
      "O servidor pode levar ferramentas elétricas da ALEPA para reformas em sua residência particular nos fins de semana, desde que as devolva na segunda-feira.",
      "É permitido ao servidor retirar objetos da repartição sem prévia anuência da autoridade competente.",
      "A penalidade mais branda aplicável por descumprimento de deveres no RJU-PA denomina-se advertência oral informal."
    ],
    correta: 1,
    explicacao: "Lei Estadual nº 5.810/1994: zelar pela economia do material e conservação do patrimônio público é DEVER expresso; utilizar recursos materiais da repartição em atividades particulares ou retirar objetos sem prévia anuência é PROIBIÇÃO! Ordens manifestamente ilegais NÃO devem ser cumpridas; e a pena leve no RJU-PA é REPREENSÃO por escrito."
  },
  {
    id: "man-59",
    topico: "Relacionamento Interpessoal e Gestão de Conflitos",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "Durante uma manutenção corretiva urgente em um gabinete, dois servidores divergem sobre o melhor horário para desligar o circuito de iluminação, gerando tensão no ambiente. Aplicando os princípios de relacionamento interpessoal e gestão de conflitos no serviço público, a postura mais adequada do técnico de manutenção é:",
    alternativas: [
      "Elevar o tom de voz para impor sua autoridade técnica e desligar a energia sem aviso prévio.",
      "Praticar a escuta ativa, manter a calma e a cordialidade, explicar com clareza os riscos técnicos envolvidos e negociar de forma colaborativa um procedimento seguro que atenda à urgência com o menor transtorno possível.",
      "Abandonar o serviço e comentar negativamente sobre o colega nos corredores da Casa.",
      "Transferir a responsabilidade do conflito para o público externo.",
      "Executar o serviço elétrico com o circuito ligado apenas para evitar diálogo com o setor."
    ],
    correta: 1,
    explicacao: "Gestão construtiva de conflitos no setor público combina escuta ativa, empatia, cordialidade, comunicação clara/assertiva e foco na solução segura e colaborativa (jamais abrindo mão da segurança!)."
  },
  {
    id: "man-60",
    topico: "Noções de Gestão — Priorização de Demandas e Ciclo PDCA",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "A equipe de manutenção recebe quatro chamados simultâneos na segunda-feira pela manhã: (1) troca de placa decorativa de porta; (2) vazamento ativo de água próximo a um quadro de distribuição elétrica; (3) pintura estética de corredor sem risco; (4) solicitação de orçamento de cadeira nova. Segundo os critérios de priorização de demandas e gestão do trabalho, qual chamado deve ser atendido EM PRIMEIRO LUGAR, e qual ferramenta de melhoria contínua organiza as etapas Planejar–Executar–Verificar–Agir?",
    alternativas: [
      "Chamado 1 (placa decorativa) e Matriz 5W2H.",
      "Chamado 2 (vazamento próximo ao quadro elétrico — risco iminente à segurança) e Ciclo PDCA.",
      "Chamado 3 (pintura estética) e Fluxograma linear.",
      "Chamado 4 (orçamento) e Curva ABC.",
      "Atender estritamente por ordem alfabética do solicitante e Diagrama de Venn."
    ],
    correta: 1,
    explicacao: "Na gestão de manutenção, demandas com risco à integridade de pessoas ou danos graves ao patrimônio (vazamento próximo a eletricidade!) têm PRIORIDADE MÁXIMA absoluta. A ferramenta Planejar–Executar–Verificar–Agir é o Ciclo PDCA."
  },
  {
    id: "man-61",
    topico: "Gestão Patrimonial — Tombamento e Movimentação",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "No setor de patrimônio de um órgão público, um computador de mesa e um aparelho de ar-condicionado recém-adquiridos são identificados com plaquetas numeradas únicas, cadastrados no sistema contábil e vinculados a um chefe de setor. Posteriormente, o computador precisa ser transferido para outro departamento. Os instrumentos correspondentes a esses dois atos são, respectivamente:",
    alternativas: [
      "Baixa patrimonial e Leilão administrativo.",
      "Tombamento (com Termo de Responsabilidade) e Guia/Termo de Movimentação (Transferência) Patrimonial.",
      "Inventário de extinção e Desfazimento.",
      "Depreciação acelerada e Eliminação documental.",
      "Conferência informal e Cautela verbal."
    ],
    correta: 1,
    explicacao: "Tombamento = registro contábil + plaqueta patrimonial + Termo de Responsabilidade. Qualquer mudança de sala/setor de um bem permanente exige formalização por Guia/Termo de Movimentação (Transferência) para manter o controle de quem detém a guarda!"
  },
  {
    id: "man-62",
    topico: "Gestão Patrimonial — Inventário e Classificação de Bens Inservíveis",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "Durante o inventário patrimonial anual da ALEPA, a comissão encontra: (I) impressoras novas e funcionando perfeitamente, mas sem uso no depósito; e (II) um aparelho de ar-condicionado antigo cujo conserto custaria 85% do valor de um equipamento novo. Na classificação de bens para fins de desfazimento, os bens I e II são classificados, respectivamente, como:",
    alternativas: [
      "Irrecuperáveis e Ociosos.",
      "Ociosos e Irrecuperáveis (ou antieconômicos quando a manutenção é onerosa).",
      "Recuperáveis e Ociosos.",
      "Permanentes ativos e Materiais de consumo.",
      "Inalienáveis e Imprescritíveis."
    ],
    correta: 1,
    explicacao: "Classificação clássica de bens inservíveis: Ocioso = em perfeitas condições, mas sem aproveitamento; Recuperável = reparo ≤ 50% do valor de mercado; Antieconômico = manutenção onerosa ou rendimento precário; Irrecuperável = não serve mais ou custo de recuperação > 50% do valor de mercado."
  },
  {
    id: "man-63",
    topico: "Sustentabilidade na Administração Pública",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "A equipe de Manutenção de Patrimônio substituiu 120 lâmpadas fluorescentes tubulares antigas (que contêm vapor de mercúrio) por lâmpadas LED de maior eficiência energética. Quanto ao descarte das lâmpadas fluorescentes queimadas/retiradas, a conduta ambientalmente correta e alinhada à sustentabilidade na Administração Pública é:",
    alternativas: [
      "Quebrar todas as lâmpadas dentro de sacos pretos comuns para reduzir o volume no lixo orgânico.",
      "Armazená-las intactas em embalagens adequadas e encaminhá-las para coleta/descarte especializado por meio de logística reversa ou empresa licenciada para descontaminação de resíduos perigosos.",
      "Enterrá-las no jardim externo da repartição.",
      "Descartá-las junto com o papel reciclável da coleta seletiva comum.",
      "Jogar os tubos diretamente nas caçambas de entulho de obra."
    ],
    correta: 1,
    explicacao: "Lâmpadas fluorescentes contêm mercúrio (metal pesado tóxico!). Pela Política Nacional de Resíduos Sólidos (Lei 12.305/2010), estão sujeitas à LOGÍSTICA REVERSA e descarte ambientalmente adequado sem quebra dos tubos (assim como pilhas, baterias, óleos lubrificantes e lixo eletrônico)."
  },
  {
    id: "man-64",
    topico: "Sustentabilidade — Eficiência Energética",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "Assinale a alternativa que apresenta um conjunto de práticas CORRETAS de uso racional de energia elétrica na manutenção predial de órgãos públicos:",
    alternativas: [
      "Manter aparelhos de ar-condicionado ajustados em 16 °C com portas e janelas abertas para renovar o ar.",
      "Limpeza periódica dos filtros de ar-condicionado, regulagem térmica adequada (23 °C–24 °C), vedação de portas/janelas climatizadas, substituição de lâmpadas antigas por LED, instalação de sensores de presença em corredores/banheiros e eliminação de fugas/maus contatos elétricos.",
      "Deixar computadores, monitores e luminárias ligados durante toda a madrugada para evitar desgaste dos interruptores.",
      "Usar extensões múltiplas sobrecarregadas em vez de circuitos dedicados.",
      "Desativar o monitoramento de consumo elétrico mensal do edifício."
    ],
    correta: 1,
    explicacao: "Eficiência energética predial alia tecnologia (LED, sensores de presença, equipamentos selo Procel A), operação racional (23–24 °C com ambiente fechado) e manutenção preventiva (filtros limpos e instalações elétricas sem fuga ou mau contato)."
  },
  {
    id: "man-65",
    topico: "Atendimento às Demandas Internas e Qualidade",
    materialSecao: "man-alepa-gestao-patrimonio",
    enunciado: "No atendimento às demandas dos setores e usuários internos da ALEPA, a postura profissional esperada do Auxiliar Técnico Legislativo — Manutenção de Patrimônio caracteriza-se por:",
    alternativas: [
      "Atender primeiro os pedidos de amigos pessoais, independentemente da gravidade técnica dos demais chamados.",
      "Qualidade técnica, cortesia, presteza, organização do local após o serviço (deixando o ambiente limpo e seguro), sigilo sobre documentos vistos nos gabinetes e registro formal da conclusão da Ordem de Serviço.",
      "Realizar reparos provisórios precários sem informar à chefia para encerrar rapidamente os chamados.",
      "Deixar sobras de fios, ferramentas e poeira nos gabinetes para que a equipe de limpeza recolha posteriormente.",
      "Recusar-se a explicar ao setor solicitante a previsão de conclusão do reparo."
    ],
    correta: 1,
    explicacao: "Excelência no atendimento interno em manutenção envolve presteza, cortesia, impessoalidade (prioridade por critério técnico/risco), qualidade na execução, limpeza/organização pós-serviço, respeito ao sigilo institucional dos gabinetes e registro formal da OS."
  }
];
