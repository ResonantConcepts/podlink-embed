import Styles from './modal.css';
import dialogPolyfill from "dialog-polyfill";
import diabolical from "./diabolical.js";

(function() {
  dialogPolyfill.registerDialog(podlinkModal);

  let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
  podlinks.forEach(function(elem) {
    elem.addEventListener("click", () => {
      podlinkModalIframe.src = elem.getAttribute("href") + "/modal";
      event.preventDefault();
      podlinkModal.showModal();
    });
  });

  podlinkModalClose.addEventListener("click", () => {
    podlinkModal.close("cancelled");
  });

  podlinkModal.addEventListener("cancel", () => {
    podlinkModal.close("cancelled");
  });

  // close when clicking on backdrop
  podlinkModal.addEventListener("click", event => {
    if (event.target === podlinkModal) {
      podlinkModal.close("cancelled");
    }
  });


})();
