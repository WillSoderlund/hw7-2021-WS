window.addEventListener("load", function() {
    console.log("Page Loaded");

    var video = document.querySelector("video");
    
    video.autoplay = false;
    video.loop = false;

    document.getElementById("play").addEventListener("click", function() {
        video.play();

        updateVolumeInfo(); 
    });

    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
    });

    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log("New speed is", video.playbackRate);
    });

    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log("New speed is", video.playbackRate);
    });

    document.getElementById("skip").addEventListener("click", function() {

        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location is", video.currentTime);
    });

    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute"; 
    });

    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;

        updateVolumeInfo();
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.className = "oldSchool";
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.className = "";
    });

    function updateVolumeInfo() {
        var volumeSpan = document.getElementById("volume");

        volumeSpan.textContent = (video.volume * 100).toFixed(0) + "%";
    }
});

