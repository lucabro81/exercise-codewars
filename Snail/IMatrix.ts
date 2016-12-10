interface IMatrix {

	matrix:Array<any>;

	element:any;

	row:number;
	col:number;

	rows:number;
	cols:number;

	getElem(i:number, j:number):any;
	addElem(elem:any);
	replaceElem(i:number, j:number, elem:any);
	insertElem(i:number, j:number, elem:any);
	deleteElem(i:number, j:number);

	getRow(i:number):Array<any>;
	addRow(row:Array<any>);
	replaceRow(i:number, row:Array<any>);
	insertRow(i:number, row:Array<any>);
	deleteRow(i:number);

	getCol(j:number):Array<any>;
	addCol(col:Array<any>);
	replaceCol(j:number, col:Array<any>);
	insertCol(j:number, col:Array<any>);
	deleteCol(j:number);

} export {IMatrix}