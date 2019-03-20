# Browser destroyer

Are you lazy like me and don't want to use multiple browsers to check wether they have your feature or not? Look no further. 

Behold the browser destroyer

## How to use

In your page include the index.js into your document.

### for global features

```javascript
	avadaKedavraFeature("localStorage")
```

as you can see, you have to define the name of the feature as a string.


### for features A.k.a methods of Constructors

if you want to disable for example forEach or map or filter etc etc. Or whatever es6 feature of a constructor use the script like this

```javascript
	avadaKedavraFeature("Array.prototype.forEach")
```


#IMPORTANT

Use the avadaKedavra above the feature detection like this

```Javascript
	
	avadaKedavraFeature("localStorage")

	if(window.localStorage) {
		console.log("localStorage exists")
	}else {
		console.log("localStorage does not exist")
	}


```

Voila no more features. 

Have fun!