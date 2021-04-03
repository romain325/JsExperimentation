## The logic

As stated in the article (which is really really cool!), you can use rand on rgb but the result will be quite bad ://  
So let's first create a function which can create a rgb color from HSV (Hue,Saturation,Value)  

## HSV to RGB

We get the following algorithm:

```math
C = V × S
X = C × (1 - |(H / 60°) mod 2 - 1|)
m = V - C
```

![Repartition](https://www.rapidtables.com/convert/color/hsv-to-rgb/hsv-to-rgb.gif)

```math
(R,G,B) = ((R'+m)×255, (G'+m)×255, (B'+m)×255)
```

So we can create [our code](../../js/colorUtils.js) now.  

## Golden Ratio

The fact is that we can now set a fixed value for our Saturation and value and let the hue ondulate with random which is pretty cool but not enough  
We will use the Golden ratio to make things a bit smoother, we define our constant GOLDEN_RATIO = (1 + sqrt(5))/2
We simply add the golden ratio to a random number and mod 1 to get a value between 0 and 1
