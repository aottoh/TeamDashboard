const btnTeamCalendar = document.getElementById('open-teamcalendar');
const btnTeamStats = document.getElementById('open-teamstats');
const btnPViewer = document.getElementById('open-pviewer');


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

/*

function updateFilters() {
    
    
    let projectFilter = document.getElementById("projectfilter");
    let sectorFilter = document.getElementById("sectorfilter");
  
    let selectedCountry = document.getElementById('countryfilter').value;
    let selectedSector = document.getElementById('sectorfilter').value;
  
    if(selectedCountry === 'All') {
      if(selectedSector === 'All'){
        let arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._country === selectedCountry).map(element => element._name))];
      
    } else {
        let arrAllowedProjects = [... new Set(arrAllProjects.filter(element => (element._country === selectedCountry) && (element._team === selectedSector)).map(element => element._name))];
    }

    } else {
  
      if(selectedSector === 'All'){
        let arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._country === selectedCountry).map(element => element._name))];

      } else {
        let arrAllowedProjects = [... new Set(arrAllProjects.filter(element => (element._country === selectedCountry) && (element._team === selectedSector)).map(element => element._name))];
  
      }
  
  }
  
   
  
  //  if(selectedSector === 'All'){
  //    let arrAllowedProjects = [... new Set(arrAllProjects.filter(element => element._country === selectedCountry).map(element => element._name))];
  //  } else {
  //    let arrAllowedProjects = [... new Set(arrAllProjects.filter(element => (element._country === selectedCountry) && (element._team === selectedSector)).map(element => element._name))];
  //  }
  
    projectFilter.options.length = 0;

    const firstElementAll = document.createElement('option');
  
    firstElementAll.text = "All";
  
    projectFilter.add(firstElementAll);
  
   
  
    arrAllowedProjects.forEach(function(element){
      let newEntry = document.createElement('option');
      newEntry.text = element
      projectFilter.add(newEntry);
    })
  
  };
  
   
document.getElementById('countryfilter').addEventListener('input', updateFilters);
  
  */


btnTeamCalendar.addEventListener('click', showTeamCalendar);
btnTeamStats.addEventListener('click', showTeamStats);
btnPViewer.addEventListener('click', showPViewer); 
