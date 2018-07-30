function Stack() {

  var storage = []

  this.push = function(element) {

    storage.push(element)
  }

  this.pop = function() {

    return storage.pop()
  }

  this.pip = function() {

    return storage
  }

}

var arr = new Stack()

arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr.pip())
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pop())
console.log(arr.pip())
