const pedine = document.querySelectorAll(".pedina");

for (const pedina of pedine) {
  pedina.addEventListener("mousedown", (e) => {
    const offsetX = e.clientX - pedina.offsetLeft;
    const offsetY = e.clientY - pedina.offsetTop;

    document.addEventListener("mousemove", (e) => {
      pedina.style.left = `${e.clientX - offsetX}px`;
      pedina.style.top = `${e.clientY - offsetY}px`;
    });
  });
}
