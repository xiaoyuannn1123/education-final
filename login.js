function validateForm() {
	var errorMessageDiv = document.getElementById('errorMessage');
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var errorMessage = '';
	errorMessageDiv.innerHTML = '';

	if (username === '') {
		errorMessage += '账号为空';
	} else if (username.length !== 12) {
		errorMessage += '账号不等于12位';
	}

	if (password === '') {
		errorMessage += '密码为空';
	}

	if (errorMessage !== '') {
		errorMessageDiv.innerHTML = errorMessage;
	} else {
		window.location.href = 'sy.html';
	}
}