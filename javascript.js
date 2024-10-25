let isSidebarOpen = false; // Yeni değişken

function checkWidth() {
    const iconbars = document.querySelector('.iconbars');
    if (window.innerWidth >= 320 && window.innerWidth <= 1025) { 
        iconbars.style.display = 'block'; 
    } else {
        iconbars.style.display = 'none'; 
    }
}

const bar = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const closingButton = document.querySelector('.fa-xmark');

bar.addEventListener('click', () => {
    if (!isSidebarOpen) { // Yan menü açık değilse
        sidebar.classList.add('showSidebar'); 
        isSidebarOpen = true; // Durumu güncelle
    }
});

closingButton.addEventListener('click', () => {
    sidebar.classList.remove('showSidebar'); 
    isSidebarOpen = false; // Durumu güncelle
});

window.onload = checkWidth;
window.onresize = checkWidth;