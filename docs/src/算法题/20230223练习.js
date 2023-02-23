/**
 * 斐波那契数列
 * 取模 1000000007
 */
var fib = function(n) {
    let data = 1000000007
    if(n < 2) {
        return n
    } else {
        let p = 0, q = 0, r = 1;
        for(var i = 2; i <= n; i ++) {
            p = q
            q = r
            r = (p + q) % data
        }
        return r
    }
}
/**
 * 防抖
 */
function debounce(event, time) {
    let timer = null
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            event.apply(this, args)
        }, time)
    }
}
/**
 * 立即触发一次
 */
function debounceQuick(event, time) {
    let timer = null
    let flag = true
    return function(...args) {
        if(timer) clearTimeout(timer)
        if(flag && !timer) {
            event.apply(this, args)
            flag = false
        }
        time = setTimeout(() => {
            event.apply(this, args)
        }, time)
    }
}
/**
 * 节流：不管事件的触发频率有多高，只在单位时间内执行一次。
 */
function throttle(event, time) {
    let timer = null
    return function(...args) {
        if(!timer) {
            timer = setTimeout(() => {
                clearTimeouot(timer)
                event.apply(this, args)
            }, time)
        }
    }
}
/**
 * 节流：时间戳方式
 */
function throttleTime(event, time) {
    let prev = 0
    let timer = null
    return function(...args) {
        if(Date.now() - prev > time) {
            clearTimeout(timer)
            event.apply(this, args)
            prev = Date.now()
        } else if(!timer) {
            timer = setTimeout(() => {
                clearTimeout(timer)
                event.apply(this, args)
            }, time)
        }
    }
}
/**
 * Promise
 */
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(executor) {
    this.state = PENDING
    this.value = null
    this.reason = null

    const resolve = (value) => {
        if(this.state == PENDING) {
            this.state = FULFILLED
            this.value = value
        }
    }
    const reject = (reason) => {
        if(this.state == PENDING) {
            this.state = REJECTED
            this.reason = reason
        }
    }

    try {
        executor && executor(resolve, reject)
    } catch (reason) {
        reject(reason)
    }
}