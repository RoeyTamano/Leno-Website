document.addEventListener('DOMContentLoaded', function(){
    // Mobile Menu
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
    toggleButton.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });
    // Video Modal
    const modal = document.getElementById('video-modal');
    const videobutton = document.querySelector('.preview__video-button');
    const closebutton = document.querySelector('.modal__close-button');
    const videoplayer = document.getElementById('video-player')
    // Open modal when click
    videobutton.addEventListener('click', function(){
        // Show modal
        modal.style.display = 'block';
        // Replace the src attribute with the video URL
        videoplayer.src = 'https://www.youtube.com/watch?v=G8gjm2HALEM'
        // Close modal on closw button click
        closebutton.addEventListener('click', function(){
            modal.style.display = 'none';
            videoplayer.src = '';
        });
        // Close modal on outter click
        window.addEventListener('click', function(event){
            if (event.target == modal) {
                modal.style.display = 'none';
                videoplayer.src = '';
            }
        });
    });
});

// Navigation background on scroll
window.addEventListener('scroll', function(){
    const navbar = this.document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
})