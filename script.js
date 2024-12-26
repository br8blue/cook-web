function sendRequest() {
    var email = 'neelsrini2012@gmail.com';
    var subject = 'New Recipe Request';
    var body = 'Greetings Cook Web Team,';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink; 
}