# Image Guide

This document explains which images you need for your website and where to place them.

## Required Images

### Profile Picture
- **Filename**: `profile-placeholder.jpg`
- **Location**: `images/`
- **Used in**: `index.html` (Who is Me? section)
- **Recommended size**: 300x300px (square)
- **Description**: Your professional headshot or portrait

### Project Images
- **Filenames**:
  - `placeholder-project1.jpg`
  - `placeholder-project2.jpg`
  - `placeholder-project3.jpg`
- **Location**: `images/`
- **Used in**:
  - `index.html` (Recent Work section)
  - `projects.html`
  - Individual project pages (`projects/project1.html`, etc.)
- **Recommended size**: 800x500px (16:10 ratio)
- **Description**: Screenshots or visuals of your projects

### Blog Images (Optional)
- **Filenames**:
  - `blog1.jpg`
  - `blog2.jpg`
  - `blog3.jpg`
- **Location**: `images/`
- **Used in**: `index.html` (Articles section) and blog articles
- **Recommended size**: 600x400px
- **Description**: Cover images for your blog posts

## Current Images in Folder

You already have several images in the `images/` folder:
- Multiple JPEG files with UUID-style names
- `Placeholder.jpg`

## How to Add Images

### Option 1: Rename Existing Images
You can rename your existing images to match the required filenames:

```bash
# Example - from the images folder
mv 962AE070-869D-417A-845F-B7DDCA8F4084_1_102_o.jpeg profile-placeholder.jpg
mv 97DF8092-693C-4CC6-8658-641B2311EE20_1_105_c.jpeg placeholder-project1.jpg
mv 2D9479E3-DE93-49AA-B7C8-8479D94CCAFA_1_105_c.jpeg placeholder-project2.jpg
```

### Option 2: Update HTML References
Alternatively, you can update the `src` attributes in your HTML files to point to your existing images:

**In index.html:**
```html
<!-- Change this: -->
<img src="images/profile-placeholder.jpg" alt="Profile Picture">

<!-- To this: -->
<img src="images/962AE070-869D-417A-845F-B7DDCA8F4084_1_102_o.jpeg" alt="Profile Picture">
```

### Option 3: Add New Images
Simply add new images with the required filenames to the `images/` folder.

## Image Optimization Tips

1. **Compress images** before uploading to improve page load speed
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: < 200KB for profile, < 500KB for projects

2. **Use appropriate formats**
   - JPEG for photos
   - PNG for graphics with transparency
   - WebP for better compression (optional)

3. **Maintain aspect ratios**
   - Profile: Square (1:1)
   - Projects: Landscape (16:10 or 16:9)
   - Blog: Landscape (3:2 or 16:9)

4. **Use descriptive alt text** for accessibility
   - Update the `alt` attributes in your HTML
   - Example: `alt="E-commerce website homepage showing product grid"`

## Creating Placeholder Images

If you need temporary placeholders while building your site:

### Online Tools
- [Placeholder.com](https://placeholder.com/) - Simple colored placeholders
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Lorem Picsum](https://picsum.photos/) - Random placeholder images

### Example URLs
```html
<!-- Temporary placeholders from picsum.photos -->
<img src="https://picsum.photos/300/300" alt="Placeholder">
<img src="https://picsum.photos/800/500" alt="Project Placeholder">
```

## Quick Start

To get your site running quickly:

1. Choose one of your existing images for your profile
2. Choose 3 images for your projects
3. Rename them or update the HTML references
4. Open `index.html` in a browser to see your site

## Need Help?

If images aren't showing:
1. Check that the filename matches exactly (including extension)
2. Check that the file is in the `images/` folder
3. Check the browser console (F12) for 404 errors
4. Make sure the path in the HTML is correct relative to the page

---

**Remember**: The website will work without images, but they'll show as broken image icons until you add them.
