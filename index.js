// Your code here
class Polygon{
    constructor(arr){
        this.arr = arr;
    }
    
    get countSides(){
        return this.arr.length;
    }

    get perimeter(){
        return this.arr.reduce((sum, num) =>  sum + num);
    }
}

class Triangle extends Polygon{

    get isValid(){
        let side1 = this.arr[0]
        let side2 = this.arr[1]
        let side3 = this.arr[2]
        return (side1 + side2 > side3) && (side2+side3 > side1) && (side1 + side3 > side2)
    
        }
}

class Square extends Polygon{
    get isValid(){
        let side1 = this.arr[0]
        let side2 = this.arr[1]
        let side3 = this.arr[2]
        let side4 = this.arr[3]
        return side1 === side2 && side2 === side3 && side3 === side4
    }

    get area(){
        let side1 = this.arr[0]
        return side1 ** 2

       }
    }
