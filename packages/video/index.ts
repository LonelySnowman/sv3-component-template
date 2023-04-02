import { App } from 'vue'
import Video from './src/index.vue'

console.log('video', Video)

Video.install = (app: App) => {
  app.component(Video.name, Video)
}

export default Video
