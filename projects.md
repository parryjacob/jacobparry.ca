---
layout: default
title: Projects
---

## Projects

I'll be populating this page with any projects I work on, including a brief description of what they are.

* * *

### keepup <sup>[Source](https://github.com/parryjacob/keepup) | [PyPI](https://pypi.python.org/pypi/keepup)</sup>

`keepup` is a simple utility for keeping a predefined set of tasks, in the format of an `Upfile`, running. Providing a
curses interface and the ability to view stdout, stderr, and the ability to send input to stdin, this utility is
inspired by [Foreman](https://github.com/ddollar/foreman) and [Honcho](https://github.com/nickstenning/honcho), a Python
port of Foreman.

### ModuleBukkit <sup>[Source](https://github.com/parryjacob/ModuleBukkit)</sup>

`ModuleBukkit` is a plugin written for the (essentially) defunct [Bukkit](http://bukkit.org) project (a Minecraft server
implementation with added support for plugins). It's goal was to allow "modules" to be loaded in as a replacement for
some of the functionality provided by Bukkit. These modules were intended to be smaller pieces of code rather than
larger self-contained projects. This was born out of a desire to circumvent the method of class loading used in the
Bukkit project and to provide a more developer friendly way of defining certain properties. It favours using Java
annotations over the more traditional .yml configuration file approach.

### JSONDB <sup>[Source](https://github.com/parryjacob/JSONDB)</sup>

`JSONDB` is a dependency for `ModuleBukkit` for interacting with a database through a JSON serialization layer. It
quickly grew beyond this scope and became a more generalized database abstraction layer.
