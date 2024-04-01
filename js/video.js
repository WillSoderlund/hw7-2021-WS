window.addEventListener("load", function() {
    console.log("Page Loaded");

    var video = document.querySelector("video"); // Assuming there's only one video element.
    
    // Initialize video properties.
    video.autoplay = false; // Explicitly set autoplay to false.
    video.loop = false;    // Turn off looping.

    document.getElementById("play").addEventListener("click", function() {
        video.play();
        // Call updateVolumeInfo() after play to ensure volume is updated correctly.
        updateVolumeInfo(); 
    });

    document.getElementById("pause").addEventListener("click", function() {
        video.pause();
    });

    document.getElementById("slower").addEventListener("click", function() {
        video.playbackRate *= 0.9; // Correctly slow down by 10%.
        console.log("New speed is", video.playbackRate);
    });

    document.getElementById("faster").addEventListener("click", function() {
        video.playbackRate /= 0.9; // Correctly speed up to counteract slow down.
        console.log("New speed is", video.playbackRate);
    });

    document.getElementById("skip").addEventListener("click", function() {
        // Ensure skip ahead correctly and restart if needed.
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location is", video.currentTime);
    });

    document.getElementById("mute").addEventListener("click", function() {
        video.muted = !video.muted; // Toggle muting.
        // Update button text based on mute state.
        this.textContent = video.muted ? "Unmute" : "Mute"; 
    });

    document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        // Ensure volume info is updated correctly after slider adjustment.
        updateVolumeInfo();
    });

    document.getElementById("vintage").addEventListener("click", function() {
        video.className = "oldSchool"; // Ensure class is applied correctly.
    });

    document.getElementById("orig").addEventListener("click", function() {
        video.className = ""; // Ensure class is removed correctly.
    });

    function updateVolumeInfo() {
        var volumeSpan = document.getElementById("volume");
        // Ensure volume is displayed correctly, with the % sign.
        volumeSpan.textContent = (video.volume * 100).toFixed(0) + "%";
    }
});

