import { defineComponent } from 'vue'
import { fooProps } from './types'

const NAME = 'sv3-foo'

export default defineComponent({
  name: NAME,
  props: fooProps,
  setup (props, context) {
    console.log(props, context)
    const onBtnClick = () => {
      console.log('测试按钮，输出MSG：', props.msg)
    }
    return () => (
            <div class={NAME}>
                <h1>hare-ui Foo</h1>
                <p>msg is: {props.msg}</p>
                <button onClick={onBtnClick}>点击我</button>
                foo 测试
            </div>
    )
  }
})
