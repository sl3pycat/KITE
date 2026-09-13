//init storage base
const storage = new DataStore()

async function startEditor(){
  const editor = ace.edit("editor");
  editor.session.setMode("ace/mode/javascript");
  editor.setTheme("ace/theme/monokai");
  editor.setValue(await storage.getItem(`$${localStorage.currentProject}.mainScript`)||"", -1);
  editor.session.on("change",()=>storage.setItem(`$${localStorage.currentProject}.mainScript`,editor.getValue()))
}


async function updateMainScript(code){
  await storage.setItem(`$${localStorage.currentProject}.mainScript`)
}

async function startPreview(debugMode){
  localStorage.debugMode = debugMode
  location.href = "../preview/main.html"
}