var _ = require('underscore')

console.log(_.map([1,2,3], (x) => x * x))
console.log(_.map({a:1,b:2,c:3}, (v, k) => k+'='+v))

// map/filter
'use strict';

var obj = {
    name: 'bob',
    school: 'No.1 middle school',
    address: 'xueyuan road'
};
var upper = _.map(obj, function (value, key) {
    return value +"/" + [key];
});

console.log(JSON.stringify(upper));


// every / some
// 当集合的所有元素都满足条件时，_.every()函数返回true，当集合的至少一个元素满足条件时，_.some()函数返回true：

console.log(_.every([1, 4, 7, -3, -9], (x) => x > 0))
console.log(_.some([1,3,4], (x) => x > 0))

// max / min
// 这两个函数直接返回集合中最大和最小的数：

var arr = [3,4,67,8]
console.log(_.max(arr))
console.log(_.min(arr))

//// 空集合会返回-Infinity和Infinity，所以要先判断集合不为空：
// _.max([])
// -Infinity
// _.min([])
// Infinity

//groupBy
// groupBy()把集合的元素按照key归类，key由传入的函数返回：

var scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
var groups = _.groupBy(scores, function (x) {
    if (x < 60) {
        return 'C';
    } else if (x < 80) {
        return 'B';
    } else {
        return 'A';
    }
});

console.log(groups)


// shuffle / sample
// shuffle()用洗牌算法随机打乱一个集合：

console.log(_.shuffle([1,3,5,6,7]))

//sample()则是随机选择一个或多个元素：
console.log(_.sample([1, 2, 3, 4, 5, 6]))
console.log(_.sample([1,2,3,4,5,6], 3))

//first / last
// 顾名思义，这两个函数分别取第一个和最后一个元素：
var arr = [2, 4, 6, 8];
console.log(_.first(arr)); // 2
console.log(_.last(arr)); // 8

//flatten
// flatten()接收一个Array，无论这个Array里面嵌套了多少个Array，flatten()最后都把它们变成一个一维数组：
console.log(_.flatten([1, [2], [3, [[4], [5]]]]))
console.log(_.flatten([{arr:1},[{str:'22'}],[[{a:'v'}]]]))

// zip / unzip
// zip()把两个或多个数组的所有元素按索引对齐，然后按索引合并成新数组。例如，你有一个Array保存了名字，另一个Array保存了分数，现在，要把名字和分数给对上，用zip()轻松实现

var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
console.log(_.zip(names, scores))

// unzip()则是反过来
'use strict';
var namesAndScores = [['Adam', 85], ['Lisa', 92], ['Bart', 59]];
console.log(_.unzip(namesAndScores))

// object
// 有时候你会想，与其用zip()，为啥不把名字和分数直接对应成Object呢？别急，object()函数就是干这个的：
var names = ['Adam', 'Lisa', 'Bart'];
var scores = [85, 92, 59];
console.log(_.object(names, scores))


//range
// range()让你快速生成一个序列，不再需要用for循环实现了：
// 从0开始小于10:
_.range(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 从1开始小于11：
_.range(1, 11); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 从0开始小于30，步长5:
_.range(0, 30, 5); // [0, 5, 10, 15, 20, 25]

// 从0开始大于-10，步长-1:
_.range(0, -10, -1); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

console.log(_.range(10))
console.log(_.range(1, 11))
console.log(_.range(0, 30, 5))
console.log(_.range(0, -10, -1))

var arr = ['Apple', 'orange', 'banana', 'orange', 'ORANGE', 'apple', 'PEAR'];
console.log(_.uniq(arr))


//function
var s = ' Hello  ';
var fn = _.bind(s.trim, s);
console.log(fn(), 111)

// 假设我们经常计算2y，每次都写Math.pow(2, y)就比较麻烦，如果创建一个新的函数能直接这样写pow2N(y)就好了，这个新函数pow2N(y)就是根据Math.pow(x, y)创建出来的偏函数，它固定住了原函数的第一个参数（始终为2）：
var pow2N = _.partial(Math.pow, 2);
console.log(pow2N(3)); // 8
console.log(pow2N(5)); // 32
console.log(pow2N(10)); // 1024

var pow3N = _.partial(Math.pow, 3)
console.log(pow3N(3))


//如果我们不想固定第一个参数，想固定第二个参数怎么办？比如，希望创建一个偏函数cube(x)，计算x3，可以用_作占位符，固定住第二个参数：
var cube = _.partial(Math.pow, _, 3);
console.log(cube(3)); // 27
cube(5); // 125
cube(10); // 1000

//memoize
// 如果一个函数调用开销很大，我们就可能希望能把结果缓存下来，以便后续调用时直接获得结果。举个例子，计算阶乘就比较耗时：
//
// function factorial(n) {
//     var s = 1, i = n
//     while(i>1) {
//         s = s * i
//         i--
//     }
//
//     return s
// }
// console.log(factorial(10))
//


var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    var s = 1, i = n
    while(i>1) {
        s = s * i
        i--
    }
    console.log(n + '!= ' + s)

    return s
})
console.log(factorial(10))
console.log(factorial(10))


