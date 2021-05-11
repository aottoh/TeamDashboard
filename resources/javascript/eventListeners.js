const btnTeamCalendar = document.getElementById('open-teamcalendar');
const btnTeamStats = document.getElementById('open-teamstats');
const btnPViewer = document.getElementById('open-pviewer');
const btnSubmitFilters1 = document.getElementById('submitfilters1')

let inputCountry = document.getElementById('countryfilter');
let inputSector = document.getElementById('sectorfilter');
let inputProject = document.getElementById('projectfilter');
//let arrCurrentProjectList = arrAllProjects;
//let arrCurrentSelectedProject =[];

let pvTitleH1 = document.querySelector('#pv-title h1');
let pvTitleH2 = document.querySelector('#pv-title h2');
let displayIMGElement = document.getElementById('pv_projectimage');

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

  updatePViewer();
  
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
  document.getElementById('pv-description').innerHTML = selectedProjectDesc[0]._desc;

  displayIMGElement.src = selectedProjectImg[0]._source;
  //document.getElementById('pv_projectimage').alt = selectedProjectImg[0]._alt;
}


inputCountry.addEventListener('input', updateProjectFilter);
inputSector.addEventListener('input', updateProjectFilter);
inputProject.addEventListener('input', updatePViewer);

btnTeamCalendar.addEventListener('click', showTeamCalendar);
btnTeamStats.addEventListener('click', showTeamStats);
btnPViewer.addEventListener('click', showPViewer);

btnTeamCalendar.addEventListener('click', updateProjectFilter);
btnTeamStats.addEventListener('click', updateProjectFilter);
btnPViewer.addEventListener('click', updateProjectFilter);

//btnSubmitFilters1.addEventListener('click', updatePViewer)

//btnPViewer.addEventListener('click', updatePViewer);
