function buttonsEvent(buttonClickEvent) {
    let divObject = buttonClickEvent.target.parentNode;
    desc = divObject.querySelector('.desc');
    img = divObject.querySelector('img');
    button = divObject.querySelector('button');

    if (button.textContent == 'Подробнее') {
        button.textContent = 'Отмена';
        desc.style.display = 'block';
        img.style.display = 'none';
    } else {
        button.textContent = 'Подробнее';
        desc.style.display = 'none';
        img.style.display = 'block';
    };
};

const buttCollec = document.querySelectorAll('button');
buttCollec.forEach(function (item) {
    item.addEventListener('click', function (event) {
        buttonsEvent(event);
    });
});
