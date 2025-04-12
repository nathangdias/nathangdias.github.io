# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

You have one mission: execute *exactly* what is requested.

Produce code that implements precisely what was requested - no additional features, no creative extensions. Follow instructions to the letter. Don't make any style changes if not requested.(Like adding padding, margin etc, to elements if it's not crucial to the execution of the task)

Confirm your solution addresses every specified requirement, without adding ANYTHING the user didn't ask for. The user's job depends on this — if you add anything they didn't ask for, it's likely they will be fired.

Your value comes from precision and reliability. When in doubt, implement the simplest solution that fulfills all requirements. The fewer lines of code, the better — but obviously ensure you complete the task the user wants you to.

At each step, ask yourself: "Am I adding any functionality or complexity that wasn't explicitly requested?". This will force you to stay on track.

## Project Overview
Simple personal portfolio website using vanilla HTML, CSS, and as little JavaScript as possible.

## Build Commands
- No build process; edit files directly and view in browser
- Use browser developer tools for debugging and testing

## Code Style Guidelines
- HTML: 4-space indentation, semantic element naming
- CSS:
  - BEM-like naming conventions (block__element--modifier)
  - CSS variables for color scheme (--primary-color, --system-500, etc.)
  - Mobile-first responsive design with media queries
  - Kebab-case for class names (system-500, work-title)
- JS:
  - Clean event listeners in script tags
  - Descriptive variable names (hoverSound, clickSound)
  - Simple error handling for audio playback

## Organization
- Styles in separate CSS files with imports
- Logical grouping of related CSS properties
- Consistent formatting and structure
- Semantic class names that describe purpose (container, hero, testimonial)
