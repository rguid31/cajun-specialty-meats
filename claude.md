# Project Instructions for Claude Code

## Project Overview
This is the Cajun Specialty Meats website - a business website showcasing authentic Cajun meat products and services.

## Core Principles

### Simplicity First
- **KISS Principle**: Keep it simple. Don't add features, libraries, or complexity unless explicitly requested
- Use vanilla HTML, CSS, and JavaScript unless frameworks are specifically needed
- Avoid over-engineering solutions - the simplest working solution is usually the best
- Don't add placeholder content - only implement what's been requested

### Code Quality
- Write clean, readable code with clear variable names
- Add comments only for complex logic, not obvious code
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Follow modern web standards and best practices

### Error Prevention
- **Always verify after making changes**:
  1. Check syntax is valid (no missing brackets, semicolons, quotes)
  2. Ensure all file references are correct (CSS links, JS scripts, image paths)
  3. Verify no duplicate IDs in HTML
  4. Check that all functions called actually exist
  5. Validate CSS selectors match actual HTML elements

## Development Workflow

### Before Making Changes
1. Understand what's being requested
2. Identify which files need to be modified
3. Plan the simplest approach

### After Making Changes
1. **Verify the code works**:
   - Check for syntax errors
   - Confirm file paths are correct
   - Test that functions are properly defined before use
   - Validate CSS classes/IDs match HTML elements

2. **Tell the user how to verify**:
   - How to open/refresh the page
   - What they should see if it worked
   - What to check if something looks wrong

### File Organization
```
project-root/
├── index.html          # Main homepage
├── styles.css          # Global styles
├── script.js           # Global JavaScript
├── images/             # All images
├── pages/              # Additional HTML pages (if needed)
└── README.md           # Project documentation
```

## Technical Guidelines

### HTML
- Use semantic elements appropriately
- Include proper meta tags (viewport, charset, description)
- Ensure all images have alt attributes
- Keep structure clean and indented properly

### CSS
- Use mobile-first approach (base styles for mobile, media queries for larger screens)
- Organize styles logically: layout → components → utilities
- Use CSS custom properties (variables) for colors and repeated values
- Prefer flexbox/grid over floats for layouts
- Keep specificity low - avoid deep nesting

### JavaScript
- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Avoid jQuery unless specifically requested
- Keep functions small and focused on one task
- Use event delegation for dynamic elements
- Always check if elements exist before manipulating them

### Responsive Design
- Mobile-first breakpoints:
  - Mobile: default (0-640px)
  - Tablet: 641px - 1024px
  - Desktop: 1025px+
- Test layouts work at all sizes
- Ensure touch targets are at least 44x44px on mobile

### Performance
- Optimize images before use (appropriate format and size)
- Minimize HTTP requests
- Load JavaScript at the end of body or use defer/async
- Use efficient selectors in CSS and JavaScript

### Accessibility
- Proper heading hierarchy (h1 → h2 → h3)
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation support
- ARIA labels where helpful
- Focus states visible

### Browser Compatibility
- Support modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Avoid experimental features without fallbacks
- Test that features work in target browsers

## Common Patterns

### Navigation Menu
- Semantic `<nav>` element
- Mobile hamburger menu that toggles visibility
- Active state for current page

### Forms
- Proper labels with `for` attributes
- Input validation (HTML5 + custom JS if needed)
- Clear error messages
- Submit feedback (success/error states)

### Images
- Use appropriate formats (JPEG for photos, PNG for graphics, SVG for icons/logos)
- Include width/height attributes to prevent layout shift
- Lazy load images below the fold if many exist

## Error Checking Checklist

After every change, verify:
- [ ] All opening tags have closing tags
- [ ] All brackets and parentheses are closed
- [ ] Quotes are properly paired
- [ ] File paths are correct (case-sensitive)
- [ ] CSS class/ID names match HTML exactly
- [ ] JavaScript variables are defined before use
- [ ] Event listeners are attached to existing elements
- [ ] Console has no errors (check browser dev tools)

## Communication Style

### When Completing Tasks
1. Briefly explain what you changed
2. List which files were modified
3. Provide clear verification steps
4. Mention any potential issues to watch for

### When Asking for Clarification
- Ask specific questions
- Offer 2-3 concrete options when uncertain
- Explain why clarification is needed

## Things to Avoid

- Don't add features that weren't requested
- Don't use external libraries unless necessary
- Don't write overly complex solutions
- Don't leave console.log statements in production code
- Don't use inline styles (use CSS classes instead)
- Don't ignore the simplest solution in favor of a "clever" one
- Don't make assumptions - ask if unclear

## Debugging Approach

If something doesn't work:
1. Check browser console for errors
2. Verify file paths are correct
3. Confirm IDs/classes match between HTML and CSS/JS
4. Check that all required files are linked properly
5. Test in browser dev tools (inspect element, console)

## Project-Specific Notes

**Business Type**: Cajun Specialty Meats
**Target Audience**: Local customers looking for authentic Cajun meat products
**Brand Voice**: Authentic, welcoming, traditional Southern hospitality
**Key Pages Needed**: (Add as they're defined)
- Home
- Products
- About
- Contact

---

*Remember: Simple, working code is better than complex, broken code. Always verify changes work before moving on.*