/**
 * 
 * GameGenerator class to extend
 * to a concrete GameGenerator sub class
 * 
 */
class GameGeneratorSuper
{

    /**
     * defines the amount of exercises to generate
     * 
     * @param {number} exerciseNumb 
     */
    constructor(exerciseNumb = 1)
    {

        this.exerciseNumb = exerciseNumb;
        if(this.exerciseNumb < 1)this.exerciseNumb = 1;

        this.exerciseList = Array();
        this.listPointer = 0;

        this.generate();


    }

    generate(){}

    getNext()
    {
        if(this.listPointer >= this.exerciseList.length )return false;
        var ex = this.exerciseList[this.listPointer];
        this.listPointer++;
        return ex;
    }

    resetPointer()
    {
        this.listPointer = 0;
    }

    addExercise(exercise)
    {
        if(exercise == null)throw "parameter [exercise] is null";
        if( !exercise instanceof Exercise)throw "parameter [exercise] is not instance of [Exercise]";
        this.exerciseList.push(exercise);
    }


}