let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 17) {
	greeting = 'Good evening!';
}

else if (hourNow > 11) {
  greeting = 'Good afternoon!';
}

else if (hourNow > 7) {
	greeting = 'Good morning!';
}

else {
	greeting = 'Welcome!';
}

document.write('<p> <b>' + greeting + '</b> </p>');
