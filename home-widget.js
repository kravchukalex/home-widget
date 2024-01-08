["https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"].forEach((u) => {
  var script = document.createElement("script");
  script.src = u;
  document.head.appendChild(script);
});

class homeWidget extends HTMLElement {
  static _WIDGETNAME = "home-widget";
  static _WIDGETURL = "https://lively-stone-0bffa0e10.4.azurestaticapps.net";

  connectedCallback() {
    this.classList.add("neo-widget");
    this.classList.add(`widget--${homeWidget._WIDGETNAME}`);
    this.style.overflowX = "hidden";

    fetch(`${homeWidget._WIDGETURL}/${homeWidget._WIDGETNAME}.html`)
      .then((data) => {
        console.log("datita -----", data)
       return data.text()})
        
      .then((html) => {
        this.innerHTML += `<link rel="stylesheet" href="${homeWidget._WIDGETURL}/${homeWidget._WIDGETNAME}.css">`;
        this.innerHTML += html;
        this.initWidgetCode();
      });
    {

    }
  }

  initWidgetCode() {
    console.log("Init Widget code");
  }
}

customElements.define(homeWidget._WIDGETNAME, homeWidget);
