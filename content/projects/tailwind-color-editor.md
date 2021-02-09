---
title: 'Tailwind Color Editor'
date: 2021-02-09T14:32:05Z
draft: false
description: 'In browser color editor for creating number scaled color palettes in the style of the tailwind color palettes.'
status: 'alpha'
projectSize: 'major'
mainImage: '/projects/tailwind-color-editor/shot_3.png'
screenshots:
  - /projects/tailwind-color-editor/shot_1.png
  - /projects/tailwind-color-editor/shot_2.png
  - /projects/tailwind-color-editor/shot_3.png
github: 'https://github.com/h-arry-smith/tailwind-color-editor'
---

## Learning Aims

I wanted to create a project that would advance my understanding of creating a non-trivial UI, with complex user interaction. I had a need for creating a tool that would allow a better interface for crafting color palettes for client projects using tailwind.

## Technology

- Vue 3
- Tailwind CSS 2.0

## Current Development

This project is currently under development between other work. At the moment it has the following features:

- Create new color lists and add colors to them
- Create auto numbering colors that get darker and lighter
- Edit colors
- Export the color list to either plain text or a tailwind config
- Add a color list from the tailwind defaults

Future development focuses on the following areas:

- Add better editing interactions, reorder colours
- Edit the whole range of colors e.g hue shift
- Better dark / light steps with appropriate shifting of HSL values to make sure they still look good
- Local storage of palettes
