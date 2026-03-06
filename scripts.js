const cyberGrid = document.querySelector('.cyber-grid');

const files = [

    {
        name: "Creating SOAP Web Service using Java",
        type: "youtube",
        id: "hM1xBlNaZv0"
    },

    {
        name: "Creating and Consuming Java Web Service",
        type: "youtube",
        id: "JL5clLdulrE"
    },

    {
        name: "Creating Web Service in Java and Consuming in .Net",
        type: "youtube",
        id: "fjpCtcJ9oog"
    },

        
    {
        name: "CRUD Operations",
        type: "youtube",
        id: "l-Ry3BxiNh4"
    },

       
    {
        name: "Download Image From Server Using MTOM",
        type: "youtube",
        id: "FhOLswDbfSQ"
    },

            
    {
        name: "google map",
        type: "youtube",
        id: "01krzNSRK-o"
    },

    {
        name: "MTOM",
        type: "file",
        path: "mtom.pdf",
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



