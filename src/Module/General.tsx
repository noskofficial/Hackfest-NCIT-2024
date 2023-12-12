import hackathonLogo from './Assets/hackathonLogo.png';

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from './Assets/boy.png';
import pass from './Assets/sponsorsLogos/1pass.png';
import ACF from './Assets/sponsorsLogos/ACF.png';
import cfc from './Assets/sponsorsLogos/cfc.png';
import echoAR from './Assets/sponsorsLogos/echoAR.png';
import egg from './Assets/sponsorsLogos/egg.png';
import glimpse from './Assets/sponsorsLogos/glimpse.png';
import interviewC from './Assets/sponsorsLogos/interview-cake.jpg';
import ll from './Assets/sponsorsLogos/ll.png';
import qoom from './Assets/sponsorsLogos/qoom.svg';
import Replit from './Assets/sponsorsLogos/replit.png';
import sublime from './Assets/sponsorsLogos/sublime.png';
import taskade from './Assets/sponsorsLogos/taskade.png';
import lyin from './Assets/teami/lyin.jpg';

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from './Assets/teami/me.png';
import moon from './Assets/teami/moon.png';
// import Ryah from './Assets/teami/Ryah.jpg';
import zoha from './Assets/teami/zoha.png';

const TOP_SECTION = {
  TITLE: 'Join HackFest NCIT 2024',
  Typed_effect: ['72 hours of creation', 'Win awesome prizes'],
  SHORT_DESCRIPTION:
    'Join us on 11th, 12th & 13th January 2024 with over 100 students from NCIT for 72 hours of creation, innovation, & fun.',
  IMG_SRC: boy,
  DISCORD_LINK: '',
  JUDGES_FORM_LINK:
    'https://nosk.org.np/',
  HACKERS_REGISTRATION_FORM_LINK:
    'https://nosk.org.np/'
};

const SOCIALS = {
  instagram: 'https://www.instagram.com/officialnosk/',
  discord: 'https://discord.gg/WFBkV5k4Ue',
  facebook: 'https://www.facebook.com/nosklub/',
  linkedin: 'https://www.linkedin.com/company/officialnosk/',
  twitter: 'https://twitter.com/officialnosk',
  devpost: 'https://devpost.com/',
  email: 'mailto:nosk@ncit.edu.np',
  mail: 'nosk@ncit.edu.np'
};

const MIDDLE_SECTION = {
  TITLE: 'What is Hackfest NCIT 2024?',
  LONG_DESCRIPTION:
    'HackFest NCIT 2024 is 72 hour long running hackathon will be held on November 20th & 21th , Hack Fest 2024 is the lethargy breaking initiative  driven to energize and engage NCIT to take active role and participation in the Tech domain through innovative and competitive events, competitions, workshops and techno centric activities. We call for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take a part to win awesome prizes and collaborate with other developers .',
  LOGO: hackathonLogo
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: 'https://nosk.org.np/'
  },
  JOIN_TEAM: {
    required: true,
    src: 'https://nosk.org.np/'
  },
  Privacy_policy: {
    required: true,
    src: 'https://nosk.org.np/'
  },
  Terms_of_use: {
    required: true,
    src: 'https://nosk.org.np/'
  }
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 11-01-2024, 12-01-2024,13-01-2024 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 1,
  year: 2024
};

