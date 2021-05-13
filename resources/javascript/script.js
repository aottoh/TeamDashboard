
const initializeProjectfilter = (filterID) => {

  let filterElement = document.getElementById(filterID);  
  let arrProjectList =[]

  if(filterElement.id.includes("projectfilter")){
    arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._name))];
  } else if (filterElement.id.includes("sectorfilter")){
    arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._team))];
  } else if (filterElement.id.includes("countryfilter")){
    arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._country))];
  }

  const firstElementAll = document.createElement('option');
  firstElementAll.text = "All";

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
   
  
  initializeProjectfilter("countryfilter");
  initializeProjectfilter("sectorfilter");
  initializeProjectfilter("projectfilter");
  initializeProjectfilter("countryfilter2");
  initializeProjectfilter("sectorfilter2");
  initializeProjectfilter("projectfilter2");

  initializeTimeranges();
  initializeStats();
  