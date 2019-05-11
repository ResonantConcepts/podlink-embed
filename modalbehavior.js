var polyfill = document.createElement("script");
  polyfill.src = "https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.9/dialog-polyfill.min.js";
  document.currentScript.parentNode.appendChild(polyfill);
  
const modal = document.getElementById("podlink-modal");
const open = document.getElementById("open-modal");
const iframe = document.getElementById("podlink-modal-iframe");
const close = document.getElementById("podlink-modal-close");

dialogPolyfill.registerDialog(modal);

// let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
let podlinks = document.querySelectorAll('a[href^="http://localhost:3000/"]');
podlinks.forEach(function(elem) {
  elem.addEventListener("click", () => {
    iframe.src = elem.getAttribute("href") + "/modal";
    event.preventDefault();
    modal.showModal();
  });
});

close.addEventListener("click", () => {
  modal.close("cancelled");
});

modal.addEventListener("cancel", () => {
  modal.close("cancelled");
});

// close when clicking on backdrop
modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.close("cancelled");
  }
});
