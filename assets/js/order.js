const dispatched_btn = document.getElementById("dispatched");
const en_route_btn = document.getElementById("en_route");
const delivered_btn = document.getElementById("delivered");

const defaultColor = "#0F4C75";
const activecolor = "#172025";

dispatched_btn.addEventListener("click", () => {
  dispatched_btn.style.backgroundColor = activecolor;
  en_route_btn.style.backgroundColor = defaultColor;
  delivered_btn.style.backgroundColor = defaultColor;
});

en_route_btn.addEventListener("click", () => {
  dispatched_btn.style.backgroundColor = defaultColor;
  en_route_btn.style.backgroundColor = activecolor;
  delivered_btn.style.backgroundColor = defaultColor;
});

delivered_btn.addEventListener("click", () => {
  dispatched_btn.style.backgroundColor = defaultColor;
  en_route_btn.style.backgroundColor = defaultColor;
  delivered_btn.style.backgroundColor = activecolor;
});
