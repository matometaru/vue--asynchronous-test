## Vue.jsの非同期動作のテストの検証

[非同期動作のテスト \| Vue Test Utils](https://vue-test-utils.vuejs.org/ja/guides/testing-async-components.html) の記事内にある、flushPromisesを使用した方法でDOMの更新を含む非同期処理のテストを行っていた。
ただ環境によってDOMの更新前に処理が実行されるパターンがあった。
DOMの更新後に処理を行いたい場合はNextTickを使用する必要がある。

ローカル環境ではflushPromisesを使用した場合でもDOMの反映がされていたので、現象が再現できなかったが、DOMの更新を保証する場合はNextTickを使用すること。

##  参考リンク

- [非同期動作のテスト \| Vue Test Utils](https://vue-test-utils.vuejs.org/ja/guides/testing-async-components.html)
- [Vue.nextTickのコードリーディング](https://aloerina01.github.io/blog/2018-09-27-1)
- [Tasks, microtasks, queues and schedules - JakeArchibald.com](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [Tasks(Macrotasks), Microtasksについて - Carpe Diem](https://christina04.hatenablog.com/entry/2017/03/13/190000)