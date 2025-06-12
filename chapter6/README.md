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
var Person = function(name) {
	this.name = name;
};
Person.prototype.getName = function() {
	return this.name;
};

var iu = new Person('지금');
iu.getName = function() {
	return '바로 ' + this.name;
};

console.log(iu.getName());
```
코드 동작 설명:
- `Person` 생성자로 `iu` 인스턴스를 생성한다.
- 인스턴스의 `getName` 메서드를 재정의한다.
- 메서드 호출 시 프로토타입의 메서드보다 인스턴스의 메서드가 우선적으로 실행된다.

### 예제 6-7
```javascript
var arr = [1, 2];
arr.push(3);
arr.hasOwnProperty(2);
```
- 배열 `arr`에 `push(3)`로 요소를 추가한다.
- `hasOwnProperty(2)`로 인덱스 2가 배열의 고유 프로퍼티인지 확인한다.
- 배열의 인덱스는 객체의 프로퍼티이므로 `true`를 반환한다.

### 예제 6-8
```javascript
var arr = [1, 2];
Array.prototype.toString.call(arr); 
Object.prototype.toString.call(arr); 
arr.toString(); 

arr.toString = function() {
	return this.join('_');
};
arr.toString(); 
```
코드 동작 설명:
- `Array.prototype.toString`과 `Object.prototype.toString`의 동작 차이를 보여준다.
- `Array.prototype.toString`은 배열 요소를 쉼표로 연결한 문자열을 반환한다.
- `Object.prototype.toString`은 객체의 타입을 나타내는 문자열을 반환한다.
- 인스턴스의 `toString` 메서드를 재정의하면 프로토타입의 메서드 대신 실행된다.

### 예제 6-9
```javascript
Object.prototype.getEntries = function() {
	var res = [];
	for (var prop in this) {
		if (this.hasOwnProperty(prop)) {
			res.push([prop, this[prop]]);
		}
	}
	return res;
};

var data = [
	['object', { a: 1, b: 2, c: 3 }],
	['number', 345],
	['string', 'abc'],
	['boolean',false],
	['func', function() {}],
	['array',[1, 2, 3]],
];

data.forEach(function(datum) {
	console.log(datum[1].getEntries());
});
```
코드 동작 설명:
- `Object.prototype`에 `getEntries` 메서드를 추가하여 모든 객체에서 사용할 수 있게 한다.
- `getEntries`는 객체의 고유 프로퍼티를 `[key, value]` 형태의 배열로 반환한다.
- 객체와 배열, 문자열은 열거 가능한 고유 프로퍼티를 가지므로 결과를 반환한다.
- 숫자, 불린, 함수는 고유 프로퍼티가 없으므로 빈 배열을 반환한다.

### 예제 6-10
```javascript

```