var chart1 = document.getElementById("piechart");
var chart2 = document.getElementById("piechart2");
var chart3 = document.getElementById("piechart3");
var chart4 = document.getElementById("piechart4");
var chart5 = document.getElementById("piechart5");
var chart6 = document.getElementById('piechart6');
var chart7 = document.getElementById("piechart7");
var chart8 = document.getElementById("piechart8");

var myChart1 = new Chart(chart1, {
    type: 'pie',
    data: {
        labels: ["Business","Residents"],
        datasets: [{
            data: ["22","80"],
            backgroundColor: ["#009688","#795548"],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart2 = new Chart(chart2, {
    type: 'pie',
    data: {
        labels: ["Married", "Single", "Widowed", "Legaly Separated"],
        datasets: [{
            data: ["60", "45", "6", "3"],
            backgroundColor: ["#F44336","#2196F3","#795548","#6da252"],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart3 = new Chart(chart3, {
    type: 'pie',
    data: {
        labels: ["Epo","Cabrera","Benitez","Gamban"],
        datasets: [{
            data: ["92","50","150","30"],
            backgroundColor: ["#EABD38","#1AC9E6","#176BA0","#EF7E32"],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart4 = new Chart(chart4, {
    type: 'pie',
    data: {
        labels: ["Catholic", "Christian", "Muslim", "Iglesia Ni Cristo"],
        datasets: [{
            data: ["60", "45", "25", "45"],
            backgroundColor: ["#F44336","#2196F3","#795548","#6da252"],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart5 = new Chart(chart5, {
    type: 'pie',
    data: {
        labels: ["Registered", "Unregistered", "Others"],
        datasets: [{
            data: ["60", "45", "15"],
            backgroundColor: ["#795548","#6da252", "#EB548C"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart6 = new Chart(chart6, {
    type: 'pie',
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            data: ["6", "4"],
            backgroundColor: ["#19AADE","#AF4BCE"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart7 = new Chart(chart7, {
    type: 'pie',
    data: {
        labels: ["Employed", "Unemployed"],
        datasets: [{
            data: ["60", "45"],
            backgroundColor: ["#795548","#2196F3"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

var myChart8 = new Chart(chart8, {
    type: 'pie',
    data: {
        labels: ["Filipino", "Chinese", "Americans"],
        datasets: [{
            data: ["9", "4", "5"],
            backgroundColor: ["#DE542C","#EABD38","#EA7369"]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {display: true,fullWidth: true,position: 'right',},
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    var label = tooltipLabel.split(" - ");
                    for (var i in allData) {total += allData[i];}
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return label[0] + ' (' + tooltipPercentage + '%)';
                }
            }
        },
    }
});

