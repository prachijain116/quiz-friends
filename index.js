var readline = require('readline-sync');
var chalk = require('chalk');
var name = readline.question("What is your name ? ");
console.log(chalk.blue("Hello "+ chalk.italic(name)));

console.log("Welcome to Prachi's quiz on " +chalk.magenta.underline("F.R.I.E.N.D.S"));
console.log("\n");
var score =0;

console.log(chalk.bold.red.underline("INSTRUCTIONS"));
console.log("1. There are 3 levels with 5 questions each.")
console.log("2. To clear each level you have to  correctly answer atleast 3 questions.");
console.log("3.To answer, type the option number");
console.log("\n")


function play(answer,question)
{
  ans = readline.question(question);
  if(answer.toUpperCase() == ans.toUpperCase())
  {
    console.log("Correct answer!!!");
    score++;
  }
  else
  {
    console.log("Wrong answer!!!");
  }
}

var highestscore = {
  name : "Prachi",
  score : 14
}
var level1 = [{
  question : chalk.magentaBright(`
  What is Monica skilled at?
  a. Bricklaying
  b. Cooking
  c. American football
  d. Singing \n`),
  answer : "b"
},
{
  question : chalk.magentaBright(`
  The series Friends is set in which city?
  a. Los Angeles
  b. New York City
  c. Miami
  d. Seattle \n`),
  answer : "b"
},
{
  question : chalk.magentaBright(`
  What pet did Ross own?
  a. A dog named Keith
  b. A rabbit called Lancelot
  c. A monkey named Marcel
  d. A lizard named Alistair \n`),
  answer : "c"
},
{
  question : chalk.magentaBright(`
  What song is Phoebe best known for?
  a. Smelly Cat  
  b. Smelly Dog
  c. Smelly Rabbit
  d. Smelly Worm \n`),
  answer : "a"
},
{
  question : chalk.magentaBright(`
  What does Joey never share?
  a. His books
  b. His information
  c. His food
  d. His DVDs \n`),
  answer : "c"
}
]


var level2 = [{
  question : chalk.magentaBright(`
  Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives?
  a. Ross Geller
  b. Pete Becker
  c. Eddie Menuek
  d. Joey Tribbiani \n`),
  answer : "d"
},
{
  question : chalk.magentaBright(`
  What is Janice most likely to say?
  a. Talk to the hand!
  b. Get me a coffee!
  c. Oh… my… God!
  d. No way! \n`),
  answer : "c"
},
{
  question : chalk.magentaBright(`
  What’s the name of the grumpy person who works at the coffee shop?
  a. Herman
  b. Gunther
  c. Frasier
  d. Eddie \n`),
  answer : "b"
},
{
  question : chalk.magentaBright(`
  What is the name of Phoebe’s alter-ego?
  a. Phoebe Neeby
  b. Monica Bing
  c. Regina Phalange
  d. Elaine Benes\n`),
  answer : "c"
},
{
  question : chalk.magentaBright(`
  What sort of uniform does Joey wear to Monica and Chandler’s wedding?
  a. Chef
  b. Soldier
  c. Fire fighter
  d. A baseball player \n`),
  answer : "b"
}
]


var level3 = [{
  question : chalk.magentaBright(`
  What are Ross and Monica’s parents called?
  a. Jack and Jill
  b. Philip and Holly
  c. Jack and Judy
  d. Margaret and Peter \n`),
  answer : "c"
},
{
  question : chalk.magentaBright(`
  Who was Chandler’s TV magazine always addressed to?
  a. Chanandler Bong
  b. Chanandler Bang
  c. Chanandler Bing
  d. Chanandler Beng \n`),
  answer : "a"
},
{
  question : chalk.magentaBright(`
  How many seasons did the series have?
  a. 8
  b. 9
  c. 10
  d. 11 \n`),
  answer : "c"
},
{
  question : chalk.magentaBright(`
  Monica dated one of her parents’ friends. What was his name?
  a. Gary Litman
  b. Sid Goralnik
  c. Rob Baily stock
  d. Richard \n`),
  answer : "d"
},
{
  question : chalk.magentaBright(`
  Who teaches Rachel and Phoebe about 'Unagi'?
  a. Ross
  b. Monica
  c. Chandler
  d. Joey \n`),
  answer : "a"
}
]


var userAnswer = readline.question("To continue please press y, to exit please press any other key..  ");
var acontinue = "y"
if(acontinue.toUpperCase() == userAnswer.toUpperCase())
{
console.log(chalk.red("Welcome to LEVEL 1"));
for(var i=0; i<level1.length; i++)
{
  play(level1[i].answer, level1[i].question);
}

if(score>=3)
{
  console.log("\n");
  console.log(chalk.bold("yay!!! You have cleared LEVEL1"));
  console.log("Your score is : "+ score)


var slevel1 = score;
console.log("\n");
console.log(chalk.red("Welcome to LEVEL2"))
for(var i=0; i<level2.length; i++)
{
  play(level2[i].answer, level2[i].question);
}

slevel1 = score - slevel1;
if(slevel1>=3)
{
  console.log("\n");
  console.log(chalk.bold("yay!!! You have cleared LEVEL2"));
  console.log("Your score is : "+ score)


var slevel2 = score;
console.log("\n");
console.log(chalk.red("Welcome to LEVEL3"))
for(var i=0; i<level3.length; i++)
{
  play(level3[i].answer, level3[i].question);
}

slevel2 = score - slevel2;
if(slevel2>=3)
{
  console.log("\n");
  console.log(chalk.bold("yay!!! You have cleared LEVEL3"));
  console.log(chalk.bold("Your total score is : "+ score));
  if(score > highestscore.score)
  {
    console.log("You beat score of " + highestscore.name );
  }
  console.log("Thanks for playing");
}
else
{
  console.log("You didn't clear LEVEL 3");
  console.log("Please try again later.");
  console.log("Thanks for playing.");
 
}
}
else
{
  console.log("You didn't clear LEVEL 2");
  console.log("Please try again later.");
  console.log("Thanks for playing.");
}
}
else
{
  console.log("You didn't clear LEVEL 1");
  console.log("Please try again later.");
  console.log("Thanks for playing.");
}

}
else
{
  console.log("Thank You for Visiting");
}