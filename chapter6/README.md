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
var Constructor = function(name) {
	this.name = name;
};
Constructor.prototype.method1 = function() {};
Constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);
```
코드 동작 설명:
- `Constructor` 생성자 함수는 `name` 프로퍼티를 설정한다.
- 프로토타입에 `method1` 메서드와 `property1` 프로퍼티를 추가한다.
- `new Constructor('Instance')`로 인스턴스를 생성한다.
- `console.dir`을 통해 생성자 함수와 인스턴스의 구체적인 구조를 확인할 수 있다.

### 예제 6-3
```javascript
var arr = [1, 2];
Array.prototype.constructor === Array;
arr.__proto__.constructor === Array;
arr.constructor === Array;

var arr2 = new arr.constructor(3, 4);
console.log(arr2);
```
코드 동작 설명:
- 배열 `arr`의 생성자 함수 참조를 다양한 방법으로 확인한다.
- `Array.prototype.constructor`, `arr.__proto__.constructor`, `arr.constructor` 모두 `Array`를 가리킨다.
- `arr.constructor`를 이용해 새로운 배열 `arr2`를 생성할 수 있다.

### 예제 6-4
```javascript
var NewConstructor = function() {
	console.log('this is new constuctor!');
};
var dataTypes = [
	1,
	'test',
	true,
	{},
	[],
	function() {},
	/test/,
	new Number(),   // NewConstructor & false
	new String(),   // NewConstructor & false
	new Boolean(),  // NewConstructor & false
	new Object(),   // NewConstructor & false
	new Array(),    // NewConstructor & false
	new Function(), // NewConstructor & false
	new RegExp(),   // NewConstructor & false
	new Date(),     // NewConstructor & false
	new Error(),    // NewConstructor & false
];

dataTypes.forEach(function(d) {
	d.constructor = NewConstructor;
	console.log(d.constructor.name, '&', d instanceof NewConstructor);
});
```
코드 동작 설명:
- 다양한 데이터 타입들의 `constructor` 프로퍼티를 `NewConstructor`로 변경한다.
- `constructor` 프로퍼티는 변경할 수 있지만 `instanceof` 연산자는 실제 프로토타입 체인을 확인한다.
- 모든 경우에서 `d instanceof NewConstructor`는 `false`가 나온다.

### 예제 6-5
```javascript
var Person = function(name) {
	this.name = name;
};
var p1 = new Person('사람1');                       // Person { name: "사람1" } true
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor('사람2'); // Person { name: "사람2" } true
var p3 = new p1Proto.constructor('사람3');          // Person { name: "사람3" } true
var p4 = new p1.__proto__.constructor('사람4');     // Person { name: "사람4" } true
var p5 = new p1.constructor('사람5');               // Person { name: "사람5" } true

[p1, p2, p3, p4, p5].forEach(function(p) {
	console.log(p, p instanceof Person);
});
```
코드 동작 설명:
- 다양한 방법으로 생성자 함수에 접근하여 인스턴스를 생성한다.
- `Person.prototype.constructor`, `Object.getPrototypeOf(p1).constructor`, `p1.__proto__.constructor`, `p1.constructor` 모두 동일한 생성자 함수를 가리킨다.
- 모든 인스턴스는 동일한 방식으로 생성되어 `instanceof Person`이 `true`가 된다.

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