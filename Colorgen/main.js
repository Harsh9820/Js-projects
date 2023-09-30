const getColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let rColor = '#' + n.slice(0,6);
    document.getElementById("text").innerText = rColor;
    document.body.style.backgroundColor = rColor;
}