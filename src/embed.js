import Styles from './embed.css';
import dialog from "./dialog.js";
import {getCookie, setCookie } from "./cookies.js";

(function() {
  const redirectURL = (href, app) => {
    let url = new URL(href);
    let redirect = new URL(`${url.origin}/${ url.pathname.split('/')[1]}.${app}`);
    let params = new URLSearchParams(href.searchParams);
    redirect.search = params.toString();
    return redirect.href;
  }

  let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
  let cookie = getCookie("podlink");
  if (cookie) {
    podlinks.forEach(function(podlink) {
      podlink.href = redirectURL(podlink.href, cookie);
      podlink.setAttribute("data-cookie", cookie);
    });
  }
  else {
    dialog();
    podlinks.forEach(function(elem) {
      elem.addEventListener("click", event => {
        event.preventDefault();
        let podlink = new URL(elem.href);
        let badges = document.querySelectorAll('#podlinkModalGrid a');
        badges.forEach(function(badge) {
          badge.setAttribute("href", redirectURL(podlink, badge.id));
          badge.addEventListener("click", event => {
            let podlinkModalCheckbox = document.querySelector('#podlinkModalCheckbox');
            let isChecked = podlinkModalCheckbox.checked;

            if (!isChecked) {
              setCookie('podlink', badge.id, {secure: true, 'max-age': (60 * 60 * 24 * 365)});
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
