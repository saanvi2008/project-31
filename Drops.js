class drop{
    constructor(x,y,r){

        var options = {

            restitution:0.001,
            friction : 0.1,
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.rectangle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        fill("blue");
        ellipse(pos.x,pos.y,this.r,this.r);
    }
    update(){
        if(this.body.position.y < height){
            
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});

        }
    }
}