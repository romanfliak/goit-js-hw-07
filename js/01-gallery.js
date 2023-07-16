import { galleryItems } from './gallery-items.js';
// Change code below this line



const list = document.querySelector('.gallery')


console.log(basicLightbox)

function createMarkup(arr) {
    return arr.map(({preview,original,description}) =>`
    <li class="gallery__item">
    <a 
    class="gallery__link"
    href="${original}"  >
    <img 
    class="gallery__image"
    src="${preview}" width="300px"
    data-source="${original}"
    alt="${description}">
    </a>
    </li>
`
    ).join('')
}
list.insertAdjacentHTML('afterbegin',createMarkup(galleryItems));


list.oneClick =(evt)=>{
    evt.preventDefault()
    if(!evt.target.classList.contains("gallery__image")){
        return
    } 
}

list.addEventListener('click', handlerClickGallery)


function handlerClickGallery(evt) {
    evt.preventDefault()
   if (!evt.target.classList.contains('gallery__image')){
    return;
   }
const instance =basicLightbox.create(`
<img width="1400" height="900" src="${evt.target.dataset.source}" >)
` , {
    onShow: handlerEscapeModal,
    onClose: handlerEscapeModal,
}) 
instance.show()
function handlerEscapeModal(evt) {
    if (evt.key === "Escape") {
        instance.close()
    } 
}
window.addEventListener('keydown',(evt)=>{
if (evt.key === "Escape") {
    instance.close()
}
})

}