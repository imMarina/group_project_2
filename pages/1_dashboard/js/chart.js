var visitCanvas = document.getElementById("visitChart").getContext("2d");


Chart.defaults.font.family = "DM Sans";
Chart.defaults.font.size = 13;
Chart.defaults.color = "#06152B";

let visitData = {
  labels: ["10am", "11am", "12am", "01am", "02am", "03am", "04am", "05am", "06am", "07am"],
  datasets: [{
    label: "",
    data: [58, 30, 59, 38, 23, 50, 17, 35, 70, 58],
    tension: 0.4,
    cubicInterpolationMode: 'monotone',/*Сплайн*/
    fill: true,
    borderColor: '#3A36DB',//цвет линии
    borderWidth: 1,//толщина линии
    backgroundColor: 'rgba(100,0,0,0.5)',
    /*borderDash: [20, 10, 60, 10],*/

    /*Стили точек на графике */
    pointBorderColor: '#3A36DB',
    pointBackgroundColor: 'white',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 1,
    pointStyle: 'rectRounded'
  }]
};

let visitOptions=
      {
        scales: {
          y: {
            beginAtZero: true // назначили оси Y начинать отсчет с нуля
          }
        },
        plugins: {
          legend: {
            display:false,
            position: "bottom",
            labels: {
              boxWidth: 50,
              color: "black",
              font: {
                size: 24,
                weight: "bold"
              }
            }
          },
          tooltips: {//Стили подсказки
            cornerRadius: 0,
            caretSize: 0,
            xPadding: 16,
            yPadding: 10,
            backgroundColor: 'rgba(0, 150, 0, 0.6)',
            titleFontStyle: 'normal',
            titleMarginBottom: 15
          }
        }
        
      };

let lineChart = new Chart(visitCanvas, {
  type: 'line',
  data: visitData,
  options: visitOptions
});

