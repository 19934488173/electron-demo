/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow } from 'electron';

let mainWindow;

function isDev() {
  // 配置中通过 webpack.DefinePlugin 定义的构建变量
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.webContents.openDevTools();

  if (isDev()) {
    // 在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.on('ready', createWindow);
