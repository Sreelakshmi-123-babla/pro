class Snow {
    constructor(x, y,width,height) {
        var options = {
            restitution: 1,
            friction: 0,
            
        }
        
        this.body = Bodies.rectangle(x, y, this.x,this.y, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display() {

        var pos = this.body.position;
        

        push();
        translate(pos.x, pos.y);
        
        
        noStroke();
        fill("white");
        rectMode(CENTRE);
        rectangle(0,0,this.x,this.y);
        pop();
    }

};