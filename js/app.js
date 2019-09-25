'use strict'

var answerKey = [
    true,
    true,
    true,
    false
];

function welcomeSequence(){
    var userName = prompt('What is your name?');
    alert('Welcome ' + userName + '!');
}; 

function startQuiz(){
    askA();
    askB();
    askC();
    askD();    
};
 


function askA(){
    var response = prompt('Is my name David?').toLowerCase();
    //console.log(response[0]);
    if (sanitizeReponse(response) === answerKey[0]) alert('Correct!') 
    else alert('Incorrect');
};

function askB(){
    var response = prompt('Did I go to school?').toLowerCase();
    if (sanitizeReponse(response) === answerKey[1]) alert('Correct!');
    else alert('Incorrect');
};

function askC(){
    var response = prompt('Do I want to finish code fellows?').toLowerCase();
    if (sanitizeReponse(response) === answerKey[2]) alert('Correct!'); 
    else alert('Incorrect');
};

function askD(){
    var response = prompt('Am I a sword swallower?').toLowerCase();
    if (sanitizeReponse(response) === answerKey[3]) alert('Correct!'); 
    else alert('Incorrect');
};



function sanitizeReponse(reponse){
    var dirty = reponse;       
    if(dirty[0] === 'y') return true;
    if(dirty[0] === 'n') return false;

    instructionPrompt();
    
};

function instructionPrompt(){
    alert('Answer questions with a Yes/No or Y/N');
    startQuiz();
}

function readBio(){
    welcomeSequence();
    instructionPrompt();
};






