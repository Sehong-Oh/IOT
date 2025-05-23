# 사물인터넷 과제 저장소
## 오세홍

## Chapter5
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
// 클로저의 메모리관리 예시 들
// (1) return에 의한 클로저의 메모리 해제
var outer = (function() {
	var a = 1;
	var inner = function() {
		return ++a;
	};
	return inner;
})();

console.log(outer());
console.log(outer());
outer = null;                       // outer 식별자의 inner 함수 참조를 끊음


// (2) setInterval에 의한 클로저의 메모리 해제
(function() {
	var a = 0;
	var intervalId = null;
	var inner = function() {
		if (++a >= 10) {
			clearInterval(intervalId);
			inner = null;               // inner 식별자의 함수 참조를 끊음
		}
		console.log(a);
	};
	intervalId = setInterval(inner, 1000);
})();

// (3) eventListener에 의한 클로저의 메모리 해제
(function() {
	var count = 0;
	var button = document.createElement('button');
	button.innerText = 'click';

	var clickHandler = function() {
		console.log(++count, 'times clicked');
		if (count >= 10) {
			button.removeEventListener('click', clickHandler);
			clickHandler = null;        // clickHandler 식별자의 함수참조를 끊음
		}
	};
	button.addEventListener('click', clickHandler);
	document.body.appendChild(button);
})();
```
코드 동작 설명:
- (1) return에 의한 클로저의 메모리 해제
  - 즉시 실행 함수로 `inner` 함수를 생성하여 `outer`에 할당한다.
  - `outer()`를 두 번 호출하여 각각 2, 3을 출력한다.
  - `outer = null`로 설정하여 `inner` 함수에 대한 참조를 제거한다.
  - 이로써 `inner` 함수는 더 이상 접근할 수 없게 되고, 가비지 컬렉션의 대상이 된다.

- (2) setInterval에 의한 클로저의 메모리 해제
  - `inner` 함수는 `a`가 10 이상이 되면 타이머를 중지하고 자신에 대한 참조를 제거한다.
  - `inner = null`을 통해 함수 참조를 명시적으로 끊음으로써 메모리 누수를 방지한다.

- (3) eventListener에 의한 클로저의 메모리 해제
  - 클릭 핸들러는 클릭 횟수가 10회 이상이 되면 이벤트 리스너를 제거하고 자신에 대한 참조를 끊는다.
  - `removeEventListener`와 `clickHandler = null`을 통해 핸들러 함수의 참조를 제거한다.

이 예제들은 클로저 사용 시 메모리 관리의 중요성과 참조를 명시적으로 제거하는 방법을 보여준다.

### 예제 5-6
```javascript
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');     // (공통 코드)

fruits.forEach(function(fruit) {            // (A)
	var $li = document.createElement('li');
	$li.innerText = fruit;
	$li.addEventListener('click', function() {  // (B)
		alert('your choice is ' + fruit);
	});
	$ul.appendChild($li);
});
document.body.appendChild($ul);
```
코드 동작 설명:
- 과일 이름이 담긴 배열 `fruits`과 `<ul>` 요소를 생성한다.
- `forEach` 메서드로 각 과일에 대해 `<li>` 요소를 생성하고 과일 이름을 텍스트로 설정한다.
- 각 `<li>` 요소에 클릭 이벤트 리스너를 추가한다. 이 리스너는 클로저를 형성하여 해당 반복에서의 `fruit` 값을 기억한다.
- 사용자가 특정 `<li>`를 클릭하면 해당 과일 이름이 알림으로 표시된다.
- 이 패턴은 반복문 내에서 이벤트 핸들러를 등록할 때 각 핸들러가 올바른 데이터에 접근할 수 있게 한다.
- 클로저가 없다면 모든 핸들러가 마지막 반복의 `fruit` 값만 참조하게 될 것이다.

### 예제 5-7
```javascript
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function(fruit) {
	alert('your choice is ' + fruit);
};

fruits.forEach(function(fruit) {
	var $li = document.createElement('li');
	$li.innerText = fruit;
	$li.addEventListener('click', alertFruit);
	$ul.appendChild($li);
});

