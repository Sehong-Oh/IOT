# 사물인터넷 과제 저장소
## 오세홍

## Chapter1
### 예제 1-1
```
var a;
```
- 변경가능한 데이터가 담길 수 있는 공간을 생성 (a : 식별자)

### 예제 1-2
```javascript
// 예제 1-2
a = 'abc';
var a = 'abc';
```

- a = 'abc'; 선언 없이 변수에 직접 값을 할당하는 방식이다. 이 경우, 변수 a는 글로벌 스코프에 암묵적으로 생성된다.  
이것은 '암시적 전역 변수'라고도 불리며, 원래 의도와 다르게 작동할 수 있어 좋은 관행이 아니다.
- var a = 'abc'; - var 키워드를 사용하여 변수를 명시적으로 선언하고 값을 할당하는 방식이다.  
이 방식이 더 명확하고 안전하다.

### 예제 1-3

```javascript
var a = 'abc';
a = a + 'def';

var b = 5;
var c = 5;
b = 7;
```

- 문자열 연산: a = a + 'def'; 구문에서, 원래 문자열 'abc'는 변경되지 않는다.  
대신 'abc'와 'def'를 연결한 새로운 문자열 'abcdef'가 생성되어 변수 a에 재할당된다.  
문자열은 불변(immutable) 데이터 타입이다.


- 숫자 변수 할당: var b = 5;와 var c = 5;에서 두 변수는 동일한 값을 가진다.  
그러나 b = 7;로 b의 값을 변경해도 c의 값은 여전히 5로 유지된다.  
이는 b와 c가 같은 메모리 위치를 참조하지 않고, 각각 독립적인 값을 가지고 있기 때문이다.

### 예제 1-4
```
var obj1 = {
    a: 1,
    b: 'bbb'
};
```
- 속성과 값: 객체의 속성 a에는 숫자 값 1이 할당되고, 속성 b에는 문자열 'bbb'가 할당됩니다.  
- 참조형 특성: 객체는 참조형 데이터타입입니다. 이는 변수 obj1이 실제 데이터가 저장된 메모리 주소를 참조한다는 의미입니다.  
이전 예제에서 본 기본형(primitive) 데이터타입과 달리, 참조형 데이터는 변수 간 복사 시 값이 아닌 참조(메모리 주소)가 복사됩니다.

### 예제 1-5
```
var obj1 = {
    a: 1,
    b: 'bbb'
};
obj1.a = 2;
```

- 프로퍼티 재할당: obj1.a = 2; 구문을 통해 obj1 객체의 a 속성 값을 1에서 2로 변경한다.  
이는 참조형 데이터의 중요한 특성을 보여준다.  
- 가변성(mutability): 객체는 가변(mutable)이므로 생성 후에도 내부 속성을 변경할 수 있다.  
이는 앞서 본 기본형 데이터타입(primitive types)과 다른 점이다.

### 예제 1-6
```
var obj = {
    x: 3,
    arr: [3, 4, 5]
};
```
- 다중 참조 관계: obj.arr은 배열 [3, 4, 5]의 참조를 저장한다. 따라서 obj.arr을 통해 배열의 요소에 접근하거나 변경할 수 있다.

### 예제 1-7
```
var a = 10;
var b = a;

var obj1 = {c:10, d: 'ddd'};
var obj2 = obj1;
```

- 기본형 데이터 복사: var a = 10;으로 변수 a에 숫자 10을 할당한다. 
 그리고 var b = a;로 a의 값을 b에 복사한다.  
 이 경우 b는 a의 값인 10을 그대로 복사하여 별개의 값으로 저장한다. 따라서 a의 값이 변경되어도 b의 값은 영향을 받지 않는다.
- 참조형 데이터 복사: var obj1 = {c:10, d: 'ddd'};로 객체를 생성하고, var obj2 = obj1;로 obj1을 obj2에 복사한다.  
하지만 이 경우는 객체 자체가 아닌 참조값(메모리 주소)만 복사된다. 즉, obj1과 obj2는 동일한 객체를 가리키는 서로 다른 변수가 된다.


### 예제 1-8
```
var a = 10;
var b = a;
var obj1 = {c:10, d: 'ddd'};
var obj2 = obj1;

b = 15;
obj2.c = 20;
```

- 이 코드는 JavaScript에서 기본형과 참조형 데이터의 복사 후 값 변경 시 나타나는 차이점을 보여준다.  
- 기본형은 값 자체가 복사되고, 참조형은 메모리 주소(참조)가 복사된다. 이를 이해하면 코드의 예상치 못한 동작을 방지할 수 있다.

### 예제 1-9
```
var a = 10;
var b = a;
var obj1 = {c:10, d: 'ddd'};
var obj2 = obj1;

b = 15;
obj2 = {c:20, d: 'ddd'};
```

- 이 예제에서 중요한 차이점은 이전 예제와 달리 obj2의 속성을 변경한 것이 아니라, obj2 자체에 새로운 객체를 할당했다는 점이다.  
이렇게 하면 obj2는 obj1과 다른 객체를 가리키게 되어 서로 독립적인 상태가 된다.

