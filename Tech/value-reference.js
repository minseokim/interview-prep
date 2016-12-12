// ** http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language

function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);    
console.log(obj2.item);

// 10
// changed
// unchanged



//Example:

function changeObject(x) {
  x = {member:"bar"};
  alert("in changeObject: " + x.member);
}

function changeMember(x) {
  x.member = "bar";
  alert("in changeMember: " + x.member);
}

var x = {member:"foo"};

alert("before changeObject: " + x.member);
changeObject(x);
alert("after changeObject: " + x.member); /* change did not persist */

alert("before changeMember: " + x.member);
changeMember(x);
alert("after changeMember: " + x.member); /* change persists */

//Output:

before changeObject: foo
in changeObject: bar
after changeObject: foo

before changeMember: foo
in changeMember: bar
after changeMember: bar