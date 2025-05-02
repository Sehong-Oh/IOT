# 사물인터넷 과제 저장소
## 오세홍

## Chapter3
### 예제 3-1
```javascript
console.log(this);
console.log(window);
console.log(this === window);
```
- 브라우저 환경에서 전역 객체에 접근하는 방법을 보여이다. 브라우저에서 `this`는 전역 객체인 `window`를 가리키므로, `this`와 `window`는 동일한 객체를 참조한다. `this === window`가 `true`를 반환하는 것으로 이를 확인할 수 있다. 브라우저의 전역 객체는 `alert()`, `atob()` 등의 여러 내장 메서드를 포함하고 있다.

### 예제 3-2
```javascript
console.log(this);
console.log(global);
console.log(this === global);
```
- Node.js 환경에서 전역 객체에 접근하는 방법이다. Node.js에서 전역 객체는 `global`이라는 이름을 가지며, 최상위 스코프의 `this`는 `global` 객체를 참조한다. `this === global`이 `true`를 반환하는 것으로 이를 확인할 수 있다. Node.js의 전역 객체는 `process` 등의 Node.js 관련 정보를 포함하고 있다.


### 예제 3-3
```javascript
var a = 1;
console.log(a);
console.log(window.a);
console.log(this.a);
```
- `var`로 선언된 전역 변수 `a`는 자동으로 전역 객체(window)의 프로퍼티가 된다. 따라서 `a`, `window.a`, `this.a` 모두 동일한 값(1)에 접근한다. 이는 전역 스코프에서 선언된 변수가 전역 객체의 프로퍼티로 자동 등록되는 특성을 보여준다.

### 예제 3-4
```javascript
var a = 1;
window.b = 2;
console.log(a, window.a, this.a);
console.log(b, window.b, this.b);

window.a = 3;
b = 4;
console.log(a, window.a, this.a);
console.log(b, window.b, this.b);
```
-  `var a = 1`로 선언한 변수와 `window.b = 2`로 직접 할당한 프로퍼티는 모두 전역 객체의 프로퍼티가 된다. 따라서 `a`와 `window.a`, `this.a`는 모두 같은 값을 참조하며, `b`와 `window.b`, `this.b`도 마찬가지다. 또한 `window.a = 3`처럼 전역 객체를 통해 값을 변경하면 변수 `a`의 값도 변경되고, `b = 4`처럼 변수만 사용해도 전역 객체의 프로퍼티 값이 변경된다.

### 예제 3-5
```javascript
var a = 1;
delete window.a;
console.log(a, window.a, this.a);

var b = 2;
delete b;
console.log(b, window.b, this.b);

window.c = 3;
delete window.c;
console.log(c, window.c, this.c);

window.d = 4;
delete d;
console.log(d, window.d, this.d);
```
- 위 코드는 `var`로 선언된 전역 변수와 직접 전역 객체에 할당된 프로퍼티의 삭제 가능성 차이를 보여준다. `var`로 선언된 변수 `a`와 `b`는 `delete` 연산자로 삭제할 수 없으며(`delete window.a`와 `delete b`는 `false` 반환), 직접 전역 객체에 할당한 프로퍼티 `c`와 `d`는 삭제할 수 있다(`delete window.c`와 `delete d`는 `true` 반환). 삭제 후에는 `c`와 `d`에 접근하면 ReferenceError가 발생한다.

### 예제 3-6
```javascript
var func = function(x) {
    console.log(this, x);
};
func(1);

var obj = {
    method: func,
};
obj.method(2);
```
- 함수 호출 방식에 따라 `this`가 어떻게 달라지는지 보여준다. 일반 함수로 호출된 `func(1)`에서 `this`는 전역 객체(Window)를 가리킨다. 반면 객체의 메서드로 호출된 `obj.method(2)`에서는 `this`가 메서드를 호출한 객체(`obj`)를 가리킨다. 이는 JavaScript에서 함수 호출 패턴에 따라 `this`가 동적으로 결정됨을 보여준다.


### 예제 3-7
```javascript
var obj = {
    method: function(x) {
      console.log(this, x);
    },
};
obj.method(1);
obj['method'](2);
```
- 객체의 메서드를 다양한 방식으로 호출할 때 `this`의 값을 보여준다. `obj.method(1)`와 `obj['method'](2)` 두 방식 모두 `this`는 호출한 객체 `obj`를 가리킨다. 이는 메서드 호출 시 점 표기법(.)이나 괄호 표기법([])이 `this` 바인딩에 영향을 주지 않음을 보여준다. 둘 다 같은 객체의 메서드로 호출된 것으로 인식된다.

