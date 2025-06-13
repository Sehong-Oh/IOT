# 사물인터넷 과제 저장소
## 오세홍

## Chapter7
### 예제 7-1
```javascript
var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};
Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};
Rectangle.isRectangle = function(instance) {
	return (
		instance instanceof Rectangle && instance.width > 0 && instance.height > 0
	);
};

var rect1 = new Rectangle(3, 4);
console.log(rect1.getArea());
console.log(rect1.isRectangle(rect1));
console.log(Rectangle.isRectangle(rect1));
```
코드 동작 설명:
- `Rectangle` 생성자 함수에 `width`와 `height` 프로퍼티를 설정한다.
- 프로토타입에 `getArea` 메서드를 추가하여 면적을 계산한다.
- 생성자 함수에 정적 메서드 `isRectangle`을 추가한다.
- 인스턴스에서 정적 메서드를 호출하면 에러가 발생한다.
- 생성자 함수에서 정적 메서드를 호출해야 정상 동작한다.

### 예제 7-2
```javascript
var Grade = function() {
	var args = Array.prototype.slice.call(arguments);
	for (var i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	this.length = args.length;
};

Grade.prototype = [];
var g = new Grade(100, 80);
```
코드 동작 설명:
- `Grade` 생성자 함수는 배열과 유사한 객체를 생성한다.
- `Grade.prototype`을 빈 배열로 설정하여 배열 메서드를 상속받는다.
- 인스턴스 `g`는 배열의 모든 메서드를 사용할 수 있게 된다.

### 예제 7-3
```javascript
var Grade = function() {
	var args = Array.prototype.slice.call(arguments);
	for (var i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100, 80);

g.push(90);
console.log(g);
delete g.length;
g.push(70);
console.log(g);
```
코드 동작 설명:
- `g.push(90)`는 정상적으로 동작하여 인덱스 2에 90을 추가한다.
- `delete g.length`로 `length` 프로퍼티를 삭제한다.
- `g.push(70)` 실행 시 `length`가 없으므로 프로토타입의 `length`(0)를 참조한다.
- 결과적으로 인덱스 0에 70이 덮어씌워지고 `length`가 1이 된다.

### 예제 7-4
```javascript
var Grade = function() {
	var args = Array.prototype.slice.call(arguments);
	for (var i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	this.length = args.length;
};
Grade.prototype = ['a', 'b', 'c', 'd'];
var g = new Grade(100, 80);

g.push(90);
console.log(g);

delete g.length;
g.push(70);
console.log(g);
```
코드 동작 설명:
- 프로토타입을 길이가 4인 배열로 설정한다.
- `delete g.length` 후 `g.push(70)` 실행 시 프로토타입의 `length`(4)를 참조한다.
- 인덱스 4에 70이 추가되고 `length`가 5가 된다.
- 인덱스 3은 빈 상태로 남는다.

### 예제 7-5
```javascript
var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};
Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea());

var Square = function(width) {
	this.width = width;
};
Square.prototype.getArea = function() {
	return this.width * this.width;
};
var sq = new Square(5);
console.log(sq.getArea());
```
코드 동작 설명:
- `Rectangle`과 `Square`를 별도의 생성자 함수로 정의한다.
- 각각 독립적인 `getArea` 메서드를 가진다.
- 상속 관계가 없는 두 개의 독립적인 클래스 구조이다.

### 예제 7-6
```javascript
var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};
Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea()); // 12

var Square = function(width) {
	this.width = width;
	this.height = width;
};
Square.prototype.getArea = function() {
	return this.width * this.height;
};

var sq = new Square(5);
console.log(sq.getArea());
```
코드 동작 설명:
- `Square` 생성자에서 `width`와 `height`를 동일한 값으로 설정한다.
- `Square`의 `getArea` 메서드는 `Rectangle`과 동일한 로직을 사용한다.
- 코드 중복이 발생하지만 정사각형의 특성을 반영한 구현이다.

### 예제 7-7
```javascript
var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};
Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea());

var Square = function(width) {
	Rectangle.call(this, width, width);
};
Square.prototype = new Rectangle();

var sq = new Square(5);
console.log(sq.getArea());
```
코드 동작 설명:
- `Square` 생성자에서 `Rectangle.call(this, width, width)`로 부모 생성자를 호출한다.
- `Square.prototype = new Rectangle()`로 프로토타입 상속을 설정한다.
- `Square`는 `Rectangle`의 메서드와 프로퍼티를 상속받는다.
- 기본적인 프로토타입 상속 패턴을 보여준다.

