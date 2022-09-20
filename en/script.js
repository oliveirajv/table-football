(() => {
    let anchor = document.getElementById('q1');
    // Function that removes the first child element.
    function cleaner(el) {
        while (el.firstChild) {
            el.firstChild.remove()
        }
    }
    // Creating an array with the teams and their values.
    let teams = [
        {name: 'Flamengo', points: 0, wins: 0, draws: 0, defeats: 0},
        {name: 'Fluminense', points: 0, wins: 0, draws: 0, defeats: 0},
        {name: 'Botafogo', points: 0, wins: 0, draws: 0, defeats: 0},
        {name: 'Portuguesa RJ', points: 0, wins: 0, draws: 0, defeats: 0},
    ]
    // Creating the standing table.
    let standingTableDiv = document.createElement('div');
    let standingTable = document.createElement('table');
    standingTable.className = 'table';
    // Creating a variable to insert the stading table headings into a row.
    const standingTableTitles = standingTable.createTHead().insertRow();
    // Inserting the standing table headings.
    standingTableTitles.insertCell(-1).innerText = 'Name';
    standingTableTitles.insertCell(-1).innerText = 'Points';
    standingTableTitles.insertCell(-1).innerText = 'Wins';
    standingTableTitles.insertCell(-1).innerText = 'Draws';
    standingTableTitles.insertCell(-1).innerText = 'Defeats';
    // Variable that creates the body of the standing table.
    let standingTableBody = standingTable.createTBody(teams);
    // Function that has the complete standing table.
    function createStandingTable(standingTableBody, teams) {
        cleaner(standingTableBody);
        // "for" that inserts in the standing table, the teams and their values.
        for (team of teams) {
            // Variable that inserts a row.
            let bodyRow = standingTableBody.insertRow();
            // Inserting the team names on the row.
            let name = bodyRow.insertCell(-1);
            name.innerText = team.name;            
            // Inserting the team points on the row.
            let points = bodyRow.insertCell(-1);
            points.innerText = team.points;
            // Inserting the team wins on the row.
            let wins = bodyRow.insertCell(-1);
            wins.innerText = team.wins;
            // Inserting the team draws on the row.
            let draws = bodyRow.insertCell(-1);
            draws.innerText = team.draws;
            // Inserting the team defeats on the row.
            let defeats = bodyRow.insertCell(-1);
            defeats.innerText = team.defeats;
        }
    }
    // Creating the matches table.
    let matchesTableDiv = document.createElement('div');
    let matchesTable = document.createElement('table');
    matchesTable.className = 'table table-bordered table-hover';
    // Creating a variable to insert the matches table headings into a row.
    const matchesTableTitles = matchesTable.createTHead().insertRow();
    // Inserting the matches table headings.
    matchesTableTitles.insertCell(-1).innerText = 'home';
    matchesTableTitles.insertCell(-1).innerText = 'home team win';
    matchesTableTitles.insertCell(-1).innerText = 'draw';
    matchesTableTitles.insertCell(-1).innerText = 'away team win';
    matchesTableTitles.insertCell(-1).innerText = 'away';
    // Array with the matches.
    let matches = [
        // Round 1.
        {homeName: teams[0].name, teamHome: 0, homeWin: '', draw: '', awayWin: '', teamAway: 1, awayName: teams[1].name},
        {homeName: teams[2].name, teamHome: 2, homeWin: '', draw: '', awayWin: '', teamAway: 3, awayName: teams[3].name},
        // Round 2.
        {homeName: teams[0].name, teamHome: 0, homeWin: '', draw: '', awayWin: '', teamAway: 2, awayName: teams[2].name},
        {homeName: teams[1].name, teamHome: 1, homeWin: '', draw: '', awayWin: '', teamAway: 3, awayName: teams[3].name},
        // Round 3.
        {homeName: teams[0].name, teamHome: 0, homeWin: '', draw: '', awayWin: '', teamAway: 3, awayName: teams[3].name},
        {homeName: teams[1].name, teamHome: 1, homeWin: '', draw: '', awayWin: '', teamAway: 2, awayName: teams[2].name},
    ];
    // Variable that creates the body of the matches table.
    let matchesTableBody = matchesTable.createTBody(matches);
    // Function that distributes points and wins.
    function givePointsWins(winner) {
        winner.points += 3;
        winner.wins ++;
    }
    // Function that remove points and wins.
    function removePointsWins(winner){
        winner.points -= 3;
        winner.wins --;
    }
    // Function that distributes the defeates.
    function giveDefeats(loser) {
        loser.defeats ++;
    }
    // Function that remove the defeats.
    function removeDefeats(loser){
        loser.defeats --;
    }
    // Function that distributes points and draws.
    function givePointsDraws(teamHome, teamAway) {
        teamHome.points ++;
        teamAway.points ++;
        teamHome.draws ++;
        teamAway.draws ++;
    }
    // Function that remove points and draws.
    function removePointsDraws(teamHome, teamAway) {
        teamHome.points --;
        teamAway.points --;
        teamHome.draws --;
        teamAway.draws --;
    }
    // Function that has the complete matches table.
    function createMatchesTable(matchesTableBody, matches) {
        cleaner(matchesTableBody);
        // "for" that create the matches cells.
        for (let match of matches) {
            // Variable that inserts a row.
            let bodyRow = matchesTableBody.insertRow();
            // Inserting the team names on the row.
            let homeTeamName = bodyRow.insertCell(-1);
            homeTeamName.innerText = match.homeName;
            // Inserting the team win on the row.
            let homeWin = bodyRow.insertCell(-1);
            // Inserting the team draw on the row.
            let draw = bodyRow.insertCell(-1);
            // Inserting the visitor team homeWinn on the row.
            let awayWin = bodyRow.insertCell(-1);
            // Inserting the visitor team name.
            let awayTeamName = bodyRow.insertCell();
            awayTeamName.innerText = match.awayName;
            // Changing color of the cell, to green, if the user clicks on win.
            if (match.homeWin === true) {
                homeWin.className = 'bg-success';
            }
            // Creating the click event on home victory and setting the other options to false.
            homeWin.onclick = (e) => {
                match.draw = '';
                match.awayWin = '';
                match.homeWin = !match.homeWin;
                if (match.homeWin === true) {
                    createMatchesTable(matchesTableBody, matches);
                    givePointsWins(teams[match.teamHome]);
                    giveDefeats(teams[match.teamAway]);
                    cleaner(createStandingTable(standingTableBody, teams));
                } else {
                    createMatchesTable(matchesTableBody, matches);
                    removePointsWins(teams[match.teamHome]);
                    removeDefeats(teams[match.teamAway]);
                    cleaner(createStandingTable(standingTableBody, teams));
                }
            }
            // Changing color of the cell, to yellow, if the user clicks on draw.
            if (match.draw === true) {
                draw.className = 'bg-warning';
            }
            // Creating the click event on draw and setting the other options to false.
            draw.onclick = (e) => {
                match.homeWin = '';
                match.awayWin = '';
                match.draw = !match.draw;
                if (match.draw === true) {
                    createMatchesTable(matchesTableBody, matches);
                    givePointsDraws(teams[match.teamHome], teams[match.teamAway]);
                    cleaner(createStandingTable(standingTableBody, teams));
                } else {
                    createMatchesTable(matchesTableBody, matches);
                    removePointsDraws(teams[match.teamHome], teams[match.teamAway]);
                    cleaner(createStandingTable(standingTableBody, teams));
                }                
            }
            // Changing color of the cell, to blue, if the user clicks on draw.
            if (match.awayWin === true) {
                awayWin.className = 'bg-primary';
            }
            // Creating the click event on visitor victory and setting the other options to false.
            awayWin.onclick = (e) => {
                match.homeWin = '';
                match.draw = '';
                match.awayWin = !match.awayWin;
                if (match.awayWin === true) {
                    createMatchesTable(matchesTableBody, matches);
                    givePointsWins(teams[match.teamAway]);
                    giveDefeats(teams[match.teamHome]);
                    cleaner(createStandingTable(standingTableBody, teams));
                } else {
                    createMatchesTable(matchesTableBody, matches);
                    removePointsWins(teams[match.teamAway]);
                    removeDefeats(teams[match.teamHome]);
                    cleaner(createStandingTable(standingTableBody, teams));
                }
            }
        }
    }
    // Calling the functions.
    createStandingTable(standingTableBody, teams);
    createMatchesTable(matchesTableBody, matches);
    // Tables.
    anchor.append(standingTableDiv);
    standingTableDiv.appendChild(standingTable);
    anchor.append(matchesTableDiv);
    matchesTableDiv.appendChild(matchesTable);
})()
