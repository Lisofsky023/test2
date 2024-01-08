document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.main__title');
    title.classList.add('slide-in-right');
    const animateListItems = () => {
        const listItems = document.querySelectorAll('.main__list .main__item');
        let delay = 300;

        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('tracking-in-expand-fwd-top');
            }, delay * index);
        });
    };
    title.addEventListener('animationend', () => {
        setTimeout(animateListItems, 300);
    });

    const listItems = document.querySelectorAll('.advantages__list .advantages__item');
    let observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observerCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                setTimeout(() => {
                    entry.target.classList.add('slide-in-bottom', 'animated');
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }, 300 * index);
            }
        });
    };

    let observer = new IntersectionObserver(observerCallback, observerOptions);
    listItems.forEach(item => observer.observe(item));
});



