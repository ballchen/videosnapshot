var ffmpeg = require('fluent-ffmpeg');
var thumbnail = require('./image').GenerateThumbnail;
// var process = require('process');
var video_name = process.argv[2]
var folder_name= video_name.replace(".","");


function SnapShot(time, vname, callback){
	folder_name= vname.replace(".","")
	var proc = new ffmpeg(video_name)
	  .screenshots({
	    timestamps: [time*10+"%"],
	    filename: time+'.png',
	    folder: './'+folder_name+'/',
	    size: '320x240'
	  })
	  .on('end', function() {
		callback(time)
	  })	
}

function GenerateSnapshots(callback){
	var all = 9;
	for(var i = 1; i<10; i++){
		SnapShot(i, video_name, function(time){
			all--
			if(all == 0){
				callback()
			}
		})
	}
}

GenerateSnapshots(function(){
	thumbnail(folder_name);
})









