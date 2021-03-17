window.onload = async () => {
  const getTemplate = async name => {
    const response = await fetch(`./layout/${name}.html`);
    const content = await response.text();
    const parser = new DOMParser();
    const html = parser.parseFromString(content, "text/html");
    return html.firstChild;
  };
  const body = document.body;
  body.insertBefore(await getTemplate("header"), body.firstChild);
  body.appendChild(await getTemplate("footer"));
};

window.onresize = () => {
  const menu = document.getElementsByClassName("menu")[0];
  menu.style.display = null;
}

const toggleMenu = () => {
  const menu = document.getElementsByClassName("menu")[0];
  const visible = menu.style.display === "flex";
  menu.style.display = visible ? "none" : "flex";
  const menuButton = document.getElementsByClassName("menu-button")[0];
  menuButton.textContent = visible ? "☰" : "✕";
}