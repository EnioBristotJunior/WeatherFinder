function enterKeyPressed(event) {
  if (event.keyCode == 13) {
    buscarTempo();
    return true;
  } else {
    return false;
  }
}

//Função para buscar o tempo
function buscarTempo() {
  cidade = document.getElementById("cidade").value;
  var tempera = document.getElementById("tempo");
  // Create an XMLHttpRequest object
  const xhttp = new XMLHttpRequest();
  // Define a callback function
  xhttp.onload = function () {
    // Here you can use the Data
    dados = JSON.parse(this.responseText);
    console.log(dados);
    var nomeCidade = (document.getElementById("city").innerHTML = dados.name
      ? dados.name
      : "Cidade não encontrada");
    if (nomeCidade == "Cidade não encontrada") {
      tempera.innerText = "Tempo";
      document.getElementById("temp").innerHTML = "Temperatura";
    } else {
      document.getElementById("temp").innerHTML =
        Math.round(dados.main.temp - 273.15) + "º Graus";
      var tempo = dados.weather[0].main;
    }

    //Chama a função de cada tempo de acordo com o resultado

    if (tempo == "Clouds") {
      nublado();
      tempera.innerText = "Nublado";
    }
    if (tempo == "Rain") {
      chuva();
      tempera.innerText = "Chovendo";
    }
    if (tempo == "Clear") {
      sol();
      tempera.innerText = "Limpo";
    }
    if (tempo == "Snow") {
      neve();
      tempera.innerText = "Nevando";
    }
  };
  // Send a request
  xhttp.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=f745172446ab5d8a5415bcbcb44921f2"
  );
  xhttp.send();
}

//Função para chamar a função de cada fundo de acordo com o plano de fundo escolhido(Sol, Neve...)

function mudarFundo(tempo) {
  switch (tempo) {
    case 1:
      sol();
      break;
    case 2:
      chuva();
      break;
    case 3:
      neve();
      break;
    case 4:
      nublado();
      break;
    case 5:
      cabana();
      break;
  }
}

//Funções de cada tempo
function sol() {
  document.body.className = "sol";
  document.getElementById("pesquisar").className = "btn_sol";
  document.getElementById("title").className = "text_sol";
  document.getElementById("sub").className = "sub_title_sol";
  document.getElementById("sub2").className = "sub_title_sol";
  document.getElementById("cidade").className = "input_sol";
}

function chuva() {
  document.body.className = "chuva";
  document.getElementById("pesquisar").className = "btn_chuva";
  document.getElementById("title").className = "text_chuva";
  document.getElementById("sub").className = "sub_title_chuva";
  document.getElementById("sub2").className = "sub_title_chuva";
  document.getElementById("cidade").className = "input_chuva";
}

function neve() {
  document.body.className = "neve";
  document.getElementById("pesquisar").className = "btn_neve";
  document.getElementById("title").className = "text_neve";
  document.getElementById("sub").className = "sub_title_neve";
  document.getElementById("sub2").className = "sub_title_neve";
  document.getElementById("cidade").className = "input_neve";
}

function nublado() {
  document.body.className = "nublado";
  document.getElementById("pesquisar").className = "btn_nublado";
  document.getElementById("title").className = "text_nublado";
  document.getElementById("sub").className = "sub_title_nublado";
  document.getElementById("sub2").className = "sub_title_nublado";
  document.getElementById("cidade").className = "input_nublado";
}

//É a função do fundo da tela inicial

function cabana() {
  document.body.className = "cabana";
  document.getElementById("pesquisar").className = "btn_cabana";
  document.getElementById("title").className = "text_cabana";
  document.getElementById("sub").className = "sub_title_cabana";
  document.getElementById("sub2").className = "sub_title_cabana";
  document.getElementById("cidade").className = "input_cabana";
}
