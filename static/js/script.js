var captcha = () => {
	let form = document.querySelector("form");
	if (!form) {
		return;
	}

	grecaptcha.render(form.querySelector("input[type=\"submit\"]"), {
		"sitekey":  "6LcOdvcZAAAAAB4kcjYsf6FKkc0iVp8gCPnxT608",
		"size":     "invisible",
		"callback": "submit",
	});
}

var submit = (token) => {
	document.querySelector("form").submit();
}
