# Career Catalyst 4.0

Welcome to the codebase for Career Catalyst 4.0! 

## 📸 Adding new event photos to the gallery

Hey guys, if you're adding new event photos to the gallery section, **PLEASE don't just dump the raw 10MB camera `.jpg` files straight into the repo**. It's gonna tank our load times and eat up bandwidth like crazy. 

I wrote a quick script to handle the optimization for us. Here's all you need to do:

1. Drop your raw `.jpg` or `.png` files into the `src/assets/` folder.
2. Open the terminal at the root and run `node optimize-images.mjs`.
3. The script will automatically shrink them to a web-friendly size, convert them into super lightweight `.webp` files, and **delete** the original heavy jpegs (so you don't accidentally commit them).
4. Go into `src/components/GallerySection.jsx` and add your images there. Make sure your imports end with `.webp` now instead of `.jpeg`!

That's it. Keep the site running insanely fast 🚀.

*(P.S. If the script fails because it can't find `sharp`, just run `npm install --save-dev sharp` first to install the image processor!)*
