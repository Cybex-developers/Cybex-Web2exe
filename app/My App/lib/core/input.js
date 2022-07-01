export function do_input() {
    class cweInput extends HTMLElement {
        constructor() {
            super();
            this.contentEditable = true;
            this.oninput = function () {
                if(this.innerHTML != "" && this.innerHTML != null){
                    this.setAttribute("has-text","")
                }
                else{
                    this.removeAttribute("has-text")
                }    
            }
        }
    }
    customElements.define('cwe-input', cweInput);
}