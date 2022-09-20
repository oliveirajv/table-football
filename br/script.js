(() => {
    let ancora = document.getElementById('q1');
    // Função que remove o primeiro elemento filho.
    function limpar(el) {
        while (el.firstChild) {
            el.firstChild.remove()
        }
    }
    // Criando um array com os times e seus dados.
    let times = [
        {nome: 'Flamengo', pontos: 0, vitorias: 0, empates: 0, derrotas: 0},
        {nome: 'Fluminense', pontos: 0, vitorias: 0, empates: 0, derrotas: 0},
        {nome: 'Botafogo', pontos: 0, vitorias: 0, empates: 0, derrotas: 0},
        {nome: 'Portuguesa RJ', pontos: 0, vitorias: 0, empates: 0, derrotas: 0},
    ]
    // Criando a tabela de classificação.
    let tabelaClassificacaoDiv = document.createElement('div');
    let tabelaClassificacao = document.createElement('table');
    tabelaClassificacao.className = 'table';
    // Criando uma variável para inserir os títulos da tabela de classificação em uma linha.
    const tabelaClassificacaoCabecalho = tabelaClassificacao.createTHead().insertRow();
    // Inserindo os títulos da tabela de classificação.
    tabelaClassificacaoCabecalho.insertCell(-1).innerText = 'Nome';
    tabelaClassificacaoCabecalho.insertCell(-1).innerText = 'Pontos';
    tabelaClassificacaoCabecalho.insertCell(-1).innerText = 'Vitórias';
    tabelaClassificacaoCabecalho.insertCell(-1).innerText = 'Empates';
    tabelaClassificacaoCabecalho.insertCell(-1).innerText = 'Derrotas';
    // Variável que cria o corpo da tabela de classificação.
    let tabelaClassificacaoCorpo = tabelaClassificacao.createTBody(times);
    // Função que tem a tabela de classificação completa.
    function criarTabelaClassificacao(tabelaClassificacaoCorpo, times) {
        limpar(tabelaClassificacaoCorpo);
        // "for" que insere na tabela de classificação, os times e seus dados.
        for (time of times) {
            // Variável que insere uma linha.
            let adicionarFileira = tabelaClassificacaoCorpo.insertRow();
            // Inserindo o nome dos times na linha.
            let nome = adicionarFileira.insertCell(-1);
            nome.innerText = time.nome;            
            // Inserindo os pontos dos times na linha.
            let pontos = adicionarFileira.insertCell(-1);
            pontos.innerText = time.pontos;
            // Inserindo as vitórias dos times na linha.
            let vitorias = adicionarFileira.insertCell(-1);
            vitorias.innerText = time.vitorias;
            // Inserindo os empates dos times na linha.
            let empates = adicionarFileira.insertCell(-1);
            empates.innerText = time.empates;
            // Inserindo as derrotas dos times na linha.
            let derrotas = adicionarFileira.insertCell(-1);
            derrotas.innerText = time.derrotas;
        }
    }
    // Criando a tabela de partidas.
    let tabelaPartidasDiv = document.createElement('div');
    let tabelaPartidas = document.createElement('table');
    tabelaPartidas.className = 'table table-bordered table-hover';
    // Criando uma variável para inserir os títulos da tabela de partidas em uma linha.
    const tabelaPartidasCabecalho = tabelaPartidas.createTHead().insertRow();
    // Inserindo os titulos da tabela de partidas.
    tabelaPartidasCabecalho.insertCell(-1).innerText = 'casa';
    tabelaPartidasCabecalho.insertCell(-1).innerText = 'vitória do time da casa';
    tabelaPartidasCabecalho.insertCell(-1).innerText = 'empate';
    tabelaPartidasCabecalho.insertCell(-1).innerText = 'vitória do time visitante';
    tabelaPartidasCabecalho.insertCell(-1).innerText = 'visitante';
    // Array com as partidas.
    let partidas = [
        // Rodada 1.
        {casaNome: times[0].nome, timeCasa: 0, vitoriaCasa: '', empate: '', vitoriaVisitante: '', timeVisitante: 1, visitanteNome: times[1].nome},
        {casaNome: times[2].nome, timeCasa: 2, vitoriaCasa: '', empate: '', vitoriaVisitante: '', timeVisitante: 3, visitanteNome: times[3].nome},
        // Rodada 2.
        {casaNome: times[0].nome, timeCasa: 0, vitoriaCasa: '', empate: '', vitoriaVisitante: '', timeVisitante: 2, visitanteNome: times[2].nome},
        {casaNome: times[1].nome, timeCasa: 1, vitoriaCasa: '', empate: '', vitoriaVisitante: '', timeVisitante: 3, visitanteNome: times[3].nome},
        // Rodada 3.
        {casaNome: times[0].nome, timeCasa: 0, vitoriaCasa: '', empate: '', vitoriaVisitante: '', timeVisitante: 3, visitanteNome: times[3].nome},
        {casaNome: times[1].nome, timeCasa: 1, vitoriaCasa: '', empate: '', vitoriaVisitante: '', timeVisitante: 2, visitanteNome: times[2].nome},
    ];
    // Variável que cria o corpo da tabela de partidas.
    let tabelaPartidasCorpo = tabelaPartidas.createTBody(partidas);
    // Função que distribui os pontos e vitórias.
    function darPontosVitorias(vencedor) {
        vencedor.pontos += 3;
        vencedor.vitorias ++;
    }
    // Função que remove os pontos e vitórias.
    function tirarPontosVitorias(vencedor){
        vencedor.pontos -= 3;
        vencedor.vitorias --;
    }
    // Função que distribui as derrotas.
    function darDerrotas(perdedor) {
        perdedor.derrotas ++;
    }
    // Função que remove as derrotas.
    function tirarDerrotas(perdedor){
        perdedor.derrotas --;
    }
    // Função que distribui os pontos e empates.
    function darPontosEmpates(timeCasa, timeVisitante) {
        timeCasa.pontos ++;
        timeVisitante.pontos ++;
        timeCasa.empates ++;
        timeVisitante.empates ++;
    }
    // Função que remove pontos e empates.
    function tirarPontosEmpates(timeCasa, timeVisitante) {
        timeCasa.pontos --;
        timeVisitante.pontos --;
        timeCasa.empates --;
        timeVisitante.empates --;
    }
    // Função que tem a tabela de partidas completa.
    function criarTabelaPartidas(tabelaPartidasCorpo, partidas) {
        limpar(tabelaPartidasCorpo);
        // "for" que cria as células das partidas.
        for (let partida of partidas) {
            // Variável que insere uma linha.
            let adicionarFileira = tabelaPartidasCorpo.insertRow();
            // Inserindo o nome do time de casa.
            let nomeTimeCasa = adicionarFileira.insertCell(-1);
            nomeTimeCasa.innerText = partida.casaNome;
            // Inserindo as vitória do time da casa na linha.
            let vitoriaCasa = adicionarFileira.insertCell(-1);
            // Inserindo o empate na linha.
            let empate = adicionarFileira.insertCell(-1);
            // Inserindo a vitória do time visitante.
            let vitoriaVisitante = adicionarFileira.insertCell(-1);
            // Inserindo o nome do time visitante.
            let nomeTimeVisitante = adicionarFileira.insertCell();
            nomeTimeVisitante.innerText = partida.visitanteNome;
            // Alterando a cor da célula, para verde, caso o usuário clique em vitória.
            if (partida.vitoriaCasa === true) {
                vitoriaCasa.className = 'bg-success';
            }
            // Criando o evento do clique na vitória e colocando como "false" as outras opções.
            vitoriaCasa.onclick = (e) => {
                partida.empate = '';
                partida.vitoriaVisitante = '';
                partida.vitoriaCasa = !partida.vitoriaCasa;
                if (partida.vitoriaCasa === true) {
                    criarTabelaPartidas(tabelaPartidasCorpo, partidas);
                    darPontosVitorias(times[partida.timeCasa]);
                    darDerrotas(times[partida.timeVisitante]);
                    limpar(criarTabelaClassificacao(tabelaClassificacaoCorpo, times));
                } else {
                    criarTabelaPartidas(tabelaPartidasCorpo, partidas);
                    tirarPontosVitorias(times[partida.timeCasa]);
                    tirarDerrotas(times[partida.timeVisitante]);
                    limpar(criarTabelaClassificacao(tabelaClassificacaoCorpo, times));
                }
            }
            // Alterando a cor da célula, para amarelo, caso o usuário clique em empate.
            if (partida.empate === true) {
                empate.className = 'bg-warning';
            }
            // Criando o evento do clique no empate e colocando como "false" as outras opções.
            empate.onclick = (e) => {
                partida.vitoriaCasa = '';
                partida.vitoriaVisitante = '';
                partida.empate = !partida.empate;
                if (partida.empate === true) {
                    criarTabelaPartidas(tabelaPartidasCorpo, partidas);
                    darPontosEmpates(times[partida.timeCasa], times[partida.timeVisitante]);
                    limpar(criarTabelaClassificacao(tabelaClassificacaoCorpo, times));
                } else {
                    criarTabelaPartidas(tabelaPartidasCorpo, partidas);
                    tirarPontosEmpates(times[partida.timeCasa], times[partida.timeVisitante]);
                    limpar(criarTabelaClassificacao(tabelaClassificacaoCorpo, times));
                }                
            }
            // Alterando a cor da célula, para azul, caso o usuário clique na vitória do visitante.
            if (partida.vitoriaVisitante === true) {
                vitoriaVisitante.className = 'bg-primary';
            }
            // Criando o evento do clique em vitória do visitante e colocando como "false" as outras opções.
            vitoriaVisitante.onclick = (e) => {
                partida.vitoriaCasa = '';
                partida.empate = '';
                partida.vitoriaVisitante = !partida.vitoriaVisitante;
                if (partida.vitoriaVisitante === true) {
                    criarTabelaPartidas(tabelaPartidasCorpo, partidas);
                    darPontosVitorias(times[partida.timeVisitante]);
                    darDerrotas(times[partida.timeCasa]);
                    limpar(criarTabelaClassificacao(tabelaClassificacaoCorpo, times));
                } else {
                    criarTabelaPartidas(tabelaPartidasCorpo, partidas);
                    tirarPontosVitorias(times[partida.timeVisitante]);
                    tirarDerrotas(times[partida.timeCasa]);
                    limpar(criarTabelaClassificacao(tabelaClassificacaoCorpo, times));
                }
            }
        }
    }
    // Chamando as funçóes.
    criarTabelaClassificacao(tabelaClassificacaoCorpo, times);
    criarTabelaPartidas(tabelaPartidasCorpo, partidas);
    // Tabelas.
    ancora.append(tabelaClassificacaoDiv);
    tabelaClassificacaoDiv.appendChild(tabelaClassificacao);
    ancora.append(tabelaPartidasDiv);
    tabelaPartidasDiv.appendChild(tabelaPartidas);
})()
