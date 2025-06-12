# 사물인터넷 과제 저장소
## 오세홍

## Chapter6
### 예제 6-1
```javascript
var Person = function(name) {
	this._name = name;
};
Person.prototype.getName = function() {
	return this._name;
};
```
코드 동작 설명:
- `Person` 생성자 함수는 `name` 매개변수를 받아 인스턴스의 `_name` 프로퍼티에 저장한다.
- `Person.prototype.getName` 메서드는 인스턴스의 `_name` 값을 반환한다.
- 이는 생성자 함수와 프로토타입을 이용한 기본적인 객체 생성 패턴을 보여준다.


### 예제 6-2
```javascript
코드 동작 설명:
- `Constructor` 생성자 함수는 `name` 프로퍼티를 설정한다.
- 프로토타입에 `method1` 메서드와 `property1` 프로퍼티를 추가한다.
- `new Constructor('Instance')`로 인스턴스를 생성한다.
- `console.dir`을 통해 생성자 함수와 인스턴스의 구체적인 구조를 확인할 수 있다.
```

### 예제 6-3
```javascript
코드 동작 설명:
- 배열 `arr`의 생성자 함수 참조를 다양한 방법으로 확인한다.
- `Array.prototype.constructor`, `arr.__proto__.constructor`, `arr.constructor` 모두 `Array`를 가리킨다.
- `arr.constructor`를 이용해 새로운 배열 `arr2`를 생성할 수 있다.
```


### 예제 6-4
```javascript

```


### 예제 6-5
```javascript

```


### 예제 6-6
```javascript

```


### 예제 6-7
```javascript

```


### 예제 6-8
```javascript

```


### 예제 6-9
```javascript

```


### 예제 6-10
```javascript

```