class Launcher
{
    constructor(){}

    start(){

        this.testInit();
    }


    testInit(){

        var testClass = new TestClass("[value from launcher]");

        var gameGenMult = new GameGeneratorMulipTable(10);
/*
        console.log(gameGenMult);
        
        var ex = null;

        while(ex !== false){
            ex = gameGenMult.getNext();
            if(ex === false)break;
            console.log(ex.presentationString);
        } */

        gameGenMult.resetPointer();

        var game = new Game(gameGenMult, $('#game_box'));
       // game.setLayout();

    }


}

$(document).ready(function ()
{

    launcher = new Launcher().start();

});

