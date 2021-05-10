const btnTeamCalendar = document.getElementById('open-teamcalendar');
const btnTeamStats = document.getElementById('open-teamstats');
const btnPViewer = document.getElementById('open-pviewer');

let inputCountry = document.getElementById('countryfilter');
let inputSector = document.getElementById('sectorfilter');
let inputProject = document.getElementById('projectfilter');
let arrCurrentProjectList = arrAllProjects;

let pvTitleH1 = document.querySelector('#pv-title h1');
let pvTitleH2 = document.querySelector('#pv-title h2');

function showTeamCalendar(event) {
    document.querySelector('.welcomepage').style.display = 'none';
    document.querySelector('.pviewer').style.display = 'none';
    document.querySelector('.teamcalendar').style.display = 'block';
    document.querySelector(".header-bar span").innerHTML = "Team Calendar";
};

function showTeamStats(event) {
    document.querySelector('.welcomepage').style.display = 'none';
    document.querySelector('.teamcalendar').style.display = 'none';
    document.querySelector('.pviewer').style.display = 'none';
    document.querySelector(".header-bar span").innerHTML = "Team Statistics";
};

function showPViewer(event) {
    document.querySelector('.welcomepage').style.display = 'none';
    document.querySelector('.teamcalendar').style.display = 'none';
    document.querySelector('.pviewer').style.display = 'block';
    document.querySelector(".header-bar span").innerHTML = "Project Viewer";
};



function updateProjectFilter() {

  let selectedCountry = document.getElementById('countryfilter').value;
  let selectedSector = document.getElementById('sectorfilter').value;
  let pviewerBoardVisibility = document.querySelector('.pviewer');
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

  arrCurrentProjectList = arrAllowedProjects;
  
  if(pviewerBoardVisibility.style.display !== "block"){
    arrAllowedProjects.unshift('All');
  }

  arrAllowedProjects.forEach(function(element){
    let newEntry = document.createElement('option');
    newEntry.text = element
    inputProject .add(newEntry);
  })

  
};

function updatePViewer(){
  let selectedProject = document.querySelector('#countryfilter option').innerHTML
  if(selectedProject === 'All'){
    selectedProject = arrCurrentProjectList[0]._name;
  }

  pvTitleH1.innerHTML = [... new Set(arrAllProjects.filter(element => element._name === selectedProject).map(element => element._name))][0];
}


inputCountry.addEventListener('input', updateProjectFilter);
inputSector.addEventListener('input', updateProjectFilter);
//inputCountry.addEventListener('input', updatePViewer);

btnTeamCalendar.addEventListener('click', showTeamCalendar);
btnTeamStats.addEventListener('click', showTeamStats);
btnPViewer.addEventListener('click', showPViewer);

btnTeamCalendar.addEventListener('click', updateProjectFilter);
btnTeamStats.addEventListener('click', updateProjectFilter);
btnPViewer.addEventListener('click', updateProjectFilter);



btnPViewer.addEventListener('click', updatePViewer);
