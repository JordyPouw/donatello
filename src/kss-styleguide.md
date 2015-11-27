*Authors: Jordy Pouw*

--------------------------------------------------

## Table of contents
- [About Donatello](#about-donatello)
- [Directory structure](#directory-structure)
- [General principles](#general-principles)
- [Stylesheets](#stylesheets)
- [Javascript](#javascript)
- [Getting started](#getting-started)
- [Build tools](#build-tools)
- [Resources](#resources)

--------------------------------------------------

## About Donatello
Donatello, often shortened to Don or Donny is one of the four characters of the Teenage Mutant Ninja Turtles. Besides this awesome fact is it also the name of this frontend framework to quick-start your project.

--------------------------------------------------

## Directory structure
```
┌── /src
│   ├── /css
│   │   ├── /1-settings
│   │   ├── /2-tools
│   │   ├── /3-generic
│   │   ├── /4-base
│   │   ├── /5-objects
│   │   ├── /6-components
│   │   ├── /7-trumps
│   │   │   ├── /utilities
│   │   │   └── /overrides
│   │   └── main.scss
│   ├── /js
│   ├── /fonts
│   ├── /img
│   ├── /sounds
│   └── kss-styleguide.md
├── /dest
│   ├── /css
│   ├── /js
│   ├── /fonts
│   ├── /img
│   └── /sounds
├── /tmp
├── /node_modules
├── /bower_components
├── /kss_styleguide
├── /gulp_tasks
├── package.json
├── bower.json
├── kss-config.json
└── gulpfile.js
├── apple-touch-icon-precomposed.png
└── favicon.ico
```

--------------------------------------------------

## General principles
- Follow this styleguide.
- Keep folders and files organized according the current structure.
- Use spaces indentation instead of tabs indentation.
- Use 2 spaces indentation.
- All code should look like a single person typed it.
- Don't try to prematurely optimize your code; keep it readable and understandable.
- Seriously, follow this styleguide.

### HTML
- Place scripts at the bottom of the `<body>`.
- Avoid inline-css/js.
- Avoid unnecessary usage of id's, write class specific instead.
- Give images a width and height for performance improvements.

### CSS
- Use the BEM ITCSS OOCSS methodologies.
- Categorize your object, components, etc in separate files.
- Categorize your files correctly in the directories.
- Don't write prefixes. (PostCSS Autoprefixer does that for you) 
- Use em's instead of px for font-sizes (scss em function).

### JS
- Avoid global variables.
- Comment complex code blocks.

--------------------------------------------------

## Stylesheets

### itCSS methodology
Stands for Inverted Triangle CSS. It's a fully managed CSS architecture. It's not a framework or library; there's nothing to download or install. It's a collection of principles and metrics by which developers should group and order their CSS in order to keep it scalable, terse, logical, and manageable. The source order consists of 7 layers which are:

1. settings:    global variables, config switches.
2. tools:       default mixins and functions.
3. generic:     ground-zero styles.
4. base:        unclassed HTML elements.
5. objects:     cosmetic-free design patterns.
6. components:  complete chunks of UI.
7. trumps:      utilities and overrides.

### SCSS
We write our code using the preprocessor SCSS. For the sake of consistency you can only write in SCSS and not in Sass! So please don't. SCSS is globaly accepted above Sass.

### Template
```css
/* $ Component name.
   ======================================== */
.block,
.block__element,
.block__element--modifier {
  display: block;
}

/* simple comment */
.block {
  display: block;
}
```

--------------------------------------------------

## Javascript

### Template
```javascript
(function(){

  'use strict';


  var tmnt = require('./filename.js');

  function init () {
    tmnt('Cowabungaaa!!');
  }


})();
```

--------------------------------------------------

## Getting started
- First you'll read the docs above, woohoo! Good start!
- Install the development dependencies.
  + npm install
- Install the project dependencies.
  + bower install
- Boot up the project, yeaaahh!
  + gulp

--------------------------------------------------

## Build tools
- Bower: installs the frontend dependencies.
- Gulp: automates the workflow.

--------------------------------------------------

## Resources
- [Getting your head 'round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/ "http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/")
- [itCSS Methodology](https://speakerdeck.com/dafed/managing-css-projects-with-itcss "https://speakerdeck.com/dafed/managing-css-projects-with-itcss")
- [Sass vs SCSS](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better "http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better")
