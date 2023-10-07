const h1 = document.querySelector('h1')
function calculateTemp(event) {
    event.preventDefault();
    const TempF =event.target.TempF.value;
    const TempC =(TempF-32) * 5/9
    const h2 =document.querySelector('h2')
    h2.innerText =TempF + "farenheit is" + TempC + "in celcius"

}
const form = document.querySelector('form');
form.addEventListener('submit',calculateTemp);