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
Array.prototype.map = function(callback, thisArg) {
   var mappedArr = [];
   for (var i = 0; i < this.length; i++) {
       var mappedValue = callback.call(thisArg || window, this[i], i, this);
       mappedArr[i] = mappedValue;
   }
   return mappedArr;
};
```
코드 동작 설명:
- Array 객체의 prototype에 map 메서드를 직접 구현한다.
- 함수는 콜백 함수와 선택적 `this` 컨텍스트를 매개변수로 받는다.
- 빈 결과 배열 `mappedArr`을 생성하고, 원본 배열의 각 요소를 순회한다.
- 각 요소에 대해 `callback.call()`을 사용해 콜백 함수를 호출하고, 그 결과를 새 배열의 같은 위치에 저장한다.
- 콜백 함수는 (현재값, 인덱스, 원본배열) 세 가지 인자를 받는다.
- 모든 요소 처리 후 새 배열을 반환한다.
- 이 구현은 JavaScript 내장 map 메서드의 기본 동작을 재현한다.

### 예제 4-6
```javascript
setTimeout(function () {console.log(this);}, 300);

[1,2,3,4,5].forEach(function (x) {
    console.log(this);
});

document.body.innerHTML += '<button id = "a"> 클릭 </button>';
document.body.querySelector('#a')
    .addEventListener('click', function (e){
        console.log(this, e);
    }
);
```
코드 동작 설명:
- 첫 번째 코드는 `setTimeout` 함수에서 콜백 함수 내부의 `this`를 출력한다.
  - 일반 함수로서 호출되었으므로 `this`는 전역 객체(Window)를 가리킨다.
- 두 번째 코드는 배열의 `forEach` 메서드에서 콜백 함수 내부의 `this`를 출력한다.
  - 역시 일반 함수로서 호출되어 `this`는 전역 객체를 가리킨다.
- 세 번째 코드는 이벤트 리스너에서 콜백 함수 내부의 `this`를 출력한다.
  - 이벤트 리스너에서는 `this`가 이벤트가 발생한 요소(버튼)를 가리킨다.
- 이 예제는 함수 호출 방식에 따라 `this`가 어떻게 달라지는지 보여준다.


### 예제 4-7
```javascript
var obj = {
  vals : [1, 2, 3],
  logValues : function(v, i) {
    console.log(this, v, i);
  },
};
obj.logValues(1, 2); 
[4, 5, 6].forEach(obj.logValues);
```
코드 동작 설명:
- `obj` 객체는 배열 `vals`와 메서드 `logValues`를 가지고 있다.
- 첫 번째 호출 `obj.logValues(1, 2)`는 메서드로서 직접 호출되어 `this`가 `obj` 객체를 가리킨다.
- 두 번째 호출에서는 `obj.logValues`를 `forEach`의 콜백 함수로 전달한다.
  - 이때 함수는 메서드가 아닌 일반 함수로서 호출되어 `this`는 전역 객체(Window)를 가리킨다.
- 이 예제는 같은 함수도 호출 방식에 따라 `this`가 달라질 수 있음을 보여준다.


### 예제 4-8
```javascript
var obj = {
    name: 'obj1',
    func: function() {
        var self = this;
        return function() {
            console.log(self.name);
        };
    }
};

var callback = obj.func();
setTimeout(callback, 1000);
```
코드 동작 설명:
- `obj1` 객체는 `name` 속성과 `func` 메서드를 가지고 있다.
- `func` 메서드 내부에서 `this`를 `self` 변수에 저장한 후, 내부 함수를 반환한다.
- 내부 함수는 클로저를 통해 `self`(원래 `obj1`을 가리키는 `this`)에 접근할 수 있다.
- `callback`으로 할당된 내부 함수는 비동기적으로 실행되어도 `obj1.name`을 올바르게 출력한다.
- 이 패턴은 `this`가 달라지는 문제를 우회하기 위해 클로저를 활용하는 전통적인 방법이다.

### 예제 4-9
```javascript
var obj1 = {
    name: 'obj1',
    func: function() {
        console.log(obj1.name);
    },
};

setTimeout(obj1.func, 1000);
```
코드 동작 설명:
- `obj1` 객체는 `name` 속성과 `func` 메서드를 가지고 있다.
- `func` 메서드 내부에서 `this` 대신 직접 `obj1`을 참조한다.
- 이렇게 하면 메서드가 어떻게 호출되든 항상 `obj1.name`을 출력한다.
- 이 방법은 간단하지만 참조하는 객체가 변경되면 코드를 수정해야 하는 단점이 있다.

### 예제 4-10
```javascript
var obj1 = {
  name: 'obj1',
  func: function() {
    console.log(obj1.name);
  },
};
var obj2 = {
  name: 'obj2',
  func: obj1.func,
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);

