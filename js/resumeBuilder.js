/**
 * Created by luizmiccieli on 23/07/17.
 */
/************************
 *
 * HEADER
 *
 ***********************/
var bio ={
    name: "Luiz Miccieli",
    role: "Consultant",
    welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et " +
    "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
    "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    contact: {
        email: "luiz.miccieli@gmail.com",
        mobile: "+5561992584303",
        github: "MrMicc",
        twitter: "@MrMicc",
        location: "Brasília, Brasil"
    },
    biopic: "images/fry.jpg",
    logo: {
        mobileLogo: "http://via.placeholder.com/50x50",
        tabletLogo: "http://via.placeholder.com/70x70",
        desktopLogo: "http://via.placeholder.com/100x100"
    },

    mainImage: {
        mobile: "http://via.placeholder.com/265x150",
        phablet: "http://via.placeholder.com/565x250",
        tablet: "http://via.placeholder.com/768x350",
        desktop: "http://via.placeholder.com/965x350"

    },
    skills: ["consultant", "telcom", "nego doido"],
    display: null

};

bio.display = function () {
    $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));
    $('#name').after(HTMLheaderRole.replace('%data%',bio.role));

    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

    var formattedContat = mountContatct();
    $('#topContacts').append(formattedContat);

    if (bio.skills.length > 0) {
        //language=JQuery-CSS
        $("#header").append(HTMLskillsStart);

        //running over all skills
        bio.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }

    $('#skills-h3').before(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));


};
bio.display();


//FUNCTION responsible to mount al contanct list
function mountContatct(){
    "use strict";
    var formattedContat = HTMLmobile.replace('%data%',bio.contact.mobile);
    formattedContat += HTMLemail.replace("%data%", bio.contact.email);
    formattedContat += HTMLgithub.replace('%data%', bio.contact.github);
    formattedContat += HTMLtwitter.replace('%data%', bio.contact.twitter);
    formattedContat += HTMLlocation.replace('%data%', bio.contact.location);
    return formattedContat;
}


/*************************
 *
 * WORK
 *
 *
 *************************/
var works =
    {
        jobs: [
            {
                title: "Caixa Seguradora",
                jobPosition: "Project Manager/Product Owner",
                employer: "Millenium do Brasil",
                description: "Lorem Lorem Lorem Lorem lorem huahaii lore",
                dates: {
                    start: "Setember - 2013",
                    end: "Until Today"
                },
                location: "Brasília"
            },
            {
                title: "Title of Second  job",
                jobPosition: "programmer",
                employer: "ACN",
                description: "Lorem Lorem Lorem Lorem lorem huahaii lore",
                dates: {
                    start: "Setember - 2007",
                    end: "Setember - 2013"
                },
                location: "Brasilia"

            }],
        display: null
    };

works.display = function (){
    //running over works
    works.jobs.forEach(function (work) {
        //inserting the work-entry div inside of work experience
        $("#workExperience").append(HTMLworkStart);

        //concatenating the Employer and Title
        var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.employer) +
            HTMLworkTitle.replace("%data%", work.title);

        //putting the title
        $(".work-entry:last").append(formattedEmployerTitle);
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.location));

        //putting the dates from - to
        var formattedDates = HTMLworkDates.replace("%data%", work.dates.start+", "+work.dates.end);
        $(".work-entry:last").append(formattedDates);

        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.description));


    });
};
works.display();



/*************************************
 *
 * PROJECTS
 *
 **************************************/

