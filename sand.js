class sand{
    constructor(x,y,radius){

        var options={
            restitution:1.3,
            density:5,
            friction:1
          }

        this.body= Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius= radius/2



    }

    display()

    {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill ("blue")
        rectMode(CENTER)
        circle(0,0,this.radius)
        pop()
    }
}
