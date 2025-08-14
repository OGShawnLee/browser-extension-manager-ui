# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

<!-- ### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.** -->

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live Site](https://browser-extension-manager-ui-kappa.vercel.app/)

## My process

### Built with

- React
- UnoCSS (CSS engine that offers a Tailwind-like experience, developed by the VueJS community)
- TypeScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned or rather, brushed up my React skills and knowledge. I had spent a lot of time working with Svelte as it simply superior, but React is still king
when it comes to job market. I am thankful that all my experience working with TypeScript and frameworks paid off as it was really easy to apply React concepts.

I am happy that I was able to handle all on my own without the need of an external library as it goes to show domain over the framework concepts and skills.
With this code I was able to handle the **theme color feature** with a simple, reausable custom hook. 
```tsx
function useColorTheme(initial: "dark" | "light") {
  const [theme, setTheme] = useState(initial);
  
  useEffect(() => {
    const theme = localStorage.getItem("x-color-theme") ?? 'light';
    
    if (theme === "light" || theme === "dark") {
      setTheme(theme);
    } else {
      setTheme("light");
      localStorage.setItem("x-color-theme", "light");
    }
  }, []);

  useEffect(() => {
    setThemeClassName(theme);
  }, [theme]);
  
  function setThemeClassName(theme: "dark" | "light") {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("x-color-theme", theme);
  }

  function toggle() {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
    setThemeClassName(theme);
  }

  return {
    theme, toggle
  }
}

export function GUIButtonTheme() {
  const { theme, toggle } = useColorTheme("light");
  return (
    <button 
      className="button w-12 h-12 flex items-center justify-center bg-neutral-100 dark:(bg-neutral-700 text-white) rounded-xl" 
      onClick={toggle}
      aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <img src={theme === 'dark' ? IconSun : IconMoon} alt="" />
      <span className="sr-only">
        {theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>
    </button>
  );
}
```

This is the part that I am most proud of. I know it is not that hard to handle the state of a simple app like this. But still, I barely remembered how React worked so I had to
look at the official documentation and in an hour I had this working. 

This custom hook **handles all the state manangement in a centralized place**. All I had to do was to call it at the top of the app and then pass
the state and functions down. **For a bigger app, it would be essential to use the Context API to reduce prop-drilling**.

```ts
import type { Extension } from "./Extension";
import data from "../db/data.json";
import { useMemo, useState } from "react";

export type ExtensionFilter = "ALL" | "ACTIVE" | "INACTIVE";

export function useExtensionState() {
  const [list, setList] = useState(data as Extension[]);
  const [filter, setFilter] = useState<ExtensionFilter>("ALL");
  const filteredList = useMemo(() => {
    if (filter === "ALL") {
      return list;
    }

    if (filter === "ACTIVE") {
      return list.filter((it) => it.isActive);
    }

    return list.filter((it) => !it.isActive);
  }, [filter, list]);
  return {
    filter,
    filteredList,
    setFilter,
    toggle(extension: Extension) {
      setList((list) => {
        return list.map((it) => {
          if (it.name === extension.name) {
            return { ...it, isActive: !it.isActive };
          }

          return it;
        });
      });
    },
    remove(extension: Extension) {
      setList((list) => {
        return list.filter((it) => it.name !== extension.name);
      });
    }
  }
}
```

### Continued development

I need to work more on React, and Vue as well to increase the changes of getting a job.

## Author

- Website - [Shawn Lee](https://www.lee-shawn-land.vercel.app)
- Frontend Mentor - [@OGShawnLee](https://www.frontendmentor.io/profile/OGShawnLee)
- Yin - [@OGShawnLee](https://www.yin-sable.app.vercel/OGShawnLee)

