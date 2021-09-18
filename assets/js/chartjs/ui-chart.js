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


/* Chart Dana Penyaluran */
const dataDanaPenyaluran = {
  labels: [
    'Approval Sprin'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [75,25],
    backgroundColor: [
      '#DC3545','#fff'
    ],
    hoverOffset: 4
  }]
};

const configDanaPenyaluran = {
  type: 'doughnut',
  data: dataDanaPenyaluran,
  options : {
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('chartDanaPenyaluran'),
  configDanaPenyaluran
);

/* Chart Approval Dana Penyaluran */
const dataApprovalDanaPenyaluran = {
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

const configApprovalDanaPenyaluran = {
  type: 'doughnut',
  data: dataApprovalDanaPenyaluran,
  options : {
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('chartApprovalDanaPenyaluran'),
  configApprovalDanaPenyaluran
);




const labelsAllDataEbaltab = [
  'Nov',
  'Des',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Ags',
  'Sep',

];

const allDataEbaltab = {
  labels: labelsAllDataEbaltab,
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 2000, 4000, 3000,3000,4000,4500,5000,6000,5000,4000,3000],
      borderColor: '#FF832A',
      backgroundColor: 'transparent',
      tension: 0.4,
    },
    {
      label: 'Dataset 2',
      backgroundColor: 'transparent',
      data: [2500, 3000, 4000, 6000,5000,7000,6000,5000,4000,2000,4000,5000],
      borderColor: '#7334FF',
      tension: 0.2,
    },
    {
      label: 'Dataset 3',
      data: [2000, 1000, 4000, 3000,6000,4000,2000,6000,8000,5000,6000,7000],
      borderColor: '#DC3545',
      backgroundColor: 'transparent',
      tension: 0.2,
    }
  ]
};

const configDataEbaltab = {
  type: 'line',
  data: allDataEbaltab,
  options: {
    animations: {
      radius: {
        duration: 400,
        easing: 'linear',
      }
    },
    legend: {
      display: false
    },
  }
};

var myChart = new Chart(
  document.getElementById('allDataEbaltab'),
  configDataEbaltab
);








