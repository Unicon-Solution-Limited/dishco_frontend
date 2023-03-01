export default function toggler() {
  document.body.classList.toggle("sb-sidenav-toggled");
  localStorage.setItem(
    "sb|sidebar-toggle",
    document.body.classList.contains("sb-sidenav-toggled")
  );
}
