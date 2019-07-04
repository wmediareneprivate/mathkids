class Game
{

    constructor(gameGenerator, parentElement)
    {
        this.gameGenerator = gameGenerator;

        this.parentElement = parentElement;

        this.layout = null;

        this.exerciseOut = null;

        this.answerTxt = null;

        this.answerBtb = null;

        this.init();
    }

    init()
    {
        this.layout = $('<div id="game_layout" class="game_layout"></div>');
        this.exerciseOut = $('<div id="exercise_out" class="exercise_out"></div>');
        this.answerTxt = $('<input id="answer_txt" class="answer_txt"></div>');
        this.answerBtb = $('<input type="button" id="answer_btn" class="answer_btn" value="check"></div>');

        this.setLayout();
        this.setEventListeners();
    }

    setLayout(){

        this.parentElement.empty();
        this.parentElement.append(this.layout);
        this.layout.append(this.exerciseOut);
        this.layout.append(this.answerTxt);
        this.layout.append(this.answerBtb);

        this.exerciseOut.html('1 x 1');

    }

    setEventListeners(){

        this.answerBtb.on('click', function(){
            alert('you gave an answer');
        });

    }

}








