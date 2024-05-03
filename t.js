document.getElementById('searchButton').addEventListener('click', function() {
    let searchTerm = document.getElementById('searchInput').value;

    fetch(`https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`)
        .then(response => response.json())
        .then(data => {
            
            displayResults(data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
});

function displayResults(results) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
}
