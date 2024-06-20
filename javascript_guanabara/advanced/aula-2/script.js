// Arrow Functions ->

let obj = {
    thisLocal: function() {
        let thisLocal = (() => console.log(this))()
        console.log(thisLocal)
    }
}
obj.thisLocal()