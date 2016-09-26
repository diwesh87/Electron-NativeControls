const electron = require('electron'); //Bring in the electron module
const path = require('path'); //Bring in the path module for basic system operations

const app = electron.app
const BrowserWindow = electron.BrowserWindow // Call the BrowserWindow from electron module
const Menu = electron.Menu // Call the Menu from electron module

const Tray = electron.Tray // Call the Tray from electron module


app.on('ready', _ => {
  new BrowserWindow()
  const tray = new Tray(path.join('src', 'trayIcon.png')) // Instantiate a new Tray with passing an argument(this case a tray icon)
  const name = electron.app.getName() //Get the app name from Package.json (Product Name)
  //Define a template for a Custom Menu
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
// End of Custom Menu

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

//Define a contextMenu for system tray icon
const contextMenu = Menu.buildFromTemplate([
  { label: `More Options`, click: _ => {console.log('Clicked Tray Icon');}},
])
//End of trayIcon control

tray.setContextMenu(contextMenu)
tray.setToolTip(name)
})