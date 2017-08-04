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
    contacts: {
        email: "luiz.miccieli@gmail.com",
        mobile: "+5561992584303",
        github: "MrMicc",
        twitter: "@MrMicc",
        location: "Brasília, Brasil"
    },
    biopic: "images/fry.jpg",
    logo: { //that parameters is been using in another project mine
        mobileLogo: "http://via.placeholder.com/50x50",
        tabletLogo: "http://via.placeholder.com/70x70",
        desktopLogo: "http://via.placeholder.com/100x100"
    },

    mainImage: {  //that parameters is been using in another project mine
        mobile: "http://via.placeholder.com/265x150",
        phablet: "http://via.placeholder.com/565x250",
        tablet: "http://via.placeholder.com/768x350",
        desktop: "http://via.placeholder.com/965x350"

    },
    skills: ["consultant", "telcom", "nego doido"]
};

bio.display = function () {
    $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));
    $('#name').after(HTMLheaderRole.replace('%data%',bio.role));

    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));

    var formattedContat = mountContatct();
    $('#topContacts, #footerContacts').append(formattedContat); //adding contacts to footer and header

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
    var formattedContat = HTMLmobile.replace('%data%',bio.contacts.mobile);
    formattedContat += HTMLemail.replace("%data%", bio.contacts.email);
    formattedContat += HTMLgithub.replace('%data%', bio.contacts.github);
    formattedContat += HTMLtwitter.replace('%data%', bio.contacts.twitter);
    formattedContat += HTMLlocation.replace('%data%', bio.contacts.location);
    return formattedContat;
}


/*************************
 *
 * WORK
 *
 *
 *************************/
var work =
    {
        jobs: [
            {
                title: "Project Manager/Product Owner",
                employer: "Millenium do Brasil",
                description: "Lorem Lorem Lorem Lorem lorem huahaii lore",
                dates:  "Setember 2013 - Today",
                location: "Brasília"
            },
            {
                title: "programmer",
                employer: "ACN",
                description: "Lorem Lorem Lorem Lorem lorem huahaii lore",
                dates: "Setember 2007 - Setember 2013",
                location: "Brasilia"

            }]
    };

work.display = function (){
    //running over work
    work.jobs.forEach(function (work) {
        //inserting the work-entry div inside of work experience
        $("#workExperience").append(HTMLworkStart);

        //concatenating the Employer and Title
        var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.employer) +
            HTMLworkTitle.replace("%data%", work.title);

        //putting the title
        $(".work-entry:last").append(formattedEmployerTitle);
        $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.location));

        //putting the dates from - to
        var formattedDates = HTMLworkDates.replace("%data%", work.dates);
        $(".work-entry:last").append(formattedDates);

        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.description));


    });
};
work.display();



/*************************************
 *
 * PROJECTS
 *
 **************************************/

var projects =
    {
        projects: [
        {
            title: "New Logged Area",
            client: "Caixa Seguradora",
            dates:  "July 2017 - Today",
            country: { //changed location to country, make more sense to me
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "This project consist to redesign all user experience, integrations and the technological " +
            "application of their approximately 9 million of clients in the logged area.",
            images:
                [
                    "http://via.placeholder.com/300x150",
                    "https://via.placeholder.com/300x150"
                ]
        },
        {
            title: "Interine of all portal",
            client: "Caixa Seguradora",
            dates: "February 2017 - July 2017",
            country: { //changed location to country, make more sense to me
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "It was responsible for all on going project, new projects and production support. Where portal" +
            "consist in the web store, CMS communication and logged area of all products and segments of the insurance company.",
            images:
                [
                    "http://via.placeholder.com/300x150",
                    "https://via.placeholder.com/300x150"
                ]
        },

        {
            title: "Coordinator",
            client: "Caixa Seguradora",
            dates: "January 2015 - February 2017",
            country: { //changed location to country, make more sense to me
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "Was responsible the coordinating of all on going projects and new projects of 6 business unit under " +
            "the entire web portal",
            images:
                [
                    "http://via.placeholder.com/300x150",
                    "https://via.placeholder.com/300x150"
                ]
        },
        {
            title: "New Projects",
            client: "Caixa Seguradora",
            dates:  "September 2014 - January 2015",
            country: { //changed location to country, make more sense to me
                name: 'Brazil',
                city: 'Brasília',
                flag: '🇧🇷'
            },
            description: "Responsible for planning of new projects that was the responsibility of the company IT directory",
            images:
                [
                    "http://via.placeholder.com/300x150",
                    "https://via.placeholder.com/300x150"
                ]
        },

        {
            title: "Title of second project",
            client: "XPTO",
            dates: "January 2012 - September 2012",
            country: { //changed location to country, make more sense to me
                name: 'Brazil',
                city: 'Rio de Janeiro',
                flag: '🇧🇷'
            },
            description: "Lorem ipsum lorem lorem aleluia",
            images:
                [
                    "http://via.placeholder.com/300x150",
                    "https://via.placeholder.com/300x150"
                ]
        }]
    };



projects.display = function(){
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);

            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.description));

            project.images.forEach(function (image) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%",image));
            });


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
            dates: "1995 - 1999",
            url: "uol.com",
            majors: ["I dont remember"],
            degree : "College"
        },
        {
            name: "Marista",
            location: "Brasilia",
            dates: "2000 - 2002",
            url: "google.com",
            majors: ["None"],
            degree: "High School"
        }
    ],

    onlineCourses: [
        {
            title: "Nano Degree",
            school: "Udacity",
            dates: "2017 - 2017",
            url: "http://www.udacity.com"
        }
    ]
};

education.display = function () {

    mountSchools(education.schools);
    mountOnlineCourses(education.onlineCourses);

    function mountOnlineCourses(onlineCourses) {
        $('.education-entry:last').after(HTMLonlineClasses);

        onlineCourses.forEach(function (onlineCourse){
            "use strict";
            $('#education').find('h3').after(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', onlineCourse.title));
            $('.education-entry:last').find('a').append(HTMLonlineSchool.replace('%data%', onlineCourse.school));
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', onlineCourse.dates));
            $('.education-entry:last').append(HTMLonlineURL.replace('%data%', onlineCourse.url));
        });

    }


    function mountSchools(schools) {

        var formattedSchools = '';
        schools.forEach( function(school){
            "use strict";
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace('%data%', school.name));
            $('.education-entry:last').find('a').append(HTMLschoolDegree.replace('%data%',school.degree));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%',school.dates));


            school.majors.forEach(function (major) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%',major));
            });



        });

        return formattedSchools;

    }

};





education.display();





/*************************************
 *
 * MAP
 *
 **************************************/

$("#mapDiv").append(googleMap);


