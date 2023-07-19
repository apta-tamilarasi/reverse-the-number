var a=prompt("Enter the (maximum 10-digit) number");

document.write("Given number is "+ a+"<br>");
var b,c=0;
while(a>0){
	b=a%10;
	c=c*10+b;
	a=parseInt(a/10);
}

document.write("Reverse:"+" "+c);