class Game
{

    constructor(gameGenerator)
    {

        this.gameGenerator = gameGenerator;

        this.currExercise = null;

        this.layout = null;

        this.exerciseOut = null;

        this.answerTxt = null;

        this.answerBtb = null;

        this.answerDelBtm = null;

        this.init();
    }

    init()
    {
        this.layout = $('<div id="game_layout" class="game_layout"></div>');
        this.exerciseOut = $('<div id="exercise_out" class="exercise_out"></div>');
        this.answerTxt = $('<input id="answer_txt" class="answer_txt"></div>');
        this.answerBtb = $('<input type="button" id="answer_btn" class="answer_btn" value="check in"></div>');
        this.answerDelBtm = $('<input type="button" id="answer_del_btn" class="answer_del_btn" value="x"></div>');

        this.setLayout();
        this.setEventListeners();
    }

    setLayout(){

        this.layout.append(this.exerciseOut);
        this.layout.append(this.answerTxt);
        this.layout.append(this.answerDelBtm);
        this.layout.append(this.answerBtb);

    }

    getLayout(){ return this.layout; }

    setEventListeners(){

        this.answerDelBtm.on('click', ()=> this.answerTxt.val('') );

        this.answerBtb.on('click', ()=> this.handleAnswer() );

    }

    handleAnswer()
    {

        var answ = this.answerTxt.val();

        this.currExercise.answer = answ;

        console.log('you gave an answer by method : '+answ );
        console.log(this.currExercise);

        this.setNextExercise();
    }

    setNextExercise(){

        this.currExercise = this.gameGenerator.getNext();

        if(this.currExercise === false){
            this.end();
            return;
        }

        this.exerciseOut.html(this.currExercise.presentationString);

        this.answerTxt.val('');


    }

    start(){
        this.gameGenerator.resetPointer();
        this.setNextExercise();
    }

    end(){
        console.log('ended game');
        console.log(this.gameGenerator);
        this.answerBtb.remove();
    }

}








