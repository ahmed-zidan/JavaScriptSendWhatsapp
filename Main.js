

item = {
    phone :'1',
    time : 1,
    state : 1

}


arr = [item]

arr.push({
    phone :'2',
    time : 2,
    state : 1

}
)

arr.push({
    phone :'2',
    time : 3,
    state : 1

}
)

arr.push({
    phone :'2',
    time : 4,
    state : 1

}
)

var fil = arr.filter(x=>x.time > 2)


if(!(/^\d*$/.test('11111'))) {
   console.log(111111);
}
else{
    console.log(0)
}


var d = new Date();
console.log(arr)
console.log(fil)


var arr = [1,2,3,4,5]
var x = arr.every(x=>x > 3)
console.log(x)



var
persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
fixNumbers = function (str)
{
  if(typeof str === 'string')
  {
    for(var i=0; i<10; i++)
    {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};


var mystr = 'Sample text 1234 and ٢٨٢٢';
mystr = fixNumbers(mystr);
console.log(mystr)