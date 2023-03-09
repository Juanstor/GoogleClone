let linkProfile = document.querySelector('.profileImage');
let linkBoton2 = document.getElementById('secondButtom');

linkProfile.addEventListener('click', function() {
    window.location.href = 'https://accounts.google.com/';
});

linkBoton2.addEventListener('click', function() {
    window.location.href = 'https://github.com/Juanstor';
});

function searchGoogle() {
    let searchText = document.getElementById('searchTerm').value;
    window.location.href = 'https://www.google.com/search?q=' + searchText;
}
