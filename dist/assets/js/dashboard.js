/* Search */
document.querySelector(".searchIcon").addEventListener("click",function(){
    document.querySelector(".searchInput").classList.toggle("active");
});

//eBALTAB CHART

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
    legend: {
    display: false
    },
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
        legend: {
        display: false
        },
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
        legend: {
        display: false
        },
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
        legend: {
        display: false
        },
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
        legend: {
        display: false
        },
    }
    };
    var chartPenyaluranBelumTerelalisasi = new Chart(
    document.getElementById('chartPenyaluranBelumTerelalisasi'),
    configPenyaluranBelumTerelalisasi
);



//EKPR CHART
    
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
        legend: {
        display: false
        },
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
        legend: {
        display: false
        },
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
        legend: {
        display: false
        },
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
        legend: {
        display: false
        },
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
        legend: {
        display: false
        },
    }
    };
    var chartDebiturOutstanding = new Chart(
    document.getElementById('chartDebiturOutstanding'),
    configDebiturOutstanding
);







    