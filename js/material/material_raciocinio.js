window.MATERIAL_APOIO = window.MATERIAL_APOIO || {};

window.MATERIAL_APOIO.raciocinio = {
  titulo: "Raciocínio Lógico",
  subtitulo: "Anexo II — 05 questões na prova (1,0 ponto) • Padrão Fundação CETAP",
  secoes: [
    {
      id: "rlm-proposicoes",
      titulo: "1. Estruturas Lógicas, Tabela-Verdade, Equivalências e Negações",
      html: `
        <p><strong>Proposição lógica:</strong> sentença declarativa fechada que pode ser classificada como <strong>Verdadeira (V)</strong> ou <strong>Falsa (F)</strong>. <em>Não são proposições:</em> frases interrogativas, exclamativas, imperativas, sem verbo ou sentenças abertas (ex.: <em>"x + 2 = 5"</em>).</p>
        <h5>Tabela-Verdade dos Conectivos</h5>
        <table class="tabela-apoio">
          <thead>
            <tr><th>Conectivo</th><th>Símbolo</th><th>Leitura</th><th>Regra de Ouro (Memorize!)</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Conjunção</strong></td><td>p ∧ q</td><td>p <strong>e</strong> q</td><td>Só é <strong>V</strong> quando <strong>ambas</strong> forem V.</td></tr>
            <tr><td><strong>Disjunção Inclusiva</strong></td><td>p ∨ q</td><td>p <strong>ou</strong> q</td><td>Só é <strong>F</strong> quando <strong>ambas</strong> forem F.</td></tr>
            <tr><td><strong>Disjunção Exclusiva</strong></td><td>p ⊻ q</td><td><strong>ou</strong> p <strong>ou</strong> q</td><td>É <strong>V</strong> quando os valores forem <strong>diferentes</strong> (V/F ou F/V).</td></tr>
            <tr><td><strong>Condicional</strong></td><td>p → q</td><td><strong>se</strong> p, <strong>então</strong> q</td><td>Só é <strong>F</strong> no caso <strong>V → F</strong> ("Vera Fischer é Falsa").</td></tr>
            <tr><td><strong>Bicondicional</strong></td><td>p ↔ q</td><td>p <strong>se e somente se</strong> q</td><td>É <strong>V</strong> quando os valores forem <strong>iguais</strong> (V/V ou F/F).</td></tr>
          </tbody>
        </table>
        <h5>Equivalências e Negações Mais Cobradas</h5>
        <div class="formula-box">
          <strong>Equivalências da Condicional (p → q):</strong><br>
          1) Contrapositiva: (p → q) ≡ (~q → ~p)  [Inverte e nega tudo]<br>
          2) Disjunção ("NE-Y-MAR"): (p → q) ≡ (~p ∨ q)  [Nega a 1ª, troca → por OU, mantém a 2ª]<br><br>
          <strong>Negações (Leis de De Morgan e Condicional):</strong><br>
          • ~(p ∧ q) ≡ (~p ∨ ~q)<br>
          • ~(p ∨ q) ≡ (~p ∧ ~q)<br>
          • ~(p → q) ≡ (p ∧ ~q)  ["MANÉ": Mantém a 1ª E Nega a 2ª!]<br>
          • ~(Todo A é B) ≡ "Algum A não é B" / "Pelo menos um A não é B"<br>
          • ~(Nenhum A é B) ≡ "Algum A é B"
        </div>
        <h5>Validade de Argumentos (Dedução de Conclusões)</h5>
        <p>Um argumento é <strong>válido</strong> quando a conclusão decorre necessariamente das premissas (é impossível todas as premissas serem V e a conclusão ser F). <em>Dica prática CETAP:</em> assuma todas as premissas como <strong>Verdadeiras</strong>, comece pela proposição simples (ou conjunção "E") e propague os valores lógicos até testar a conclusão.</p>
      `
    },
    {
      id: "rlm-associacao",
      titulo: "2. Relações Arbitrárias, Associação Lógica e Diagramas de Venn",
      html: `
        <h5>Associação Lógica (Pessoas, Lugares, Objetos ou Eventos)</h5>
        <p>Muito comum em provas da CETAP: relacionar 3 ou 4 pessoas a cargos, setores, cidades ou cores usando pistas afirmativas e negativas.</p>
        <div class="quadro-resumo">
          <strong class="quadro-titulo">Método Rápido de Resolução</strong>
          Monte uma pequena grade/tabela (linhas = pessoas; colunas = atributos). Marque <strong>S</strong> (Sim) para certezas diretas e <strong>N</strong> (Não) para exclusões. Cada <strong>S</strong> automaticamente preenche toda a linha e toda a coluna daquela categoria com <strong>N</strong>!
        </div>
        <h5>Problemas de Conjuntos (Diagramas de Venn)</h5>
        <div class="formula-box">
          <strong>Princípio da Inclusão-Exclusão (2 conjuntos):</strong><br>
          n(A ∪ B) = n(A) + n(B) − n(A ∩ B)<br>
          Total = n(A ∪ B) + Nenhum<br><br>
          <strong>Dica para 3 conjuntos:</strong> preencha SEMPRE de dentro para fora (comece pela interseção dos três: A ∩ B ∩ C, depois as interseções 2 a 2 subtraindo o centro, depois os "somente").
        </div>
      `
    },
    {
      id: "rlm-conjuntos-numericos",
      titulo: "3. Conjuntos Numéricos: Racionais, Reais e Complexos",
      html: `
        <ul>
          <li><strong>Naturais (ℕ):</strong> {0, 1, 2, 3, ...}.</li>
          <li><strong>Inteiros (ℤ):</strong> {..., -2, -1, 0, 1, 2, ...}.</li>
          <li><strong>Racionais (ℚ):</strong> podem ser escritos na forma de fração <code>a/b</code> (b ≠ 0). Inclui inteiros, decimais exatos (0,25 = 1/4) e <strong>dízimas periódicas</strong> (0,333... = 3/9 = 1/3).</li>
          <li><strong>Irracionais (𝕀):</strong> decimais infinitos não periódicos (√2, √3, π).</li>
          <li><strong>Reais (ℝ):</strong> união de Racionais com Irracionais (ℝ = ℚ ∪ 𝕀).</li>
          <li><strong>Complexos (ℂ) — Atenção ao Edital!:</strong> números da forma <strong>z = a + bi</strong>, onde <code>a</code> é a parte real, <code>b</code> a parte imaginária e <strong>i = √(−1)</strong>, logo <strong>i² = −1</strong>.</li>
        </ul>
        <h5>Operações com Frações e Complexos</h5>
        <div class="formula-box">
          <strong>Frações:</strong><br>
          • Soma/Sub: iguale denominadores (MMC). Ex.: 1/2 + 1/3 = (3 + 2)/6 = 5/6<br>
          • Multiplicação: numerador × numerador / denominador × denominador.<br>
          • Divisão: conserva a 1ª fração e multiplica pelo inverso da 2ª.<br><br>
          <strong>Números Complexos (z = a + bi):</strong><br>
          • Soma: (a + bi) + (c + di) = (a + c) + (b + d)i<br>
          • Multiplicação: distribua usando i² = −1.<br>
          • Conjugado de z = a + bi é z̄ = a − bi  |  Módulo: |z| = √(a² + b²)<br>
          • Potências de i (ciclo de 4 — divida o expoente por 4 e use o resto!):<br>
            i⁰ = 1 | i¹ = i | i² = −1 | i³ = −i
        </div>
      `
    },
    {
      id: "rlm-proporcao-porcentagem",
      titulo: "4. Razão, Proporção, Divisão Proporcional, Regra de Três e Porcentagem",
      html: `
        <h5>Razão, Proporção e Divisão Proporcional</h5>
        <div class="formula-box">
          <strong>Razão:</strong> quociente a / b (b ≠ 0).<br>
          <strong>Proporção:</strong> a / b = c / d  ⇔  a·d = b·c (produto dos meios = produto dos extremos).<br><br>
          <strong>Divisão Diretamente Proporcional (a, b, c):</strong><br>
          k = Total / (a + b + c)  →  partes = k·a, k·b, k·c.<br><br>
          <strong>Divisão Inversamente Proporcional (a, b, c):</strong><br>
          É proporcional aos inversos (1/a, 1/b, 1/c)!<br>
          k = Total / (1/a + 1/b + 1/c)  →  partes = k/a, k/b, k/c.
        </div>
        <h5>Regra de Três Simples e Composta</h5>
        <ul>
          <li><strong>Diretamente Proporcional (DP):</strong> se uma grandeza aumenta, a outra aumenta na mesma proporção (multiplica cruzado).</li>
          <li><strong>Inversamente Proporcional (IP):</strong> se uma grandeza aumenta, a outra diminui (ex.: mais servidores → menos dias; multiplica em linha reta / inverte a fração).</li>
          <li><strong>Regra de Três Composta (Método Processo × Produto):</strong> separe <em>causas/processo</em> (trabalhadores, horas/dia, dias, máquinas) de <em>efeito/produto</em> (processos arquivados, páginas digitadas). Multiplique as causas em linha reta e cruze apenas ao passar para o produto!</li>
        </ul>
        <h5>Porcentagem (Fatores de Multiplicação)</h5>
        <div class="formula-box">
          • p% de V = (p / 100) × V<br>
          • Aumento de i%:  V_final = V × (1 + i/100)   [ex.: +15% → × 1,15]<br>
          • Desconto de i%: V_final = V × (1 − i/100)   [ex.: −20% → × 0,80]<br>
          • Aumentos/descontos sucessivos: MULTIPLICAM-SE os fatores!<br>
            Ex.: +10% seguido de −10% → 1,10 × 0,90 = 0,99 (redução líquida de 1%, NÃO volta ao mesmo valor!)
        </div>
      `
    },
    {
      id: "rlm-sequencias-orientacao",
      titulo: "5. Raciocínio Sequencial, Orientação Espacial/Temporal e Formação de Conceitos",
      html: `
        <h5>Sequências Numéricas, Alfabéticas e Cíclicas</h5>
        <ul>
          <li><strong>Progressão Aritmética (PA):</strong> soma-se uma constante <em>r</em> (<code>aₙ = a₁ + (n−1)·r</code>).</li>
          <li><strong>Progressão Geométrica (PG):</strong> multiplica-se por uma constante <em>q</em> (<code>aₙ = a₁ · qⁿ⁻¹</code>).</li>
          <li><strong>Diferenças de 2ª ordem:</strong> calcule a diferença entre termos consecutivos; muitas vezes as diferenças formam uma PA (ex.: 2, 5, 10, 17, 26 → diferenças +3, +5, +7, +9 → próximo +11 = 37).</li>
          <li><strong>Sequências cíclicas / Calendário (Orientação Temporal):</strong> divida a posição <em>N</em> pelo tamanho do ciclo <em>C</em> (ex.: dias da semana = ciclo de <strong>7</strong>). O <strong>resto</strong> indica a posição! (Resto 0 = último elemento do ciclo). <em>Atenção:</em> ano comum tem 365 dias (365 = 52×7 + <strong>1</strong> → avança 1 dia da semana); ano bissexto tem 366 dias (avança <strong>2</strong> dias da semana se passar por 29/fev).</li>
        </ul>
        <h5>Orientação Espacial e Discriminação de Elementos</h5>
        <ul>
          <li><strong>Pontos cardeais:</strong> Norte (cima), Sul (baixo), Leste (direita), Oeste (esquerda). Em deslocamentos perpendiculares (ex.: 3 km Norte e 4 km Leste), a distância em linha reta usa o <strong>Teorema de Pitágoras</strong>: <code>d = √(3² + 4²) = 5 km</code>.</li>
          <li><strong>Formação de Conceitos e Discriminação de Elementos:</strong> identificar o padrão comum entre um grupo de palavras, números ou figuras (ex.: qual elemento <em>não</em> pertence ao conjunto) com base em propriedades semânticas, fonológicas, numéricas ou estruturais.</li>
        </ul>
      `
    }
  ]
};
