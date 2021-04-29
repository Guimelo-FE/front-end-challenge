# front-end-challenge


---- LANDING PAGE ----

Consists in a interactive landing page with paged API's generated products list.


----------------------


This application's HTML components are:



A landing page with an introduction text and action buttons

> header tag - from lines 12 to 27

>> header tag/classes -

div/.header-wraper: wraps 2 divs (.row-1, .row-2).

div/.row-1: contains the introduction text

div/.row-2: contains the action buttons



> section tag (top) - from lines 29 to 63

>> section tag/classes -

div/.section-top-container: contains the section elements and position it.

div/.form-text: texts tags only.

div/.error: for validation.

form/.form-top: includes a div parent wraper for div child wrapping the inputs/labels.

div/.form-top-wraper: wraps all the inputs/labels and the div child.

div/form-radio-wraper: wraps the radio inputs/labels for styling as a block.



> main tag - from lines 65 to 163

>> main tag/classes -

div/.transition-1:  1 out of 2 tags classed like this. It's used to create the horizontal lines aside the text.

div/.products: contains all the products list and wraps it.

div/.products-item: wraps the products-item-img and products-item-info in a flexbox display.

button/.products-plus: button to increment the products list as a page++.



> section tag (bottom) - from lines 165 to 188

>> section (bottom) tag/classes - 

div/.transition-1:  2 out of 2 tags classed like this. It's used to create the horizontal lines aside the text.

div/.error: for form validation.

form/.form-bottom: includes 1 p tag and a div parent wraper for div child wrapping the inputs/labels.

input[type=submit]/.form-bottom-submit: submits the bottom form info.



> footer tag - from lines 190 to 199

>> footer tag/classes -

div/.skew: is a ghost div used to shape the angled grey. it was the best solution I came up with to make it responsive.
div/.footer-container: contains a parent div with text only content.



> script tag at the body's end.


# ---- STYLE DETAILED ----


# Using Visual Studio Code's Live Sass Compiler
- Don't edit the "main.css" file in the "css" directory inside "dist", for it will be updated as the scss directory's files are updated.
- All of the crucial tags in the HTML marked in the topic above have their own "_'tag'.scss", imported in the
"main.scss" file inside the "scss" directory with their appropriated names.


# SCSS Files:

main.scss - is where to import all of the other non-compiling files (starting with and underscore) and to set the commonly used tags/classes style.

_config.scss - is where to put all of the functions, mixins and variables to be used inside the other "_'tag'.scss" files.

_header.scss - is where the style of the header tag is located. The angled shape is set in there along with instruction inside the file. along-side, you'll find the classes "row-1" and "row-2", which have the purpose of aligning the div's Y axis using "display: flex" as a column to allow responsiveness after (still to be gitupdated.).

_form.scss - is where both, top and bottom forms are styled. It contains the following styled classes:

_products.scss - is where the products list is styled, along with its reactive button to show more products.

_footer.scss - is where the bottom text and angled element are styled, below the bottom form.
