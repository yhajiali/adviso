const adviceId = document.querySelector(".advice__id");
const adviceQuote = document.querySelector(".advice__quote");
const adviceDice = document.querySelector(".advice__dice");

const getRandomAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const json = await response.json();
  const adviceData = json.slip;

  adviceId.innerHTML = `Advice #${adviceData.id}`;
  adviceQuote.innerHTML = `<i class="bx bxs-quote-left"/><span>${adviceData.advice}</span><i class="bx bxs-quote-right"/>`;
  console.log(adviceData);
};

getRandomAdvice();

adviceDice.addEventListener("click", getRandomAdvice);
