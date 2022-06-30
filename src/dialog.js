const dialog = () => {
  // create the dialog and append to the body
  let podlinkModal = document.createElement("dialog");
  podlinkModal.setAttribute("id", "podlinkModal");
  podlinkModal.setAttribute("aria-labelledby", "#podlinkHeading");
  podlinkModal.setAttribute("aria-modal", "false");
  document.body.appendChild(podlinkModal);

  // create the header and append to the dialog
  let podlinkHeader = document.createElement("header");
  podlinkHeader.setAttribute("id", "podlinkHeader");
  podlinkModal.appendChild(podlinkHeader);

  // create the heading and append to the header 
  let podlinkHeading = document.createElement("h2");
  podlinkHeading.setAttribute("id", "podlinkHeading");
  podlinkHeading.innerHTML = "Listen On&#8230;";
  podlinkHeader.appendChild(podlinkHeading);

  // create the close button and append to the header 
  let podlinkClose = document.createElement("button");
  podlinkClose.setAttribute("type", "button");
  podlinkClose.setAttribute("id", "podlinkClose");
  podlinkClose.setAttribute("aria-label", "Close");
  podlinkClose.innerHTML = "&#10005;";
  podlinkHeader.appendChild(podlinkClose);

  //create the Grid and append to the dialog
  let podlinkMain = document.createElement("main");
  podlinkMain.setAttribute("id", "podlinkMain");
  podlinkModal.appendChild(podlinkMain);

  // create the Footer and append to the dialog
  let podlinkFooter = document.createElement("footer");
  podlinkFooter.setAttribute("id", "podlinkFooter");
  podlinkModal.appendChild(podlinkFooter);

  // create the switch and append to the footer
  let podlinkSwitch = document.createElement("input");
  podlinkSwitch.setAttribute("type", "checkbox");
  podlinkSwitch.setAttribute("id", "podlinkSwitch");
  podlinkSwitch.setAttribute("checked", "checked");
  podlinkFooter.appendChild(podlinkSwitch);

  // create the label and append to the footer
  let podlinkSwitchLabel = document.createElement("label");
  podlinkSwitchLabel.setAttribute("for", "podlinkSwitch");
  podlinkSwitchLabel.innerHTML = "Ask me which app to use every time";
  podlinkFooter.appendChild(podlinkSwitchLabel);

  podlinkClose.addEventListener("click", () => {
    podlinkModal.setAttribute("aria-modal", "false");
    podlinkModal.close("cancelled");
  });

  podlinkModal.addEventListener("cancel", () => {
    podlinkModal.setAttribute("aria-modal", "false");
    podlinkModal.close("cancelled");
  });

  // close when clicking on backdrop
  podlinkModal.addEventListener("click", event => {
    if (event.target === podlinkModal) {
      podlinkModal.setAttribute("aria-modal", "false");
      podlinkModal.close("cancelled");
    }
  });
}

export default dialog;
