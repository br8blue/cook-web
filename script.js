function submitRequest() {
    var email = 'praneelsrini2012@gmail.com';
    var subject = 'New Recipe Request';
    var body = 'Greetings Cook Web Team,';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink; 
}

function submitComplaint() {
    var email = 'praneelsrini2012@gmail.com';
    var subject = 'Article Complaint';
    var body = 'Greetings Cook Web Team,';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink; 
}