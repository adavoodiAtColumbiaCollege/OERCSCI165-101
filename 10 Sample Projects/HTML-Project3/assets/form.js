const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signUpshowButton = document.getElementById('singup_show');
const signInshowButton = document.getElementById('singin_show');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpshowButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInshowButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});