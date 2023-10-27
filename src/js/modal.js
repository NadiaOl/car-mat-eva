const openModalBtn = document.querySelector(".heroBtn")
const openModalSection = document.querySelector(".priceLict")
const modal = document.querySelector('.backdrop')
const closeModal = document.querySelector('.modalClose')
const priceInModal = document.querySelector(".modalPrice")
const jsOrderType = document.querySelector(".jsOrderType")
const radioButtons = document.querySelectorAll(".jsRadioBtn");
const mobileMenuWrap = document.querySelector(".mobileMenuWrap")


openModalBtn.addEventListener("click", handlerOpenModal)
openModalSection.addEventListener("click", handlerOpenModal)
modal.addEventListener("click", handlerCloseModal)
closeModal.addEventListener("click", handlerCloseModal)
jsOrderType.addEventListener("click", handlerSelectPrice)

function handlerOpenModal (event) {
    if(event.target.localName === "button") {
        window.addEventListener("keydown", handlerCloseModalEsc);
        modal.classList.remove("isHidden")
        if(event.currentTarget.className === "priceLict") {
            const price = event.target.previousElementSibling.innerText
            const value = event.target.value
            const targetRadio = document.getElementById(value);
            priceInModal.innerHTML = `Вартість: ${price}`
            if (targetRadio) {
                targetRadio.checked = true;
            }
        }
        radioButtons.forEach((radio) => {
            if(radio.checked) {
                const value = radio.value
                const targetPrice = document.getElementById(value);
                priceInModal.innerHTML = `Вартість: ${targetPrice.textContent}`
            }
          }
          );
    }
}

function handlerSelectPrice (event) {
    if(event.target.localName === "input") {
        const value = event.target.value
        const targetPrice = document.getElementById(value);
        priceInModal.innerHTML = `Вартість: ${targetPrice.textContent}`
    }
}

function handlerCloseModal (event) {
    if(
        event.target.className === "backdrop" || 
        event.currentTarget.localName === "button" 
        ||         event.target.localName === "button"
         ) {
            modal.classList.add("isHidden")
            mobileMenuWrap.classList.add('hide')
            window.removeEventListener("keydown", handlerCloseModalEsc)
    }
}

function handlerCloseModalEsc (event) {
    if(event.key === "Escape") {
        modal.classList.add("isHidden")
        window.removeEventListener("keydown", handlerCloseModalEsc);
    }
}
