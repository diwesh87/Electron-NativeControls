const electron = require('electron');

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

app.on('ready', _ => {
  new BrowserWindow()
  const name = electron.app.getName()
  const template = [
    {
      label: name,
      submenu:
      [
          { label: `About ${name}`, click: _ => {console.log('Clicked About');}, role: 'about' },
          { type: 'separator'},
          { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: _ => {app.quit();} }
      ]
  }
]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})