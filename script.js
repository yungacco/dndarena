const pedineContainer = document.getElementById("pedine");

for (let i = 0; i < 3; i++) {
  const pedina = document.createElement("div");
  pedina.classList.add("pedina");

  pedineContainer.appendChild(pedina);

  pedina.addEventListener("mousedown", (e) => {
    const offsetX = e.clientX - pedina.offsetLeft;
    const offsetY = e.clientY - pedina.offsetTop;

    document.addEventListener("mousemove", (e) => {
      pedina.style.left = `${e.clientX - offsetX}px`;
      pedina.style.top = `${e.clientY - offsetY}px`;
    });
  });
}
