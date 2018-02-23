
module.exports = function makeExchange(currency) {
  if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
   if(currency <= 0) return {};
  var answer = {};
   var h = Math.floor(currency / 50);
   var currency = currency % 50;
   var q = Math.floor(currency / 25);
   var currency = currency % 25;
   var d = Math.floor(currency / 10);
   var currency = currency % 10;
   var n = Math.floor(currency / 5);
   var currency = currency % 5;
   var p = currency;

    if(h > 0) answer.H = h;
    if(q > 0) answer.Q = q;
    if(d > 0) answer.D = d;
    if(n > 0) answer.N = n;
    if(p > 0) answer.P = p;
  return answer;
}
