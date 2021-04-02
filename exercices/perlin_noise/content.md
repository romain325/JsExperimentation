## Implementation

As previously said we use our random function with kind of a seeding on top of it.(absolutely not true in real application but it is kind of a representation)  
In order to get it done I used the M. Perlin's Java source code: https://mrl.cs.nyu.edu/~perlin/noise/
It is actually quite hard to understand as it make usage of advanced features.  
And so I tried to simplify it, that way it is easier to read for me.
All the source code is [here](../../js/perlin.js)

## Algorithm

Ok so I clearly don't want people to rely on this description, go make some research to trully understand the algorithm.
But basically:  
    - We create a p array made of permutation array (I used the same as the original but you can juste generate one with values between 0..255)  
    - We set the numbers of octave we want and loop through the real perlin algorithm  
    - We fade our x,y,z with the function ![Equation](https://math.now.sh?from=6t%5E5%20*%2015t%5E4%20%2B%2010t%5E3)  
    - We get hashed values from our p table  
    - Then it's quite a lot of block but with some decomposition it's kinda alright  
    - The grad function allow us to get a grad from our hashed values and coordinates  
    - Then we make a linear interpolation(![Equation](https://math.now.sh?from=a%2Bt*%28b-a%29)) of the faded value of x with two gradients (see the code to understand how we choose the gradients)  
    - Once those linear interpolation done we do another linear interpolation with the result of the two previous one and the faded value of y  
    - And let's do another linear interpolation with the new result and the faded value of z, we add one to it and divide by 2, now we have our result !  
    - As said earlier we can use octaves and then we reuse the same algorithms changing a bit the entries every time  

Well done !