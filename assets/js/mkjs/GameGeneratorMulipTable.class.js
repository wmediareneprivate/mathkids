class GameGeneratorMulipTable extends GameGeneratorSuper
{

    constructor(exerciseNumb = 1){
        super(exerciseNumb);
    }

    generate(){


        for(var i = 0; i < this.exerciseNumb; i++){

            var a = Math.floor(Math.random() * Math.floor(10));
            var b = Math.floor(Math.random() * Math.floor(10));

            this.addExercise(new Exercise(a+" * "+b, (a*b) ))

        }

    }

}