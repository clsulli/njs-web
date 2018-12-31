$(document).ready(function() {
    var h = $("#tour").outerHeight();
    console.log(h);
    $("#panorama").height(h);

    var viewer = pannellum.viewer('panorama', {  
        "autoLoad": true,
        "autoRotate": -2,
        
        "default": {
            "firstScene": "master",
            "author": "Alan Herischmeyer",
            "sceneFadeDuration": 1000
        },
    
        "scenes": {
            "master": {
                "title": "Master Bedroom",
                "hfov": 110,
                "pitch": -3,
                "yaw": 117,
                "type": "equirectangular",
                "panorama": "/images/tour/room-1.jpg",
                "hotSpots": [
                    {
                        "pitch": -2.1,
                        "yaw": 132.9,
                        "type": "scene",
                        "text": "Spring House or Dairy",
                        "sceneId": "room2"
                    }
                ]
            },
    
            "room2": {
                "title": "Spring House or Dairy",
                "hfov": 110,
                "yaw": 5,
                "type": "equirectangular",
                "panorama": "/images/tour/room-2.jpg",
                "hotSpots": [
                    {
                        "pitch": -0.6,
                        "yaw": 37.1,
                        "type": "scene",
                        "text": "Master Bedroom",
                        "sceneId": "master",
                        "targetYaw": -23,
                        "targetPitch": 2
                    }
                ]
            }
        }
    });

    
    viewer.on('mousedown', function(event) {
        // For pitch and yaw of mouse location
        var pitch = viewer.mouseEventToCoords(event)[0];
        var yaw = viewer.mouseEventToCoords(event)[1];
        $('#currPitch').val(pitch);
        $('#currYaw').val(yaw);
        console.log(viewer.mouseEventToCoords(event));
    });

});