document.addEventListener('DOMContentLoaded', () => {
    let h1=document.getElementsByTagName('h1')[0];
    h1.style.color='red';
    h1.innerText += ` I'm like programmed`;
    let timer;
    const startText = h1.innerHTML;
    setInterval(() => {
        timer = new Date().toLocaleTimeString();
        h1.innerHTML = `${startText}<div>${timer}</div>`
    }, 1000)

})