class MySpacer extends HTMLElement {
  constructor() {
    super();
    this.style.display = "block";
    this.style.height = `var(--spacing-${this.getAttribute("height")}`;
  }
}

customElements.define("ui-space", MySpacer);
