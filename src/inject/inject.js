chrome.extension.sendMessage({}, function (response) {
	var url = window.location.href;
	var removeCrap = function () {
		try {
			if (url.indexOf('facebook') > -1) {
				console.log("You are on facebook!");

				var list = document.getElementsByClassName("pagelet");
				for (var i = list.length - 1; 0 <= i; i--) {
					if (list[i] && list[i].parentElement) {
						console.info("Start removing crap!!");
						list[i].parentElement.removeChild(list[i]);
					}
				}

			}
		} catch (error) {
				//do nothing!
		}

	};

	removeCrap();

	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			removeCrap();
		}
	}, 10);
});