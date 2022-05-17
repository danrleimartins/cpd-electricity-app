// Import common modules
const { app, BrowserWindow, Menu, ipcMain } = require('electron');

// The shell module allows us to manage files and URLs
const shell = require('electron').shell;

// Set environment
process.env.NODE_ENV = 'development';

// Window variables
let win;

// Creating main window
// Reference: https://www.electronjs.org/docs/latest/tutorial/quick-start and https://www.electronjs.org/docs/latest/api/browser-window
const createWindow = () => {
    win = new BrowserWindow({
        width: 850,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    // And load index.html file
    win.loadFile('src/index.html');

}

// Exiting app when closing the window
// Reference: https://www.electronjs.org/docs/latest/tutorial/quick-start
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

// This method will be called when Electron has finished initilization and is ready to open the browser window.
// Reference: https://www.electronjs.org/docs/latest/tutorial/quick-start
app.whenReady().then(() => {
    createWindow();

    // Build menu from template
    // Reference: Tutorial_Week_12 - Shopping App
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu into application
    // Reference: Tutorial_Week_12 - Shopping App
    Menu.setApplicationMenu(mainMenu);
})

// Create app's menu
// Reference: Tutorial_Week_12 - Shopping App
const mainMenuTemplate = [
    {
        label: 'Menu',
        submenu: [
            {
                label: 'Test',
                click() {
                    shell.openExternal('https://cointelegraph.com/bitcoin-price')
                }
            },
            {
                label: 'GitHub Repository',
                click() {
                    shell.openExternal('https://github.com/danrleimartins/electron-btc-app')
                }
            },
            { type: 'separator' }, // display line to separate menu options
            {
                label: 'Exit', // exiting app on click
                click() {
                    app.quit()
                }
            },
        ]
    }
];

// If OSX, add empty object to menu
// Reference: Tutorial_Week_12 - Shopping App
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}
// Add developer tools option if in dev
// Reference: Tutorial_Week_12 - Shopping App
if (process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                role: 'reload'
            },
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            }
        ]
    });
}
