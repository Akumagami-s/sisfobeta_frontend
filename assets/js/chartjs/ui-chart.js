const data = {
    labels: [
      'Prajurit Aktif',
      'Prajurit Pensiun'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [90,10],
      backgroundColor: [
        '#A2A846',
        '#587350',
      ],
      hoverOffset: 4
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options : {
    }
  };

  var myChart = new Chart(
    document.getElementById('rekapChart'),
    config
  );