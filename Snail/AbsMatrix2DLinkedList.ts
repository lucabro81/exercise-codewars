import {IMatrix2DElem} from "./IMatrix2DElem";

interface BasicList {
	start:IMatrix2DElem;
	end:IMatrix2DElem;
}

abstract class AbsMatrix2DLinkedList {

	public matrix:BasicList;
	public elem:IMatrix2DElem;

	public listing2DArrayMatrix(arr_matrix:Array<any>) {

		for(let i = 0; i < arr_matrix[i].length; i++) {
			let col:Array<any> = arr_matrix[i];
			for(let j = 0; i < col.length; j++) {

				let elem:any = arr_matrix[i][j];

				if (this.matrix.start === null) {
					this.matrix.start = this.makeElem();
					this.matrix.end = this.matrix.start;
				}
				else {
					// Se siamo al primo elemento della matrice...
					if ((i === 0) && (j === 0)) {
						this.matrix.end.r = this.makeElem();
					}
					// ... altrimenti se si è nella prima riga...
					else if ((i === 0) && (j > 0)) {
						
					}
					// ... tutti gli altri elementi
					else {

					}
					
					this.matrix.end = this.matrix.end.r;
				}
		
				this.matrix.end.elem = elem;
			}
		}
	}

	public makeElem():IMatrix2DElem {

		var elem_to_make:IMatrix2DElem;

		elem_to_make.elem = null;

		elem_to_make.t = null; //top
		elem_to_make.tr = null; //top-right
	
		elem_to_make.r = null; //right
		elem_to_make.br = null; //bottom-right

		elem_to_make.b = null; //bottom
		elem_to_make.bl = null; //bottom-left

		elem_to_make.l = null; //left
		elem_to_make.tl = null; //top-left

		return elem_to_make; 
	}

	public addElem(elem:any) {

	}
}