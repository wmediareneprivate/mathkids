class KeyboardSuper
{

    constructor(){

        this.layout = null;
        this.onClickNumberKeyFunc = null;

        this.init();
    }

    init(){

        this.layout = $('<diy id="keyboard" class="keyboard"></div>');

        this.extendLayout();

        this.setEventListeners();

    }

    extendLayout(){};

    getLayout(){ return this.layout; }

    setEventListeners(){

    }

    setSelectorEventListeners(){

        $('.keyboard_key').on('click', (e) => {
            this.doOnNumberKeyClick( $(e.currentTarget).html() );
        } );
    }


    doOnNumberKeyClick(elemValue){

        if(this.onClickNumberKeyFunc == null)throw 'call [onClickNumberKey] was not set';

        this.onClickNumberKeyFunc(elemValue);

    }
}