

var a=0,b=1,c;
for(var i=0;i<=20;i++){
	if(i==0){
		console.log(0);
	}else if(i==1){
		console.log(1) ;
	}else{
		var c=a+b;
		console.log(c);
		a=b;
		b=c;
	}
}
