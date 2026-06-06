// Category Chart

new Chart(
document.getElementById('categoryChart'),
{
    type:'doughnut',
    data:{
        labels:[
            'Politics',
            'Sports',
            'Technology',
            'Business'
        ],
        datasets:[{
            data:[45,25,20,10],
            backgroundColor:[
                '#4caf50',
                '#2196f3',
                '#ff9800',
                '#e91e63'
            ]
        }]
    }
});

// Monthly Performance

new Chart(
document.getElementById('monthlyChart'),
{
    type:'bar',
    data:{
        labels:[
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ],
        datasets:[{
            label:'Views',
            data:[
                12000,
                15000,
                11000,
                18000,
                14000,
                22000
            ],
            backgroundColor:'#f59e0b'
        }]
    }
});