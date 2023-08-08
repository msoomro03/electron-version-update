/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
// const ipc = require('electron').ipcRenderer;
const syncMsgBtn = document.getElementById('sendSyncMsgBtn');

syncMsgBtn.addEventListener('click', function(){
    //here when we say ipc, we actually mean the ipc renderer
    //this is the sender function
    const reply = window.myElectron.myfirstmsg();
    //.sendSync is a built in function
    //'synchronous-message': message identifier
    // const reply = ipc.sendSync('synchronous-message', 'Mr. Watson, come here');
    console.log(reply);
    // const message = `Synchronous message reply: ${reply}`;
    // document.getElementById('syncReply').innerHTML = message;  
})
