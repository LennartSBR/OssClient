const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
    },
    icon: path.join(__dirname, 'icon.ico')
  })

  win.maximize();
  win.setMenu(null);
  win.loadURL('https://meine.online-schule.saarland')

  win.webContents.on('did-fail-load', () => {
    win.loadFile('offline.html')
  })
}

app.whenReady().then(createWindow)
