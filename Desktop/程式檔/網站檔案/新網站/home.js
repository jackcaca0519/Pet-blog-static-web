const textContent = document.querySelectorAll(".text");
for (let text of textContent) {
    text.addEventListener('mouseenter', () => {
        text.children[0].children[0].classList.toggle('iconAnim');
    })
}
for (let text of textContent) {
    text.addEventListener('mouseleave', () => {
        text.children[0].children[0].classList.toggle('iconAnim');
    })
}

const userId = document.querySelector('#uid');
const logIn = document.querySelector('#logIn');
const userName = document.querySelector('#userName');
logIn.addEventListener('click', () => {
    userName.innerText = `Welcome, ${userId.value}`;
    userName.style.display = 'inline';
    userName.nextElementSibling.style.display = 'none';
})