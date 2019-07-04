class Launcher
{
    constructor(){}

    start(){

        this.testInit();
    }


    testInit(){

        var gameGenMult = new GameGeneratorMulipTable(5);

        var gameBox = $('#game_box');

        var newGame = new Game(gameGenMult);

        gameBox.empty();
        gameBox.append(newGame.getLayout());
        
        newGame.onFinish = () => this.makeSummary(gameGenMult);
        newGame.start();

    }

    makeSummary(gameGenerator)
    {
        console.log(gameGenerator);
        console.log('summarised game');
    }


}

/* call launcher by anonymous inline function */
(
    function(){
        $(document).ready(function ()
        { launcher = new Launcher().start(); });
    }

)();


