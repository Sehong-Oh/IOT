# 사물인터넷 과제 저장소
## 오세홍

## Chapter2
### 예제 2-1
```javascript
// ----------------- (1)
var a = 1;
function outer() {
    function inner() {
    console.log(a); // undefined
    var a = 3;
    }
    inner(); // ------- (2)
    console.log(a);
}
outer(); // --------- (3)
console.log(a); 
```
- 변수 호이스팅(Hoisting): JavaScript에서는 변수 선언이 코드의 맨 위로 끌어올려지지만, 초기화는 원래 위치에서 실행됩니다. 그래서 `inner` 함수에서 `console.log(a)` 실행 시 `a`는 선언되었지만 초기화되지 않아 `undefined`가 출력된다.  
- 스코프 체인(Scope Chain): JavaScript는 변수를 찾을 때 현재 스코프에서 시작하여 상위 스코프로 올라가며 검색한다. `outer` 함수에서는 지역 변수 `a`가 없으므로 글로벌 변수 `a`(값: 1)를 참조한다.  
- 실행 컨텍스트(Execution Context): 코드가 실행되는 환경으로, 변수 객체, 스코프 체인, `this` 값을 포함한다.  
- 콜 스택(Call Stack): 함수 호출을 추적하는 데이터 구조로, 마지막에 들어온 함수가 먼저 실행 완료된다.


### 예제 2-2
```javascript
function a(x) {
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
  }
  a(1);
```
- 해당 코드는 함수 매개변수와 동일한 이름의 변수를 재선언할 때의 호이스팅 현상을 보여준다. 함수 `a`가 매개변수 `x`(값 1)를 받고, 함수 내부에서 같은 이름의 변수를 두 번 더 선언한다. 첫 번째 `console.log`에서는 매개변수 값 1이 출력된다. 두 번째에서도 `var x`만으로는 값이 재할당되지 않아 여전히 1이 출력된다. 세 번째에서는 `x`에 2가 명시적으로 할당되어 2가 출력된다. 이를 통해 변수 선언(`var`)과 할당의 분리를 확인할 수 있다.


### 예제 2-3
```javascript
function a() {
    var x = 1;
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
  }
  a();
```
- 함수 내에서 동일한 변수를 여러 번 선언할 때 변수의 값이 어떻게 변화하는지 보여준다. 처음에 변수 `x`에 1을 할당하고, 이후 두 번 더 선언하며 마지막에는 2를 할당한다. JavaScript에서 변수 재선언은 허용되며, 값은 할당문에 의해서만 변경된다. 따라서 첫 번째와 두 번째 `console.log`에서는 1이 출력되고, 세 번째에서는 새로 할당된 2가 출력된다. 이는 변수의 중복 선언이 값에 영향을 주지 않음을 보여준다.


### 예제 2-4
```javascript
function a() {
    var x;
    var x;
    var x;
  
    x = 1;
    console.log(x);
    console.log(x);
    x = 2;
    console.log(x);
  }
  
  a(1);
```
- 호이스팅의 실제 동작을 명시적으로 표현한 것이다. JavaScript 엔진은 실행 전에 모든 변수 선언(`var x`)을 함수 상단으로 끌어올리고, 중복 선언은 하나로 통합한다.
- 이후 할당문(`x = 1`, `x = 2`)은 원래 위치에서 순차적으로 실행된다. 따라서 세 번의 `console.log`에서 각각 1, 1, 2가 출력된다. 이 예제를 통해 변수 선언과 할당이 분리되어 처리됨을 명확하게 볼 수 있다.

### 예제 2-5
```javascript
function a() {
    console.log(b);
    var b = 'bbb'; // 변수선언
    console.log(b);
    function b() {} // 함수선언
    console.log(b);
  }
  a();
```
- 변수 선언과 함수 선언이 동일한 이름으로 존재할 때의 호이스팅 우선순위를 보여준다. 
- 함수 선언(`function b(){}`)은 변수 선언(`var b`)보다 우선적으로 호이스팅되므로, 첫 번째 `console.log`에서는 함수 객체 자체가 출력된다. 이후 'bbb' 값이 `b`에 할당되면 변수 값이 함수를 덮어쓴다. 
- 따라서 두 번째와 세 번째 `console.log`에서는 모두 'bbb'가 출력된다. 이는 함수 선언과 변수 선언의 호이스팅 우선순위 차이를 명확하게 보여준다.



### 예제 2-6
```javascript
function a() {
    var b;
    function b() {}

    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
  }

  a();
```
- 2-5의 동작을 호이스팅된 상태로 명시적으로 재구성한 것이다. 변수 선언과 함수 선언을 코드 상단에 배치하여, 실제 JavaScript 엔진이 코드를 해석하는 방식을 표현한다.
- 함수 선언이 변수 선언보다 우선시되어 첫 번째 `console.log`에서는 함수 객체가 출력된다. 이후 `b`에 'bbb' 값이 할당되면 두 번째와 세 번째 `console.log`에서는 모두 'bbb'가 출력된다. 이는 호이스팅의 동작과 실행 순서를 명확히 보여준다.

### 예제 2-7
```javascript

```

### 예제 2-8
```javascript

```

### 예제 2-9
```javascript

```

### 예제 2-10
```javascript

```

### 예제 2-11
```javascript

```

### 예제 2-12
```javascript

```

### 예제 2-13
```javascript

```

### 예제 2-14
```javascript

```

### 예제 2-15
```javascript

```

### 예제 2-16
```javascript

```