---
title: "Hosting a site online"
date: "2017-08-10"
author: 'Kalle'
type: 'Post'
tags: ["web", "git", "project web site"]
published: true
---
After developing the web site locally and having reached a point at which it worked well on both desktop and mobile units, the next challenge was to make the site public by pushing the files to an online hosting service. The text below outlines the steps taken to upload the site to the hosting provider *Netlify* ([link](https://www.netlify.com/)). The approach is far from unique, but works well and is fairly simple.

# Why Netlify?


The Gatsby tutorial ([link](https://www.gatsbyjs.org/tutorial/)) suggests the hosting provider *Surge* ([link](https://surge.sh)). Then why does this post describe how setup Netlify for hosting?

The reason is that I could not find a convenient way to setup a SSL certificate with *Let's Encrypt* ([link](https://letsencrypt.org)), which enables the use of https instead of the insecure http.

In the post "What is the best static website hosting provider?" at Slant ([link](https://www.slant.co/topics/2256/~static-website-hosting-provider)) Netlify is suggested as one of the top providers for hosting a static web site. After reading through the list of features of Netlify ([link](https://www.netlify.com/features/)) I discovered that the free plan at Netlify offers several great features such as: automatic certificate generation via Let's Encrypt, forcing visitors from http to https, and deployment via Git.

# Set up hosting with Netlify
In order to enable this site to be accessed via the custom domain ksvensson.nu, the following steps were followed:

1. Upload the code to GitHub.
2. Sign up for a free Netlify account.
3. Connect the GitHub repo to Netlify.
4. Set up the DNS so that the custom domain name points towards Netlify.

## 1. Upload the code to GitHub
Syncing code via GitHub has two purposes: First, it is a convenient way to manage changes, maintain a backup and enable collaboration. Second, it makes deploying changes to the web site stored at Netlify easy. Netlify can be configured to continuously monitor a GitHub repository and automatically rebuild the site when a new commit is detected.

Therefore, make sure that the code is in a repo which is uploaded to GitHub (Netlify also supports GitLab and BitBucket). If, as in my case, the site was developed locally and outside of a Git repo, GitHub has a great guide which describes how to properly set up the connection ([link](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)).

Having followed the steps in the guide, double check that the directory `./public/` has been uploaded to GitHub. In my case, it was missing because of the `.gitignore` file. Thus, I had to manually remove the line with the text *public* from `.gitignore`. Since the name of the file starts with a period ("."), the file is not visible, but it can be accessed from the terminal. In order to edit the file, navigate to the root of the git directory and edit the file with the text editor of your choice, e.g. Vim:

```bash
cd <root of git repo>
vim .gitignore
```

## 2. Sign up for a Netlify account
This is simple. Head over to Netlify's sign up page ([link](https://app.netlify.com/signup)) and register for a free account. Don't forget to verify the account by clicking on the link that is emailed to you.

## 3. Connect the GitHub repo to Netlify
Log into Netlify, press the big green button with the text *"New site from Git"*, and follow the instructions on screen. The instructions ask for the url of the repo. This url is easy to get: simply browse to the repo from your GitHub profile and copy the url in the url field of the web browser.

The instructions also ask for the build command and the path to the files of the site. In the case of this web site, which was build with Gatsby.js, the build command is `gatsby build` and the path to the files of the site is `./public/`.

## 4. Setting up the DNS such that the custom domain points towards Netlify
This step can be performed in many different ways, depending on where the domain is registered. Netlify offers the possibility to purchase a domain, which allegedly removes the need for manual setup. Another, perhaps more common, situation is where the domain is registered with another provider. In this case, some manual setup is required.

In line with instructions in Netlify's documentation ([link](https://www.netlify.com/docs/custom-domains/#dns-configuration)) the manual setup is performed by logging into the admin console of the dns provider and adding the CNAME entries `WWW`, `@`, and `*`, all pointing to the IP address `104.198.14.52`.
