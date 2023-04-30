

let endPointAPI = ` https://api.covid19api.com/summary`;

let graphLinhaAPI = `https://api.covid19api.com/country/brazil?from=2021-05-01T00:00:00Z&to=2021-05-26T00:00:00Z`


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

async function getLinhaAPI(link){
  const resp = await fetch(link);
  let item = await resp.json(); 
  console.log(item)
}
getLinhaAPI(graphLinhaAPI)





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
