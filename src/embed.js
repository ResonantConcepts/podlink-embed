import Styles from './embed.css';
import diabolical from "./diabolical.js";

(function() {
  if (typeof HTMLDialogElement === 'function') {
    let isChecked = document.querySelector('#podlinkModalCheckbox').checked;

    let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
    podlinks.forEach(function(elem) {
      elem.addEventListener("click", event => {
        event.preventDefault();
        let podlink = new URL(elem.href);
        let badges = document.querySelectorAll('#podlinkModalGrid a');
        badges.forEach(function(badge) {
          let redirect = new URL(`${podlink.origin}/${ podlink.pathname.split('/')[1]}.${badge.id}`);
          let params = new URLSearchParams(podlink.searchParams);
          redirect.search = params.toString();
          badge.setAttribute("href", redirect.href);
          badge.addEventListener("click", event => {
            event.preventDefault();
            if (!isChecked) {
              let cookie = `podlink=${badge.id}`;
              document.cookie = cookie;
            }
          })
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
