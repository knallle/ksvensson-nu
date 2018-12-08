---
title: "Installing Python 3.x on macOS"
date: "2018-12-08"
author: 'Kalle'
type: 'Project'
tags: ['python', 'mac os']
published: true
---
This post describes how to install Python 3.x on a freshly installed Mac computer.

## Documentation
The source that guided me through the process was the [documentation](https://docs.python.org/3/using/mac.html) on the official Python website.

## Installation
Download and install the latest version of Python 3.x from [here](https://www.python.org/downloads/mac-osx/).

The installation creates the directory `/Applications/Python3.x/` which includes, among other things, the IDLE IDE, the Python Launcher application used for launching scrips via drag-and-drop or double clicking, and a script named `Update Shell Profile.command`.

## Setting up the PATH
The pre-installed version of Python that is bundled with macOS (2.7.10) is installed in `/System/Library/Frameworks/Python.framework` and `/usr/bin/python`.

The newly installed version of Python (3.x) is installed in `/Library/Frameworks/Python.framework` and `/usr/local/bin/python3`.

In order to be able to use Python 3.x to launch scripts in a shell, the path `/usr/local/bin` should be added to the shell PATH. This can either be done manually, or by running the script `Update Shell Profile.command` located in `/Applications/Python3.x/`.

### Using the fish shell
The script mentioned above does, unfortunately, not work for the `fish` shell, which I fancy. Therefore, the path must be updated manually.

The [official tutorial](https://fishshell.com/docs/current/tutorial.html#tut_path) on fish mentions how to do this. In order to prepend `/usr/local/bin` to PATH, modify or create the file `~/.config/fish/config.fish` to include

```bash
set PATH /usr/local/bin $PATH
```

## Installing pip
For a local Python installation, using pip to manage packages is what I prefer. Using Python 3.x > 3.4, pip comes pre-installed. To explicitly state that it works for Python 3, the program is named `/usr/local/bin/pip3`. Before use, pip needs to be upgraded, which is done by running

```bash
pip3 install -U pip
```

_(Note the difference between the program's name `pip3` and the argument at the end `pip`)_.

## Running scripts from the Terminal
Having properly added the correct paths to PATH, a Python 3.x script is launched by

```bash
python3 ./<script_name>.py
```

_(Note that, as with pip, a trailing '3' is added to `python` to explicitly state that the program is for Python 3.x)_.

## Configure all standard Unix variables for Finder launch
In order to have correctly working Unix environment variables for Python programs launched from the Finder, the file `~/.MacOSX/environment.plist` has to be created. Details can be found in Apple's Technical Document [QA1067](https://developer.apple.com/library/archive/qa/qa1067/).

This is however _not required_ if the scripts are run from the command line only!
