class Summary
{

    constructor(gameGenerator)
    {
        this.gameGenerator = gameGenerator;

        this.layout = null;

        this.init();
    }

    init(){

        this.layout = $('<div id="summary" class="summary"></div>');


        this.setLayout();

        console.log(this.gameGenerator);

    }

    setLayout(){

        this.layout.html('here will be showen the summary');

    }

    getLayout(){ return this.layout; }

}