const btnTeamCal = document.getElementById('li_teamcalendar');
const btnTeamStats = document.getElementById('li_teamstats');
const btnPViewer = document.getElementById('li_pviewer');
const btnFruitBoard = document.getElementById('li_fruitboard');
const btnVegBoard = document.getElementById('li_vegboard');

const secPViewer = document.getElementById('sec_pviewer');
const secTeamCal = document.getElementById('sec_teamcalendar');
const secTeamStats = document.getElementById('sec_teamstats')
const secFruit = document.getElementById('sec_fruitboard');
const secVeg = document.getElementById('sec_vegboard');

let inputCountry = document.getElementById('countryfilter');
let inputSector = document.getElementById('sectorfilter');
let inputProject = document.getElementById('projectfilter');

let inputCountry2 = document.getElementById('countryfilter2');
let inputSector2 = document.getElementById('sectorfilter2');
let inputProject2 = document.getElementById('projectfilter2');

let inputStartDate = document.getElementById('startdate');
let inputEndDate = document.getElementById('enddate');


let pvTitleH1 = document.querySelector('#pv-infocard-general-title h1');
let pvTitleH2 = document.querySelector('#pv-infocard-general-title h2');
let displayIMGElement = document.getElementById('img_pv_info');

let arrCurrentProjectList = arrAllProjects.map(element => element._name);

/* 
##########################
#####    FUNCTIONS   #####
##########################
*/

/*#### showSection(event) ####*/

function showSection(event) {

  document.querySelectorAll('section').forEach(element => element.style.display = 'none');

  switch(event.target.innerHTML){
    case "Team Calendar":
      secTeamCal.style.display = 'block';
      break;
    case "Team Stats":
      secTeamStats.style.display = 'block';
      break;
    case "Project Viewer":
      secPViewer.style.display = 'block';
      break;
    case "Fruit Board":
      secFruit.style.display = 'block';
      break;
      case "Vegetable Board":
        secVeg.style.display = 'block';
  }
}

/*#### Affected objects ####*/

btnTeamCal.addEventListener('click', showSection);
btnTeamStats.addEventListener('click', showSection);
btnPViewer.addEventListener('click', showSection);
btnFruitBoard.addEventListener('click', showSection);
btnVegBoard.addEventListener('click', showSection);

/*##########################*/


function updateProjectFilter() {

  let selectedCountry = document.getElementById('countryfilter').value;
  let selectedSector = document.getElementById('sectorfilter').value;
  let pviewerBoardVisibility = document.getElementById('sec_pviewer');
  let arrAllowedProjects = []
  const firstElementAll = document.createElement('option');
  firstElementAll.text = "All";

  inputProject.options.length = 0;


  if((selectedCountry === 'All') && (selectedSector === 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.map(element => element._name))];

  } else if((selectedCountry === 'All') && (selectedSector !== 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._team === selectedSector).map(element => element._name))];

  } else if((selectedCountry !=='All') && (selectedSector === 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._country === selectedCountry).map(element => element._name))];

  } else {
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => (element._country === selectedCountry) && (element._team === selectedSector)).map(element => element._name))];
  }

  
  /*pvTitleH1.innerHTML = [... new Set(arrAllProjects.map(element => element._name))][0];*/

  arrCurrentProjectList = arrAllowedProjects;  
  
  if(pviewerBoardVisibility.style.display !== "block"){
    arrAllowedProjects.unshift('All');
  }

  //arrAllowedProjects.unshift('All');

  arrAllowedProjects.forEach(function(element){
    let newEntry = document.createElement('option');
    newEntry.text = element
    inputProject.add(newEntry);
  })


  if(pviewerBoardVisibility.style.display === "block"){
    updatePViewer();
  }

  
  
};


function updateProjectFilter2() {

  let selectedCountry = document.getElementById('countryfilter2').value;
  let selectedSector = document.getElementById('sectorfilter2').value;
  let pviewerBoardVisibility = document.getElementById('pviewer');
  let arrAllowedProjects = []
  const firstElementAll = document.createElement('option');
  firstElementAll.text = "All";

  inputProject2.options.length = 0;


  if((selectedCountry === 'All') && (selectedSector === 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.map(element => element._name))];

  } else if((selectedCountry === 'All') && (selectedSector !== 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._team === selectedSector).map(element => element._name))];

  } else if((selectedCountry !=='All') && (selectedSector === 'All')){
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._country === selectedCountry).map(element => element._name))];

  } else {
    arrAllowedProjects = [... new Set(arrAllProjects.filter(element => (element._country === selectedCountry) && (element._team === selectedSector)).map(element => element._name))];
  }

  arrCurrentProjectList = arrAllowedProjects;  
  
  if(pviewerBoardVisibility.style.display !== "block"){
    arrAllowedProjects.unshift('All');
  }

  arrAllowedProjects.forEach(function(element){
    let newEntry = document.createElement('option');
    newEntry.text = element
    inputProject2.add(newEntry);
  })


  if(pviewerBoardVisibility.style.display === "block"){
    updatePViewer();
  }

  
  
};

