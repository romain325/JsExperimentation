const HEIGHT = 500;
const WIDTH = 500;
const SPEED = 0.3

var A = 1, B = 1;
const R1 = 10, R2 = 50, K2 = 100, K1 = 100, THETA = 0.07, PHI = 0.03;



const sketch = (p5) => {


    p5.setup = () => {
        p5.createCanvas(WIDTH, HEIGHT)
        p5.strokeWeight(5)
    }

    p5.draw = () => {
        p5.background(0)
        A += THETA*SPEED; B += PHI*SPEED;

        const cA = Math.cos(A), cB = Math.cos(B), sA = Math.sin(A), sB = Math.sin(B);
        for(let i = 0; i < 2*Math.PI; i += THETA*3){
            const cosTheta = Math.cos(i), sinTheta = Math.sin(i);
            for(let j = 0; j < 2*Math.PI; j += PHI*3){
                const cosPhi = Math.cos(j), sinPhi = Math.sin(j);

                const cx = R2 + R1 * cosTheta, cy = R1*sinTheta;
                const   x = cx * (cB*cosPhi + sA*sB*sinPhi) - cy *cA*cB,
                        y = cx*(sB*cosPhi - sA*cB*sinPhi) + cy*cA*cB,
                        z = K2 + cA*cx*sinPhi + cy*sA,
                        overZ = 1/z;
                
                const   px = (WIDTH/2 + K1*overZ*x),
                        py = (HEIGHT/2 + K1*overZ*y);

                const lum = THETA * (cosPhi*cosTheta*sB - cA * cosTheta * sinPhi - sA * sinTheta + cB*(cA*sinTheta - cosTheta * sA * sinPhi));
                if(lum > 0){
                    p5.stroke('rgba(255,255,255,'+ lum +')');
                    p5.point(px,py);
                }
            }
        }


    }
}
new p5(sketch, 'canvasContent')