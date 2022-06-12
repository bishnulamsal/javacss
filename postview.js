// JavaScript source code


/* Current date script */


window.onload = function() {
     var xhr = new XMLHttpRequest();
     var url = window.location.href.replace("https://","").replace(/\//g, "");
     var urlr = url.substring(0,53);
     //document.getElementById("demo").innerHTML = urlr;
     xhr.open("GET", "https://api.countapi.xyz/hit/"+urlr);
     xhr.responseType = "json";
     xhr.onload = function() {
          document.getElementById("postview").innerHTML = this.response.value;
     }
     xhr.send();
}
