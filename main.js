
const path = require('path');
const {app, BrowserWindow} = require('electron');
const isDev = process.env.NODE_ENV !== 'development';
function createWindow() {
    const newWindow = new BrowserWindow({
        title: 'Image Resizer',
        width: isDev? 1000 : 500,
        height: 600
    });
    if(isDev) {
        newWindow.webContents.openDevTools();
    }
    newWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})
app.on('window-all-closed', () => {
    if(process.platform !== "darwin"){
        app.quit()
    }
})
