const number = document.querySelector(".number");
const button = document.querySelector("button")
const getRandomInt = (start, end) => {
    min = Math.ceil(start);
    max = Math.floor(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateRandomNum = () => {
    for (let i = 0; i < 6; i++) {
        const paragraph = document.createElement("p")
        paragraph.innerText = "0"
        paragraph.classList.add("random-num_paragraphs")
        number.append(paragraph)
    }

    const paragraphs = document.querySelectorAll(".random-num_paragraphs");
    button.addEventListener("click", () => {
        for (let i = 0; i < paragraphs.length; i++) {
            let randomNum = getRandomInt(1, 99);
            randomNum = (randomNum < 10) ? "0" + randomNum:randomNum;
            paragraphs[i].innerText = randomNum;
        }
    })
}

generateRandomNum()