document.body.appendChild($ul);
alertFruit(fruits[1]);
```
코드 동작 설명:
- 과일 이름이 담긴 배열 `fruits`과 `<ul>` 요소를 생성한다.
- 공통 함수 `alertFruit`를 정의하여 과일 이름을 알림으로 표시한다.
- `forEach` 메서드로 각 과일에 대해 `<li>` 요소를 생성하고 과일 이름을 텍스트로 설정한다.
- 각 `<li>` 요소에 클릭 이벤트 리스너로 `alertFruit` 함수를 추가한다.
- 마지막으로 `alertFruit(fruits[1])`을 직접 호출하여 "banana"를 알림으로 표시한다.

- 문제점: 이벤트 리스너로 등록된 `alertFruit` 함수는 클릭 이벤트 발생 시 이벤트 객체만 전달받기 때문에 
  어떤 과일이 선택되었는지 알 수 없다. 따라서 클릭 시 "your choice is undefined"가 표시된다.

이 예제는 이벤트 리스너에 공통 함수를 사용할 때 발생할 수 있는 문제점을 보여준다.

### 예제 5-8
```javascript
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruit = function(fruit) {
	alert('your choice is ' + fruit);
};
fruits.forEach(function(fruit) {
	var $li = document.createElement('li');
	$li.innerText = fruit;
	$li.addEventListener('click', alertFruit.bind(null, fruit));
	$ul.appendChild($li);
});

document.body.appendChild($ul);
```
코드 동작 설명:
- 예제 5-7의 문제를 해결하기 위해 `bind` 메서드를 활용한다.
- `bind` 메서드는 함수의 `this`와 첫 번째 이후 인자들을 부분적으로 적용한 새 함수를 반환한다.
- 각 `<li>` 요소에 이벤트 리스너로 `alertFruit.bind(null, fruit)`를 등록한다.
  - 첫 번째 인자 `null`은 `this`에 바인딩할 값으로, 여기서는 중요하지 않다.
  - 두 번째 인자 `fruit`는 `alertFruit` 함수의 첫 번째 매개변수로 미리 바인딩된다.
- 클릭 이벤트 발생 시, 바인딩된 `fruit` 값이 `alertFruit` 함수에 전달되어 올바르게 동작한다.

이 방식의 장점은 하나의 함수로 여러 요소의 이벤트를 처리하면서도 각 요소에 맞는 데이터를 전달할 수 있다는 것이다.

### 예제 5-9
```javascript
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

var alertFruitBuilder = function(fruit) {
	return function() {
		alert('your choice is ' + fruit);
	};
};

fruits.forEach(function(fruit) {
	var $li = document.createElement('li');
	$li.innerText = fruit;
	$li.addEventListener('click', alertFruitBuilder(fruit));
	$ul.appendChild($li);
});

document.body.appendChild($ul);
```
코드 동작 설명:
- 예제 5-7의 문제를 해결하는 또 다른 방법으로 클로저를 활용한다.
- `alertFruitBuilder` 함수는 과일 이름을 인자로 받아 새로운 함수를 반환한다.
- 반환된 함수는 클로저를 통해 인자로 받은 과일 이름을 기억하고 알림으로 표시한다.
- 각 `<li>` 요소에 이벤트 리스너로 `alertFruitBuilder(fruit)`를 호출한 결과인 함수를 등록한다.
- 클릭 이벤트 발생 시, 각 요소에 등록된 함수는 자신이 생성될 때 전달받은 과일 이름을 알림으로 표시한다.

이 방식은 `bind` 메서드를 사용하는 예제 5-8과 유사한 결과를 가져오지만, 
함수를 새로 생성하는 방식으로 더 유연하게 데이터를 캡슐화할 수 있다.

### 예제 5-10
```javascript
var car = {
	fuel: Math.ceil(Math.random() *10+10), 
	power: Math.ceil(Math.random() *3+2), 
	moved: 0, 
	run: function() {
		var km = Math.ceil(Math.random() *6);
		var wasteFuel = km / this.power;
		if (this.fuel < wasteFuel) {
			console.log('이동불가');
			return;
		}
		this.fuel -= wasteFuel;
		this.moved += km;
		console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
	},
};
```
코드 동작 설명:
- 자동차 객체 `car`를 정의하며 연료량, 연비, 이동거리 등의 속성과 `run` 메서드를 가진다.
- `run` 메서드는 무작위로 생성된 거리만큼 자동차를 이동시키고, 연료 소모와 이동거리 증가를 처리한다.
- 연료가 부족하면 "이동불가" 메시지를 출력하고 함수를 종료한다.
- 이동 가능한 경우 연료를 소모하고 이동거리를 증가시킨 후 결과를 출력한다.

문제점: 이 객체는 모든 속성이 외부에서 직접 접근 가능하다. 
예를 들어 `car.fuel = 1000;`과 같이 속성을 임의로 변경할 수 있어 객체의 무결성을 해칠 수 있다.

### 예제 5-11
```javascript
var createCar = function() {
	var fuel = Math.ceil(Math.random() * 10 + 10);      // 연료
	var power = Math.ceil(Math.random() * 3 + 2);       // 연비
	var moved = 0;                                      // 총 이동거리
	return {
		get moved() {
			return moved;
		},
		run: function() {
			var km = Math.ceil(Math.random() * 6);
			var wasteFuel = km / power;
			if (fuel < wasteFuel) {
				console.log('이동불가');
				return;
			}
			fuel -= wasteFuel;
			moved += km;
			console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
		}
	};
};

