export default  class Circle{
    constructor(radius,x,y){
        this.radius=radius;
        this.x=x;
        this.y=y;
    }
    getradius(){
        return this.radius;
    }
    setradius(r){
        this.radius=r;
    }
    area(){
        return (3.14*this.radius*this.radiu8s);
    }
    show1(){
        return this.radius+"<br>"+this.radius+"\n"+"x is "+ this.x +"\n"+"y is "+this.y+"\n";

    }
};
