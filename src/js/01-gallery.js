import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
document.addEventListener("DOMContentLoaded", function () {
    const gallery = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
      docClose: true,
    });
  });
const galleryContainer = document.querySelector("ul.gallery");
const images = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
});
galleryContainer.insertAdjacentHTML("beforeend", images.join(""));
