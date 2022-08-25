const formContainer = document.getElementById("formContainer")
const showMainSite = document.getElementById("showMainSite");
const navBar = document.getElementById("navBar")

myProjectsContainer.style.display = "none"
formContainer.style.display = "none"

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


const showAndHide = (listener, firstId, secondId) => {
  listener.addEventListener("click", () => {
    document.getElementById(firstId).style.display ="none"
    document.getElementById(secondId).style.display ="block"
  })
}

showAndHide(showProjects,"mainSiteContainer","myProjectsContainer")
showAndHide(showMainSite,"myProjectsContainer", "mainSiteContainer" )




class Projects{
  constructor(id,projectName, img, price){
    this.id = document.getElementById(id),
    this.projectName = projectName,
    this.img = img,
    this.price = price
  }

}

let modernProject = new Projects("firsProjectButton", "Modern Style", "sdad", 200)

class ShowForm{
  constructor(firstId, secondId, thirdId){
    this.firstId = document.getElementById(firstId)
    this.secondId = document.getElementById(secondId)
    this.thirdId = document.getElementById(thirdId)
  }
  showAndHide(firstId, secondId, thirdId){
    firstId.addEventListener("click", () => {
      secondId.style.display = "none"
      thirdId.style.display = "block"
    })
  }
}

let hide = ShowForm("myProjectsContainer", "formContainer", "mainSiteContainer")

