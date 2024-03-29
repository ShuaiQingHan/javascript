
			// 设定三个状态: pending, fulfilled, rejected 只能有pending改变为fulfilled, reject, 并且只能改变一次,
			// 	MyPromise接受一个函数exector, exector有两个参数resolve方法, 和reject方法
			// resolve将pedding改为fulfilled
			// reject将pending改为rejected
			// promise变为fulfilled状态后具有一个唯一的value
			// promise变为rejected状态具有一个唯一的reason

			const PENDING = 'pending'
			const FULFILLED = 'fulfilled'
			const REJECTED = 'rejected'

			function MyPromise(exector) {
				this.state = PENDING
				this.value = null
				this.reason = null

				const resolve = (value) => {
					if (this.state === PENDING) {
						this.state = FULFILLED
						this.value = value
					}
				}
				const reject = (reason) => {
					if (this.state === PENDING) {
						this.state = REJECTED
						this.reason = reason
					}
				}
				
				try {
					exector(resolve,reject);
				} catch (reason) {
					reject(reason)
				}
			}
			
			// .then方法接受两个参数onFulfilled,onRejected, 他们分别在状态由PENDING
			// 改为FULFILLED,REJECTED后调用
			
			// 一个promise可绑定多个then方法
			// then方法可以同步调用也可以异步调用
			// 同步调用: 状态已经改变,直接调用onFulfilled方法,
			// 异步调用: 状态还是PENDING,将onFulfilled,onRejected 分别加入两个函数数组,
			// onFufilledCallbacks,onRejectedCallbacks当异步调用resolve和reject时
			// 将两个数组中绑定的时间循环执行
			
			Mypromise.prototype.then =  function (onFulfilled, onRejected) {
				switch (this.state) {
					case FULFILLED:
					  onFulfilled(this.value)
						break;
					case REJECTED:
					  onFulfilled(this.value)
						break
				}
			}

			class Promise {
				constructor(exector) {
					this.status = 'pendding'
					this.value = undefined
					this.reason = undefined

					let resolve = (data) => {
						if(this.status === 'pendding') {
							this.status = 'resolve'
							this.value = data
						}
					}
					let reject = (data) => {
						if(this.status === 'pendding') {
							this.status = 'reject'
							this.reason = data
						}
					}

					try {
						exector(resolve,reject)
					} catch (e) {
						reject(e)
					}
				}
			}
			// exector 这是实例Promise对象在构造器中传入的参数，一般是一个 function (resolve,reject){}
			// status Promise的状态，默认是pendding状态，每当调用到resolve和reject方法是，就会改变其值，
			// 在后面的then方法中会用到

			// value resolve调用成功后，调用reoslve 方法里面的参数值
			// reason reject回调成功后，调用reject方法里面的参数值
			// resolve 声明resolve方法在构造器内，通过传入的exector 方法其中，用以给使用者回调
			// reject 声明reject 方法在构造器内，通过传入的executor方法传入其中，用以给使用者回调
		
