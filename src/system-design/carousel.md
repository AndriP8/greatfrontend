## Requirements exploration

How are the images specified?
It will be a configuration option on the component and the list of images have to be specified before initializing the component.

What devices should the component support?
Desktop, tablet, and mobile.

How will the pagination buttons behave when the user is at the start/end of the image list?
It should cycle through infinitely.

Will there be animation when transitioning between images?
Yes the images should animate with horizontal translation.

## Component responsibilities

- View model / box model
  - Brain of the component, holds the configuration and the state of the components
- Images
- Prev / Next button
- Progress dot

## Data model

- Configuration
  - List of images
  - Transition duration
  - Size which is width and height
- State
  - Index of the current image
