document.getElementById('firstbutton').addEventListener('click', getText);
document.getElementById('firstbutton').addEventListener('click', getText);

function getText() {
    // AJAX Call
    // Create an Object
    var xhr = XMLHttpRequest();

    // Open the portal
    xhr.open('GET', 'main2.json', true);

    // Communication
    xhr.onload = function() {
        if (this.status == 200) {
            var user = JSON.parse(this.responceText);
            var output = '';
            output += '<ul>' +
                '<li>ID : ' + user.ID + '</li>' +
                '<li>ID : ' + user.BRAND + '</li>' +
                '</ul>';

            document.getElementById('firstcontainer').innerHTML = output;
        }
    }

    // Send the request
    xhr.send();
}

document.getElementById('secondbutton').addEventListener('click', getAText);

function getAText() {
    // AJAX Call
    // Create an Object
    var xhr = XMLHttpRequest();

    // Open the portal
    xhr.open('GET', 'main.json', true);

    // Communication
    xhr.onload = function() {
        if (this.status == 200) {
            var user = JSON.parse(this.responceText);
            var output = '';
            output += '<ul>' +
                '<li>ID : ' + user.ID + '</li>' +
                '<li>ID : ' + user.CLOTHTYPE + '</li>' +
                '</ul>';

            document.getElementById('firstcontainer').innerHTML = output;
        }
    }

    // Send the request
    xhr.send();
}