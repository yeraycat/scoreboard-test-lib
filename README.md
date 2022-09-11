# Football World Cup Scoreboard

## TLDR

This is a component library created with React and Typescript for a coding test. The goal is to create a football scoreboard component that can be used across several projects to display the ongoing match and a history
of previous matches.

I'm using Typescript instead of Javascript mainly to reduce the testing load over the components (ts will grant me already some assumptions like prop types).

React Testing Library is used for tests, running on jest. If I have enough time I'll build a storybook instance to display the component without the need of a sepparate project.

## DevLog

### First commit, project base and library settings

In my first commit I'm just preparing the enviornment. I'm creating a new npm project, adding ts config, adding config for prettier and vscode and installing the library dependencies.

### Second commit, basic component exported from library

The next step I'm walking is adding a simple component that in the end will be the main thing that is exported from the library. I'm doing this first mainly to check how react, ts and npm will behave about creating a
library, check how if builds and be sure that I can do this just creating a package, without using a bundler like Rollup. I'd prefer to not go through all the bundler process if possible, as this is just a simple coding
test and simplicity was also a requirement of the test itself.

Once I have my empty useless component installed and running in a separate project I'll be ready to start creating tests and developing.

## Third commit, testing environment and libraries

Next I'm setting up the test environment by installing jest and react testing library. I first install jest itself, its type definitions and the jsdom jest test environment. Then I add the jest types to the tsconfig so
the ts compiler can find them.

This is not enough yet. For the actual build JSX will be transpiled by the ts compiler, but this will not happen in the jest test environment. To fix this I'm using babel and the babel plugin for jest in order to
transpile the JSX in the test files.

Actually, after trying around for a while, I think is better to use ts-jest instead of babel as ts-jest will check for types but babel will just transpile blindly. To really leverage typescript in the test environment I
need to compile the tests. I could still have a build step with the ts compiler in my test environment but this seems overcomplicated when ts-jest is already out there to be used.

I install ts-jest and create the jest config file for ts-jest. I also exclude the test files from the main/production tsconfig. We don't need the tests in a production build, and ts-jest will handle compilation for test
runs.
