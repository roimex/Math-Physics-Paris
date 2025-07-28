// Save user preference to localStorage
const setUserTheme = (theme) => {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
};

// Load saved preference
const loadTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) {
    document.documentElement.setAttribute("data-bs-theme", saved);
  }
};

loadTheme();

// Optional: watch for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if (!localStorage.getItem("theme")) {
    setUserTheme(e.matches ? "dark" : "light");
  }
});