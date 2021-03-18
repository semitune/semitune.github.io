window.onload = async () => {
  const getTemplate = async name => {
    const response = await fetch(`./layout/${name}.html`);
    const content = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(content, "text/html");
    return html.querySelector(name);
  };
  const body = document.body;
  body.insertBefore(await getTemplate("header"), body.firstChild);
  body.appendChild(await getTemplate("footer"));
};

window.onresize = () => {
  const menu = document.querySelector(".menu");
  menu.style.display = null;
}

const toggleMenu = () => {
  const menu = document.querySelector(".menu");
  const open = menu.style.display === "flex";
  menu.style.display = open ? "none" : "flex";
  const menuButton = document.querySelector(".menu-button");
  menuButton.firstChild.src = open ? "./images/menu.svg" : "./images/close.svg";
}