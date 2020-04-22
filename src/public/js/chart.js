let ctx = document.getElementById("myChart");

let doneData = [];
let idealData = [];

let idealInput = document.getElementById("idealPointInput");
let doneInput = document.getElementById("donePointInput");

let submitIdealButton = document.getElementById("submitIdealButton");
let submitDoneButton = document.getElementById("submitDoneButton");

let idealErrorMessagge = document.getElementById("IdealMessageError");
let doneErrorMessagge = document.getElementById("DoneMessageError");

window.onload = function () {
  readData = (path, callback) => {
    let request = new this.XMLHttpRequest();
    request.onreadystatechange = () => {
      let data = request.responseText;
      callback(data);
    };
    request.open("GET", path);
    request.send();
  };

  let callback = (rawData) => {
    let data = this.JSON.parse(rawData);
    ideal = data.ideal;
    done = data.done;
    console.log(ideal);
  };

  readData("/saved.json", callback());

  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "Ideal",
          data: idealData,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          lineTension: 0,
        },
        {
          label: "Done",
          data: doneData,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          fill: false,
          borderDash: [5, 5],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Work Left To Do",
            },
            gridLines: {
              display: true,
              borderDash: [5, 5],
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: "Iteration Time-Line",
            },
            gridLines: {
              display: true,
              borderDash: [5, 5],
            },
          },
        ],
      },
    },
  });

  submitIdealButton.onclick = () => {
    let ideal = document.getElementById("idealPointInput");
    let idealValue = ideal.value;

    if (idealValue === "") {
      ideal.value = "";
      idealErrorMessagge.style.display = "block";
      idealErrorMessagge.innerHTML = "Empty Input";

      return console.log("error");
    } else {
      idealErrorMessagge.innerHTML = "";
      idealErrorMessagge.style.display = "none";

      let idealNumber = parseInt(idealValue);

      if (Number.isNaN(idealNumber)) {
        ideal.value = "";
        idealErrorMessagge.style.display = "block";
        idealErrorMessagge.innerHTML = "Enter a Number";

        return console.log("error");
      } else {
        idealErrorMessagge.innerHTML = "";
        idealErrorMessagge.style.display = "none";

        idealData.push(idealNumber);
        ideal.value = "";

        myChart.update();
      }
    }
  };

  submitDoneButton.onclick = () => {
    let done = document.getElementById("donePointInput");
    let doneValue = done.value;

    if (doneValue === "") {
      done.value = "";
      doneErrorMessagge.style.display = "block";
      doneErrorMessagge.innerHTML = "Empty Input";
    } else {
      doneErrorMessagge.innerHTML = "";
      doneErrorMessagge.style.display = "none";

      let doneNumber = parseInt(doneValue);

      if (Number.isNaN(doneNumber)) {
        done.value = "";
        doneErrorMessagge.style.display = "block";
        doneErrorMessagge.innerHTML = "Enter a Number";

        return console.log("error");
      } else {
        doneErrorMessagge.innerHTML = "";
        doneErrorMessagge.style.display = "none";

        doneData.push(doneNumber);
        done.value = "";

        myChart.update();
      }
    }
  };
};
