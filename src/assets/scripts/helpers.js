/**
 * Shuffle array. Changing incoming array
 * 
 * @param {*Array} array 
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function smoothTextAppearance(elem, time = 30) {
    let elemInner = elem.innerHTML;
    let elemTimeoutcount = elemInner.length;
    elem.innerHTML = elem.innerHTML.replace(/./g, '<span class="hide-letter">$&</span>');

    [].slice.call(elem.children).forEach((el, i) => {
        setTimeout(function() {
            el.classList.add('show-letter')
        }, time * i);
    });

    setTimeout(() => {
        elem.innerHTML = elemInner;
    }, time * elemTimeoutcount)
}

export { shuffleArray, smoothTextAppearance }