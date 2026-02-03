function nextPage() {
    window.location.href = "index2.html";
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const isMobile = window.innerWidth <= 768;
    
    // On mobile, remove blink animation and move button
    if (isMobile) {
        noButton.style.animation = 'none';
        var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = x + 'px';
        noButton.style.top = y + 'px';
        return;
    }
    
    // On desktop, normal movement
    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}

// Setup event listeners for better mobile support
document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile || window.innerWidth <= 768) {
        // On mobile, make the button clickable with visual feedback
        noButton.style.position = 'relative';
        noButton.addEventListener('click', moveButton);
    } else {
        // On desktop, use hover
        noButton.addEventListener('mouseover', moveButton);
    }
});