function poemGenerator(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Roses are red, violets are blue..."],
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let poemFormEl = document.querySelector("#poem-generator-form");
poemFormEl.addEventListener("submit", poemGenerator);
