const processed_btn = document.getElementById("processed");
const en_route_btn = document.getElementById("en_route");
const delivered_btn = document.getElementById("delivered");

const defaultColor = "#0F4C75";
const activecolor = "#172025";

var orders = document.querySelectorAll(".order-delivered, .order-en-route, .order-processed");

function filter(status) {
  orders.forEach((element) => {
    if (!element.classList.contains(status)) {
      element.style.display = "none";
    } else {
      element.style.display = "";
    }
  });
}

function clear_filter() {
  orders.forEach((element) => {
    element.style.display = "";
  });
}

processed_btn.addEventListener("click", () => {
  filter("order-processed");
  processed_btn.style.backgroundColor = activecolor;
  en_route_btn.style.backgroundColor = defaultColor;
  delivered_btn.style.backgroundColor = defaultColor;
});

en_route_btn.addEventListener("click", () => {
  filter("order-en-route");
  processed_btn.style.backgroundColor = defaultColor;
  en_route_btn.style.backgroundColor = activecolor;
  delivered_btn.style.backgroundColor = defaultColor;
});

delivered_btn.addEventListener("click", () => {
  filter("order-delivered");
  processed_btn.style.backgroundColor = defaultColor;
  en_route_btn.style.backgroundColor = defaultColor;
  delivered_btn.style.backgroundColor = activecolor;
});
