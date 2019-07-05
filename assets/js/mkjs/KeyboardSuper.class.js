class KeyboardSuper
{

    constructor(){

        this.layout = null;
        this.onClickKey = null;

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
            this.doOnKeyClick( $(e.currentTarget).html() );
        } );
    }


    doOnKeyClick(elemValue){

        if(this.onClickKey == null)throw 'call [onClickKey] was not set';

        this.onClickKey(elemValue);

    }
}