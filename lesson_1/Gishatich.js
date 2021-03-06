class GrassEater extends LivingCreature {
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 8;
    }
   getNewCoordinates() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
   }
   eat() {
    var food = random(this.chooseCell(2))
    if (food) {
        var newX = food[0]
        var newY = food[1]
        matrix[newY][newX] = 2;
        matrix[this.y][this.x] = 0

        for (var i in xotakerArr) {
            if (xotakerArr[i].x == newX && gishatichArr[i].y == newY) {
                xotakerArr.splice(i, 1)
            }
        }

        this.x = newX
        this.y = newY
        this.energy += 2
    }
    }
    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 8) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3;
            var xt = new Gishatich(newY, newX)
            gishatichArr.push(xt)
        }
    }

    move() {
        var empty = random(this.chooseCell(2))
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1)
                }
            }
        }
    }
}
