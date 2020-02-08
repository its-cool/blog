import { shallowMount } from '@vue/test-utils';

import HelloWorld from '@/components/hello-world/index.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.find('h1').text()).toBe(msg);
  });
});
