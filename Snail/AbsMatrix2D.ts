import {IMatrix} from "./IMatrix";
import {AbsMatrix2DLinkedList} from "./AbsMatrix2DLinkedList";

abstract class AbsMatrix2D extends AbsMatrix2DLinkedList implements IMatrix {

	////// IMatrix Interface PROPS /* START */

	public element:any;

	public row:number;
	public col:number;

	////// IMatrix Interface FINISH /* START */

	////// IMatrix Interface METHODS /* START */

	public getElem(i:number, j:number):any {
	 	//return this.matrix[i][j];
	}

	public addElem(elem:any) {
		//var row:Array<any> = this.matrix[this.rows-1];
		//row.push(elem);
	}

	public replaceElem(i:number, j:number, elem:any) {
		//this.matrix[i][j] = elem;
	}

	public insertElem(i:number, j:number, elem:any) {

	}

	public deleteElem(i:number, j:number) {

	}

	public getRow(i:number):Array<any> {
		//return this.matrix[i];
	}

	public addRow(row:Array<any>) {

	}

	public replaceRow(i:number, row:Array<any>) {

	}

	public insertRow(i:number, row:Array<any>) {

	}

	public deleteRow(i:number) {

	}

	public getCol(j:number):Array<any> {

		//var arr:Array<any>;
        //
        //for (var i = row; i >= 0; i--) {
			//var row = this.matrix[i];
			//arr.push(row[j]);
		//}
		//return arr;
	}

	public addCol(col:Array<any>) {

	}

	public replaceCol(j:number, col:Array<any>) {

	}

	public insertCol(j:number, col:Array<any>) {

	}

	public deleteCol(j:number) {

	}

	////// IMatrix Interface METHODS /* FINISH */

} export {AbsMatrix2D}