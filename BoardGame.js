var BoardGame = function (canvas) {
    var self =this;
    self.canvas = canvas;
    self.paddle = new Paddle(360,495,'red',1,80,5,self);
    self.ball = new Ball(400,485,10,'green',1,self);
    self.getX = function(){
        return self.paddle.getX();
    };
    self.getLength = function(){
        return self.paddle.getLength();
    };
    self.getCanvas = function () {
        return self.canvas;
    };
    self.render =function () {
        var txt = self.canvas.getContext('2d');
        txt.clearRect(0,0,self.canvas.width,self.canvas.height);
        self.ball.render();
        self.paddle.render();
    };
    self.action = function (evt) {
        switch (evt) {
            case 39:
                self.paddle.move();
                self.paddle.setDirection(1);
                break;
            case 37:
                self.paddle.move();
                self.paddle.setDirection(2);
                break;
        }
    };
    self.move = function () {
        setInterval(function () {
            self.ball.render();
            self.ball.move();
        },50);
    }
};