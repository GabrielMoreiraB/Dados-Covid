let endPointAPI = ` https://api.covid19api.com/summary`;

getBuscaItensAPI(endPointAPI);

async function getBuscaItensAPI(link){
    const resp = await fetch(link);
    let itens = await resp.json(); 
    /* console.log(itens.Countries.find(e=> e.Country == "Brazil")
      ) */
     showTotal(itens) 
     showPizza(itens)
     topTen (itens)

}


function showTotal(e){
    const confirmados = document.querySelector('.confirmados');
    const mortes = document.querySelector('.mortes');
    const recuperados = document.querySelector('.recuperados');
    confirmados.innerHTML = e.Global.TotalConfirmed;
    mortes.innerHTML = e.Global.TotalDeaths;
    recuperados.innerHTML = e.Global.TotalRecovered
}

function showPizza(e){
    const confirm = +e.Global.NewConfirmed;
    const mortes = +e.Global.NewDeaths;
    const rec = +e.Global.NewRecovered;
    let percentC = (confirm *100)/ (confirm + mortes + rec);
    let mortesC = (mortes *100)/ (confirm + mortes + rec);
    let recC = (rec *100)/ (confirm + mortes + rec);


    const canvas = document.getElementById('meu-grafico');
        const ctx = canvas.getContext('2d');
        const meuGrafico = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ["Novos Confirmados", "Novas Mortes", "Novos curados"],
            datasets: [{
              data: [percentC, mortesC, recC ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
              ]
            }]
          },
          options:{
            responsive: true,
            plugins: {
              legend: {
                position: 'top'
              },
              title: {
                display: true,
                text: "Distribuição de novos casos"
              }
    
            }
    
          }
        });

}

function topTen (e){
    const paises = e.Countries;

    let order = paises.sort((a,b) => a.TotalDeaths - b.TotalDeaths);
    order = order.reverse();
    order = order.slice(0, 10);
    let paisesNome = order.map(e => e.Country);
    let paisesValor = order.map(e => e.TotalDeaths);

    const canvasBarra = document.getElementById('meu-grafico2');
    const ctxBarra = canvasBarra.getContext('2d');
    const meuGraficoBarra = new Chart(ctxBarra, {
      type: 'bar',
      data: {
        labels: paisesNome,
        datasets:[{
          data: paisesValor,
          backgroundColor: "#00f0f0"
        }]

      },
      options:{
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: "Total de mortes por pais - top 10"
          }

        }

      }
    }) 
}



    let dtAte = '2021-05-26'
    let dtDe = '2021-05-01'
    let paisLinha = 'brazil'
    let tipo = 'Deaths'

    
  const aplicar = document.getElementById('formulario');

  aplicar.addEventListener('submit', (e) => {
    e.preventDefault()
    dtAte = document.getElementById('dtAte').value;
    dtDe = document.getElementById('dtDe').value;
    paisLinha = document.getElementById('paisLinha').value;
    tipo = document.getElementById('tipo').value;
    console.log( tipo)
    showLinha ()
  })

async function showLinha () {
  let dadosGr = []
  let graphLinhaAPI = `https://api.covid19api.com/country/${paisLinha}?from=${dtDe}T00:00:00Z&to=${dtAte}T00:00:00Z`
  const resp = await fetch(graphLinhaAPI);
  let item = await resp.json();
  console.log(item);

  let arrayDados = item.map(e => e[tipo]);
  let dias = item.map(e => e.Date);
  dias = dias.slice(1).map(d=>d.slice(0, 10));
  console.log(dias);

  for(let i = 1; i<arrayDados.length; i++){
    dadosGr.push((+arrayDados[i])-(+arrayDados[i-1]))
  }
  console.log(dadosGr);

  let media = dadosGr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)/dadosGr.length;
console.log(media);


const canvas = document.getElementById('meu-grafico3');
const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dias,
      datasets: [
        {
          label: 'Valores Diarios',
          data: dadosGr,
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1
        },
        {
          label: 'Média',
          data: Array(dadosGr.length).fill(media),
          fill: false,
          borderColor: 'rgb(54, 162, 235)',
          tension: 0.1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Curva diária de COVID-19'
      },
      maintainAspectRatio: false
    }
  })
}

showLinha ()
