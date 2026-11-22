window.BANCO_QUESTOES = window.BANCO_QUESTOES || {};

window.BANCO_QUESTOES.informatica = [
  {
    id: "info-01",
    topico: "Windows 10 e Windows 11",
    materialSecao: "info-so-hardware",
    enunciado: "No sistema operacional Microsoft Windows 10 e Windows 11 (em português), um servidor administrativo precisa bloquear rapidamente sua estação de trabalho ao se ausentar da mesa e, ao retornar, abrir diretamente o Gerenciador de Tarefas. Os atalhos corretos para essas duas ações são, respectivamente:",
    alternativas: [
      "Win + D  e  Ctrl + Alt + F4",
      "Win + L  e  Ctrl + Shift + Esc",
      "Win + E  e  Alt + Tab",
      "Win + I  e  Shift + Delete",
      "Ctrl + L  e  Win + Tab"
    ],
    correta: 1,
    explicacao: "Win + L bloqueia a sessão (Lock) e Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas. (Win + E abre o Explorador de Arquivos; Win + D mostra a Área de Trabalho; Win + I abre Configurações)."
  },
  {
    id: "info-02",
    topico: "Gerenciamento de Arquivos e Pastas",
    materialSecao: "info-so-hardware",
    enunciado: "No Explorador de Arquivos do Windows 11, ao tentar salvar uma planilha de controle administrativo, o sistema impedirá o salvamento caso o nome do arquivo contenha determinados caracteres reservados. Assinale a alternativa que apresenta um nome de arquivo VÁLIDO no Windows:",
    alternativas: [
      "Relatorio_13/12/2026.xlsx",
      "Protocolo:Geral_2026.xlsx",
      "Ata*Sessao_ALEPA.xlsx",
      "Controle_Frequencia-2026_(Final).xlsx",
      "Oficio<01>_Mesa.xlsx"
    ],
    correta: 3,
    explicacao: "O Windows proíbe os caracteres \\ / : * ? \" < > | em nomes de arquivos. Apenas a alternativa D usa caracteres válidos (underscore, hífen e parênteses)."
  },
  {
    id: "info-03",
    topico: "Hardware e Periféricos",
    materialSecao: "info-so-hardware",
    enunciado: "Acerca dos componentes de hardware e periféricos de um microcomputador, assinale a alternativa CORRETA:",
    alternativas: [
      "A memória RAM é uma memória não volátil responsável por armazenar permanentemente o sistema operacional mesmo sem energia elétrica.",
      "O SSD (Solid State Drive) utiliza discos magnéticos giratórios, sendo mais lento e mais frágil a impactos físicos do que o HD convencional.",
      "A impressora multifuncional e o monitor sensível ao toque (touchscreen) são classificados como periféricos híbridos (de entrada e saída).",
      "A Unidade Lógica e Aritmética (ULA) fica localizada na placa de rede e tem como função exclusiva converter sinal digital em analógico.",
      "O scanner e o teclado são classificados exclusivamente como periféricos de saída de dados."
    ],
    correta: 2,
    explicacao: "Impressora multifuncional (digitaliza = entrada; imprime = saída) e monitor touchscreen (exibe imagem = saída; recebe toque = entrada) são periféricos híbridos (E/S). RAM é volátil; SSD usa memória flash sem discos mecânicos; ULA faz parte da CPU; scanner e teclado são de entrada."
  },
  {
    id: "info-04",
    topico: "Microsoft Excel — Fórmulas e Funções",
    materialSecao: "info-office",
    contexto: "Considere uma planilha do Microsoft Excel (versão em português) com os seguintes valores numéricos:\nA1 = 10  |  A2 = 20  |  A3 = 30  |  A4 = 40  |  B1 = 5",
    enunciado: "Qual será o resultado exibido na célula C1 se nela for inserida a fórmula `=SE(MÉDIA(A1:A4)>20; SOMA(A1;A4); B1*2)`?",
    alternativas: [
      "10",
      "25",
      "50",
      "100",
      "#VALOR!"
    ],
    correta: 2,
    explicacao: "Passo a passo: MÉDIA(A1:A4) = (10+20+30+40)/4 = 25. Como 25 > 20 é VERDADEIRO, executa-se o segundo argumento: SOMA(A1;A4). Atenção ao ponto e vírgula (;): soma apenas A1 e A4 (10 + 40 = 50), e NÃO o intervalo A1:A4 (que daria 100)!"
  },
  {
    id: "info-05",
    topico: "Microsoft Excel — Referência Absoluta e PROCV",
    materialSecao: "info-office",
    enunciado: "No Microsoft Excel (e no LibreOffice Calc), ao copiar uma fórmula para outras células, qual recurso impede que uma referência de célula seja alterada automaticamente, e qual função busca um valor na primeira coluna de uma tabela retornando um dado correspondente em outra coluna à direita?",
    alternativas: [
      "Referência absoluta (sinal `$`, ex.: `$B$2`) e função `PROCV`.",
      "Referência relativa (sinal `#`, ex.: `#B#2`) e função `CONT.NÚM`.",
      "Referência mista (sinal `%`, ex.: `%B2`) e função `CONCATENAR`.",
      "Referência circular (sinal `@`, ex.: `@B2`) e função `HOJE`.",
      "Referência fixa (sinal `&`, ex.: `&B&2`) e função `MÁXIMO`."
    ],
    correta: 0,
    explicacao: "O cifrão `$` fixa linha e/ou coluna (`$B$2` = referência absoluta; atalho F4). A função `PROCV` realiza procura vertical na primeira coluna da matriz-tabela e retorna o valor da coluna indicada no índice."
  },
  {
    id: "info-06",
    topico: "Microsoft Word e LibreOffice Writer",
    materialSecao: "info-office",
    enunciado: "Um servidor da ALEPA precisa alternar entre o Microsoft Word (em português) e o LibreOffice Writer 7 (em português). Assinale a alternativa correta sobre extensões padrão e atalhos nesses editores:",
    alternativas: [
      "A extensão padrão de documentos de texto no LibreOffice Writer é `.docx` e no Microsoft Word é `.odt`.",
      "No Microsoft Word em português, `Ctrl + B` aplica negrito e `Ctrl + S` salva o documento.",
      "No Microsoft Word em português, `Ctrl + B` salva o documento e `Ctrl + N` aplica negrito; já no LibreOffice Writer, o formato padrão de salvamento é `.odt`.",
      "No LibreOffice Writer, não é possível exportar documentos diretamente para o formato PDF.",
      "O recurso 'Pincel de Formatação' copia exclusivamente o texto digitado, ignorando fonte, cor e alinhamento."
    ],
    correta: 2,
    explicacao: "Clássico da CETAP! No Word em português: Ctrl+B = Salvar (de 'B'ackup/gravação antiga), Ctrl+N = Negrito, Ctrl+S = Sublinhado, extensão `.docx`. No LibreOffice Writer: extensão padrão `.odt` (e atalhos seguem o padrão inglês: Ctrl+S = Salvar, Ctrl+B = Negrito)."
  },
  {
    id: "info-07",
    topico: "PowerPoint e Impress",
    materialSecao: "info-office",
    enunciado: "No Microsoft PowerPoint (2013 até O365), qual recurso permite definir de forma centralizada o logotipo da instituição, as fontes, o rodapé e o layout que serão aplicados automaticamente a todos os slides de uma apresentação?",
    alternativas: [
      "Transição de Slides",
      "Slide Mestre",
      "Classificação de Slides",
      "Painel de Animação",
      "SmartArt"
    ],
    correta: 1,
    explicacao: "O Slide Mestre (guia Exibir) armazena informações sobre o tema e os layouts de slides, permitindo padronizar logotipo, cores, fontes e cabeçalhos/rodapés em toda a apresentação de uma só vez."
  },
  {
    id: "info-08",
    topico: "Segurança da Informação — Malwares",
    materialSecao: "info-seguranca",
    enunciado: "Um servidor recebeu um anexo suspeito por e-mail; após executá-lo, todos os documentos da pasta compartilhada da repartição foram criptografados e surgiu na tela uma mensagem exigindo pagamento em criptomoeda para devolução da chave de acesso. Esse ataque caracteriza um malware do tipo:",
    alternativas: [
      "Adware",
      "Keylogger",
      "Ransomware",
      "Rootkit",
      "Cookie malicioso"
    ],
    correta: 2,
    explicacao: "Ransomware sequestra dados por meio de criptografia e exige resgate (ransom) para liberar o acesso. A principal defesa preventiva contra perda de dados é manter backups atualizados e isolados (offline/imutáveis)."
  },
  {
    id: "info-09",
    topico: "Segurança — Hardening, USB e Firewall",
    materialSecao: "info-seguranca",
    enunciado: "Sobre mecanismos de segurança da informação em ambientes corporativos, assinale a alternativa CORRETA:",
    alternativas: [
      "Hardening consiste em liberar todas as portas de rede e instalar o maior número possível de aplicativos para melhorar a compatibilidade do computador.",
      "Um firewall pessoal bem configurado dispensa totalmente o uso de software antimalware, pois identifica e remove vírus dentro de arquivos PDF e pendrives.",
      "Hardening é o processo de fortalecimento de sistemas mediante redução da superfície de ataque (desativação de serviços/portas desnecessários, aplicação de atualizações e privilégios mínimos), e o controle de dispositivos USB previne vazamento de dados e infecções por mídias removíveis.",
      "O princípio da Confidencialidade garante exclusivamente que o servidor de arquivos nunca fique fora do ar por falta de energia.",
      "O ataque de Phishing consiste na sobrecarga de requisições de rede para derrubar um site governamental."
    ],
    correta: 2,
    explicacao: "Hardening = endurecimento/redução da superfície de ataque. Controle de USB = bloqueia/restringe pendrives contra vazamento e malware. Erros: B (firewall filtra tráfego de rede e NÃO substitui antimalware); D (isso é Disponibilidade); E (isso é DDoS, não Phishing)."
  },
  {
    id: "info-10",
    topico: "Redes — Internet, Intranet e Protocolos",
    materialSecao: "info-redes-web",
    enunciado: "Acerca dos conceitos de Internet, Intranet e protocolos de rede e e-mail, assinale a alternativa CORRETA:",
    alternativas: [
      "A Intranet utiliza protocolos totalmente incompatíveis com a Internet, não empregando TCP/IP nem HTTP.",
      "O protocolo DNS é responsável exclusivamente pela criptografia das páginas web no padrão HTTPS.",
      "O protocolo SMTP é utilizado para o envio de mensagens de correio eletrônico, enquanto o IMAP permite o recebimento mantendo as mensagens sincronizadas no servidor.",
      "O protocolo POP3 impede que o usuário leia e-mails sem conexão com a internet após baixá-los no computador.",
      "O protocolo HTTPS utiliza a porta padrão 21 e transmite dados em texto puro, sem criptografia."
    ],
    correta: 2,
    explicacao: "SMTP = envio de e-mails; IMAP = recebimento com sincronização no servidor (ideal para vários dispositivos). Erros: A (Intranet usa a mesma arquitetura TCP/IP da Internet, porém restrita ao público interno); B (DNS traduz nomes em IP; criptografia HTTPS é TLS/SSL); D (POP3 baixa para o dispositivo e permite leitura offline); E (HTTPS usa TLS/SSL na porta 443)."
  },
  {
    id: "info-11",
    topico: "Navegadores Web e Pesquisa",
    materialSecao: "info-redes-web",
    enunciado: "Um usuário abre uma janela de Navegação Anônima (no Google Chrome) ou InPrivate (no Microsoft Edge) no computador da repartição. Sobre esse modo de navegação, é CORRETO afirmar que:",
    alternativas: [
      "Impede que o provedor de internet e os administradores da rede corporativa identifiquem os sites acessados.",
      "Impede automaticamente o download de qualquer arquivo da internet e bloqueia a criação de favoritos.",
      "Não armazena localmente, após fechar todas as janelas anônimas, o histórico de navegação, os cookies e os dados preenchidos em formulários, mas mantém arquivos baixados e favoritos criados.",
      "Substitui integralmente o uso de VPN e garante anonimato absoluto na internet.",
      "Exclui automaticamente todos os favoritos e o histórico salvos anteriormente nas janelas normais do navegador."
    ],
    correta: 2,
    explicacao: "O modo anônimo/InPrivate evita apenas o registro LOCAL de histórico, cookies e formulários após o encerramento da sessão anônima; downloads e favoritos são mantidos, e a rede da empresa/provedor/sites continuam enxergando o acesso."
  },
  {
    id: "info-12",
    topico: "Correio Eletrônico — Microsoft Outlook",
    materialSecao: "info-redes-web",
    enunciado: "No Microsoft Outlook (versões 2013 a O365), um servidor enviou um e-mail preenchendo os campos da seguinte maneira: Para: `ana@alepa.pa.gov.br`; Cc: `bruno@alepa.pa.gov.br`; Cco: `carlos@alepa.pa.gov.br`. Se Ana clicar em 'Responder a Todos', quem receberá a resposta?",
    alternativas: [
      "Apenas o remetente original.",
      "O remetente original, Bruno e Carlos.",
      "O remetente original e Bruno (Carlos não receberá, pois estava em Cco).",
      "Apenas Bruno e Carlos.",
      "Ninguém, pois o Outlook bloqueia respostas quando há campo Cco preenchido."
    ],
    correta: 2,
    explicacao: "Quem está em Cco (Com Cópia Oculta) permanece invisível aos destinatários dos campos Para e Cc. Portanto, ao clicar em 'Responder a Todos', a resposta vai apenas para o remetente original e para Bruno (Cc), jamais para Carlos (Cco)."
  },
  {
    id: "info-13",
    topico: "Armazenamento em Nuvem — SharePoint e Google Drive",
    materialSecao: "info-colaboracao-nuvem",
    enunciado: "Em relação às plataformas de armazenamento e compartilhamento em nuvem previstas no edital (Microsoft SharePoint e Google Drive), assinale a alternativa CORRETA:",
    alternativas: [
      "O Microsoft SharePoint é uma ferramenta exclusiva para edição de vídeos offline, sem integração com o Microsoft 365.",
      "O SharePoint permite criar bibliotecas de documentos corporativos, sites de intranet, controle de versões e gestão granular de permissões integrados ao Microsoft Teams.",
      "No Google Drive, um arquivo compartilhado com permissão de 'Leitor' pode ser editado e excluído definitivamente pelo convidado.",
      "Arquivos armazenados na nuvem nunca podem ser acessados simultaneamente por mais de um servidor público.",
      "Tanto o SharePoint quanto o Google Drive exigem que todos os usuários utilizem exclusivamente o sistema operacional Linux."
    ],
    correta: 1,
    explicacao: "O Microsoft SharePoint é a base corporativa da Microsoft para intranets, gestão documental colaborativa, bibliotecas de arquivos, versionamento e controle de permissões (integrado ao Microsoft Teams e Office 365)."
  },
  {
    id: "info-14",
    topico: "EaD (Moodle), Wikis e Fóruns",
    materialSecao: "info-colaboracao-nuvem",
    enunciado: "A Escola do Poder Legislativo (ELEPA) oferece cursos de capacitação a distância utilizando a plataforma Moodle, fóruns e wikis. Sobre essas ferramentas, assinale a alternativa CORRETA:",
    alternativas: [
      "O Moodle é um Ambiente Virtual de Aprendizagem (AVA) de código aberto utilizado para cursos de educação a distância, entrega de atividades, questionários e fóruns.",
      "Os fóruns de discussão são ferramentas estritamente síncronas, exigindo que todos os participantes estejam conectados no mesmo minuto.",
      "Uma Wiki permite que apenas o administrador escreva conteúdo, vedando a edição colaborativa e o histórico de versões.",
      "O Moodle funciona apenas como aplicativo de videoconferência, não suportando envio de apostilas ou avaliações.",
      "Wikis e fóruns só funcionam fora da rede TCP/IP."
    ],
    correta: 0,
    explicacao: "Moodle = AVA (LMS) de software livre/código aberto para EaD. Fóruns são ferramentas ASSÍNCRONAS; Wikis caracterizam-se justamente pela construção colaborativa e histórico de revisões."
  },
  {
    id: "info-15",
    topico: "Ferramentas Colaborativas, Redes Sociais e Multimídia",
    materialSecao: "info-colaboracao-nuvem",
    enunciado: "Acerca das ferramentas colaborativas (Microsoft Teams, Cisco Webex, Google Meet), redes sociais e tecnologias multimídia, assinale a alternativa INCORRETA:",
    alternativas: [
      "Microsoft Teams, Cisco Webex e Google Meet possibilitam videoconferências, compartilhamento de tela e trabalho colaborativo remoto.",
      "A tecnologia de streaming permite reproduzir áudio ou vídeo continuamente pela rede sem a necessidade de baixar previamente o arquivo completo.",
      "O LinkedIn é uma rede social voltada prioritariamente ao relacionamento profissional e corporativo.",
      "Arquivos no formato MP4 são amplamente utilizados para vídeo digital, enquanto MP3 e WAV são formatos de áudio.",
      "No WhatsApp e no Telegram, é tecnicamente impossível criar grupos ou transmitir documentos em formato PDF."
    ],
    correta: 4,
    explicacao: "A letra E está INCORRETA: tanto o WhatsApp quanto o Telegram permitem a criação de grupos/canais e o envio de documentos em PDF e outros formatos."
  },
  {
    id: "info-16",
    topico: "Windows 10 e Windows 11 — Operações com Arquivos",
    materialSecao: "info-so-hardware",
    enunciado: "No Explorador de Arquivos do Windows 10/11, qual é o comportamento PADRÃO ao arrastar um arquivo com o botão esquerdo do mouse (sem pressionar nenhuma tecla auxiliar) de uma pasta na unidade `C:` para outra pasta na MESMA unidade `C:`, e de `C:` para um pendrive na unidade `E:`?",
    alternativas: [
      "Copia em ambos os casos.",
      "Move na mesma unidade (`C:` → `C:`) e Copia para outra unidade (`C:` → `E:`).",
      "Copia na mesma unidade (`C:` → `C:`) e Move para outra unidade (`C:` → `E:`).",
      "Cria um atalho em ambos os casos.",
      "Exclui o arquivo original automaticamente em ambos os casos."
    ],
    correta: 1,
    explicacao: "Regra clássica do Windows muito cobrada pela CETAP: arrastar na MESMA unidade = MOVE; arrastar para UNIDADE DIFERENTE = COPIA! (Segurar Ctrl força cópia; segurar Shift força mover)."
  },
  {
    id: "info-17",
    topico: "Windows 10 e Windows 11 — Exclusão e Lixeira",
    materialSecao: "info-so-hardware",
    enunciado: "Um servidor seleciona um arquivo armazenado na pasta Documentos (disco local `C:`) no Windows 11 e pressiona o atalho `Shift + Delete`, confirmando a caixa de diálogo. O que acontece com esse arquivo?",
    alternativas: [
      "Ele é enviado para a Lixeira do Windows, podendo ser restaurado com um clique.",
      "Ele é excluído permanentemente sem passar pela Lixeira.",
      "Ele é movido automaticamente para a pasta Downloads.",
      "Ele é compactado em formato `.zip`.",
      "Ele é enviado para o Microsoft OneDrive."
    ],
    correta: 1,
    explicacao: "`Delete` comum em disco local envia para a Lixeira; `Shift + Delete` exclui permanentemente ignorando a Lixeira (assim como excluir arquivos diretamente de pendrives/unidades de rede!)."
  },
  {
    id: "info-18",
    topico: "Hardware — Memórias e CPU",
    materialSecao: "info-so-hardware",
    enunciado: "Ordene as memórias de um microcomputador da MAIS RÁPIDA (e de menor capacidade, mais próxima do núcleo do processador) para a MAIS LENTA (e de maior capacidade de armazenamento permanente):",
    alternativas: [
      "HD/SSD → Memória RAM → Memória Cache → Registradores.",
      "Registradores → Memória Cache → Memória RAM → SSD/HD.",
      "Memória RAM → Registradores → SSD/HD → Memória Cache.",
      "Memória Cache → SSD/HD → Registradores → Memória RAM.",
      "SSD/HD → Registradores → Memória Cache → Memória RAM."
    ],
    correta: 1,
    explicacao: "Hierarquia clássica de memórias (da mais rápida para a mais lenta): Registradores (dentro da CPU) → Cache (L1, L2, L3) → RAM (memória principal) → Armazenamento secundário (SSD/HD)."
  },
  {
    id: "info-19",
    topico: "Microsoft Excel — CONT.SE e SOMASE",
    materialSecao: "info-office",
    contexto: "Em uma planilha do Excel, o intervalo `A1:A5` contém os setores: `Protocolo`, `Arquivo`, `Protocolo`, `Patrimônio`, `Protocolo`. O intervalo `B1:B5` contém as quantidades de chamados: `4`, `2`, `6`, `5`, `10`.",
    enunciado: "Qual será o resultado da fórmula `=SOMASE(A1:A5; \"Protocolo\"; B1:B5)`?",
    alternativas: [
      "3",
      "10",
      "20",
      "27",
      "14"
    ],
    correta: 2,
    explicacao: "A função `SOMASE` soma os valores em `B1:B5` correspondentes às linhas em que `A1:A5` é igual a `\"Protocolo\"`: linhas 1, 3 e 5 → 4 + 6 + 10 = 20! (Se fosse `CONT.SE(A1:A5; \"Protocolo\")`, retornaria 3)."
  },
  {
    id: "info-20",
    topico: "Microsoft Excel — MAIOR e MENOR",
    materialSecao: "info-office",
    contexto: "Considere os valores nas células `A1:A5`: `12`, `45`, `18`, `30`, `50`.",
    enunciado: "Os resultados das fórmulas `=MAIOR(A1:A5; 2)` e `=MENOR(A1:A5; 2)` são, respectivamente:",
    alternativas: [
      "50 e 12.",
      "45 e 18.",
      "30 e 18.",
      "45 e 12.",
      "50 e 18."
    ],
    correta: 1,
    explicacao: "Ordenando os valores: 12, 18, 30, 45, 50. O 2º MAIOR valor é 45; o 2º MENOR valor é 18! (Atenção: `MÁXIMO` dá 50 e `MÍNIMO` dá 12)."
  },
  {
    id: "info-21",
    topico: "Microsoft Word — Recursos de Edição",
    materialSecao: "info-office",
    enunciado: "No Microsoft Word (versões 2013 a O365), qual recurso permite gerar automaticamente dezenas de ofícios ou declarações personalizados (mudando apenas nome, cargo e matrícula em cada cópia) a partir de um documento-modelo e de uma planilha do Excel?",
    alternativas: [
      "Mala Direta.",
      "Pincel de Formatação.",
      "Quebra de Coluna.",
      "Controle de Alterações.",
      "Capitular."
    ],
    correta: 0,
    explicacao: "Mala Direta (guia Correspondências) integra um documento-base do Word a uma lista de dados (como planilha Excel) para gerar automaticamente cartas, ofícios, certificados ou etiquetas personalizadas."
  },
  {
    id: "info-22",
    topico: "PowerPoint e Impress — Atalhos de Apresentação",
    materialSecao: "info-office",
    enunciado: "Durante a edição de uma apresentação de slides no Microsoft PowerPoint (e no LibreOffice Impress), os atalhos de teclado utilizados para iniciar o Modo de Apresentação a partir do PRIMEIRO slide e a partir do SLIDE ATUAL são, respectivamente:",
    alternativas: [
      "F2 e Ctrl + F2.",
      "F5 e Shift + F5.",
      "F7 e Ctrl + F7.",
      "Ctrl + P e Alt + P.",
      "Esc e Enter."
    ],
    correta: 1,
    explicacao: "`F5` inicia a apresentação desde o 1º slide; `Shift + F5` inicia exatamente a partir do slide selecionado no momento; `Esc` encerra a apresentação."
  },
  {
    id: "info-23",
    topico: "Segurança da Informação — Assinatura Digital e Criptografia",
    materialSecao: "info-seguranca",
    enunciado: "Na assinatura digital de documentos oficiais eletrônicos (padrão ICP-Brasil) usando criptografia assimétrica, assinale a alternativa CORRETA sobre as propriedades garantidas:",
    alternativas: [
      "A assinatura digital garante apenas a confidencialidade do arquivo, impedindo que qualquer pessoa leia o texto.",
      "A assinatura digital utiliza a chave privada do signatário para assinar e a chave pública para verificação, garantindo autenticidade, integridade e não repúdio (irretratabilidade).",
      "Qualquer imagem escaneada de uma assinatura a caneta colada em um arquivo Word possui a mesma segurança criptográfica de uma assinatura digital ICP-Brasil.",
      "Na criptografia assimétrica, utiliza-se uma única chave secreta compartilhada tanto para cifrar quanto para decifrar.",
      "Se uma única letra do documento for alterada após a assinatura digital, a assinatura continua sendo validada como íntegra."
    ],
    correta: 1,
    explicacao: "Assinatura digital = criptografia assimétrica (assina com chave PRIVADA, verifica com chave PÚBLICA) + função hash → garante Autenticidade, Integridade e Não Repúdio (Irretratabilidade)! Se 1 único bit for alterado, o hash muda e a assinatura invalida."
  },
  {
    id: "info-24",
    topico: "Segurança da Informação — Malwares (Worm x Trojan x Vírus)",
    materialSecao: "info-seguranca",
    enunciado: "Diferenciando os principais tipos de códigos maliciosos (malwares), assinale a alternativa CORRETA:",
    alternativas: [
      "O Worm (verme) precisa obrigatoriamente de um arquivo hospedeiro e da execução manual pelo usuário para se propagar.",
      "O Trojan (Cavalo de Troia) apresenta-se como um programa aparentemente útil ou inofensivo, mas executa ações maliciosas ocultas (como abrir backdoors ou roubar dados) e NÃO se autorreplica sozinho.",
      "O Keylogger tem como única função bloquear o acesso à tela exigindo resgate em bitcoins.",
      "O Vírus de computador propaga-se automaticamente pela rede sem depender de hospedeiro nem de ação humana.",
      "Antimalware é o nome dado a ataques de engenharia social enviados por SMS."
    ],
    correta: 1,
    explicacao: "Trojan = disfarça-se de software legítimo e executa funções ocultas sem autorreplicação. Worm = propaga-se automaticamente pela rede explorando falhas (sem hospedeiro). Vírus = precisa de hospedeiro e ação do usuário. Keylogger = captura teclas digitadas."
  },
  {
    id: "info-25",
    topico: "Redes — Pesquisa Avançada na Web",
    materialSecao: "info-redes-web",
    enunciado: "Um servidor deseja pesquisar no Google exclusivamente arquivos em formato PDF publicados no portal oficial da ALEPA (`alepa.pa.gov.br`) que contenham a expressão exata \"Regimento Interno\". Qual sintaxe de operadores de busca atende EXATAMENTE a esse objetivo?",
    alternativas: [
      "`Regimento Interno +alepa.pa.gov.br -pdf`",
      "`\"Regimento Interno\" site:alepa.pa.gov.br filetype:pdf`",
      "`(Regimento OR Interno) domain:pdf`",
      "`\"Regimento Interno\" -site:alepa.pa.gov.br`",
      "`link:Regimento_Interno.pdf`"
    ],
    correta: 1,
    explicacao: "Aspas `\"...\"` buscam a expressão exata; `site:alepa.pa.gov.br` restringe os resultados ao domínio oficial; `filetype:pdf` filtra apenas documentos PDF!"
  },
  {
    id: "info-26",
    topico: "Navegadores Web — Atalhos",
    materialSecao: "info-redes-web",
    enunciado: "Um servidor fechou acidentalmente uma aba importante no Google Chrome (ou Microsoft Edge / Mozilla Firefox) enquanto consultava o Diário Oficial. Qual atalho de teclado reabre imediatamente a última aba fechada?",
    alternativas: [
      "Ctrl + W",
      "Ctrl + T",
      "Ctrl + Shift + T",
      "Ctrl + H",
      "Alt + F4"
    ],
    correta: 2,
    explicacao: "`Ctrl + Shift + T` reabre a última aba fechada! (`Ctrl + T` abre nova aba; `Ctrl + W` fecha aba atual; `Ctrl + H` abre histórico; `Alt + F4` fecha a janela)."
  },
  {
    id: "info-27",
    topico: "Redes — DNS e DHCP",
    materialSecao: "info-redes-web",
    enunciado: "Em redes de computadores baseadas em TCP/IP, os protocolos responsáveis por (1) traduzir endereços amigáveis como `www.alepa.pa.gov.br` em endereços IP numéricos e (2) atribuir automaticamente endereços IP às estações de trabalho conectadas à rede são, respectivamente:",
    alternativas: [
      "SMTP e POP3.",
      "DNS e DHCP.",
      "FTP e HTTP.",
      "IMAP e TLS.",
      "SSH e VPN."
    ],
    correta: 1,
    explicacao: "DNS (Domain Name System) traduz nomes de domínio em endereços IP; DHCP (Dynamic Host Configuration Protocol) distribui automaticamente IP, máscara de sub-rede, gateway e DNS aos dispositivos da rede."
  },
  {
    id: "info-28",
    topico: "Ferramentas Colaborativas — Microsoft Teams, Meet e Webex",
    materialSecao: "info-colaboracao-nuvem",
    enunciado: "Em relação às ferramentas colaborativas de trabalho a distância previstas no edital (Microsoft Teams, Google Meet e Cisco Webex), assinale a alternativa CORRETA:",
    alternativas: [
      "O Microsoft Teams integra chats, equipes divididas em canais, videoconferências e edição colaborativa de arquivos armazenados no SharePoint/OneDrive.",
      "O Google Meet e o Cisco Webex não permitem o compartilhamento de tela durante reuniões remotas.",
      "O Microsoft Teams funciona exclusivamente sem conexão com a internet (modo offline).",
      "Nenhuma dessas plataformas permite agendar reuniões em calendário ou enviar mensagens de chat durante a chamada.",
      "O Cisco Webex é um navegador web substituto do Mozilla Firefox."
    ],
    correta: 0,
    explicacao: "O Microsoft Teams é o hub colaborativo do Microsoft 365 (equipes, canais, chat, chamadas/reuniões e integração nativa com SharePoint/Office). Meet e Webex também oferecem videoconferência, chat, gravação e compartilhamento de tela."
  },
  {
    id: "info-29",
    topico: "Windows 11 — Requisitos e Recursos",
    materialSecao: "info-so-hardware",
    enunciado: "Em comparação com versões anteriores, o sistema operacional Microsoft Windows 11 introduziu requisitos reforçados de segurança de hardware e recursos de produtividade, dentre os quais se destacam:",
    alternativas: [
      "Exigência do módulo de segurança TPM 2.0 e Inicialização Segura (Secure Boot), além de Explorador de Arquivos com guias (abas) e Snap Layouts para organização de janelas.",
      "Remoção completa do suporte a redes Wi-Fi e Bluetooth.",
      "Exclusão definitiva do navegador Microsoft Edge e do Microsoft Defender.",
      "Impossibilidade de executar programas do Microsoft Office.",
      "Funcionamento exclusivo em processadores de 32 bits."
    ],
    correta: 0,
    explicacao: "O Windows 11 exige arquitetura de 64 bits, Secure Boot e chip/firmware TPM 2.0 (Trusted Platform Module), além de trazer Snap Layouts, Menu Iniciar centralizado e abas no Explorador de Arquivos."
  },
  {
    id: "info-30",
    topico: "Correio Eletrônico — Boas Práticas e Phishing",
    materialSecao: "info-seguranca",
    enunciado: "Um servidor recebe no Microsoft Outlook um e-mail aparentemente enviado pelo 'Suporte de TI' com tom urgente exigindo que ele clique em um link externo (`http://suporte-alepa-atualiza.xyz`) e informe sua senha institucional sob pena de bloqueio imediato da conta. Esse golpe caracteriza:",
    alternativas: [
      "Hardening preventivo.",
      "Phishing (engenharia social para captura de credenciais).",
      "Backup incremental.",
      "Autenticação em dois fatores.",
      "Protocolo IMAP seguro."
    ],
    correta: 1,
    explicacao: "Phishing utiliza engenharia social (senso de urgência, remetente falso e domínio fraudulento) para induzir a vítima a revelar senhas ou dados sensíveis. Nunca se deve clicar no link nem fornecer senhas por e-mail!"
  }
];
