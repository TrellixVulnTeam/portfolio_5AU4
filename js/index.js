import hamburguerMenu from "./modules/hamburger_menu.js";
import portfolioFilter from "./modules/portfolio_filter.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    portfolioFilter();
    hamburguerMenu(".header__btn-responsive", ".header__navigation", ".header__link");

});