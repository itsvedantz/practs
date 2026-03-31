const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [
  { name: 'P1 Execute following networking commands....SystemInfo', path: 'P1 Execute following networking commands....SystemInfo.pkt' },
  { name: 'P2 Create a basic network of two computers', path: 'P2 Create a basic network of two computers.pkt' },
  { name: 'P3 Create a basic network of one server & two computers', path: 'P3 Create a basic network of one server & two computers.pkt' },
  { name: 'P4 Create a basic network of one server & two computers & two mobile devices', path: 'P4 Create a basic network of one server & two computers & two mobile devices.pkt' },
  { name: 'P5 Create a network with three routes with RIPv1', path: 'P5 Create a network with three routes with RIPv1.pkt' },
  { name: 'P6 Create a network with three routers with RIPv2', path: 'P6 Create a network with three routers with RIPv2.pkt' },
  { name: 'P7 Create a network with three routers with OSPF', path: 'P7 Create a network with three routers with OSPF.pkt' },
  { name: 'P8 Create a network with three routers with BGP', path: 'P8 Create a network with three routers with BGP.pkt' },
  { name: 'P9 Create a wireless network of multiple PCs', path: 'P9 Create a wireless network of multiple PCs.pkt' },
  { name: 'P2 Create a basic network of two computers', path: 'P2 Create a basic network of two computers.txt' },
  { name: 'P3 Create a basic network of one server & two computers', path: 'P3 Create a basic network of one server & two computers.txt' },
  { name: 'P4 Create a basic network of one server & two computers & two mobile devices', path: 'P4 Create a basic network of one server & two computers & two mobile devices.txt' },
  { name: 'P5 Create a network with three routes with RIPv1', path: 'P5 Create a network with three routes with RIPv1.txt' },
  { name: 'P6 Create a network with three routers with RIPv2', path: 'P6 Create a network with three routers with RIPv2.txt' },
  { name: 'P7 Create a network with three routers with OSPF', path: 'P7 Create a network with three routers with OSPF.txt' },
  { name: 'P8 Create a network with three routers with BGP', path: 'P8 Create a network with three routers with BGP.txt' },
  { name: 'P9 Create a wireless network of multiple PCs', path: 'P9 Create a wireless network of multiple PCs.txt' }

    // Add more file paths as needed
];

pdfFiles.forEach((file) => {
    const cyberCard = document.createElement('div');
    cyberCard.classList.add('cyber-card');

    const link = document.createElement('a');
    link.href = file.path;
    link.textContent = file.name;
    link.classList.add('file-name');

    const fileSize = document.createElement('p');
    fileSize.classList.add('file-size');
    fileSize.textContent = file.size;

    cyberCard.appendChild(link);
    cyberCard.appendChild(fileSize);

    cyberGrid.appendChild(cyberCard);
});



































