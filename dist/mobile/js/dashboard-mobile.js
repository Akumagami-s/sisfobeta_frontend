const monthLabaRugi = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
  const dataLabaRugi = {
    labels: monthLabaRugi,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: '#A2A846',
      data: [0, 10, 20, 30, 20, 0],
    }]
  };

    const configLabaRugi = {
    type: 'line',
    data: dataLabaRugi,
    options: {
      plugins : {
        legend : false
      }
    }
  };
    var chartLabaRugi = new Chart(
    document.getElementById('chartLabaRugi'),
    configLabaRugi
    );


    const monthHistoryData = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
      const dataHistory = {
        labels: monthHistoryData,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: '#7334FF',
          data: [0, 10, 20, 30, 20, 0],
        }]
      };
  
        const configHistoryData = {
        type: 'line',
        data: dataHistory,
        options: {
          plugins : {
            legend : false
          }
        }
      };
        var chartHistoryData = new Chart(
        document.getElementById('chartHistoryData'),
        configHistoryData
        );


const dataRekapPrajurit = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [55,45],
      backgroundColor: [
      '#587350','#A2A846'
      ],
      hoverOffset: 4
    }]
  };

  const configdataRekapPrajurit = {
    type: 'doughnut',
    data: dataRekapPrajurit,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartdataRekapPrajurit = new Chart(
  document.getElementById('chartdataRekapPrajurit'),
  configdataRekapPrajurit
  );


  const dataPengajuanTotalPenerima = {
    labels: [
        'Value',
        'apa'
    ],
    datasets: [{
        label: 'uhuy',
        data: [85,15],
        backgroundColor: [
        '#7334FF','#eee'
        ],
        hoverOffset: 4
    }]
    };

    const configPengajuanTotalPenerima = {
    type: 'doughnut',
    data: dataPengajuanTotalPenerima,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
    };
    var chartPengajuanTotalPenerima = new Chart(
    document.getElementById('chartPengajuanTotalPenerima'),
    configPengajuanTotalPenerima
    );


    const dataPengajuanTotalSudahDiterima = {
      labels: [
          'Value',
          'apa'
      ],
      datasets: [{
          label: 'uhuy',
          data: [85,15],
          backgroundColor: [
          '#DC3545','#eee'
          ],
          hoverOffset: 4
      }]
      };

      const configPengajuanTotalSudahDiterima = {
      type: 'doughnut',
      data: dataPengajuanTotalSudahDiterima,
        options : {
            plugins : {
            legend: {
              display: false
            },
          }
        }
      };
      var chartPengajuanTotalSudahDiterima = new Chart(
      document.getElementById('chartPengajuanTotalSudahDiterima'),
      configPengajuanTotalSudahDiterima
    );


    const dataDanaAlokasiEbaltab = {
    labels: [
        'Value',
        'apa'
    ],
    datasets: [{
        label: 'uhuy',
        data: [85,15],
        backgroundColor: [
        '#7334FF','#FF832A'
        ],
        hoverOffset: 4
    }]
    };

    const configDanaAlokasiEbaltab = {
    type: 'doughnut',
    data: dataDanaAlokasiEbaltab,
    options : {
      plugins : {
            legend: {
              display: false
            },
          }
      }
    };
    var chartDanaAlokasiEbaltab = new Chart(
    document.getElementById('chartDanaAlokasiEbaltab'),
    configDanaAlokasiEbaltab
  );


  const dataPenyaluranSudahTerelalisasi = {
    labels: [
        'Value',
        'apa'
    ],
    datasets: [{
        label: 'uhuy',
        data: [85,15],
        backgroundColor: [
        '#FF832A','#eee'
        ],
        hoverOffset: 4
    }]
    };

    const configPenyaluranSudahTerelalisasi = {
    type: 'doughnut',
    data: dataPenyaluranSudahTerelalisasi,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
    };
    var chartPenyaluranSudahTerelalisasi = new Chart(
    document.getElementById('chartPenyaluranSudahTerelalisasi'),
    configPenyaluranSudahTerelalisasi
);

  const dataPenyaluranBelumTerelalisasi = {
      labels: [
          'Value',
          'apa'
      ],
      datasets: [{
          label: 'uhuy',
          data: [85,15],
          backgroundColor: [
          '#A2A846','#eee'
          ],
          hoverOffset: 4
      }]
      };

      const configPenyaluranBelumTerelalisasi = {
      type: 'doughnut',
      data: dataPenyaluranBelumTerelalisasi,
      options : {
        plugins : {
          legend: {
            display: false
          },
        }
      }
      };
      var chartPenyaluranBelumTerelalisasi = new Chart(
      document.getElementById('chartPenyaluranBelumTerelalisasi'),
      configPenyaluranBelumTerelalisasi
  );



  const dataRekapBRISudahTerealisasi = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [85,15],
      backgroundColor: [
      '#7334FF','#eee'
      ],
      hoverOffset: 4
    }]
  };

  const configRekapBRISudahTerealisasi = {
    type: 'doughnut',
    data: dataRekapBRISudahTerealisasi,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartRekapBRISudahTerealisasi = new Chart(
  document.getElementById('chartRekapBRISudahTerealisasi'),
  configRekapBRISudahTerealisasi
  );


  const dataRekapBRIBelumTerealisasi = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [85,15],
      backgroundColor: [
      '#FF832A','#eee'
      ],
      hoverOffset: 4
    }]
  };

  const configRekapBRIBelumTerealisasi = {
    type: 'doughnut',
    data: dataRekapBRIBelumTerealisasi,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartRekapBRIBelumTerealisasi = new Chart(
  document.getElementById('chartRekapBRIBelumTerealisasi'),
  configRekapBRIBelumTerealisasi
  );




  const dataRekapBTNSudahTerealisasi = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [85,15],
      backgroundColor: [
      '#A2A846','#eee'
      ],
      hoverOffset: 4
    }]
  };

  const configRekapBTNSudahTerealisasi = {
    type: 'doughnut',
    data: dataRekapBTNSudahTerealisasi,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartRekapBTNSudahTerealisasi = new Chart(
  document.getElementById('chartRekapBTNSudahTerealisasi'),
  configRekapBTNSudahTerealisasi
  );


  const dataRekapBTNBelumTerealisasi = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [85,15],
      backgroundColor: [
      '#7334FF','#eee'
      ],
      hoverOffset: 4
    }]
  };

  const configRekapBTNBelumTerealisasi = {
    type: 'doughnut',
    data: dataRekapBTNBelumTerealisasi,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartRekapBTNBelumTerealisasi = new Chart(
  document.getElementById('chartRekapBTNBelumTerealisasi'),
  configRekapBTNBelumTerealisasi
  );


  const dataTotalTunggakan = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [85,15],
      backgroundColor: [
      '#FF832B','#eee'
      ],
      hoverOffset: 4
    }]
  };

  const configTotalTunggakan = {
    type: 'doughnut',
    data: dataTotalTunggakan,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartTotalTunggakan = new Chart(
  document.getElementById('chartTotalTunggakan'),
  configTotalTunggakan
  );

  const dataOutstanding = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [85,15],
      backgroundColor: [
      '#7334FF','#eee'
      ],
      hoverOffset: 4
    }]
  };

  const configOutstanding = {
    type: 'doughnut',
    data: dataOutstanding,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartOutstanding = new Chart(
  document.getElementById('chartOutstanding'),
  configOutstanding
  );

  const dataTotalPinjaman = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [85,15],
      backgroundColor: [
      '#A2A846','#eee'
      ],
      hoverOffset: 4
    }]
  };

  const configTotalPinjaman = {
    type: 'doughnut',
    data: dataTotalPinjaman,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartTotalPinjaman = new Chart(
  document.getElementById('chartTotalPinjaman'),
  configTotalPinjaman
  );





  const dataPokokDanBunga = {
    labels: [
      'Value',
      'apa'
    ],
    datasets: [{
      label: 'uhuy',
      data: [55,45],
      backgroundColor: [
      '#FF832A','#A2A846'
      ],
      hoverOffset: 4
    }]
  };

  const configDataPokokDanBunga = {
    type: 'doughnut',
    data: dataPokokDanBunga,
    options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
  };
  var chartDataPokokDanBunga = new Chart(
  document.getElementById('chartDataPokokDanBunga'),
  configDataPokokDanBunga
  );



  const dataTotalDebitur = {
labels: [
    'Value',
    'apa'
],
datasets: [{
    label: 'uhuy',
    data: [85,15],
    backgroundColor: [
    '#FF832B','#eee'
    ],
    hoverOffset: 4
}]
};

const configTotalDebitur = {
type: 'doughnut',
data: dataTotalDebitur,
options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
};
var chartTotalDebitur = new Chart(
document.getElementById('chartTotalDebitur'),
configTotalDebitur
);

const dataDebiturBaru = {
labels: [
    'Value',
    'apa'
],
datasets: [{
    label: 'uhuy',
    data: [85,15],
    backgroundColor: [
    '#7334FF','#eee'
    ],
    hoverOffset: 4
}]
};

const configDebiturBaru = {
type: 'doughnut',
data: dataDebiturBaru,
options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
};
var chartDebiturBaru = new Chart(
document.getElementById('chartDebiturBaru'),
configDebiturBaru
);


const dataDebiturLunas = {
labels: [
    'Value',
    'apa'
],
datasets: [{
    label: 'uhuy',
    data: [85,15],
    backgroundColor: [
    '#A2A846','#eee'
    ],
    hoverOffset: 4
}]
};

const configDebiturLunas = {
type: 'doughnut',
data: dataDebiturLunas,
options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
};
var chartDebiturLunas = new Chart(
document.getElementById('chartDebiturLunas'),
configDebiturLunas
);


const dataDebiturMeninggal = {
labels: [
    'Value',
    'apa'
],
datasets: [{
    label: 'uhuy',
    data: [85,15],
    backgroundColor: [
    '#DB3445','#eee'
    ],
    hoverOffset: 4
}]
};

const configDebiturMeninggal = {
type: 'doughnut',
data: dataDebiturMeninggal,
options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
};
var chartDebiturMeninggal = new Chart(
document.getElementById('chartDebiturMeninggal'),
configDebiturMeninggal
);

const dataDebiturOutstanding = {
labels: [
    'Value',
    'apa'
],
datasets: [{
    label: 'uhuy',
    data: [85,15],
    backgroundColor: [
    '#A2A846','#eee'
    ],
    hoverOffset: 4
}]
};

const configDebiturOutstanding = {
type: 'doughnut',
data: dataDebiturOutstanding,
options : {
      plugins : {
        legend: {
          display: false
        },
      }
    }
};
var chartDebiturOutstanding = new Chart(
document.getElementById('chartDebiturOutstanding'),
configDebiturOutstanding
);



