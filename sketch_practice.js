

const addElt = () => {

  const insideImg = document.querySelectorAll('img')
  insideImg.forEach(elt => {
    elt.classList.add('sketch_practice_picture')
    newDiv.appendChild(elt)
  })

  // Ajoute un style pour que le message soit visible
  newDiv.classList.add('sketch_practice_overlay')
  

  // Insère le nouvel élément au début du body
  const bodyElt = document.body.firstChild; // Premier enfant
  document.body.insertBefore(newDiv, bodyElt);
  
};
/* addElt() */

// Generation du panel de depart
const addTitleParams = () => {
  // Crée un nouvel élément div
  const newDiv = document.createElement("div");
  const divContainer = document.createElement("div");
  const selectTime = document.createElement("select")
  const newContent = document.createTextNode("Sketch practice");
  const buttonTimer = document.createElement('button')

  newDiv.appendChild(divContainer);
  // titre de l'appli
  newDiv.classList.add('sketch_practice_params')
  divContainer.classList.add('sketch_practice_container')
  selectTime.classList.add('sketch_pratice_select')
  buttonTimer.innerText = "start"

  // select de temps
  const options = [
    {value:'0.5', label:"30 secondes"},
    {value:'1', label:"1 minute"},
    {value:'2', label:"2 minutes"},
    {value:'5', label:"5 minutes"},
    {value:'10', label:"10 minutes"}
  ]

  options.forEach((option) => {
    const opt = document.createElement("option")
    opt.value = option.value; // Définir la valeur
    opt.textContent = option.label; // Définir le texte visible
    selectTime.appendChild(opt)
  })

  divContainer.appendChild(newContent);
  divContainer.appendChild(selectTime);
  divContainer.appendChild(buttonTimer);

  const exisitingParamsBar = document.querySelectorAll('.sketch_practice_params')

  if(exisitingParamsBar) {
    exisitingParamsBar.forEach(elt => {
      elt.remove()
    })
  }
  const bodyElt = document.body.firstChild; // Premier enfant
  document.body.insertBefore(newDiv, bodyElt);


  buttonTimer.addEventListener('click', () => {showTimer(selectTime.value)})

}

// affiche le timer
const showTimer = (timeSelected) => {
  console.log('timer start' + timeSelected)
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(timeSelected);

  newDiv.appendChild(newContent);
  document.querySelector('.sketch_practice_container').appendChild(newDiv);

}

addTitleParams()
