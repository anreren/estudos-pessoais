window.MATERIAL_APOIO = window.MATERIAL_APOIO || {};

window.MATERIAL_APOIO.informatica = {
  titulo: "Noções de Informática",
  subtitulo: "Anexo II (Item 11.5) — 05 questões na prova (1,0 ponto) • Padrão Fundação CETAP",
  secoes: [
    {
      id: "info-so-hardware",
      titulo: "1. Windows 10/11, Arquivos/Pastas e Hardware",
      html: `
        <h5>Windows 10 e Windows 11 — Recursos e Atalhos Essenciais</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Atalho</th><th>Ação no Windows 10 / 11</th></tr>
          </thead>
          <tbody>
            <tr><td><code>Win + E</code></td><td>Abre o <strong>Explorador de Arquivos</strong> (Windows Explorer).</td></tr>
            <tr><td><code>Win + D</code></td><td>Mostra/oculta a Área de Trabalho (Desktop).</td></tr>
            <tr><td><code>Win + L</code></td><td><strong>Bloqueia</strong> a sessão do computador (Lock).</td></tr>
            <tr><td><code>Win + I</code></td><td>Abre as <strong>Configurações</strong> do Windows.</td></tr>
            <tr><td><code>Win + Shift + S</code></td><td>Abre a Ferramenta de Captura de Tela (recorte de área).</td></tr>
            <tr><td><code>Win + Tab</code></td><td>Visão de Tarefas (Task View) e Áreas de Trabalho Virtuais.</td></tr>
            <tr><td><code>Ctrl + Shift + Esc</code></td><td>Abre diretamente o <strong>Gerenciador de Tarefas</strong>.</td></tr>
            <tr><td><code>Shift + Delete</code></td><td>Exclui arquivo <strong>permanentemente</strong> (sem enviar para a Lixeira).</td></tr>
            <tr><td><code>F2</code></td><td>Renomeia arquivo ou pasta selecionado.</td></tr>
          </tbody>
        </table>
        <ul>
          <li><strong>Windows 11 x Windows 10:</strong> Win 11 exige <strong>TPM 2.0</strong> e Inicialização Segura (Secure Boot), possui Menu Iniciar centralizado, <em>Snap Layouts</em> (ajustes rápidos de janelas) e Explorador de Arquivos com guias (abas).</li>
          <li><strong>Nomes de arquivos inválidos no Windows:</strong> não aceita os caracteres <code>\\ / : * ? " &lt; &gt; |</code>.</li>
          <li><strong>Arrastar arquivo com mouse:</strong> mesma unidade = <em>Move</em>; unidades diferentes (ex.: C: para pendrive) = <em>Copia</em>. Segurando <code>Ctrl</code> força cópia; segurando <code>Shift</code> força movimentação.</li>
        </ul>
        <h5>Hardware e Periféricos</h5>
        <ul>
          <li><strong>CPU (Processador):</strong> composta por <em>ULA</em> (Unidade Lógica e Aritmética), <em>UC</em> (Unidade de Controle) e <em>Registradores</em> (memória ultrarrápida interna).</li>
          <li><strong>Memórias:</strong>
            <ul>
              <li><strong>RAM:</strong> principal, <em>volátil</em> (perde dados sem energia), leitura e escrita.</li>
              <li><strong>ROM / BIOS / UEFI:</strong> <em>não volátil</em>, guarda firmware de inicialização (POST).</li>
              <li><strong>Cache (L1, L2, L3):</strong> memória SRAM ultrarrápida entre CPU e RAM.</li>
              <li><strong>Secundárias (Armazenamento):</strong> HD (magnético), <strong>SSD</strong> (estado sólido, memória flash, mais rápido e resistente — interfaces SATA ou NVMe/M.2), pendrive.</li>
            </ul>
          </li>
          <li><strong>Periféricos:</strong> <em>Entrada</em> (teclado, mouse, scanner, microfone, webcam); <em>Saída</em> (monitor comum, impressora, caixa de som, projetor); <em>Entrada e Saída / Híbridos</em> (monitor touchscreen, impressora multifuncional, headset, pendrive).</li>
        </ul>
      `
    },
    {
      id: "info-office",
      titulo: "2. Pacote Office (Word, Excel, PowerPoint) e LibreOffice 7+",
      html: `
        <h5>Extensões Padrão e Equivalências</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Tipo</th><th>Microsoft Office (2013–O365)</th><th>LibreOffice 7+</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Editor de Textos</strong></td><td>Word (<code>.docx</code>, modelo <code>.dotx</code>)</td><td>Writer (<code>.odt</code>)</td></tr>
            <tr><td><strong>Planilhas</strong></td><td>Excel (<code>.xlsx</code>)</td><td>Calc (<code>.ods</code>)</td></tr>
            <tr><td><strong>Apresentações</strong></td><td>PowerPoint (<code>.pptx</code>, apresentação direta <code>.ppsx</code>)</td><td>Impress (<code>.odp</code>)</td></tr>
          </tbody>
        </table>
        <h5>Atalhos Clássicos (Atenção: Word PT-BR x LibreOffice Writer!)</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Ação</th><th>MS Word (PT-BR)</th><th>LibreOffice Writer (PT-BR)</th></tr>
          </thead>
          <tbody>
            <tr><td>Negrito / Itálico / Sublinhado</td><td><code>Ctrl+N</code> / <code>Ctrl+I</code> / <code>Ctrl+S</code></td><td><code>Ctrl+B</code> / <code>Ctrl+I</code> / <code>Ctrl+U</code></td></tr>
            <tr><td>Salvar</td><td><code>Ctrl+B</code></td><td><code>Ctrl+S</code></td></tr>
            <tr><td>Novo documento</td><td><code>Ctrl+O</code></td><td><code>Ctrl+N</code></td></tr>
            <tr><td>Abrir documento</td><td><code>Ctrl+A</code></td><td><code>Ctrl+O</code></td></tr>
            <tr><td>Selecionar tudo</td><td><code>Ctrl+T</code></td><td><code>Ctrl+A</code></td></tr>
            <tr><td>Localizar / Substituir</td><td><code>Ctrl+L</code> / <code>Ctrl+U</code></td><td><code>Ctrl+F</code> / <code>Ctrl+H</code></td></tr>
          </tbody>
        </table>
        <h5>Excel e Calc — Fórmulas Mais Cobradas pela Fundação CETAP</h5>
        <ul>
          <li><strong>Referências:</strong> Relativa (<code>A1</code>), Absoluta (<code>$A$1</code> — trava linha e coluna com <code>F4</code>), Mista (<code>$A1</code> ou <code>A$1</code>).</li>
          <li><strong>Operadores de intervalo:</strong> dois pontos <code>:</code> significa <strong>até</strong> (<code>A1:A5</code> = A1, A2, A3, A4 e A5); ponto e vírgula <code>;</code> significa <strong>e</strong> (<code>A1;A5</code> = apenas A1 e A5).</li>
          <li><strong>Funções essenciais:</strong>
            <ul>
              <li><code>=SOMA(A1:A5)</code> — soma o intervalo.</li>
              <li><code>=MÉDIA(A1:A5)</code> — média aritmética (ignora células vazias ou com texto).</li>
              <li><code>=MÁXIMO(...)</code> / <code>=MÍNIMO(...)</code> — maior e menor valor.</li>
              <li><code>=MAIOR(A1:A5; 2)</code> / <code>=MENOR(A1:A5; 2)</code> — k-ésimo maior ou menor valor.</li>
              <li><code>=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)</code> — condicional.</li>
              <li><code>=CONT.SE(intervalo; critério)</code> e <code>=SOMASE(intervalo; critério; [intervalo_soma])</code>.</li>
              <li><code>=PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; [procurar_intervalo])</code> — busca vertical na 1ª coluna da matriz (<code>FALSO</code> ou <code>0</code> = correspondência exata).</li>
            </ul>
          </li>
        </ul>
        <p><strong>PowerPoint / Impress:</strong> <code>F5</code> inicia apresentação do 1º slide; <code>Shift + F5</code> inicia do slide atual; <strong>Slide Mestre</strong> controla o layout/fonte/logotipo padrão de todos os slides; <em>Transição</em> aplica-se entre slides, enquanto <em>Animação</em> aplica-se a objetos dentro do slide.</p>
      `
    },
    {
      id: "info-seguranca",
      titulo: "3. Segurança da Informação, Hardening, USB, Antimalware e Firewall",
      html: `
        <h5>Princípios Fundamentais (Tríade CID + A)</h5>
        <ul>
          <li><strong>Confidencialidade:</strong> apenas pessoas autorizadas acessam a informação (mecanismo: <em>criptografia</em>, controle de acesso).</li>
          <li><strong>Integridade:</strong> garantia de que a informação não foi alterada indevidamente (mecanismo: <em>hash</em>, assinatura digital).</li>
          <li><strong>Disponibilidade:</strong> informação acessível sempre que necessária aos usuários autorizados (mecanismo: <em>backup</em>, redundância, proteção contra DDoS).</li>
          <li><strong>Autenticidade e Não Repúdio (Irretratabilidade):</strong> comprova a autoria e impede que o autor negue ter praticado o ato (mecanismo: <em>assinatura digital com certificado ICP-Brasil</em>).</li>
        </ul>
        <h5>Principais Malwares e Ataques</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Ameaça</th><th>Comportamento Típico</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Vírus</strong></td><td>Precisa de um arquivo <strong>hospedeiro</strong> e de ação do usuário para se propagar.</td></tr>
            <tr><td><strong>Worm (Verme)</strong></td><td>Propaga-se <strong>automaticamente pela rede</strong> explorando vulnerabilidades (não precisa de hospedeiro).</td></tr>
            <tr><td><strong>Trojan (Cavalo de Troia)</strong></td><td>Disfarça-se de programa legítimo/útil, mas executa ações maliciosas ocultas (não se autorreplica).</td></tr>
            <tr><td><strong>Ransomware</strong></td><td><strong>Criptografa</strong> os arquivos da vítima e exige <strong>resgate</strong> (geralmente em criptomoedas).</td></tr>
            <tr><td><strong>Spyware / Keylogger</strong></td><td>Monitora atividades sem consentimento; <em>Keylogger</em> captura teclas digitadas; <em>Screenlogger</em> captura tela.</td></tr>
            <tr><td><strong>Phishing</strong></td><td>Engenharia social via e-mail/SMS/site falso para roubar credenciais ou dados bancários.</td></tr>
          </tbody>
        </table>
        <h5>Mecanismos Específicos do Edital</h5>
        <ul>
          <li><strong>Hardening (Endurecimento):</strong> processo de reduzir a superfície de ataque de um sistema/servidor, desativando serviços e portas desnecessárias, removendo softwares supérfluos, aplicando patches/atualizações e configurando privilégios mínimos.</li>
          <li><strong>Controle de Dispositivos USB:</strong> política de segurança que bloqueia ou restringe mídias removíveis (pendrives, HDs externos) para evitar <em>vazamento de dados</em> e infecção por malwares (como ataques via AutoRun/BadUSB).</li>
          <li><strong>Antimalware (ex.: Microsoft Defender):</strong> detecta, previne e remove códigos maliciosos (por assinaturas e análise heurística/comportamental).</li>
          <li><strong>Firewall Pessoal:</strong> filtra o tráfego de rede (entrada e saída) com base em regras de portas, protocolos e endereços IP. <em>Atenção:</em> firewall NÃO substitui antivírus/antimalware!</li>
        </ul>
      `
    },
    {
      id: "info-redes-web",
      titulo: "4. Redes, Internet, Intranet, Navegadores e Correio Eletrônico",
      html: `
        <h5>Internet x Intranet x Extranet</h5>
        <ul>
          <li><strong>Internet:</strong> rede mundial pública baseada na pilha de protocolos <strong>TCP/IP</strong>.</li>
          <li><strong>Intranet:</strong> rede <em>privada/interna</em> de uma organização (ex.: intranet da ALEPA) que utiliza os <strong>mesmos protocolos da Internet</strong> (TCP/IP, HTTP/HTTPS), restrita a usuários autorizados.</li>
          <li><strong>Extranet:</strong> extensão segura da intranet acessada externamente por parceiros, fornecedores ou servidores remotos (frequentemente via <strong>VPN</strong>).</li>
        </ul>
        <h5>Protocolos Fundamentais</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Protocolo</th><th>Função</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>HTTP / HTTPS</strong></td><td>Navegação web. <strong>HTTPS</strong> usa criptografia <strong>TLS/SSL</strong> (porta padrão 443; HTTP = 80).</td></tr>
            <tr><td><strong>DNS</strong></td><td>Traduz nomes de domínio (<code>alepa.pa.gov.br</code>) em endereços IP.</td></tr>
            <tr><td><strong>DHCP</strong></td><td>Atribui endereços IP automaticamente aos dispositivos da rede.</td></tr>
            <tr><td><strong>SMTP</strong></td><td><strong>Envio</strong> de e-mails ("<strong>S</strong>ua <strong>M</strong>ensagem <strong>T</strong>á <strong>P</strong>artindo").</td></tr>
            <tr><td><strong>POP3</strong></td><td><strong>Recebimento</strong> de e-mails — por padrão <strong>baixa e apaga</strong> do servidor (acesso offline em um dispositivo).</td></tr>
            <tr><td><strong>IMAP</strong></td><td><strong>Recebimento</strong> de e-mails — <strong>sincroniza</strong> e mantém as mensagens no servidor (ideal para múltiplos dispositivos).</td></tr>
          </tbody>
        </table>
        <h5>Navegadores (Chrome, Edge, Firefox) e Busca na Web</h5>
        <ul>
          <li><strong>Navegação Anônima/InPrivate:</strong> não salva histórico, cookies nem dados de formulários <em>localmente</em> após fechar a janela, <strong>mas</strong> arquivos baixados e favoritos criados permanecem, e o provedor/empresa/site ainda vê o acesso!</li>
          <li><strong>Atalhos comuns:</strong> <code>Ctrl+T</code> (nova aba), <code>Ctrl+Shift+T</code> (reabrir aba fechada), <code>Ctrl+D</code> (favoritar), <code>Ctrl+H</code> (histórico), <code>Ctrl+J</code> (downloads), <code>Ctrl+F5</code> (recarregar ignorando cache).</li>
          <li><strong>Operadores de Busca:</strong> aspas <code>"termo exato"</code>; menos <code>-palavra</code> (exclui); <code>site:alepa.pa.gov.br</code> (restringe ao domínio); <code>filetype:pdf</code> (filtra tipo de arquivo).</li>
        </ul>
        <h5>Correio Eletrônico (Microsoft Outlook 2013–O365)</h5>
        <ul>
          <li><strong>Para (To):</strong> destinatário principal. <strong>Cc (Com Cópia):</strong> cópia visível a todos. <strong>Cco (Com Cópia Oculta / Bcc):</strong> destinatários ocultos — os demais não veem quem está em Cco.</li>
          <li><strong>Responder vs. Responder a Todos:</strong> "Responder a Todos" envia para o remetente e para todos em Para e Cc (<em>nunca</em> para quem estava em Cco).</li>
        </ul>
      `
    },
    {
      id: "info-colaboracao-nuvem",
      titulo: "5. Moodle (EaD), Nuvem, Redes Sociais, Multimídia e Colaboração",
      html: `
        <ul>
          <li><strong>Educação a Distância — Moodle:</strong> Ambiente Virtual de Aprendizagem (AVA / LMS) de <strong>código aberto (software livre)</strong> amplamente usado por escolas de governo (como a ELEPA) para cursos online, fóruns, envio de tarefas, questionários e emissão de certificados.</li>
          <li><strong>Grupos de discussão, Fóruns e Wikis:</strong>
            <ul>
              <li><em>Fórum:</em> comunicação <strong>assíncrona</strong> organizada em tópicos/threads.</li>
              <li><em>Wiki:</em> plataforma colaborativa em que múltiplos usuários podem criar, editar e manter histórico de versões de páginas de conhecimento (ex.: Wikipédia, wikis corporativas).</li>
            </ul>
          </li>
          <li><strong>Armazenamento e Compartilhamento em Nuvem:</strong>
            <ul>
              <li><strong>Microsoft SharePoint:</strong> plataforma corporativa da Microsoft (integrada ao Microsoft 365/Teams) para gestão documental, bibliotecas de arquivos compartilhadas, versionamento, controle de permissões e criação de sites de intranet.</li>
              <li><strong>Google Drive:</strong> armazenamento em nuvem do Google integrado a Docs, Planilhas e Apresentações, com edição colaborativa em tempo real e controle de acesso (Leitor, Comentador, Editor).</li>
            </ul>
          </li>
          <li><strong>Ferramentas Colaborativas e Videoconferência:</strong> <strong>Microsoft Teams</strong> (chat, equipes, canais, reuniões e integração SharePoint/Office), <strong>Google Meet</strong> e <strong>Cisco Webex</strong> (reuniões virtuais, compartilhamento de tela, gravação, salas simultâneas).</li>
          <li><strong>Redes Sociais:</strong> <em>X</em> (microblogging/notícias em tempo real), <em>LinkedIn</em> (rede profissional), <em>WhatsApp</em> e <em>Telegram</em> (mensageria instantânea — Telegram destaca-se por canais amplos e nuvem nativa), <em>YouTube</em> (vídeos/transmissões ao vivo), <em>Instagram</em> e <em>Facebook</em>.</li>
          <li><strong>Multimídia (Áudio e Vídeo):</strong> formatos comuns de áudio: <code>MP3</code> (com perda), <code>WAV</code> (sem compressão), <code>OGG</code>, <code>AAC</code>; vídeo: <code>MP4</code> (padrão web, codec H.264/H.265), <code>MKV</code>, <code>AVI</code>, <code>WEBM</code>. <em>Streaming</em> permite reprodução contínua sem precisar baixar o arquivo inteiro previamente.</li>
        </ul>
      `
    }
  ]
};