### 예제 7-8
```javascript
var extendClass1 = function(SuperClass, SubClass, subMethods) {
	SubClass.prototype = new SuperClass();
	for (var prop in SubClass.prototype) {
		if (SubClass.prototype.hasOwnProperty(prop)) {
			delete SubClass.prototype[prop];
		}
	}
	if (subMethods) {
		for (var method in subMethods) {
			SubClass.prototype[method] = subMethods[method];
		}
	}
	Object.freeze(SubClass.prototype);
	return SubClass;
};

var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};

Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};

var Square = extendClass1(Rectangle, function(width) {
	Rectangle.call(this, width, width);
});

var sq = new Square(5);
console.log(sq.getArea());
```
코드 동작 설명:
- `extendClass1`은 클래스 상속을 위한 유틸리티 함수이다.
- 부모 클래스의 인스턴스를 프로토타입으로 설정한 후 불필요한 프로퍼티를 삭제한다.
- 추가 메서드가 있으면 프로토타입에 할당한다.
- `Object.freeze`로 프로토타입을 불변으로 만든다.

### 예제 7-9
```javascript
var extendClass2 = (function() {
	var Bridge = function() {};
	return function(SuperClass, SubClass, subMethods) {
		Bridge.prototype = SuperClass.prototype;
		SubClass.prototype = new Bridge();
		if (subMethods) {
			for (var method in subMethods) {
				SubClass.prototype[method] = subMethods[method];
			}
		}
		Object.freeze(SubClass.prototype);
		return SubClass;
	};
})();

var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};

Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};
 
var Square = extendClass2(Rectangle, function(width) {
	Rectangle.call(this, width, width);
});

var sq = new Square(5);
console.log(sq.getArea());
```
코드 동작 설명:
- `Bridge` 함수를 중간 다리로 사용하는 상속 패턴이다.
- `Bridge.prototype`을 부모 클래스의 프로토타입으로 설정한다.
- `new Bridge()`로 빈 객체를 생성하여 자식 클래스의 프로토타입으로 사용한다.
- 부모 생성자의 실행 없이 프로토타입 체인만 연결하는 효율적인 방법이다.

### 예제 7-10
```javascript
var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};

Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};

var Square = function(width) {
	Rectangle.call(this, width, width);
};

Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);

var sq = new Square(5);
console.log(sq.getArea());
```
코드 동작 설명:
- `Object.create(Rectangle.prototype)`를 사용한 가장 깔끔한 상속 방법이다.
- 부모 생성자를 실행하지 않고 프로토타입만 상속받는다.
- `Object.freeze`로 프로토타입을 보호한다.
- ES5에서 권장되는 프로토타입 상속 패턴이다.

### 예제 7-11
```javascript
var extendClass1 = function(SuperClass, SubClass, subMethods) {
	SubClass.prototype = new SuperClass();
	for (var prop in SubClass.prototype) {
		if (SubClass.prototype.hasOwnProperty(prop)) {
			delete SubClass.prototype[prop];
		}
	}
	SubClass.prototype.consturctor = SubClass;
	if (subMethods) {
		for (var method in subMethods) {
			SubClass.prototype[method] = subMethods[method];
		}
	}
	Object.freeze(SubClass.prototype);
	return SubClass;
};
```
코드 동작 설명:
- 7-8 예제에 `constructor` 프로퍼티 복원 기능을 추가했다.
- `SubClass.prototype.consturctor = SubClass`로 생성자 참조를 수정한다.
- `constructor` 프로퍼티가 올바른 생성자 함수를 가리키도록 보정한다.

### 예제 7-12
```javascript
var extendClass2 = (function() {
	var Bridge = function() {};
	return function(SuperClass, SubClass, subMethods) {
		Bridge.prototype = SuperClass.prototype;
		SubClass.prototype = new Bridge();
		SubClass.prototype.consturctor = SubClass;
		Bridge.prototype.constructor = SuperClass;
		if (subMethods) {
			for (var method in subMethods) {
				SubClass.prototype[method] = subMethods[method];
			}
		}
		Object.freeze(SubClass.prototype);
		return SubClass;
	};
})();
```
코드 동작 설명:
- 7-9 예제에 `constructor` 프로퍼티 복원 기능을 추가했다.
- `SubClass.prototype.consturctor = SubClass`로 자식 클래스의 생성자를 설정한다.
- `Bridge.prototype.constructor = SuperClass`로 부모 클래스의 생성자도 복원한다.


