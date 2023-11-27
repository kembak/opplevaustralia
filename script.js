// javascript kode for enkel søkeboks

document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const searchField = document.getElementById('searchField');

    searchButton.addEventListener('click', function () {
        // Toggle the visibility of the search field
        searchField.style.display = (searchField.style.display === 'none' || searchField.style.display === '') ? 'flex' : 'none';
    });
});
