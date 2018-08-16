---
title: "Finding the smallest image in a set of images"
date: "2018-08-15"
author: 'Kalle'
type: 'Post'
tags: ["shell script", "imagemagick", "automation"]
published: true
---

In a project of mine, I needed to resize a set of image files with the same aspect ratio such that they all had the same absolute dimensions (in pixels). To do that, my strategy was to first find the smallest image of the set and then resize all images to match the dimension of that one.

Since the project would result in an Automator script that I would share with other mac users, I wanted it to have as few external dependencies as possible. The main piece of the project did make use of the tool `montage` of the third party library [imagemagick](), however, so other tools from imagemagick could be used. Therefore, implementing the code in a bash script seemed like a good idea.

The script is first presented in its entirety, followed by a step-by-step walkthrough:

```bash
#
# Find smallest image height and width
#

minHeight=1000000
minWidth=1000000

for f in "${@}"
do
	tmpHeight=$(identify -format "%h" $f)
	tmpWidth=$(identify -format "%w" $f)

	# Assuming all images have equal aspect ratio => only have to check along one dimension
	if test $tmpHeight -lt $minHeight
	then
		minHeight=$tmpHeight
		minWidth=$tmpWidth
	fi
done
```

First, I define two variables that will later contain the smallest height and width, respectively. In the beginning, I set them both to a value that is assumed to be larger than the smallest width/height of the image set.

```bash
minHeight=1000000
minWidth=1000000
```

I then loop through all of the arguments of the script, which are the paths to all images in the set

```bash
for f in "${@}"
do
	..
done
```

With each image `$f`, I extract the height and width using the tool `identify` of imagemagick

```bash
tmpHeight=$(identify -format "%h" $f)
tmpWidth=$(identify -format "%w" $f)
```

`identify` is capable of returning many pieces of information about an image, so in order to extract only the width and heigh, I use the `-format` flag with the formatting strings `"%h"` and `"%w"` for the height and width, respectively. More formatting strings are presented in the [documentation](https://www.imagemagick.org/script/escape.php).

The next step is to check if the dimensions of `$f` is smaller than any of the previously checked images (or than the very large numbers set initially)

```bash
# Assuming all images have equal aspect ratio => only have to check along one dimension
if test $tmpHeight -lt $minHeight
then
	minHeight=$tmpHeight
	minWidth=$tmpWidth
fi
```

As the comment states, since the aspect ratios of the images are assumed to be equal, I only have to compare the images along one of the dimensions. The comparison is done with the program `test` and its *"less than"* (*<*) operator `-lt`. `test` returns `True` if `$tmpHeight` < `$minHeight`, and `False` otherwise. Therefore, if `$f` has smaller dimensions than all previous images, `$minHeight` and `$minWidth` are updated to the height and width of `$f`.

In the end, `$tmpHeight` and `$tmpWidth` hold the smallest height and width of all of the images.