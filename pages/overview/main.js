const storage = new DataStore()

async function refreshProjectList(){
  const projects = (await storage.getItem("projects"))||[]
  const list = document.querySelector("list")
  list.innerText = ""
  projects.forEach(entry=>{
    list.insertAdjacentHTML("beforeend",`<item><text onclick="openProject('${entry}')">${entry}</text><button onclick="deleteProject('${entry}')">×</button></item>`)
  })
}

async function createProject(){
  const result = prompt("project name")
  if(result){
    const projects = (await storage.getItem("projects"))||[]
    projects.unshift(result)
    await storage.setItem("projects", projects)
    refreshProjectList()
  }
}

async function openProject(name){
  sessionStorage.currentProject = name
  location.href = "../project/main.html"
}

async function deleteProject(name){
  let entries = await storage.keys()
  entries.forEach(entry)
}