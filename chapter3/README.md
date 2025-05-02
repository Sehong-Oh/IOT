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
- 중첩 함수에서 `this`를 우회하는 방법을 보여준다. `obj.outer()` 호출 시 `outer` 내부에서 `this`는 `obj`를 가리킨다. 그러나 내부 함수 `innerFunc1()`에서 `this`는 전역 객체를 가리킨다. 이 문제를 해결하기 위해 `outer` 함수에서 `this`를 변수 `self`에 저장한 후, `innerFunc2` 내부에서 `self`를 참조하면 `obj`에 접근할 수 있다. 이 패턴은 내부 함수에서 외부 함수의 `this`를 사용해야 할 때 자주 활용된다.

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
setTimeout(function() {
    console.log(this);
}, 300);

[1, 2, 3, 4, 5].forEach(function(x) {
    console.log(this, x);
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a')
    .addEventListener('click', function(e) {
    console.log(this, e);
});
```
- `setTimeout` 함수의 콜백에서 `this`는 전역 객체를 가리킨다. `forEach` 메서드의 콜백 함수에서도 `this`는 전역 객체를 가리킨다. 그러나 이벤트 리스너의 콜백 함수에서는 `this`가 이벤트를 발생시킨 요소(여기서는 클릭된 버튼)를 가리킨다. 이처럼 콜백 함수의 `this`는 호출 주체에 따라 달라지며, 일부 메서드는 `this`를 특정 값으로 설정한다.

### 예제 3-13
```javascript
var Cat = function(name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};
var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);
console.log(choco, nabi);
```
- `Cat` 함수를 `new` 키워드와 함께 호출하면 새로운 객체가 생성되고, 함수 내부의 `this`는 이 새 객체를 가리킨다. 함수 내 `this.bark`, `this.name`, `this.age`에 값을 할당하면 새 객체의 프로퍼티로 설정된다.  
- 결과적으로 `choco`와 `nabi`는 각각 `Cat` 생성자 함수로 생성된 서로 다른 객체가 되며, 각자 자신의 프로퍼티 값을 갖게 된다.

### 예제 3-14
```javascript
var func = function(a, b, c) {
    console.log(this, a, b, c);
};

func(1, 2, 3);
func.call({ x: 1 }, 4,5,6);
```
- 코드는 `call` 메서드를 사용하여 함수의 `this`를 명시적으로 바인딩하는 방법을 보여준다. 일반 함수로 호출된 `func(1, 2, 3)`에서 `this`는 전역 객체를 가리킨다. 반면 `func.call({ x: 1 }, 4, 5, 6)`에서는 `this`가 `{ x: 1 }` 객체를 가리키고, 인자로 4, 5, 6이 전달된다. `call` 메서드는 첫 번째 인자로 `this`로 사용할 객체를 받고, 이후 인자들은 함수의 매개변수로 순서대로 전달된다.

### 예제 3-15
```javascript
var obj = {
    a: 1,
    method: function(x, y) {
        console.log(this.a, x, y);
    }
};

obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);
```
- 이 코드는 객체 메서드에서 `call`을 사용하는 예를 보여준다. `obj.method(2, 3)` 호출 시 `this`는 `obj`를 가리켜 `this.a`는 1이 된다. 그러나 `obj.method.call({ a: 4 }, 5, 6)` 호출 시에는 `this`가 `{ a: 4 }`로 교체되어 `this.a`는 4가 되고, 인자로 5와 6이 전달된다. 이는 `call`을 통해 메서드의 `this` 바인딩을 원하는 객체로 변경할 수 있음을 보여준다.

### 예제 3-16
```javascript
var func = function(a, b, c) {
    console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]);

var obj = {
    a: 1,
    method: function(x, y) {
        console.log(this.a, x, y);
    }
};
obj.method.apply({ a: 4 }, [5, 6]);  
```
- `apply`는 `call`과 유사하지만, 두 번째 인자로 배열(또는 유사 배열 객체)을 받아 함수의 매개변수로 전달한다. `func.apply({ x: 1 }, [4, 5, 6])`에서 `this`는 `{ x: 1 }`이 되고, 배열 [4, 5, 6]의 각 요소가 함수의 매개변수로 전달된다. 마찬가지로 `obj.method.apply({ a: 4 }, [5, 6])`에서도 `this`는 `{ a: 4 }`가 되고, [5, 6]의 요소들이 매개변수로 전달된다.


### 예제 3-17
```javascript
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};
Array.prototype.push.call(obj, 'd');
console.log(obj);

var arr = Array.prototype.slice.call(obj);
console.log(arr);
```
- 이 코드는 유사 배열 객체에 배열 메서드를 적용하는 예를 보여준다. `obj`는 배열처럼 인덱스와 `length` 프로퍼티를 가진 유사 배열 객체다. `Array.prototype.push.call(obj, 'd')`를 통해 배열의 `push` 메서드를 `obj`에 적용하여 새 요소를 추가한다. 또한 `Array.prototype.slice.call(obj)`로 `obj`를 실제 배열로 변환한다. 이는 배열이 아닌 객체에 배열 메서드를 빌려 사용하는 패턴을 보여준다.

### 예제 3-18
```javascript
function a() {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function(arg) {
        console.log(arg);
    });
}
a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function(node) {
    console.log(node);
});
```
- 이 코드는 유사 배열 객체를 배열로 변환하는 실용적인 예시를 보여준다. 함수 `a` 내에서 `arguments` 객체(함수에 전달된 인자들을 담은 유사 배열 객체)를 `Array.prototype.slice.call(arguments)`를 통해 실제 배열로 변환한다. 마찬가지로 DOM의 `NodeList`(여기서는 `document.querySelectorAll('div')` 결과)도 같은 방식으로 배열로 변환하여 배열 메서드(`forEach`)를 사용할 수 있게 한다.

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