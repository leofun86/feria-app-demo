const btnVol = document.getElementById('btnVol');
let stateVol = true;
const btnPlayPause = document.getElementById('btnPlayPause');
let statePlay = true;
const mainVideo = document.getElementById('mainVideo');

document.addEventListener('onchange', (e)=>{
    console.log(e.target);
});
var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('mainVideo', {
            events: {
                'onReady': onPlayerReady
            }
        });
    }

    function onPlayerReady() {
        if (window.screen.availWidth <= 900) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    }
    btnVol.addEventListener('click', ()=>{
        const iconVol = document.querySelector('#btnVol i');
        if (stateVol) {
            player.mute();
            iconVol.removeAttribute('class');
            iconVol.setAttribute('class', 'fas fa-volume-mute');
            stateVol=false;
        } else {
            player.unMute();
            iconVol.removeAttribute('class');
            iconVol.setAttribute('class', 'fas fa-volume-up');
            stateVol=true;
        }
    });
    btnPlayPause.addEventListener('click', ()=>{
        const btnPause = document.querySelector('#btnPlayPause i');
        if(statePlay) {
            player.pauseVideo();
            btnPause.removeAttribute('class');
            btnPause.setAttribute('class', 'fas fa-play');
            statePlay=false;
        } else {
            player.playVideo();
            btnPause.removeAttribute('class');
            btnPause.setAttribute('class', 'fas fa-pause');
            statePlay=true;
        }
    });

    $(window).resize(function() {
        if (window.screen.availWidth <= 900) {
            player.stopVideo();
        } else {
            player.playVideo();
        }
    });