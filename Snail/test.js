function List(){

	this.start=null; 
	this.end=null;

	List.makeNode=function(){ 
	 	return {data:null,next:null};
	};

	this.add=function (data){
		if(this.start===null){ 
			this.start=List.makeNode(); 
			this.end=this.start;
		}
		else{ 
  			this.end.next=List.makeNode(); 
  			this.end=this.end.next; 
 		};
 		this.end.data=data; 
 	};

 	this.traverse=function () {
 		var current = this.start;
		while (current !== null) {
 			console.log(current.data, (current.next) ? current.next.data : "fine");
 			current = current.next; 
		}
 	};
}

var list=new List(); 
for(var i=1;i<=10;i++){ 
 	list.add(i);
};

list.traverse();