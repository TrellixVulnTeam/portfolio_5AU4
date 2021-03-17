import copyMail from "./modules/copy_mail.js";
import hamburguerMenu from "./modules/hamburger_menu.js";
import modal from "./modules/modal.js";
import portfolioFilter from "./modules/portfolio_filter.js";
import tabBar from "./modules/tab_bar.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    portfolioFilter();
    hamburguerMenu(".header__btn-responsive", ".header__menu", ".header__link");
    tabBar(".header__item");
    modal();
    copyMail(".copy-button", "#tooltip");

});
