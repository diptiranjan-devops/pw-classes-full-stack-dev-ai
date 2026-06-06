const data = {
    users: 12840,
    revenue: 98540,
    orders: 3421,
    growth: 24
};

document.getElementById("users").textContent =
    data.users.toLocaleString();

document.getElementById("revenue").textContent =
    "$" + data.revenue.toLocaleString();

document.getElementById("orders").textContent =
    data.orders.toLocaleString();

document.getElementById("growth").textContent =
    data.growth + "%";

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    themeBtn.innerHTML =
        document.body.classList.contains("dark")
        ? "☀ Light Mode"
        : "🌙 Dark Mode";
});

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});