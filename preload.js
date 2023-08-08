/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type])
//   }
// })
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myElectron', {
  myfirstmsg: () => ipcRenderer.send('print'),
})

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('sendSyncMsgBtn').addEventListener('click', () => {
    ipcRenderer.invoke('find-position');
  });
});

ipcRenderer.on('found-position', (event, args) => {
  //document.getElementById('syncReply').innerHTML="x: "+args.x+", y: "+args.y+", height: "+args.height+", width: "+args.width;
  document.getElementById('syncReply').innerHTML= args;
  console.log('received message!');
})