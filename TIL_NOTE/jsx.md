# JSX
HTML과 유사해 보이지만, 작성하기 위해 반드시 지켜야할 몇 가지 규칙과 JSX 만의 기능이 있다.

## 태그는 반드시 닫혀야 한다
html과 다르게 self closing tag는 생략할 수 없다.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <input type="text"> // 에러를 발생시킨다
      </div>
    );
  }
}

export default App;
```

## 하나의 엘리먼트만 반환할 수 있다
두 개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져 있어야 한다.

```jsx
// src/App.js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return ( // 에러를 발생 시킨다.
      <div>
        Hello
      </div>
      <div>
        Bye
      </div>
    );
  }
}

export default App;
```

하지만 무의미한 `<div>`가 추가되는 것이 마음에 들지 않는다면 16.2v 부터 도입된 `Fragment`를 사용하면 된다. (import 필요)

```jsx
import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}

export default App;
```

## JSX 안에서 자바스크립트 값 사용하기
```jsx
import React, { Component } from 'react';

class App extends Component {
  reder() {
    const name = 'react';
    return (
      <div>
        hello {name}! // 변수(상수)의 값을 표시할 수 있다.
      </div>
    );
  }
}

export default App;
```

## 조건부 렌더링
조건에 따라 다른 렌더링을 하고 싶다면 일반적으로 삼항 연산자나 AND 연산자를 사용한다.
if문은 사용할 수 없는데, 만일 사용하고 싶다면 즉시실행함수를 사용해야 하지만, 권장되는 방법은 아니다.

### 삼항 연산자
```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 
            ? (<div>true</div>)
            : (<div>false</div>)
        }
      </div>
    );
  }
}

export default App;
```

삼항연산자는 조건에 따라 **다른** 결과를 보여주고 싶을 때 주로 사용된다.

### AND 연산자
```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
      </div>
    );
  }
}

export default App;
```

AND 연산자는 조건이 **true 일 때에만** 결과가 보이게 할 때 사용한다.

### if(switch)를 사용해야겠다면...
일반적으로 복잡한 조건이 필요하다면 JSX 밖에서 로직을 작성하는게 좋지만 그럼에도 불구하고 JSX에서 복잡한 조건을 이용해야 한다면 즉시실행함수를 사용할 수 있다.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}

export default App;
```

## style과 className
JSX에서는 style을 자바스크립트 객체의 형태로 작성한다.
css 속성의 이름은 자바스크립트와 동일하게 camelCase로 작성하고, 값은 반드시 문자열로 작성해야 한다.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: 8 + 8 + 'px', // 연산도 가능하다
      color: 'white',
      fontSize: '36px'
    };

    return <div style={style}>안녕하세요!</div>; // style 속성에 style 객체를 전달
  }
}

export default App;
```

엘리먼트에 class를 지정하게 될 때에는 class 대신 className을 사용한다. (class 라고만 써도 오류는 발생하지 않으나 올바른 규칙은 아니다)

```css
.App {
  background: black;
  color: aqua;
  font-size: 36px;
  padding: 1rem;
  font-weight: 600;
}
```

```jsx
import React, { Component } from 'react';
import './App.css' // css 파일을 불러온다

class App extends Component {
  render() {
    return (
      <div className="App"> // class 대신 className을 사용한다.
        리액트
      </div>
    );
  }
}

export default App;
```

## 주석
JSX 내부에 주석을 작성하기 위해서는 `{/* ... */}` 사이에 작성하거나, 태그 사이에 작성한다.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        // 이렇게 작성하면 html 요소로 인식한다!
        {/* 주석은 이렇게 */}
        <h1
          // 태그 사이에
        >리액트</h1>
      </div>
    );
  }
}

export default App;
```


