import { mount, shallowMount } from '@vue/test-utils'
import dialog from '@/components/dialog/index.vue'


describe('dialog.vue', () => {
  it('dialog', async () => {
    const wrapper = await mount(dialog)

    console.log('aaa = ', wrapper.html())


    expect(wrapper.exists()).toBe(true)
  })
})
