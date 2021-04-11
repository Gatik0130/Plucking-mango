class Slingshot{
    constructor(body1,pointB){
   
   var options={
       bodyA:body1,
       pointB:pointB,
       stifness:0.004,
       length:1
       
   }
   this.pointB=pointB
   this.rope=Constraint.create(options)
   World.add(world,this.rope)
    }
    display()
    {
        if (this.rope.bodyA)  {
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        

        strokeWeight(2);
       

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
    fly(){
        this.rope.bodyA=null
    }
    attach(body){
        this.rope.bodyA=body
    }
}