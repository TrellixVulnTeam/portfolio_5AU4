
const d = document;

export default function modal(){
    const portfolioContainer = d.querySelector('.portfolio-items');

    portfolioContainer.addEventListener('click', (e) => {
        e.preventDefault();
        const modalToogle = e.target.closest('.portfolio-link');

        if(! modalToogle) return
        const modal    = modalToogle.parentNode.nextElementSibling;
        const closeBtn = modal.querySelector('.modal__close');

        
        // to open  the modal
        const modalOpen = _ => {
            modal.classList.remove('display-none');
            modal.style.animation = 'modalIn 500ms forwards';
            d.body.style.overflowY = 'hidden';
        } 

        // to close the modal
        const modalClose = _ => {
            modal.classList.add('display-none');
            modal.removeEventListener('animationend', modalClose);

        }

        // to animate close button
        closeBtn.addEventListener('click', el => {
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend', modalClose);
            d.body.style.overflowY = 'scroll';

        });

        // to use scape keyboard
        d.addEventListener('keydown', e => {
            if ( e.key === 'Escape') {
                modal.style.animation = 'modalOut 500ms forwards';
                modal.addEventListener('animationend', modalClose);
                d.body.style.overflowY = 'scroll';

            }

        });

        modalOpen();

    });
}