import HikesController from "./hikesController.js";

const hike = new HikesController('hikes');
window.addEventListener('load', () =>{
    hike.showHikeList();
});



