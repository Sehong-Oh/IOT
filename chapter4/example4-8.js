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