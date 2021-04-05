## Generation

Okay so it is really easy to generate one wave form, just some perlin noise in 1 dimension and boom you've a wave  
As always I've created a bunch of sliders in order to play with the data  

## Sliders

1. Progress of the noise function -> How much the wave will ondule  
2. Number of wave  
3. The speed (gotta go fast)  

## Multiples waves

to create multiple waves you just make the progress grow differently regarding the wave nb (slowest for the one in the background and angriest for the one in the front)  
For the color just use HSL and increases the Hue as you're going through the waves, it works pretty well  
And for the speed just iter multiple times over the method making you renew the Y values  

## SVG

For the SVG generation I used [this repo](https://github.com/zenozeng/p5.js-svg) which is really useful !  
