import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

jest.mock('@highlightjs/vue-plugin', () => ({
  hljsVuePlugin: {
    component: jest.fn(),
  },
}));

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      global: {
        stubs: {
          highlightjs: {
            template: '<div />',
          },
        },
      },
    })

    console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
  })
})
