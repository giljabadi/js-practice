/**
* Minsky
* MINSKY Layout
* 2021-05-28 10:48:16
*/
(function () {
    // Loader
    var loader = new function(){this.rC=-1;this.r=[];this.add=function(src){this.r.push(src);};this.addTag=function(src,callback){var head=document.getElementsByTagName('head')[0],tag=src.indexOf('.js')>0?'script':'link',s=document.createElement(tag);head.appendChild(s);s.onload=callback;if(tag==='script'){s.type='text/javascript';s.src=src;}else if(tag==='link'){s.rel='stylesheet';s.href=src;}};this.loadNext=function(){this.rC++;if(this.rC>=this.r.length){this.done();}else{var r=this.r[this.rC];this.addTag(r,this.loadNext.bind(this));}};this.done=function(){this.onResourcesLoaded(window.Curator);};this.load=function(cb){this.onResourcesLoaded=cb;this.loadNext();};};

    // Config
    var config = {"post":{"template":"post-grid","imageHeight":"100%","minWidth":250,"showTitles":true,"showShare":true,"showComments":false,"showLikes":false,"autoPlayVideos":false,"clickAction":"open-popup","clickReadMoreAction":"open-popup","maxLines":0},"widget":{"animate":false,"continuousScroll":false,"continuousScrollOffset":50,"rows":1,"template":"widget-grid","showLoadMore":false,"loadMoreRows":1,"autoLoadNew":false},"responsive":{"480":{"widget":{"loadMoreRows":4}},"768":{"widget":{"loadMoreRows":2}}},"lang":"en","container":"#curator-feed-minsky-layout","debug":0,"hidePoweredBy":true,"forceHttps":false,"feed":{"id":"057563a5-bf56-4031-aa24-392043fc93f6","apiEndpoint":"https:\/\/api.curator.io","postsPerPage":12,"params":{},"limit":25},"popup":{"template":"popup","templateWrapper":"popup-wrapper","autoPlayVideos":false,"deepLink":false},"filter":{"template":"filter","showNetworks":false,"showSources":false,"showAll":false,"default":"all","limitPosts":false,"limitPostNumber":0,"period":""},"type":"Grid","theme":"sydney"};
    var colours = {"widgetBgColor":"transparent","bgColor":"#ffffff","borderColor":"#ffffff","iconColor":"#222222","textColor":"#222222","linkColor":"#999999","dateColor":"#000000"};
    var styles = {};

    // Bootstrap
    function loaderCallback () {
        window.Curator.loadWidget(config, colours, styles);
    }

    // Run Loader
    loader.add('https://cdn.curator.io/4.1/css/curator.embed.css');
    loader.add('https://cdn.curator.io/published-css/057563a5-bf56-4031-aa24-392043fc93f6.css');

    loader.add('https://cdn.curator.io/4.1/js/curator.embed.js');

    

    loader.load(loaderCallback);
})();
