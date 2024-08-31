// for loop ->davtalt
for(var i=1; i<=10; i++){
	console.log("hello"+i);
}
// i=1 -> 1<=10 -> true -> hello1 -> 2
//	i=2 -> 2<=10 -> true -> hello2 -> 3
//	i=11 -> 11<=10 -> false -> stop
for(var i=10; i>=1; i--){
	console.log(i);
}
// 1-20 hurtleh tegsh toonuudiig hewlenuu
for(var i=1; i<=30; i++){
	if(i%2==2){
		console.log("tegsh:"+i);
	}
}
//1ees 30 hurtleh 3,5 d zereg huwaagddag toonuudiig hewlene uu
for(var i=1; i<=30; i++){
	if(i%3==0 && i%5==0){
		console.log(i);
	}
}
// garaas too oruulahad tor toonii hurdiig  hewleh cod bichne uu / jni - > 5 * 1 = 5 5 * 2 = 10 ...
var too=5;
for(var i=1; i<=10; i++){
	console.log(too+"X"+i+"="+too*i);
}
// 1 ees 10 hurtleh toonuudiin niilber bolon vrjweriig olno uu 
var niilber=0;
for(vari=1;i<=10;i++){
	niilber = niilber + i;
}
console.log(niilber);
var vrjver=0;
for(vari=1;i<=10;i++){
	vrjver = vrjver + i;
}
console.log(vrjver);
// random 1-10 hoorondoh toog taah 
// 3 udaa taana 
// zov taaval ylna
// ih too esvel baga too oruulahad hint ogno
// heddeh oroldlogond ylsan
// 3 udaa buruu taahad ylagdlaa gej gargah
 random = Math.floor(Math.random()*10)+1;
 console.log(random);
 for(var i=1;i<=3;i++){
	 var myNumber = +prompt("1+10 hutleh too taana uu");
	 if(random==myNumber){
		 alert("You win of"+i+" try");
		 break;
	 }else if(random>myNumber){
		 alert("Baga baina");
	 }else if(random<myNumber){
		  alert("ih baina");
	 }else{
		 alert("Wrong number");
	 }
	 if(i==3){
		 alert("You lose");
	 }
 }