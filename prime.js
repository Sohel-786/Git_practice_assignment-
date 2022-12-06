function prime(num){
	let count = 0;
	for(let i = 1; i<=num;i++){
		if(num%i==0){
				count++;
			}
		}
	if(count==1){
		return true;
		}
	else {
		return false;
		}
	}
let num = 13;
result = prime(num);
console.log(result);