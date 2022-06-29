---
emoji: 💻
title: "Lesson 1: Introduction to Web Development"
description: "Learn how websites are built using HTML, CSS, and JavaScript"
section: 1
---

# Lesson 1: Introduction to Web Development

## Element

```html
<element>This is an HTML Element</element>

<otherelement />
```

## Basic Structure

```html
<div>
  <p>Value</p>
</div>
```

The `<p>` element is inside the `<div>` element.

## Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Head

```html
<head>
  <title>Document</title>
</head>
```

The `<head>` element is a container for metadata (data about data) and is placed inside `<html>` before `<body>`.

## Body

```html
<body>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <p>Paragraph</p>
</body>
```

The `<body>` element is a container for all the contents of an `HTML` document (Text, Images, Tables) and is placed inside `<html>` after `<head>`.

## Properties

```html
<element property="value">This is an HTML Element</element>
```

## Example: `<img>` tag

```html
<img src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg" alt="An Image" />
```

- `src` - Specifies the path to the image
- `alt` - Specifies an alternate text for the image, if the image for some reason cannot be displayed

## Add Styling

`CSS` is the language we use to style a website.
`CSS` describes how `HTML` elements should be displayed.

To add `CSS` to your `HTML` Document:

### 1. Add `CSS` inside a `<style>` element

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My HTML Website</title>

    <style>
      // This is CSS
      h1 {
        font-size: 16px;
      }
    </style>
  </head>
  <body></body>
</html>
```

### 2. Create a `.css` file and import it inside the `html` file

in `styles.css`

```css
// This is CSS
h1 {
  font-size: 16px;
}
```

in `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My HTML Website</title>

    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body></body>
</html>
```
