# Front-End Challenge


### LANDING PAGE

Consists in a interactive and responsive landing page with paged API's generated products list.


---

What I *was* able to accomplish:

1. Full styled and responsive landping page;

2. Render the API's information onto the HTML and style it accordingly;

3. Implementation of the landing page on Netlify.



What I *was not* able to accomplish:

1. Create an expansive list of itens with the buttom. I also tried to make page number from the API's endpoint as a variable so I could at least change pages on event click.
But for some reason that didn't work. I suspect it was due to the way I called the function fetchData, as it was read on load and the buttom event wasn't realoading the page.
Could not find a solution in time for that.

2. Make the e-mail as an HTML and have it sent to the e-mail application in the bottom form.

---




## Responsiveness First:

Inside the [scss](https://github.com/Guimelo-FE/front-end-challenge/tree/master/scss) directory there is a file named **_config.scss**.
This file contains the *@mixin* functions to apply different resolution sets:

```css
@mixin media-mobile {
    @media screen and (min-width: 600px) {
        @content;
    }    
}

@mixin media-md {
    @media screen and (min-width: 768px) {
        @content;
    }
}

@mixin media-md2 {
    @media screen and (min-width: 900px) {
        @content;
    }
}

@mixin media-lg {
    @media screen and (min-width: 1280px) {
        @content;
    }
}
```

These *media screens* are called in the **_responsive.scss** file, applying the page's respective responsive sets to each @mixin function.

Exemple:

```css
@include media-md2 {

    .products {
        .products-wraper {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
        }
    }
}
```

This changes the product list from 1 originally column in the mobile resolution to a 2 column grid for bigger screens.




## HTML components:


### 1. Header Tag - from lines 12 to 27

Purpose:

Wraps text and buttons elements using *flex* to align them. Within *header* there are *2 parent divs* with the classes **row-1** and **row-2**.
Also, the *header* tag itself is used to create the slant grey effect with *transform: skew(0deg, 20deg) translateY(-172px);* which has the angle changed along with the resolution in the **_responsive.scss** file.

**row-1** contains the text flow.

**row-2** contains the action buttons, arranged with *display: grid*.



### 2. Section Tag (top one) - from lines 29 to 61

Purpose:

Wraps text and top position form elements, using *flex* to align them. The display changes to *grid* once the resolution reaches 1280px, as set in the **_responsive.scss**.



### 3. Main Tag - from lines 63 to 74

Purpose: 

Contains an *transition-1* element, which is used again the the bottom of the page. This just creates the horizontal lines on the text's side.
It also contains empty *div* that receives the API's render into the HTML body. This *div* has the respective elements: **class="products-wraper" id="products"**
The *class* is used to wrap and style the elements. The *id* is referred inside the JavaScript code to render the API.



### 4. Section Tag (bottom one) - from lines 76 to 97

Purpose:

Wraps text and bottom position form elements, using *grid* to align them. The *form-wraper div* uses *display:flex* to arrange the *inputs* accordingly.



### 5. Footer Tag - from lines 99 to 108

Purpose:

Wraps the text elements and creates the slant style using *clip-path* since it does not cross the text.



### 6. Script Tag at the body's end.

---




## Style Detailed

### Using Visual Studio Code's Live Sass Compiler
- Don't edit the [main.css](https://github.com/Guimelo-FE/front-end-challenge/blob/master/dist/css/main.css) file in the "css" directory inside "dist", for it will be updated as the scss directory's files are updated.
- All of the crucial tags in the HTML listed in the topic above have their own *"_'tag'.scss"*, imported in the *main.scss* file inside the *scss* directory with their appropriate names.


### SCSS Files:

1. **main.scss** - Is where to import all of the other non-compiling files (starting with and underscore before their name) and to set the commonly used tags/classes styles, as:

```css
.transition-1 {
    width: 100%;
    color: $textColor;
    margin: 41px 0 41px 0;
    font-size: 18px;

    h3 {
        text-align: center;
        border-bottom: 1px solid $primaryColor;
        line-height: 0.1;

        span {
            max-width: 300px;
            background: #fff;
            padding: 0 16px 0 16px;
        }
    }
}
```

Which creates the horizontal lines on the text's side, as mentioned in topic number 3 of HTML Components.

I have set the body's display as:

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
```

In the **@mixin media-lg** resolution in the **_responsive.scss** file for a better arrengement.


2. **_config.scss** - Is where to put all functions, mixins and variables to be used inside the other *.scss* files.


3. **_header.scss** - Is where the style of the header tag is located. The angled shape is set in there and I opted to use a *transform: skew(0deg, 20deg) translateY(-172px);*.
I chose this css style because I was not making the *clip-path* work, as it did in the footer.
I set the header's elements with a compensating *skew* of -20deg so they don't lose shape. It wasn't the best solution, but it seems smooth and it works.
Their display set changes accordingly with the window resolution, so it does have changes inside the **_responsive.scss** file in:


4. **_form.scss** - Is where both, top and bottom forms are styled. I opted to share the top form style with the bottom one. The only differences they have are basically their arrengement, which is solved inside there too.
Their display set changes accordingly with the window resolution, so it does have changes inside the **_responsive.scss** file.


5. **_products.scss** - Is where the products list is set. It's style embrances the rendered HTML from the API's fetch aswell.
Their display set changes accordingly with the window resolution, so it does have changes inside the **_responsive.scss** file.
At **@mixin media-md2** the products arrengement is set as grid with 2 columns for optimization.
At **@mixin media-lg** the products arrengement is set as grid with 4 columns for optimization.


6. **_footer.scss** - Is where the footer's text and angled element are styled. It's very short and it could be put inside the *main.scss* file, but I opted to make a file for organizational purposes.


7. **_responsive.scss** - Is where all the responsive changes are set.

Summary:

**@mixin media-mobile**:

*_header.scss* changes - angle adjustments;
*_form.scss* changes;


 **@mixin media-md**:

 *_header.scss* changes - angle adjustment;


 **@mixin media-md2**:

 *_products.scss* changes - display adjustments;


 **@mixin lg**:

 *main.scss* changes - body tag adjustments;

 *_header.scss* changes - general margin and buttons adjustments;

 *_form.scss* (top) changes - display and wrapers adjustments;

 *_products.scss* changes - display and general margins adjustments;

 *_form.scss* (bottom) changes - display and general margin adjustments.




## JavaScript Logic:

First of all, in the **main.js** file, inside **dist/js** directory, you will see a variable:

```javascript
let page = 1
```

This was an attempt to make a *next page* button, which I've failed.

Next, you will see a function *fetchData*, that consumes the API and renders it.

The following line is set so I can what my response is getting.

```javascript
console.log(response)
```

I've mapped the *product* inside the API so I can use *return* and render the components into the HTML.
I used variables that are read inside the API's database and translated as information to be put inside the HTML's tags.

Since each page has 8 products, it will display 8 products, replicating the HTML tags I've put inside the return.

To get the specific tag I've set as *id="products"* I have used getElementById, and after that I chose to use *.insertAdjacent HTML* instead of *.innerHTML* to avoid any corrupting references. 



# End of README