function updatePViewer(){
  let selectedProject = arrAllProjects.filter(element => element._name === inputProject.value);
  let selectedProjectDesc = arrProjectDescriptions.filter(element => element._name === inputProject.value);
  let selectedProjectImg = arrImages.filter(element => element._name === inputProject.value);
  

  pvTitleH1.innerHTML = [... new Set(selectedProject.map(element => element._name))];
  pvTitleH2.innerHTML = [... new Set(selectedProject.map(element => element._eng))];
  document.getElementById('pv-td-bmz-inv').innerHTML = selectedProject.filter(element => element._invbm === 'inv').map(element => element._bmz);
  document.getElementById('pv-td-bmz-bm').innerHTML = selectedProject.filter(element => element._invbm === 'bm').map(element => element._bmz);
  document.getElementById('pv-td-inpro-inv').innerHTML = selectedProject.filter(element => element._invbm === 'inv').map(element => element._inpro);
  document.getElementById('pv-td-inpro-bm').innerHTML = selectedProject.filter(element => element._invbm === 'bm').map(element => element._inpro);
  
  document.getElementById('pv-td-inv').innerHTML = selectedProject.filter(element => element._invbm === 'inv').map(element => element._measure).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('pv-td-bm').innerHTML = selectedProject.filter(element => element._invbm === 'bm').map(element => element._measure).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('pv-td-ve').innerHTML = selectedProject.map(element => element._ve).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('pv-td-sbf').innerHTML = selectedProject.map(element => element._sbf).reduce((a, b) => a + b, 0).toLocaleString('de', {style: 'currency', currency: 'EUR'});
  document.getElementById('p_pv_description').innerHTML = selectedProjectDesc[0]._desc;

  displayIMGElement.src = selectedProjectImg[0]._source;
  displayIMGElement.alt = selectedProjectImg[0]._alt;

  document.getElementById('img_weblink').href = selectedProjectImg[0]._citationwp;
  document.getElementById('img_piclink').href = selectedProjectImg[0]._citationimg;
}

function updateCalendar() {
  let tableBody = document.getElementById('calendar-table-body');
  let tableDataElement = document.createElement('td');
  
  while(tableBody.hasChildNodes())
  {
   tableBody.removeChild(tableBody.firstChild);
  }

  let arrAllowedEvents = arrCalendar.filter(element => (Date.parse(element._date) >= Date.parse(inputStartDate.value)) && (Date.parse(element._date) <= Date.parse(inputEndDate.value)));
  let arrCurrentProjectListCalendar = arrCurrentProjectList.filter(element => arrAllowedEvents.map(element => element._name).includes(element));

  if(inputProject2.value !== 'All'){
    arrCurrentProjectListCalendar = inputProject2.value;
  }

  arrAllowedEvents = arrAllowedEvents.filter(element => arrCurrentProjectListCalendar.includes(element._name));
  //console.log(arrAllowedEvents);

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

     //newLinkContainer.href = element._link;
     //newLinkEntry.add(newLinkContainer);
/*
     newTableRow.add(newProjectEntry);
     newTableRow.add(newEventEntry);
     newTableRow.add(newDateEntry);
     newTableRow.add(newLinkEntry);
*/
   });

}




/*##########################*/


inputCountry.addEventListener('input', updateProjectFilter);
inputSector.addEventListener('input', updateProjectFilter);
inputProject.addEventListener('input', updatePViewer);

inputCountry2.addEventListener('input', updateProjectFilter2);
inputCountry2.addEventListener('input', updateCalendar);
inputSector2.addEventListener('input', updateProjectFilter2);
inputSector2.addEventListener('input', updateCalendar);
inputProject2.addEventListener('input', updateCalendar);
inputStartDate.addEventListener('input', updateCalendar);
inputEndDate.addEventListener('input', updateCalendar);

btnTeamCal.addEventListener('click', updateProjectFilter);
btnTeamStats.addEventListener('click', updateProjectFilter);
btnPViewer.addEventListener('click', updateProjectFilter);

