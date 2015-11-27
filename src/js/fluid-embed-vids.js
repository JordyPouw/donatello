(function(){

  'use strict';


  fluidEmbedVids(window, document);

  function fluidEmbedVids (window, document, undefined) {
    // grab all iframes on the page or return.
    var iframes = document.getElementsByTagName('iframe');

    // loop through the iframes array.
    for(var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i],

      // regexp, extend this if you need more players.
      players = /www.youtube.com|player.vimeo.com/;
      
      // if the regexp pattern exists within the current iframe. 
      if (iframe.src.search( players) > 0) {
        // calculate the video ratio based on the iframe's w/h dimensions.
        var videoRatio        = (iframe.height / iframe.width) * 100;

        // replace the iframe's dimensions and position the iframe absolute, 
        // this is the trick to emulate the video ratio.
        iframe.style.position = 'absolute';
        iframe.style.top      = '0';
        iframe.style.left     = '0';
        iframe.width          = '100%';
        iframe.height         = '100%';
        
        // wrap the iframe in a new <div> which uses a dynamically fetched padding-top property based
        // on the video's w/h dimensions
        var wrap              = document.createElement('div');
        wrap.className        = 'u-fluidVids';
        wrap.style.width      = '100%';
        wrap.style.position   = 'relative';
        wrap.style.paddingTop = videoRatio + '%';

        // add the iframe inside our newly created <div>
        var iframeParent      = iframe.parentNode;
        iframeParent.insertBefore(wrap, iframe);
        wrap.appendChild(iframe);
      }
    }
  }


})();