# 第一题
执行结果：10  
解释：var 申明的变量，作用域不仅仅是作用于for循环内，同时也在for循环的外部，当我们调用函数时，i的值已经是10。

# 第二题
执行结果：抛出异常  
解释：首先申明了一个全局作用域的tmp，但是在块级作用域内let也申明了一个局部变量tmp,导致let绑定这个块级作用域，而let申明的变量，会出现暂时性死区，在其申明前，是不可以被调用。

# 第三题
代码见code目录下的app.js文件下findMinNum方法

# 第四题
var: 没有块的概念，而且存在变量提升，未申明前可以访问为undefined,值可被改变  
let: 只在当前块级作用域生效，为申明前不可以访问，否则报错。值可被改变  
const: 只在当前块级作用域生效，为申明前不可以访问，否则报错。同时指向的地址为可读，不可更改  

# 第五题
执行结果：20  
解释：setTimeout中使用了箭头函数，箭头函数中的this固定绑定在了向上查找的第一个function的同级作用域下，也就是这里的obj，故答案为20

# 第六题
1、生成独一无二的常量值  
2、隐藏私有属性  
3、很好的解决变量名的冲突  

# 第七题
浅拷贝：只复制指向对象的指针，而不复制引用对象本身  
深拷贝：复制引用对象本身

# 第八题
js异步编程：js异步编程是相对于同步而言，对于同步，也就是所有的任务一个一个去执行。而对于异步而言，js引擎遇到异步任务的时候，则会把当前异步任务挂起，继续执行后面的代码，当异步任务有返回结果后再去执行回调函数  
Event Loop: 用来负责监听调用栈和消息队列。js执行分为同步任务以及异步任务，同步任务会被推到执行栈中按顺序执行。对于异步任务来说，当其被执行时，会被推到一个任务队列中去等待js引擎去执行。当所有同步任务执行完成后，js引擎回去任务队列里查找是否有任务存在，并将任务放到执行栈中去执行，执行完后又会去任务列队里查看是否有已经可以执行的任务  
宏任务：setTimeout, setInterval等 由宿主环境发起的任务称为宏观任务。前端开发的宿主环境一般是指浏览器  
微任务：promise，process.nextTick 等，由JavaScript引擎发起的任务称为微观任务

# 第九题
代码见code目录下的app.js文件下faddStr方法

# 第十题
1、TypeScript 是 JavaScript的超集，主要提供了类型系统和对ES6的支持  
2、TypeScript是对JavaScript的扩展  
3、TypeScript编译后的生成的文件是JavaScript，目前只有JavaScript文件才能运行在各种平台  

# 第十一题
优点：
    1、增加了代码的可读性和可维护性  
    2、包容性强，如类型推论，以及兼容其他库函数(通过delcrae修饰)  
    3、拥有活跃的社区，拥抱ES6规范  
缺点：
    1、有一定的学习成本  
    2、短期项目开发会增加成本。适合大型的长期维护的项目  