var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);
```
코드 동작 설명:
- 예제 4-9의 확장으로, 객체를 직접 참조할 때 발생할 수 있는 문제를 보여준다.
- `obj2`는 `obj1`의 `func` 메서드를 참조하지만, 함수 내부에서는 여전히 `obj1.name`을 참조한다.
- `callback2`는 `obj2.func()`를 호출한 결과인데, 이때 함수 내부에서 `obj1.name`을 출력한다.
- `callback3`는 `obj1.func`를 `obj3` 컨텍스트로 호출하지만, 함수 내부에서 여전히 `obj1.name`을 참조한다.
- 이 예제는 `this` 대신 객체를 직접 참조하면 유연성이 떨어지는 문제를 보여준다.

### 예제 4-11
```javascript
var obj1 = {
    name: 'obj1',
    func: function() {
        console.log(this.name);
    },
};
setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = { name: 'obj2' };
setTimeout(obj1.func.bind(obj2), 1500);
```
코드 동작 설명:
- `obj1` 객체는 `name` 속성과 `func` 메서드를 가지고 있다.
- `func` 메서드 내부에서 `this.name`을 출력하여 동적으로 컨텍스트를 참조한다.
- 첫 번째 `setTimeout`에서 `obj1.func`에 `bind(obj1)`을 사용하여 `this`를 `obj1`로 고정한다.
- 두 번째 `setTimeout`에서 `obj1.func`에 `bind(obj2)`를 사용하여 `this`를 `obj2`로 고정한다.
- 이 방법으로 함수가 어떻게 호출되든 원하는 컨텍스트를 `this`로 사용할 수 있다.
- `bind`는 ES5에서 도입된 메서드로, 함수의 `this`를 영구적으로 바인딩하는 새 함수를 반환한다.

### 예제 4-12
```javascript
setTimeout(
  function(name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      function(name) {
        coffeeList += ', ' + name;
        console.log(coffeeList);

        setTimeout(
          function(name) {
            coffeeList += ', ' + name;
            console.log(coffeeList);

            setTimeout(
              function(name) {
                coffeeList += ', ' + name;
                console.log(coffeeList);
              },
              500,
              '카페라떼'
            );
          },
          500,
          '카페모카'
        );
      },
      500,
      '아메리카노'
    );
  },
  500,
  '에스프레소'
);
```
코드 동작 설명:
- 이 코드는 중첩된 `setTimeout` 호출로 구성되어 비동기 작업을 순차적으로 처리한다.
- 첫 번째 `setTimeout`은 0.5초 후 "에스프레소"를 `coffeeList`에 저장하고 출력한다.
- 이후 내부 `setTimeout`들이 각각 0.5초 간격으로 "아메리카노", "카페모카", "카페라떼"를 누적하여 추가한다.
- 각 단계에서 현재까지의 `coffeeList`를 출력한다.
- 이러한 깊게 중첩된 콜백 구조는 가독성과 유지보수성이 떨어져 "콜백 지옥"이라 불린다.
- 최종 출력은 다음과 같이 0.5초 간격으로 나타난다:
  - "에스프레소"
  - "에스프레소, 아메리카노"
  - "에스프레소, 아메리카노, 카페모카"
  - "에스프레소, 아메리카노, 카페모카, 카페라떼" 

### 예제 4-13
```javascript
var coffeeList = '';

