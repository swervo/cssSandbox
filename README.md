Test rig for responsive design
======================================

Simple rig for testing CSS3 media queries in the browser.

Utilises an iFrame to represent the target device screen size and some simple controls to flip the orientation and switch between screen sizes.

## Resolutions included:

| Name | Screen size | Notes |
| ---------- | ----------- | ----------------- |
| QVGA | 320x240 | (eg. Nokia 6700) |
| HVGA | 480x320 | (eg. iPhone 3G, 3GS) |
| iP5 | 568x320 | (eg. iPhone 5, 5S) |
| nHD | 640x360 | (eg. Nokia N8) |
| VGA | 640x480 | |
| WVGA | 800x480 | (eg. Nokia N900, Nexus One) |
| SVGA | 800x640 | |
| XGA | 1024x768 | (eg. iPad) |

## Usage:

Append a query url to have it load directly in the iFrame:

* [...index.html?http://www.bostonglobe.com](http://www.papersnail.co.uk/sandbox/shell/index.html?http://www.bostonglobe.com)

Append a further argument (from the list above) to specify the initial resolution:

* [...index.html?http://www.bostonglobe.com?iP5](http://www.papersnail.co.uk/sandbox/shell/index.html?http://www.bostonglobe.com?iP5)

# Examples

## Personal:

* [Fizzin' & Poppin'](http://www.papersnail.co.uk/sandbox/shell/index.html?http://www.papersnail.co.uk/portfolio/fizzPop/?iP5) - click airborne bubbles to pop.
* [Box reflect test](http://www.papersnail.co.uk/sandbox/shell/index.html?http://www.papersnail.co.uk/portfolio/CSSReflections/?iP5) - autoplay or manual control.
* [Responsive Notes application](http://www.papersnail.co.uk/sandbox/shell/index.html?http://www.papersnail.co.uk/portfolio/rNotes/?iP5) - switch orientation for optimised experience.
* [Responsive Contacts](http://www.papersnail.co.uk/sandbox/shell/index.html?http://www.papersnail.co.uk/portfolio/rContacts/?iP5) - switch the orientation and try the filters.

## Selected public sites:

* [Hicks Design](http://www.papersnail.co.uk/sandbox/shell/index.html?http://hicksdesign.co.uk/?VGA) - scales right down to QVGA.
* [Bootstrap](http://www.papersnail.co.uk/sandbox/shell/index.html?http://getbootstrap.com/?VGA) - popular framework for mobile first web projects.
* [Golden Grid System](http://www.papersnail.co.uk/sandbox/shell/index.html?http://goldengridsystem.com/?WVGA) - lightweight folding grid approach to responsive design.

## License

The Unlicense: http://unlicense.org/ (aka: public domain)
