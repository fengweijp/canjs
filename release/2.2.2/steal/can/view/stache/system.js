/*!
 * CanJS - 2.2.2
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Tue, 31 Mar 2015 17:29:12 GMT
 * Licensed MIT
 */

/*can@2.2.2#view/stache/system*/
"format steal";
steal("can/view/stache", "can/view/stache/intermediate_and_imports.js",function(stache, getIntermediateAndImports){

	function translate(load) {
		var intermediateAndImports = getIntermediateAndImports(load.source);
		
		intermediateAndImports.imports.unshift('can/view/stache/stache');
		
		return "define("+JSON.stringify(intermediateAndImports.imports)+",function(stache){" +
			"return stache(" + JSON.stringify(intermediateAndImports.intermediate) + ")" +
		"})";
	}

	return {
		translate: translate
	};

});

