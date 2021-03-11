
const d = document;

export default function modal(){
    const portfolioContainer = d.querySelector('.portfolio-items');

    portfolioContainer.addEventListener('click', (e) => {
        e.preventDefault();
        const modalToogle = e.target.closest('.portfolio-link');

        if(! modalToogle) return
        const modal = modalToogle.parentNode.nextElementSibling;
        const closeBtn =modal.querySelector('.modal__close');

        
        // to open  the modal
        modal.classList.remove('display-none');

        // to close the modal
        closeBtn.addEventListener('click', el => {
            modal.classList.add('display-none');

        });

    });
}