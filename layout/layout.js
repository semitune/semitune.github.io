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

const toggleLightbox = () => {
  const lightbox = document.querySelector(".lightbox");
  const visible = lightbox.style.display === "flex";
  lightbox.style.display = visible ? "none" : "flex";
  document.body.style.overflow = visible ? "auto" : "hidden";
}