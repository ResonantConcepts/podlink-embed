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

function dialog() {
  // create the dialog and append to the body
  let podlinkModal = document.createElement("dialog");
  podlinkModal.setAttribute("id", "podlinkModal");
  document.body.appendChild(podlinkModal);

  // create the header and append to the dialog
  let podlinkModalHeader = document.createElement("header");
  podlinkModalHeader.setAttribute("id", "podlinkModalHeader");
  podlinkModal.appendChild(podlinkModalHeader);

  // create the heading and append to the header 
  let podlinkModalH2 = document.createElement("h2");
  podlinkModalH2.innerHTML = "Listen On&#8230;";
  podlinkModalHeader.appendChild(podlinkModalH2);

  // create the close button and append to the header 
  let podlinkModalClose = document.createElement("button");
  podlinkModalClose.setAttribute("type", "button");
  podlinkModalClose.setAttribute("id", "podlinkModalClose");
  podlinkModalClose.setAttribute("aria-label", "Close");
  podlinkModalClose.innerHTML = "&#10005;";
  podlinkModalHeader.appendChild(podlinkModalClose);

  //create the Grid and append to the dialog
  let podlinkModalGrid = document.createElement("div");
  podlinkModalGrid.setAttribute("id", "podlinkModalGrid");
  podlinkModal.appendChild(podlinkModalGrid);

  // create the Footer and append to the dialog
  let podlinkModalFooter = document.createElement("footer");
  podlinkModalFooter.setAttribute("id", "podlinkModalFooter");
  podlinkModal.appendChild(podlinkModalFooter);

  let podlinkModalCheckbox = document.createElement("input");
  podlinkModalCheckbox.setAttribute("type", "checkbox");
  podlinkModalCheckbox.setAttribute("id", "podlinkModalCheckbox");
  podlinkModalCheckbox.setAttribute("checked", "checked");
  podlinkModalFooter.appendChild(podlinkModalCheckbox);

  let podlinkModalLabel = document.createElement("label");
  podlinkModalLabel.setAttribute("for", "podlinkModalCheckbox");
  podlinkModalLabel.innerHTML = "Ask me which app to use every time";
  podlinkModalFooter.appendChild(podlinkModalLabel);

  let platforms = [
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

  platforms.forEach(element => {
    let podlinkModalLink = document.createElement("a");
    podlinkModalLink.setAttribute("href", "#");
    podlinkModalLink.setAttribute("id", element.slug);
    podlinkModalGrid.appendChild(podlinkModalLink);

    let podlinkModalImage = document.createElement("img");
    podlinkModalImage.setAttribute("src", element.icon);
    podlinkModalImage.setAttribute("alt", element.name);
    podlinkModalImage.setAttribute("id", "podlinkModalImage");
    podlinkModalImage.setAttribute("aria-hidden", "true");
    podlinkModalLink.appendChild(podlinkModalImage);
    podlinkModalLink.appendChild(document.createTextNode(element.name));
  });
}

export default dialog;
