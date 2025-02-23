function submitRequest() {
    var email = 'praneelsrini2012@gmail.com';
    var subject = 'New Food Request';
    var body = 'Greetings Cook Web Team,';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink; 
}

function submitComplaintKhinkali() {
    var email = 'praneelsrini2012@gmail.com';
    var subject = 'Khinkali Article Issue';
    var body = 'Greetings Cook Web Team, ';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink; 
}

function submitComplaintBiryani() {
    var email = 'praneelsrini2012@gmail.com';
    var subject = 'Biriyani Article Issue';
    var body = 'Greetings Cook Web Team, ';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink; 
}

function submitComplaintPaella() {
    var email = 'praneelsrini2012@gmail.com';
    var subject = 'Paella Article Issue';
    var body = 'Greetings Cook Web Team, ';
    var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    window.location.href = mailtoLink; 
}




function redirectToRandomFood() {
    var urls = [
        'khinkali.html',
        'paella.html',
        'biriyani.html' 
    ];
    var randomIndex = Math.floor(Math.random() * urls.length);
    window.location.href = urls[randomIndex];
}


