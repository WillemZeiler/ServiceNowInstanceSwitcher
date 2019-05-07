$(document).ready(function () {
    "use strict";
	
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
		$(".button").hide();
		var starturl = tabs[0].url;
		
        if (starturl.indexOf(".service-now.com/") !== -1) {
			var startinstance = starturl.split(".service-now.com/")[0];
			startinstance = startinstance.replace(/^https?\:\/\//i, "");
			
			if (document.getElementById(startinstance)) {
				var company = ($("#" + startinstance).attr('class').split(" ")[1]);
				
				//chrome.storage.local.set({"company": "ibmaabdev"});

				//chrome.storage.local.get("company", function(data) {
				//	alert("Load: " + data.company);
				//});
				
				$("." + company).show();

				$("#" + startinstance).hide();
			}
			
			$("#buttons").append('<a id="settings" class="button">Settings</a>');

			$("#buttons").fadeIn().css("display", "inline-block");
			$("#settings").fadeIn().css("display", "inline-block");
        } else {
			window.close();
        }
    });
	

    $("body").on("click", ".button", function () {
		var instance = this.id;
		
		if (instance == "settings") {
			$("#buttons").hide();
			$("#close").show();
			$(".settings").fadeIn().css("display", "inline-block");
		} else if (instance == "close") {
			window.close();
		}  else {
			chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
				var url = tabs[0].url;
				var link = url.split(".service-now.com/")[1];
				
				chrome.tabs.update({
					url: "https://" + instance + ".service-now.com/" + link
				});
				
				window.close();
			});
		}
    });
});