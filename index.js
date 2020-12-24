var readlineSync = require('readline-sync');

var name=readlineSync.question("HI! What's your name? ");
console.log("welcome "+name);

var date=readlineSync.question("Enter your birthdate in dd/mm format");

function checkDate(date){
   var parts=date.split('/');
  var day=parseInt(parts[0],10);
  var month=parseInt(parts[1],10);
  
   if(month === 0 || month > 12)
        return false;
  
  var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    return day > 0 && day <= monthLength[month - 1];
  
}

function checkPrime(date){
  var i=2;
  var count=0;
  while(i*i<=date){
    if(date%i==0){
      count++;
    }
    i++;
  }
  if(count>0){
    console.log("The date is not prime!");
  }
  else{
    console.log("The date is Prime! \n Feel free to share this with your friend over social media")
  }
}

function checkDatePrime(date){
  var valid=checkDate(date);
  var newDate=parseInt(date.split('/')[0]+date.split('/')[1]);
  if(valid){
    checkPrime(newDate);
  }
  else{
    console.log("Please enter a valid format (dd/mm)")
  }
}

checkDatePrime(date);