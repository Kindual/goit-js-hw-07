import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector('.gallery');
listGallery.insertAdjacentHTML('beforeend', createElementsGallery(galleryItems));

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