### 예제 3-8
```javascript
var obj = {
    methodA: function() {
        console.log(this);
    },
    inner: {
        methodB: function() {
            console.log(this);
      },
    },
};
obj.methodA();
obj['methodA']();

obj.inner.methodB();
obj.inner['methodB']();
obj['inner'].methodB();
obj['inner']['methodB']();
```
- `obj.methodA()`나 `obj['methodA']()`를 호출할 때 `this`는 `obj`를 가리킨다. 반면 `obj.inner.methodB()`, `obj.inner['methodB']()`, `obj['inner'].methodB()`, `obj['inner']['methodB']()`를 호출할 때는 `this`가 `obj.inner`를 가리킨다. 이는 메서드를 호출할 때 `this`가 항상 해당 메서드를 직접 호출한 객체(점이나 괄호 표기법 바로 앞의 객체)에 바인딩됨을 보여준다.

### 예제 3-9
```javascript
var obj1 = {
    outer: function() {
      console.log(this);
      var innerFunc = function() {
        console.log(this);
      }
      innerFunc();
  
      var obj2 = {
        innerMethod: innerFunc,
      };
      obj2.innerMethod();
    }
};
obj1.outer();
```
- `obj1.outer()` 호출 시 `outer` 함수 내부에서 `this`는 `obj1`을 가리킨다. 그러나 `outer` 내부에서 정의된 `innerFunc`를 일반 함수로 호출하면(`innerFunc()`) `this`는 전역 객체를 가리킨다. 같은 함수라도 `obj2.innerMethod()`처럼 객체의 메서드로 호출하면 `this`는 해당 객체(`obj2`)를 가리킨다. 이는 `this`가 함수를 어떻게 호출하느냐에 따라 동적으로 결정됨을 보여준다.

### 예제 3-10
```javascript
var obj1 = {
    outer: function() {
      console.log(this);
      var innerFunc = function() {
        console.log(this);
      }
      innerFunc();
  
      var obj2 = {
        innerMethod: innerFunc,
      };
      obj2.innerMethod();
    }
};
obj1.outer();
```
-중첩 함수에서 `this`를 우회하는 방법을 보여준다. `obj.outer()` 호출 시 `outer` 내부에서 `this`는 `obj`를 가리킨다. 그러나 내부 함수 `innerFunc1()`에서 `this`는 전역 객체를 가리킨다. 이 문제를 해결하기 위해 `outer` 함수에서 `this`를 변수 `self`에 저장한 후, `innerFunc2` 내부에서 `self`를 참조하면 `obj`에 접근할 수 있다. 이 패턴은 내부 함수에서 외부 함수의 `this`를 사용해야 할 때 자주 활용된다.

### 예제 3-11
```javascript
var obj = {
    outer: function() {
      console.log(this);
      var innerFunc = () => {
        console.log(this);
      };
      innerFunc();
    },
};
obj.outer();
```
-  화살표 함수로 정의된 `innerFunc`에서 `this`는 자신을 감싸는 `outer` 함수의 `this`를 그대로 상속받아 `obj`를 가리킨다. 화살표 함수는 자신만의 `this`를 생성하지 않고 외부 스코프의 `this`를 그대로 사용하는 특성을 가진다.

### 예제 3-12
```javascript

```

### 예제 3-13
```javascript

```

### 예제 3-14
```javascript

```

### 예제 3-15
```javascript

```

### 예제 3-16
```javascript

```

### 예제 3-17
```javascript

```

### 예제 3-18
```javascript

```

### 예제 3-19
```javascript

```

### 예제 3-20
```javascript

```

### 예제 3-21
```javascript

```

### 예제 3-22
```javascript

```

### 예제 3-23
```javascript

```

### 예제 3-24
```javascript

```

### 예제 3-25
```javascript

```

### 예제 3-26
```javascript

```

### 예제 3-27
```javascript

```

### 예제 3-28
```javascript

```

### 예제 3-29
```javascript

```

### 예제 3-30
```javascript

```

### 예제 3-31
```javascript

```