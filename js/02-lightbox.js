import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) => `
  <li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      alt=${item.description}
    />
  </a>
</li>`
  )
  .join("");

listEl.insertAdjacentHTML("beforeend", markup);

const libraryOptions = {
  captionDelay: 250,
  captionsData: "alt",
  scrollZoomFactor: 0.3,
  animationSpeed: 250,
  fadeSpeed: 250,
  widthRatio: 0.55,
};

new SimpleLightbox(".gallery__item a", libraryOptions);

console.log(galleryItems);
