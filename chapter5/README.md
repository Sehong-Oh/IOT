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

```


### 예제 5-4
```javascript

```


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