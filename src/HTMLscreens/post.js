export const Subirimagen = () => {

    class formPost extends HTMLElement {
        constructor() {
            super();

        }
        connectedCallback() {
            this.innerHTML =`<div class="containerForm">
        
<!-- CARD ELEMENT -->
<div class="card">
<div id="visual"></div>
    <div class="card-footer">
        <input type="file"  id="img-uploader">
        <progress id="img-upload-bar" value=0 max="100" style="width: 100%"></progress>
    </div>
</div>
</div>
<div>
      <h1>Parte para firestore</h1>
      <div><input id="textfirestore" type="text"> </div>
     <div><button id="bnfirestore">Click</button></div>
    </div>
`;


        }
    }
    if (window.customElements.get("formulario-imagenes") === undefined) {
        window.customElements.define("formulario-imagenes", formPost);
    } else {
        window.customElements.get("formulario-imagenes");
    };

};