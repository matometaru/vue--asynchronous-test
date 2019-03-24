import { shallowMount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const responseBody = [
    {name: "value01", src: "/images/image01.png"},
    {name: "value02", src: "/images/image02.png"},
    {name: "value03", src: "/images/image03.png"},
    {name: "value04", src: "/images/image04.png"},
    {name: "value05", src: "/images/image05.png"},
];

const mock = new MockAdapter(axios);
mock.onGet('mock/service').reply(200, responseBody);

it('fetches async when a button is clicked', async() => {

    const wrapper = shallowMount(Foo);
    wrapper.find('button').trigger('click');
    await flushPromises();

    // nextTickを使わないパターン
    // DOMの更新は保証されないので、環境によっては次のテストは成功しない。
    expect(wrapper.find('ul li:nth-child(4) p').text()).toBe('value04');
    console.log(wrapper.html());

    // nextTickを使用パターン
    // DOMの更新が保証されるので、次のテストは必ず成功する。
    await wrapper.vm.$nextTick();
    expect(wrapper.find('ul li:nth-child(4) p').text()).toBe('value04');
    console.log(wrapper.html());
})

// flushPromises関数
// 現在のイベントループ内の全てのタスク完了後に、タスクを追加で実行する
var scheduler = typeof setImmediate === 'function' ? setImmediate : setTimeout;
function flushPromises() {
    return new Promise(function(resolve) {
        scheduler(resolve);
    });
}