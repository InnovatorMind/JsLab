// Raw Scroll: Fires constantly as you scroll.
// Debounced Scroll: Fires only after you stop scrolling for 500ms.
// Throttled Scroll: Fires every 300ms during scrolling.

const log = document.getElementById('log');
const scrollBox = document.getElementById('scrollBox');

function logEvent(type) {
    const time = new Date().toLocaleTimeString();
    log.textContent += `[${time}] ${type}\n`;
    log.scrollTop = log.scrollHeight;
}

// Raw scroll event (fires constantly)
scrollBox.addEventListener('scroll', () => {
    logEvent('Raw Scroll');
});

// Debounce
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

scrollBox.addEventListener('scroll', debounce(() => {
    logEvent('Debounced Scroll');
}, 500));

// Throttle
function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

scrollBox.addEventListener('scroll', throttle(() => {
    logEvent('Throttled Scroll');
}, 300));