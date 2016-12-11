class Matrix2DElem {

	public elem:any;

	public t:any; //top
	public tr:any; //top-right
	
	public r:any; //right
	public br:any; //bottom-right

	public b:any; //bottom
	public bl:any; //bottom-left

	public l:any; //left
	public tl:any; //top-left

	public constructor() {
		this.elem = null;

		this.t = null;
		this.tr = null;

		this.r = null;
		this.br = null;

		this.b = null;
		this.bl = null;

		this.l = null;
		this.tl = null;
	}

} export {Matrix2DElem}