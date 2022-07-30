# Jul-30, 2022

## Deletion of files -> del or rm

## Deletion of Directories.
- (Windows) rmdir -> Short for Remove directory
- Usage: rmdir <directory_name>
- (Linux) rm -rf -> Remove recursively and focefully.
- Usage: rm -rf <directory_name>

## (Copy) - cp
- Short for Copy
- When we run the copy command, we also need to give the destination.
- Usage: cp <source> <destination>
- If we want into a folder, in the destination, we put a slash.
- If we want to copy a directory, then we use cp -r.
- In case, if we also want to rename it at the destination, we give the new name in the command itself.
- Usage: cp new_file.txt another/new_file1.txt
- In the same directory if we want to give a new copy with a different name, we will use cp new_file.txt new_file1.txt

## (Move) - mv
- Usage mv <source> <destination>
- Move is also used to rename things
- Usage: mv <original_name> <new_name>

## git
- This is a CLI tool.
- This is helpful for version control.
- All the git CLI commands will start with git

## How to setup?
- Usage: git init
- init is short for initialize

## We can check the status:
- Usage: git status

## To prepare a file for commit
- Usage: git add <file_name>

## To remove an added file.
- Usage: git restore --staged <file_name>

## Once the files are ready, then to commit
- Usage: git commit -m "<commit_message>"

## To check the history
- Usage: git log

## Finally push to github
- Usage: git push

## To create a new Repository:
- repo.new (URL to type in the Browser)

## Hosting (NOT Hoisting)
- Deploying your source code to the output URL.
- If anyone opens the HOSTED URL, they will see the output.
- If anyone opens the repository url, they will see the source code.
- Example:
- Repo URL   -> https://github.com/aayusharyan/project
- Hosted URL -> https://aayusharyan.github.io/project/hello_world.txt

## To check for the remote URL (For example, github)
- Usage: git remote -v
- Here -v means view





# Asignment:
- Create a new repository (in your machine)
- Add a file named hello.txt
- Add content, "Hi, I am ..."
- Create a repository on Github.
- Push your code.
- Host your code.
- Share the hosted link.

