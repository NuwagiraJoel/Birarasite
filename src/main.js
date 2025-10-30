import { createApp } from "vue";
import "./style.css";
import "flowbite";
import "./assets/main.css";
import App from "./App.vue";

createApp(App).mount("#app");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
