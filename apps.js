// MODAL INSTRUCTIONS

// template_yap15t8
// service_n89uqzu
// 0epMskdZt5pVrq72D


// THIS IS THE CODE YOU WOULD USE TO ACTUALLY MAKE THE EMAIL WORK

// function contact(event) {
//     event.preventDefault();
//     const loading = document.querySelector(".modal__overlay--loading");
//     const success = document.querySelector(".modal__overlay--success");
//     loading.classList += " modal__overlay--visible"
//     emailjs
//         .sendForm (
//             'service_n89uqzu',
//             'template_yap15t8',
//             event.target,
//             0epMskdZt5pVrq72D
//         ).then(() => {
//             loading.classList.remove('modal__overlay--visible');
//             success.classList += " modal__overlay--visible";
//         }).catch(() => {
//             loading.classList.remove("modal__overlay--visible");
//             alert(
//                 "The email service is temporarily unavailable. Please contact me directly on relkasheef@gmail.com"
//             );
//         })
//     }

    function contact(event) {
        event.preventDefault();
        const loading = document.querySelector(".modal__overlay--loading");
        const success = document.querySelector(".modal__overlay--success");
        loading.classList += " modal__overlay--visible"
        setTimeout(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList += " modal__overlay--visible";
            console.log('it worked')
        }, 500);
     }
     
// TOGGLING INSTRUCTIONS


let isModalOpen = false;
function toggleModal(){
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList+= " modal--open"
}



let contrastToggle = false;
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

// BACKGROUND EFFECTS INSTRUCTIONS

const scaleFactor = 1/20
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i ){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y *boolInt}px)`
    }
}