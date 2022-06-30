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

const badges = (href, override, excluded) => {
  // map over array of ojects and add property to each object
  let currentApps = apps.map(app => ({ 
    ...app, 
    href: (override[app.slug]) ? override[app.slug] : redirectURL(href, app.slug)
  }));

  let preferredapps = currentApps.filter(app => !excluded.includes(app.slug));
  for (let app of preferredapps) {
    let podlinkBadge = document.createElement("a");
    podlinkBadge.setAttribute("href", app.href);
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
  let cookie = getCookie("podlink")
  dialog();

  for (let elem of podlinks) {
    let excluded = elem.getAttribute("data-exclude") ? elem.getAttribute("data-exclude").replace(/\s/g, '').split(',') : [];
    let override = elem.getAttribute("data-override") ? JSON.parse(elem.getAttribute("data-override")) : {};
    
    if (cookie && !excluded.includes(cookie)) {
      let app = apps.find(app => app.slug === cookie);
      elem.href = redirectURL(elem.href, app.slug);
      elem.innerHTML = `Listen in ${app.name}`;
    }
    else {
      if (apps.length - excluded.length > 0) {
        elem.setAttribute("aria-label", "Select a podcast app to listen in");
        elem.setAttribute("aria-haspopup", "true");

        elem.addEventListener("click", event => {
          event.preventDefault();
          podlinkMain.innerHTML = "";
          badges(elem.href, override, excluded)

          podlinkModal.setAttribute("aria-modal", "true");
          podlinkModal.setAttribute("aria-hidden", "false");
          podlinkModal.showModal();
          podlinkModal.focus();
        });
      }
    }
  }
})();
