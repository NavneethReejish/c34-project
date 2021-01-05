class Sling
{
    constructor(pointB, bodyA)
    {
        var options ={
            pointB: pointB,
            bodyA: bodyA,
            length: 500
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.color = color(random(200,255),random(200,255),random(200,255));
        World.add(world,this.sling);
    }

    display(){
    
        var posA = this.sling.body.position;
        var posB = this.pointB;

        push();
        stroke(this.color);
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
    }
}