const schedule = [
  {
    day: '11-1-2024',
    events: [
      {
        title: 'First Day of Hackathon',
        timings: '10AM - 5PM',
        link: 'https://nosk.org.np/'
      }
    ]
  },
  {
    day: '12-1-2024',
    events: [
      {
        title: 'Second Day First Half of Hackathon',
        timings: '10AM - 1PM',
        link: 'https://nosk.org.np/'
      },
      {
        title: 'Second day Second Half of Hackathon',
        timings: '2PM - 5PM',
        link: 'https://nosk.org.np/'
      }
    ]
  },
  {
    day: '13-1-2024',
    events: [
      {
        title: 'Third Day of Hackathon',
        timings: '10AM - 5PM',
        link: 'https://nosk.org.np/'
      }
    ]
  },
  {
    day: '1-12-2021',
    events: [
      {
        title: '',
        timings: '10AM - 5PM',
        link: 'https://nosk.org.np/'
      }
    ]
  },
  {
    day: '1-1-2022',
    events: [
      {
        title: 'Intro to phycycology',
        timings: '10AM - 5PM',
        link: 'https://nosk.org.np/'
      }
    ]
  }
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: 'overall First',
      content:
        'First Overall prize will be given to a project that outstands all other submissions'
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: 'overall Second',
      content:
        'Second Overall prize will be given to the second best project of the hackathon'
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: 'Third Second',
      content:
        'Best third overall project of the hackathon will win some awesome prizes'
    }
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: 'Best Solo',
      content:
        'You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team'
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: 'Best UI/UX',
      content: 'Project with most creative designs will be UI/UX track'
    },
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: 'Best Project with the use of Open Source Tools',
      content: 'Must use Open Source Tools in your project to win this category'
    },
  ],
  [
    //Array 3
    {},
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: 'More prizes',
      content: 'More prizes will be revealed later'
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Bibek',
      role: 'Bibek',
      github: 'https://github.com/bibekdhkl',
      linkedin: 'https://www.linkedin.com/in/bibekdhkl/',
      img: me
    },
    {
      Name: 'Aishu',
      role: 'Aishu',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Bishal',
      role: 'Bishal',
      github: '',
      linkedin: '',
      img: me
    }
  ],
  [
    //Array 2
    {
      Name: 'Kushal',
      role: 'Kushal',
      github: '',
      linkedin: '',
      img: zoha
    },
    {
      Name: 'Prince',
      role: 'Prince',
      github: '',
      linkedin: '',
      img: zoha
    },
    {
      Name: 'Amrit',
      role: 'Amrit',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];

const JudgesInfo = [
  [
    //Array 1
    {
      Name: 'Madan sir',
      role: 'Madan sir',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Principal Sir',
      github: '',
      linkedin: '',
      img: me
    },
    {
      Name: 'Ryah Garcia',
      role: 'Mukesh Dai',
      github: '',
      linkedin: '',
      img: zoha
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Bimal Dai',
      github: '',
      linkedin: '',
      img: zoha
    },
    {
      Name: 'Zoheb',
      role: 'Bikalpa Dai',
      github: '',
      linkedin: '',
      img: zoha
    },
    {
      Name: 'Zoheb',
      role: 'Shreeya Didi',
      github: '',
      linkedin: '',
      img: lyin
    }
  ]
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

// const sponsorLogos = [
//   [{src: cfc}, {src: sublime}, {src: echoAR}], //Array 1
//   [{src: taskade}, {src: Replit}, {src: qoom}], //Array 2
//   [{src: interviewC}, {src: pass}, {src: glimpse}], //Array 3
//   [{src: egg}, {src: ll}, {src: ACF}] //Array 4
// ];
const sponsorLogos = [
  [{},{src: cfc},{}], //Array 1
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: 'What is a Hackathon?',
        content:
          'A hackathon is a event where "hackers" collaborate on creating a functioning software and hardware by the end of the event.'
      },
      {
        label: 'Who can attend?',
        content:
          'Hackfest NCIT is open to only NCIT students.'
      },
      {
        label: 'I am a first time hacker, what should I do?',
        content:
          'No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.'
      },
      {
        label: 'How team formation works?',
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: 'How to register myself in the hackathon?',
        content:
          'All you need is to fill our form above and join Discord, we will guide you through everything there'
      },
      {
        label: 'I have more questions?',
        content:
          'Reach us directly at (nosk@ncit.edu.np) we would happy to help you.'
      },
      {
        label: 'Can I volunteer?',
        content:
          'We are not currently looking for volunteers, but you can join our Discord server to stay updated for any future opportunities.'
      },
      {
        label: 'Will there be swag?',
        content: 'Yes! Participants will recieveing Hackfest NCIT swag!.'
      }
    ]
  ]
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate
};
