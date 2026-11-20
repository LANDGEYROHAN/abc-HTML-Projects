let year=2070
if(year%100==0)
    if(year%400==0)
        console.log("The year is a leap year.")

    else
{
    console.log("The year is not a leap year.")
}

else if(year%4==0)
{
    console.log("The year is a leap year.")
}
else
{
    console.log("The year is not a leap year.")
}