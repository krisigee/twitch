//run our jquery
$(document).ready(function(){
  var following=[];
  //free code camp stream info and status api call
  var url="https://wind-bow.gomix.me/twitch-api";
  $.getJSON(url,function(data1){
    if(data1.stream===null){
      $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
    }
    else {
      $("#fccStatus").html("Free Code Camp is currently ONLINE!");
      
    }  
  });
  
  var followerURL="https://wind-bow.glitch.me/twitch-api/streams/quin69?callback=?";
  $.getJSON(followerURL, function(data2){
    for (var i=0;i<data2.follows.length;i++){
      var displayName=data2.follows[i].channel.display_name;
      following.push(displayName);
    }
    following.push('RobotCaleb');
    following.push('OgamingSC2');
    following.push('ESL_SC2');
    
    
  });
  
  
  
  
});