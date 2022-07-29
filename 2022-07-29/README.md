# Jul-29, 2022

# Introduction
- My Name is Aayush Sinha,
- I Tech Lead based out of Bangalore.
- 7+ years of experience.
- Pretty much anything in JS.

## Prerequisite
- https://git-scm.com/download/win


# Command Line Interface
- CLI
- This is a text-based interface. Here, every command that we run, we will have to type it out.
- The machine will execute whatever instruction we have given and then give output in terms of text.
- Examples, Bash, Terminal, Command Prompt, ZSH, SH, etc. etc.

# Graphical User Interface
- Instead of typing everything, we make better use of the screen and have buttons and element on which we can click and interact.

## Show the items in my folder (directory).
- (Windows) dir -> Short for directory command
- (Linux)   ls  -> Short for list command -> Alternative ll

## Knowing where you are.
- (Windows) No need, pretty good already
- (Linux) pwd -> Print Working Directory -> This will show the currect directory in which we are.

**Note: Windows uses \ for the directory structure while Linux/Unix uses / for their directory structure.

## Navigation between directories
- (Windows | Linux) cd -> Short for change directory.
- To enter a directory.
- Usage: cd <directory_name>
- In Windows, when running cd, we can ignore the casing, windows will try to auto pick. In Linux, we cannot do that. In general, we should care about casing.
- Two dots to go to the parent ..
- Usage: cd ..
- DO NOT USE cd.. ❌
- To go multiple levels in, you put directory/another_directory/child. (On windows, use \).
- For 2 or more (cd ../../..)
**Single dot, cd . -> Refers to the current directory.**

**Ctrl + C -> Cancel**

## Clearing up the screen.
- (Windows) cls -> Short for Clear Screen
- (Linux) clear -> It means clear the screen.

## Creating a new Directory
- (Windows | Linux) mkdir -> Short for make directory.
- This needs the directory name. Try to avoid spaces as much as possible.
- In a case where it is needed to have space in the directory name, put that name iside quotation marks.

**To create hidden folders, start their name with a .(dot)**

## [For Windows Only] - Changing / Navigating between drives.
- Just type the drive letter followed by colon.
- Usage -> C:
- Usage -> D:

**Food for Thought - What will happen if I have 26 pendrives already attached, taking A-Z colons and then I plug in 27th pendrive?**

**Note: Tab is for auto complete**

## vi
- This is a text Editor.
- vi runs on modes.
- To go to default mode, press Esc.
- To exit, there is command :q  (q -> quit)
- If you changed something and don't want to save, then it is :q! (! -> override)
- If you have changed something and want to save it, then it is :w  (w -> write)
- To go to insert mode, we press I.

## Manual (man)
- This is used to get information about any command.
- (Windows) info or help -> This will get information for any command.

## tail | head
- Tail will print the last 10 lines of any file.
- Head will print the first 10 lines of any file.
- Specially for large fules, we don't want to load it in the memory.
- These will just print the content without loading the file in memory.

## cat
- Displays the file contents in the terminal.
- We cannot edit this information.
- This is only READ-able.

## Deletion
- Delete a file
- (Windows) del -> Short for delete
- Usage: del <file_name>
- (Linux) rm -> Short for Remove
- Usage: rm <file_name>
- Be careful, there might not be any recycle bin to recover from.

- Delete a directory
- (Windows) rmdir -> Short for Remove Directory
- (Linux) rm -rf -> Short for remove --recursive --force

## deletion and copy/move paste 