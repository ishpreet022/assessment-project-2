document.getElementById('clothsbrands').addEventListener('click', getText);

function getText() {
    // AJAX Call
    // Create an Object
    var xhr = new XMLHttpRequest();

    // Open the portal
    xhr.open('GET', '../json/main2.json', true);

    // Communication
    xhr.onload = function() {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText);
            var outputs = '';
            for (var i = 0; i < users.length; i++) {
                outputs += '<ul>' +
                    '<li>' + users[i].ID + 
                    ' : ' + users[i].BRAND + '</li>' +
                    '</ul>';
            }

            document.getElementById('firstcontainer').innerHTML = outputs;
        }
    }

    // Send the request
    xhr.send();
}

document.getElementById('clothstype').addEventListener('click', getAText);

function getAText() {
    // AJAX Call
    // Create an Object
    var xhra = new XMLHttpRequest();

    // Open the portal
    xhra.open('GET', '../json/main.json', true);

    // Communication
    xhra.onload = function() {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = '';
            for (var i = 0; i < user.length; i++) {
                output += '<ul>' +
                    '<li>' + user[i].ID + 
                    ' : ' + user[i].CLOTHTYPE + '</li>' +
                    '</ul>';
            }

            document.getElementById('secondcontainer').innerHTML = output;
        }
    }

    // Send the request
    xhra.send();
}
