class iron{
    constructor(x,y,width,height){

        var options={
            restitution:0.3,
            density:3,
            friction:0.5
        }

        this.body= Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width
        this.height=height



    }

    display()

    {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill ("brown")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}
