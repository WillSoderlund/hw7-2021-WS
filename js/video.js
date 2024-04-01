window.addEventListener("load", function() {
    console.log("Page Loaded");

    var video = document.querySelector("video"); // Assuming there's only one video element
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
        video.playbackRate *= 0.9; // Decrease speed by 10%
        console.log("New speed is", video.playbackRate);
    });

    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9; // Increase speed to counteract slow down
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
        if (video.muted) {
            video.muted = false;
            this.textContent = "Mute";
        } else {
            video.muted = true;
            this.textContent = "Unmute";
        }
    });

    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

    function updateVolumeInfo() {
        var volumeSpan = document.getElementById("volume");
        volumeSpan.textContent = Math.round(video.volume * 100) + "%";
    }
});
