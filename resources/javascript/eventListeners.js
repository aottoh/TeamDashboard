/*####################################
## filename: eventListeners.js
## projectname: TeamDashboard
## author: Alexander Hoffmann
## version: 0.1.1
## date: 2021-05-13
####################################*/

/*#### showSection(event) ####*/

function showSection(event) {

  // start by hiding all section elements in the document
  document.querySelectorAll('section').forEach(element => element.style.display = 'none');
  spanHeader.innerHTML = event.target.innerHTML;

  divSubheader.style.display = 'none';

  // determine the clicked buttorns inner HTML and display respective section
  switch(event.target.innerHTML){
    case "Team Calendar":
      secTeamCal.style.display = 'block';
      divSubheader.style.display = 'block';
      divTimerange.style.display = 'flex';
      divProjectfilters.style.display = 'flex';
      divFruitMenu.style.display = 'none';
      divVegBoard.style.display = 'none';
      break;
    case "Team Stats":
      secTeamStats.style.display = 'block';
      break;
    case "Project Viewer":
      secPViewer.style.display = 'block';
      divSubheader.style.display = 'block';
      divTimerange.style.display = 'none';
      divProjectfilters.style.display = 'flex';
      divFruitMenu.style.display = 'none';
      divVegBoard.style.display = 'none';
      break;
    case "Fruit Board":
      secFruit.style.display = 'block';
      divSubheader.style.display = 'block';
      divTimerange.style.display = 'none';
      divProjectfilters.style.display = 'none';
      divFruitMenu.style.display = 'flex';
      divVegBoard.style.display = 'none';
      break;
    case "Vegetable Board":
        secVeg.style.display = 'block';
        divSubheader.style.display = 'block';
        divTimerange.style.display = 'none';
        divProjectfilters.style.display = 'none';
        divFruitMenu.style.display = 'none';
        divVegBoard.style.display = 'flex';
  }
}

/*## Objects effected by showSection ##*/

btnTeamCal.addEventListener('click', showSection);
btnTeamStats.addEventListener('click', showSection);
btnPViewer.addEventListener('click', showSection);
btnFruitBoard.addEventListener('click', showSection);
btnVegBoard.addEventListener('click', showSection);

/*####################################*/

/*#### updateProjectFilter() ####*/

function updateProjectFilter() {

  // declare required variables, mainly to determine the chosen country and sector
  let selectedCountry = document.getElementById('countryfilter').value;
  let selectedSector = document.getElementById('sectorfilter').value;
  let pviewerBoardVisibility = document.getElementById('sec_pviewer');
  let arrAllowedProjects = []

  // decleare a new option element, titled 'All'
  const firstElementAll = document.createElement('option');
  firstElementAll.text = "All";

  // remove pre-existing project options
  inputProject.options.length = 0;

  // determine which country and sector have been selected to filter the projects
  if((selectedCountry === 'All') && (selectedSector === 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.map(element => element._name))];

  } else if((selectedCountry === 'All') && (selectedSector !== 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._team === selectedSector).map(element => element._name))];

  } else if((selectedCountry !=='All') && (selectedSector === 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._country === selectedCountry).map(element => element._name))];

  } else {
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => (element._country === selectedCountry) && (element._team === selectedSector)).map(element => element._name))];
  }

  // update the global array of currently allowed projects, based on user filters
  arrCurrentProjectList = arrAllowedProjects;  
  
  // add "All" to the project filter list only, if the Project Viewer Board is not selected
  if(pviewerBoardVisibility.style.display !== "block"){
    arrAllowedProjects.unshift('All');
  }

  // add the allowed project filter list to the select element
  arrAllowedProjects.forEach(function(element){
    let newEntry = document.createElement('option');
    newEntry.text = element
    inputProject.add(newEntry);
  })

  // update the content of the Project Viewer Board
  if(pviewerBoardVisibility.style.display === "block"){
    updatePViewer();
  }

  
  
};

/*## Objects effected by updateProjectFilter ##*/

btnTeamCal.addEventListener('click', updateProjectFilter);
btnPViewer.addEventListener('click', updateProjectFilter);
inputCountry.addEventListener('input', updateProjectFilter);
inputSector.addEventListener('input', updateProjectFilter);

/*####################################*/

/*#### updateCalendar() ####*/

function updateCalendar() {
  let tableBody = document.getElementById('cal_table_body');
  let tableDataElement = document.createElement('td');
  
  while(tableBody.hasChildNodes())
  {
   tableBody.removeChild(tableBody.firstChild);
  }

  let arrAllowedEvents = arrCalendar.filter(element => (Date.parse(element._date) >= Date.parse(inputStartDate.value)) && (Date.parse(element._date) <= Date.parse(inputEndDate.value)));
  let arrCurrentProjectListCalendar = arrCurrentProjectList.filter(element => arrAllowedEvents.map(element => element._name).includes(element));

  if(inputProject.value !== 'All'){
    arrCurrentProjectListCalendar = inputProject.value;
  }

  arrAllowedEvents = arrAllowedEvents.filter(element => arrCurrentProjectListCalendar.includes(element._name));

   arrAllowedEvents.forEach(element => {
     let newTableRow = tableBody.insertRow(-1);
     let newProjectEntry = newTableRow.insertCell(0);
     let newEventEntry = newTableRow.insertCell(1);
     let newDateEntry = newTableRow.insertCell(2);
     let newLinkEntry = newTableRow.insertCell(3);

     newProjectEntry.innerHTML= element._name;
     newEventEntry.innerHTML = element._event;
     newDateEntry.innerHTML = element._date;
     newLinkEntry.innerHTML = 'Link';
   });
}

