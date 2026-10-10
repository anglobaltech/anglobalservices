import os
import re

app_dir = "/Users/rishabh/anglobalservices/app"

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Look for the first image inside the main content (not the hero image)
    # The hero image usually has `fill` and `className="object-cover"`
    # The main content image usually has `width={...}` and `height={...}`
    
    # Let's find all <Image tags
    # If an image has width= and height=, let's update its className
    
    modified = False
    
    # We want to replace className="..." with className="w-full h-auto object-contain"
    # for images that are in a rounded-xl container.
    
    # A simple heuristic: find `<div className="rounded-xl overflow-hidden shadow-md">`
    # and update the `<Image ... />` inside it.
    
    pattern = r'(<div className="[^"]*rounded-xl overflow-hidden[^"]*">\s*<Image[^>]*className=")([^"]*)("[^>]*>)'
    
    def replacer(match):
        prefix = match.group(1)
        old_classes = match.group(2)
        suffix = match.group(3)
        
        # Keep any classes that aren't width/height/object-fit related
        classes = old_classes.split()
        new_classes = [c for c in classes if not c.startswith('w-') and not c.startswith('h-') and not c.startswith('object-')]
        new_classes.extend(["w-full", "h-auto", "object-contain", "aspect-square"])
        
        return prefix + " ".join(new_classes) + suffix

    new_content = re.sub(pattern, replacer, content)
    
    # Also update width and height to {800} for consistency if they are inside rounded-xl
    # Actually, aspect-square will handle the height.
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        return True
    return False

completed_pages = []
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file in ['page.jsx', 'page.js']:
            path = os.path.join(root, file)
            if process_file(path):
                # Get the relative path for the user
                rel_path = os.path.relpath(root, app_dir)
                completed_pages.append(rel_path)

print("COMPLETED_PAGES:")
for p in completed_pages:
    print(f"- /{p}")
