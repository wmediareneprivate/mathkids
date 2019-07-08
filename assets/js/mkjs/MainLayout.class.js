class MainLayout
{

    constructor(){
        
        this.rootFrame = null;
        this.mainFrame = null;
        this.mainNavBox = null;
        this.infoBox = null;
        this.gameBox = null;

        this.gameAddTo20Btn = null;
        this.gameAddTo100Btn = null;
        this.gameDiffTo20Btn = null;
        this.gameDiffTo100Btn = null;
        this.gameMulipBtn = null;
        this.gameDivideBtn = null;
        this.gameSquarBtn = null;

        this.init();
    }

    init(){
        this.rootFrame = $('<div id="rootframe" class="rootframe">');
        this.mainFrame = $('<div id="mainframe" class="mainframe">');
        this.mainNavBox = $('<div id="main_nav_box" class="main_nav_box"></div>');
        this.infoBox = $('<div id="info_box" class="info_box"></div>');
        this.gameBox = $('<div id="game_box" class="game_box"></div>');

        this.gameAddTo20Btn = $('<div id="game_add_to_20_btn" class="game_start_btn">+ 20</div>');
        this.gameAddTo100Btn = $('<div id="game_add_to_100_btn" class="game_start_btn">+ 100</div>');
        this.gameDiffTo20Btn = $('<div id="game_diff_to_20_btn" class="game_start_btn">- 20</div>');
        this.gameDiffTo100Btn = $('<div id="game_diff_to_100_btn" class="game_start_btn">- 100</div>');
        this.gameMulipBtn = $('<div id="game_multip_btn" class="game_start_btn">1 x 1</div>');
        this.gameDivideBtn = $('<div id="game_divide_btn" class="game_start_btn">1 / 1</div>');
        this.gameSquarBtn = $('<div id="game_squar_btn" class="game_start_btn">Quadrat</div>');

        this.setLayout();
    }

    setLayout(){

        this.rootFrame.append(this.mainFrame);
        this.mainFrame.append(this.mainNavBox);
        this.mainFrame.append(this.infoBox);
        this.mainFrame.append(this.gameBox);


        this.mainNavBox.append(this.gameAddTo20Btn);
        this.mainNavBox.append(this.gameAddTo100Btn);
        this.mainNavBox.append(this.gameDiffTo20Btn);
        this.mainNavBox.append(this.gameDiffTo100Btn);
        this.mainNavBox.append(this.gameMulipBtn);
        this.mainNavBox.append(this.gameDivideBtn);
        this.mainNavBox.append(this.gameSquarBtn);


        $('body').append(this.rootFrame);
    }

}