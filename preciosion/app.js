var url =window.location.href;
console.log(url)
chrome.runtime.onMessage.addListener(receiver);


function receiver(message,sender, sendResponse){
    console.log(message.text)
    let selectedtext = message.text;
    console.log(selectedtext)
    if(selectedtext.length>0){
            var link = url + '#:~:text='+selectedtext
            
          
        
        console.log(link)
        var cpy = document.createElement('textarea');
        cpy.innerHTML = link;
        document.body.appendChild(cpy);
        cpy.select();
        document.execCommand('copy')
        document.body.removeChild(cpy);
}
}




