# Design

## Components

- Logo
- Image
- Main content
  - Title
  - Body text
  - Icons
- Form
  - E-mail input
  - Submit button/CTA
- Decorative dots
 
## Design system

### Colors

- Gray 800
  - CTA text
  - Main background color
- Gray 600
  - Text input background
- Gray 400
  - Icons
- Gray 200
  - Body tex
- White
  - "pod" in logo
  - Second line of header
  - Color of text in text input
- Accent
  - Logo background
  - Filter on image
  - First line of header
  - CTA bg
  - Decorative dots
- Accent hover; *not in Figma design system*
  - CTA hover
- Red; *not in Figma design system*
  - Error text, `#FB3E3E` (not provided in design system)

### Typography

- All fonts Chivo Light (font weight 400)
- Title: 52px - 62px, all caps
  - 26 - 38 on mobile
  - 48 - 56 on tablet
  - 52 - 62 on desktop
- Body: 18px - 28px
  - 15 - 25 on mobile
  - 18 - 28 on tablet and desktop
- Text input: 14 - 28, font-weight 700
- CTA text: 14 - 28, font-weight 700
- Error text: 12px, font-weight 700


## Layouts

### Mobile

#### Distinguishing features

- Vertical flow
- All boxes full width
- Host image is background on body, and receives blend
- Title and body text center-aligned
- Text input and CTA are separate

#### Dimensions

- Body
  - mt-62
  - mx-24
- Logo
  - mb-56
  - Centered at top
- Image
  - Takes up entire background
  - 375 x 667
- Main content
  - Spread out across entire page, rather than contained in box
  - Title
    - mb-16
  - Body text
    - mb-32
  - Icons
    - mb-48
    - Flex with `space-between`
    - Height 17
- Form 
  - Inputs separate
  - Text input
    - mb-16
    - px-32, py-9
    - Error message
      - 8px below input
  - CTA
    - mb-94
    - Text centered, py-9

### Tablet

#### Distinguishing features

- Icon moves to upper-left, background image to upper-right (no longer taking up full screen)
- Main content contained in a box with left edge inline with logo and bottom edge inline with background image
- CTA merged into text input
- Decorative dots in bottom left
- Text left-aligned
- Error message below input

#### Dimensions

- Body
  - mt-50
  - mx-40
- Logo
  - mb-56
  - Left-aligned at top
- Image
  - 491 x 767
- Main content
  - mb-152
  - Content left-aligned with rectangular box overlapping image
  - Leaves about 54px + 40px (x-margin) uncovered
  - Title
    - mb-32
  - Body text
    - mb-40
  - Icons
    - Now *below* form
    - Height 29
- Form
  - mb-64
  - CTA inside text input, on right
  - Text input
    - pl-32, pr-5, py-5 (note that y-padding adds together with CTA y-padding)
  - CTA
    - px-27, py-9
- Decorative dots
  - In lower-left of body, left-margin from body applies, sticks to bottom

### Desktop

#### Distinguishing features

- Midline of logo lines up with top of image
- Image detaches from top
- Decorative dots moves to right edge of image

#### Dimensions

- Body 
  - mt-102
  - Margin auto; let's say max-width is 1110px (to match with other challenges)
- Logo
  - mb-102
- Main-content
  - pt-88
  - Title
    - mb-24
  - Body text
    - mb-40
- Decorative dots
  - In lower-right of image, midline inline with image's bottom edge
  
