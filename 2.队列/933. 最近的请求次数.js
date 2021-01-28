var RecentCounter = function() {
    this.p = []
};

RecentCounter.prototype.ping = function(t) {
    this.p.push(t)
    while(this.p[0]<t-3000){
        this.p.shift()
    }
    return this.p.length
};

var a = new RecentCounter()

console.log(a.ping(1))
console.log(a.ping(100))
console.log(a.ping(3001))
console.log(a.ping(3002))
// ["RecentCounter", "ping", "ping", "ping", "ping"]