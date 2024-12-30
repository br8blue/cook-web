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
        'http://127.0.0.1:5500/khinkali.html',
        'http://127.0.0.1:5500/paella.html',
        'http://127.0.0.1:5500/biriyani.html' 
    ];
    var randomIndex = Math.floor(Math.random() * urls.length);
    window.location.href = urls[randomIndex];
}
