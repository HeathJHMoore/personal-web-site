import 'bootstrap';
import '../styles/main.scss';
import projects from './projects';
import waypointStuff from './waypoints';


const init = () => {
  projects.printProjects();
  waypointStuff.setWaypoints(waypointStuff.arrayOfIds)
};

init();
