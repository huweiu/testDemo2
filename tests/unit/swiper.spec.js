import { mount, shallowMount } from '@vue/test-utils'
import swiper from '@/components/swiper/index.vue'

jest.mock('Swiper', () => class Mocked {});

describe('swiper.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(swiper, {
        stubs:['mySwiper']
    })

    console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
  })
})
