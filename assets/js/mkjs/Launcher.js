class Launcher
{
    constructor(){}

    start(){

        this.testInit();
    }


    testInit(){

        var testClass = new TestClass("[value from launcher]");

        var gameGenMult = new GameGeneratorMulipTable(10);
        gameGenMult.resetPointer();

        var game = new Game(gameGenMult, $('#game_box'));
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


