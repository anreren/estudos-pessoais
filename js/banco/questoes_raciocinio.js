window.BANCO_QUESTOES = window.BANCO_QUESTOES || {};

window.BANCO_QUESTOES.raciocinio = [
  {
    id: "rlm-01",
    topico: "Lógica Proposicional — Negação",
    materialSecao: "rlm-proposicoes",
    enunciado: "Considere a proposição composta: \"Se o servidor protocolou o ofício no prazo, então o setor recebeu o documento.\"\nA negação lógica CORRETA dessa proposição é:",
    alternativas: [
      "Se o servidor não protocolou o ofício no prazo, então o setor não recebeu o documento.",
      "O servidor não protocolou o ofício no prazo e o setor não recebeu o documento.",
      "O servidor protocolou o ofício no prazo e o setor não recebeu o documento.",
      "O servidor não protocolou o ofício no prazo ou o setor recebeu o documento.",
      "Se o setor não recebeu o documento, então o servidor não protocolou o ofício no prazo."
    ],
    correta: 2,
    explicacao: "A negação da condicional ~(p → q) equivale a (p ∧ ~q) — regra 'MANÉ': mantém a primeira parte ('o servidor protocolou o ofício no prazo'), troca o 'se... então' por 'E', e nega a segunda parte ('o setor não recebeu o documento')."
  },
  {
    id: "rlm-02",
    topico: "Lógica Proposicional — Equivalência",
    materialSecao: "rlm-proposicoes",
    enunciado: "Assinale a alternativa que apresenta uma proposição logicamente EQUIVALENTE à afirmação: \"Se há quórum regimental, então a sessão plenária é aberta.\"",
    alternativas: [
      "Se não há quórum regimental, então a sessão plenária não é aberta.",
      "Se a sessão plenária é aberta, então há quórum regimental.",
      "Se a sessão plenária não é aberta, então não há quórum regimental.",
      "Há quórum regimental e a sessão plenária não é aberta.",
      "Há quórum regimental ou a sessão plenária não é aberta."
    ],
    correta: 2,
    explicacao: "Pela equivalência contrapositiva, (p → q) ≡ (~q → ~p): invertem-se as proposições e negam-se ambas → 'Se a sessão plenária não é aberta, então não há quórum regimental'."
  },
  {
    id: "rlm-03",
    topico: "Dedução e Validade de Argumentos",
    materialSecao: "rlm-proposicoes",
    enunciado: "Admita como VERDADEIRAS as seguintes premissas:\nI. Se Ana vai ao plenário, então Bruno arquiva os autos.\nII. Se Bruno arquiva os autos, então Carla revisa a ata.\nIII. Carla não revisou a ata.\nA partir dessas hipóteses, conclui-se de forma logicamente VÁLIDA que:",
    alternativas: [
      "Ana foi ao plenário e Bruno arquivou os autos.",
      "Bruno arquivou os autos, mas Ana não foi ao plenário.",
      "Ana não foi ao plenário e Bruno não arquivou os autos.",
      "Ana foi ao plenário, mas Bruno não arquivou os autos.",
      "Não é possível concluir nada sobre Bruno nem sobre Ana."
    ],
    correta: 2,
    explicacao: "De III: Carla não revisou a ata (F). Em II (Bruno → Carla), para ser V sem cair em V → F, Bruno também deve ser F (Bruno não arquivou os autos). Em I (Ana → Bruno), como Bruno é F, Ana também deve ser F (Ana não foi ao plenário). Logo, C é a única conclusão válida."
  },
  {
    id: "rlm-04",
    topico: "Relações Arbitrárias — Associação Lógica",
    materialSecao: "rlm-associacao",
    enunciado: "Três servidores da ALEPA — Lucas, Marta e Nara — trabalham em setores diferentes (Protocolo, Arquivo e Almoxarifado) e em andares distintos (1º, 2º e 3º andar). Sabe-se que:\n• Lucas não trabalha no Protocolo nem no Almoxarifado.\n• Marta não trabalha no Almoxarifado.\n• Quem atua no Protocolo trabalha no 1º andar.\n• Lucas não trabalha no 3º andar.\nCom base nessas relações, é CORRETO afirmar que:",
    alternativas: [
      "Marta trabalha no Arquivo, no 2º andar.",
      "Nara trabalha no Almoxarifado, no 3º andar.",
      "Lucas trabalha no Protocolo, no 1º andar.",
      "Nara trabalha no Protocolo, no 1º andar.",
      "Lucas trabalha no Arquivo, no 3º andar."
    ],
    correta: 1,
    explicacao: "1) Lucas não é Protocolo nem Almoxarifado → Lucas = Arquivo. 2) Marta não é Almoxarifado e Arquivo já é de Lucas → Marta = Protocolo. 3) Sobra Nara = Almoxarifado. 4) Protocolo = 1º andar → Marta = 1º andar. 5) Lucas não está no 3º (e 1º já é de Marta) → Lucas = 2º andar. 6) Logo, Nara = Almoxarifado, no 3º andar!"
  },
  {
    id: "rlm-05",
    topico: "Diagramas de Venn — Conjuntos",
    materialSecao: "rlm-associacao",
    enunciado: "Em um curso promovido pela Escola do Legislativo para 150 servidores, verificou-se que 95 participaram da oficina de Arquivologia, 75 participaram da oficina de Redação Oficial e 10 não participaram de nenhuma das duas oficinas. Quantos servidores participaram de AMBAS as oficinas?",
    alternativas: [
      "15",
      "20",
      "25",
      "30",
      "40"
    ],
    correta: 3,
    explicacao: "Total que participou de pelo menos uma oficina: 150 − 10 = 140. Pela fórmula n(A ∪ B) = n(A) + n(B) − n(A ∩ B): 140 = 95 + 75 − x → 140 = 170 − x → x = 30 servidores."
  },
  {
    id: "rlm-06",
    topico: "Conjuntos Racionais — Frações",
    materialSecao: "rlm-conjuntos-numericos",
    enunciado: "Um almoxarifado distribuiu 2/5 do seu estoque inicial de resmas de papel na segunda-feira e 1/4 do estoque inicial na terça-feira. Sabendo que ainda restaram exatamente 70 resmas no estoque, qual era a quantidade inicial de resmas?",
    alternativas: [
      "140",
      "160",
      "180",
      "200",
      "240"
    ],
    correta: 3,
    explicacao: "Fração distribuída = 2/5 + 1/4 = (8 + 5)/20 = 13/20. Restou 1 − 13/20 = 7/20 do estoque. Como 7/20 equivalem a 70 resmas, 1/20 = 10 resmas; logo, o total (20/20) = 20 × 10 = 200 resmas."
  },
  {
    id: "rlm-07",
    topico: "Conjuntos Numéricos Complexos",
    materialSecao: "rlm-conjuntos-numericos",
    enunciado: "Considere os números complexos z₁ = 3 + 2i e z₂ = 1 − 4i, em que i é a unidade imaginária (i² = −1). O resultado do produto z₁ · z₂ é:",
    alternativas: [
      "3 − 8i",
      "−5 − 10i",
      "11 − 10i",
      "11 + 10i",
      "−5 + 14i"
    ],
    correta: 2,
    explicacao: "Aplicando a distributiva: (3 + 2i)(1 − 4i) = 3·1 − 3·4i + 2i·1 − 2i·4i = 3 − 12i + 2i − 8i². Como i² = −1, temos: 3 − 10i − 8(−1) = 3 + 8 − 10i = 11 − 10i."
  },
  {
    id: "rlm-08",
    topico: "Conjuntos Numéricos Complexos — Potências de i",
    materialSecao: "rlm-conjuntos-numericos",
    enunciado: "Sendo i a unidade imaginária (i² = −1), qual é o valor da expressão E = i²⁰²⁶ + i²⁰²⁷?",
    alternativas: [
      "1 + i",
      "−1 + i",
      "−1 − i",
      "1 − i",
      "0"
    ],
    correta: 2,
    explicacao: "As potências de i repetem-se de 4 em 4 (i⁰=1, i¹=i, i²=−1, i³=−i). Dividindo os expoentes por 4: 2026 ÷ 4 = 506 com resto 2 → i²⁰²⁶ = i² = −1; 2027 ÷ 4 = 506 com resto 3 → i²⁰²⁷ = i³ = −i. Logo, E = −1 − i."
  },
  {
    id: "rlm-09",
    topico: "Divisão Diretamente Proporcional",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Um lote de 360 processos administrativos deve ser dividido entre três equipes em quantidades diretamente proporcionais ao número de integrantes de cada equipe: 2, 3 e 4 servidores. Quantos processos caberão à maior equipe?",
    alternativas: [
      "80",
      "120",
      "140",
      "160",
      "180"
    ],
    correta: 3,
    explicacao: "Soma das partes: 2 + 3 + 4 = 9. Constante de proporcionalidade k = 360 / 9 = 40. A maior equipe (4 servidores) receberá 4 × 40 = 160 processos."
  },
  {
    id: "rlm-10",
    topico: "Divisão Inversamente Proporcional",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Uma diretoria distribuirá 130 pastas de organização entre três setores de forma INVERSAMENTE proporcional ao número de pendências acumuladas em cada setor: 2, 3 e 4 pendências. Quantas pastas receberá o setor que possui 2 pendências?",
    alternativas: [
      "30",
      "40",
      "50",
      "60",
      "65"
    ],
    correta: 3,
    explicacao: "Soma dos inversos: 1/2 + 1/3 + 1/4 = (6 + 4 + 3)/12 = 13/12. Constante k = 130 ÷ (13/12) = 130 × (12/13) = 120. O setor com 2 pendências recebe k/2 = 120/2 = 60 pastas (os demais recebem 40 e 30; soma = 130)."
  },
  {
    id: "rlm-11",
    topico: "Regra de Três Simples",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Para digitalizar um acervo histórico da ALEPA, 6 técnicos administrativos de mesma produtividade levam 12 dias. Se mais 2 técnicos com a mesma produtividade forem integrados à equipe desde o início, em quantos dias o mesmo acervo será digitalizado?",
    alternativas: [
      "6 dias",
      "8 dias",
      "9 dias",
      "10 dias",
      "16 dias"
    ],
    correta: 2,
    explicacao: "Grandezas inversamente proporcionais (mais técnicos → menos dias). Novo número de técnicos = 6 + 2 = 8. Logo: 6 × 12 = 8 × x → 72 = 8x → x = 9 dias."
  },
  {
    id: "rlm-12",
    topico: "Regra de Três Composta",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Quatro assistentes administrativos, trabalhando 6 horas por dia, protocolam 240 processos em 5 dias. Mantendo o mesmo ritmo de trabalho, quantos processos serão protocolados por 6 assistentes trabalhando 5 horas por dia durante 8 dias?",
    alternativas: [
      "320",
      "360",
      "420",
      "480",
      "540"
    ],
    correta: 3,
    explicacao: "Pelo método Processo/Produto: (4 assistentes × 6 h/dia × 5 dias) / 240 processos = (6 assistentes × 5 h/dia × 8 dias) / x → 120 / 240 = 240 / x → 1/2 = 240 / x → x = 480 processos."
  },
  {
    id: "rlm-13",
    topico: "Porcentagem — Variações Sucessivas",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Um contrato de manutenção no valor de R$ 20.000,00 sofreu um reajuste de 10% e, no mês seguinte, obteve um desconto de 10% sobre o valor já reajustado. O valor final do contrato e o percentual líquido em relação ao valor inicial foram, respectivamente:",
    alternativas: [
      "R$ 20.000,00 (variação de 0%).",
      "R$ 19.800,00 (redução de 1%).",
      "R$ 19.600,00 (redução de 2%).",
      "R$ 20.200,00 (aumento de 1%).",
      "R$ 18.000,00 (redução de 10%)."
    ],
    correta: 1,
    explicacao: "Multiplicando os fatores sucessivos: 20.000 × 1,10 × 0,90 = 20.000 × 0,99 = R$ 19.800,00. O fator 0,99 indica redução líquida de 1% em relação ao valor original."
  },
  {
    id: "rlm-14",
    topico: "Raciocínio Sequencial",
    materialSecao: "rlm-sequencias-orientacao",
    enunciado: "Observe a sequência numérica abaixo, construída segundo um padrão lógico:\n3,  6,  11,  18,  27,  38,  ...\nMantendo-se exatamente a mesma lei de formação, o próximo termo dessa sequência é:",
    alternativas: [
      "47",
      "49",
      "51",
      "53",
      "55"
    ],
    correta: 2,
    explicacao: "Calculando a diferença entre termos consecutivos: 6−3 = 3; 11−6 = 5; 18−11 = 7; 27−18 = 9; 38−27 = 11. As diferenças formam os números ímpares consecutivos (+3, +5, +7, +9, +11). A próxima diferença será +13 → 38 + 13 = 51."
  },
  {
    id: "rlm-15",
    topico: "Orientação Temporal — Calendário",
    materialSecao: "rlm-sequencias-orientacao",
    enunciado: "Sabendo que a prova objetiva do concurso da ALEPA está prevista para um domingo (13 de dezembro de 2026), em qual dia da semana cairá a data correspondente a exatamente 100 dias após esse domingo?",
    alternativas: [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira"
    ],
    correta: 2,
    explicacao: "Os dias da semana formam um ciclo de 7 dias. Dividindo 100 por 7: 100 = 14 × 7 + 2 (resto = 2). Avançando 2 dias a partir de domingo: segunda (1), terça-feira (2)."
  },
  {
    id: "rlm-16",
    topico: "Lógica Proposicional — Negação de Quantificadores",
    materialSecao: "rlm-proposicoes",
    enunciado: "Assinale a alternativa que apresenta a NEGAÇÃO lógica correta da proposição: \"Todo servidor da ALEPA concluiu o curso de ética pública.\"",
    alternativas: [
      "Nenhum servidor da ALEPA concluiu o curso de ética pública.",
      "Todo servidor da ALEPA não concluiu o curso de ética pública.",
      "Pelo menos um servidor da ALEPA não concluiu o curso de ética pública.",
      "Algum servidor da ALEPA concluiu o curso de ética pública.",
      "Apenas um servidor da ALEPA concluiu o curso de ética pública."
    ],
    correta: 2,
    explicacao: "A negação do quantificador universal 'Todo A é B' NUNCA é 'Nenhum A é B'! A negação correta é 'Algum A não é B' / 'Pelo menos um A não é B' / 'Existe A que não é B'."
  },
  {
    id: "rlm-17",
    topico: "Lógica Proposicional — Leis de De Morgan",
    materialSecao: "rlm-proposicoes",
    enunciado: "A negação lógica da proposição composta \"O assistente revisou a planilha e protocolou o ofício\" é:",
    alternativas: [
      "O assistente não revisou a planilha e não protocolou o ofício.",
      "O assistente não revisou a planilha ou não protocolou o ofício.",
      "Se o assistente não revisou a planilha, então não protocolou o ofício.",
      "O assistente revisou a planilha ou não protocolou o ofício.",
      "Ou o assistente revisou a planilha ou protocolou o ofício."
    ],
    correta: 1,
    explicacao: "Pela 1ª Lei de De Morgan, ~(p ∧ q) ≡ (~p ∨ ~q): nega-se a primeira proposição, troca-se 'e' por 'ou' e nega-se a segunda proposição."
  },
  {
    id: "rlm-18",
    topico: "Lógica Proposicional — Equivalência Condicional/Disjunção",
    materialSecao: "rlm-proposicoes",
    enunciado: "Uma proposição logicamente EQUIVALENTE a \"Se chove forte em Belém, então a reunião começa mais tarde\" é:",
    alternativas: [
      "Chove forte em Belém e a reunião não começa mais tarde.",
      "Não chove forte em Belém ou a reunião começa mais tarde.",
      "Não chove forte em Belém e a reunião começa mais tarde.",
      "Chove forte em Belém ou a reunião não começa mais tarde.",
      "Se não chove forte em Belém, então a reunião não começa mais tarde."
    ],
    correta: 1,
    explicacao: "Pela equivalência (p → q) ≡ (~p ∨ q) ('NE-Y-MAR'): nega-se a primeira parte ('Não chove forte em Belém'), troca-se o condicional por 'ou' e mantém-se a segunda parte ('a reunião começa mais tarde')."
  },
  {
    id: "rlm-19",
    topico: "Lógica Proposicional — Tabela-Verdade",
    materialSecao: "rlm-proposicoes",
    enunciado: "Sabendo que a proposição `p` tem valor lógico VERDADEIRO (V) e a proposição `q` tem valor lógico FALSO (F), assinale a alternativa que apresenta uma proposição composta VERDADEIRA:",
    alternativas: [
      "`p ∧ q` (conjunção)",
      "`p → q` (condicional)",
      "`p ↔ q` (bicondicional)",
      "`p ⊻ q` (disjunção exclusiva: ou p ou q)",
      "`~p ∨ q` (disjunção inclusiva)"
    ],
    correta: 3,
    explicacao: "Com p = V e q = F: `p ∧ q` = F; `p → q` = V→F = F; `p ↔ q` = F (valores diferentes); `~p ∨ q` = F ∨ F = F; já a disjunção exclusiva `p ⊻ q` é VERDADEIRA exatamente quando os valores são diferentes (V e F)!"
  },
  {
    id: "rlm-20",
    topico: "Relações Arbitrárias — Verdades e Mentiras",
    materialSecao: "rlm-associacao",
    enunciado: "Um contrato original foi guardado dentro de apenas UMA entre três pastas: Azul, Verde e Amarela. Cada pasta traz uma etiqueta:\n• Pasta Azul: \"O contrato está aqui.\"\n• Pasta Verde: \"O contrato não está aqui.\"\n• Pasta Amarela: \"O contrato não está na pasta Azul.\"\nSabendo que EXATAMENTE UMA dessas três etiquetas diz a verdade, em qual pasta está o contrato?",
    alternativas: [
      "Na pasta Azul.",
      "Na pasta Verde.",
      "Na pasta Amarela.",
      "Nas pastas Azul e Verde simultaneamente.",
      "Não é possível determinar com as informações fornecidas."
    ],
    correta: 1,
    explicacao: "Testando cada hipótese: (1) Se na Azul → Azul=V, Verde=V, Amarela=F (2 verdades — falso); (2) Se na Verde → Azul=F, Verde=F, Amarela=V (EXATAMENTE 1 verdade — CORRETO!); (3) Se na Amarela → Azul=F, Verde=V, Amarela=V (2 verdades — falso). Logo, está na pasta Verde!"
  },
  {
    id: "rlm-21",
    topico: "Diagramas de Venn — Conjuntos",
    materialSecao: "rlm-associacao",
    enunciado: "Em um departamento com 60 servidores, 38 falam inglês, 28 falam espanhol e 12 falam ambos os idiomas. Quantos servidores desse departamento NÃO falam nenhum desses dois idiomas?",
    alternativas: [
      "4",
      "6",
      "8",
      "10",
      "12"
    ],
    correta: 1,
    explicacao: "Servidores que falam pelo menos um idioma: n(I ∪ E) = 38 + 28 − 12 = 54. Logo, não falam nenhum dos dois: 60 − 54 = 6 servidores."
  },
  {
    id: "rlm-22",
    topico: "Conjuntos Racionais — Operações com Decimais",
    materialSecao: "rlm-conjuntos-numericos",
    enunciado: "Um rolo de cabo elétrico de 45 metros foi totalmente dividido em pedaços iguais de 0,75 metro cada para montagem de extensões padronizadas. Quantos pedaços completos foram obtidos?",
    alternativas: [
      "30",
      "45",
      "50",
      "60",
      "75"
    ],
    correta: 3,
    explicacao: "Como 0,75 = 3/4, temos: 45 ÷ (3/4) = 45 × (4/3) = 15 × 4 = 60 pedaços."
  },
  {
    id: "rlm-23",
    topico: "Conjuntos Numéricos Complexos — Módulo e Conjugado",
    materialSecao: "rlm-conjuntos-numericos",
    enunciado: "Dado o número complexo z = 6 − 8i, assinale a alternativa que apresenta corretamente o seu MÓDULO |z| e o seu CONJUGADO z̄, respectivamente:",
    alternativas: [
      "10  e  6 + 8i",
      "14  e  −6 + 8i",
      "10  e  −6 − 8i",
      "100  e  6 + 8i",
      "2  e  6 + 8i"
    ],
    correta: 0,
    explicacao: "Módulo: |z| = √(a² + b²) = √(6² + (−8)²) = √(36 + 64) = √100 = 10. O conjugado de z = a + bi troca apenas o sinal da parte imaginária: z̄ = 6 + 8i."
  },
  {
    id: "rlm-24",
    topico: "Razão e Proporção",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Em uma diretoria da ALEPA, a razão entre o número de técnicos de manutenção e o número de assistentes administrativos é de 2 para 5. Sabendo que trabalham 42 servidores ao todo nessa diretoria, qual é a diferença entre a quantidade de assistentes administrativos e a de técnicos de manutenção?",
    alternativas: [
      "12",
      "15",
      "18",
      "21",
      "24"
    ],
    correta: 2,
    explicacao: "Soma das partes: 2 + 5 = 7. Valor de cada parte: k = 42 / 7 = 6. Técnicos = 2 × 6 = 12; Assistentes = 5 × 6 = 30. Diferença: 30 − 12 = 18 servidores."
  },
  {
    id: "rlm-25",
    topico: "Porcentagem — Valor Original",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Após receber um desconto de 20% em uma compra institucional, um lote de ferramentas custou exatamente R$ 240,00. Qual era o valor original desse lote ANTES do desconto?",
    alternativas: [
      "R$ 260,00",
      "R$ 280,00",
      "R$ 288,00",
      "R$ 300,00",
      "R$ 320,00"
    ],
    correta: 3,
    explicacao: "Com 20% de desconto, pagou-se 80% (0,80) do valor original P: 0,80 · P = 240 → P = 240 / 0,80 = R$ 300,00. (Cuidado com a pegadinha de somar 20% sobre 240, que daria 288 — errado!)."
  },
  {
    id: "rlm-26",
    topico: "Porcentagem — Variação Percentual",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Em sua preparação para o concurso da ALEPA, um candidato acertou 36 questões no primeiro simulado e 45 questões no segundo simulado. O aumento percentual no número de acertos do primeiro para o segundo simulado foi de:",
    alternativas: [
      "9%",
      "18%",
      "20%",
      "25%",
      "30%"
    ],
    correta: 3,
    explicacao: "Variação = 45 − 36 = 9 acertos a mais sobre a base inicial de 36: (9 / 36) × 100% = (1 / 4) × 100% = 25%."
  },
  {
    id: "rlm-27",
    topico: "Regra de Três Composta",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Cinco técnicos de manutenção, trabalhando 6 horas por dia, revisam 150 equipamentos em 4 dias. Mantendo a mesma produtividade, em quantos dias 4 técnicos, trabalhando 5 horas por dia, revisarão 200 equipamentos?",
    alternativas: [
      "5 dias",
      "6 dias",
      "7 dias",
      "8 dias",
      "10 dias"
    ],
    correta: 3,
    explicacao: "Método Processo/Produto: (5 × 6 × 4) / 150 = (4 × 5 × x) / 200 → 120 / 150 = 20x / 200 → 4/5 = x / 10 → 5x = 40 → x = 8 dias."
  },
  {
    id: "rlm-28",
    topico: "Orientação Espacial",
    materialSecao: "rlm-sequencias-orientacao",
    enunciado: "Um servidor sai da sede principal em deslocamento externo, percorrendo exatamente 600 metros em linha reta para o Norte e, logo em seguida, 800 metros em linha reta para o Leste. A distância em linha reta entre o ponto de chegada e o ponto de partida é:",
    alternativas: [
      "700 metros.",
      "900 metros.",
      "1.000 metros (1 km).",
      "1.200 metros.",
      "1.400 metros."
    ],
    correta: 2,
    explicacao: "Norte e Leste formam ângulo reto (90°). Pelo Teorema de Pitágoras: d = √(600² + 800²) = √(360.000 + 640.000) = √1.000.000 = 1.000 metros (1 km)."
  },
  {
    id: "rlm-29",
    topico: "Raciocínio Sequencial — Sequências Cíclicas",
    materialSecao: "rlm-sequencias-orientacao",
    enunciado: "Considere a sequência infinita formada pela repetição contínua das letras da sigla ALEPA:\nA, L, E, P, A, A, L, E, P, A, A, L, E, P, A, ...\nQual letra ocupa exatamente a 2.026ª posição dessa sequência?",
    alternativas: [
      "A",
      "L",
      "E",
      "P",
      "Nenhuma das anteriores."
    ],
    correta: 0,
    explicacao: "O ciclo tem tamanho 5 (1:A, 2:L, 3:E, 4:P, 5:A). Dividindo 2026 por 5: 2026 = 405 × 5 + 1 (resto = 1). A 1ª posição do ciclo corresponde à letra A!"
  },
  {
    id: "rlm-30",
    topico: "Formação de Conceitos e Discriminação de Elementos",
    materialSecao: "rlm-sequencias-orientacao",
    enunciado: "Analise os cinco termos abaixo. Quatro deles pertencem a um mesmo conjunto conceitual homogêneo de espécies normativas do processo legislativo (art. 59 da CF/88), enquanto UM termo NÃO pertence a essa categoria. Assinale o elemento intruso:",
    alternativas: [
      "Lei Complementar.",
      "Lei Ordinária.",
      "Decreto Legislativo.",
      "Resolução.",
      "Parecer Técnico."
    ],
    correta: 4,
    explicacao: "Lei Complementar, Lei Ordinária, Decreto Legislativo e Resolução são espécies normativas do art. 59 da CF/88. 'Parecer Técnico' é um documento opinativo/não normativo, destoando do grupo."
  },
  {
    id: "rlm-31",
    topico: "Diagramas de Venn — Três Conjuntos (Estilo CETAP)",
    materialSecao: "rlm-associacao",
    enunciado: "Em um programa de capacitação da Escola do Legislativo (ELEPA) voltado a 100 servidores, foram ofertados três cursos: Arquivologia (A), Redação Oficial (R) e Licitações (L). O levantamento de matrículas registrou:\n• 48 servidores em A, 42 em R e 30 em L;\n• 18 em A e R; 12 em A e L; 10 em R e L;\n• 6 servidores matriculados nos três cursos simultaneamente.\nCom base nesses dados, quantos servidores se matricularam em **PELO MENOS UM** dos três cursos?",
    alternativas: [
      "74",
      "80",
      "86",
      "92",
      "94"
    ],
    correta: 2,
    explicacao: "Modelo idêntico à questão Q22 da prova Prefeitura de Viseu/PA (CETAP)! Aplicando o Princípio da Inclusão-Exclusão para 3 conjuntos: |A ∪ R ∪ L| = |A| + |R| + |L| − |A∩R| − |A∩L| − |R∩L| + |A∩R∩L| = 48 + 42 + 30 − 18 − 12 − 10 + 6 = 120 − 40 + 6 = 86 servidores!"
  },
  {
    id: "rlm-32",
    topico: "Diagramas de Venn — 'Apenas Um' Conjunto (Estilo CETAP)",
    materialSecao: "rlm-associacao",
    enunciado: "Em uma pesquisa realizada com 45 servidores de uma diretoria sobre a preferência entre dois sucos regionais servidos em eventos institucionais (açaí e cupuaçu), verificou-se que:\n• 32 servidores gostam de açaí;\n• 20 servidores gostam de cupuaçu;\n• 12 servidores gostam de ambos os sabores.\nQuantos servidores entrevistados gostam de **APENAS UM** desses dois sabores?",
    alternativas: [
      "12",
      "20",
      "28",
      "32",
      "40"
    ],
    correta: 2,
    explicacao: "Padrão direto da questão Q29 da prova Viseu/PA (CETAP)! Atenção ao comando 'APENAS UM': Somente açaí = 32 − 12 = 20; Somente cupuaçu = 20 − 12 = 8. Total que gosta de apenas um sabor = 20 + 8 = 28 servidores!"
  },
  {
    id: "rlm-33",
    topico: "Raciocínio Sequencial — Progressão Aritmética Aplicada (Estilo CETAP)",
    materialSecao: "rlm-sequencias-orientacao",
    enunciado: "Um Assistente Administrativo planejou digitalizar um arquivo histórico durante 20 dias úteis seguindo uma Progressão Aritmética (PA): no 1º dia digitalizou 15 páginas e, a cada dia seguinte, aumentou sua produção em exatamente 3 páginas em relação ao dia anterior. Quantas páginas ele digitalizou no **20º dia** e qual foi o **total acumulado** ao final dos 20 dias, respectivamente?",
    alternativas: [
      "72 páginas e 870 páginas.",
      "75 páginas e 900 páginas.",
      "69 páginas e 840 páginas.",
      "72 páginas e 720 páginas.",
      "60 páginas e 750 páginas."
    ],
    correta: 0,
    explicacao: "Inspirada na questão Q21 da prova Viseu/PA (CETAP)! Termo geral da PA: a₂₀ = a₁ + (n − 1)·r = 15 + 19 × 3 = 15 + 57 = 72 páginas. Soma dos 20 termos: S₂₀ = (a₁ + a₂₀) × n / 2 = (15 + 72) × 20 / 2 = 87 × 10 = 870 páginas!"
  },
  {
    id: "rlm-34",
    topico: "Princípio Fundamental da Contagem (Estilo CETAP)",
    materialSecao: "rlm-sequencias-orientacao",
    enunciado: "Para codificar caixas de arquivo intermediário, o setor de protocolo definiu etiquetas com **5 posições sequenciais**, podendo cada posição ser preenchida livremente por qualquer uma das 4 letras `{A, B, C, D}`, permitida a repetição de letras. Quantos códigos distintos podem ser gerados por esse padrão?",
    alternativas: [
      "20",
      "64",
      "256",
      "625",
      "1.024"
    ],
    correta: 4,
    explicacao: "Baseada diretamente na questão Q26 da prova Viseu/PA (CETAP)! Pelo Princípio Fundamental da Contagem, cada uma das 5 posições admite 4 escolhas independentes: 4 × 4 × 4 × 4 × 4 = 4⁵ = 1.024 códigos distintos!"
  },
  {
    id: "rlm-35",
    topico: "Probabilidade Básica e Números Primos (Estilo CETAP)",
    materialSecao: "rlm-conjuntos-numericos",
    enunciado: "Em uma auditoria por amostragem, foram colocadas em uma urna 50 fichas idênticas numeradas de 1 a 50. Retirando-se aleatoriamente uma única ficha, qual é a probabilidade de que o número sorteado seja um **número primo menor que 20**?",
    alternativas: [
      "12%",
      "14%",
      "16%",
      "18%",
      "20%"
    ],
    correta: 2,
    explicacao: "Modelo fiel à questão Q28 da prova Viseu/PA (CETAP)! Os números primos menores que 20 são: {2, 3, 5, 7, 11, 13, 17, 19} — total de 8 números (lembre-se: 1 NÃO é primo e 2 é o único primo par!). Probabilidade = 8 / 50 = 16 / 100 = 16%!"
  },
  {
    id: "rlm-36",
    topico: "Porcentagem — Aumento e Desconto Sucessivos de 25% (Estilo CETAP)",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Um material de expediente sofreu um reajuste de **+25%** em seu preço unitário no primeiro trimestre e, no trimestre seguinte, recebeu um desconto de **25%** sobre o novo valor já reajustado. Comparando-se o preço final com o preço original, constata-se que houve:",
    alternativas: [
      "Manutenção exata do preço original (variação nula).",
      "Redução líquida de 5,00%.",
      "Redução líquida de 6,25%.",
      "Aumento líquido de 6,25%.",
      "Redução líquida de 12,50%."
    ],
    correta: 2,
    explicacao: "Clássico da CETAP (Viseu/PA Q25)! Usando fatores multiplicativos: 1,00 × 1,25 × 0,75 = 0,9375 → 93,75% do valor inicial, o que equivale a uma redução líquida de 100% − 93,75% = 6,25%!"
  },
  {
    id: "rlm-37",
    topico: "Análise Quantitativa — Média, Mediana e Valores Extremos (Estilo CETAP)",
    materialSecao: "rlm-conjuntos-numericos",
    enunciado: "Cinco servidores de uma seção despacharam, em determinada semana, as seguintes quantidades de processos: `{10, 12, 12, 16, 50}`. Analise as afirmativas sobre esse conjunto de dados:\nI. A média aritmética semanal do setor é igual a 20 processos.\nII. A mediana do conjunto é igual a 12 processos.\nIII. A moda (valor mais frequente) também é igual a 12 processos.\nIV. A presença do valor extremo `50` puxou a média aritmética para cima, tornando a mediana uma medida mais representativa do desempenho típico da maioria dos servidores.\nEstão CORRETAS as afirmativas:",
    alternativas: [
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I, II e III.",
      "Apenas I, III e IV.",
      "I, II, III e IV."
    ],
    correta: 4,
    explicacao: "Inspirada na questão Q24 da prova Viseu/PA (CETAP)! Média = (10+12+12+16+50)/5 = 100/5 = 20 (I: V); Mediana (termo central ordenado) = 12 (II: V); Moda = 12 (III: V); e valores discrepantes (outliers) distorcem a média, mas não a mediana (IV: V)!"
  },
  {
    id: "rlm-38",
    topico: "Divisão Diretamente Proporcional — Rateio (Estilo CETAP)",
    materialSecao: "rlm-proporcao-porcentagem",
    enunciado: "Três técnicos — Carlos, Diana e Eduardo — participaram de uma força-tarefa especial que concedeu um rateio total de R$ 24.000,00 em bolsas de produtividade, dividido de forma **diretamente proporcional** às horas dedicadas por cada um: Carlos dedicou 20 horas, Diana dedicou 30 horas e Eduardo dedicou 50 horas. Qual valor coube exatamente a **Diana**?",
    alternativas: [
      "R$ 4.800,00.",
      "R$ 6.000,00.",
      "R$ 7.200,00.",
      "R$ 8.000,00.",
      "R$ 12.000,00."
    ],
    correta: 2,
    explicacao: "Padrão da questão Q30 da prova Viseu/PA (CETAP)! Soma das partes: 20 + 30 + 50 = 100 horas. Constante de proporcionalidade: k = 24.000 / 100 = R$ 240,00 por hora. Logo, Diana recebeu 30 × 240 = R$ 7.200,00 (Carlos = R$ 4.800 e Eduardo = R$ 12.000)."
  },
  {
    id: "rlm-39",
    topico: "Asserção-Razão — Equivalência e Negação Condicional (Estilo CETAP)",
    materialSecao: "rlm-proposicoes",
    enunciado: "Analise as duas asserções a seguir e a relação proposta entre elas:\n\nI. A proposição \"Se o processo está completo, então o parecer é emitido\" é logicamente equivalente a \"Se o parecer não é emitido, então o processo não está completo\", e sua negação lógica é \"O processo está completo e o parecer não é emitido\".\n\n**PORQUE**\n\nII. Na lógica proposicional, uma condicional `(p → q)` possui a mesma tabela-verdade que sua contrapositiva `(~q → ~p)` e assume valor lógico FALSO exclusivamente quando o antecedente `p` é verdadeiro e o consequente `q` é falso.\n\nA respeito dessas asserções, assinale a alternativa CORRETA:",
    alternativas: [
      "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
      "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.",
      "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
      "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
      "As asserções I e II são proposições falsas."
    ],
    correta: 0,
    explicacao: "Formato Asserção-Razão (PORQUE) da Fundação CETAP aplicado à Lógica Proposicional! Ambas são verdadeiras e a propriedade estrutural da tabela-verdade em II justifica tanto a contrapositiva quanto a negação `p ∧ ~q` apresentadas em I."
  },
  {
    id: "rlm-40",
    topico: "Lógica Proposicional — Negações de Quantificadores e De Morgan (Estilo CETAP)",
    materialSecao: "rlm-proposicoes",
    enunciado: "Analise as quatro negações lógicas propostas abaixo:\nI. A negação de \"Todos os relatórios foram revisados\" é \"Pelo menos um relatório não foi revisado\".\nII. A negação de \"Nenhum servidor faltou à audiência\" é \"Algum servidor faltou à audiência\".\nIII. A negação de \"Ana protocolou o ofício ou Bruno arquivou a ata\" é \"Ana não protocolou o ofício e Bruno não arquivou a ata\".\nIV. A negação de \"Se chove em Belém, então o trânsito atrasa\" é \"Se não chove em Belém, então o trânsito não atrasa\".\nEstão CORRETAS apenas as proposições:",
    alternativas: [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    correta: 1,
    explicacao: "Apenas I, II e III estão corretas! IV apresenta o erro mais cobrado em concursos: a negação de uma condicional `p → q` NÃO é `~p → ~q`, mas sim `p ∧ ~q` ('Chove em Belém E o trânsito NÃO atrasa')."
  }
];
