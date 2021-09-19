import 'bootstrap';
import '../styles/main.scss';
import projects from './projects';
import waypointStuff from './waypoints';


const init = () => {
  //no longer printing projects because they dont work
  // projects.printProjects();
  waypointStuff.setWaypoints(waypointStuff.arrayOfIds)
};

init();
