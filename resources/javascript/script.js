
const initializeProjectfilter = (filterID) => {

  let filterElement = document.getElementById(filterID);  
  let arrProjectList =[]

  if(filterElement.id === "projectfilter"){
    arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._name))];
  } else if (filterElement.id === "sectorfilter"){
    arrProjectList = [... new Set(arrAllProjects.filter(element => element._invbm === 'inv').map(element => element._team))];
  } else if (filterElement.id === "countryfilter"){
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
   
  
  initializeProjectfilter("countryfilter");
  initializeProjectfilter("sectorfilter");
  initializeProjectfilter("projectfilter");
  