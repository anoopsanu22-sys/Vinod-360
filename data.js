var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.5642931912030633,
        "pitch": 0.0024156630720213457,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.5642931912030633,
          "pitch": 0.0024156630720213457,
          "rotation": 3.141592653589793,
          "target": "0-living"
        },
        {
          "yaw": -0.6439961536809218,
          "pitch": -0.046337038724637125,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": -1.241197856357637,
          "pitch": 0.061524407457266506,
          "rotation": 4.71238898038469,
          "target": "2-dining"
        },
        {
          "yaw": 2.4505835077427474,
          "pitch": 0.08366154918931912,
          "rotation": 0,
          "target": "1-formal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-formal-living",
      "name": "Formal living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 3.141592653589793,
          "target": "1-formal-living"
        },
        {
          "yaw": 1.0811809830783226,
          "pitch": 0.13622697897135794,
          "rotation": 2.356194490192345,
          "target": "0-living"
        },
        {
          "yaw": 0.9204294029933493,
          "pitch": -0.04055093546410404,
          "rotation": 0,
          "target": "3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.15439451075335064,
        "pitch": 0.013117983227099117,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.15439451075335064,
          "pitch": 0.013117983227099117,
          "rotation": 3.141592653589793,
          "target": "2-dining"
        },
        {
          "yaw": -0.7960873305251432,
          "pitch": 0.0284447014897804,
          "rotation": 5.497787143782138,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 1.254848298198949,
          "pitch": -0.03806725589849336,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 2.993284841689702,
          "pitch": 0.14724534132876244,
          "rotation": 3.141592653589793,
          "target": "0-living"
        },
        {
          "yaw": -2.5554495195478797,
          "pitch": 0.019217952287387874,
          "rotation": 1.5707963267948966,
          "target": "1-formal-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.28059524128214797,
        "pitch": 0.014991980830959761,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.28059524128214797,
          "pitch": 0.014991980830959761,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 3.0789378455567435,
          "pitch": 0.022168592326330838,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -2.9699437491891523,
          "pitch": -0.016767125040386688,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": 2.4756904145644025,
          "pitch": -0.047316408386530284,
          "rotation": 0,
          "target": "1-formal-living"
        },
        {
          "yaw": 2.2548442650806226,
          "pitch": 0.0014304117839447628,
          "rotation": 2.356194490192345,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-bedroom",
      "name": "Master bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.038934267929105815,
        "pitch": 0.00749599041548521,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.038934267929105815,
          "pitch": 0.00749599041548521,
          "rotation": 0,
          "target": "4-master-bedroom"
        },
        {
          "yaw": -2.3076393041223398,
          "pitch": 0.0018689849208701759,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vinod 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
