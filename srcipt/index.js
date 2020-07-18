let toggle = document.querySelector('#toggle'), 
    sidebar = document.querySelector('#sidebar');

toggle.addEventListener('click', function(e) {
    e.preventDefault();
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    } else {
        sidebar.classList.add('hidden');
    }
});