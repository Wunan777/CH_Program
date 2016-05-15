if( /^(\s*(ADD|SUB|AND|CMP|XOR|TEST|OR|MVRR)\s+R(1(0|1|2|3|4|5)|0?\d{1}|0)\s*,\s*R((1(0|1|2|3|4|5))|(0?\d{1})|0)\s*)$/.exec("ADD R0,R0")!= null ) //R2
{
	console.log(1);
}

