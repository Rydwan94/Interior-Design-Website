class showAndHide{
  constructor(firstId, secondId, thirdId, fourthId){
  this.firstId = document.getElementById(firstId);
  this.secondId = document.getElementById(secondId);
  this.thirdId = document.getElementById(thirdId)
  this.fourthId = document.getElementById(fourthId)
  }
  hide(){
    this.firstId.style.display = "none"
    this.secondId.style.display = "none"
  }
  listenerToForm(){
    this.firstId.addEventListener("click", () => {
      this.secondId.style.display = "none"
      this.thirdId.style.display = "none"
      this.fourthId.style.display = "block"
    })
  }
  showMainSiteAndProjects(){
    this.firstId.addEventListener("click", () => {
      this.secondId.style.display = "none"
      this.thirdId.style.display = "block"
    })
  }
}

const hideContainers = new showAndHide("myProjectsContainer","formContainer", null, null)
const firstBtn = new showAndHide("firstProjectButton", "myProjectsContainer", "navBar", "formContainer")
const secondBtn = new showAndHide("secondProjectButton", "myProjectsContainer", "navBar", "formContainer")
const thirdBtn = new showAndHide("thirdProjectButton", "myProjectsContainer", "navBar", "formContainer")
const FourthBtn = new showAndHide("fourthProjectButton", "myProjectsContainer", "navBar", "formContainer")
const showProjects = new showAndHide("showProjects", "mainSiteContainer", "myProjectsContainer", null)
const showMainSite = new showAndHide("showMainSite", "myProjectsContainer", "mainSiteContainer")
hideContainers.hide()
firstBtn.listenerToForm()
secondBtn.listenerToForm()
thirdBtn.listenerToForm()
FourthBtn.listenerToForm()
showProjects.showMainSiteAndProjects()
showMainSite.showMainSiteAndProjects()




class Projects {
  constructor(id, projectName, img, price) {
    (this.id = document.getElementById(id)),
      (this.projectName = projectName),
      (this.img = img),
      (this.price = price);
  }
}

let modernProject = new Projects(
  "firsProjectButton",
  "Modern Style",
  "sdad",
  200
);
