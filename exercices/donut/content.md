# Math

## Projection

So our first problem is: we want to display a 2D element given a 3D element. To do so we will simply project one of the axis on another one so instead of (x,y,z) we'll get (x',y').  
![projection](https://www.researchgate.net/profile/Tim-Oates/publication/258378564/figure/fig13/AS:340774911791104@1458258478019/Perspective-projection-of-the-centroid-of-an-object-in-3D-space-onto-the-robots-image.png)
To get the calculus let's just consider: ![Equation](https://math.now.sh?from=%5Cfrac%7By'%7D%7Bz'%7D%20%3D%20%5Cfrac%7By%7D%7Bz%7D%20%3C%3D%3E%20y'%20%3D%20%5Cfrac%7Byz'%7D%7Bz%7D). We conclude that z' is a constant and so we can deducte: ![Equation](https://math.now.sh?from=%28x'%2Cy'%29%20%3D%20%28%5Cfrac%7BK1x%7D%7Bz%7D%2C%5Cfrac%7BK1y%7D%7Bz%7D%29) where z' = K1, we can also think of the distant between the pov and the donuts that we'll call K2: ![Equation](https://math.now.sh?from=%28x'%2Cy'%29%20%3D%20%28%5Cfrac%7BK1x%7D%7BK2%2Bz%7D%2C%5Cfrac%7BK1y%7D%7BK2%2Bz%7D%29)

## Torus  

As defined previously in the description, we want to draw a Torus, considered as a combinaison of 2d circle which center is a point of another 2d circle on another plan, we will consider then ![Equation](https://math.now.sh?from=%5Ctext%7BR1%7D) the radius of each single circle and ![Equation](https://math.now.sh?from=%5Ctext%7BR2%7D) the radius of the main circle.  
![torus](https://upload.wikimedia.org/wikipedia/commons/e/e7/Sphere-like_degenerate_torus.gif)
We can visualise this as the combinaison of two vector: ![Equation](https://math.now.sh?from=%28x%2Cy%2Cz%29%3D%28R2%2C0%2C0%29%2B%28R1.cos%CE%B8%2CR1.sin%CE%B8%2C0%29)
Now that we've a 2D representation, we can apply a rotation matrix over one of our axis

## Illumination

Okay okay we know where the pixels are supposed to be so let's know see how much we'll need to illuminate them depending on their position and exposition