var brid
class bird{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        rectMode(CENTER)
        this.brid = B.rectangle(x,y,w,h,{isStatic:true})
        W.add(world,this.brid)
    }
    lucas(){
        push()
        rect(this.x,this.y,this.w,this.h)
        pop()
    }
}