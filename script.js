function main(){
    console.log("hello world");

    var url = "http://localhost:3003/teste";

    get(url);  

}

function get(url){
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', url);

    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3003');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 3. Send the request over the network
    xhr.send();
    
    // 4. This will be called after the response is received
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
        alert(`Done, got ${xhr.response}`); // response is the server response
        }
    };
    
    // xhr.onprogress = function(event) {
    //     if (event.lengthComputable) {
    //     alert(`Received ${event.loaded} of ${event.total} bytes`);
    //     } else {
    //     alert(`Received ${event.loaded} bytes`); // no Content-Length
    //     }
    
    // };
    
    xhr.onerror = function() {
        alert("Request failed");
    };
}

function post(url){
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('POST', url);

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
        alert(`Done, got ${xhr.response}`); // response is the server response
        }
    };
    
    // xhr.onprogress = function(event) {
    //     if (event.lengthComputable) {
    //     alert(`Received ${event.loaded} of ${event.total} bytes`);
    //     } else {
    //     alert(`Received ${event.loaded} bytes`); // no Content-Length
    //     }
    
    // };
    
    xhr.onerror = function() {
        alert("Request failed");
    };
}