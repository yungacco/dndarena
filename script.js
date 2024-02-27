const pedine = document.querySelectorAll(".pedina");
for (const pedina of pedine) {
  let isMouseDown = false;
  pedina.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    const offsetX = e.clientX - pedina.offsetLeft;
    const offsetY = e.clientY - pedina.offsetTop;
    document.addEventListener("mousemove", (e) => {
      if (isMouseDown) {
        pedina.style.left = `${e.clientX - offsetX}px`;
        pedina.style.top = `${e.clientY - offsetY}px`;
      }
    });
  });
  pedina.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
}
