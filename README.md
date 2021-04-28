# front-end-challenge


---- LANDING PAGE ----

Consists in a interactive landing page with paged API's generated products list.


----------------------


This application's HTML components are:



A landing page with an introduction text and action buttons

> header tag - from line 12 to 27

>> header tag/classes -

div/.header-wraper: wraps 2 divs (.row-1, .row-2).

div/.row-1: contains the introduction text

div/.row-2: contains the action buttons



> section tag - from line 29 to 52

>> section tag/classes -

div/.form-text: contains only texts.

form/.form: includes 1 div parent wraper with inputs/labels and 1 div child wrapping the radio inputs/labels

div/.form-wraper: wraps all the inputs/labels and the div child.

div/form-radio-wraper: wraps the radio inputs/labels for styling as a block.



---- STYLE DETAILED ----


# Using Visual Studio Code's Live Sass Compiler
- Don't edit the "main.css" file in the "css" directory inside "dist", for it will be updated as the scss directory's files are updated.
- All of the crucial tags in the HTML marked in the topic above have their own "_'tag'.scss", imported in the
"main.scss" file inside the "scss" directory with their appropriated names.


# SCSS Files:

main.scss - is where to import all of the other non-compiling files (starting with and underscore).

_config.scss - is where to put all of the functions, mixins and variables to be used inside the other "_'tag'.scss" files.


_header.scss - is where the style of the header tag is located. inside of it, you will find associated with the "header-wraper" class a "background: linear-gradient" style used to slanter the gray mix white background color. It is set like that to smooth the edge line instead of the common pixeled transition from one color to another.

along-side, you'll find the classes "row-1" and "row-2", which have the purpose of aligning the div's Y axis using "display: flex" as a column to allow responsiveness after (still to be updated.).


_form.scss - is where the width and height of the section is set. it contains the following styled classes:

.form-text {} -> styles the top text ("h1" and "p" tags);

.form-wraper {} -> sets the "display: flex" as a column to align vertically all of the inputs and labels;

.form-radio-wraper {} -> organizes the 2 radio inputs as a block to be horizontally placed outside the flex column from the ".form-wraper".

