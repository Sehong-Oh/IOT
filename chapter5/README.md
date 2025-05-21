# 사물인터넷 과제 저장소
## 오세홍

## Chapter4
### 예제 5-1
```javascript
var outer = function() {
	var a = 1;
	var inner = function() {
		console.log(++a);
	};
	inner();
};

outer();
```
코드 동작 설명:
- `outer` 함수는 변수 `a`와 내부 함수 `inner`를 정의한다.
- `inner` 함수는 외부 함수 `outer`의 변수 `a`에 접근하여 증가시키고 출력한다.
- `outer` 함수를 호출하면 내부에서 `inner` 함수가 실행되어 `a`가 2로 증가되고 출력된다.
- 이 예제는 가장 단순한 형태의 클로저 활용을 보여준다.

### 예제 5-2
```javascript
var outer = function() {
	var a = 1;
	var inner = function() {
		return ++a;
	};
	return inner();
};

var outer2 = outer();
console.log(outer2);
```
코드 동작 설명:
- `outer` 함수는 변수 `a`와 내부 함수 `inner`를 정의한다.
- `inner` 함수는 `a`를 증가시키고 그 값을 반환한다.
- `outer` 함수는 `inner` 함수를 실행한 결과(2)를 반환한다.
- `outer2`에는 `outer()` 호출의 반환값인 2가 할당되고, 이 값이 출력된다.
- 이 예제는 내부 함수의 실행 결과를 외부로 전달하는 패턴을 보여준다.

### 예제 5-3
```javascript
var outer = function() {
	var a = 1;
	var inner = function() {
		return ++a;
	};
	return inner;
};

var outer2 = outer();
console.log(outer2());
console.log(outer2());
```
코드 동작 설명:
- `outer` 함수는 변수 `a`와 내부 함수 `inner`를 정의한다.
- `inner` 함수는 `a`를 증가시키고 그 값을 반환한다.
- `outer` 함수는 `inner` 함수 자체를 반환한다(실행 결과가 아니라 함수 자체).
- `outer2`에는 `outer()` 호출로 반환된 `inner` 함수가 할당된다.
- `outer2()`를 호출하면 `inner` 함수가 실행되고, `a`가 2로 증가된 후 반환된다.
- 다시 `outer2()`를 호출하면 동일한 `inner` 함수가 실행되고, `a`는 이전 상태인 2에서 3으로 증가된다.
- 이 예제는 클로저를 통해 함수가 자신이 생성될 때의 환경(변수 `a`)을 기억하고 접근하는 것을 보여준다.


### 예제 5-4
```javascript
// return 없이도 클로저가 발생하는 경우
// (1) setInterval/setTimeout
(function() {
	var a = 0;
	var intervalId = null;
	var inner = function() {
		if (++a >= 10) {
			clearInterval(intervalId);
		}
		console.log(a);
	};
	intervalId = setInterval(inner, 1000);
})();

// (2) eventListener
(function() {
	var count = 0;
	var button = document.createElement('button');
	button.innerText = 'click';
	button.addEventListener('click', function() {
		console.log(++count, 'times clicked');
	});
	document.body.appendChild(button);
})();
```
코드 동작 설명:
- (1) setInterval/setTimeout 예제
  - 즉시 실행 함수(IIFE) 내에서 변수 `a`와 `intervalId`, 그리고 함수 `inner`를 정의한다.
  - `inner` 함수는 `a`를 증가시키고, 10 이상이 되면 `intervalId`로 식별되는 타이머를 중지한다.
  - `setInterval`로 `inner` 함수를 1초마다 실행하도록 설정하고, 그 ID를 `intervalId`에 저장한다.
  - 클로저를 통해 `inner` 함수가 외부 변수 `a`와 `intervalId`에 계속 접근할 수 있다.

- (2) eventListener 예제
  - 즉시 실행 함수(IIFE) 내에서 변수 `count`와 버튼 요소를 생성한다.
  - 버튼에 클릭 이벤트 리스너를 추가하는데, 이 리스너는 클로저를 형성하여 `count` 변수에 접근한다.
  - 버튼이 클릭될 때마다 `count`가 증가하고 클릭 횟수가 출력된다.
  - 클로저를 통해 이벤트 핸들러 함수가 외부 변수 `count`에 계속 접근할 수 있다.


### 예제 5-5
```javascript

```


### 예제 5-6
```javascript

```


### 예제 5-7
```javascript

```


### 예제 5-8
```javascript

```


### 예제 5-9
```javascript

```


### 예제 5-10
```javascript

```


### 예제 5-11
```javascript

```

### 예제 5-12
```javascript

```


### 예제 5-13
```javascript

```


### 예제 5-14
```javascript

```


### 예제 5-15
```javascript

```


### 예제 5-16
```javascript

```


### 예제 5-17
```javascript

```


### 예제 5-18
```javascript

```