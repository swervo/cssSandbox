Test rig for mobile CSS3 media queries
======================================

Simple rig for testing mobile CSS3 media queries in the browser thus saving:

    Resizing browser to activate the queries
    Deploying code to multiple devices

It uses an iFrame to represent the target device screen size and some simple controls to flip the orientation and switch between screen sizes.

The source code is available on <a href="http://github.com/swervoCode">github</a>. Grab it, place your application in the /apps directory and change the path in the 'placeContent' method of /scripts/main.js to set it as the iFrame src.

Alternatively you can append a query url to have it load directly in the iFrame, eg.

<a href="http://www.papersnail.co.uk/sandbox/shell/index.html?http://news.bbc.co.uk" title="BBC at default QVGA">...index.html?http://news.bbc.co.uk</a>

you can also append a further argument to specify the initial resolution, eg.

<a href="http://www.papersnail.co.uk/sandbox/shell/index.html?http://news.bbc.co.uk?VGA" title="BBC at VGA">...index.html?http://news.bbc.co.uk?VGA</a>

A good example to try here is <a href="http://www.papersnail.co.uk/sandbox/shell/index.html?http://www.colly.com/?HVGA" title="colly.com at HVGA">colly.com</a> which features a modular design that is well-suited to scaling to different device resolutions and also makes good use of CSS3 media queries.

Another excellent example is <a href="http://www.papersnail.co.uk/sandbox/shell/index.html?http://hicksdesign.co.uk/?VGA" title="Hicks Design at VGA">Hicks Design</a> which has a really nice fluid layout that scales right down to QVGA.

Obviously <a href="apps/demoApp/index.html" target="_blank">applications</a> being developed can be run directly in the browser as well. The test rig just allows easy verification of CSS across different device screen sizes and orientations.

## Resolutions included:

    QVGA 320x240 (eg. Nokia 6700)
    HVGA 480x320 (eg. iPhone 3G, 3GS)
    nHD 640x360 (eg. Nokia N8)
    VGA 640x480
    WVGA 800x480 (eg. Nokia N900, Nexus One)
    SVGA 800x640
    XGA 1024x768 (eg. iPad)

## License

The Unlicense: http://unlicense.org/ (aka: public domain)
