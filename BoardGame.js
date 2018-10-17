var BoardGame = function (canvas) {
    var self =this;
    self.canvas = canvas;
    self.paddle = new Paddle(360,495,'red',1,80,5,self);
    self.ball = new Ball(400,485,10,'green',1,self);
    self.brick = [
        new Paddle(10,30,'blue',1,50,20,self),
        new Paddle(90,60,'blue',1,50,20,self),
        new Paddle(170,90,'blue',1,50,20,self),
        new Paddle(250,120,'blue',1,50,20,self),
        new Paddle(330,150,'blue',1,50,20,self),
        new Paddle(410,180,'blue',1,50,20,self),
        new Paddle(490,210,'blue',1,50,20,self),
        new Paddle(570,240,'blue',1,50,20,self),
        new Paddle(650,270,'blue',1,50,20,self),
    ];
    self.getX = function(){
        return self.paddle.getX();
    };
    self.getY = function(){
        return self.paddle.getY();
    };
    self.getLength = function(){
        return self.paddle.getLength();
    };
    self.getCanvas = function () {
        return self.canvas;
    };
    self.getBrick = function(){
        return self.brick;
    };
    self.render =function () {
        var txt = self.canvas.getContext('2d');
        txt.clearRect(0,0,self.canvas.width,self.canvas.height);
        self.ball.render();
        self.paddle.render();
        self.brick.forEach(function (brick) {
            brick.render();
        });
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
    self.removeBrick = function(brick){
        var index = -1;
        for(var i = 0; i < self.brick.length; i++){
            if(self.brick[i] === brick){
                index = i;
                break;
            }
        }
        if (index !== -1){
            self.brick.splice(index, 1);
        }
    };
    self.move = function () {
        setInterval(function () {
            self.ball.move();
            self.ball.checkCollision();
            self.render();
        },50);
    }
};