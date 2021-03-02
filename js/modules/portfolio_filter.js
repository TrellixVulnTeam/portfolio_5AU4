const d = document;

export default function portfolioFilter() {

    const btn     = d.querySelectorAll(".section-portfolio__btn-container button"),
          project = d.querySelectorAll(".card");

    btn.forEach(el =>{
        el.addEventListener("click", (e) => {
            for(let i = 0; i < btn.length; i++){
                btn[i].classList.remove("filter-active");
            }
            el.classList.add("filter-active");
        
            //show project
            project.forEach(show => {
                show.style.display = "none";
                let projects = el.textContent.toLowerCase();

                if(show.getAttribute("data-att") === projects || projects === "all") {
                    show.style.display = "grid";
                }

            });

        });

    });

}