# Hipstamatic Oggl

A responsive 2 page visual community site for Hipstamatic users.

"A Community Of Creative People Capturing & Curating Their Lives Through Photography."

---

Demo: http://www.jonathanmatthey.com/hipsta

Project built using yeoman on grunt js - to make change to the code base, install yeoman

http://yeoman.io

to run the project

    grunt server

to deploy the codebase minified and packaged up

    grunt build --force

Reason I used it is it's a quick way to prototype using html5 boilerplate, compass, scss, and a bunch of useful deploy scripts.

The dist folder / version on my website is the compiled minified static file version of the site.  Just HTML CSS and js which is probably what you want to hand off to hipstamatic.

## Dev notes for hipstamatic:

- add class "curated" to line 42 of photo.html

        <div class="container photo curated">

  to make the blue text "Curated By @Bobby" appear under the photo
- add class "curated" to the anchor elements in index.html

        <a href="photo.html" class="curated">

  to make the little stars appear on the right hand corner.
- in index.html load the users photos into the #gallery section where there's 3 divs for each of the gallery categories, class names are self explanatory
- the first 10 photos do NOT have the class "lazy" which means they will be loaded on page load.  All photos with class lazy are lazy loaded when the user scrolls and the bottom of the page is 100px away from the photo.
- I've added an Ajax get of the photo.html page for a smoother experience, then push state the new URL using JavaScript.  That code has been commented out, feel free to bring it back if you want to use it.
- you'll want photo.html to be a unique URL for each photo but that's up to you how you template that server side, with a parameter or route.
- I've not tested on ie9 but it should be good.  Sometimes some of the CSS pseudo selectors need to be replaced, nth-child etc
- swipe motions on mobile for the photo page might be nice.  I've been happy using hammer.js before, it doesn't give you the native dragging carousel feel but it's good.  Otherwise swipe js does that native drag interaction

Jon