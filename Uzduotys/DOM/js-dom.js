const init = () => {
  //---------------------------------- Uzduotis #1 --------------------------------------
  const bindButton1 = () => {
    const button = document.getElementById("button-1");
    const result = document.getElementById("result-1");

    button.onclick = () => {
      result.innerHTML = "Labas pasauli!";
    };
  };

  bindButton1();

  //---------------------------------- Uzduotis #2 --------------------------------------
  const bindButton2 = () => {
    const button = document.getElementById("button-2");
    const result = document.getElementById("result-2");

    button.onclick = () => {
      result.classList.remove("hidden-form");
    };
  };

  bindButton2();

  //---------------------------------- Uzduotis #3 --------------------------------------
  const bindButton3 = () => {
    const button = document.getElementById("button-3");
    const table = document.getElementById("table-3");

    const vardas = document.getElementById("vardas");
    const pavarde = document.getElementById("pavarde");
    const email = document.getElementById("email");

    button.onclick = () => {
      const tr = document.createElement("tr");

      const row = `<td>${vardas.value}</td><td>${pavarde.value}</td><td>${email.value}</td>`;
      tr.innerHTML = row;

      table.append(tr);
    };
  };

  bindButton3();
};

init();
