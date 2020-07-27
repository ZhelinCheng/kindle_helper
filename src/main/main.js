// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const axios = require('axios');
const path = require('path');

const env = process.env;

const isDev = env.NODE_ENV !== 'production';
const winURL = isDev
  ? `http://localhost:8000`
  : `file://${__dirname}/dist/index.html`;

/* async function ping (fn) {
  try {
    await axios({
      url: winURL,
      timeout: 300
    })

    typeof fn === "function" && fn()
  } catch () {}
} */

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegrationInWorker: true,
      // preload: path.join(__dirname, './preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(winURL)
  // mainWindow.setProgressBar(0.5)

  if (isDev) {
    mainWindow.webContents.once("did-fail-load", () => {
      console.log('loading...')
      setTimeout(() => {
        mainWindow.loadURL(winURL)
      }, 5000)
    })
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
