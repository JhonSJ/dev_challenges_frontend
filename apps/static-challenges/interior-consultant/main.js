const header__action__button = document.getElementById("header__action__button");
const header__wrapper__links = document.getElementById("header__wrapper__links");

let navigation_state = true;

header__action__button.addEventListener("click", () => {
    if (navigation_state) {
        // Change state
        navigation_state = false;
        
        // Change button icon
        header__action__button.classList.add('hide');
        header__action__button.classList.remove('show');
        
        // Hide links
        header__wrapper__links.classList.remove('hide');
        header__wrapper__links.classList.add('show');

    } else {
        // Change state
        navigation_state = true;
        
        // Change button icon
        header__action__button.classList.add('show');
        header__action__button.classList.remove('hide');
        
        // Show links
        header__wrapper__links.classList.add('hide');
        header__wrapper__links.classList.remove('show');

    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        header__action__button.classList.remove('hide');
        header__action__button.classList.add('show');

        header__wrapper__links.classList.remove('show');
        header__wrapper__links.classList.remove('hide');
        
        navigation_state = true;
    }
});