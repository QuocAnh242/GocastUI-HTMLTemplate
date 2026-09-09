document.addEventListener("DOMContentLoaded", () => {
  // --- Profile Dropdown & Theme Toggle ---
  const profile = document.querySelector(".profile");
  const dropdown = document.querySelector(".profile-dropdown");
  const themeToggle = document.querySelector("#theme-toggle");

  profile?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown?.classList.toggle("is-show");
  });

  dropdown?.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    dropdown?.classList.remove("is-show");
  });

  // Mặc định là LIGHT MODE
  const savedTheme = localStorage.getItem("gocast_theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    if (themeToggle) themeToggle.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
    if (themeToggle) themeToggle.checked = false;
  }

  themeToggle?.addEventListener("change", (e) => {
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("gocast_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("gocast_theme", "light");
    }
  });

  // --- Mobile Sidebar Drawer (< 1280px) ---
  const navMenuBtn = document.querySelector(".navigation-menu");
  const sidebar = document.querySelector(".sidebar");
  const sidebarClose = document.querySelector(".sidebar-close");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");

  const openSidebar = () => {
    sidebar?.classList.add("is-show");
    sidebarOverlay?.classList.add("is-show");
  };

  const closeSidebar = () => {
    sidebar?.classList.remove("is-show");
    sidebarOverlay?.classList.remove("is-show");
  };

  navMenuBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    openSidebar();
  });

  sidebarClose?.addEventListener("click", (e) => {
    e.preventDefault();
    closeSidebar();
  });

  sidebarOverlay?.addEventListener("click", () => {
    closeSidebar();
  });
});
