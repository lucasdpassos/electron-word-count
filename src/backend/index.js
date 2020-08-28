const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)

    event.reply('process-subtitles', [
        {name: 'hi', amount:'1234'}
    ])
})