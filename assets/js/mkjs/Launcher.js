class Launcher
{
    constructor(){}

    start(){

        this.testInit();
    }


    testInit(){

        var gameGenMult = new GameGeneratorMulipTable(5);

        var gameBox = $('#game_box');

        var game = new Game(gameGenMult);

        gameBox.empty();
        gameBox.append(game.getLayout());

        game.start();

    }


}

/* call launcher by anonymous inline function */
(
    function(){
        $(document).ready(function ()
        { launcher = new Launcher().start(); });
    }

)();


