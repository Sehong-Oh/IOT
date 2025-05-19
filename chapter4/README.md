# 사물인터넷 과제 저장소
## 오세홍

## Chapter4
### 예제 4-1
```javascript
var count = 0;
var timer = setInterval(function() {
   console.log(count);
   if (++count > 4) clearInterval(timer);
}, 300);
```
- 핵심 JavaScript 개념
 -- **비동기 프로그래밍**: JavaScript는 싱글 스레드 언어이지만, 타이머 함수를 통해 비동기적으로 코드를 실행할 수 있다.
 -- **타이머 함수 (setInterval)**: 일정 시간 간격으로 코드를 반복 실행하는 방법이다. 이 코드에서는 300밀리초(0.3초) 간격으로 콜백 함수를 실행한다.
 -- **콜백 함수**: 타이머에 전달되어 나중에 실행되는 함수이다. 여기서는 익명 함수(anonymous function)가 사용되었다.
 -- **클로저**: 함수가 자신이 선언된 환경의 변수(`count`, `timer`)에 계속 접근할 수 있는 개념이다. 콜백 함수가 외부에 선언된 `count`와 `timer` 변수에 접근하는 것이 클로저의 예시이다.
 -- **이벤트 루프**: JavaScript가 비동기 작업을 처리하는 방식으로, 타이머 이벤트가 이벤트 큐에 추가되고 실행된다.

- 코드 동작 설명  
 -- 처음에 `count` 변수가 0으로 초기화된다.
 -- `setInterval` 함수는 지정된 콜백 함수를 300밀리초마다 반복 실행하는 타이머를 생성한다.
 -- 타이머 ID가 `timer` 변수에 저장된다.
 -- 콜백 함수는 매 실행마다 현재 `count` 값을 콘솔에 출력한다.
 -- 전위 증가 연산자(`++count`)로 `count` 값을 1 증가시킨 후 조건을 확인한다.
 -- `count` 값이 4보다 크면 `clearInterval` 함수로 타이머를 중지한다.
 -- 결과적으로 콘솔에는 0부터 4까지 5개의 숫자가 0.3초 간격으로 출력된다.

### 예제 4-2
```javascript

```

### 예제 4-3
```javascript

```

### 예제 4-4
```javascript

```

### 예제 4-5
```javascript

```

### 예제 4-6
```javascript

```

### 예제 4-7
```javascript

```

### 예제 4-8
```javascript

```

### 예제 4-9
```javascript

```

### 예제 4-10
```javascript

```

### 예제 4-11
```javascript

```

### 예제 4-12
```javascript

```

### 예제 4-13
```javascript

```

### 예제 4-14
```javascript

```

### 예제 4-15
```javascript

```

### 예제 4-16
```javascript

```

### 예제 4-17
```javascript

```

