$(document).keydown(function(event){
    if(event.keyCode==123){
    return false;
   }
else if(event.ctrlKey && event.shiftKey && event.keyCode==73){        
      return false;
   }
});

$.get("http://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#add").html("Location: " + response.city + ", " + response.country);
    $("#zip").html("ZIP Code: " + response.postal);
    $("#isp").html("ISP: " + response.org);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");
