const cyberGrid = document.querySelector('.cyber-grid');

const files = [

  {
    name: "P1 Execute following networking commands....SystemInfo",
    type: "file",
    path: "P1 Execute following networking commands....SystemInfo.pkt",
  },
  {
    name: "P2 Create a basic network of two computers",
    type: "file",
    path: "P2 Create a basic network of two computers.pkt",
  },
  {
    name: "P3 Create a basic network of one server & two computers",
    type: "file",
    path: "P3 Create a basic network of one server & two computers.pkt",
  },
  {
    name: "P4 Create a basic network of one server & two computers & two mobile devices",
    type: "file",
    path: "P4 Create a basic network of one server & two computers & two mobile devices.pkt",
  },
  {
    name: "P5 Create a network with three routes with RIPv1",
    type: "file",
    path: "P5 Create a network with three routes with RIPv1.pkt",
  },
  {
    name: "P6 Create a network with three routers with RIPv2",
    type: "file",
    path: "P6 Create a network with three routers with RIPv2.pkt",
  },
  {
    name: "P7 Create a network with three routers with OSPF",
    type: "file",
    path: "P7 Create a network with three routers with OSPF.pkt",
  },
  {
    name: "P8 Create a network with three routers with BGP",
    type: "file",
    path: "P8 Create a network with three routers with BGP.pkt",
  },
  {
    name: "P9 Create a wireless network of multiple PCs",
    type: "file",
    path: "P9 Create a wireless network of multiple PCs.pkt",
  }
]

files.forEach((file) => {

    const cyberCard = document.createElement('div');
    cyberCard.classList.add('cyber-card');

    const title = document.createElement('h3');
    title.innerText = file.name;

    cyberCard.appendChild(title);

    if (file.type === "youtube") {

        const iframe = document.createElement('iframe');

        iframe.src = `https://www.youtube.com/embed/${file.id}`;
        iframe.width = "100%";
        iframe.height = "200";
        iframe.allowFullscreen = true;
        iframe.frameBorder = "0";

        cyberCard.appendChild(iframe);

    }

    if (file.type === "file") {

        const link = document.createElement('a');
        link.href = file.path;
        link.innerText = "Open File";

        cyberCard.appendChild(link);
    }

    cyberGrid.appendChild(cyberCard);
});



