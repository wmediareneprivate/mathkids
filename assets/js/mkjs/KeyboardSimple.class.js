class KeyboardSimple extends KeyboardSuper
{
    constructor(){
        super();
    }


    extendLayout(){

        var key0 = $('<div class="keyboard_key">0</div>');
        var key1 = $('<div class="keyboard_key">1</div>');
        var key2 = $('<div class="keyboard_key">2</div>');
        var key3 = $('<div class="keyboard_key">3</div>');
        var key4 = $('<div class="keyboard_key">4</div>');
        var key5 = $('<div class="keyboard_key">5</div>');
        var key6 = $('<div class="keyboard_key">6</div>');
        var key7 = $('<div class="keyboard_key">7</div>');
        var key8 = $('<div class="keyboard_key">8</div>');
        var key9 = $('<div class="keyboard_key">9</div>');

        this.layout.append(key1);
        this.layout.append(key2);
        this.layout.append(key3);
        this.layout.append(key4);
        this.layout.append(key5);
        this.layout.append(key6);
        this.layout.append(key7);
        this.layout.append(key8);
        this.layout.append(key9);
        this.layout.append(key0);

    }

}