### 예제 1-10
```
var user = {
    name: 'Jaenam',
    gender: 'male'
}

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}

// console.log(user.name, user2.name);
// console.log(user == user2);

```
- changeName 함수는 사용자의 이름을 변경한 새 객체를 반환하려는 함수이다. 하지만 var newUser = user;는 새 객체를 생성하지 않고 단순히 참조를 복사한다.  
따라서 newUser.name = newName;은 원본 객체인 user의 name 속성도 함께 변경한다.

### 예제 1-11
```
var user = {
    name: 'Jaenam',
    gender: 'male'
}

var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
// console.log(user.name, user2.name);
// console.log(user == user2);
```
- 이 코드는 앞서 보았던 객체의 가변성 문제를 해결하는 방법을 보여준다:
- changeName 함수가 기존 객체를 변경하는 대신 새로운 객체를 생성하여 반환한다.  
return { name: newName, gender: user.gender };는 원본 객체의 속성을 복사하면서 필요한 속성(name)만 새 값으로 설정한다.  
이렇게 하면 원본 객체(user)는 변경되지 않고 유지된다.


### 예제 1-12
```
// 예제 1-12 얕은복사
var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result
}
```
- 얕은 복사의 특징  
  - 얕은 복사는 객체의 1차 속성들만 복사한다. 속성 값이 기본형 데이터(숫자, 문자열 등)일 경우 완전한 복사가 이루어진다.  
속성 값이 참조형 데이터(객체, 배열 등)일 경우에는 참조값만 복사된다.

- 얕은 복사의 한계  
  - 중첩된 객체(객체 안의 객체)는 여전히 원본과 복사본이 동일한 참조를 공유한다. 따라서 복사본의 중첩 객체를 변경하면 원본의 중첩 객체도 함께 변경된다.

### 예제 1-13
```
var user = {
    name: 'Jaenam',
    gender: 'male'
}

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다');
}

// console.log(user.name, user2.name);
// console.log(user == user2);
```
- 앞서 정의한 copyObject 함수를 사용하여 객체의 얕은 복사를 수행하고 그 결과를 보여준다:  
- 얕은 복사 사용 : var user2 = copyObject(user); 구문으로 user 객체를 복사하여 새로운 user2 객체를 생성한다.  
이 때 얕은 복사가 이루어져 두 객체는 별도의 메모리 공간을 차지한다.
- 복사본 수정 : user2.name = 'Jung';으로 복사된 객체의 name 속성을 변경한다. 원본 객체(user)는 영향을 받지 않고 그대로 유지된다.

### 예제 1-14
```
var user = {
    name: 'Jaenam',
    urls: {
      portfolio: 'http://github.com/abc',
      blog: 'http://blog.com',
      facebook: 'http://facebook.com/abc',
    },
  };
  var user2 = copyObject(user); //얕은 복사만 수행함
  user2.name = 'Jung';
  
  console.log(user.name === user2.name); // false
  
  
  user.urls.portfolio = 'http://portfolio.com';
  console.log(user.urls.portfolio === user2.urls.portfolio); // true
  
  user2.urls.blog = '';
  console.log(user.urls.blog === user2.urls.blog); // true
```
- 이 예제는 얕은 복사의 한계를 명확히 보여준다. 중첩된 객체는 여전히 원본과 복사본 간에 공유되어, 한쪽의 변경이 다른 쪽에도 영향을 미친다.  
이러한 문제를 해결하기 위해서는 깊은 복사(Deep Copy)가 필요하다.

### 예제 1-15
```
var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio == user2.urls.portfolio)

user2.urls.blog = '';
console.log(user2.urls.blog)
console.log(user.urls.blog)
console.log(user.urls.blog == user2.urls.blog);
```
- 이 방식은 특정 중첩 레벨까지만 깊은 복사를 구현한 접근법이다. 중첩 객체를 수동으로 복사함으로써 각 객체가 독립적으로 동작하도록 한다. 
- 그러나 이 방식은 객체의 모든 중첩 레벨을 일일이 복사해야 하므로 객체 구조가 복잡할수록 코드가 번거로워진다.

### 예제 1-16
```
var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    }
    else {
        result = target;
    }
    return result;
};
```
- 객체의 깊은 복사(Deep Copy)를 구현하는 재귀 함수를 보여준다.  
- copyObjectDeep 함수는 자기 자신을 재귀적으로 호출하여 모든 중첩 수준의 객체를 복사한다.  
이를 통해 얕은 복사의 한계를 극복하고 객체의 완전한 복제본을 생성한다.

### 예제 1-17
```
// 예제 1-17
var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};

var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj)
console.log(obj2)
```
- 이 코드는 앞서 구현한 copyObjectDeep 함수를 사용하여 깊은 복사를 수행하고 그 결과를 확인한다.  
- 깊은 복사는 원본 데이터의 무결성을 유지하면서 데이터를 안전하게 조작할 수 있게 해준다.

### 예제 1-18
```
```

### 예제 1-19
```
```

### 예제 1-20
```
```

### 예제 1-21
```
```

### 예제 1-22
```
```