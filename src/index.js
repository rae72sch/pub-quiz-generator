function generateQuiz(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let context = "You are a quiz expert and love to come up with quiz questions and answers. Please return three questions and anwers on the topic provided in the user instructions. Please return all of this in basic HTML without a heading";
  let prompt = `User instructions: Generate questions and answers on the topic of ${userInput.value}`;

  let apiKey = "33840b8e1tc5oa820f7a06b487319f0d";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quizElement = document.querySelector("#questions");
  let timer = `<span class="generating-timer">⏳</span> <span class="generating-text">Generating quiz questions about ${userInput.value}...</span><br />`;

  new Typewriter("#questions", {
    strings: timer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });

  axios.get(apiUrl).then(displayQuiz);
}

function displayQuiz(response) {
  new Typewriter("#questions", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10
  });
}

let quizFormElement = document.querySelector("#quiz-form");
quizFormElement.addEventListener("submit", generateQuiz);