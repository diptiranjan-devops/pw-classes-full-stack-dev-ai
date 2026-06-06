const ordersChart = new Chart(
document.getElementById("ordersChart"),
{
    type:"line",
    data:{
        labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"],
        datasets:[
        {
            label:"Online Orders",
            data:[20,35,30,55,70,50,80],
            borderColor:"#ff9800",
            tension:.4
        },
        {
            label:"Offline Orders",
            data:[15,25,45,50,40,45,65],
            borderColor:"#1e3a8a",
            tension:.4
        }]
    }
});

const earningChart = new Chart(
document.getElementById("earningChart"),
{
    type:"doughnut",
    data:{
        labels:["Offline","Online","Trade"],
        datasets:[{
            data:[45,30,25],
            backgroundColor:[
                "#1e3a8a",
                "#ff9800",
                "#ef4444"
            ]
        }]
    }
});