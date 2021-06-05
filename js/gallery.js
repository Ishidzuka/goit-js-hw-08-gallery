import gallery from './gallery-items.js';

const ref = {
    modalRef: document.querySelector('.lightbox'),
    jsGalleryRef: document.querySelector('.js-gallery'),
    modalImgRef: document.querySelector('.lightbox__image'),
    modalButtonRef: document.querySelector('.lightbox__button'),
}

const createGallery = gallery.map(({ preview, original, description }, element) =>
`
<li class="gallery__item">
<a class="gallery__link" href=" ">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" data-index="${element}">
</a>
</li>
`).join('');
console.log(createGallery);

ref.jsGalleryRef.innerHTML = createGallery;