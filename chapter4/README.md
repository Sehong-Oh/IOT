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
  - **비동기 프로그래밍**: JavaScript는 싱글 스레드 언어이지만, 타이머 함수를 통해 비동기적으로 코드를 실행할 수 있다.
  - **타이머 함수 (setInterval)**: 일정 시간 간격으로 코드를 반복 실행하는 방법이다. 이 코드에서는 300밀리초(0.3초) 간격으로 콜백 함수를 실행한다.
  - **콜백 함수**: 타이머에 전달되어 나중에 실행되는 함수이다. 여기서는 익명 함수(anonymous function)가 사용되었다.
  - **클로저**: 함수가 자신이 선언된 환경의 변수(`count`, `timer`)에 계속 접근할 수 있는 개념이다. 콜백 함수가 외부에 선언된 `count`와 `timer` 변수에 접근하는 것이 클로저의 예시이다.
  - **이벤트 루프**: JavaScript가 비동기 작업을 처리하는 방식으로, 타이머 이벤트가 이벤트 큐에 추가되고 실행된다.

- 코드 동작 설명  
  - 처음에 `count` 변수가 0으로 초기화된다.
  - `setInterval` 함수는 지정된 콜백 함수를 300밀리초마다 반복 실행하는 타이머를 생성한다.
  - 타이머 ID가 `timer` 변수에 저장된다.
  - 콜백 함수는 매 실행마다 현재 `count` 값을 콘솔에 출력한다.
  - 전위 증가 연산자(`++count`)로 `count` 값을 1 증가시킨 후 조건을 확인한다.
  - `count` 값이 4보다 크면 `clearInterval` 함수로 타이머를 중지한다.
  - 결과적으로 콘솔에는 0부터 4까지 5개의 숫자가 0.3초 간격으로 출력된다.

### 예제 4-2
```javascript
var count = 0;
var cbFunc = function() {
    console.log(count);
    if (++count > 4) clearInterval(timer);
};

var timer = setInterval(cbFunc, 300);
```
코드 동작 설명:
- 처음에 `count` 변수가 0으로 초기화된다.
- `cbFunc`라는 이름의 콜백 함수를 별도로 정의한다. 이 함수는:
  - 현재 `count` 값을 콘솔에 출력한다.
  - 전위 증가 연산자(`++count`)로 `count` 값을 1 증가시킨 후 조건을 확인한다.
 - `count` 값이 4보다 크면 `clearInterval` 함수로 타이머를 중지한다.
- `setInterval` 함수를 사용하여 `cbFunc` 함수를 300밀리초마다 반복 실행하는 타이머를 생성한다.
- 타이머 ID가 `timer` 변수에 저장된다.
- 이 코드는 앞의 예제와 기능적으로 동일하지만, 콜백 함수를 별도의 명명된 함수로 분리하여 코드의 가독성을 향상시켰다.


### 예제 4-3
```javascript
var newArr= [10, 20, 30].map(function (currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});

console.log(newArr);
```
코드 동작 설명:
- 초기 배열 `[10, 20, 30]`에 대해 `map` 메서드를 호출한다.
- `map` 메서드는 배열의 각 요소를 순회하면서 콜백 함수를 실행하고, 그 결과로 새로운 배열을 반환한다.
- 콜백 함수는 두 개의 매개변수를 받는다:
  - `currentValue`: 현재 처리 중인 배열 요소의 값
  - `index`: 현재 처리 중인 요소의 인덱스
- 콜백 함수 내부에서는:
  - 현재 값과 인덱스를 콘솔에 출력한다.
  - 현재 값에 5를 더한 결과를 반환한다.
- `map` 메서드의 결과로 생성된 새 배열 `newArr`은 `[15, 25, 35]`가 된다.
- 마지막으로 `newArr` 배열을 콘솔에 출력한다.
- 이 코드는 배열의 모든 요소에 5를 더하는 `map` 메서드의 기본 사용법을 보여준다.
- 콘솔에는 다음과 같이 출력된다:
  - `10 0` (첫 번째 요소 값과 인덱스)
  - `20 1` (두 번째 요소 값과 인덱스)
  - `30 2` (세 번째 요소 값과 인덱스)
  - `[15, 25, 35]` (변환된 새 배열)

### 예제 4-4
```javascript
var newArr2 = [10, 20, 30].map(function(index, currentValue) {
 console.log(index, currentValue);
 return currentValue + 5;
});

console.log(newArr2);
```
코드 동작 설명:
- 초기 배열 `[10, 20, 30]`에 대해 `map` 메서드를 호출한다.
- `map` 메서드는 배열의 각 요소를 순회하면서 콜백 함수를 실행한다.
- 여기서 콜백 함수의 매개변수 이름을 원래 순서와 반대로 작성했다:
 - `index`라는 이름으로 첫 번째 매개변수를 선언했지만, 실제로는 현재 요소의 값을 받는다.
 - `currentValue`라는 이름으로 두 번째 매개변수를 선언했지만, 실제로는 인덱스 값을 받는다.
- 콜백 함수 내부에서는:
 - 두 값을 콘솔에 출력한다 (실제로는 값과 인덱스 순서로 출력된다).
 - `currentValue + 5`를 반환하는데, 이 `currentValue`는 실제로 인덱스이다.
- 따라서 결과 배열 `newArr2`는 `[5, 6, 7]`이 된다 (각 인덱스 0, 1, 2에 5를 더한 값).
- 마지막으로 `newArr2` 배열을 콘솔에 출력한다.
- 이 코드는 매개변수 이름이 중요한 것이 아니라 매개변수의 순서가 중요함을 보여준다.
- JavaScript에서 `map`의 콜백 함수는 항상 (요소값, 인덱스, 원본배열) 순서로 인자를 전달한다.

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

