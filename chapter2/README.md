# 사물인터넷 과제 저장소
## 오세홍

## Chapter2
### 예제 2-1
```javascript
// ----------------- (1)
var a = 1;
function outer() {
    function inner() {
    console.log(a); // undefined
    var a = 3;
    }
    inner(); // ------- (2)
    console.log(a);
}
outer(); // --------- (3)
console.log(a); 
```
- 변수 호이스팅(Hoisting): JavaScript에서는 변수 선언이 코드의 맨 위로 끌어올려지지만, 초기화는 원래 위치에서 실행됩니다. 그래서 `inner` 함수에서 `console.log(a)` 실행 시 `a`는 선언되었지만 초기화되지 않아 `undefined`가 출력됩니다.  
- 스코프 체인(Scope Chain): JavaScript는 변수를 찾을 때 현재 스코프에서 시작하여 상위 스코프로 올라가며 검색합니다. `outer` 함수에서는 지역 변수 `a`가 없으므로 글로벌 변수 `a`(값: 1)를 참조합니다.  
- 실행 컨텍스트(Execution Context): 코드가 실행되는 환경으로, 변수 객체, 스코프 체인, `this` 값을 포함합니다.  
- 콜 스택(Call Stack): 함수 호출을 추적하는 데이터 구조로, 마지막에 들어온 함수가 먼저 실행 완료됩니다(LIFO - Last In, First Out).


### 예제 2-2
```javascript

```


### 예제 2-3
```javascript

```


### 예제 2-4
```javascript

```


### 예제 2-5
```javascript

```


### 예제 2-6
```javascript

```

### 예제 2-7
```javascript

```

### 예제 2-8
```javascript

```

### 예제 2-9
```javascript

```

### 예제 2-10
```javascript

```

### 예제 2-11
```javascript

```

### 예제 2-12
```javascript

```

### 예제 2-13
```javascript

```

### 예제 2-14
```javascript

```

### 예제 2-15
```javascript

```

### 예제 2-16
```javascript

```