var addEspresso = function(name) {
    offeeList = name;
    console.log(coffeeList);
    setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function(name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);
    setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function(name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);
    setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function(name) {
    coffeeList += ', ' + name;
    console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');
```
코드 동작 설명:
- 예제 4-12의 콜백 지옥을 개선하기 위해 각 단계를 기명 함수로 분리했다.
- 전역 변수 `coffeeList`에 커피 이름을 누적한다.
- 각 함수(`addEspresso`, `addAmericano`, `addMocha`, `addLatte`)는 특정 커피를 추가하고 다음 함수를 호출한다.
- 첫 `setTimeout`은 0.5초 후 `addEspresso`를 호출하여 프로세스를 시작한다.
- 각 함수는 현재 `coffeeList`를 출력하고 0.5초 후 다음 함수를 호출한다.
- 기명 함수를 사용하면 중첩된 익명 함수보다 코드가 더 읽기 쉽고 관리하기 쉽다.
- 최종 출력은 예제 4-12와 동일하게 0.5초 간격으로 나타난다.

### 예제 4-14
```javascript
new Promise(function(resolve) {
  setTimeout(function() {
    var name = '에스프레소';
    console.log(name);
    resolve(name);
  }, 500);
}).then(function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var name = prevName + ', 아메리카노';
        console.log(name);
        resolve(name);
      }, 500);
    });
  }).then(function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var name = prevName + ', 카페모카';
        console.log(name);
        resolve(name);
      }, 500);
    });
  }).then(function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var name = prevName + ', 카페라떼';
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
```
- 예제 4-12, 4-13의 콜백 구조를 Promise 체인으로 개선했다.
- 각 단계는 새로운 Promise 객체를 생성하여 비동기 작업을 처리한다.
- 첫 번째 Promise는 0.5초 후 "에스프레소"를 출력하고 이 값을 `resolve`한다.
- 이후 `.then()` 메서드를 통해 이전 Promise의 결과(`prevName`)를 받아 다음 작업을 수행한다.
- 각 `.then()`은 새 Promise를 반환하며, 이전 값에 새 커피 이름을 추가하고 출력한 후 `resolve`한다.
- Promise 체인을 사용하면 중첩 없이 비동기 작업의 순서를 명확하게 표현할 수 있다.
- Promise는 ES6에서 도입된 비동기 처리를 위한 표준 객체로, 콜백 지옥 문제를 효과적으로 해결한다.

### 예제 4-15
```javascript
var addCoffee = function(name) {
  return function(prevName) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        var newName = prevName ? prevName + ', ' + name : name;
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};

addCoffee('에스프레소')()
  .then(addCoffee('아메리카노'))
  .then(addCoffee('카페모카'))
  .then(addCoffee('카페라떼'));
```
코드 동작 설명:
- 예제 4-14를 더 개선하여 반복되는 코드를 함수로 추상화했다.
- `addCoffee` 함수는 커피 이름을 받아 클로저를 반환한다.
- 반환된 클로저는 이전 값(`prevName`)을 인자로 받아 새 Promise를 생성한다.
- Promise 내부에서는 0.5초 후 이전 값에 새 커피 이름을 추가하고 출력한 후 `resolve`한다.
- 첫 호출 `addCoffee('에스프레소')()`는 초기값 없이 "에스프레소"만 설정한다.
- 이후 `.then()`을 통해 각 커피를 순차적으로 추가한다.
- 이 패턴은 코드 중복을 줄이고 가독성을 높이며, 유사한 비동기 작업을 더 쉽게
추가하거나 수정할 수 있게 한다.

### 예제 4-16
```javascript
var addCoffee = function(prevName, name) {
  setTimeout(function() {
    coffeeMaker.next(prevName ? prevName + ', ' + name : name);
  }, 500);
};

var coffeeGenerator = function*() {
  var espresso = yield addCoffee('', '에스프레소');
  console.log(espresso);
  var americano = yield addCoffee(espresso,'아메리카노');
  console.log(americano);
  var mocha = yield addCoffee(americano, '카페모카');
  console.log(mocha);
  var latte = yield addCoffee(mocha, '카페라떼');
  console.log(latte);
};

var coffeeMaker = coffeeGenerator();

coffeeMaker.next();
```
코드 동작 설명:
- ES6의 Generator 함수를 사용하여 비동기 작업의 흐름을 제어한다.
- `addCoffee` 함수는 이전 이름과 새 커피 이름을 받아 0.5초 후 Generator의 `next` 메서드를 호출한다.
- `coffeeGenerator` 함수는 Generator 함수로, `yield` 키워드를 사용해 실행을 일시 중단하고 외부 값을 기다린다.
- 각 `yield` 표현식은 `addCoffee` 함수를 호출하고, 그 결과를 변수에 할당한 후 출력한다.
- `coffeeMaker`는 Generator 객체로, `next()` 메서드 호출로 실행을 시작한다.
- Generator를 사용하면 비동기 코드를 동기 코드처럼 작성할 수 있어 가독성이 향상된다.
- 이 방식은 Promise와 달리 실행 흐름을 더 세밀하게 제어할 수 있다는 장점이 있다.

### 예제 4-17
```javascript
var addCoffee = function(name) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(name);
    }, 500);
  });
};

var coffeeMaker = async function() {
  var coffeeList = '';
  var _addCoffee = async function(name) {
    coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name));
  };
  await _addCoffee('에스프레소');
  console.log(coffeeList);
  await _addCoffee('아메리카노');
  console.log(coffeeList);
  await _addCoffee('카페모카');
  console.log(coffeeList);
  await _addCoffee('카페라떼');
  console.log(coffeeList);
};

coffeeMaker();
```
코드 동작 설명:
- ES2017에서 도입된 async/await 문법을 사용하여 비동기 작업을 동기 코드처럼 작성한다.
- `addCoffee` 함수는 커피 이름을 받아 Promise를 반환한다.
- `coffeeMaker` 함수는 async 함수로, 내부에서 await 키워드를 사용하여 Promise 결과를 기다린다.
- 내부 `_addCoffee` 함수는 async 함수로, await를 사용하여 `addCoffee` 호출 결과를 기다린 후 `coffeeList`에 추가한다.
- 각 `await _addCoffee` 호출 후에는 현재 `coffeeList`를 출력한다.
- async/await 문법은 Promise 기반이지만 코드를 더 동기적으로 작성할 수 있게 해준다.
- 이 방식은 가장 최신의 비동기 처리 패턴으로, 가독성이 높고 에러 처리도 try/catch로 간단하게 할 수 있다.
