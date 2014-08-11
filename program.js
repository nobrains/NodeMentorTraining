var input = process.argv,
	i,sum = 0;
for(i = 2; i<input.length; i++)
{
	sum += Number(input[i]);
	// print(input[i]);
}
print(sum);
function print(txt){
	console.log(txt);
}