console.log("I'm alive!");
const synth = window.speechSynthesis;

const speak = text => {
  if (synth.speaking) {
    console.error('speechSynthesis.speaking');
    return;
  }
  let utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis);
};

const puns = [
  "You're really pushing my buttons here",
  "Wait till I push back",
  "Pull",
  "Boom",
]


document.querySelector('#button').onclick = () => {
  const punny = Math.floor(Math.random() * puns.length);
  speak(puns[punny]);
};
