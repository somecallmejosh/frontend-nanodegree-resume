var bio = {
  "name" : "Joshua Briley",
  "role" : "Front End Developer",
  "contactInfo" : {
    "streetAddress" : "56 Starkweather St.",
    "city" : "Manchester",
    "state" : "CT",
    "zip" : "06042",
    "email" : "josh@thebrileys.com",
    "phone" : "8602328250",
    "github" : "somecallmejosh",
    "twitter" : "joshuabriley"
  },
  "skills" : [
    "Front End Developer", "UI Designer", "Musician", "Dad", "Husband"
  ],
  "bioPic" : "http://lorempixel.com/400/400/people/",
  "welcomeMessage" : "Hi, I'm Josh. Yadda Yadda Yadda."
};

var work = {
  "jobs" :
    [
      {
        "employer" : "Sports Technologies, LLC",
        "title" : "Front End Developer",
        "location" : "Collinsville, CT",
        "dates" : "June 13 - Present",
        "description" : "Front End Design and Development of Fantasy Sports Applications. We develop awesome gaming apps for professional sports organizations. Primary responsibilities include Haml, Sass, JS/JQuery development in RoR stack."
      },
      {
        "employer" : "East Point Systems, Inc",
        "title" : "Front End Developer",
        "location" : "East Hartford, CT",
        "dates" : "Jan 13 - May 13",
        "description" : "Front End Design and Development of Online Housing Reposession Industry Network. Click to edit position descriptionLead UX/UI designer on short term, large scale web application. Planned and developed landing page testing scenarios for maximum conversion. Saved company $10K/year by minimizing server side dependencies on company website."
      },
      {
        "employer" : "ImageWorks, LLC",
        "title" : "Lead Designer and Front End Developer",
        "location" : "Vernon, CT",
        "dates" : "Aug 08 - Jan 13",
        "description" : "Front End Design and Development of conversion oriented marketing websites. Strategized and implemented systems that decreased design and front end development time by more than 50%. Implemented “Lunch-and-Learn Friday” to train staff on standards based front end development techniques. Designed and developed projects featured on The Food Network and the Hartford Business Journal."
      },
      {
        "employer" : "Para-Diddle Design, LLC",
        "title" : "Owner and Front End Developer",
        "location" : "Manchester, CT",
        "dates" : "Jan 04 - Aug 08",
        "description" : "Front End Design and Development of conversion oriented marketing websites. Responsible for vision, budgeting, marketing/sales and other administrative tasks. Educated clients on best practices and conversion oriented design principles. Increased productivity by training staff on efficient coding and workflow practices."
      }
    ]
};

var projects = {
  "projects" : [
    {
      "title" : "Kenwood Dennard",
      "dates" : "Aug 2014",
      "description" : "AngularFire website that allows easy direct editing of page contents.",
      "images" : [
        "https://dl.dropboxusercontent.com/u/39806773/josh-projects/kenwood-dennard.png",
        "https://dl.dropboxusercontent.com/u/39806773/josh-projects/kenwood-editable.png"
      ]
    },
    {
      "title" : "Chase The Kicker",
      "dates" : "Jul 2013 - May 2014",
      "description" : "College recruiting website that displays seasonal statistics and video highlights.",
      "images" : [
        "https://dl.dropboxusercontent.com/u/39806773/josh-projects/chase-the-kicker.png",
        "https://dl.dropboxusercontent.com/u/39806773/josh-projects/chase-the-kicker-bio.png"
      ]
    },
    {
      "title" : "CT Drummers Association",
      "dates" : "Jan 2012 - Present",
      "description" : "Fundraising website to earn scholarship money for college bound drummers.",
      "images" : [
        "https://dl.dropboxusercontent.com/u/39806773/josh-projects/ct-crummers.png"
      ]
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "Troy University",
      "city" : "Troy, AL",
      "degree" : "Bachelors",
      "graduationYear" : 2001,
      "majors" : ["Biology"]
    },
    {
      "name" : "City Colleges of Chicago",
      "city" : "Hohenfels, Germany",
      "degree" : "Associates",
      "graduationYear" : 1997,
      "majors" : ["General Studies"]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Intro To Computer Science",
      "school" : "Udacity",
      "date" : 2014,
      "url" : "https://www.udacity.com/course/cs101"
    },
    {
      "title" : "Javascript Basics",
      "school" : "Udacity",
      "date" : 2014,
      "url" : "https://www.udacity.com/course/ud804"
    },
    {
      "title" : "Javascript",
      "school" : "Codecademy",
      "date" : 2012,
      "url" : "http://www.codecademy.com/en/tracks/javascript"
    },
    {
      "title" : "JQuery",
      "school" : "Codecademy",
      "date" : 2012,
      "url" : "http://www.codecademy.com/en/tracks/jquery"
    },
    {
      "title" : "A Better Way to Learn AngularJS",
      "school" : "Thinkster",
      "date" : 2014,
      "url" : "https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/"
    }
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedName).append(formattedRole);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var skill;
  for (skill in bio.skills) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}

function displaywork() {
  for (job in work.jobs) {
    var job,
    formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
    formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
    formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates),
    formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description),
    formattedEmployerTitle = formattedEmployer + formattedTitle;
    
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last")
    .append(formattedEmployerTitle)
    .append(formattedDate)
    .append(formattedDescription);
  }
}

displaywork();
