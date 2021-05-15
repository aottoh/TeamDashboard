/*####################################
## filename: declarations.js
## projectname: TeamDashboard
## author: Alexander Hoffmann
## version: 0.1.1
## date: 2021-05-13
####################################*/

const btnTeamCal = document.getElementById('li_teamcalendar');
const btnTeamOverview = document.getElementById('li_teamoverview');
const btnPViewer = document.getElementById('li_pviewer');
const btnFruitBoard = document.getElementById('li_fruitboard');
const btnVegBoard = document.getElementById('li_vegboard');

const btnFruitPortfolio = document.getElementById('li_fruitportfolio');
const btnFruitPipeline = document.getElementById('li_fruitpipeline');
const btnFruitTeamInfo = document.getElementById('li_fruitteaminfo');
const btnVegPortfolio = document.getElementById('li_vegportfolio');
const btnVegPipeline = document.getElementById('li_vegpipeline');
const btnVegAcquisition = document.getElementById('li_vegacquisition');
const btnVegTeamInfo = document.getElementById('li_vegteaminfo');

const secPViewer = document.getElementById('sec_pviewer');
const secTeamCal = document.getElementById('sec_teamcalendar');
const secTeamOverview = document.getElementById('sec_teamoverview')
const secFruit = document.getElementById('sec_fruitboard');
const secVeg = document.getElementById('sec_vegboard');

const divSubheader = document.getElementById('subheader');
const divProjectfilters = document.querySelector('.div-subheader_filters');
const divTimerange = document.querySelector('.div-subheader_timerange');
const divFruitMenu = document.getElementById('fruitboardmenu');
const divVegBoard = document.getElementById('vegboardmenu');
const divTeamMenu = document.getElementById('overviewmenu');

const secFruitPortfolio = document.getElementById('fruitboard_portfolio');
const secFruitPipeline = document.getElementById('fruitboard_pipeline');
const secFruitTeamInfo = document.getElementById('fruitboard_teaminfo');
const secVegPortfolio = document.getElementById('vegboard_portfolio');
const secVegPipeline = document.getElementById('vegboard_pipeline');
const secVegAcquisition = document.getElementById('vegboard_aquisition');
const secVegTeamInfo = document.getElementById('vegboard_teaminfo');

let spanHeader = document.querySelector('header span');

let inputCountry = document.getElementById('countryfilter');
let inputSector = document.getElementById('sectorfilter');
let inputProject = document.getElementById('projectfilter');

let inputStartDate = document.getElementById('startdate');
let inputEndDate = document.getElementById('enddate');


let pvTitleH1 = document.getElementById('pv_general_title');
let pvTitleH2 = document.getElementById('pv_general_title_eng');
let displayIMGElement = document.getElementById('img_pv_info');

let arrCurrentProjectList = arrAllProjects.map(element => element._name);
