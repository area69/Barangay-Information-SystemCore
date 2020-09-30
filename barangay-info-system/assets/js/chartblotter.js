
var chart10 = document.getElementById("piechart10");
var chart11 = document.getElementById("piechart11");
var chart12 = document.getElementById("piechart12");
var chart13 = document.getElementById("piechart13");
var myChart10 = new Chart(chart10, {
    type: 'pie',
    data: {
        labels: ["Pending Cases", "Ongoing Cases", "Finished Cases"],
        datasets: [{
            data: ["59", "104","200"],
            backgroundColor: ["#DEA824","#1E8495","#25883B"]
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
var myChart11 = new Chart(chart11, {
    type: 'pie',
    data: {
        labels: ["Pending Cases", "Ongoing Cases", "Finished Cases"],
        datasets: [{
            data: ["20", "69","150"],
            backgroundColor: ["#DEA824","#1E8495","#25883B"]
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
var myChart12 = new Chart(chart12, {
    type: 'pie',
    data: {
        labels: ["Pending Reports", "Finished Reports"],
        datasets: [{
            data: ["45","105"],
            backgroundColor: ["#DEA824","#25883B"]
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
var myChart13 = new Chart(chart13, {
    type: 'pie',
    data: {
        labels: ["Pending Reports", "Finished Reports"],
        datasets: [{
            data: ["20","120"],
            backgroundColor: ["#DEA824","#25883B"]
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