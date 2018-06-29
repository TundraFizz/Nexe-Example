# Nexe Example

In order for Nexe to work, you need to ensure that you can first build Node from source. To do this, you will need to download three items:

* [Python 2.7](https://python.org/downloads/)
* [NetWide Assembler](https://nasm.us/)
* [Visual Studio 2017 build tools](https://google.com/search?q=visual+studio+2017+build+tools+download)

Now make sure that the following are added to your [environment variables path](https://google.com/search?q=add+to+environment+variables+path):

* Python 2.7
* NetWide Assembler

Clone the official Node repository: https://github.com/nodejs/node.git

Run the file: `vcbuild.bat`

You shouldn't see any errors, and when it's done a new folder called `Release` will have appeared with a working `node.exe` inside of it

For more information on building Node from source, check out the below page.

https://github.com/nodejs/node/blob/master/BUILDING.md

After you confirm that your system can properly build Node, run this command to build this Nexe example project.
`npm run build`

The only time you need to clean the build is when you want to assign a new icon to the .exe file.
`npm run clean`
