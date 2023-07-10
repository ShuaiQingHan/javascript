    function createIterator(items) {
            var i = 0;
            return {
                next: function() {
                    var done = i >= items.length
                    // console.log(i++)
                    console.log(items[i++])

                    var value = !done ? items[i++] : undefined;
                    return {
                        done: done,
                        value: value
                    }
                }
            }
        }
        var iterator = createIterator([1,2,3]);
        console.log(iterator.next());
      function forOf(obj,cd) {
          let iterable,result;
          if(typeof obj[Symbol.iterator] !== 'function') throw new TypeError(result + "is not iterable")
          if(typeof cb !== 'function') throw new TypeError('cb must be callable')

          iterable = obj[Symbol.iterator]();
          result = iterable.next()
          while(!result.done) {
              cb(result.value);
              result = iterator.next()
          }
      }
