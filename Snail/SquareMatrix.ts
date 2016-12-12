import {AbsMatrix2D} from "./AbsMatrix2D";

class SquareMatrix extends AbsMatrix2D {

    public constructor(arr_matrix:Array<any>) {
        super(arr_matrix);
    }

} export {SquareMatrix}

var matrix:SquareMatrix = new SquareMatrix([
	['a','b','c','d'],
	['f','g','h','i'],
	['l','m','n','o'],
	['p','q','r','s']
]);

matrix.init();

matrix.traverse();