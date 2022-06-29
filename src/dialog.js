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

}

export default dialog;
