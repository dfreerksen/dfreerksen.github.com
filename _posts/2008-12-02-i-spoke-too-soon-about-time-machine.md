---
title: I Spoke Too Soon About Time Machine
date:  2008-12-03 05:52:25
categories:
  - Mac
tags:
  - Mac
  - Time Machine
---

I guess I spoke too soon about how great Time Machine is. At work, Time Machine works like a champ. I didn't have to do any special configurations. Just plugged it in and it does it's thing.

My Mac at home is a different story though. I've gone through three different hard drives thinking it was the drive itself. It would get to about 11Gb and consistently fail every time. I've finally decided it is Time Machine that has the problem not the drive.

If you are having issues with Time Machine and you are looking for help, you've probably seen this error message:

<a title="Time Machine Error" rel="lightbox" href="/assets/images/2009/09/time_machine_error.png"><img class="size-medium wp-image-230" title="Time Machine Error" src="/assets/images/posts/2009/09/time_machine_error-300x120.png" alt="Time Machine Error" width="300" height="120" /></a>

After a bit of investigation, my backups were failing on the file */Applications/Utilities/Console.app/Contents/Resources/Dutch.lproj/ConsoleHelp/gfx/acCess\_border\_innertopleft.gif*. For others it is speech files or some other kind of system file.

I read blog post after blog post and forum post after forum post about the way to format the external hard drive and settings for Time Machine. Nothing seemed to work for me.

The only thing that seemed to work for me was excluding the *Applications* folder from the backups. It's working fine for me now. It would be nice if I could get the *Applications* folder in the backups, but I guess it's not the end of the world. At least Time Machine is backing up like it was designed to do.

[*UPDATE*] In the list of folders to exclude in the backup, I removed the */Applications/* folder and replaced it with */Applications/Utilities/*. This still takes care of the *Console.app* giving me the Time Machine error and now my applications are being backed up.
