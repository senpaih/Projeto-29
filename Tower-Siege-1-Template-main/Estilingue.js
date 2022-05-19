class estilingue {
constructor(A,B){

var opçoes={bodyA:A, pointB:B, stiffness:0.05, length:1}
this.tiro = Constraint.create(opçoes) 
this.ponto = B

World.add(world,this.tiro)

}
display(){
if (this.tiro.bodyA){
var PA = this.tiro.bodyA.position
var PB = this.ponto
fill('red')
line(PA.x,PA.y, PB.x,PB.y)
}

}
atirar(){
this.tiro.bodyA=null



}

}
