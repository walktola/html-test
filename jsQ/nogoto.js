//main function

var q=new Array(8);
for(var i=0;i<q.length;i++)q[i]=0;

var c=0;
var notEnd=true;
var from_backtrack=false;
while(notEnd){ 
var out="";
		while(c<8){ 
			if(!from_backtrack) {
				c++;
				if(c==8) break;
				q[c]=-1;
			}
			from_backtrack=false; 
			while(q[c]<8){ 
				q[c]++;
				if(q[c]==8){
					backtrack();
					from_backtrack=true;
				}
				else{
					for (var i=0;i<c;i++){
						if(ok(c)) {break;} 
					} 
				}
			 if(ok(c)) {break;}
			} 
		} 

for(var i=0;i<q.length;i++)out+=q[i];
out+="<br>";
backtrack();
from_backtrack=true;
document.body.insertAdjacentHTML( 'afterbegin', out );
}
function ok(col){ 
 for(int i=0; i<col; i++)if(q[col]==q[i] || (col-i)==Math.abs(q[col]-q[i])) return false; 
 
 return true; 
}; 
function backtrack(){ 
 c--; 
 if(c==-1) 
 { notEnd=false;} 
return;
}; 

//////////////////////////////////////

