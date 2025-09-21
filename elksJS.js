const topBarContent = ' <ul> <li class="menu-btn"> <button id="open-menu"></button> </li> <li> <a href="javascript:;">Top-bar item</a> </li> <li class="drop-mobile"> <a href="javascript:;">Top-bar item</a> </li> <li> <a href="javascript:;">Top-bar item</a> </li> <li class="drop-down"> <a href="javascript:;">Dropdown</a> <ul> <li> <a href="javascript:;">drop-down item</a> </li> <li> <a href="javascript:;">drop-down item</a> </li> <li> <a href="javascript:;">drop-down item</a> </li> <li> <a href="javascript:;">drop-down item</a> </li> </ul> </li> </ul> ';
const sideBarContent = '<div id="side-bar-header"> <a href="/"></a> <div> <h1><a href="/">Elks 142</a></h1> <h2>Milwaukie-Portland</h2> </div> </div> <div class="social-wrapper"> <a class="social-media" href="https://www.facebook.com/p/Milwaukie-Portland-Elks-142-100070042659972"> Facebook </a> </div> <div class="heading"> heading </div> <ul> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> </ul> <div class="heading"> heading </div> <ul> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> <li> <a href="javascript:;">side-bar item</a> </li> </ul> <div class="heading"> Icons </div> <div class="big-item"> <a href="javascript:;"></a> <a href="javascript:;"></a> <a href="javascript:;"></a> <a href="javascript:;"></a> </div>';

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

            topBar.innerHTML = topBarContent;
            sideBar.innerHTML = sideBarContent;


                
            menuButton.addEventListener("click", (event) => {
                        openMenu(sideBar);
                        openMenu(closeMenuButton);
            });

            closeMenuButton.addEventListener("click", (event) => {
                        closeMenu(sideBar);
                        closeMenu(closeMenuButton);
            });
});