var car = createCar();
```
코드 동작 설명:
- `createCar` 함수는 자동차 객체를 생성하여 반환한다.
- 함수 내부에서 `fuel`, `power`, `moved` 변수를 선언하여 외부에서 직접 접근할 수 없게 한다.
- 반환되는 객체는 `moved` 속성에 대한 getter와 `run` 메서드만 포함한다.
- `moved` getter는 내부 변수 `moved`의 값을 반환한다.
- `run` 메서드는 내부 변수 `fuel`, `power`, `moved`에 접근하여 자동차의 이동을 처리한다.

이 구현의 장점:
- 내부 변수들(fuel, power)에 직접 접근할 수 없어 객체의 무결성이 보장된다.
- 클로저를 통해 객체의 메서드가 내부 변수에 접근할 수 있으므로 캡슐화와 정보 은닉을 구현할 수 있다.
- `moved` 속성은 getter만 제공하여 읽기만 가능하고 외부에서 수정할 수 없다.


### 예제 5-12
```javascript
var createCar = function() {
	var fuel = Math.ceil(Math.random() * 10 + 10);      // 연료
	var power = Math.ceil(Math.random() * 3 + 2);       // 연비
	var moved = 0;                                      // 총 이동거리

	var publicMembers = {
		get moved() {
			return moved;
		},
		run: function() {
			var km = Math.ceil(Math.random() * 6);
			var wasteFuel = km / power;
			if (fuel < wasteFuel) {
				console.log('이동불가');
				return;
			}
			fuel -= wasteFuel;
			moved += km;
			console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
		}
	};

	Object.freeze(publicMembers);
	return publicMembers;
};
```
코드 동작 설명:
- 예제 5-11을 확장하여 반환되는 객체에 `Object.freeze`를 적용한다.
- `createCar` 함수는 자동차 객체를 생성하는 것은 이전과 동일하다.
- 반환하기 전에 `publicMembers` 객체에 `Object.freeze`를 적용한다.
- 이로써 반환된 객체의 프로퍼티를 추가, 삭제, 수정할 수 없게 된다.

이 구현의 장점:
- 내부 변수들은 클로저를 통해 보호되어 직접 접근할 수 없다.
- `Object.freeze`를 통해 반환된 객체의 구조도 변경할 수 없다.
- 완전한 캡슐화와 불변성을 제공하여 객체의 무결성을 강화한다.

`Object.freeze`는 객체를 동결하여 프로퍼티 추가/삭제/수정을 방지하는 ES5 메서드이다.

### 예제 5-13
```javascript
var add = function() {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
};

var addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));        //55
```
코드 동작 설명:
- `add` 함수는 가변 인자를 받아 모든 인자의 합을 반환한다.
- `addPartial`은 `add.bind(null, 1, 2, 3, 4, 5)`로 정의된다.
  - `bind` 메서드의 첫 번째 인자 `null`은 `this` 바인딩을 위한 것으로, 여기서는 중요하지 않다.
  - 나머지 인자 `1, 2, 3, 4, 5`는 `add` 함수의 첫 다섯 개 인자로 미리 바인딩된다.
- `addPartial(6, 7, 8, 9, 10)`을 호출하면, 실제로는 `add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)`이 호출된다.
- 결과적으로 모든 인자의 합인 55가 출력된다.


### 예제 5-14
```javascript
var partial = function() {
	var originalPartialArgs = arguments;
	var func = originalPartialArgs[0];
	if (typeof func !== 'function') {
		throw new Error('첫 번째 인자가 함수가 아닙니다.');
	}
	return function() {
		var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
		var restArgs = Array.prototype.slice.call(arguments);
		return func.apply(this, partialArgs.concat(restArgs));
	};
};

var add = function() {
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
};

var addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10)); 

var dog = {
	name: '강아지',
	greet: partial(function(prefix, suffix) {
		return prefix + this.name + suffix;
	}, '왈왈, ')
};
dog.greet('입니다!');
// 왈왈, 강아지입니다.
```
코드 동작 설명:
- `partial` 함수는 함수와 인자들을 받아 부분 적용된 새 함수를 반환한다.
- 첫 번째 인자가 함수가 아니면 에러를 발생시킨다.
- 반환되는 함수는 클로저를 통해 원본 함수와 부분 적용된 인자들에 접근한다.
- 호출 시 전달된 나머지 인자들과 부분 적용된 인자들을 연결하여 원본 함수를 호출한다.
- `apply` 메서드를 사용하여 `this` 컨텍스트를 유지한다.

두 가지 예제로 활용:
1. `add` 함수에 1부터 5까지의 숫자를 부분 적용하여 `addPartial` 함수를 생성한다.
   - `addPartial(6, 7, 8, 9, 10)`을 호출하면 모든 인자의 합인 55가 반환된다.

2. 객체 메서드에서의 활용:
   - `dog` 객체의 `greet` 메서드는 `partial`을 사용하여 접두사를 미리 설정한다.
   - `dog.greet('입니다!')`를 호출하면 "왈왈, 강아지입니다!"가 반환된다.
   - 이 때 `this`가 올바르게 `dog` 객체를 가리키는 것이 중요하다.

### 예제 5-15
```javascript
Object.defineProperty(window, '_', {
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false,
});

