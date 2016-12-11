import {BasicList} from "./BasicList";
import {Matrix2DElem} from "./Matrix2DElem";

class AbsMatrix2DLinkedList {

	public matrix:BasicList;
	public elem:Matrix2DElem;

	private prev_data:Matrix2DElem;
	private prev_row:Array<Matrix2DElem>;
	private rows:number;
	private cols:number;
	private row_list:BasicList;

	public constructor() {
		this.init();
	}

	/**
	 *
	 */
	public init() {
		this.prev_row = [];

		this.matrix = new BasicList();
		this.matrix.start = null;
		this.matrix.end = null;
	}

	/**
	 *
	 */
	public listing2DArrayMatrix(arr_matrix:Array<any>) {

		this.setDimensions(arr_matrix);

		for(let i = 0; i < this.rows; i++) {

			this.row_list = new BasicList();
			this.row_list.start = null;

			for(let j = 0; j < this.cols; j++) {
				this.addRowElement(arr_matrix[i][j]);
			}

			this.connectWithPreviousRow(this.row_list);

			this.row_list = null;
		}
	}

	/**
	 *
	 */
 	public traverse() {

 		var current:Matrix2DElem = this.matrix.start;
 		var verso:boolean = true; // true: top to bottom; false: bottom to top
 		var next:Matrix2DElem = current.b;

		while (current !== null) {

			console.log(current.elem);

 			next = (verso) ? current.b : current.t ;

			if (next) {
				current = next;
			}
			else {
 				current = current.r;
 				verso = !verso;
 			}
		}
 	}

	/**
	 *
	 */
	public makeElem():Matrix2DElem {
		var elem = new Matrix2DElem();
		return elem;
	}

	/**
	 *
	 */
	public addElem(elem:any) {

	}

	/**
	 *
	 */
	private setDimensions(arr_matrix:Array<any>) {
		this.rows = arr_matrix.length;
		this.cols = arr_matrix[0].length;
	}

	/**
	 *
	 */
	private createNewListElem(row:number, col:number):Matrix2DElem {
		var new_elem = this.makeElem();
		new_elem.l = this.prev_data;

		if (this.prev_row[col]) {
			new_elem.t = this.prev_row[col];
			this.prev_row[col].b = new_elem;
		}

		return new_elem;
	}

	/**
	 *
	 */
	private addRowElement(data:any) {
		if (this.row_list.start === null) {
			this.row_list.start = this.makeElem();
			this.row_list.end = this.row_list.start;
		}
		else {

			let new_elem = this.makeElem();

			new_elem.l = this.prev_data;
			this.row_list.end.r = new_elem;
			this.row_list.end = this.row_list.end.r;
		}

		this.row_list.end.elem = data;
		this.prev_data = this.row_list.end;
	}

	/**
	 *
	 */
	private connectWithPreviousRow(row:BasicList) {

		if (this.matrix.start === null) {
			this.matrix = row;
			return;
		}

		var matrix_elem = this.matrix.start;
		while (matrix_elem.b !== null) {
			matrix_elem = matrix_elem.b; 
		}
		
		var row_elem = row.start;
		while (row_elem !== null) {
			this.connectElement(matrix_elem, row_elem);
 			row_elem = row_elem.r; 
 			matrix_elem = matrix_elem.r; 
		}
	}

	/**
	 *
	 */
	private connectElement(matrix_elem:Matrix2DElem, row_elem:Matrix2DElem) {
		matrix_elem.b = row_elem;
		row_elem.t = matrix_elem;

		// inizio riga
		if (row_elem.l === null) {
			matrix_elem.br = row_elem.r;
			row_elem.tr = matrix_elem.r;
		}
		// inter riga
		else if ((row_elem.l !== null) && (row_elem.r !== null)) {
			matrix_elem.bl = row_elem.l;
			matrix_elem.br = row_elem.r;
			row_elem.tl = matrix_elem.l;
			row_elem.tr = matrix_elem.r;
		}
		// fine riga
		else if (row_elem.r === null) {
			matrix_elem.bl = row_elem.l;
			row_elem.bl = matrix_elem.l;
		}
	}

	/**
	 *
	 */
	private destroyArray(arr:Array<any>) {
		let l = arr.length;
		for (let i = l-1; i >= 0; i++) {
			arr.pop();
		}
		arr = [];
	}
}

export {AbsMatrix2DLinkedList};

var matrix:AbsMatrix2DLinkedList = new AbsMatrix2DLinkedList();

matrix.listing2DArrayMatrix([
	['a','b','c','d'],
	['f','g','h','i'],
	['l','m','n','o'],
	['p','q','r','s']
]);

matrix.traverse();


