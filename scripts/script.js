
const mainSiteContainer = document.getElementById("mainSiteContainer");
const myProjectsContainer = document.getElementById("myProjectsContainer");
const showMainSite = document.getElementById("showMainSite");

showProjects.addEventListener("click", () => {
  mainSiteContainer.style.display = "none";
  myProjectsContainer.style.display = "block";
});

showMainSite.addEventListener("click", () => {
  myProjectsContainer.style.display = "none"
  mainSiteContainer.style.display = "block"
});


