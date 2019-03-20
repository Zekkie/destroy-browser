function avadaKedavraFeature(feature) {
 	const destructedStr = feature.split(".");
 	let target;
 	

 	if(destructedStr.length > 1) {
 		 target = eval(destructedStr[0]);
 		 if (destructedStr.length <= 2) {
	 	if(target[destructedStr[1]].constructor) {
	 		delete target[destructedStr[1]];
	 	}else {
	 		target[destructedStr[1]] = undefined;
	 	}
		 } else if(destructedStr.length === 3) {
		 	target.prototype[destructedStr[2]] = undefined
		 } 
 	}	
	else {
	 	try {
	 		target = eval(feature)
	 		if(target.constructor) {
	 			delete window[feature];
	 		}else {
	 			window[feature] = undefined;
	 		}
	 	} catch(e) {
	 		console.log(e)
	 	}
	 }
}
