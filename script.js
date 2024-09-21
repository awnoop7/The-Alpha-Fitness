

    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.p_contain');

        container.addEventListener('mousemove', (event) => {
            const containerWidth = container.offsetWidth;
            const mouseX = event.clientX - container.getBoundingClientRect().left;
            const scrollPercentage = mouseX / containerWidth; // Calculate percentage of mouse position
            const scrollAmount = (container.scrollWidth - containerWidth) * scrollPercentage; // Adjust the scroll range
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth' // Smooth scrolling effect
            });
        });
    });


