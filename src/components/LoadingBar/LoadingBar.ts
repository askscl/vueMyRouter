import { createVNode, render } from 'vue'
import LoadingBar from '@/components/LoadingBar/LoadingBar.vue'

const Vnode = createVNode(LoadingBar)
render(Vnode, document.body)

export default Vnode.component?.exposed