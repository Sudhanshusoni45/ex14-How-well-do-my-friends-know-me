var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hello my friend, what is your name? ')

var score = 0;

console.log("Welcome " + userName + " here's a quiz about me,\nlet us see how well do you know me, answer right and earn points\n");

console.log('Here are your questions :')

var questionOne = {
  question : 'where do i live? ',
  answer : 'rajnandgaon'
}

var questionTwo = {
  question : 'How young am i? ',
  answer : '23'
}

var questionThree = {
  question : "who is my fav superhero ",
  answer : 'batman'
}

var arr = [questionOne,questionTwo,questionThree]



function play(question,answer)
{ 
  var userAns = readlineSync.question('\n'+ question)
  
  if(userAns===answer){
    console.log('you are right')
    score++;
  }
  else{
    console.log('you are wrong')
    score--;
  }
  console.log('your score is '+ score)
}

for(i=0;i<arr.length;i++)
{
  play(arr[i].question,arr[i].answer)
}