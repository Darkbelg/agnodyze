
// const axios = require('axios').default;

function getResults() {
    let searchValue = this.value;
    if (searchValue.length >= 3) {
        console.log("Send ajax request.");
        // var xmlhttp = new XMLHttpRequest();
        // xmlhttp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         console.log(this.responseText);
        //     }
        // };
        // xmlhttp.open("POST", "channel", true);
        // xmlhttp.timeout = 2000;
        // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xmlhttp.send("search=" + searchValue);

        axios.post('http://127.0.0.1:8000/channel', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    } else {
        console.log("Keep typing to get results");
    }
}

window.onload = function () {
    var searchField = document.querySelector('#channel');
    searchField.addEventListener("keyup", getResults);
}


