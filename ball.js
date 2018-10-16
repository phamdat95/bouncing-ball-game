var Ball = function (x, y, radius, color,direction, board) {
    var self = this;
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
        txt.clearRect(0,0,800,495);
        txt.beginPath();
        txt.fillStyle = self.color;
        txt.arc(self.x,self.y,self.radius,0,2*Math.PI);
        txt.fill();
    };
    self.move = function () {
        if (self.direction === 1) {
             self.x += 10;
             self.y -= 10;
             if (self.x >= 800 - self.radius)
                 self.direction = 2;
         }if (self.direction === 2){
             self.y -= 10;
             self.x -=10;
             if (self.y <= self.radius)
                 self.direction = 3;
         }if (self.direction === 3){
             self.x -= 10;
             self.y += 10;
             if (self.y >= (495 - self.radius)&& self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                 self.direction=4;
         }if (self.direction === 4){
             self.y -= 10;
             self.x -= 10;
             if (self.x <= self.radius)
                 self.direction = 5;
         }if (self.direction === 5){
            self.y -= 10;
            self.x += 10;
            if (self.y <= self.radius)
                self.direction = 6;
        }if (self.direction === 6){
            self.y += 10;
            self.x += 10;
            if (self.y >= 495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 7;
        }if (self.direction === 7){
            self.y -= 10;
            self.x += 10;
            if (self.x >=800- self.radius)
                self.direction = 8;
        }if (self.direction === 8){
            self.y -= 10;
            self.x -= 10;
            if (self.y <= self.radius)
                self.direction = 9;
        }if (self.direction === 9){
            self.y += 10;
            self.x -= 10;
            if (self.x <= self.radius)
                self.direction = 11;
        }if (self.direction === 11){
            self.y += 10;
            self.x += 10;
            if (self.y >= 495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 12;
        }if (self.direction === 12){
            self.y -= 10;
            self.x += 10;
            if (self.y <= self.radius)
                self.direction = 13;
        }if (self.direction === 13){
            self.y += 10;
            self.x += 10;
            if (self.x >= 800 - self.radius)
                self.direction = 14;
        }if (self.direction === 14){
            self.y += 10;
            self.x -= 10;
            if (self.y >= 495 - self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 15;
        }if (self.direction === 15){
            self.y -= 10;
            self.x -= 10;
            if (self.x <= self.radius)
                self.direction = 16;
        }if (self.direction === 16){
            self.y -= 10;
            self.x += 10;
            if (self.y <= self.radius)
                self.direction = 17;
        }if (self.direction === 17){
            self.y += 10;
            self.x += 10;
            if (self.y >= 495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 18;
        }if (self.direction === 18){
            self.y -= 10;
            self.x += 10;
            if (self.x >= 800- self.radius)
                self.direction = 19;
        }if (self.direction === 19){
            self.y -= 10;
            self.x -= 10;
            if (self.y <= self.radius)
                self.direction = 20;
        }if (self.direction === 20){
            self.y += 10;
            self.x -= 10;
            if (self.y >= 495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 21;
        }if (self.direction === 21){
            self.y -= 10;
            self.x -= 10;
            if (self.x <= self.radius)
                self.direction = 22;
        }if (self.direction === 22){
            self.y -= 10;
            self.x += 10;
            if (self.y <= self.radius)
                self.direction = 23;
        }if (self.direction === 23){
            self.y += 10;
            self.x += 10;
            if (self.x >= 800 - self.radius)
                self.direction = 24;
        }if (self.direction === 24){
            self.y += 10;
            self.x -= 10;
            if (self.y >= 495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 25;
        }if (self.direction === 25){
            self.y -= 10;
            self.x -= 10;
            if (self.y <= self.radius)
                self.direction = 26;
        }if (self.direction === 26){
            self.y += 10;
            self.x -= 10;
            if (self.x <= self.radius)
                self.direction = 27;
        }if (self.direction === 27){
            self.y += 10;
            self.x += 10;
            if (self.y >=495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 28;
        }if (self.direction === 28){
            self.y -= 10;
            self.x += 10;
            if (self.y <= self.radius)
                self.direction = 29;
        }if (self.direction === 29){
            self.y += 10;
            self.x += 10;
            if (self.x >= 800- self.radius)
                self.direction = 30;
        }if (self.direction === 30){
            self.y += 10;
            self.x -= 10;
            if (self.y >= 495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 31;
        }if (self.direction === 31){
            self.y -= 10;
            self.x -= 10;
            if (self.x <= self.radius)
                self.direction = 32;
        }if (self.direction === 32){
            self.y -= 10;
            self.x += 10;
            if (self.y <= self.radius)
                self.direction = 33;
        }if (self.direction === 33){
            self.y += 10;
            self.x += 10;
            if (self.y >= 495 - self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 34;
        }if (self.direction === 34){
            self.y -= 10;
            self.x += 10;
            if (self.x >=800- self.radius)
                self.direction = 35;
        }if (self.direction === 35){
            self.y -= 10;
            self.x -= 10;
            if (self.y <= self.radius)
                self.direction = 36;
        }if (self.direction === 36){
            self.y += 10;
            self.x -= 10;
            if (self.x <= self.radius)
                self.direction = 37;
        }if (self.direction === 37){
            self.y += 10;
            self.x += 10;
            if (self.y >=495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 38;
        }if (self.direction === 38){
            self.y -= 10;
            self.x += 10;
            if (self.y <= self.radius)
                self.direction = 39;
        }if (self.direction === 39){
            self.y += 10;
            self.x += 10;
            if (self.x >= 800- self.radius)
                self.direction = 40;
        }if (self.direction === 40){
            self.y += 10;
            self.x -= 10;
            if (self.y >=495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 41;
        }if (self.direction === 41){
            self.y -= 10;
            self.x -= 10;
            if (self.y <= self.radius)
                self.direction = 42;
        }if (self.direction === 42){
            self.y += 10;
            self.x -= 10;
            if (self.x <= self.radius)
                self.direction = 43;
        }if (self.direction === 43){
            self.y += 10;
            self.x += 10;
            if (self.y >= 495- self.radius && self.y <= 500 && self.x >= self.board.getX() && self.x <= self.board.getX() + self.board.getLength())
                self.direction = 1;
        }
        if (self.y >=510)
            alert('you lose, please press f5 to play again!');
    };
};