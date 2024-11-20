import "./style.css";
import "./elements/space";

// Theme
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});

// Generate colors
document
  .querySelector("[data-handler='import-colors']")
  ?.addEventListener("click", () => {
    var textarea = document.querySelector("#data-input") as HTMLTextAreaElement;

    parent.postMessage({ type: "import-colors", data: textarea.value }, "*");
  });
