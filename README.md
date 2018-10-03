# WorldTimeNow
Chrome extension to know the current time

Install and download [WorldTimeNow](https://chrome.google.com/) at the Chrome Web Store.

WorldTimeNow is a chrome extension that shows you the current time.

Notes: 
If you want to override new tab,
    "chrome_url_overrides" : {
        "newtab" : "newtab.html"
    },
If you want to add background script, write this syntax in manifest.json
    "background" : {
        "scripts" : ["js/background.js"]
    },
       
for permissions:
   "permissions": ["activeTab"],

If a browser action has a popup, the popup appears when the user clicks the icon. The popup can contain any HTML contents that you like, and it's automatically sized to fit its contents. To add a popup to your browser action, create an HTML file with the popup's contents. Specify the HTML file in the default_popup field of browser_action in the manifest, or call the browserAction.setPopup method.

But if you have a defined default_popup, then remove background script because from popup we can call functions.

### References:
- http://momentjs.com/docs/
- http://momentjs.com/timezone/docs/
- https://developer.chrome.com/extensions/content_scripts
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
- https://medium.com/@yosevu/how-to-inject-a-react-app-into-a-chrome-extension-as-a-content-script-3a038f611067
- http://tech-blog.tomchambers.me/2016/01/13/How-to-write-a-simple-page-rewriting-Chrome-extension/
- https://matall.in/posts/building-an-usable-timezone-selector/
- https://flaviocopes.com/momentjs/

- https://developer.chrome.com/webstore/publish