import util from './util';
import getProjects from './getProjects';

const printProjects = () => {
  let domString = '';
  getProjects.getProjects()
    .then((resp) => {
      resp.forEach((project) => {
        domString += '<div class="project-card">';
        domString += '<div class="project-name">';
        domString += `<h2>${project.name}</h2>`;
        domString += '</div>';
        domString += `<p>${project.description}</p>`;
        domString += '<div class="project-buttons">';
        domString += `<a class="project-button" href=${project.github}>Github Repo</a>`;
        domString += `<a class="project-button" href=${project.url}>Live Project Demo</a>`;
        domString += '</div>';
        domString += '</div>';
      });
      util.printToDom('projects', domString);
    })
    .catch(console.error('messed up'));
};

export default { printProjects };
