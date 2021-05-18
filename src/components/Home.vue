<template>
  <v-container fluid>
    <v-form>
        <v-file-input 
            label="Select the subtitles"
            multiple
            chips
            outlined
            prepend-icon="mdi-message-text"
            append-icon="mdi-send"
            v-model="files"
            @click:append="processeSubtitles"
        />
    </v-form>
    <div class="pills">
        <Pill v-for="word in groupedWords" :key="word.name"
            :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>
import Pill from './Pill'
import { ipcRenderer } from 'electron'

export default {
    components: { Pill },
    data: function () {
        return {
            files: [],
            groupedWords: []
        }
    },
    methods: { 
        processeSubtitles() {
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitle', paths)
            
            ipcRenderer.on('process-subtitle', (event, resp) => {
                console.log(resp)
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style>
    .pills {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>