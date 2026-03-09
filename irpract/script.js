const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [
    { name: 'inverted index, question-answering system ', path: 'Slip_1.txt' },
    { name: 'inverted index 2doc, calculate precision', path: 'Slip_2.txt' },
    { name: 'spelling correction, Boolean retrieval', path: 'Slip_3.txt' },
    { name: 'web crawler, Handle challenges such as robots.txt', path: 'Slip_4.txt' },
    { name: 'simplified web graph, text summarization', path: 'Slip_5.txt' },
    { name: 'cosine similarity, question-answering system', path: 'Slip_6.txt' },
    { name: 'text summarization,  Boolean retrieval model', path: 'Slip_7.txt' },
    { name: 'Vector Space Model, Cosine Similarity', path: 'Slip_8.txt' },
    { name: 'Calculate Precision, Evaluation Toolkit', path: 'Slip_9.txt' },
    { name: 'Naïve Bayes, Classification using SVM', path: 'Slip_10.txt' },
    { name: 'Question Answering System, Calculate Precision', path: 'Slip_11.txt' },
    { name: 'PageRank Algorithm, Calculate Precision', path: 'Slip_12.txt' },
    { name: 'Vector Space Model, Clustering Algorithm', path: 'Slip_13.txt' },
    { name: 'Clustering Algorithm, Binary Classification', path: 'Slip_14.txt' },
    { name: 'Inverted Index Construction, Simple Document Retrieval', path: 'Slip_15.txt' },
    { name: 'Vector Space Model with TF-IDF, Clustering Algorithm', path: 'Slip_16.txt' },
    { name: 'PageRank Algorithm, Boolean Retrieval Model', path: 'Slip_17.txt' },
    { name: 'Question Answering System, Text Summarization', path: 'Slip_18.txt' },
    { name: 'IR manualf', path: 'IR manual.pdf' },

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





































