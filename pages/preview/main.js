window.kite;
//init storage base
const storage = new DataStore()

async function startPreview(){
  let code = ""
  
  //init kaplay game engine
  kite = kaplay((await storage.getItem(`$${localStorage.currentProject}.setup`))||{})
  
  //toggle debug mode
  if(localStorage.debugMode == "true")debug.inspect = true
  else debug.inspect = false
  
  //get main script
  code += await storage.getItem(`$${localStorage.currentProject}.mainScript`)
  
  Function(code)()
}