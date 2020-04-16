let saveButton = document.getElementById("saveBtn");

saveButton.onclick = () => {
  if (idealData.length <= 0 || doneData <=0 ) {
    return alert(
      "You should have at least 1 item added on the chart on both lines in order to save data"
    );
  } else {
    let savedData = {
        ideal: idealData,
        done:  doneData
    }
    var request = new XMLHttpRequest();
    request.open("POST", "./saveAsJson");
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(savedData));
  }
};