var factorial = _.memoize(function(n) {
    console.log('start calculate ' + n + '!...');
    if (n < 2) {
        return 1;
    }
    return n * factorial(n - 1);
});

console.log(factorial(10)); // 3628800
console.log(factorial(9)); // 3628800



var register = _.once(function () {
    alert('Register ok!');
});
// console.log(register())


//delay
// delay()可以让一个函数延迟执行，效果和setTimeout()是一样的，但是代码明显简单了：
// console.log(_.delay('100', 2000))
function alert(){
    console.log('123')
}
_.delay(alert, 2000)

var log = _.bind(console.log, console);
_.delay(log, 2000, 'Hello,', 'world!');

//keys / allKeys
// keys()可以非常方便地返回一个object自身所有的key，但不包含从原型链继承下来的：

function Student(name, age) {
    this.name = name;
    this.age = age;
}

var xiaoming = new Student('小明', 20);
console.log(_.keys(xiaoming)); // ['name', 'age']

// allKeys()除了object自身的key，还包含从原型链继承下来的：

function Student(name, age) {
    this.name = name;
    this.age = age;
}
Student.prototype.school = 'No.1 Middle School';
var xiaoming = new Student('小明', 20);
console.log(_.allKeys(xiaoming)); // ['name', 'age', 'school']

//values
// 和keys()类似，values()返回object自身但不包含原型链继承的所有值：

var obj = {
    name: '小明',
    age: 20
};

console.log(_.values(obj)); // ['小明', 20]

// mapObject
// mapObject()就是针对object的map版本：

var obj = { a: 1, b: 2, c: 3 };
// 注意传入的函数签名，value在前，key在后:
console.log(_.mapObject(obj, (v, k) => 100 + v)); // { a: 101, b: 102, c: 103 }


//invert
// invert()把object的每个key-value来个交换，key变成value，value变成key：

var obj = {
    Adam: 90,
    Lisa: 85,
    Bart: 59
};
console.log(_.invert(obj)); // { '59': 'Bart', '85': 'Lisa', '90': 'Adam' }

//extend / extendOwn
// extend()把多个object的key-value合并到第一个object并返回：

var a = {name: 'Bob', age: 20};
_.extend(a, {age: 15}, {age: 88, city: 'Beijing'}); // {name: 'Bob', age: 88, city: 'Beijing'}
// 变量a的内容也改变了：
console.log(a); // {name: 'Bob', age: 88, city: 'Beijing'}

//clone
// 如果我们要复制一个object对象，就可以用clone()方法，它会把原有对象的所有属性都复制到新的对象中：

var source = {
    name: '小明',
    age: 20,
    skills: ['JavaScript', 'CSS', 'HTML']
};

var copied = _.clone(source)
console.log(copied.skills === source.skills)

//isEqual
// isEqual()对两个object进行深度比较，如果内容完全相同，则返回true：

var o1 = { name: 'Bob', skills: { Java: 90, JavaScript: 99 }};
var o2 = { name: 'Bob', skills: { JavaScript: 99, Java: 90 }};

o1 === o2; // false
_.isEqual(o1, o2); // true

//Chaining 链式调用
console.log(_.filter(_.map([1, 4, 9, 16, 25], Math.sqrt), x => x % 2 === 1))

var r = _.chain([1, 4, 9, 16, 25])
    .map(Math.sqrt)
    .filter(x => x % 2 === 1)
    .value();
console.log(r)
