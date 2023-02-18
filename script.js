// fetch data
fetch('data.json')
  .then((response) => response.json())
  .then((json) => insertHtmlElement(json));

function insertHtmlElement(obj) {
  obj.forEach((days) => {
    const day = days.day;
    const amount = days.amount;

    const divCharts = document.querySelector('.charts');
    const divChart = document.createElement('div');
    divChart.classList.add('chart');
    const stringToInject = `
        
            <div class="beam" style="height:calc(${amount} * 2px);"></div>
            <div class="detail">$${amount}</div>
           
         
          <p class="day">${day}</p>
          `;
    divChart.innerHTML = stringToInject;
    divCharts.append(divChart);
  });

  activeChart(currentDay);
}

const getDay = new Date().getDay();
const currentDay = getDay - 1;

function activeChart(index) {
  const beam = document.querySelectorAll('.beam');

  if (currentDay === -1) {
    beam[6].style.background = 'hsl(186, 34%, 60%)';
  } else {
    beam[index].style.background = 'hsl(186, 34%, 60%)';
  }
}

const a = activeChart(currentDay);
a.addEventListener('mouseover', function () {
  activeChart(currentDay).style.background = 'hsl(186, 34%, 90%)';
});
