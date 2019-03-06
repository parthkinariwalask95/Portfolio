var
  words = ["Everything started with passion to web technologies.I am a web developer living in Atlanta GA.Getting into coding really was the right move for me. I've always been infatuated with technology and how it makes our world turn.For the past 4 years,I've been developing websites for the web using mostly java,React,Mongo.I do this for a living and love what i do as everyday there is something new and exciting to learn.This passion lead me to become a Full Stack Developer, and recently a graduate from the Georgia Tech Coding Bootcamp with a certification in Full Stack Web Development. "],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 5,
  speed = 50;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
        //   offset--;
        ++skip_count;
        offset++;
        }
      }
    	$('.word').text(part);
  },speed);
};

$(document).ready(function(){
  wordflick();
});