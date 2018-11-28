const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');
const fs = require('fs');

let mainWindow;

//アプリケーション（基幹部）の起動が終了後動作する。
app.on('ready', () => {
    createWindow();
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 300,
        useContentSize: true,
        title: "test",

    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //窓全部閉じたときnullにする
    mainWindow.on('closed', () => {
        mainWindow = null
    });
}
