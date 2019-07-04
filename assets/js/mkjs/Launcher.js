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
        
        newGame.onFinish = ( () => this.makeSummary(gameGenMult, gameBox) );
        newGame.start();

    }

    makeSummary(gameGenerator, parentElement)
    {
        console.log(gameGenerator);
        console.log('summarised game');

        parentElement.empty();

        var sum = new Summary(gameGenerator, parentElement);

        parentElement.append(sum.getLayout());

    }


}

/* call launcher by anonymous inline function */
(
    function(){
        $(document).ready(function ()
        { launcher = new Launcher().start(); });
    }

)();


