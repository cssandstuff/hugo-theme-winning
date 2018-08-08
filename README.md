# Winning
#### A one page CV template for [Hugo](http://gohugo.io/).
Generates a nicely formatted CV from a markdown file.

![Winning Theme Screenshot](https://github.com/cssandstuff/hugo-theme-winning/blob/master/images/screenshot.png)

This is a Simple one page CV template.

## Basic Usage
1. Make sure to [Install hugo](https://gohugo.io/getting-started/installing/)
2. Then Let's clone a basic example

   ```git clone https://github.com/gohugoio/hugoBasicExample.git```
3. Enter to the folder

   ```cd hugoBasicExample```
4. Let's clone this theme

   ```git clone --recursive https://github.com/cssandstuff/hugo-theme-winning.git themes/winning```

5. Copy _index.md from hugoBasicExample/themes/winning/exampleSite/content/_index.md to
   hugoBasicExample/content/_index.md 
   This file shows you how you need to structure your markdown to best work with this theme.
   
   ```cp themes/winning/exampleSite/content/_index.md content/_index.md```
   
6. Let's start HUGO Server in the terminal

   ```HUGO_THEME=winning hugo server```

## PDF Generation
```
npm i html-pdf -g
```
Copy ./generatepdf.js to the root of your hugo project.
```
node ./generatepdf.js
```

## License
MIT Licensed, see [LICENSE](https://github.com/cssandstuff/hugo-theme-winning/blob/master/LICENSE.md).
