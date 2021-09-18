// var str = `2.Start UP et Cal pH \ Calibration sonde pH \ CALIBRATION SONDE`
// var a = String.raw `${str}`

// console.log( a );


function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      
    return str;
}
 
function convertASCII( symbols ) {
    console.log("Symbols: ", symbols);
    
    const str = String.fromCharCode(symbols);
    
    console.log("Symbols2: ", str);

    return str;
}
 
const str = hex2a('2.Start UP et Cal pH \ Calibration sonde pH \ CALIBRATION SONDE'); // returns '2460'

const str2 = convertASCII( str );