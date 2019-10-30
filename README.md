# vue-practice
> Vue.js를 연습하는 레포지토리

![](https://miro.medium.com/max/3840/1*nfvapd86apvGH-hNBYkYuw.png)

## Vue.js 설치하기

### 파일 다운로드하고 읽어들이기

[Vue.js 공식 사이트](https://vuejs.org/v2/guide/installation.html)에서 파일을 다운로드합니다.

### CDN 사용해서 Vue.js 사용하기

인터넷에 접속할 수 있는 환경일 경우 CDN을 사용할 수 있습니다.
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

## 기본적인 옵션 구성

Vue.js를 활용한 애플리케이션에 사용할 옵션의 데이터와 메소드들을 정의하는 방식입니다.

```javascript
const app = new Vue({

  /* 1. mount target element */
  el: '#app',
  
  /* 2. data for application */
  data: {
    message: 'Lorem Ipsum Dolor Sit Amet',
  },
  
  /* 3. output attribute */
  computed: {
    computedMessage: () => {
      return this.message + '!';
    },
  },
  
  /* 4. life cycle hook */
  created: () => {
    // any code you want to execute :D
  },
  
  /* 5. application methods */
  methods: {
    myMethod: () => {
      // any code you want to execute :D
    },
  },
});
```

### 라이프 사이클 훅

`data`, `methods`는 자유롭게 정의할 수 있지만, 라이프 사이클 훅은 사용할 수 있는 메소드가 정해져 있습니다. 다음 표는 그러한 메소드들의 각각의 이름과 Hook할 수 있는 시점을 정리해두었습니다.

| 메소드           | 시점                       |
| :------------ | :----------------------- |
| beforeCreate  | 인스턴스 생성되고,  리액티브 초기화 전   |
| created       | 인스턴스 생성되고, 리액티브 초기화 후    |
| beforeMount   | 인스턴스 마운트되기 전             |
| mounted       | 인스턴스 마운트 후               |
| beforeUpdate  | 데이터가 변경되어 DOM에 적용되기 전    |
| updated       | 데이터가 변경되어 DOM에 적용된 후     |
| beforeDestroy | Vue 인스턴스 제거 전            |
| destroyed     | Vue 인스턴스 제거 후            |
| errorCaptured | 임의의 자식 컴포넌트에서 오류가 발생했을 때 |

많이 사용되는 `created`, `mounted`는 호출되는 시점이 비슷하지만, 다음과 같은 차이가 있습니다.

- `created`는 인스턴스가 생성되고, reactive data가 초기화된 직후에 호출됩니다. 즉 created가 호출될 때에는 **아직 DOM이 구축되기 전**입니다.

따라서 인스턴스 자신을 나타내는 this에는 접근할 수 있지만, **DOM 접근은 불가능**합니다.

- `mounted`는 인스턴스의 상태를 사용해서 DOM을 만든 직후에 호출됩니다.
  
그러므로 mounted의 경우에는 인스턴스 내부 템플릿의 `$el`과 `getElementById()`를 사용할 수 있습니다. 다만 모든 자식 컴포넌트가 마운트되었다고는 보증할 수 없습니다.

## 참고할 만한 리소스

VwesomeVue와 Vue Curated는 모달 대화 상자 / 슬라이더 등 범용적인 컴포넌트를 찾아볼 수 있습니다.

- [Awesome Vue 깃허브](https://github.com/vuejs/awesome-vue)
- [Vue Curated](https://curated.vuejs.org)

풍부한 컴포넌트와 아름다운 디자인으로 인기가 높은 웹사이트 전용 UI 컴포넌트 모음인 Element도 있습니다.

- [Element 공식 사이트](http://element.eleme.io)

Onsen UI는 하이브리드 모바일 App 전용 UI 컴포넌트입니다. Material Design 기반으로 만들어진 UI/UX입니다. Native iOS와 안드로이드 디자인 가이드를 따르는 디자인과 기능을 가지고 있어 모바일 인터페이스를 쉽게 구축할 수 있습니다.

- [Onsen UI](https://onsen.io)
