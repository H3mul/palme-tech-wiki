/**
 * Set up image popup
 *
 * Dependencies: https://github.com/biati-digital/glightbox
 */

const popupImgSelector = 'img:not(.no-popup)';

function updateImages() {
  GLightbox({ selector: `${popupImgSelector}` });
}

document.addEventListener('DOMContentLoaded', () => {
  const popupImages = document.querySelector(popupImgSelector);
  if (popupImages === null) {
    return;
  }
  updateImages();

  // window.addEventListener('message', (event) => {
  //   if (event.source === window && event.data) {
  //     updateImages();
  //   }
  // });
});
