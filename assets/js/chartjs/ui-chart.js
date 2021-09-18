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



  /* Chart KelengkapanPengajuan Data */

const dataKelengkapanPengajuan = {
labels: [
  'Kelengkapan data pengajuan '
],
datasets: [{
  label: 'My First Dataset',
  data: [75,25],
  backgroundColor: [
    '#FF832A','#fff'
  ],
  hoverOffset: 4
}]
};

const configKelengkapanPengajuan = {
type: 'doughnut',
data: dataKelengkapanPengajuan,
options : {
  legend: {
    display: false
  },
}
};

var myChart = new Chart(
document.getElementById('kelengkapanPengajuan'),
configKelengkapanPengajuan
);

/* Chart dataSprin */
const dataSprin = {
  labels: [
    'Approval Sprin'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [75,25],
    backgroundColor: [
      '#A2A846','#fff'
    ],
    hoverOffset: 4
  }]
};

const configSprin = {
  type: 'doughnut',
  data: dataSprin,
  options : {
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('approvalSprin'),
  configSprin
);

/* Chart danaAlokasi */
const dataDanaAlokasi = {
  labels: [
    'Approval Sprin'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [75,25],
    backgroundColor: [
      '#7334FF','#fff'
    ],
    hoverOffset: 4
  }]
};

const configDanaAlokasi = {
  type: 'doughnut',
  data: dataDanaAlokasi,
  options : {
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('chartDanaAlokasi'),
  configDanaAlokasi
);


/* Chart ApprovaldanaAlokasi */
const dataApprovalDanaAlokasi = {
  labels: [
    'Approval Sprin'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [75,25],
    backgroundColor: [
      '#FF832A','#fff'
    ],
    hoverOffset: 4
  }]
};

const configApprovalDanaAlokasi = {
  type: 'doughnut',
  data: dataApprovalDanaAlokasi,
  options : {
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('chartApprovalDanaAlokasi'),
  configApprovalDanaAlokasi
);