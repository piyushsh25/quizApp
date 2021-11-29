
var readlinesync= require("readline-sync");



var score1=0;
var userName=readlinesync.question("May I know your name please?\n");
console.log("Hey ",userName," this quiz is about how well you know about India.\n Let's get started");
var arrHigh=[
  {
    name:"Piyush",
    score:"10"
  },
  {
    name:"Mayal",
    score:"9"
  }
]
function play1(question1,answer1){
  var userAnswer1=readlinesync.question(question1);
  userAnswer1=userAnswer1.toLocaleUpperCase();
  if(userAnswer1 === answer1){
    console.log("Correct");
    score1++;
    console.log("Score: ",score1);    
  }else{
    console.log("Wrong");
    score1--;
    console.log("Score: ",score1);
  }
}

var ques1={
  question1: "India is a federal union comprising twenty-eight states and how many union territories?\nA. 6\nB. 7\nC. 8\nD. 9\n",
  answer1:"C"
}
var ques2={
  question1:" Which of the following is the capital of Arunachal Pradesh?\nA. Itanagar\nB. Dispur\nC. Imphal\nD. Panaji\n",
  answer1:"A"
}
var ques3={
  question1:" What are the major languages spoken in Andhra Pradesh?\nA. Odia and Telugu\nB. Telugu and Urdu\nC.Telugu and Kannada\nD. All of the above languages\n",
  answer1:"A"
}
var ques4={
  question1:"Which of the following states is not located in the North?\nA. Jharkhand\nB. Jammu and Kashmir\nC. Himachal Pradesh\nD. Haryana\n",
  answer1:"A"
}
var ques5={
  question1:"Which is the largest coffee-producing state of India?\nA. Kerala\nB. Tamil Nadu\nC. Karnataka\nD. Arunachal Pradesh\n",
  answer1:"C"
}
var arr1=[ques1,ques2,ques3,ques4,ques5];

for(i=0;i<arr1.length;i++){
  var cques= arr1[i];
  play1(cques.question1,cques.answer1);
}
console.log("The final score is: ",score1);
var score2=0;
if(score1>=4){
  console.log("--------------------------------\nCongratulations, you've reached level 2!");
  function play2(question2,answer2){
  var userAnswer2=readlinesync.question(question2);
  userAnswer2=userAnswer2.toLocaleUpperCase();
  if(userAnswer2 === answer2){
    console.log("Correct");
    score2++;
    console.log("Score: ",score2);    
  }else{
    console.log("Wrong");
    score1--;
    console.log("Score: ",score2);
  }
}

var ques6={
  question2: "India is a federal union comprising twenty-eight states and how any union territories?\nA. 6\nB. 7\nC. 8\nD. 9\n",
  answer2:"C"
}
var ques7={
  question2:" Which of the following is the capital of Arunachal Pradesh?\nA. Itanagar\nB. Dispur\nC. Imphal\nD. Panaji\n",
  answer2:"A"
}
var ques8={
  question2:" What are the major languages spoken in Andhra Pradesh?\nA. Odia and Telugu\nB. Telugu and Urdu\nC.Telugu and Kannada\nD. All of the above languages\n",
  answer2:"A"
}
var ques9={
  question2:"Which of the following states is not located in the North?\nA. Jharkhand\nB. Jammu and Kashmir\nC. Himachal Pradesh\nD. Haryana\n",
  answer2:"A"
}
var ques10={
  question2:"Which is the largest coffee-producing state of India?\nA. Kerala\nB. Tamil Nadu\nC. Karnataka\nD. Arunachal Pradesh\n",
  answer2:"C"
}
var arr2=[ques6,ques7,ques8,ques9,ques10];

for(i=0;i<arr2.length;i++){
  var cques= arr2[i];
  play2(cques.question2,cques.answer2);
}
console.log("The final score for level 2 is: ",score2);
"\n\n\n\n\n";
var total=score1+score2;
console.log("Your total score is "+total);
}else{
  console.log("Please try again to get into level 2")
}
"\n\n\n\\n\n"
console.log("Check out the high scores ",);
for(i=0;i<arrHigh.length;i++){
  var highScorers=arrHigh[i];

  console.log(highScorers.name,highScorers.score);
}


