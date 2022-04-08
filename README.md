# Pod request access landing page solution

## Overview

### The challenge

Build a responsive landing page based on the provided Figma design files. Implement e-mail validation.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- HTML
- CSS
- JS

## Reflection

My process for this challenge wasn't too different from that of the previous couple challenges, but I started splitting my `.css` files. I wanted to leverage the power of HTML5 for e-mail validation instead of writing a validation regex myself and avoid using JavaScript altogether, so I relied on `type="email"` for my `<input>` instead. Then, I could rely on the `:invalid` pseudo-element to hide/show the error message.

The one problem in this I found was that, even if I specify `minlength="1"`, an empty response is still accepted for some reason. Thus, it seems I still need to use JavaScript to check for empty inputs. This is a bit disappointing, as I ended up writing as much JavaScript as I probably would've needed to do explicit e-mail validation, but at least I learned something about HTML/CSS.

From comments on my previous solutions, I learned about the `<picture>` element for changing the image based on the screen width, instead of media queries. Neat! (I do feel a bit silly though in that I've been learning webdev for almost a year now and haven't learned about `<picture>`...) 

### Continued development

Today I started posting my completed solutions to Frontend Mentor and receiving feedback on them. I find this quite helpful, so I'll post them as I finish them in the future, rather than submitting 3-4 in bulk like I did today.

I want to start moving away from trying to mimic the Figma design doc exactly (i.e. to the pixel). Instead, I want to set up my own design system for spacing, like the one for Tailwind. This way, I can get used to using design systems to space things. I've already gotten used to using `em`/`rem`, and it's generally discouraged to so frequently use `px`, so this seems like a good next step for me.

### Acknowledgements

Thanks to [@isprutfromua](https://www.frontendmentor.io/profile/isprutfromua) for commenting on one of my previous challenges to let me know about the `<picture>` element.