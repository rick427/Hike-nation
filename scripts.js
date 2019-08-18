const selectElements = element => document.querySelector(element);

//open menu on click
selectElements('.open').addEventListener('click', () => {
    selectElements('.nav-list').classList.add('active');
});

selectElements('.close').addEventListener('click', () => {
    selectElements('.nav-list').classList.remove('active');
});