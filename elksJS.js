            function openMenu(element) {
                element.classList.add("open");
            }

            function closeMenu(element) {
                element.classList.remove("open");
            }


            document.addEventListener("DOMContentLoaded", () => {
                const sideBar = document.getElementById("side-bar");
                const menuButton = document.getElementById("open-menu");
                const closeMenuButton = document.getElementById("close-menu");

                const topBar = document.getElementById("top-bar");

                menuButton.addEventListener("click", (event) => {
                    openMenu(sideBar);
                    openMenu(closeMenuButton);
                });

                closeMenuButton.addEventListener("click", (event) => {
                    closeMenu(sideBar);
                    closeMenu(closeMenuButton);
                });

            });
