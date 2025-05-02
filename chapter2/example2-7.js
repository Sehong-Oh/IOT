function a() {
    var b;
    var b = function b() {}; // 변경된 부분
  
    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
  }
  a();