let count = 0;

function readJSON() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      displayData(this.responseText);
    }
  };

  xhttp.open("GET", "data.json", true);
  xhttp.send();
}

function displayData(responseText) {
  const jsonData = JSON.parse(responseText);
  const item = jsonData[count];

  for (let key in item) {
    const el = document.getElementById(key);
    if (el) {
      el.innerHTML = item[key].replace(/\n/g, "<br>");
    }
  }

  count = (count + 1) % jsonData.length;
}

document.addEventListener("DOMContentLoaded", readJSON);