import Styles from './modal.css';
import diabolical from "./diabolical.js";

(function() {
  if (typeof HTMLDialogElement === 'function') {
    let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
    podlinks.forEach(function(elem) {
      elem.addEventListener("click", event => {
        event.preventDefault();
        let href = new URL(elem.getAttribute("href"));
        let badges = document.querySelectorAll('#podlinkModalGrid a');
        badges.forEach(function(badge) {
          badge.setAttribute("href", `${href.origin}/${href.pathname.split('/')[1]}.${badge.getAttribute("id")}`);
        }
        );
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
