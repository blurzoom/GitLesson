document.addEventListener('DOMContentLoaded', () => {
    let h1=document.getElementsByTagName('h1')[0];
    h1.style.color='red';
    h1.innerText += ` I'm like programmed`;
    let timer = 0
    const startText = h1.innerHTML;
    setInterval(() => {
        timer++;
        h1.innerHTML = `${startText}<div>${timer}</div>`
    }, 1000)

})