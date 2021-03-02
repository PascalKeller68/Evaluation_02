$(document).ready(() => {

    /** Variable pour calcul du score **/

    let player = 1;
    let scoreTotalPlayer1 = 0;
    let scoreTotalPlayer2 = 0;
    let scoreCurrentPlayer1 = 0;
    let scoreCurrentPlayer2 = 0;


    /** Fonction de selection du joueur **/
    function JoueurSelected(joueur) {

        if (joueur == 1) {

            $("#player1").css('border', 'solid');
            $("#player1").css('border-radius', '5px');
            $("#player1").css('border-color', '#000000');
            $("#player2").css('border', 'none');
        }

        if (joueur == 2) {

            $("#player2").css('border', 'solid');
            $("#player2").css('border-radius', '5px');
            $("#player2").css('border-color', '#000000');
            $("#player1").css('border', 'none');
        }
    }

    /** Fonction pour animer le dé **/
    function AnimationDe(face) {
        if (face == 0) {
            $("#imageDe").attr('src', './images/face-1.png').delay(1000);
        }
        else if (face == 1) {
            $("#imageDe").attr('src', './images/face-2.png').delay(1000);
        }
        else if (face == 2) {
            $("#imageDe").attr('src', './images/face-3.png').delay(1000);
        }
        else if (face == 3) {
            $("#imageDe").attr('src', './images/face-4.png').delay(1000);
        }
        else if (face == 4) {
            $("#imageDe").attr('src', './images/face-5.png').delay(1000);
        }
        else if (face == 5) {
            $("#imageDe").attr('src', './images/face-6.png').delay(1000);
        }
    }

    /** Fonction pour chiffre aléatoire **/
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /** Fonction nouvelle partie **/
    function NewGame() {
        alert('Lancement d\'une nouvelle partie')
        scoreTotalPlayer1 = 0;
        scoreTotalPlayer2 = 0;
        scoreCurrentPlayer1 = 0;
        scoreCurrentPlayer2 = 0;
        $("#currentScore1").text(scoreCurrentPlayer1);
        $("#currentScore2").text(scoreCurrentPlayer2);
        $("#scorePlayer1").text(scoreTotalPlayer1);
        $("#scorePlayer2").text(scoreTotalPlayer2);
    }

    /** Fonction lancer de dé **/
    function RollDice() {

        let rollResult;
        rollResult = getRandomInt(6);
        AnimationDe(rollResult);

        if (player == 1) {
            scoreCurrentPlayer1 = scoreCurrentPlayer1 + rollResult + 1;
            $("#currentScore1").text(scoreCurrentPlayer1);

            if (rollResult == 0) {
                scoreCurrentPlayer1 = 0;
                $("#currentScore1").text(scoreCurrentPlayer1);
                alert('Vous avez fait un 1, changement de joueur, score courant mit à 0');
                Hold();
            }
        }
        else if (player == 2) {

            scoreCurrentPlayer2 = scoreCurrentPlayer2 + rollResult + 1;
            $("#currentScore2").text(scoreCurrentPlayer2);

            if (rollResult == 0) {
                scoreCurrentPlayer2 = 0;
                $("#currentScore2").text(scoreCurrentPlayer2);
                alert('Vous avez fait un 1, changement de joueur, score courant mit à 0');
                Hold();
            }
        }
        Winner();
    }

    /** Fonction fin de tour changement de joueur **/
    function Hold() {
        if (player == 1) {
            player = 2;
            scoreTotalPlayer1 = scoreTotalPlayer1 + scoreCurrentPlayer1;
            scoreCurrentPlayer1 = 0;
            $("#scorePlayer1").text(scoreTotalPlayer1);
            $("#currentScore1").text(scoreCurrentPlayer1);
        }
        else if (player == 2) {
            player = 1;
            scoreTotalPlayer2 = scoreTotalPlayer2 + scoreCurrentPlayer2;
            scoreCurrentPlayer2 = 0;
            $("#scorePlayer2").text(scoreTotalPlayer2);
            $("#currentScore2").text(scoreCurrentPlayer2);
        }
        JoueurSelected(player);
    }

    /** Fonction vérification gagnant **/
    function Winner() {
        let score1 = scoreTotalPlayer1 + scoreCurrentPlayer1;
        let score2 = scoreTotalPlayer2 + scoreCurrentPlayer2;

        if (score1 >= 100) {
            console.log('Score joueur 1 :' + scoreTotalPlayer1);
            alert('Le joueur 1 à gagné !');
            NewGame();
        }
        if (score2 >= 100) {
            console.log('Score joueur 1 :' + scoreTotalPlayer2);
            alert('Le joueur 2 à gagné !');
            NewGame();
        }

    }


    /** vérification d'évenements **/
    $('#btnNewGame').click(function () { NewGame(); })
    $('#btnRollDice').click(function () { RollDice(); });
    $('#btnHold').click(function () { Hold(); })


    JoueurSelected(player);

})