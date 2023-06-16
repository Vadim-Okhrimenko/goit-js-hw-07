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
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`
  )
  .join("");

listEl.insertAdjacentHTML("beforeend", markup);
listEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  function closeType(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }

  const instance = basicLightbox.create(
    `<div class="modal">
      <img src="${event.target.dataset.source}" width=800></img>
     </div>`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeType);
      },

      onClose: () => {
        document.removeEventListener("keydown", closeType);
      },
    }
  );

  instance.show();
});

console.log(galleryItems);
