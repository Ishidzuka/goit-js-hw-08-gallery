import gallery from './gallery-items.js';

const ref = {
    modalRef: document.querySelector('.lightbox'),
    jsGalleryRef: document.querySelector('.js-gallery'),
    modalImgRef: document.querySelector('.lightbox__image'),
    modalButtonRef: document.querySelector('.lightbox__button'),
}

const createGallery = gallery.map(({ preview, original, description }, index) =>
`
<li class="gallery__item">
<a class="gallery__link" href=" ">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" data-index="${index}">
</a>
</li>
`).join('');
console.log(createGallery);

ref.jsGalleryRef.innerHTML = createGallery;

const outerModalClick = el => {
    el.preventDefault();

    if (el.target.localName === 'img') {
        ref.modalImgRef.src = el.target.dataset.source;
        ref.modalImgRef.alt = el.target.alt;
        ref.modalImgRef.dataset.index = el.target.index;
        ref.modalRef.classList.add('is-open');
    }
};

const closeKey = el => {
    if (el.key === "Escape") {
        ref.modalRef.classList.remove('is-open');
    }
};

const closeModalClick = el => {
    if (el.target.localName !== 'img'){
       ref.modalRef.classList.remove('is-open') 
        ref.modalImgRef.src = '';
        ref.modalImgRef.alt = '';
    }
}

ref.jsGalleryRef.addEventListener('click', outerModalClick);
window.addEventListener('keyup', closeKey);
window.addEventListener('click', closeModalClick);

