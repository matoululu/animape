# Animape
A simple way to animate elements on scroll, just add `data-animape`

## Demo
https://matoululu.github.io/animape/

## How to install animape

### NPM package

1.  Install the package `npm i animape`
2.  Import it into JS
```
import Animape from 'animape';
import AnimapeStyles from 'animape/animape.css';
```

### CDN
```
<link rel="stylesheet" href="https://unpkg.com/animape@latest/animape.css">
<script src="https://unpkg.com/animape@latest/animape.js"></script>
```

## How to use animape
1.  Set it up `const animape = new Animape();`
2.  Initialize it `animape.init();`
3.  Add `data-animape` to any element you wish to animate on scroll
4.  Done!


## Options

Animape let's you have control over some more specific features, these are done at initialization and at an html element level as well.

### Initialization:

      animape({
        selector: '[data-animape]', // selector for animape to target
        distance: 50 // buffer distance used to determine when to start animating
        verbose: false //set to true to see helpful console logs
      });

### Modifying the animation (optional)

You can assign a value to `data-animape` attribute, these values will determine what sort of animation the element will display.

*   **fadein**: default animation. 0 to 1 opacity
*   **fadeup**: fade in from bottom
*   **fadedown**: fade in from top
*   **fadeleft**: fade in from left
*   **faderight**: fade in from right
*   **zoomin**: zoom in from center
*   **zoomout**: zoom out from center


### Modifying the distance (optional)

You can add `data-animape-distance` to an animape element and add a value to it, this will determine the distance from the top of the viewport that the element will start animating.

### Unregistering:

If you wish to unregister an animape element you can do so by calling `animape.unregister(element);`

It is worth noting that if an element has not yet been initialized by Animape, it will not be unregistered.
