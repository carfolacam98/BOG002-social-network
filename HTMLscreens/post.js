export const Subirimagen = () => {

    class formPost extends HTMLElement {
        constructor() {
            super();

        }
        connectedCallback() {
            this.innerHTML =`<div class="container">
        
<!-- CARD ELEMENT -->
<div class="card">
    <img id="img-preview">
    <div class="card-footer">
        <input type="file" id="img-uploader">
        <progress id="img-upload-bar" value="0" max="100" style="width: 100%"></progress>
    </div>
</div>

</div>`;


}
}
if (window.customElements.get("formulario-imagenes") === undefined) {
window.customElements.define("formulario-imagenes", formPost);
} else {
window.customElements.get("formulario-imagenes");
};

};