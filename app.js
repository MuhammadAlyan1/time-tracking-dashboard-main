const data = [];

const myData = async () => {
  let response = await fetch("./data.json");
  response = await response.json();
  data.push(...response);
  console.log(data);
};

myData();

let container = document.querySelector(".data-container");
let navigationButtons = document.querySelectorAll(".navigation-buttons");

navigationButtons.forEach((button) => {
  button.addEventListener("click", loadData);
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => navigationButtons[0].click(), 100);
});

function loadData(event) {
  navigationButtons.forEach((button) => {
    button.classList.remove("active");
    event.target.classList.add("active");
  });

  container.innerHTML = "";
  let time = "yesterday";
  if (event.target.id === "daily") {
    time = "yesterday";
  } else if (event.target.id === "weekly") {
    time = "week";
  } else if (event.target.id === "monthly") {
    time = "month";
  }

  data.forEach((element) => {
    console.log(event.target.id);
    container.innerHTML += `
        <section class="work">
        <div  id="${
          element.title.toLowerCase().split(" ")[0]
        }" class="outer-div">
          <div class="inner-div">
            <div class="title-image">
              <p>${element.title}</p>
              <img src="./images/icon-ellipsis.svg" />
            </div>
            <div class="timeframe">
              <p class="current">${
                element["timeframes"][event.target.id]["current"]
              }hrs</p>
              <p class="previous">Last ${time} - ${
      element["timeframes"][event.target.id]["previous"]
    }hrs</p>
            </div>
          </div>
        </div>
</section>
        `;
  });
}
