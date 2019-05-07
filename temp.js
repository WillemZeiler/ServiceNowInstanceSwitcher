//to save:
chrome.storage.local.set({key: value});

chrome.storage.local.set({key: value}, function() {
	console.log('Value is set to ' + value);
});


//to get:
chrome.storage.local.get('key', function(data) {
    yourTextArea.value = data.mytext;
});
