import Theme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'
import Sv3Components from "@sv3-components/sv3-components";

export default {
    ...Theme,
    enhanceApp(ctx: EnhanceAppContext) {
        ctx.app.use(Sv3Components)
        ctx.app.component('demo-preview', AntDesignContainer)
    }
}
