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

```


### 예제 7-3
```javascript

```


### 예제 7-4
```javascript

```


### 예제 7-5
```javascript

```


### 예제 7-6
```javascript

```


### 예제 7-7
```javascript

```


### 예제 7-8
```javascript

```


### 예제 7-9
```javascript

```


### 예제 7-10
```javascript

```


### 예제 7-11
```javascript

```


### 예제 7-12
```javascript

```


### 예제 7-13
```javascript

```


### 예제 7-14
```javascript

```


### 예제 7-15
```javascript

```


### 예제 7-16
```javascript

```