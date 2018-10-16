var Paddle = function (x,y,color,direction,length,width,board) {
    var self =this;
    self.x = x;
    self.y = y;
    self.color = color;
    self.direction = direction;
    self.board = board;
    self.length = length;
    self.width = width;
    self.render = function () {
        var txt = self.board.getCanvas().getContext('2d');
        txt.fillStyle = self.color;
        txt.fillRect(self.x,self.y,self.length,self.width);
    };
    self.moveRight = function () {
        if (self.x < 800 - self.length)
            self.x += 10;
    };
    self.moveLeft = function () {
        if (self.x > 0)
            self.x -= 10;
    };
    self.setDirection = function (direction) {
        self.direction = direction;
    };
    self.move = function () {
        switch (self.direction) {
            case 1:
                self.moveRight();
                break;
            case 2:
                self.moveLeft();
                break;
        }
        self.board.render();
    };

    self.getX = function () {
        return self.x;
    };
    self.getLength = function () {
        return self.length;
    };

    self.getY = function () {
        return self.y;
    };
};