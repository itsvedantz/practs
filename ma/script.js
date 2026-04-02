const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [
  
  { name: '5) Write a android program that demonstrate option menu', path: '5) Write a android program that demonstrate option menu.txt' },
  { name: '4) Write an Android program to demonstrate activity life cycle, activity methods', path: '4) Write an Android program to demonstrate activity life cycle, activity methods.txt' },
  { name: "3)C) Table layout-  Create a android application to design screen's using different layout and UI including button, text, text view, radio button etc", path: "3)C)Createaandroidapplicationto designscreensusingdifferentlayoutandUI including button, text.txt" },
  { name: "3)B) Linear Layout(vertical)=  Create a android application to design screen's using different layout and UI including button, text, text view, radio button etc", path: "3)B)Create a android application to design screen’s using different layout and UI including button, text.txt" },
  { name: "3)A) Relative Layout = Create a android application to design screen's using different layout and UI including button, text, text view, radio button etc", path: "3)A)Creat a andro app to design screen using diff layout and UI inc button, text, text view etc.txt" },
  { name: '2) Create an android project using Android Studios for programming resources, Android resources like color, strength, theme, drawable, dimensions, image', path: '2) Create an android project using Android Studios for programming resources, Android resources like color.txt' },
  { name: '1) Create a android project using Android Studios to write simple hello world program', path: '1) Create a android project using Android Studios to write simple hello world program.txt' }
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
