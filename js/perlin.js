// ORIGIN: https://mrl.cs.nyu.edu/~perlin/noise/

//will be init in the functions
const original_permutation = [ 151,160,137,91,90,15,
    131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
    190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
    88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
    77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
    102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
    135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
    5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
    223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
    129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
    251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
    49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
    138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180
];

let p;

const init_p = () => {
    p = [];
    for(let x = 0; x < 512; x++){
        p[x] = original_permutation[x % 256];
    }
};

// Ken Perlin's function --> 6t^5 * 15t^4 + 10t^3
const fade = (t) => t*t*t* (t*(t*6 -15) +10);

// understandable version of Ken's grad method ^^
const grad = (hash, x, y, z) => {
    switch(hash & 0xF){
        case 0x0: return  x + y;
        case 0x1: return -x + y;
        case 0x2: return  x - y;
        case 0x3: return -x - y;
        case 0x4: return  x + z;
        case 0x5: return -x + z;
        case 0x6: return  x - z;
        case 0x7: return -x - z;
        case 0x8: return  y + z;
        case 0x9: return -y + z;
        case 0xA: return  y - z;
        case 0xB: return -y - z;
        case 0xC: return  y + x;
        case 0xD: return -y + z;
        case 0xE: return  y - x;
        case 0xF: return -y - z;
        default: return 0; // never happens
    }
};

const linear_interpolate = (t,a,b) => a + t * (b-a);

function perlin_noise(x, y=0, z=0, octave = 4, amp_fallof = 0.5){
    let total = 0, amplitude = 1, freq = 1, maxValue = 0;

    for(let o = 0; o < octave; o++){
        total += no_octave_perlin(x*freq,y*freq,z*freq) * amplitude;
        
        maxValue += amplitude;
        amplitude *= amp_fallof;
        freq *= 2;
    }
    return total/maxValue;
}

function no_octave_perlin(x, y, z){
    let X = Math.floor(x) & 255, 
        Y = Math.floor(y) & 255, 
        Z = Math.floor(z) & 255;
        
    x-=X; y-=Y; z-=Z;
    let u = fade(x),
        v = fade(y),
        w = fade(z);

    // hashing
    const A = p[X  ]+Y, AA = p[A]+Z, AB = p[A+1]+Z,
          B = p[X+1]+Y, BA = p[B]+Z, BB = p[B+1]+Z;
          
    const   x1 = linear_interpolate(u,  grad(p[AA  ], x  , y  , z  ),
                                        grad(p[BA  ], x-1, y  , z  )),
            x2 = linear_interpolate(u,  grad(p[AB  ], x  , y-1, z  ),
                                        grad(p[BB  ], x-1, y-1, z  )),
            y1 = linear_interpolate(v,x1, x2),

            x3 = linear_interpolate(u,  grad(p[AA+1], x  , y  , z-1),
                                        grad(p[BA+1], x-1, y  , z-1)),
            x4 = linear_interpolate(u,  grad(p[AB+1], x  , y-1, z-1),
                                        grad(p[BB+1], x-1, y-1, z-1)),
            y2 = linear_interpolate(v,x3,x4);

    return (linear_interpolate(w,y1,y2)+1) /2;
}


init_p();