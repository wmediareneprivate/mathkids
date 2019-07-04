class Exercise
{

    constructor(presentationString = "", result = null){

        this.presentationString = presentationString;

        this.result = result;

        this.answer = null;

        this.startTime = 0;

        this.answerTime = 0;
        
        this.duration = 0;

    }


    start(){
        this.startTime = new Date().getTime();
    }

    setAnswer(answer){
        this.answerTime = new Date().getTime();
        this.answer = answer;
    }


}