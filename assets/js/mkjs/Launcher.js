class Launcher
{
    constructor()
    {
        this.mainLayout = new MainLayout();
    }

    start(){

        this.setEventListener();
    }


    setEventListener(){

        this.mainLayout.gameMulipBtn.on('click', () => this.startGameMultip() )

    }

    startGameMultip(){

        var gameGen = new GameGeneratorMulipTable(5);
        var newGame = new Game(gameGen);

        this.setNewGameToLayout(newGame);

    }


    setNewGameToLayout(newGame){

        this.mainLayout.gameBox.empty();
        this.mainLayout.gameBox.append(newGame.getLayout());
        newGame.setSelectorEventListeners();
        
        newGame.onFinish = ( () => this.makeSummary(newGame) );
        newGame.start();

    }

    makeSummary(game)
    {

        this.mainLayout.gameBox.empty();

        var sum = new Summary(game);

        this.mainLayout.gameBox.append(sum.getLayout());

    }


}

/* call launcher by anonymous inline function */
(
    function(){
        $(document).ready(function ()
        { launcher = new Launcher().start(); });
    }

)();


