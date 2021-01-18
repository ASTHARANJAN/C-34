class pen
{
    constructor(x,y,w,h,angle){
        var option={
            density : 1,
            isStatic : false
        }
     this.body = Bodies.rectangle(x,y,w,h,option) 
     this.width = w
     this.height = h
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipse(0,0,this.w, this.h)
        pop();
        console.log(this.body)

        if (this.body.position.y > 850)
        {
          Matter.Body.setPosition(this.body,{x:100,y:850})
        }
    }
    
}