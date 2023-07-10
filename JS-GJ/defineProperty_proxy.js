
    //    Object.defineProperty(obj,prop,descriptor)该方法可以在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象
    //    obj:要在其上定义属性的对象
    //    prop:要定义活修改的属性的名称
    //    descriptor:将被定义或修改的属性的描述符
    //    var object = {}
    //    Object.defineProperty(obj,'num',{
    //        value: 1, //该属性对应的值，可以是任何有效的值，默认为undefined
    //        writable: true, // 当且仅当为true，该属性才能被赋值运算符改变，默认为false
    //        enumerable: true, //当且仅当为true，该属性才能够出现在对象枚举属性中，默认为false
    //        configurable:true, //当且仅当该属性为true时，改属性描述符才能够被改变，也能够被删除，默认为false
    //        get: function(i){//一个给属性提供getter的方法，如何没有getter则为undefined,该方法返回值被用作属性值，默认为undefined
    //           return value//
    //        },
    //        set: function() { // 一个给属性提供setter的方法，如果没有setter，则为undefined该方法将接受唯一的参数，并将改参数的新值分配给该属性，默认为undefined
    //            value= newValue
    //        }
    //    })
    //    属性描述符必须是数据描述符或者存取描述符两种形式之一，不能同时两者，
    //    之所以讲到defineProperpty,是因为我们要使用存取描述符中的get，和set,这两个方法又被称为getter,setter,由getter和setter定义的属性称作存取器属性
    //    当程序查询存取器属性的值时，javas电泳getter方法，这个方法的返回值就是属性存取表达式的值，当程序设置了一个存取属性的值是，
    //    js调用setter方法，将赋值表达式右侧的值当做参数传入setter，从某种意义上讲，这个方法负责设置属性值，可以忽略setter方法的返回值
    // var obj = {},value = null;
    // Object.defineProperty(obj,'num',{
    //     get: function() {
    //         console.log('run get')
    //         return value
    //     },
    //     set: function(nv) {
    //         console.log('run set')
    //         console.log(nv)

    //         value = nv
    //     }
    // })
    // obj.num = 1
    // console.log(obj.num)
    // console.log(value)
    // function Archiver() {
    //     var value = null
    //     var archive = []
    //     Object.defineProperty(this,'num',{
    //         get: function() {
    //             console.log('run get')
    //             return value
    //         },
    //         set: function(value) {
    //             console.log('run set')
    //             value = value
    //             archive.push({val: value})
    //         }
    //     })
    //     this.getArchive = function() {return archive;}
    // }
    // var arc = new Archiver()
    // arc.num;
    // arc.num = 11
    // console.log(arc.num)
    // console.log(arc.getArchive())
    //  var obj = {
    //      value: 1
    //  }
    //  var value = 1
    //  Object.defineProperty(obj,'value', {
    //      get: function() {
    //          return value
    //      },
    //      set: function(newValue) {
    //          value = newValue;
    //          document.getElementById('container').innerHTML = newValue
    //      }
    //  })
    //  document.getElementById('button').addEventListener('click',function(){
    //      obj.value += 1
    //  })

//     var obj = {
//     value: 1
// }
// (function(){
//          var root = this;
        //  function watch(obj,name,func) {
        //      var value = obj[name];
        //      Object.defineProperty(obj,name, {
        //          get: function () {
        //              return value;
        //          },
        //          set: function (newValue) {
        //              value = newValue;
        //              func(value)
        //          }
        //      });
        //      if(value) obj[name] = value
        //  }
        //  this.watch = watch
    //  })()
// watch(obj, "value", function(newvalue){
//     document.getElementById('container').innerHTML = newvalue;
// })

// document.getElementById('button').addEventListener("click", function(){
//     obj.value += 1
// });
    // Proxy这是词的意识是代理的意识，在这里表示由他来代理某些操作，es6提供原生的Proxy构造函数
    // 用来生成Proxy实例，我们来看看它的用法

    // var proxy = new Proxy(target,handler)

    // proxy对象的所有用法，都是上面这种形式，不同的只是handler参数的写法，其中，new Proxy()表示
    // 生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为

    // var proxy = new Proxy({}, {
    //     get: function(obj, prop) {
    //         return obj[prop]
    //     },
    //     set: function(obj,prop,value) {
    //         console.log('设置 set操作')
    //         obj[prop] = value
    //     }
    // })
    //  proxy.time = 35
    //  console.log(proxy.time)
