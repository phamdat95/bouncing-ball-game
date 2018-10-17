var Ball = function (x, y, radius, color,direction, board) {
    var self = this;
    self.dx = 10;
    self.dy = 10;
    self.x = x;
    self.y = y;
    self.radius = radius;
    self.color = color;
    self.direction = direction;
    self.board = board;
    self.setX = function (x) {
        self.x = x;
    };
    self.setY = function (y) {
        self.y = y;
    };
    self.getX = function () {
        return self.x;
    };
    self.getY = function () {
        return self.y;
    };
    self.render = function () {
        var txt = self.board.getCanvas().getContext('2d');
        txt.beginPath();
        txt.fillStyle = self.color;
        txt.arc(self.x,self.y,self.radius,0,2*Math.PI);
        txt.fill();
    };
    self.move = function () {
        if (self.x >= 800 - self.radius || self.x <= self.radius){
            self.dx = -self.dx;
        }
       if (self.y <= self.radius){
           self.dy = -self.dy;
       }
       if (self.y >= 495 - self.radius && self.x >= self.board.getX()&& self.x <= self.board.getX() + self.board.getLength()){
           self.dy = -self.dy;
       }
       if (self.y > 510){
           alert('you lose, please press f5 to play again!')
       }
       self.x += self.dx;
       self.y += self.dy;
    };
};