function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function poemGenerator(event) {
  event.preventDefault();
  let instructions = document.querySelector("#user-instruction");
  let apiKey = "73c0at20fo892f9e52b6b3bf1ca0b4f2";
  let context =
    "only write four lines and separate each line with a <br />, at the bottom sign written by Ask Athena inside a <strong> element";
  let prompt = `create a random poem about ${instructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poem = document.querySelector("#poem");
  poem.innerHTML = `Generating poem about ${instructions.value}...`;
  axios.get(apiUrl).then(showPoem);
}

let poemFormEl = document.querySelector("#poem-generator-form");
poemFormEl.addEventListener("submit", poemGenerator);
