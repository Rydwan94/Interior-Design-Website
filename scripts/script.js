
const mainSiteContainer = document.getElementById("mainSiteContainer");
const myProjectsContainer = document.getElementById("myProjectsContainer");
const formContainer = document.getElementById("formContainer")
const showMainSite = document.getElementById("showMainSite");
const navBar = document.getElementById("navBar")


const showForm = (id) => {
  id.addEventListener("click", () =>{
    myProjectsContainer.style.display = "none";
      navBar.style.display = "none"
      formContainer.style.display = "block"
  })
}

showForm(firsProjectButton)
showForm(secondProjectButton)
showForm(thirdProjectButton)
showForm(fourthProjectButton)


myProjectsContainer.style.display = "none"
formContainer.style.display = "none"


showProjects.addEventListener("click", () => {
  mainSiteContainer.style.display = "none";
  myProjectsContainer.style.display = "block";
});

showMainSite.addEventListener("click", () => {
  myProjectsContainer.style.display = "none"
  mainSiteContainer.style.display = "block"
});


class Projects{
  constructor(id,projectName, img, price){
    this.id = document.getElementById(id),
    this.projectName = projectName,
    this.img = img,
    this.price = price
  }

}

let modernProject = new Projects("firsProjectButton", "Modern Style", "sdad", 200)

