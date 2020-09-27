var chart1 = document.getElementById("piechart");
var chart2 = document.getElementById("piechart2");
var chart3 = document.getElementById("piechart3");
var chart4 = document.getElementById("piechart4");
var chart5 = document.getElementById("piechart5");
var chart6 = document.getElementById('barchart');
var chart7 = document.getElementById("piechart7");
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
        labels: ["Male","Female"],
        datasets: [{
            data: ["92","50"],
            backgroundColor: ["#6da252","#F44336"],
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
        labels: ["Registered", "Unregistered"],
        datasets: [{
            data: ["60", "45"],
            backgroundColor: ["#795548","#6da252"]
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

var myChart6 = new Chart(chart6, {
    type: 'bar',
    data: {
        labels: ['2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Move In',
            backgroundColor: "#795548",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
            data: ["13","12","20","18"],
        }, {
            label: 'Death',
            backgroundColor: "#F44336",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: ["15","16","14","16","0"],
        }, {
            label: 'Current Populations',
            backgroundColor: "#2196F3",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: ["14","8","14","16"],
        }, {
            label: 'Move Out',
            backgroundColor: "rgba(244, 67, 54, 0.5)",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 1,
            data: ["11","19","12","12"]
        }]
    },
    options: {
        responsive: true,
        title: {display: false,text: 'Chart'},
        legend: {position: 'top',display: true,},
        tooltips: {mode: 'index',intersect: false,},
        hover: {mode: 'nearest',intersect: true},
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Years'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Residents'
                }
            }]
        }
    }
});
