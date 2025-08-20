export class Knight{
    constructor(){
        this.initialPosition = [0,0];
        this.targetPosition = [7,7];
    }

    setTargetPosition(target){
        this.targetPosition = target 
    }

    getTargetPostition(target){
        return this.targetPosition;
    }
}