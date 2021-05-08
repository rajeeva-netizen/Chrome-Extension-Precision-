var contextMenuItem = {
    "id":"copy to get link",
    "title":"copy to get link",
    "contexts":["selection"]
}

chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "copy to get link" && clickData.selectionText){
        console.log("it is clicked")
        console.log(clickData.selectionText)
        var message = {
            text:clickData.selectionText
        }
       
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, message)
          });
})
// chrome.tabs.sendMessage(tabs[0].id, message)
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"})
//   });
