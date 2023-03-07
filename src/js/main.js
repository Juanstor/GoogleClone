let linkProfile = document.querySelector('.profileImage');
let linkSuerte = document.getElementById('secondButtom');
let searchText = document.getElementById("searchTerm").value;

linkProfile.addEventListener('click', function() {
    window.location.href = 'https://accounts.google.com/';
});

linkSuerte.addEventListener('click', function() {
    window.location.href = 'https://github.com/Juanstor';
});

function searchGoogle() {
    window.location.href = "https://www.google.com/search?q=" + searchText;
}