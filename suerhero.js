class Superhero{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.body = bodies.rectangle(x,y,width,height,options);
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y)
        pop();  
    }
}