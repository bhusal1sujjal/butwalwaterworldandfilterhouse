const options = {
    bottom: '32px',
    right: '32px', 
    left: 'unset', 
    time: '0.3s', 
    mixColor: '#fff',
    backgroundColor: '#fff', 
    buttonColorDark: '#100f2c', 
    buttonColorLight: '#fff', 
    saveInCookies: true,
    label: '🌓', 
    autoMatchOsTheme: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

const form = document.forms['Hire Repairing'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    alert('We will get back to you soon. Thank you for responding.');
                    window.location.reload();
                } else {
                    alert('There was an issue with your submission. Please try again.');
                }
            })
            .catch(error => console.error('Error!', error.message));
    } else {
        alert('Please fill in all required fields.');
    }
});

