
			//开辟一个外部储存空间用于标记元素是否出现
		    const unique = (array) {
					let container = {}
					return array.filter((item,index) => container.hasOwnProperty(item) ? false: (container[item] = true))
				}
				
				//indexOf + filter
				// const unique = arr => arr.filter((e,i) => arr.indexOf(e) === i)
				
				// //set 
				// const unique = arr => Array.from(new Set(arr))
				// const unique = arr => [...new Set(arr)]
				
				// // 排序: 通过比较相邻数字是否重复,将排序后的数组进行去重
				
				// const unique = (array) => {
				// 	array.sort((a,b) => a - b);
				// 	let pre = 0;
				// 	const result = []
				// 	for(let i = 0; i < array.length; i++) {
				// 		if(!i || array[i] != array[pre]) {
				// 			result.push(array[i]);
				// 		}
				// 		pre = i ;
				// 	}
				// 	return result
				// }
				
				// //除去重复的值
				// const filter = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))
				
				// //扁平
				//    基本实现:
				// 	   const flat = (array) => {
				// 			 let result = [];
				// 			 for(let i = 0; i < array.length; i++) {
				// 				 if(Array.isArray(array[i])) {
				// 					 result = result.concat(flat(array[i]))
				// 				 }else {
				// 					 result.push(array[i])
				// 				 }
				// 			 }
				// 			 return result
				// 		 }
				// 		 使用reduce简化
				// 		  function flatten(array) {
				// 				return array.reduce(
				// 				   (target,current) => 
				// 					 Array.isArray(current) ? target.concat(flatten(current)):
				// 					 target.concat(current)
				// 				,[])
				// 			}
							
				// 			根据深度指定深度扁平数组
				// 			function flattenByDeep(array,deep = 1) {
				// 				return array.reduce(
				// 				  (target, current) => 
				// 					Array.isArray(current) && deep > 1?
				// 					target.concat(flattenByDeep(current,deep - 1)):
				// 					target.concat(current)
				// 					,[]
				// 				)
				// 			}
							
				// 			// 最值
				// 			Array.reduce((c,n) => Math.max(c,n))
							
				// 			// Math.max : 参数原本是一组数字,只需要让他们可以接受数组即可
				// 			const array = [3,2,1,4,5];
				// 			Math.max.apply(null,array)
				// 			Math.max(...array)
							
				// 			使用reduce 实现map
				// 			Array.prototype.reduceToMap = function (hander) {
				// 				return this.reduce((target,current, index) => {
				// 					target.push(hander.call(this,current,index))
				// 					return target;
				// 				},[])
				// 			}
							
				// 			使用reduce实现filter
							
				// 			Array.prototype.reduceToFilter = function (hander) {
				// 				return this.reduce((target, current, index) => {
				// 					if(hander.call(this, current, index)) {
				// 						target.push(current)
				// 					}
				// 					return target;
				// 				},[])
				// 			}		