var partial2 = function() {
     var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
    	throw new Error('첫 번째 인자가 함수가 아닙니다.');
    }
    return function() {
    	var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    	var restArgs = Array.prototype.slice.call(arguments);
    	for (var i = 0; i < partialArgs.length; i++) {
    		if (partialArgs[i] === _) {
    			partialArgs[i] = restArgs.shift();
    		}
    	}
    	return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
    	result += arguments[i];
    }
    return result;
};

var addPartial = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10)); 

var dog = {
    name: '강아지',
    greet: partial2(function(prefix, suffix) {
    	return prefix + this.name + suffix;
    }, '왈왈, '),
};

dog.greet('배고파요!');
```
코드 동작 설명:
- `Object.defineProperty`를 사용하여 전역 객체에 `_` 상수를 정의한다.
  - `value`: '_'의 값은 'EMPTY_SPACE' 문자열로 설정한다.
  - `writable: false`: 값을 변경할 수 없게 한다.
  - `configurable: false`: 속성을 삭제하거나 다시 정의할 수 없게 한다.
  - `enumerable: false`: 열거할 수 없게 하여 for...in 루프에서 나타나지 않게 한다.
- `partial2` 함수는 `partial`을 확장하여 플레이스홀더(`_`)를 지원한다.
- 반환되는 함수는 호출 시 전달된 인자들을 플레이스홀더 위치에 순서대로 채운다.
- `restArgs.shift()`를 사용하여 전달된 인자를 순서대로 플레이스홀더에 할당한다.
- 플레이스홀더를 모두 채운 후 남은 인자들은 기존처럼 뒤에 연결된다.

### 예제 5-16
```javascript
var debounce = function(eventName, func, wait) {
	var timeoutId = null;
	return function(event) {
		var self = this;
		console.log(eventName, 'event 발생');
		clearTimeout(timeoutId);
		timeoutId = setTimeout(func.bind(self, event), wait);
	};
};

var moveHandler = function(e) {
	console.log('move event 처리');
};

var wheelHandler = function(e) {
	console.log('wheel event 처리');
};

document.body.addEventListener('mousemove', debounce('move', moveHandler, 500));
document.body.addEventListener(
	'mousewheel',
	debounce('wheel', wheelHandler, 700)
);
```
- `mousemove` 이벤트에 500ms 디바운스를 적용한다.
- `mousewheel` 이벤트에 700ms 디바운스를 적용한다.

이 기법은 스크롤, 리사이즈, 검색 입력 등 빈번하게 발생하는 이벤트의 성능을 최적화하는 데 사용된다.

### 예제 5-17
```javascript
var curry3 = function(func) {
	return function(a) {
		return function(b) {
			return func(a, b);
		};
	};
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(8));
console.log(getMaxWith10(25));

var getMinWith10 = curry3(Math.min)(10);
console.log(getMinWith10(8));
console.log(getMinWith10(25));
```
활용 예제:
1. `Math.max` 함수를 커링하여 `getMaxWith10` 함수를 생성한다.
   - `getMaxWith10(8)`은 `Math.max(10, 8)`과 같으므로 10을 반환한다.
   - `getMaxWith10(25)`는 `Math.max(10, 25)`와 같으므로 25를 반환한다.
2. `Math.min` 함수를 커링하여 `getMinWith10` 함수를 생성한다.
   - `getMinWith10(8)`은 `Math.min(10, 8)`과 같으므로 8을 반환한다.
   - `getMinWith10(25)`는 `Math.min(10, 25)`와 같으므로 10을 반환한다.

커링은 함수의 재사용성을 높이고 부분 적용된 함수를 쉽게 만들 수 있게 해준다.

### 예제 5-18
```javascript
var curry5 = function(func) {
	return function(a) {
		return function(b) {
			return function(c) {
				return function(d) {
					return function(e) {
						return func(a, b, c, d, e);
					};
				};
			};
		};
	};
};

var getMax = curry5(Math.max);
console.log(getMax(1)(2)(3)(4)(5));
```
코드 동작 설명:
- `curry5` 함수는 5개의 인자를 받는 함수를 커링된 형태로 변환한다.
- 중첩된 함수를 통해 각각의 인자를 하나씩 받아서 최종적으로 원본 함수를 호출한다.