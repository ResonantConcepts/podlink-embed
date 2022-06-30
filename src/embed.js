import Styles from './embed.css';
import dialog from "./dialog.js";
import {getCookie, setCookie } from "./cookies.js";
import apps from "./apps.js";

const redirectURL = (href, app) => {
  let url = new URL(href);
  let redirect = new URL(`${url.origin}/${ url.pathname.split('/')[1]}.${app.toLowerCase()}`);
  let params = new URLSearchParams(href.searchParams);
  redirect.search = params.toString();
  return redirect.href;
}

const badges = (apps, href) => {
  for (let app of apps) {
    let podlinkBadge = document.createElement("a");
    podlinkBadge.setAttribute("href", redirectURL(href, app.slug));
    podlinkBadge.setAttribute("class", "podlinkBadge");
    podlinkBadge.setAttribute("aria-label", app.name);
    podlinkMain.appendChild(podlinkBadge);

    let podlinkIcon = document.createElement("img");
    podlinkIcon.setAttribute("src", app.icon);
    podlinkIcon.setAttribute("alt", app.name);
    podlinkIcon.setAttribute("id", "podlinkIcon");
    podlinkIcon.setAttribute("aria-hidden", "true");
    podlinkBadge.appendChild(podlinkIcon);
    podlinkBadge.appendChild(document.createTextNode(app.name));

    podlinkBadge.addEventListener("click", event => {
      let podlinkSwitch = document.querySelector('#podlinkSwitch');
      let isChecked = podlinkSwitch.checked;

      if (!isChecked) {
        setCookie('podlink', app.slug, {secure: true, 'max-age': (60 * 60 * 24 * 365)});
      }
    })
  };
}

(function() {
  let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
  let cookie = getCookie("podlink");
  if (cookie) {
    for (let elem of podlinks) {
      let app = apps.find(app => app.slug === cookie);
      elem.href = redirectURL(elem.href, app.slug);
      elem.innerHTML = `Listen in ${app.name}`;
    };
  }
  else {
    dialog();
    for (let elem of podlinks) {
      elem.setAttribute("aria-label", "Select a podcast app to listen in");
      elem.setAttribute("aria-haspopup", "true");

      elem.addEventListener("click", event => {
        event.preventDefault();
        podlinkModal.setAttribute("aria-modal", "true");
        badges(apps, elem.href)
        podlinkModal.showModal();
      });
    };
  }
})();
