import {Matrix2DElem} from "./Matrix2DElem";

class BasicList {
	
	public start:Matrix2DElem;
	public end:Matrix2DElem;

	public constructor() {
		this.start = new Matrix2DElem();
		this.end = new Matrix2DElem();
	}

} export {BasicList}