var images = require("images");
var newimage = images(960, 720);
var j = 0, k = 0;

exports.GenerateThumbnail = function(folder){
	
	for(var i = 0; i < 9; i++){
		if(i%3 == 0 && i!=0) {
			j++
			k=0
		}

		newimage.draw(images('./'+folder+'/'+(i+1)+'.png'),k*320, j*240)
		
		k++	
	}

	newimage.save("./"+folder+"/thumbnail.png") 
}
