/*All the objects for the resume. TODO Finish documentation and CSS Styling. Also make note's of problem areas, get on git hub?
*/
var  bio = {
	"name": "Sullivan Wilkes",
	"role": "Beekeeper",
	"contacts": {
		"mobile": "1-828-434-0066",
        "email": "sulli.wilkes@gmail.com",
        "github": "sullibob",
		"location": "Creston NC"
	},
	"welcomeMessage": "Hey look you found my resume! I'm pretty awesome and this doesn't do me justice;)",
    "skills": ["Beekeeping", "Ultimate", "Support", "Farming"],
    "biopic": "images/me.jpg"
};

var work = {
	"jobs": [{
		"employer": "Faith Mountain Farm",
		"title": "Farmhand",
		"location": "Creston, NC",
		"dates": "2006-now",
		"description": "Family farm, that provides baked goods, honey and meat"
		},
		{
			"employer": "HiveTracks",
			"title": "Support specialist",
			"location": "Boone NC",
			"dates": "2010-now",
			"description": "Record keeping software for Beekeepers"
			}]
};

var projects =  {
 	"projects": [{
 		"title": "Build a movie website",
 		"dates": "2016",
 		"description": "building a movie website, that would play trailers, made from importing templates and using classes in python",
 		"images": ["images/movie_website.PNG"]
 	}, {
 		"title": "Make a Madlib game",
 		"dates": "2015",
 		"description": "Build a Madlib game using python, took in user inputs and replaced the blanks with those user inputs",
 		"images": ["images/Madlib_prod.PNG"]
 	}]


 };

var education = {
	"schools": [
	{
		"name": "Homeschooled",
		"location": "Creston NC 28615",
		"degrees": "General education",
		"major": "None",
		"dates": "2001 - 2016",
		"url":"https://faithmtnfarm.com/"
	}]
};

var onlineCouerse = {
	"onlineClass": [
	{
		"title": "IPND",
	    "school": "Udacity",
	    "dates": "2015 - 2016",
	    "url": "https://www.udacity.com"
	}
	]
};



/* All the displays objects*/
bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedName, formattedRole).append(formattedBiopic, formattedMsg);

	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);


};


work.display = function (){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTilte = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTilte, formattedDates, formattedDescription );

	}
};

projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

	    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

	   /*This is where my code doesn't seem to work, I've looked at other peoples and made mine according to those, but it doesn't
	   seem to want to work?*/
    if (projects.projects[project].images.length > 0) {
	   		for (image in projects.projects[project].Images) {
	   			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	   			$(".project-entry:last").append(formattedImage);
	   		}
	   	 }
	   	}
};

education.display = function() {
	/* formatting strangely?*/
	$("#education").append(HTMLschoolStart);


	for (school in education.schools){

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degrees);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);

		}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in onlineCouerse.onlineClass){
		var formattedTitle = HTMLonlineTitle.replace("%data%", onlineCouerse.onlineClass[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", onlineCouerse.onlineClass[course].school);
		var formattedDate = HTMLonlineDates.replace("%data%", onlineCouerse.onlineClass[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", onlineCouerse.onlineClass[course].url);
		$(".education-entry:last").append(formattedTitle, formattedSchool, formattedDate, formattedUrl);

	}


};

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

bio.display();
work.display();
projects.display();
education.display();
