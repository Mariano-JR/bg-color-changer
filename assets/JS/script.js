let body = document.querySelector("body"),
    span = document.querySelector("span"),
    p = document.querySelector("p"),
    button = document.querySelector("button");

const colorChange = () => {
    let color = '#';

    const hex = () => {
        const letters = '0123456789ABCDEF';

        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        body.style.backgroundColor = color;
        span.innerHTML = color;
    };

    const rgb = () => {
        const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
        
        p.innerHTML = `RGB (${r}, ${g}, ${b})`;
    };
    
    hex();
    rgb();
};

button.addEventListener("click", () => {
    colorChange();
});

colorChange();