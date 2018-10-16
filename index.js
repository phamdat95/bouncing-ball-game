var canvas = document.getElementById('myCanvas');
var boardGame = new BoardGame(canvas);
boardGame.render();
boardGame.move();
var onKeyCode = function (evt) {
    boardGame.action(evt.which);
};

