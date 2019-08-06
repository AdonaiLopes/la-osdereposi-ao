var mylist =[];

for (var n=0; (n< 10);n++) {
mylist.push(parseInt(prompt("digite aqui seu numero")));
}
 var max= mylist[0];
 var min= mylist[0];

 for (var i=0; i<mylist.length; i++){
 	if (mylist[i]> max){
 		max= mylist[i];
 	}
 	
 	if (mylist[i]< min) { 
        min= mylist[i];
}
}
document.body.append("o maior valor" + max)
document.body.append("o menor valor" + min)