$(document).ready(() => {

    function JoueurSelected (joueur) {

        if (joueur == 1)
        {
            
            $("#player1").css('border','solid');            
            $("#player1").css('border-radius','5px');
            $("#player1").css('padding','2%');
            $("#player1").css('border-color','#000000');
            console.log('changement joueur 1');
            
        }

    }



    function AnimationDe(face) {
        if (face == 0) {
            $("#imageDe").attr('src', '/images/face-1.png').delay(1000);
        }
        else if (face == 1) {
            $("#imageDe").attr('src', '/images/face-2.png').delay(1000);
        }
        else if (face == 2) {
            $("#imageDe").attr('src', '/images/face-3.png').delay(1000);
        }
        else if (face == 3) {
            $("#imageDe").attr('src', '/images/face-4.png').delay(1000);
        }
        else if (face == 4) {
            $("#imageDe").attr('src', '/images/face-5.png').delay(1000);
        }
        else if (face == 5) {
            $("#imageDe").attr('src', '/images/face-6.png').delay(1000);
        }


    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function NewGame() {
        alert('Lance un nouveau jeux')
    }

    function RollDice() {
        /**alert('RollDice')**/
        let rollResult;

        rollResult = getRandomInt(6);
        AnimationDe(rollResult);

    }

    function Hold() {
        JoueurSelected(1);
    }




    $('#btnNewGame').click(function () { NewGame(); })
    $('#btnRollDice').click(function () { RollDice(); });
    $('#btnHold').click(function () { Hold(); })

    




})