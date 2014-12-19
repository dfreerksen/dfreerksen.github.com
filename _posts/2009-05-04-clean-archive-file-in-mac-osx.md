---
title: Clean Archive File in Mac OSX
date:  2009-05-05 03:53:15
categories:
  - Mac
tags:
  - Apple
  - Mac
---

Every time I come across a small issue I have with the Mac, there is always a way to fix it so it isn't a problem anymore.

My latest issue was when creating zip files on the Mac, the zip file acts odd on the PC. If you have ever had this problem, you know what I am talking about. The archive will usually contain a .DS_Store file and resource forks for most, if not all, files in the archive.

The easiest way to describe a resource fork is if you have a file named <span style="font-style: italic;">myimage.jpg</span>, you will have a hidden file named <span style="font-style: italic;">.myimage.jpg</span>. When you extract the zip file it will extract <span style="font-style: italic;">myimage.jpg</span> and because of this resource fork, it will try to extract the file again which will prompt you to overwrite the file or not. So if you have 30 files in the zip archive, that's a lot of confirmation.

<a href="http://junecloud.com/" target="_blank">JuneCloud</a> software has created an <a href="http://junecloud.com/software/mac/create-clean-archive.html" target="_blank">Automator action</a> to clean up those archives so they don't contain problem files.

Once you install it, Command + click or right click on the file(s) you want to zip and go to More -> Automator -> Create Clean Archive. You will be prompted to name the zip file which is optional. And you are done. Easy as that!
