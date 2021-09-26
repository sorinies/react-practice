# props / state
리액트 컴포넌트에서는 다루는 데이터가 props와 state로 나뉜다.

* props: 부모 컴포넌트가 자식 컴포넌트에게 주는 값. 자식 컴포넌트는 받아온 props를 직접 수정할 수 없다.
* state: 컴포넌트 내부에 선언하며 내부에서 값을 변경할 수 있다.

## props
부모가 자식에게 주는 읽기 전용의 값.

### 클래스형 컴포넌트
```jsx
// MyName.js
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```

```jsx
// App.js
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName name="리액트" />
      {/*안녕하세요! 제 이름은 리액트 입니다.*/}
    );
  }
}

export default App;
```

### 함수형 컴포넌트
단순히 props만 받아와 보여주기만 하는 컴포넌트는 함수형태로 더 간단하게 작성할 수 있다.

```jsx
import React from 'react';

const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 {name} 입니다.
    </div>
  );
};

export default MyName;
```

함수형 컴포넌트는 클래스형 컴포넌트과 다르게 state와 LifeCycle이 빠져있다. 
때문에 컴포넌트의 초기 마운트가 미세하게 나마 빠르고, 메모리 자원을 덜 사용한다.

### defaultProps
props가 비어있는 상태에서 표시할 기본값을 설정할 수 있다.

```jsx
import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: '기본이름'
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
        {/*안녕하세요! 제 이름은 기본이름 입니다.*/}
      </div>
    );
  }
}

export default MyName;
```

함수형 컴포넌트의 경우 defaultProps를 아래와 같이 설정할 수 있다.

```jsx
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

MyName.defaultProps = {
  name: '기본이름'
};

export default MyName;
```

## state
컴포넌트 내부에 선언하며 steState() 함수를 사용해 내부에서 값을 변경할 수 있다.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
```

### class fields 문법을 이용한 state 정의
위에서 사용한 정의 방법은 class fields를 사용한 정의 방법이다. 만약 class fields를 사용하지 않는다면 constructor를 작성해야 한다.

```jsx
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  ...
}
```

상속받은 Component의 생성자를 실행하기 위해 super(props)를 실행하고, 할 작업(state 설정)을 해주는 것이다. 
만약 class fields와 constructor가 동시에 사용된다면, class fields가 먼저 실행되고 그 다음 constructor의 설정이 나타난다.

### 메소드의 작성

```javascript
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }
```
this 키워드를 사용하는 경우 편의를 위해 화살표 함수를 이용해 작성한다. 화살표 함수를 사용하지 않고 아래와 같이 작성할 수도 있다.

```javascript
  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  }
```

이 경우 this가 가리키는 곳을 찾을 수 없어 undefined를 반환하게 된다. 이는 함수가 버튼의 클릭이벤트로 전달이 되는 과정에서 this와의 연결이 끊기기 때문인데, 이 끊김을 해결하기 위해서는 constructor에서 this를 bind 시켜주어야 한다.

```javascript
  constructor(props) {
    super(props);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
```

따라서 처음부터 화살표 함수로 작성해 this에 대한 별도의 처리를 하지 않는 것이 편리하다.

### setState()
state의 값을 바꾸기 위한 함수로, 이 함수가 호출될 때 컴포넌트가 리렌더링 된다.
setState()는 객체로 전달되는 값만 업데이트를 해준다.

```javascript
  state = {
    number: 0,
    foo: 'bar'
  }
```

위와 같은 객체가 있다고 가정했을 때 `this.setState({number: 1});`을 하게 되면 foo는 그대로 남고 number 값만 업데이트 된다.

```javascript
  state = {
    number: 0,
    foo: {
      bar: 0,
      foobar: 1
    }
  }
```
그러나 setState는 객체의 깊숙한 곳 까지는 확인할 수 없는데, 가령 state 객체가 위와 같은 값이라고 했을 때 `this.setState({ foo: { foobar: 2  }})`를 수행하게 되면 기존의 foo 객체가 통째로 바뀌게 된다.

```javascript
{
  number: 0,
  foo: {
    foobar: 2
  }
}
```

이런 상황에서는 자바스크립트의 전개연산자를 사용해주어야 한다.

```javascript
this.setState({
  number: 0,
  foo: {
    ...this.state.foo,
    foobar: 2
  }
});
```

이런 번거로움을 해결하기 위한 라이브러리인 [immutable.js](https://velopert.com/3486) 혹은 [immer.js](https://github.com/immerjs/immer) 등을 사용할 수 있다.

### setState에 객체 대신 함수 전달
```javascript
this.setState({
  number: this.state.number + 1
});
```
위 처럼 this를 여러번 작성하게 되는 경우가 생기는데, 큰 불편함은 아니지만 조금 더 나은 방법으로 작성이 가능하다.

```javascript
this.setState(
  (state) => ({
    number: state.number
  })
);
```
혹은 구조분해할당을 사용해 작성할 수도 있다.

```javascript
this.setState(
  ({ number }) => ({
    number: number + 1
  })
);
```

```javascript
const { number } = this.state;
this.setState({
  number: number + 1
})
```

### 이벤트 설정
```jsx
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
```

버튼이 선택되었을 때 준비한 함수가 호출되도록 설정했다. HTML과 유사해 보이지만 몇 가지 주의해야하는 점이 있다.

1. 이벤트 이름을 설정할 때 camelCase로 작성해야 한다. 
    - 가령 onclick은 onClick, onmousedown은 onMouseDown, onchange는 onChange가 된다.
2. 이벤트에 전달해주는 값은 **함수**여야 한다. (함수 호출구문, 함수의 반환 값이 아닌)
    - 만약 `onClick={this.handleIncrease()}` 처럼 작성하게 된다면 렌더링을 할 때 마다 함수가 호출이 된다.
