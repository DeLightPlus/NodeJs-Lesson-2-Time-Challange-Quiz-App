const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const quizQuestions = [
  {
    question: 'Which of the following command will show version of Node?',
    options: ['(a). npm --version', '(b). node --version', '(c). npm getVersion', '(d). node getVersion'],
    answer: 'a',
    timeLimit: 20 // in seconds
  },
  {
    question: 'All APIs of Node.JS are.?',
    options: ['(a). Asynchronous', '(b). Synchronous', '(c). Both of the above', '(d). None of the above'],
    answer: 'a',
    timeLimit: 20 // in seconds
  },
  {
    question: 'Which of the following is not a valid HTTP method?',
    options: ['(a). GET', '(b). PUT', '(c). POST', '(d). HEADER'],
    answer: 'd',
    timeLimit: 20 // in seconds
  }
];

let currentQuestionIndex = 0;
let score = 0;
let quizTimeLimit = 60; // in seconds
let quizTimer;
let questionTimer;

function displayQuestion() 
{
  const currentQuestion = quizQuestions[currentQuestionIndex];
  console.log(`\nQ${currentQuestionIndex+1}. ${currentQuestion.question}`);
  console.log(currentQuestion.options.join('\n'));
  console.log(`You have ${currentQuestion.timeLimit} seconds to answer the question`);

  questionTimer = setInterval(() => 
    {
        currentQuestion.timeLimit--;
        // console.log(`Time remaining: ${currentQuestion.timeLimit} seconds`);
        if (currentQuestion.timeLimit === 0) 
        {
            clearInterval(questionTimer);
            console.log('Time\'s up!');
            displayNextQuestion();
        }
    }, 1000);
}

function displayNextQuestion() 
{
  console.log('----------------------------------------------');    
  clearInterval(questionTimer);
  currentQuestionIndex++;
  if (currentQuestionIndex >= quizQuestions.length) 
  {
      endQuiz();
  } 
  else { displayQuestion(); }
}

function endQuiz() 
{
  clearInterval(quizTimer);
  console.log(`\nQuiz over! Your final score is: ${score}/${quizQuestions.length}`);
  process.exit();
}

function handleUserInput(answer) 
{
  clearInterval(questionTimer);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (answer.toLowerCase() === currentQuestion.answer.toLowerCase()) 
  {
    score++;
    console.log('Correct!');
  } 
  else { console.log(`Incorrect. The correct answer was ${currentQuestion.answer}.`); }

  displayNextQuestion();
}

function startQuiz() 
{
  quizTimer = setInterval(() => 
    {
        quizTimeLimit--;
        // console.log(`Quiz time remaining: ${quizTimeLimit} seconds`);
        process.stdout.write(`\rTime Left Remain: ${quizTimeLimit}`)
        if (quizTimeLimit <= 0) 
        {
            clearInterval(quizTimer);
            console.log('\nQuiz time\'s up!');
            endQuiz();
        }
    }, 1000);

  displayQuestion();

  rl.setPrompt('Enter your answer: ');
  rl.prompt();
  rl.on('line', (answer) => {
    handleUserInput(answer);
    rl.prompt();
  });
}

startQuiz();