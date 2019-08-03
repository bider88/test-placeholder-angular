'use stric';

var at = '@';
var dot = '.';
var plus = '+';


var emailsUnicos = function (email) {
    
    var posDot = email.indexOf(dot);
    var posAt = email.indexOf(at);
    var posPlus = email.indexOf(plus);
    var finalPosDot = email.lastIndexOf(dot);

    if (posDot > 0 && posDot < finalPosDot) {
        email = email.replace(dot, '');
    }

    if (posPlus > 0 && posPlus < posAt) {
        var other = email.substring(posPlus, posAt);
        email = email.replace(other, '');
    }

    return email;
}
