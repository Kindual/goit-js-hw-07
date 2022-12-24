import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createElementsGallery(galleryItems));

gallery.addEventListener('click', openLightBox)

function openLightBox(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return
    }

    const option = {
        onShow: () => { window.addEventListener('keydown', closeLightbox) },
        onClose: () => { window.removeEventListener('keydown', closeLightbox) },
    };

    const instance = basicLightbox.create(
        `
        <img src="${evt.target.dataset.source}" width="800" height="600">
        `,
        option
    )

    instance.show();

    function closeLightbox(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
}

function createElementsGallery(arg) {
    return arg.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
        </div>`
    })
        .join('');
}