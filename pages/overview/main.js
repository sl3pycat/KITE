//init storage base
const storage = new DataStore()

async function refreshProjectList(){
  //refreshes the main list
  const projects = (await storage.getItem("projects"))||[]
  const list = document.querySelector("list")
  list.innerText = ""
  projects.forEach(entry=>{
    list.insertAdjacentHTML("beforeend",`<item><text onclick="openProject('${entry}')">${entry}</text><button onclick="deleteProject('${entry}')">×</button></item>`)
  })
}

async function createProject(){
  //creates a new project
  const result = prompt("project name")
  if(result){
    const projects = (await storage.getItem("projects"))||[]
    projects.unshift(result)
    await storage.setItem("projects", projects)
    refreshProjectList()
  }
}

async function openProject(name){
  //opens the project editor
  localStorage.currentProject = name
  location.href = "../editor/main.html"
}

async function deleteProject(name){
  //delete all keys accociated with the target project
  let entries = await storage.keys()
  for (const entry of entries) {if(entry.startsWith(`$${name}.`))await storage.removeItem(entry) }
  //delete the target project
  let projects = (await storage.getItem("projects"))||[]
  await storage.setItem("projects",projects.filter(entry=>entry!==name))
  refreshProjectList()
}