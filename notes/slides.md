---
date: 2021-07-02
tags:
  - presentation
  - education
---
# Slides.com

## Parameters

- `?mouseWheel=true` - move through slides by scrolling
- `?autoSlide=5000&autoSlideStoppable=true` - automatically transition after a certain time (in milliseconds)

## Embed in iframe

To host an embedded iframe of a presentation, add this to the index.html:
```html
<html>
  <iframe id='slides' style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" width="100%" height="100%" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <script>
    let iframe = document.getElementById('slides');
    iframe.src = "https://slides.com/dennismuensterer/presentations/embed" + window.location.search + window.location.hash;
  </script>
</html>
```
