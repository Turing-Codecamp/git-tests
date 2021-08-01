const resultElem = document.querySelector('#result');
const maxValueInputElem = document.querySelector('#max_value_input');
const buttonElem = document.querySelector('#generate_button');

const generateRandomNumber = (maxValue) => Math.round(maxValue * Math.random());

buttonElem.addEventListener("click", () => {
    const result = generateRandomNumber(maxValueInputElem.value);
    resultElem.textContent = `Result: ${result}`;
});
