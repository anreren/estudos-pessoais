window.BANCO_QUESTOES = window.BANCO_QUESTOES || {};

window.BANCO_QUESTOES.informatica = [
  {
    "id": "info-01",
    "topico": "Windows 10 e Windows 11",
    "materialSecao": "info-so-hardware",
    "enunciado": "No sistema operacional Microsoft Windows 10 e Windows 11 (em português), um servidor administrativo precisa bloquear rapidamente sua estação de trabalho ao se ausentar da mesa e, ao retornar, abrir diretamente o Gerenciador de Tarefas. Os atalhos corretos para essas duas ações são, respectivamente:",
    "alternativas": [
      "Win + D  e  Ctrl + Alt + F4",
      "Win + L  e  Ctrl + Shift + Esc",
      "Win + E  e  Alt + Tab",
      "Win + I  e  Shift + Delete",
      "Ctrl + L  e  Win + Tab"
    ],
    "correta": 1,
    "explicacao": "Win + L bloqueia a sessão (Lock) e Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas. (Win + E abre o Explorador de Arquivos; Win + D mostra a Área de Trabalho; Win + I abre Configurações)."
  },
  {
    "id": "info-02",
    "topico": "Gerenciamento de Arquivos e Pastas",
    "materialSecao": "info-so-hardware",
    "enunciado": "No Explorador de Arquivos do Windows 11, ao tentar salvar uma planilha de controle administrativo, o sistema impedirá o salvamento caso o nome do arquivo contenha determinados caracteres reservados. Assinale a alternativa que apresenta um nome de arquivo VÁLIDO no Windows:",
    "alternativas": [
      "Relatorio_13/12/2026.xlsx",
      "Protocolo:Geral_2026.xlsx",
      "Ata*Sessao_ALEPA.xlsx",
      "Controle_Frequencia-2026_(Final).xlsx",
      "Oficio<01>_Mesa.xlsx"
    ],
    "correta": 3,
    "explicacao": "O Windows proíbe os caracteres \\ / : * ? \" < > | em nomes de arquivos. Apenas a alternativa D usa caracteres válidos (underscore, hífen e parênteses)."
  },
  {
    "id": "info-03",
    "topico": "Hardware, Memórias e Periféricos",
    "materialSecao": "info-so-hardware",
    "enunciado": "Acerca dos componentes de hardware e periféricos de um microcomputador, analise as afirmativas abaixo:\nI. A memória RAM é volátil, perdendo os dados armazenados quando o computador é desligado.\nII. O SSD (Solid State Drive) utiliza memória flash sem partes mecânicas giratórias, oferecendo maior velocidade de leitura/gravação que um HD convencional.\nIII. A impressora multifuncional e o monitor sensível ao toque (touchscreen) são classificados como periféricos híbridos (de entrada e saída).\nIV. A Unidade Lógica e Aritmética (ULA) localiza-se na placa de rede e serve exclusivamente para converter sinal digital em analógico.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! IV está errada porque a ULA (Unidade Lógica e Aritmética) é um componente interno do processador (CPU), responsável por cálculos aritméticos e operações lógicas."
  },
  {
    "id": "info-04",
    "topico": "Microsoft Excel — Fórmulas e Funções",
    "materialSecao": "info-office",
    "contexto": "Considere uma planilha do Microsoft Excel (versão em português) com os seguintes valores numéricos:\nA1 = 10  |  A2 = 20  |  A3 = 30  |  A4 = 40  |  B1 = 5",
    "enunciado": "Qual será o resultado exibido na célula C1 se nela for inserida a fórmula `=SE(MÉDIA(A1:A4)>20; SOMA(A1;A4); B1*2)`?",
    "alternativas": [
      "10",
      "25",
      "50",
      "100",
      "#VALOR!"
    ],
    "correta": 2,
    "explicacao": "Passo a passo: MÉDIA(A1:A4) = (10+20+30+40)/4 = 25. Como 25 > 20 é VERDADEIRO, executa-se o segundo argumento: SOMA(A1;A4). Atenção ao ponto e vírgula (;): soma apenas A1 e A4 (10 + 40 = 50), e NÃO o intervalo A1:A4 (que daria 100)!"
  },
  {
    "id": "info-05",
    "topico": "Microsoft Excel — Referência Absoluta e PROCV",
    "materialSecao": "info-office",
    "enunciado": "No Microsoft Excel (e no LibreOffice Calc), ao copiar uma fórmula para outras células, qual recurso impede que uma referência de célula seja alterada automaticamente, e qual função busca um valor na primeira coluna de uma tabela retornando um dado correspondente em outra coluna à direita?",
    "alternativas": [
      "Referência absoluta (sinal `$`, ex.: `$B$2`) e função `PROCV`.",
      "Referência relativa (sinal `#`, ex.: `#B#2`) e função `CONT.NÚM`.",
      "Referência mista (sinal `%`, ex.: `%B2`) e função `CONCATENAR`.",
      "Referência circular (sinal `@`, ex.: `@B2`) e função `HOJE`.",
      "Referência fixa (sinal `&`, ex.: `&B&2`) e função `MÁXIMO`."
    ],
    "correta": 0,
    "explicacao": "O cifrão `$` fixa linha e/ou coluna (`$B$2` = referência absoluta; atalho F4). A função `PROCV` realiza procura vertical na primeira coluna da matriz-tabela e retorna o valor da coluna indicada no índice."
  },
  {
    "id": "info-06",
    "topico": "Microsoft Word e LibreOffice Writer (Estilo CETAP)",
    "materialSecao": "info-office",
    "enunciado": "Um servidor da ALEPA alterna diariamente entre o Microsoft Word (em português) e o LibreOffice Writer 7 (em português). Analise as afirmativas abaixo:\nI. No Microsoft Word em português, `Ctrl + B` salva o documento e `Ctrl + N` aplica negrito.\nII. No LibreOffice Writer 7, a extensão padrão de salvamento de documentos de texto é `.odt`.\nIII. O LibreOffice Writer permite exportar documentos diretamente para o formato `.pdf` sem instalar programas de terceiros.\nIV. O recurso \"Pincel de Formatação\" copia exclusivamente o texto digitado, ignorando fonte, cor e alinhamento.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretas! No Word em português, Ctrl+B salva e Ctrl+N aplica negrito; no Writer, a extensão padrão é .odt e há exportação nativa para PDF. IV está errada porque o Pincel de Formatação copia justamente a FORMATAÇÃO (fonte, tamanho, cor, alinhamento), e não o texto."
  },
  {
    "id": "info-07",
    "topico": "PowerPoint e Impress",
    "materialSecao": "info-office",
    "enunciado": "No Microsoft PowerPoint (2013 até O365), qual recurso permite definir de forma centralizada o logotipo da instituição, as fontes, o rodapé e o layout que serão aplicados automaticamente a todos os slides de uma apresentação?",
    "alternativas": [
      "Transição de Slides",
      "Slide Mestre",
      "Classificação de Slides",
      "Painel de Animação",
      "SmartArt"
    ],
    "correta": 1,
    "explicacao": "O Slide Mestre (guia Exibir) armazena informações sobre o tema e os layouts de slides, permitindo padronizar logotipo, cores, fontes e cabeçalhos/rodapés em toda a apresentação de uma só vez."
  },
  {
    "id": "info-08",
    "topico": "Segurança da Informação — Malwares",
    "materialSecao": "info-seguranca",
    "enunciado": "Um servidor recebeu um anexo suspeito por e-mail; após executá-lo, todos os documentos da pasta compartilhada da repartição foram criptografados e surgiu na tela uma mensagem exigindo pagamento em criptomoeda para devolução da chave de acesso. Esse ataque caracteriza um malware do tipo:",
    "alternativas": [
      "Adware",
      "Keylogger",
      "Ransomware",
      "Rootkit",
      "Cookie malicioso"
    ],
    "correta": 2,
    "explicacao": "Ransomware sequestra dados por meio de criptografia e exige resgate (ransom) para liberar o acesso. A principal defesa preventiva contra perda de dados é manter backups atualizados e isolados (offline/imutáveis)."
  },
  {
    "id": "info-09",
    "topico": "Segurança — Hardening, USB e Firewall",
    "materialSecao": "info-seguranca",
    "enunciado": "Sobre mecanismos de segurança da informação em ambientes corporativos, assinale a alternativa CORRETA:",
    "alternativas": [
      "Hardening consiste em liberar todas as portas de rede e instalar o maior número possível de aplicativos para melhorar a compatibilidade do computador.",
      "Um firewall pessoal bem configurado dispensa totalmente o uso de software antimalware, pois identifica e remove vírus dentro de arquivos PDF e pendrives.",
      "Hardening é o processo de fortalecimento de sistemas mediante redução da superfície de ataque (desativação de serviços/portas desnecessários, aplicação de atualizações e privilégios mínimos), e o controle de dispositivos USB previne vazamento de dados e infecções por mídias removíveis.",
      "O princípio da Confidencialidade garante exclusivamente que o servidor de arquivos nunca fique fora do ar por falta de energia.",
      "O ataque de Phishing consiste na sobrecarga de requisições de rede para derrubar um site governamental."
    ],
    "correta": 2,
    "explicacao": "Hardening = endurecimento/redução da superfície de ataque. Controle de USB = bloqueia/restringe pendrives contra vazamento e malware. Erros: B (firewall filtra tráfego de rede e NÃO substitui antimalware); D (isso é Disponibilidade); E (isso é DDoS, não Phishing)."
  },
  {
    "id": "info-10",
    "topico": "Redes — Internet, Intranet e Protocolos",
    "materialSecao": "info-redes-web",
    "enunciado": "Acerca dos conceitos de Internet, Intranet e protocolos de rede e correio eletrônico, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "A Intranet utiliza a mesma arquitetura de protocolos da Internet (TCP/IP, HTTP/HTTPS), porém com acesso restrito ao público interno autorizado da organização.",
      "O protocolo SMTP é utilizado para o envio de mensagens de correio eletrônico entre clientes e servidores.",
      "O protocolo IMAP permite acessar e sincronizar mensagens de e-mail diretamente no servidor, mantendo-as acessíveis em múltiplos dispositivos.",
      "O protocolo POP3 baixa as mensagens do servidor para o dispositivo do usuário, permitindo consulta posterior mesmo offline.",
      "O protocolo DNS tem como função exclusiva criptografar as páginas web no padrão HTTPS na porta 21."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! O DNS (Domain Name System) traduz nomes de domínio amigáveis em endereços IP; quem criptografa o HTTPS é o TLS/SSL (na porta padrão 443, e não 21, que é do FTP)."
  },
  {
    "id": "info-11",
    "topico": "Navegadores Web — Navegação Anônima / InPrivate (Estilo CETAP)",
    "materialSecao": "info-redes-web",
    "enunciado": "Carla abre uma janela de Navegação Anônima no Google Chrome (ou InPrivate no Microsoft Edge) em um computador da repartição. Sobre esse modo de navegação, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "Ao fechar todas as janelas anônimas, o navegador não mantém armazenado localmente o histórico de páginas visitadas naquela sessão.",
      "Cookies e dados temporários de formulários criados durante a sessão anônima são descartados após o encerramento de todas as janelas anônimas.",
      "Arquivos baixados intencionalmente pelo usuário e favoritos salvos durante a sessão anônima permanecem gravados no computador.",
      "O modo anônimo NÃO impede que o provedor de internet, o administrador da rede corporativa ou os sites acessados identifiquem o acesso.",
      "A navegação anônima torna o computador completamente invisível na rede corporativa e bloqueia automaticamente todos os vírus e ataques de phishing."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA (pegadinha clássica da CETAP)! O modo anônimo apenas evita gravar histórico/cookies localmente no computador após fechar a janela — ele NÃO oculta o tráfego da rede corporativa/provedor e NÃO funciona como antivírus nem bloqueador de phishing."
  },
  {
    "id": "info-12",
    "topico": "Correio Eletrônico — Microsoft Outlook",
    "materialSecao": "info-redes-web",
    "enunciado": "No Microsoft Outlook (versões 2013 a O365), um servidor enviou um e-mail preenchendo os campos da seguinte maneira: Para: `ana@alepa.pa.gov.br`; Cc: `bruno@alepa.pa.gov.br`; Cco: `carlos@alepa.pa.gov.br`. Se Ana clicar em 'Responder a Todos', quem receberá a resposta?",
    "alternativas": [
      "Apenas o remetente original.",
      "O remetente original, Bruno e Carlos.",
      "O remetente original e Bruno (Carlos não receberá, pois estava em Cco).",
      "Apenas Bruno e Carlos.",
      "Ninguém, pois o Outlook bloqueia respostas quando há campo Cco preenchido."
    ],
    "correta": 2,
    "explicacao": "Quem está em Cco (Com Cópia Oculta) permanece invisível aos destinatários dos campos Para e Cc. Portanto, ao clicar em 'Responder a Todos', a resposta vai apenas para o remetente original e para Bruno (Cc), jamais para Carlos (Cco)."
  },
  {
    "id": "info-13",
    "topico": "Armazenamento em Nuvem — SharePoint e Google Drive (Estilo CETAP)",
    "materialSecao": "info-colaboracao-nuvem",
    "enunciado": "Acerca das plataformas de armazenamento e colaboração em nuvem previstas no edital (Microsoft SharePoint e Google Drive), analise os itens abaixo:\nI. O Microsoft SharePoint permite criar bibliotecas de documentos corporativos, sites de intranet, controle de versões e gestão granular de permissões integrados ao Microsoft Teams.\nII. No Google Drive, um arquivo compartilhado pode receber permissões distintas como Leitor, Comentador ou Editor.\nIII. O armazenamento em nuvem permite acesso multiplataforma mediante conexão à Internet e autenticação de conta.\nIV. Arquivos salvos no SharePoint ou no Google Drive ficam restritos apenas ao disco rígido local da máquina onde foram criados, não podendo ser editados de outro computador.\nEstão CORRETOS apenas os itens:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretos! IV contraria o próprio conceito de computação em nuvem, cuja essência é o acesso remoto e colaborativo a partir de diferentes dispositivos autorizados."
  },
  {
    "id": "info-14",
    "topico": "EaD (Moodle), Wikis e Fóruns (Estilo CETAP)",
    "materialSecao": "info-colaboracao-nuvem",
    "enunciado": "A Escola do Poder Legislativo (ELEPA) oferece cursos de capacitação a distância utilizando Moodle, fóruns e wikis. Sobre essas ferramentas educacionais digitais, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "O Moodle é um Ambiente Virtual de Aprendizagem (AVA / LMS) de código aberto voltado à gestão de cursos EaD, atividades, questionários e acompanhamento de alunos.",
      "Fóruns de discussão permitem comunicação assíncrona estruturada por tópicos entre tutores e participantes.",
      "Wikis são ferramentas colaborativas que possibilitam a criação e edição coletiva de páginas de texto com registro do histórico de alterações.",
      "No Moodle, é possível disponibilizar materiais em PDF, vídeos, links externos e tarefas com prazo de entrega controlado.",
      "O Moodle é um sistema operacional proprietário de código fechado que impede a criação de fóruns ou questionários avaliativos."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! O Moodle é um software livre / código aberto (open source) de Ambiente Virtual de Aprendizagem (LMS/AVA) — e não um sistema operacional proprietário — com amplo suporte nativo a fóruns, wikis e questionários."
  },
  {
    "id": "info-15",
    "topico": "Ferramentas Colaborativas, Redes Sociais e Multimídia",
    "materialSecao": "info-colaboracao-nuvem",
    "enunciado": "Acerca das ferramentas colaborativas (Microsoft Teams, Cisco Webex, Google Meet), redes sociais e tecnologias multimídia, assinale a alternativa INCORRETA:",
    "alternativas": [
      "Microsoft Teams, Cisco Webex e Google Meet possibilitam videoconferências, compartilhamento de tela e trabalho colaborativo remoto.",
      "A tecnologia de streaming permite reproduzir áudio ou vídeo continuamente pela rede sem a necessidade de baixar previamente o arquivo completo.",
      "O LinkedIn é uma rede social voltada prioritariamente ao relacionamento profissional e corporativo.",
      "Arquivos no formato MP4 são amplamente utilizados para vídeo digital, enquanto MP3 e WAV são formatos de áudio.",
      "No WhatsApp e no Telegram, é tecnicamente impossível criar grupos ou transmitir documentos em formato PDF."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA: tanto o WhatsApp quanto o Telegram permitem a criação de grupos/canais e o envio de documentos em PDF e outros formatos."
  },
  {
    "id": "info-16",
    "topico": "Windows 10 e Windows 11 — Operações com Arquivos",
    "materialSecao": "info-so-hardware",
    "enunciado": "No Explorador de Arquivos do Windows 10/11, qual é o comportamento PADRÃO ao arrastar um arquivo com o botão esquerdo do mouse (sem pressionar nenhuma tecla auxiliar) de uma pasta na unidade `C:` para outra pasta na MESMA unidade `C:`, e de `C:` para um pendrive na unidade `E:`?",
    "alternativas": [
      "Copia em ambos os casos.",
      "Move na mesma unidade (`C:` → `C:`) e Copia para outra unidade (`C:` → `E:`).",
      "Copia na mesma unidade (`C:` → `C:`) e Move para outra unidade (`C:` → `E:`).",
      "Cria um atalho em ambos os casos.",
      "Exclui o arquivo original automaticamente em ambos os casos."
    ],
    "correta": 1,
    "explicacao": "Regra clássica do Windows muito cobrada pela CETAP: arrastar na MESMA unidade = MOVE; arrastar para UNIDADE DIFERENTE = COPIA! (Segurar Ctrl força cópia; segurar Shift força mover)."
  },
  {
    "id": "info-17",
    "topico": "Windows 10 e Windows 11 — Exclusão e Lixeira",
    "materialSecao": "info-so-hardware",
    "enunciado": "Um servidor seleciona um arquivo armazenado na pasta Documentos (disco local `C:`) no Windows 11 e pressiona o atalho `Shift + Delete`, confirmando a caixa de diálogo. O que acontece com esse arquivo?",
    "alternativas": [
      "Ele é enviado para a Lixeira do Windows, podendo ser restaurado com um clique.",
      "Ele é excluído permanentemente sem passar pela Lixeira.",
      "Ele é movido automaticamente para a pasta Downloads.",
      "Ele é compactado em formato `.zip`.",
      "Ele é enviado para o Microsoft OneDrive."
    ],
    "correta": 1,
    "explicacao": "`Delete` comum em disco local envia para a Lixeira; `Shift + Delete` exclui permanentemente ignorando a Lixeira (assim como excluir arquivos diretamente de pendrives/unidades de rede!)."
  },
  {
    "id": "info-18",
    "topico": "Hardware — Memórias e CPU",
    "materialSecao": "info-so-hardware",
    "enunciado": "Ordene as memórias de um microcomputador da MAIS RÁPIDA (e de menor capacidade, mais próxima do núcleo do processador) para a MAIS LENTA (e de maior capacidade de armazenamento permanente):",
    "alternativas": [
      "HD/SSD → Memória RAM → Memória Cache → Registradores.",
      "Registradores → Memória Cache → Memória RAM → SSD/HD.",
      "Memória RAM → Registradores → SSD/HD → Memória Cache.",
      "Memória Cache → SSD/HD → Registradores → Memória RAM.",
      "SSD/HD → Registradores → Memória Cache → Memória RAM."
    ],
    "correta": 1,
    "explicacao": "Hierarquia clássica de memórias (da mais rápida para a mais lenta): Registradores (dentro da CPU) → Cache (L1, L2, L3) → RAM (memória principal) → Armazenamento secundário (SSD/HD)."
  },
  {
    "id": "info-19",
    "topico": "Microsoft Excel — CONT.SE e SOMASE",
    "materialSecao": "info-office",
    "contexto": "Em uma planilha do Excel, o intervalo `A1:A5` contém os setores: `Protocolo`, `Arquivo`, `Protocolo`, `Patrimônio`, `Protocolo`. O intervalo `B1:B5` contém as quantidades de chamados: `4`, `2`, `6`, `5`, `10`.",
    "enunciado": "Qual será o resultado da fórmula `=SOMASE(A1:A5; \"Protocolo\"; B1:B5)`?",
    "alternativas": [
      "3",
      "10",
      "20",
      "27",
      "14"
    ],
    "correta": 2,
    "explicacao": "A função `SOMASE` soma os valores em `B1:B5` correspondentes às linhas em que `A1:A5` é igual a `\"Protocolo\"`: linhas 1, 3 e 5 → 4 + 6 + 10 = 20! (Se fosse `CONT.SE(A1:A5; \"Protocolo\")`, retornaria 3)."
  },
  {
    "id": "info-20",
    "topico": "Microsoft Excel — MAIOR e MENOR",
    "materialSecao": "info-office",
    "contexto": "Considere os valores nas células `A1:A5`: `12`, `45`, `18`, `30`, `50`.",
    "enunciado": "Os resultados das fórmulas `=MAIOR(A1:A5; 2)` e `=MENOR(A1:A5; 2)` são, respectivamente:",
    "alternativas": [
      "50 e 12.",
      "45 e 18.",
      "30 e 18.",
      "45 e 12.",
      "50 e 18."
    ],
    "correta": 1,
    "explicacao": "Ordenando os valores: 12, 18, 30, 45, 50. O 2º MAIOR valor é 45; o 2º MENOR valor é 18! (Atenção: `MÁXIMO` dá 50 e `MÍNIMO` dá 12)."
  },
  {
    "id": "info-21",
    "topico": "Microsoft Word — Recursos de Edição",
    "materialSecao": "info-office",
    "enunciado": "No Microsoft Word (versões 2013 a O365), qual recurso permite gerar automaticamente dezenas de ofícios ou declarações personalizados (mudando apenas nome, cargo e matrícula em cada cópia) a partir de um documento-modelo e de uma planilha do Excel?",
    "alternativas": [
      "Mala Direta.",
      "Pincel de Formatação.",
      "Quebra de Coluna.",
      "Controle de Alterações.",
      "Capitular."
    ],
    "correta": 0,
    "explicacao": "Mala Direta (guia Correspondências) integra um documento-base do Word a uma lista de dados (como planilha Excel) para gerar automaticamente cartas, ofícios, certificados ou etiquetas personalizadas."
  },
  {
    "id": "info-22",
    "topico": "PowerPoint e Impress — Atalhos de Apresentação",
    "materialSecao": "info-office",
    "enunciado": "Durante a edição de uma apresentação de slides no Microsoft PowerPoint (e no LibreOffice Impress), os atalhos de teclado utilizados para iniciar o Modo de Apresentação a partir do PRIMEIRO slide e a partir do SLIDE ATUAL são, respectivamente:",
    "alternativas": [
      "F2 e Ctrl + F2.",
      "F5 e Shift + F5.",
      "F7 e Ctrl + F7.",
      "Ctrl + P e Alt + P.",
      "Esc e Enter."
    ],
    "correta": 1,
    "explicacao": "`F5` inicia a apresentação desde o 1º slide; `Shift + F5` inicia exatamente a partir do slide selecionado no momento; `Esc` encerra a apresentação."
  },
  {
    "id": "info-23",
    "topico": "Segurança da Informação — Assinatura Digital e Criptografia",
    "materialSecao": "info-seguranca",
    "enunciado": "Na assinatura digital de documentos oficiais eletrônicos (padrão ICP-Brasil) usando criptografia assimétrica, assinale a alternativa CORRETA sobre as propriedades garantidas:",
    "alternativas": [
      "A assinatura digital garante apenas a confidencialidade do arquivo, impedindo que qualquer pessoa leia o texto.",
      "A assinatura digital utiliza a chave privada do signatário para assinar e a chave pública para verificação, garantindo autenticidade, integridade e não repúdio (irretratabilidade).",
      "Qualquer imagem escaneada de uma assinatura a caneta colada em um arquivo Word possui a mesma segurança criptográfica de uma assinatura digital ICP-Brasil.",
      "Na criptografia assimétrica, utiliza-se uma única chave secreta compartilhada tanto para cifrar quanto para decifrar.",
      "Se uma única letra do documento for alterada após a assinatura digital, a assinatura continua sendo validada como íntegra."
    ],
    "correta": 1,
    "explicacao": "Assinatura digital = criptografia assimétrica (assina com chave PRIVADA, verifica com chave PÚBLICA) + função hash → garante Autenticidade, Integridade e Não Repúdio (Irretratabilidade)! Se 1 único bit for alterado, o hash muda e a assinatura invalida."
  },
  {
    "id": "info-24",
    "topico": "Segurança da Informação — Malwares (Worm x Trojan x Vírus)",
    "materialSecao": "info-seguranca",
    "enunciado": "Diferenciando os principais tipos de códigos maliciosos (malwares), assinale a alternativa CORRETA:",
    "alternativas": [
      "O Worm (verme) precisa obrigatoriamente de um arquivo hospedeiro e da execução manual pelo usuário para se propagar.",
      "O Trojan (Cavalo de Troia) apresenta-se como um programa aparentemente útil ou inofensivo, mas executa ações maliciosas ocultas (como abrir backdoors ou roubar dados) e NÃO se autorreplica sozinho.",
      "O Keylogger tem como única função bloquear o acesso à tela exigindo resgate em bitcoins.",
      "O Vírus de computador propaga-se automaticamente pela rede sem depender de hospedeiro nem de ação humana.",
      "Antimalware é o nome dado a ataques de engenharia social enviados por SMS."
    ],
    "correta": 1,
    "explicacao": "Trojan = disfarça-se de software legítimo e executa funções ocultas sem autorreplicação. Worm = propaga-se automaticamente pela rede explorando falhas (sem hospedeiro). Vírus = precisa de hospedeiro e ação do usuário. Keylogger = captura teclas digitadas."
  },
  {
    "id": "info-25",
    "topico": "Redes — Pesquisa Avançada na Web",
    "materialSecao": "info-redes-web",
    "enunciado": "Um servidor deseja pesquisar no Google exclusivamente arquivos em formato PDF publicados no portal oficial da ALEPA (`alepa.pa.gov.br`) que contenham a expressão exata \"Regimento Interno\". Qual sintaxe de operadores de busca atende EXATAMENTE a esse objetivo?",
    "alternativas": [
      "`Regimento Interno +alepa.pa.gov.br -pdf`",
      "`\"Regimento Interno\" site:alepa.pa.gov.br filetype:pdf`",
      "`(Regimento OR Interno) domain:pdf`",
      "`\"Regimento Interno\" -site:alepa.pa.gov.br`",
      "`link:Regimento_Interno.pdf`"
    ],
    "correta": 1,
    "explicacao": "Aspas `\"...\"` buscam a expressão exata; `site:alepa.pa.gov.br` restringe os resultados ao domínio oficial; `filetype:pdf` filtra apenas documentos PDF!"
  },
  {
    "id": "info-26",
    "topico": "Navegadores Web — Atalhos",
    "materialSecao": "info-redes-web",
    "enunciado": "Um servidor fechou acidentalmente uma aba importante no Google Chrome (ou Microsoft Edge / Mozilla Firefox) enquanto consultava o Diário Oficial. Qual atalho de teclado reabre imediatamente a última aba fechada?",
    "alternativas": [
      "Ctrl + W",
      "Ctrl + T",
      "Ctrl + Shift + T",
      "Ctrl + H",
      "Alt + F4"
    ],
    "correta": 2,
    "explicacao": "`Ctrl + Shift + T` reabre a última aba fechada! (`Ctrl + T` abre nova aba; `Ctrl + W` fecha aba atual; `Ctrl + H` abre histórico; `Alt + F4` fecha a janela)."
  },
  {
    "id": "info-27",
    "topico": "Redes — DNS e DHCP",
    "materialSecao": "info-redes-web",
    "enunciado": "Em redes de computadores baseadas em TCP/IP, os protocolos responsáveis por (1) traduzir endereços amigáveis como `www.alepa.pa.gov.br` em endereços IP numéricos e (2) atribuir automaticamente endereços IP às estações de trabalho conectadas à rede são, respectivamente:",
    "alternativas": [
      "SMTP e POP3.",
      "DNS e DHCP.",
      "FTP e HTTP.",
      "IMAP e TLS.",
      "SSH e VPN."
    ],
    "correta": 1,
    "explicacao": "DNS (Domain Name System) traduz nomes de domínio em endereços IP; DHCP (Dynamic Host Configuration Protocol) distribui automaticamente IP, máscara de sub-rede, gateway e DNS aos dispositivos da rede."
  },
  {
    "id": "info-28",
    "topico": "Ferramentas Colaborativas — Teams, Meet e Webex (Estilo CETAP)",
    "materialSecao": "info-colaboracao-nuvem",
    "enunciado": "Sobre as plataformas colaborativas Microsoft Teams, Google Meet e Cisco Webex, analise as afirmativas:\nI. O Microsoft Teams integra chats corporativos, equipes divididas em canais, videoconferências e edição colaborativa de arquivos vinculados ao SharePoint/OneDrive.\nII. O Google Meet permite realizar reuniões por vídeo diretamente pelo navegador ou aplicativo, com compartilhamento de tela e integração ao Google Agenda.\nIII. O Cisco Webex é uma plataforma corporativa voltada a videoconferências, webinars e colaboração remota entre equipes.\nEstão CORRETAS:",
    "alternativas": [
      "Apenas I.",
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I e III.",
      "Todas (I, II e III)."
    ],
    "correta": 4,
    "explicacao": "Todas as três afirmativas (I, II e III) descrevem corretamente as funcionalidades essenciais do Microsoft Teams, Google Meet e Cisco Webex previstas no edital."
  },
  {
    "id": "info-29",
    "topico": "Windows 11 — Requisitos e Recursos",
    "materialSecao": "info-so-hardware",
    "enunciado": "Em comparação com versões anteriores, o sistema operacional Microsoft Windows 11 introduziu requisitos reforçados de segurança de hardware e recursos de produtividade, dentre os quais se destacam:",
    "alternativas": [
      "Exigência do módulo de segurança TPM 2.0 e Inicialização Segura (Secure Boot), além de Explorador de Arquivos com guias (abas) e Snap Layouts para organização de janelas.",
      "Remoção completa do suporte a redes Wi-Fi e Bluetooth.",
      "Exclusão definitiva do navegador Microsoft Edge e do Microsoft Defender.",
      "Impossibilidade de executar programas do Microsoft Office.",
      "Funcionamento exclusivo em processadores de 32 bits."
    ],
    "correta": 0,
    "explicacao": "O Windows 11 exige arquitetura de 64 bits, Secure Boot e chip/firmware TPM 2.0 (Trusted Platform Module), além de trazer Snap Layouts, Menu Iniciar centralizado e abas no Explorador de Arquivos."
  },
  {
    "id": "info-30",
    "topico": "Correio Eletrônico — Boas Práticas e Phishing",
    "materialSecao": "info-seguranca",
    "enunciado": "Um servidor recebe no Microsoft Outlook um e-mail aparentemente enviado pelo 'Suporte de TI' com tom urgente exigindo que ele clique em um link externo (`http://suporte-alepa-atualiza.xyz`) e informe sua senha institucional sob pena de bloqueio imediato da conta. Esse golpe caracteriza:",
    "alternativas": [
      "Hardening preventivo.",
      "Phishing (engenharia social para captura de credenciais).",
      "Backup incremental.",
      "Autenticação em dois fatores.",
      "Protocolo IMAP seguro."
    ],
    "correta": 1,
    "explicacao": "Phishing utiliza engenharia social (senso de urgência, remetente falso e domínio fraudulento) para induzir a vítima a revelar senhas ou dados sensíveis. Nunca se deve clicar no link nem fornecer senhas por e-mail!"
  },
  {
    "id": "info-31",
    "topico": "Microsoft Word 365 — Proteção com Senha e Referência Cruzada",
    "materialSecao": "info-office",
    "enunciado": "No Microsoft Word (Microsoft 365), um Assistente Administrativo precisa proteger um relatório sigiloso com senha de abertura para impedir acesso não autorizado. Qual é o caminho CORRETO nas guias do Word para criptografar o documento com senha?",
    "alternativas": [
      "Guia 'Exibir' → 'Esquema de Impressão' → 'Proteger Documento' → 'Com senha'.",
      "Guia 'Arquivo' → 'Informações' → 'Proteger Documento' → 'Criptografar com senha', inserir a senha e salvar o documento.",
      "Guia 'Revisão' → 'Controlar Alterações' → 'Bloquear Impressão'.",
      "Guia 'Inserir' → 'Referência Cruzada' → 'Criptografar Texto'.",
      "Guia 'Layout' → 'Margens' → 'Restringir Abertura'."
    ],
    "correta": 1,
    "explicacao": "Questão prática clássica da CETAP (IGEPPS/PA)! No Microsoft Word (2013 a O365), a criptografia com senha de abertura fica em: Arquivo → Informações → Proteger Documento → Criptografar com senha. (Já a Referência Cruzada fica na guia Inserir → Referência Cruzada)."
  },
  {
    "id": "info-32",
    "topico": "Microsoft Word 365 — Mala Direta (Campo de Mesclagem)",
    "materialSecao": "info-office",
    "enunciado": "Na guia 'Correspondências' do Microsoft Word (Microsoft 365), qual é a finalidade exata da funcionalidade **\"Inserir Campo de Mesclagem\"** durante a preparação de ofícios padronizados?",
    "alternativas": [
      "Criar automaticamente uma tabela vazia para digitação manual dos destinatários.",
      "Inserir um novo registro diretamente dentro da planilha-fonte do Excel.",
      "Inserir, no corpo do documento principal, marcadores dinâmicos que serão preenchidos com informações personalizadas provenientes da fonte de dados (como nome, cargo e endereço).",
      "Criptografar o cabeçalho do documento oficial com certificado digital.",
      "Converter o documento do formato `.docx` para `.odt`."
    ],
    "correta": 2,
    "explicacao": "Padrão IGEPPS/PA (CETAP)! Na Mala Direta (guia Correspondências), 'Inserir Campo de Mesclagem' coloca os campos dinâmicos (ex.: `«Nome»`, `«Cargo»`) que puxam automaticamente os dados de cada linha da fonte de dados."
  },
  {
    "id": "info-33",
    "topico": "Excel e Calc — Funções ÍNDICE e MODA",
    "materialSecao": "info-office",
    "enunciado": "No Microsoft Excel (2013 a O365), quais funções permitem, respectivamente, (1) retornar o valor mais frequente (mais comum) em um conjunto de dados numéricos e (2) retornar o valor de um elemento em uma tabela ou matriz a partir dos índices de número de linha e coluna?",
    "alternativas": [
      "`=MEDIANA()` e `=CONT.NÚM()`.",
      "`=MODA()` (ou `=MODO.ÚNICO()`) e `=ÍNDICE()`.",
      "`=MÉDIA()` e `=CORRESP()`.",
      "`=DESVPAD()` e `=SOMASE()`.",
      "`=MAIOR()` e `=PROCX()`."
    ],
    "correta": 1,
    "explicacao": "Cobrado em sequência na prova real da CETAP (IGEPPS Q35 e Q36)! `MODA` (ou `MODO.ÚNICO`) retorna o valor mais frequente de uma amostra; `ÍNDICE` retorna o conteúdo de uma célula em uma matriz dados os números de linha e coluna (enquanto `CORRESP` retorna a posição relativa de um item)."
  },
  {
    "id": "info-34",
    "topico": "LibreOffice Calc / Excel — Funções de Texto (ESQUERDA e PROCURAR)",
    "materialSecao": "info-office",
    "contexto": "Em uma planilha do LibreOffice Calc (ou Microsoft Excel), a célula `A4` contém o texto exato:\n`Joaquim Martins de Oliveira`",
    "enunciado": "Se na célula `B4` for digitada a fórmula `=ESQUERDA(A4; PROCURAR(\" \"; A4; 1)-1)`, qual será o resultado exibido em `B4`?",
    "alternativas": [
      "`Joaquim`",
      "`Joaqui`",
      "`7`",
      "`8`",
      "`Oliveira`"
    ],
    "correta": 0,
    "explicacao": "Questão autêntica da CETAP (SEOP/PA Q26)! Passo a passo: `PROCURAR(\" \"; A4; 1)` encontra a posição do primeiro espaço em `'Joaquim Martins de Oliveira'`, que é a posição 8 (J=1, o=2, a=3, q=4, u=5, i=6, m=7, espaço=8). Subtraindo 1 → `8 - 1 = 7`. Logo `=ESQUERDA(A4; 7)` extrai exatamente os 7 primeiros caracteres: `'Joaquim'`!"
  },
  {
    "id": "info-35",
    "topico": "LibreOffice Calc / Excel — Precedência de Operadores",
    "materialSecao": "info-office",
    "contexto": "Em uma planilha do LibreOffice Calc (ou Excel), a célula `C2` armazena a altura de um servidor em metros (`1,74`) e a célula `D2` armazena o peso em quilogramas (`80,00`). O IMC (Índice de Massa Corporal) é calculado dividindo o peso pelo quadrado da altura: `IMC = Peso / Altura²`.",
    "enunciado": "Assinale a ÚNICA fórmula abaixo cuja sintaxe NÃO produzirá o valor correto do IMC devido à ordem de precedência dos operadores:",
    "alternativas": [
      "`=D2/POTÊNCIA(C2;2)`",
      "`=(D2/C2)/C2`",
      "`=D2/C2*C2`",
      "`=D2/(C2*C2)`",
      "`=D2/(C2^2)`"
    ],
    "correta": 2,
    "explicacao": "Clássico da CETAP (SEOP/PA Q30)! Divisão (`/`) e multiplicação (`*`) têm a MESMA precedência e são avaliadas da esquerda para a direita. Assim, `=D2/C2*C2` calcula `(D2 / C2) * C2`, resultando no próprio `D2` (`80,00`), e NÃO em `D2 / C2²`! Todas as demais calculam corretamente `80 / 1,74²`."
  },
  {
    "id": "info-36",
    "topico": "LibreOffice Writer — Fórmulas em Tabelas Nativas",
    "materialSecao": "info-office",
    "contexto": "No LibreOffice Writer 7+, foi criada uma tabela nativa com a coluna A ('Nome') e a coluna B ('Idade'), da linha 1 (cabeçalho) até a linha 5, contendo em `B2:B5` os valores: `14`, `16`, `15` e `17`.",
    "enunciado": "Sabendo que tabelas nativas do LibreOffice Writer suportam funções básicas de estatística, qual resultado numérico será exibido na célula `B6` ao inserir a fórmula `=sum <B2:B5> / count <B2:B5>`?",
    "alternativas": [
      "4",
      "62",
      "15",
      "15,5",
      "16"
    ],
    "correta": 3,
    "explicacao": "Questão real da CETAP (SEOP/PA Q24 e Q28)! No LibreOffice Writer, `sum <B2:B5>` soma `14 + 16 + 15 + 17 = 62`, e `count <B2:B5>` conta os 4 valores numéricos (`4`). Dividindo: `62 / 4 = 15,5` (média aritmética)."
  },
  {
    "id": "info-37",
    "topico": "Windows 10/11 e Navegador Microsoft Edge",
    "materialSecao": "info-so-hardware",
    "enunciado": "Acerca de recursos do Windows 10/11 e do navegador Microsoft Edge, analise as afirmativas abaixo:\nI. O recurso 'Acesso Rápido' no Explorador de Arquivos permite acessar de forma prática pastas frequentes e arquivos utilizados recentemente.\nII. A Microsoft substituiu o antigo Internet Explorer pelo Microsoft Edge como navegador padrão nas versões atuais do Windows.\nIII. O Microsoft Edge conta com o recurso 'Coleções', que permite organizar, salvar e agrupar abas e links de pesquisa de diferentes sites para consulta posterior.\nIV. Foi apenas com o Microsoft Edge que a Microsoft introduziu pela primeira vez a navegação por abas (o Internet Explorer nunca teve abas).\nEstão CORRETAS apenas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I e III.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Inspirada diretamente em SEOP/PA (Q22 e Q25)! I, II e III são verdadeiras. IV é falsa porque o Internet Explorer já possuía navegação por abas desde a versão IE 7 (lançada em 2006)!"
  },
  {
    "id": "info-38",
    "topico": "Computação em Nuvem — IaaS, PaaS e SaaS",
    "materialSecao": "info-colaboracao-nuvem",
    "enunciado": "No contexto de serviços de computação em nuvem utilizados em órgãos públicos, qual alternativa descreve CORRETAMENTE o modelo **Infraestrutura como Serviço (IaaS)**?",
    "alternativas": [
      "Modelo que disponibiliza aplicativos prontos para uso final diretamente pelo navegador web (como e-mail web ou Google Docs), sem controle sobre servidores.",
      "Modelo que fornece apenas plataforma gerenciada para desenvolvedores compilarem e testarem código-fonte sem gerenciar servidores.",
      "Modelo que permite a criação, o provisionamento e a gestão de recursos computacionais virtuais sob demanda — como servidores virtuais, armazenamento e redes — com escalabilidade e controle sobre a infraestrutura.",
      "Ferramenta exclusiva de antivírus instalada localmente no disco rígido do computador.",
      "Protocolo de transferência de correio eletrônico entre servidores corporativos."
    ],
    "correta": 2,
    "explicacao": "Padrão SEOP/PA (Q27)! IaaS (Infrastructure as a Service) fornece infraestrutura virtualizada (VMs, redes, storage) com alto controle e escalabilidade. (PaaS = plataforma para desenvolvedores — letra B; SaaS = software pronto para o usuário final — letra A)."
  },
  {
    "id": "info-39",
    "topico": "Windows 10/11 — Áreas de Trabalho Virtuais e Linha do Tempo (Estilo CETAP)",
    "materialSecao": "info-so-hardware",
    "enunciado": "Pedro, Assistente Administrativo da ALEPA, utiliza o Windows 10/11 para organizar múltiplos relatórios simultaneamente. Sobre recursos avançados de produtividade do sistema, analise as afirmativas:\nI. O atalho de teclado `Win + Ctrl + D` permite criar rapidamente uma nova Área de Trabalho Virtual.\nII. O atalho `Win + Tab` abre a Visão de Tarefas, exibindo as janelas abertas, áreas de trabalho virtuais e (no Windows 10) a Linha do Tempo (Timeline) de atividades recentes.\nIII. O Windows 10/11 permite executar ambientes de linha de comando Linux (como Bash) por meio do Subsistema do Windows para Linux (WSL).\nIV. No Windows 10/11, é permitido criar duas pastas com o mesmo nome exato (diferenciando apenas maiúsculas e minúsculas, ex.: `Atas` e `atas`) dentro do mesmo diretório padrão NTFS.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Síntese das questões reais da CETAP (AGE/PA Q16, Q17 e Q20 + FSCMP/PA Q16)! I, II e III estão corretas. IV é falsa porque, por padrão, o sistema de arquivos do Windows NÃO diferencia maiúsculas de minúsculas (case-insensitive), impedindo `Atas` e `atas` na mesma pasta."
  },
  {
    "id": "info-40",
    "topico": "Windows 10/11 — Área de Trabalho Remota (mstsc), NTFS e Desinstalação (Estilo CETAP)",
    "materialSecao": "info-so-hardware",
    "enunciado": "Acerca da administração básica e dos recursos nativos do Windows 10/11, analise os itens abaixo:\nI. O comando executável `mstsc` (Microsoft Terminal Services Client) inicia a ferramenta nativa de Conexão de Área de Trabalho Remota.\nII. O sistema de arquivos padrão adotado nas instalações modernas do Windows 10/11 para o disco do sistema é o **NTFS**, que oferece suporte a permissões de segurança, criptografia e arquivos maiores que 4 GB.\nIII. Para desinstalar corretamente um aplicativo instalado no Windows 10/11, deve-se acessar *Configurações → Aplicativos → Aplicativos e Recursos* (ou *Aplicativos instalados*) e clicar em Desinstalar, evitando simplesmente apagar o atalho da Área de Trabalho.\nEstá(ão) CORRETO(S):",
    "alternativas": [
      "Apenas I.",
      "Apenas II.",
      "Apenas I e II.",
      "Apenas II e III.",
      "Todos os itens (I, II e III)."
    ],
    "correta": 4,
    "explicacao": "Reúne três cobranças reais recentes da Fundação CETAP: SEMAS/PA Q16 (`mstsc`), FSCMP/PA Q20 (`NTFS`) e Viseu/PA Q31 (desinstalação via Aplicativos e Recursos). Todos os três itens estão 100% corretos!"
  },
  {
    "id": "info-41",
    "topico": "LibreOffice Calc / Excel — Funções Aninhadas MÉDIA e MENOR (Estilo CETAP)",
    "materialSecao": "info-office",
    "contexto": "Considere uma planilha do LibreOffice Calc (ou Microsoft Excel em português) com os seguintes valores:\nLinha 1: `A1 = 12` | `B1 = 4`  | `C1 = 8`\nLinha 2: `A2 = 20` | `B2 = 10` | `C2 = 16`",
    "enunciado": "Se a servidora Ana inserir na célula `D1` a fórmula `=MÉDIA(MENOR(A1:C1;2);MENOR(A2:C2;2))`, qual resultado numérico será exibido?",
    "alternativas": [
      "7",
      "10",
      "12",
      "14",
      "16"
    ],
    "correta": 2,
    "explicacao": "Modelo exato da questão Q18 da prova AGE/PA (CETAP)! Passo a passo: 1) `MENOR(A1:C1; 2)` retorna o 2º menor valor de `{4, 8, 12}` → `8`; 2) `MENOR(A2:C2; 2)` retorna o 2º menor valor de `{10, 16, 20}` → `16`; 3) `MÉDIA(8; 16) = (8 + 16) / 2 = 12`!"
  },
  {
    "id": "info-42",
    "topico": "Excel (Atalho Filtro) e Navegador Edge (Estilo CETAP)",
    "materialSecao": "info-office",
    "enunciado": "No cotidiano de trabalho de um Assistente Administrativo utilizando o Microsoft Excel e o navegador Microsoft Edge, analise as afirmativas:\nI. No Microsoft Excel (2013 a O365), o atalho de teclado `Ctrl + Shift + L` ativa ou desativa rapidamente o recurso de **Filtro** na tabela selecionada.\nII. No Microsoft Edge, o atalho `Ctrl + Shift + Delete` abre diretamente o painel para limpar dados de navegação, como histórico, cookies e cache.\nIII. Ao arrastar uma pasta com o botão esquerdo do mouse de um diretório para outro **dentro da mesma unidade de disco** (ex.: ambos em `C:`), o comportamento padrão do Windows 10/11 é MOVER a pasta (e não copiar).\nEstão CORRETAS:",
    "alternativas": [
      "Apenas I.",
      "Apenas I e II.",
      "Apenas II e III.",
      "Apenas I e III.",
      "I, II e III."
    ],
    "correta": 4,
    "explicacao": "Combinação exata das cobranças de Viseu/PA Q33 (`Ctrl + Shift + L` no Excel) e SEMAS/PA Q18–Q19 (limpar histórico no Edge + arrastar pasta na mesma unidade move por padrão). Todas as três afirmativas estão corretas!"
  },
  {
    "id": "info-43",
    "topico": "LibreOffice Writer e Impress — Recursos Práticos (Estilo CETAP)",
    "materialSecao": "info-office",
    "enunciado": "Acerca do LibreOffice Writer e do LibreOffice Impress (versão 7+), assinale a única alternativa INCORRETA:",
    "alternativas": [
      "No LibreOffice Writer, ao utilizar 'Salvar como', é possível marcar a opção 'Salvar com senha' para proteger documentos tanto no formato padrão `.odt` quanto em outros formatos suportados, como `.docx`.",
      "No LibreOffice Impress, é possível inserir figuras geométricas, setas e fluxogramas por meio do menu *Inserir → Forma*.",
      "O formato padrão de arquivos de apresentação do LibreOffice Impress é `.odp`, enquanto o do LibreOffice Calc é `.ods`.",
      "No LibreOffice Writer, o recurso de exportação nativa permite gerar arquivos `.pdf` diretamente sem instalar programas externos.",
      "No LibreOffice Writer, a opção 'Salvar com senha' funciona exclusivamente para o formato `.odt`, sendo tecnicamente impossível aplicá-la ao salvar um arquivo em `.docx`."
    ],
    "correta": 4,
    "explicacao": "Pegadinha literal da prova AGE/PA Q19 + FSCMP/PA Q17 (CETAP)! A alternativa E está INCORRETA: o LibreOffice Writer permite salvar com senha em `.odt` e TAMBÉM em formatos como `.docx` (e exportar PDF protegido com senha)."
  },
  {
    "id": "info-44",
    "topico": "Redes e Segurança — SFTP e Servidor Proxy (Estilo CETAP)",
    "materialSecao": "info-redes-web",
    "enunciado": "Na infraestrutura de redes e segurança de órgãos públicos estaduais, analise as afirmativas sobre protocolos e servidores intermediários:\nI. O protocolo **SFTP** (SSH File Transfer Protocol) permite a transferência segura de arquivos pela rede utilizando criptografia sobre o protocolo SSH.\nII. Um **Servidor Proxy** atua como intermediário entre os computadores dos usuários internos e a Internet, podendo realizar controle de acesso a sites, filtragem de conteúdo, anonimização de IPs internos e armazenamento em cache.\nIII. O protocolo **FTP** tradicional transfere credenciais e arquivos em texto claro (sem criptografia nativa), sendo menos seguro que o SFTP.\nIV. O Servidor Proxy substitui completamente a necessidade de senhas de usuário e de software antimalware nas estações de trabalho.\nEstão CORRETAS apenas as afirmativas:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Baseada diretamente nas questões Q18 e Q19 da prova FSCMP/PA (CETAP)! I, II e III estão corretas. IV é falsa: o proxy controla/intermedia o tráfego web, mas não dispensa autenticação nem proteção antimalware nos endpoints."
  },
  {
    "id": "info-45",
    "topico": "Computação em Nuvem — Modelos de Implantação (Estilo CETAP)",
    "materialSecao": "info-colaboracao-nuvem",
    "enunciado": "Na computação em nuvem (Cloud Computing), os modelos de implantação definem onde a infraestrutura está hospedada e quem tem acesso a ela. Sobre os modelos **Nuvem Pública**, **Nuvem Privada** e **Nuvem Híbrida**, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "Na Nuvem Pública, os recursos computacionais são disponibilizados por provedores externos pela Internet e compartilhados (de forma logicamente isolada) entre múltiplos clientes/organizações.",
      "Na Nuvem Privada, a infraestrutura é dedicada exclusivamente a uma única organização, oferecendo maior controle sobre segurança e conformidade de dados sensíveis.",
      "A Nuvem Híbrida combina ambientes de nuvem pública e privada integrados, permitindo que dados e aplicações trafeguem entre eles conforme a necessidade de segurança ou escalabilidade.",
      "A escolha entre nuvem pública, privada ou híbrida envolve critérios como custo, escalabilidade, governança e sensibilidade das informações tratadas pelo órgão.",
      "Na Nuvem Privada, todos os dados armazenados tornam-se automaticamente públicos e acessíveis sem autenticação a qualquer cidadão na Internet."
    ],
    "correta": 4,
    "explicacao": "Inspirada na questão Q20 da prova SEMAS/PA (CETAP)! A letra E é absurda e INCORRETA: a Nuvem Privada é justamente o modelo dedicado exclusivamente a uma organização com controle restrito de acesso."
  },
  {
    "id": "info-46",
    "topico": "Correio Eletrônico (Cco) e Protocolo HTTPS (Estilo CETAP)",
    "materialSecao": "info-redes-web",
    "enunciado": "Mariana envia uma circular administrativa por e-mail para 40 chefes de gabinete e depois acessa o portal da transparência pelo navegador. Analise as proposições abaixo:\nI. Ao inserir os destinatários no campo **Cco** (Cópia Oculta / Bcc), cada destinatário recebe a mensagem sem visualizar os endereços de e-mail dos demais destinatários listados nesse campo.\nII. Em uma URL iniciada por `https://www.alepa.pa.gov.br`, o prefixo `https` indica que a comunicação entre o navegador e o servidor web é protegida por criptografia (TLS/SSL), garantindo confidencialidade e integridade no tráfego.\nIII. O preenchimento do campo **Cc** (Com Cópia) oculta os endereços dos destinatários entre si da mesma forma que o campo **Cco**.\nEstá(ão) CORRETA(S) apenas:",
    "alternativas": [
      "I.",
      "II.",
      "I e II.",
      "II e III.",
      "I, II e III."
    ],
    "correta": 2,
    "explicacao": "Combinação exata das questões Q34 e Q35 da prova Prefeitura de Viseu/PA (CETAP)! Apenas I e II estão corretas. Em III, o campo Cc (Com Cópia) exibe os endereços para TODOS os destinatários — somente o Cco oculta!"
  },
  {
    "id": "info-47",
    "topico": "Asserção-Razão — NTFS, Permissões e Segurança no Windows (Estilo CETAP)",
    "materialSecao": "info-so-hardware",
    "enunciado": "Analise as duas asserções a seguir e a relação proposta entre elas:\n\nI. Em estações corporativas com Windows 10/11, o sistema de arquivos **NTFS** é preferível ao **FAT32** para armazenar bancos de dados, imagens de backup maiores que 4 GB e pastas compartilhadas de setores administrativos.\n\n**PORQUE**\n\nII. Diferentemente do FAT32 (limitado a arquivos individuais de até 4 GB e sem controle nativo de permissões por usuário), o NTFS suporta arquivos de grande porte, listas de controle de acesso (ACLs), criptografia (EFS) e journaling para recuperação após quedas de energia.\n\nA respeito dessas asserções, assinale a alternativa CORRETA:",
    "alternativas": [
      "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
      "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.",
      "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
      "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
      "As asserções I e II são proposições falsas."
    ],
    "correta": 0,
    "explicacao": "Formato Asserção-Razão (PORQUE) da CETAP! Ambas as asserções são verdadeiras e a II justifica tecnicamente a escolha do NTFS sobre o FAT32."
  },
  {
    "id": "info-48",
    "topico": "Asserção-Razão — Firewall, Proxy e Defesa em Profundidade (Estilo CETAP)",
    "materialSecao": "info-seguranca",
    "enunciado": "Analise as duas asserções a seguir e a relação proposta entre elas:\n\nI. Um firewall de rede configurado corretamente em um órgão público dispensa a instalação de softwares antimalware e a aplicação de atualizações de segurança nas estações de trabalho dos servidores.\n\n**PORTANTO**\n\nII. A política de segurança corporativa deve adotar o princípio da defesa em profundidade, combinando firewall, antimalware atualizado, hardening, controle de USB, backups isolados e capacitação contra engenharia social.\n\nA respeito dessas asserções, assinale a alternativa CORRETA:",
    "alternativas": [
      "As asserções I e II são proposições verdadeiras, e a II é uma consequência lógica correta da I.",
      "As asserções I e II são proposições verdadeiras, mas a II não decorre logicamente da I.",
      "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
      "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
      "As asserções I e II são proposições falsas."
    ],
    "correta": 3,
    "explicacao": "Formato Asserção-Razão da CETAP! A asserção I é FALSA (firewall filtra pacotes/portas de rede, mas não impede execução de malware trazido via pendrive ou anexo já baixado e não corrige vulnerabilidades de software). Já a asserção II é VERDADEIRA (defesa em profundidade)!"
  },
  {
    "id": "info-49",
    "topico": "Segurança da Informação — Malwares, Phishing e Backup (Estilo CETAP)",
    "materialSecao": "info-seguranca",
    "enunciado": "Sobre ameaças cibernéticas e boas práticas de segurança da informação em ambientes públicos, assinale a única alternativa INCORRETA:",
    "alternativas": [
      "O ataque de Phishing explora a engenharia social, geralmente por meio de e-mails, SMS ou páginas falsas que imitam instituições legítimas para induzir a vítima a revelar credenciais ou clicar em links maliciosos.",
      "O Worm é um código malicioso capaz de se propagar automaticamente pelas redes explorando vulnerabilidades, sem depender necessariamente de um arquivo hospedeiro ou ação manual do usuário.",
      "O Ransomware criptografa os arquivos da vítima e exige pagamento de resgate pela chave de decifragem, sendo a manutenção de backups offline/imutáveis uma das principais medidas de recuperação.",
      "A autenticação em dois fatores (2FA/MFA) reduz drasticamente o risco de invasão mesmo que a senha de um servidor seja comprometida.",
      "O Cavalo de Troia (Trojan) é um programa que se replica automaticamente por toda a rede corporativa sem jamais precisar ser executado pelo usuário."
    ],
    "correta": 4,
    "explicacao": "A letra E está INCORRETA! Quem se replica automaticamente pela rede é o WORM. O Cavalo de Troia (Trojan) disfarça-se de software legítimo ou útil e precisa ser executado pelo usuário para abrir brechas ou executar ações maliciosas ocultas."
  },
  {
    "id": "info-50",
    "topico": "Colaboração, EaD (Moodle), SharePoint e Google Drive (Estilo CETAP)",
    "materialSecao": "info-colaboracao-nuvem",
    "enunciado": "No contexto das plataformas digitais previstas no edital da ALEPA (Moodle, SharePoint, Google Drive, Microsoft Teams, Google Meet e Cisco Webex), analise os itens abaixo:\nI. O **Moodle** é um Ambiente Virtual de Aprendizagem (AVA / LMS) de código aberto amplamente usado em cursos EaD, com suporte a fóruns, questionários, wikis e trilhas de aprendizagem.\nII. O **Microsoft SharePoint** permite criar intranets e bibliotecas de documentos colaborativas com controle de versionamento e permissões por equipe.\nIII. O **Google Drive** possibilita armazenar arquivos na nuvem e definir níveis distintos de compartilhamento (Leitor, Comentador ou Editor).\nIV. O **Microsoft Teams**, o **Google Meet** e o **Cisco Webex** são ferramentas voltadas exclusivamente à edição offline de planilhas eletrônicas, não suportando videoconferências.\nEstão CORRETOS apenas os itens:",
    "alternativas": [
      "I e II.",
      "I, II e III.",
      "II e IV.",
      "I, III e IV.",
      "I, II, III e IV."
    ],
    "correta": 1,
    "explicacao": "Apenas I, II e III estão corretos! IV é falsa porque Teams, Meet e Webex são plataformas de comunicação e videoconferência corporativa em nuvem."
  }
];
