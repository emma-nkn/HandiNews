function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async (el) => {
    const file = el.getAttribute("data-include");

    const response = await fetch(file);
    const content = await response.text();

    el.innerHTML = content;
  });
}

includeHTML();
