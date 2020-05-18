# This is my personal website written using CSS/HTML/JavaScript. 

This project was a lot of fun to build. It's bright, creative, interactive. The website can be reached here at https://www.angelazz.me.

## Design / User Interface 🚀

Before building the website, I jotted down a list of user interface questions. What is my goal with this website? What do the users want? What is the purpose? From thinking of those key questions first, it was easier to come up with ideas for my website.

![](Images/Questions.png)

My conclusion was that I wanted this website to represent me: my bubbliness, my passions, my interests. When the user opens the website, I want them to feel like the website embodies who I am.

After brainstorming, I drafted multiple potential layouts on paper and pencil, keeping in mind the questions I posed. I played around with multiple formats and revisited the ideas until I finally ended up with this version:

![](Images/Drafts.jpg)

The idea behind this draft here is to make it as easy as possible for users to extract information about me in an easy, interactive way.

## Implementation Explained

The reason why I made the website one continuous page instead of the typical several pages is for easy access and user experience. My first drafts, when I had multiple pages, it was slow and not the most interesting. With one page, however, simply scrolling or clicking on the accessible side bar takes you directly to your desired section.

### Navbar

This was the most difficult element to implement on my website. I wanted a navigation bar that was off to the side, and not distracting, but not so small that you don't know it's there. I eventually settled on the width of 5rem (5 x 16px). 

Next was adding icons so I that when the bar collapses, people can see the icons representing the pages. Only when they hover over the navbar should the full bar appear, with text names of each page. I did this by changing the size of the navbar to reveal more of it when the mouse hovers over it, using css hover.

Following that, linking the navbar links were no problem. However, when I hovered over each bar, it was hard to see exactly what I was clicking. So, to fix this, I made it so that the page name you are hovering over turns a different color, like so:

![](Images/navbar.jpg)

### Home (Landing)

When people come to my website, they should immediately see my name. 
But just having my name "Angela Zhang" is too boring (even if I add colorful decorations and all that).
I wanted simplicity, but also something that is intriguing. 
That's why I settled on a nice animation sequence where my name is bold and in black, stretching out and collapsing back in.

I did so by writing animations in CSS. I made a @keyframes animation for both text growing big (my name) and also a fading and growing animation for the welcome line.

```
@keyframes text {
  0% {
    color: var(--bg1);
  }
  30% {
    letter-spacing: 20px;
  }
  85% {
    letter-spacing: 8px;
  }
}

@keyframes fadeInGrow {
  0% {
    opacity: 0;
    font-size: 0;
  }
  30% {
    font-size: 14px;
  }
  100% {
    opacity:1;
    font-size: 30px;
  }
}
```

### About

I put the about page right after the landing because when people first see a personal website, they want to see a picture and the most basic information about a person first. 
I wanted something quick and snappy. Big words, key information.
I made the picture and text next to each other using flexbot. I use flex for similar reasons in the following pages.

### Projects

### Golf

### Contact

## Acknowledgments 🙏

I consulted these following sources for help on my project:

* Udemy, Fireship
* https://www.youtube.com/watch?v=Syg_9iB1vco (DarkCode)
* https://www.youtube.com/watch?v=pj9cRoyQfgA (Devinector)
* Pure scroll: https://www.youtube.com/watch?v=KbMJPNXYYnw&list=LLLH6IJEfgEKps8A4t8wqXvA&index=5&t=17s (Online Tutorials)
* Arrow box: https://www.youtube.com/watch?v=pgMIp4ghGr0 (Arjun Khara)
* Button: https://www.w3schools.com/howto/howto_css_text_buttons.asp
* Mail-to: https://css-tricks.com/snippets/html/mailto-links/
* social media buttons: https://www.youtube.com/watch?v=hqlu47FX_q8
* https://stackoverflow.com/questions/34082002/html-button-opening-link-in-new-tab/46542656

## Inspiration 
* https://blog.hubspot.com/marketing/best-personal-websites
