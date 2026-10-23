function makeid(l) {
  // write your code here
	var res=" ";
	var char_list="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

	for(int i=0 ;i<l;i++){
		res+=char_list.charAt(
			math.floor(
				mat.random()*char_list.length
			)
		)
}
}   

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
