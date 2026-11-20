let num=19
let fact=0
for(let i=0; i<=num; i++)
{
    if(num%i==0)
    {
        fact++;
    }
}
if(fact==2)
{
    console.log("The number is prime.");
}
else
{
    console.log("The number is not prime.");
}