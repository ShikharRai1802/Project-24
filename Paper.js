class Paper{
    constructor(x,y,r){
    var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    
    this.radius = r;
    
    }
    display(){
    //push(); 
    
    //translate(this.body.position.x,this.body.position.y);
    //rotate(this.body.angle);
    
    ellipseMode(RADIUS);
    fill("white");
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    
    //pop();
    }
    }