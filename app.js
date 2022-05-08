const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
let container = document.querySelector(".data-container");
let navigationButtons = document.querySelectorAll(".navigation-buttons");

navigationButtons.forEach((button) => {
  button.addEventListener("click", loadData);
});

document.addEventListener("DOMContentLoaded", () => {
  navigationButtons[0].click();
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

console.log(data[0].title);
