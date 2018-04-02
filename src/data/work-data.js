import hyperloop from '../imgs/hyperloop.png';
import sachacks from '../imgs/sachacks.png';

const workData = {};

workData.UCDhyperloop = {
  name: 'UC.Davis hyperloop',
  image: hyperloop,
  detail: 'This website serves as a showcase for Hyperloop club at UC.Davis to attract new members and sponsors ',
  techs: ['Handlebars', 'MySQL', 'ExpressJs', 'Nodejs', 'Sass', 'AWS'],
  github: [
    { sourceCode: 'https://github.com/LambertTran/UCD-hyperloop' },
  ],
  web: [
    { frontEnd: 'http://www.davishyperloop.com/' },
    { backEnd: 'https://ucd-hyperloop.herokuapp.com/login' },
  ],
};
workData.sachacks = {
  name: 'Sacramento Hackathons',
  image: sachacks,
  detail: 'Website for Sacramento Hackathons',
  techs: ['Javascript', 'Webpack', 'Sass'],
  github: [
    { sourceCode: 'https://github.com/LambertTran/sachacks' },
  ],
  web: [
    { webLink: 'http://sachacks.io/' },
  ],
};

export default workData;