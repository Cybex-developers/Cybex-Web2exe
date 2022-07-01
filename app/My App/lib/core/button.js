export function do_button() {
    class cweButton extends HTMLElement {
        constructor() {
            super();

            if(this.getAttribute("type") == "outlined"){
                this.style.border = "1px solid " + this.getAttribute("color");
                this.style.color = this.getAttribute("color");
                this.onload = function () {
                    this.style.backgroundColor = "lime"
                }
            }
            else if(this.getAttribute("type") == "text"){
                this.style.color = this.getAttribute("color");
            }
            else{
                this.style.backgroundColor = this.getAttribute("color");
            }
        }
    }
    customElements.define('cwe-button', cweButton);
}