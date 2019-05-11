var podlinkModal = document.createElement("dialog");
podlinkModal.setAttribute("id", "podlinkModal");
document.body.appendChild(podlinkModal);

var podlinkModalHeader = document.createElement("div");
podlinkModalHeader.setAttribute("id", "podlinkModalHeader");
podlinkModal.appendChild(podlinkModalHeader);

    var podlinkModalH2 = document.createElement("h2");
    podlinkModalH2.appendChild(document.createTextNode("Listen In..."));
    podlinkModalHeader.appendChild(podlinkModalH2);

    var podlinkModalClose = document.createElement("button");
    podlinkModalClose.setAttribute("type", "button");
    podlinkModalClose.setAttribute("id", "podlinkModalClose");
    podlinkModalClose.appendChild(document.createTextNode("Close"));
    podlinkModalHeader.appendChild(podlinkModalClose);

var podlinkModalBody = document.createElement("div");
podlinkModalBody.setAttribute("id", "podlinkModalBody");
podlinkModal.appendChild(podlinkModalBody);

    var podlinkModalIframe = document.createElement("iframe");
    podlinkModalIframe.setAttribute("id", "podlinkModalIframe");
    podlinkModalIframe.setAttribute("frameborder", "none");
    podlinkModalBody.appendChild(podlinkModalIframe);