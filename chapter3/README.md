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

```

### 예제 3-6
```javascript

```

### 예제 3-7
```javascript

```

### 예제 3-8
```javascript

```

### 예제 3-9
```javascript

```

### 예제 3-10
```javascript

```

### 예제 3-11
```javascript

```

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