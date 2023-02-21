//
var validateStackSequences = function(pushed, popped){
    let stack = []
    for(var i=0,j=0; i<pushed.length; i++) {
        stack.push(pushed[i])
        while(stack.length && stack[stack.length-1] == popped[j]) {
            stack.pop()
            j++
        }
    }
    return stack.length == 0
}