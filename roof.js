class Roof{
    constructor(x,y){
        var options={
            'isStatic':true,
            'friction':0.4,
        }

    this.body=Bodies.rectangle(x,y,700,10,options);

    World.add(world,this.body);
}
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,700,10);
    }
}