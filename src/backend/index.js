const { ipcMain } = require('electron')
const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')

ipcMain.on('process-subtitle', (event, paths) => {    
    pathsToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
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