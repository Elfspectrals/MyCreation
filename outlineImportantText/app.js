document.getElementById("checkbox").addEventListener("click", function () {
  let redactedText = document.querySelectorAll("mark");
  redactedText.forEach((element) => {
    if (element.style.backgroundColor === "black") {
      element.style.backgroundColor = "transparent";
    } else {
      element.style.backgroundColor = "black";
      element.style.animation = "none";
      void element.offsetWidth;
      element.style.animation = null;
    }
  });
});
