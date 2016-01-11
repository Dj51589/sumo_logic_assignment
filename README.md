Front End Problem
==================================================

Problem :- Using A​ngularJS​(or another JavaScript framework or library), create a dialog that allows users to select a Team and an Employee. 
The list of Employees depends on which Team the user has selected.
The checkbox on the form is a standard HTML checkbox and has no additional functionality.
The Team and Employee input elements should provide auto­complete so that users can type the first letters and be shown suggestions. 
	Example: If the Finance team is chosen in the Team field, and “Ca” is entered in the Employee field, three names should be suggested to the user: Caleb Brown, Carol Smithson and Carl Sorensen.

Instructions: Use the following data to drive the dialog:
	[
		{team:'Engineering',employees:['LawanaFan','LarryRainer','RahulMalik','Leah
		Shumway']}, {team:'Executive',employees:['RohanGupta','RondaDean','RobbyMaharaj']}, {team:'Finance',employees:['CalebBrown','CarolSmithson','CarlSorensen']}, {team:'Sales',employees:['AnkitJain','AnjaliMaulingkar']}
	]


Task Details
==================================================
# AngularJS assignment

## Overview

This application contains a home page, contains a button to open dialog window. In Dialog window, we have a dropdown to select team and according to that employee list fills.

## Prerequisites

### python to run the server
To run the application

## Workings of the application

- The application filesystem layout structure is based on the single page application.
- There is no dynamic backend (no application server) for this application. We have used a static JSON data.

### Installing dependencies
Python

### Running the app during development

- Run python -m SimpleHTTPServer 8000
- navigate your browser to 'http://localhost:8000' to see the app running in your browser.

## Application Directory Layout

	static/	
		JS/ 	
			Controllers/	
				homeController.js 	--> Business logic of home page	
			Directives/	
				directive.js 	-> Contains directive that we are using in Home page. It holds directive to open modal window
			Libs/	
				angular.min.js     --> angularjs library file
				angular-route.js   --> angular routing library file
			module.js 	--> All modules will be here
			route.js 	--> Frontend routing
		styles/             
			main.css  --> Style sheet of application
		templates/	
			Dialogs/	
				teamdialog.HTML 	--> Team dialog template
			home.HTML 	--> Frontend Home Page
	index.html           --> app layout file (the main html template file of the app)
	indexCss.HTML 		--> All Css files are here
	indexJS.HTML 		--> All Script files are here
      

## Contact
Dheeraj Jaiswal
jdheeraj32@yahoo.com
9810550702

