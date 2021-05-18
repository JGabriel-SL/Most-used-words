const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')

ipcMain.on('process-subtitle', (event, paths) => {    
    pathsToRows(paths)
        .then(rows => console.log(rows))
        .then(() => {
            event.reply('process-subtitle', [
                { name: 'i', amount: 900 },
                { name: 'you', amount: 870 },
                { name: 'he', amount: 710 },
                { name: 'she', amount: 544 },
                { name: 'our', amount: 123 }
            ])
        })
})