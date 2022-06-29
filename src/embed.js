import Styles from './embed.css';
import dialog from "./dialog.js";
import {getCookie, setCookie } from "./cookies.js";
import Apple from "./assets/apple.svg"
import Spotify from "./assets/spotify.svg"
import Google from "./assets/google.svg"
import Overcast from "./assets/overcast.svg"
import PodcastAddict from "./assets/podcastaddict.svg"
import PocketCasts from "./assets/pocketcasts.svg"
import Castbox from "./assets/castbox.svg"
import Stitcher from "./assets/stitcher.svg"
import Podbean from "./assets/podbean.svg"
import IHeartRadio from "./assets/iheartradio.svg"
import PlayerFM from "./assets/playerfm.svg"
import PodcastRepublic from "./assets/podcastrepublic.svg"
import Castro from "./assets/castro.svg"
import RadioPublic from "./assets/radiopublic.svg"
import RSS from "./assets/rss.svg"

let apps = [
  { slug: "apple", name: "Apple Podcasts", icon: Apple },
  { slug: "spotify", name: "Spotify", icon: Spotify },
  { slug: "google", name: "Google Podcasts", icon: Google },
  { slug: "overcast", name: "Overcast", icon: Overcast },
  { slug: "podcastaddict", name: "Podcast Addict", icon: PodcastAddict },
  { slug: "pocketcasts", name: "Pocket Casts", icon: PocketCasts },
  { slug: "castbox", name: "Castbox", icon: Castbox },
  { slug: "stitcher", name: "Stitcher", icon: Stitcher },
  // {slug: "podbean", name: "Podbean", icon: Podbean },
  { slug: "iheartradio", name: "iHeartRadio", icon: IHeartRadio },
  { slug: "playerfm", name: "Player FM", icon: PlayerFM },
  // {slug: "podcastrepublic", name: "Podcast Republic", icon: PodcastRepublic },
  { slug: "castro", name: "Castro", icon: Castro },
  { slug: "radiopublic", name: "RadioPublic", icon: RadioPublic },
  { slug: "rss", name: "RSS", icon: RSS }
]

const redirectURL = (href, app) => {
  let url = new URL(href);
  let redirect = new URL(`${url.origin}/${ url.pathname.split('/')[1]}.${app.toLowerCase()}`);
  let params = new URLSearchParams(href.searchParams);
  redirect.search = params.toString();
  return redirect.href;
}

const badges = (platforms, href) => {
  platforms.forEach(platform => {
    let podlinkModalLink = document.createElement("a");
    podlinkModalLink.setAttribute("href", redirectURL(href, platform.slug));
    podlinkModalLink.setAttribute("id", platform.slug);
    podlinkModalLink.setAttribute("aria-label", platform.name);
    podlinkModalGrid.appendChild(podlinkModalLink);

    let podlinkModalImage = document.createElement("img");
    podlinkModalImage.setAttribute("src", platform.icon);
    podlinkModalImage.setAttribute("alt", platform.name);
    podlinkModalImage.setAttribute("id", "podlinkModalImage");
    podlinkModalImage.setAttribute("aria-hidden", "true");
    podlinkModalLink.appendChild(podlinkModalImage);
    podlinkModalLink.appendChild(document.createTextNode(platform.name));

    podlinkModalLink.addEventListener("click", event => {
      let podlinkModalCheckbox = document.querySelector('#podlinkModalCheckbox');
      let isChecked = podlinkModalCheckbox.checked;

      if (!isChecked) {
        setCookie('podlink', platform.slug, {secure: true, 'max-age': (60 * 60 * 24 * 365)});
      }
    })
  });
}

(function() {
  let podlinks = document.querySelectorAll('a[href^="https://pod.link"]');
  let cookie = getCookie("podlink");
  if (cookie) {
    podlinks.forEach(function(elem) {
      let app = apps.find(app => app.slug === cookie);
      elem.href = redirectURL(elem.href, app.slug);
      elem.innerHTML = `Listen in ${app.name}`;
    });
  }
  else {
    dialog();
    podlinks.forEach(function(elem) {
      elem.addEventListener("click", event => {
        event.preventDefault();
        badges(apps, elem.href)
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
