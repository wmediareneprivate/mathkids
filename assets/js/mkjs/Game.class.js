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

        this.keyboard = null;

        this.onFinish = null;

        this.init();
    }

    init()
    {
        this.keyboard = new KeyboardSimple();

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
        this.layout.append(this.keyboard.getLayout());
        this.layout.append(this.answerBtb);

    }

    getLayout(){ return this.layout; }

    setEventListeners(){

        this.keyboard.onClickNumberKeyFunc = (
            (value) => this.handleNumberKeyClick(value)
        );

        this.answerDelBtm.on('click', () => this.answerTxt.val('') );

        this.answerBtb.on('click', () => this.handleAnswer() );

    }

    setSelectorEventListeners(){

        this.keyboard.setSelectorEventListeners();

    }

    handleNumberKeyClick(keyValue){
        var newVal = this.answerTxt.val()+keyValue;
        this.answerTxt.val(newVal);
    }

    handleAnswer()
    {

        var answ = this.answerTxt.val();

        this.currExercise.answer = answ;

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
        
        this.answerBtb.remove();
        if(this.onFinish == null)throw 'no stepout method defined for game.[onFinished]';
        this.onFinish();
    }

}








