// create the dialog and append to the body
let podlinkModal = document.createElement("dialog");
podlinkModal.setAttribute("id", "podlinkModal");
document.body.appendChild(podlinkModal);

// create the header and append to the dialog
let podlinkModalHeader = document.createElement("div");
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

let platforms = [
{slug: "apple", name: "Apple Podcasts"},
{slug: "spotify", name: "Spotify"},
{slug: "google", name: "Google Podcasts"},
{slug: "overcast", name: "Overcast"},
{slug: "podcastaddict", name: "Podcast Addict"},
{slug: "pocketcasts", name: "Pocket Casts"},
{slug: "castbox", name: "Castbox"},
{slug: "stitcher", name: "Stitcher"},
// {slug: 'podbean',name: 'Podbean'},
{slug: "iheartradio", name: "iHeartRadio"},
{slug: "playerfm", name: "Player FM"},
// {slug: "podcastrepublic", name: "Podcast Republic"},
{slug: "castro", name: "Castro"},
{slug: "radiopublic", name: "RadioPublic"},
{slug: "rss", name: "RSS"}
]

platforms.forEach(element => {
let podlinkModalGridItem = document.createElement("a");
podlinkModalGridItem.setAttribute("href", "#");
podlinkModalGridItem.setAttribute("id", element.slug);
podlinkModalGrid.appendChild(podlinkModalGridItem);

let podlinkModalGridImage = document.createElement("img");
podlinkModalGridImage.setAttribute("src", `https://pod.link/assets/apps/${element.slug}.svg`);
podlinkModalGridImage.setAttribute("alt", element.name);
podlinkModalGridImage.setAttribute("id", "podlinkModalGridImage");
podlinkModalGridItem.appendChild(podlinkModalGridImage);
podlinkModalGridItem.appendChild(document.createTextNode(element.name));
});
