import { App } from 'vue'
import Foo from './src/index'

Foo.install = (app: App) => {
  app.component(Foo.name, Foo)
}

export default Foo
