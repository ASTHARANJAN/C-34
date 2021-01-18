class rope
{
    constructor(a,b){
        var constraint_option = {
            bodyA:a,
            pointB:b,
            stiffness:0.06,
            length:45
          }
          this.b = b
          this.chain = Constraint.create(constraint_option)
          World.add(world,this.chain)
    }
    display(){
        if (this.chain.bodyA != null)
        {
            var pointA = this.chain.bodyA.position
            var pointB = this.chain.pointB
        stroke("white")
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y) 
        }
    }
    fly(){
        this.chain.bodyA = null
    }
    attach(a){
        this.chain.bodyA = a
    }

    
}