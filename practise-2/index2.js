function getJoke(){
var  runagain = true;
runagain = confirm("want joke ?");
switch(runagain) {
  case true :
    const j = [
        "Old programmers never die;  they just lose some of their functions.",
        "A SQL statement walks into a bar and sees two tables.It approaches, and asks may I join you?",
        "Ram::How do you tell HTML from HTML5?- Jack::Try it out in Internet Explorer- Jack::Did it work?- Ram::No?- Jack::It's HTML5. ",
        "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
        "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
        "Algorithm: A word used by programmers when they don't want to explain how their code works.",
        "Judge: I sentence you to the maximum punishment...Me (thinking): Please be death, please be death...Judge: Learn Java! Me:Damn.",
        "There are 10 kinds of people. Those that understand binary and those that don't.",
        "Programming is like sex. One mistake and you have to support it for the rest of your life.",
        " What did Java code call a C code? You have no class.",
        "Why was the DBA divorced? Because the DBA has one to many relationships.",
        "Debugging is like being the detective in a crime movie where you're also the murderer.",
        "Why do programmers prefer dark mode? Because light attracts bugs!",, 
        "Why don't programmers like nature?  It has too many bugs.",
        "Why did the programmer bring a ladder to work? Because they heard the code had a lot of , high-level programming!",
    ];
    let index = Math.floor(Math.random() * j.length);
    joke.innerHTML = j[index];
    break;
case false :
alert("Thank you ")
break;
  }
}
