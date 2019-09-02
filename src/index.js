import Styles from './modal.css';
import diabolical from "./diabolical.js";

(function() {
  if (typeof HTMLDialogElement === 'function') {
    let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
    podlinks.forEach(function(elem) {
      const href = new URL(elem.getAttribute("href"));
      const dataValue = href.origin + href.pathname + "/modal" + href.search;
      elem.setAttribute('data-modal', dataValue);

      elem.addEventListener("click", () => {
        podlinkModalIframe.src = elem.getAttribute("data-modal");
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
  }
})();
