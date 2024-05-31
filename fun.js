
document.addEventListener('DOMContentLoaded', (event) => {

    const changeTextButton = document.getElementById('changeTextButton');
    const changeColorButton = document.getElementById('changeColorButton');
    const addItemButton = document.getElementById('addItemButton');
    const content = document.getElementById('content');
    const itemList = document.getElementById('itemList');

    changeTextButton.addEventListener('click', () => {
        content.querySelector('h1').textContent = 'Text has been changed!';
    });

    changeColorButton.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        content.style.backgroundColor = randomColor;
    });

    addItemButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        itemList.appendChild(newItem);
    });
});