### 예제 7-13
```javascript
var extendClass3 = function(SuperClass, SubClass, subMethods) {
	SubClass.prototype = Object.create(SuperClass.prototype);
	SubClass.prototype.constructor = SubClass;
	if (subMethods) {
		for (var method in subMethods) {
			SubClass.prototype[method] = subMethods[method];
		}
	}
	Object.freeze(SubClass.prototype);
	return SubClass;
};
```
코드 동작 설명:
- `Object.create`를 사용한 가장 간단하고 명확한 상속 유틸리티이다.
- `constructor` 프로퍼티를 올바르게 설정한다.
- 추가 메서드가 있으면 프로토타입에 할당한다.
- 권장되는 상속 패턴이다.

### 예제 7-14
```javascript
var extendClass = function(SuperClass, SubClass, subMethods) {
	SubClass.prototype = Object.create(SuperClass.prototype);
	SubClass.prototype.constructor = SubClass;
	SubClass.prototype.super = function(propName) {
		var self = this;
		if (!propName)
			return function() {
				SuperClass.apply(self, arguments);
			};
		var prop = SuperClass.prototype[propName];
		if (typeof prop !== 'function') return prop;
		return function() {
			return prop.apply(self, arguments);
		};
	}; 
    
	if (subMethods) {
		for (var method in subMethods) {
			SubClass.prototype[method] = subMethods[method];
		}
	}
	Object.freeze(SubClass.prototype);
	return SubClass;
};

var Rectangle = function(width, height) {
	this.width = width;
	this.height = height;
};
Rectangle.prototype.getArea = function() {
	return this.width * this.height;
};

var Square = extendClass(
	Rectangle,
	function(width) {
		this.super()(width, width);
	},
	{
		getArea: function() {
			console.log('size is :', this.super('getArea')());
		},
	}
);

var sq = new Square(10);
sq.getArea();
console.log(sq.super('getArea')());
```
코드 동작 설명:
- `super` 메서드를 추가하여 부모 클래스의 생성자와 메서드에 접근할 수 있게 한다.
- `this.super()`는 부모 생성자를 호출하는 함수를 반환한다.
- `this.super('methodName')`은 부모 클래스의 특정 메서드를 호출하는 함수를 반환한다.
- ES6의 `super` 키워드와 유사한 기능을 ES5에서 구현한 것이다.

### 예제 7-15
```javascript
var ES5 = function(name) {
	this.name = name;
};
ES5.staticMethod = function() {
	return this.name + ' staticMethod';
};
ES5.prototype.method = function() {
	return this.name + ' method';
};
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod());
console.log(es5Instance.method());

var ES6 = class {
	constructor(name) {
		this.name = name;
	}
	static staticMethod() {
		return this.name + ' staticMethod';
	}
	method() {
		return this.name + ' method';
	}
};

var es6Instance = new ES6('es6');
console.log(ES6.staticMethod());
console.log(es6Instance.method());
```
코드 동작 설명:
- ES5 생성자 함수 패턴과 ES6 클래스 문법을 비교한다.
- ES5에서는 정적 메서드를 생성자 함수의 프로퍼티로 추가한다.
- ES6에서는 `static` 키워드로 정적 메서드를 정의한다.
- 두 방식 모두 동일한 결과를 생성하지만 ES6가 더 직관적이다.

### 예제 7-16
```javascript
var Rectangle = class {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	getArea() {
		return this.width * this.height;
	}
};

var Square = class extends Rectangle {
	constructor(width) {
		super(width, width);
	}
	getArea() {
		console.log('size is :', super.getArea());
	}
};
```
코드 동작 설명:
- ES6 클래스 상속 문법을 사용한다.
- `extends` 키워드로 상속을 정의한다.
- `super()`로 부모 생성자를 호출한다.
- `super.methodName()`으로 부모 클래스의 메서드를 호출한다.
- ES5의 복잡한 프로토타입 상속을 간단하고 직관적으로 대체한다.