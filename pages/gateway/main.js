//on page load, checks if user granted browser persistent storage
async function checkStorageAccess(){
  console.info("checking persistant storage access.")
  const persistent = await navigator.storage?.persisted?.() ?? false
  if(persistent){
    console.info("storage granted")
    location.replace("../overview/main.html")
  } else {
    console.info("storage denied")
    document.querySelector("section[to='check storage access']").style.display = "none"
    document.querySelector("section[to='grant storage access']").style.display = "block"
  }
  
}

//requests persistent storage and navigates to the overview if granted or informs user if denied.
async function grantStorageAccess(){
  persisted = await navigator.storage.persist()
  if(persisted){
    console.info("storage granted")
    location.replace("../overview/main.html")
  } else {
    console.info("persistent storage not supported.")
    alert("This browser does not support persistent storage.")
  }
}