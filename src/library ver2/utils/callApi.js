function callApi(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    xhr.onload = () => {
        dataObject = JSON.parse(xhr.responseText)
        callback(dataObject);
    }
}