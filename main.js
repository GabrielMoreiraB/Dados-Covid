
let endPointAPI = ` https://api.covid19api.com/summary`;


getBuscaItensAPI(endPointAPI);

async function getBuscaItensAPI(link){
    const resp = await fetch(link);
    let itens = await resp.json(); 
    console.log(itens)
     showTotal(itens) 
     showPizza(itens)


  
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
          }
        });


}