var projects =
    [
        {
            title: "New Logged Area",
            client: "Caixa Seguradora",
            dates: {
                start: "01/Jul/2017",
                end: "Until Today"
            },
            country: {
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "This project consist to redesign all user experience, integrations and the technological " +
            "application of their approximately 9 million of clients in the logged area.",
            image: {
                mobile: "http://via.placeholder.com/250x100",
                destkop: "https://via.placeholder.com/300x150",
                alt: "New logged area home page"
            }
        },
        {
            title: "Interine of all portal",
            client: "Caixa Seguradora",
            dates: {
                start: "14/Feb/2017",
                end: "30/Jun/2017"
            },
            country: {
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "It was responsible for all on going project, new projects and production support. Where portal" +
            "consist in the web store, CMS communication and logged area of all products and segments of the insurance company.",
            image: {
                mobile: "http://via.placeholder.com/250x100",
                destkop: "https://via.placeholder.com/300x150",
                alt: "New logged area home page"
            }
        },

        {
            title: "Coordinator",
            client: "Caixa Seguradora",
            dates: {
                start: "15/Jan/2015",
                end: "14/Feb/2017"
            },
            country: {
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "Was responsible the coordinating of all on going projects and new projects of 6 business unit under " +
            "the entire web portal",
            image: {
                mobile: "http://via.placeholder.com/250x100",
                destkop: "https://via.placeholder.com/300x150",
                alt: "New logged area home page"
            }
        },
        {
            title: "New Projects",
            client: "Caixa Seguradora",
            dates: {
                start: "10/Set/2014",
                end: "15/Jan/2015"
            },
            country: {
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "Responsible for planning of new projects that was the responsibility of the company IT directory",
            image: {
                mobile: "http://via.placeholder.com/250x100",
                destkop: "https://via.placeholder.com/300x150",
                alt: "New logged area home page"
            }
        },

        {
            title: "Title of second project",
            client: "XPTO",
            dates: {
                start: 2012,
                end: 2015
            },
            country: {
                name: 'Brazil',
                city: 'Rio de Janeiro',
                flag: '🇧🇷'
            },
            description: "Lorem ipsum lorem lorem aleluia",
            image: {
                mobile: "http://via.placeholder.com/250x100",
                destkop: "https://via.placeholder.com/300x150",
                alt: "lorem lorem"
            }
        }
    ];



projects.display = function(){
        projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);

            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
            var formattedDate  = project.dates.start+" - "+project.dates.end;
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", formattedDate));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.description));

            $(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.image.destkop));

        });
};

projects.display();



/*************************************
 *
 * EDUCATION
 *
 **************************************/

var education = {
    schools: [
        {
            name: "CECAP",
            location: "Brasilia",
            degreeDates: {
                start: 1995,
                end: 1999
            },
            ulr: "uol.com",
            majors: ["I dont remember"],
            degree : "College"
        },
        {
            name: "Marista",
            location: "Brasilia",
            degreeDates: {
                start: 2000,
                end: 2002
            },
            ulr: "google.com",
            majors: ["None"],
            degree: "High School"
        }
    ],

    onlineCourses: [
        {
            title: "Nano Degree",
            school: "Udacity",
            dates: {
                start: "2017",
                end: "2017"
            },
            url: "http://www.udacity.com"
        }
    ],
    display: null
};

education.display = function () {

    mountSchools(education.schools);
    mountOnlineCourses(education.onlineCourses);

};

function mountOnlineCourses(onlineCourses) {
    $('.education-entry:last').after(HTMLonlineClasses);

    onlineCourses.forEach(function (onlineCourse){
        "use strict";
        $('#education').find('h3').after(HTMLschoolStart);
        $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', onlineCourse.title));
        $('.education-entry:last').find('a').append(HTMLonlineSchool.replace('%data%', onlineCourse.school));
        $('.education-entry:last').append(HTMLonlineDates.replace('%data%', onlineCourse.dates.end));
        $('.education-entry:last').append(HTMLonlineURL.replace('%data%', onlineCourse.url));
    });

}


function mountSchools(schools) {

    console.log(schools);
    var formattedSchools = '';
    schools.forEach( function(school){
        "use strict";
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(HTMLschoolName.replace('%data%', school.name));
        $('.education-entry:last').find('a').append(HTMLschoolDegree.replace('%data%',school.degree));
        $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
        $('.education-entry:last').append(HTMLschoolDates.replace('%data%',school.degreeDates.end));


        school.majors.forEach(function (major) {
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%',major));
        });



    });

    return formattedSchools;

}


education.display();


/*************************************
 *
 * FOOTER
 *
 **************************************/
$('#footerContacts').append(mountContatct());


/*************************************
 *
 * MAP
 *
 **************************************/

$("#mapDiv").append(googleMap);


