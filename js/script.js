"use strict";

const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = input.value;
  getNews(value);
});

async function getNews(type) {
  let response = await fetch(
    `https://newsapi.org/v2/everything?q=${type}&from=2021-09-05&sortBy=publishedAt&apiKey=5fb9458d850546a2965f959661ec87ef`
  );
  let finalResult = await response.json();
  console.log(finalResult);
  displayNews(finalResult.articles);
}

function displayNews(myArticles) {
  let container = "";

  for (let i = 0; i < myArticles.length; i++) {
    container += `
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card" >
      <img src="${myArticles[i].urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${myArticles[i].title}</h5>
        <p class="card-text">
          ${myArticles[i].description}
        </p>
      </div>
    </div>
  </div>`;
  }

  document.querySelector(".row").innerHTML = container;
}
