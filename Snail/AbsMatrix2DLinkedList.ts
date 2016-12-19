import {BasicList} from "./BasicList";
import {Matrix2DElem} from "./Matrix2DElem";

class AbsMatrix2DLinkedList {

	public matrix:BasicList;
	public rows:number;
	public cols:number;

	private prev_data:Matrix2DElem;
	private row_list:BasicList;
	private row_list_lookup_table:any;
	private col_list_lookup_table:any;
	private elem_list_lookup_table:any;
	private arr_matrix:Array<any>;
	private reference_table:any;

	/**
	 *
	 * @param arr_matrix
     */
	public constructor(arr_matrix:Array<any>) {
		this.arr_matrix = arr_matrix;
	}

	/**
	 *
	 */
	public init() {
		this.matrix = new BasicList();
		this.matrix.start = null;
		this.matrix.end = null;
		this.reference_table = {};

		this.setDimensions(this.arr_matrix);
		this.listing2DArrayMatrix(this.arr_matrix);
		this.setLookupTableElems();
	}

	/**
	 * Converte una matrice formata da array in una struttura linkata 2d
	 *
	 * @param arr_matrix
     */
	public listing2DArrayMatrix(arr_matrix:Array<any>) {

		for (let i = 0; i < this.rows; i++) {

			this.row_list = new BasicList();
			this.row_list.start = null;

			for (let j = 0; j < this.cols; j++) {
				this.addRowElement(arr_matrix[i][j]);
			}

			this.addLookupTableRowElem(i, this.row_list);
			this.connectWithPreviousRow(this.row_list);

			this.row_list = null;
		}
	}

	/**
	 *
	 */
 	public traverse():Array<Matrix2DElem> {

		var elem_arr:Array<Matrix2DElem> = [];
 		var current:Matrix2DElem = this.matrix.start;
 		var verso:boolean = true; // true: top to bottom; false: bottom to top
 		var next:Matrix2DElem = current.b;

		while (current !== null) {

			elem_arr.push(current.elem);

 			next = (verso) ? current.b : current.t ;

			if (next) {
				current = next;
			}
			else {
 				current = current.r;
 				verso = !verso;
 			}
		}

		return elem_arr;
 	}

	/**
	 *
	 * @returns {Matrix2DElem}
     */
	public makeElem():Matrix2DElem {
		return new Matrix2DElem();
	}

	/**
	 *
	 * @param arr_matrix
     */
	private setDimensions(arr_matrix:Array<any>) {
		this.rows = arr_matrix.length;
		this.cols = arr_matrix[0].length;
	}

	/**
	 *
	 * @param data
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
	 * @param row
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
	 * @param row
	 * @param row_list
     */
	private addLookupTableRowElem(row:number, row_list:BasicList) {
		this.row_list_lookup_table['R_' + row + '_0'] = row_list.start;

		// Ovviamente non serve ripeterlo per ogni riga, basta la prima
		if (row === 0) {

			var col:number = 0;;
			var row_elem:Matrix2DElem = row_list.start;

			while (row_elem !== null) {
				this.addLookupTableColElem(col, row_elem);
				row_elem = row_elem.r;
				col++;
			}
		}
	}

	/**
	 *
	 * @param col
	 * @param col_start
     */
	private addLookupTableColElem(col:number, col_start:Matrix2DElem) {
		this.col_list_lookup_table['C_' + col + '_0'] = col_start;
	}

	/**
	 *
	 */
	private setLookupTableElems() {
		for (let row = 0; row < this.rows; row++) {

			var row_elem:Matrix2DElem = this.row_list_lookup_table['R_' + row + '_0'].start;
			var col:number = 0;

			while (row_elem !== null) {
				this.elem_list_lookup_table['C_' + col + '_0 R_' + row + '_0'] = row_elem;
				row_elem = row_elem.r;
				col++;
			}
		}
	}

	/**
	 *
	 */
	private normalize() {

	}

	/**
	 *
	 * @param matrix_elem
	 * @param row_elem
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
	 * @param arr
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

//var matrix:AbsMatrix2DLinkedList = new AbsMatrix2DLinkedList([
//	['a','b','c','d'],
//	['f','g','h','i'],
//	['l','m','n','o'],
//	['p','q','r','s']
//]);
//
//matrix.init();
//
//matrix.traverse();


