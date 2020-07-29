class Paper {
    
    constructor(x,y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    
this.x=x,
this.y=y,
this.r=r
this.image = loadImage("paper.png1.png");
this.paperBody = Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.paperBody);
    }


display ()
{
    paperpos = this.body.position;

    push ()
    translate(paperpos.x,paperpos.y);
    rectmode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.r,this.r);
    pop ()
}






}
