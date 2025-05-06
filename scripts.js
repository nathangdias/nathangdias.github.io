document.addEventListener('DOMContentLoaded', () => {
    // Get the slider and control buttons
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.slider-control:first-child');
    const nextButton = document.querySelector('.slider-control:last-child');
    const videos = slider.querySelectorAll('video');
    const descriptionDivs = document.querySelectorAll('.work-description > .slide-description');
    
    // Add click event for previous button
    prevButton.addEventListener('click', () => {
        const slides = slider.querySelectorAll('video');
        const scrollAmount = slides[0].offsetWidth + 24; // width + gap (1.5rem = 24px)
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    // Add click event for next button
    nextButton.addEventListener('click', () => {
        const slides = slider.querySelectorAll('video');
        const scrollAmount = slides[0].offsetWidth + 24; // width + gap (1.5rem = 24px)
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    
    // Update button states and manage video playback and descriptions
    function updateStates() {
        // Disable prev button if at start
        if (slider.scrollLeft <= 0) {
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'default';
        } else {
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
        }
        
        // Disable next button if at end
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'default';
        } else {
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
        }
        
        // First remove active class from all description divs
        descriptionDivs.forEach(div => {
            div.classList.remove('active');
        });
        
        // Play/pause videos and show corresponding description based on position
        videos.forEach((video, index) => {
            const rect = video.getBoundingClientRect();
            const sliderRect = slider.getBoundingClientRect();
            const videoCenter = rect.left + rect.width / 2;
            const sliderCenter = sliderRect.left + sliderRect.width / 2;
            const threshold = 100; // Tolerance in pixels
            
            if (Math.abs(videoCenter - sliderCenter) < threshold) {
                if (video.paused) video.play();
                
                // Show corresponding description div if it exists
                if (descriptionDivs[index]) {
                    descriptionDivs[index].classList.add('active');
                }
            } else {
                if (!video.paused) video.pause();
            }
        });
    }
    
    // Set initial states
    updateStates();
    
    // Update states when scrolling
    slider.addEventListener('scroll', updateStates);
});