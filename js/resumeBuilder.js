/**
 * Created by luizmiccieli on 23/07/17.
 */
/************************
 *
 * HEADER
 *
 ***********************/
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

bio.works.display = function (){
    //running over works
    bio.works.forEach(function (work) {
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

bio.works.display();



/*************************************
 *
 * PROJECTS
 *
 **************************************/

bio.works.displayProject = function(){
    bio.works.forEach(function (work) {
        work.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);

            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",project.title));
            var formattedDate  = project.dates.start+" - "+project.dates.end;
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", formattedDate));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",project.description));

            $(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.image.destkop));

        });

    });

};

bio.works.displayProject();



/*************************************
 *
 * EDUCATION
 *
 **************************************/
bio.education.display = function () {

    mountSchools(bio.education.schools);
    mountOnlineCourses(bio.education.onlineCourses);

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


bio.education.display();


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