/*## Objects effected by updateCalendar ##*/

inputProject.addEventListener('input', updateCalendar);
inputCountry.addEventListener('input', updateCalendar);
inputSector.addEventListener('input', updateCalendar);
inputStartDate.addEventListener('input', updateCalendar);
inputEndDate.addEventListener('input', updateCalendar);

/*##########################*/

/*#### updatePViewer() ####*/

function updatePViewer(){
  let selectedProject = arrAllProjects.filter(element => element._name === inputProject.value);
  let selectedProjectDesc = arrProjectDescriptions.filter(element => element._name === inputProject.value);
  let selectedProjectImg = arrImages.filter(element => element._name === inputProject.value);
  
  pvTitleH1.innerHTML = [... new Set(selectedProject.map(element => element._name))];
  pvTitleH2.innerHTML = [... new Set(selectedProject.map(element => element._eng))];
  document.getElementById('td_pv_bmz_inv').innerHTML = selectedProject.filter(element => element._invbm === 'inv').map(element => element._bmz);
  document.getElementById('td_pv_bmz_bm').innerHTML = selectedProject.filter(element => element._invbm === 'bm').map(element => element._bmz);
  document.getElementById('td_pv_inpro_inv').innerHTML = selectedProject.filter(element => element._invbm === 'inv').map(element => element._inpro);
  document.getElementById('td_pv_inpro_bm').innerHTML = selectedProject.filter(element => element._invbm === 'bm').map(element => element._inpro);
  
  document.getElementById('td_pv_inv').innerHTML = selectedProject.filter(element => element._invbm === 'inv').map(element => element._measure).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('td_pv_bm').innerHTML = selectedProject.filter(element => element._invbm === 'bm').map(element => element._measure).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('td_pv_ve').innerHTML = selectedProject.map(element => element._ve).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('td_pv_sbf').innerHTML = selectedProject.map(element => element._sbf).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('p_pv_description').innerHTML = selectedProjectDesc[0]._desc;

  displayIMGElement.src = selectedProjectImg[0]._source;
  displayIMGElement.alt = selectedProjectImg[0]._alt;

  document.getElementById('img_weblink').href = selectedProjectImg[0]._citationwp;
  document.getElementById('img_piclink').href = selectedProjectImg[0]._citationimg;
}

/*## Objects effected by updatePViewer ##*/

inputProject.addEventListener('input', updatePViewer);
 
/*##########################*/

/*#### showBoard(event) ####*/

function showBoard(event) {
  document.querySelectorAll('.div-teamboards').forEach(element => element.style.display = 'none');
  
  if(event.target.parentNode.parentNode.id === "fruitboardmenu"){

    switch(event.target.id){

      case "li_fruitportfolio":
        secFruitPortfolio.style.display = "block"
        break;
      case 'li_fruitpipeline':
        secFruitPipeline.style.display = "block"
        break;
      case 'li_fruitteaminfo':
        secFruitTeamInfo.style.display = "block"
        break;
    }

  } else if(event.target.parentNode.parentNode.id === "vegboardmenu"){

    switch(event.target.id){

      case "li_vegportfolio":
        secVegPortfolio.style.display = "block"
        break;
      case 'li_vegpipeline':
        secVegPipeline.style.display = "block"
        break;
      case 'li_vegacquisition':
        secVegAcquisition.style.display = "block"
        break;
      case 'li_vegteaminfo':
        secVegTeamInfo.style.display = "block"
        break;
    }
  } else {  
    switch(event.target.id){
      case "li_fruitboard":
        secFruitPortfolio.style.display = "block"
        break;
      case 'li_vegboard':
        secVegPortfolio.style.display = "block"
        break;
    }
  }
}

/*## Objects effected by showBoard ##*/

btnFruitPortfolio.addEventListener('click', showBoard);
btnFruitPipeline.addEventListener('click', showBoard);
btnFruitTeamInfo.addEventListener('click', showBoard);
btnVegPortfolio.addEventListener('click', showBoard);
btnVegPipeline.addEventListener('click', showBoard);
btnVegAcquisition.addEventListener('click', showBoard);
btnVegTeamInfo.addEventListener('click', showBoard);
btnFruitBoard.addEventListener('click', showBoard);
btnVegBoard.addEventListener('click', showBoard);

/*##########################*/
