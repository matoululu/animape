# Animape
A simple way to animate elements on scroll, just add `data-animape`

## How to use animape

1.  [Download](https://github.com/matoululu/animape/) Animape
2.  Set it up `const animape = new Animape();`
3.  Initialize it `animape.init();`
4.  Add `data-animape` to any element you wish to animate on scroll
5.  Done!


## Options

Animape let's you have control over some more specific features, these are done at initialization and at an html element level as well.

### Initialization:

      
      animape({           
        selector: '[data-animape]', // selector for animape to target           
        distance: 50 // buffer distance used to determine when to start animating         
      });
      
      
    

### HTML Elements:

You can assign a value to `data-animape` attribute, these values will determine what sort of animation the element will display.

*   **fadein**: default animation. 0 to 1 opacity
*   **fadeup**: fade in from bottom
*   **fadedown**: fade in from top
*   **fadeleft**: fade in from left
*   **faderight**: fade in from right
*   **zoomin**: zoom in from center
*   **zoomout**: zoom out from center