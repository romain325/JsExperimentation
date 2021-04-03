/**
 * Convert HSV to RGBs
 * @param {Object} hsv {h:1,s:1,v:1} with h,s,v between 0..1
 * @returns {Object} {r:0,g:0,b:0} with r,g,b between 0..255
 */
function HSVtoRGB(hsv){
    const   i = Math.floor(hsv.h * 6),
            C = hsv.v * hsv.s,
            X = C * Math.abs(hsv.h - i),
            m = hsv.v - C,
            rgb = {r:0,g:0,b:0};

    switch(i){
        case 0:rgb.r = C; rgb.g = X; rgb.b = 0;break;
        case 1:rgb.r = X; rgb.g = C; rgb.b = 0;break;
        case 2:rgb.r = 0; rgb.g = C; rgb.b = X;break;
        case 3:rgb.r = 0; rgb.g = X; rgb.b = C;break;
        case 4:rgb.r = X; rgb.g = 0; rgb.b = C;break;
        case 5:rgb.r = C; rgb.g = 0; rgb.b = X;break;
    }

    for(const key in rgb){
        rgb[key] += m;
        rgb[key] *= 255;
    }

    return rgb;
}

const GOLDEN_RATIO = (1 + Math.sqrt(5))/2;

function goldenRandom(s,v){
    return HSVtoRGB({h:(Math.random() + GOLDEN_RATIO)%1, s:s, v:v});
}

function goldenRandom(h,s,v){
    return HSVtoRGB({h:(h + GOLDEN_RATIO)%1, s:s, v:v});
}