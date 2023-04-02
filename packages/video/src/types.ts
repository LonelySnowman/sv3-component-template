import { ExtractPropTypes } from 'vue'

export const videoProps = {
  msg: {
    type: String,
    required: false,
    default: ''
  }
}

export type VideoProps = ExtractPropTypes<typeof videoProps>
