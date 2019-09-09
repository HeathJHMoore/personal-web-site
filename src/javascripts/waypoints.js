import 'waypoints/lib/noframework.waypoints.min.js';

const arrayOfIds = [
  'HTML5',
  'CSS3',
  'Javascript',
  'React',
  'Git',
  'Github',
  'NPM',
  'SQL',
  'VSCode',
  'Webpack',
];

const setWaypoints = (array) => {
  const arrayOfWaypoints = []
  array.forEach((id) => {
    const techWayPoint = new Waypoint({
      element: document.getElementById(id),
      handler: (direction) => {
        if (direction === 'down') {
          const targetedElement = document.getElementById(id);
          targetedElement.classList.add('fadeIn')
        }
      },
      offset: '75%'
    });
    arrayOfWaypoints.push(techWayPoint)
  })
  return arrayOfWaypoints
}

export default {arrayOfIds, setWaypoints}
