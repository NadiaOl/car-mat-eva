const serviceId = "service_du5psi9"
const templateId = "template_227kgxf"

const form = document.querySelector(".form")
const popup = document.querySelector(".popup")
const popupError = document.querySelector(".popupError")
const closeBtn = document.querySelector(".jsClosePopup")

form.addEventListener('submit', handlerSendEmail)
closeBtn.addEventListener('click', handlerClose)

function handlerSendEmail(event) {

    event.preventDefault()
    const array = event.target.elements
    const kind = array.kind.value
    const edging = array.edging.value
    const material = array.material.value
    const car = `${array.auto.value} ${array.model.value}`;
    const comment = array.feedback.value

    let kindOfMat = ''

    switch(kind) {
        case "complectPrice":
            kindOfMat = "Повний комплект (передні та задні)"
            break;
        case "frontPrice":
            kindOfMat = "Передній комплект (водійський та пасажирський)"
            break;
        case "driverPrice":
            kindOfMat = "Один водійський"
            break;
        case "passangerPrice":
            kindOfMat = "Один пасажирський"
            break;
        case "trunkPrice":
            kindOfMat = "Багажник"
            break;
        default:
            kindOfMat = "Помилка, зателефонуйте покупцю"   

        }
        
        const templateParams = {
            name: array.username.value,
            phone: array.tel.value,
            message: `Замолення на ${kindOfMat}, колір килима: ${material}, колір канту: ${edging}, авто: ${car}. Коментар: ${comment}`
        };
        

    emailjs.send(serviceId, templateId, templateParams)
    .then(function(response) {
        openToast() 
        form.reset() 
    }, function(error) {
        openToastError()
        form.reset()
    });

}
                        
function openToast() {
    popup.classList.remove('hide');
    setTimeout(() => {
      popup.classList.add('hide'); 
    }, 5000);
  }

  function openToastError() {
    popupError.classList.remove('hide');
  }

  function handlerClose() {
    popupError.classList.add('hide')
  }