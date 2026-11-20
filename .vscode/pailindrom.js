let num= 123
let temp =num
let rev=0
while(num!=0)
    {
        let rem = num%10
        rev = rev*10 + rem
        num = parseInt(num/10)
    }
    if (temp==rev)
    {
        console.log("pallindrome")
    }
    else{
        console.log("not a palindrome") 

    }
