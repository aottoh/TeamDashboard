/*####################################
## filename: script.js
## projectname: TeamDashboard
## author: Alexander Hoffmann
## version: 0.1.1
## date: 2021-05-13
####################################*/

const initializeSelectFilters = (filterID) => {

  let filterElement = document.getElementById(filterID);
  const firstElementAll = document.createElement('option');
  firstElementAll.text = "All";
  let arrProjectList =[];
  
  switch(filterID){
    case "projectfilter":
      arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._name))];
      break;
    case "sectorfilter":
      arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._team))];
      break;
    case "countryfilter":
      arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._country))];
      break;
  }

  filterElement.add(firstElementAll);

  arrProjectList.forEach(function(element){
    let newEntry = document.createElement('option');
    newEntry.text = element
    filterElement.add(newEntry);
  })
};  

const initializeTimeranges = () => {

  let todayString = new Date().toISOString().slice(0, 10);
  let targetDate = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 28)
  let targetString = targetDate.toISOString().slice(0, 10);
  
  inputStartDate.value = todayString;
  inputEndDate.value = targetString;

};

function initializeStats() {
  let h2TotalPortfolioValue = document.querySelector('#tso-portfoliovalue h2');
  let h2TotalPipelineValue = document.querySelector('#tso-portfoliovalue h2');

  h2TotalPortfolioValue.innerHTML = 0;
}
   
  
  initializeSelectFilters("countryfilter");
  initializeSelectFilters("sectorfilter");
  initializeSelectFilters("projectfilter");

  initializeTimeranges();
  
  initializeStats();
  