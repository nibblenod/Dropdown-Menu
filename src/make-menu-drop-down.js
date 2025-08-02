export function makeMenuDropDown(menuButton, menu)
{
  menu.style.display = "none"; //We set the menu to be initially hidden from view.

  menuButton.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "none") ? "block" : "none";
  });
}