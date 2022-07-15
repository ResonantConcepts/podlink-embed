import './index.css';

//add an emoji favicon to avoid console error
let favicon = document.createElement("link")
favicon.setAttribute("rel", "icon")
favicon.setAttribute("href", "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔗</text></svg>")
document.head.appendChild(favicon)

// add button to page
let anchor = document.createElement("a");
anchor.href = "https://pod.link/1624978968?at=1000lPBj";
anchor.innerHTML = "Listen Now";
anchor.setAttribute("data-exclude", "stitcher");
anchor.setAttribute("data-trigger", "true");
anchor.setAttribute("data-override", JSON.stringify({
  "overcast":"overcast://x-callback-url/add?url=https://feeds.megaphone.fm/bth"
}));
document.body.appendChild(anchor);
