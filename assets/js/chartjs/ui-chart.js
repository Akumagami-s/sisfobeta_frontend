/* Chart Prajurit Actif or no */
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
      legend: {
        display: false
      },
    }
  };

  var myChart = new Chart(
    document.getElementById('rekapChart'),
    config
  );



  /* Chart total terima (Ebaltab) */

const dataTotalTerima = {
  labels: [
    'Total Di Terima'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [20,0],
    backgroundColor: [
      '#7334FF'
    ],
    hoverOffset: 4
  }]
};

const configTotalTerima = {
  type: 'doughnut',
  data: dataTotalTerima,
  options : {
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('totalPenerima'),
  configTotalTerima
);

  /* Chart sudah Diterima (Ebaltab) */


const dataSudahDiterima = {
  labels: [
    'Sudah Di Terima',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [30],
    backgroundColor: [
      '#DC3546',
    ],
    hoverOffset: 4
  }]
};

const configSudahDiterima = {
  type: 'doughnut',
  data: dataSudahDiterima,
  options : {
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('sudahDiterima'),
  configSudahDiterima
);

/* Chart Data Alokasi */
  const dataAlokasi = {
    labels: [
      'Jumlah Dana Alokasi',
      'Dana Alokasi Terealisasi'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [90,20],
      backgroundColor: [
        '#7334FF',
        '#FF832B',
      ],
      hoverOffset: 4
    }]
  };

  const configDataAlokasi = {
    type: 'doughnut',
    data: dataAlokasi,
    options : {
      legend: {
        display: false
      },
    }
  };

  var myChart = new Chart(
    document.getElementById('chartDataAlokasi'),
    configDataAlokasi
  );