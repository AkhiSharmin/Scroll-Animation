const boxes = document.querySelectorAll('.box'); // Select all elements with the class 'box'

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // Fix: use getBoundingClientRect().top instead of getBoundingClientRect().boxTop

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
