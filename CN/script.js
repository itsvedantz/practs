const cyberGrid = document.querySelector('.cyber-grid');

const files = [

    {
        name: "MTOM",
        type: "P1 Execute following networking commands....SystemInfo",
        path: "P1 Execute following networking commands....SystemInfo.pkt",
    },

        {
        name: "Soap 10 slips",
        type: "file",
        path: "soapslips.pdf"
    },
    
    {
        name: "Curd",
        type: "file",
        path: "Curd.txt"
    }

];

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



