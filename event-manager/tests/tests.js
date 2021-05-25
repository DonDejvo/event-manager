function hi() {
    console.log('hi');
}

function bye() {
    console.log('bye');
}


let button = document.querySelector('#b');

_$(button).on(['click', 'mousemove'], [hi, () => {}])
    .off('mousemove')
    .on('mousedown', hi);