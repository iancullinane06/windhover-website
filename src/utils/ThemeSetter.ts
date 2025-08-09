export function setLightTheme() {
  localStorage.theme = "light";
  document.documentElement.classList.remove("dark");
}

export function setDarkTheme() {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
}

export function setSystemTheme() {
  localStorage.removeItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", prefersDark);
}