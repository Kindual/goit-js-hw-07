import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createElementsGallery(galleryItems));

const option = {
    enableKeyboard: true,
    captionDelay: 250,
    captionsData: 'alt',
}

const lightbox = new SimpleLightbox('.gallery__item', option);

function createElementsGallery(arg) {
    return arg.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `
    })
        .join('');
}

