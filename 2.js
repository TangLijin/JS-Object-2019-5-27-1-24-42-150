var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
// write your code here...
var sum =0;
for(let key in fruit){
	sum += fruit[key];
}
console.log(sum);
