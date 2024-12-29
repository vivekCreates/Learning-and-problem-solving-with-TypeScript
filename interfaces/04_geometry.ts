interface GeometryShape{
    name:string;
    area:()=>number;
}

interface Circle extends GeometryShape{
    radius:number
}

const geometricObj:Circle = {
    name:"circle",
    radius:7,
    area:function(){
        return Math.PI *(this.radius*this.radius)
    }
}

console.log(geometricObj.area())