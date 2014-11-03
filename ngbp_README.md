# [ngBoilerplate](http://joshdmiller.github.com/ng-boilerplate) [![Build Status](https://api.travis-ci.org/ngbp/ngbp.png?branch=v0.3.2-release)](https://travis-ci.org/ngbp/ngbp)

An opinionated kickstarter for [AngularJS](http://angularjs.org) projects.

***

## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/joshdmiller/ng-boilerplate
$ cd ng-boilerplate
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```

Finally, open `file:///path/to/ng-boilerplate/build/index.html` in your browser.

Happy hacking!

## Purpose

`ngBoilerplate` is designed to make life easy by providing a basic framework
with which to kickstart AngularJS projects. It contains a best-practice
directory structure to ensure code reusability and maximum scalability.
ngBoilerplate also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[LESS](http://lesscss.org). Lastly, it contains a sophisticated
[Grunt](http://gruntjs.org)-based build system to ensure maximum productivity.
All you have to do is clone it and start coding!

## Philosophy

The principal goal of `ngBoilerplate` is to set projects up for long-term
success.  So `ngBoilerplate` tries to follow best practices everywhere it can.
These are:

- Properly orchestrated modules to encourage drag-and-drop component re-use.
- Tests exist alongside the component they are testing with no separate `test`
  directory required; the build process should be sophisticated enough to handle
  this.
- Speaking of which, the build system should work automagically, without
  involvement from the developer. It should do what needs to be done, while
  staying out of the way. Components should end up tested, linted, compiled,
  and minified, ready for use in a production environment.
- Integration with popular tools like Bower, Karma, and LESS.
- *Encourages* test-driven development. It's the only way to code.
- A directory structure that is cogent, meaningful to new team members, and
  supporting of the above points.
- Well-documented, to show new developers *why* things are set up the way they
  are.
- It should be responsive to evidence. Community feedback is therefore crucial
  to the success of `ngBoilerplate`.

But `ngBoilerplate` is not an example of an AngularJS app: this is a
kickstarter. If you're looking for an example of what a complete, non-trivial
AngularJS app that does something real looks like, complete with a REST backend
and authentication and authorization, then take a look at
[`angular-app`](http://github.com/angular-app/angular-app), which does just
that - and does it well.

## Learn

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
ng-boilerplate/
  |- grunt-tasks/
  |- karma/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- less/
  |  |  |- main.less
  |- vendor/
  |  |- angular-bootstrap/
  |  |- bootstrap/
  |  |- placeholders/
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- Gruntfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```

What follows is a brief description of each entry, but most directories contain
their own `README.md` file with additional documentation, so browse around to
learn more.

- `karma/` - test configuration.
- `src/` - our application sources. [Read more &raquo;](src/README.md)
- `vendor/` - third-party libraries. [Bower](http://bower.io) will install
  packages here. Anything added to this directory will need to be manually added
  to `build.config.js` and `karma/karma-unit.js` to be picked up by the build
  system.
- `.bowerrc` - the Bower configuration file. This tells Bower to install
  components into the `vendor/` directory.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `build.config.js` - our customizable build settings; see "The Build System"
  below.
- `Gruntfile.js` - our build script; see "The Build System" below.
- `module.prefix` and `module.suffix` - our compiled application script is
  wrapped in these, which by default are used to place the application inside a
  self-executing anonymous function to ensure no clashes with other libraries.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.

### Detailed Installation

This section provides a little more detailed understanding of what goes into
getting `ngBoilerplate` up and running. Though `ngBoilerplate` is really simple
to use, it might help to have an understanding of the tools involved here, like
Node.js and Grunt and Bower. If you're completely new to highly organized,
modern JavaScript development, take a few short minutes to read [this overview
of the tools](tools.md) before continuing with this section.

Okay, ready to go? Here it is:

`ngBoilerplate` uses [Grunt](http://gruntjs.org) as its build system, so
[Node.js](http://nodejs.org) is required. Also, Grunt by default no longer comes
with a command-line utility and Karma and Bower must end up in your global path
for the build system to find it, so they must be installed independently. Once
you have Node.js installed, you can simply use `npm` to make it all happen:

```sh
$ npm -g install grunt-cli karma bower
```

If you're on Linux (like I am) then throw `sudo` in front of that command.  If
you're on Windows, then you're on your own.

Next, you can either clone this repository using Git, download it as a zip file
from GitHub, or merge the branch into your existing repository. Assuming you're
starting from scratch, simply clone this repository using git:

```sh
$ git clone git://github.com/joshdmiller/ng-boilerplate my-project-name
$ cd my-project-name
```

And then install the remaining build dependencies locally:

```sh
$ npm install
```

This will read the `dependencies` (empty by default) and the `devDependencies`
(which contains our build requirements) from `package.json` and install
everything needed into a folder called `node_modules/`.

There are many Bower packages used by `ngBoilerplate`, like Twitter Bootstrap
and Angular UI, which are listed in `bower.js`. To install them into the
`vendor/` directory, simply run:

```sh
$ bower install
```

In the future, should you want to add a new Bower package to your app, run the
`install` command:

```sh
$ bower install packagename --save-dev
```

The `--save-dev` flag tells Bower to add the package at its current version to
our project's `bower.js` file so should another developer download our
application (or we download it from a different computer), we can simply run the
`bower install` command as above and all our dependencies will be installed for
us. Neat!

Technically, `ngBoilerplate` is now ready to go.

However, prior to hacking on your application, you will want to modify the
`package.json` file to contain your project's information. Do not remove any
items from the `devDependencies` array as all are needed for the build process
to work.

To ensure your setup works, launch grunt:

```sh
$ grunt watch
```

The built files are placed in the `build/` directory by default. Open the
`build/index.html` file in your browser and check it out! Because everything is
compiled, no XHR requests are needed to retrieve templates, so until this needs
to communicate with your backend there is no need to run it from a web server.

`watch` is actually an alias of the `grunt-contrib-watch` that will first run a
partial build before watching for file changes. With this setup, any file that
changes will trigger only those build tasks necessary to bring the app up to
date. For example, when a template file changes, the templates are recompiled
and concatenated, but when a test/spec file changes, only the tests are run.
This allows the watch command to complete in a fraction of the time it would
ordinarily take.

In addition, if you're running a Live Reload plugin in your browser (see below),
you won't even have to refresh to see the changes! When the `watch` task detects
a file change, it will reload the page for you. Sweet.

When you're ready to push your app into production, just run the `compile`
command:

```sh
$ grunt compile
```

This will concatenate and minify your sources and place them by default into the
`bin/` directory. There will only be three files: `index.html`,
`your-app-name.js`, and `your-app-name.css`. All of the vendor dependencies like
Bootstrap styles and AngularJS itself have been added to them for super-easy
deploying. If you use any assets (`src/assets/`) then they will be copied to
`bin/` as is.

Lastly, a complete build is always available by simply running the default
task, which runs `build` and then `compile`:

```sh
$ grunt
```

### The Build System

The best way to learn about the build system is by familiarizing yourself with
Grunt and then reading through the heavily documented build script,
`Gruntfile.js`. But you don't need to do that to be very productive with
`ngBoilerplate`. What follows in this section is a quick introduction to the
tasks provided and should be plenty to get you started.

The driver of the process is the `delta` multi-task, which watches for file
changes using `grunt-contrib-watch` and executes one of nine tasks when a file
changes:

* `delta:gruntfile` - When `Gruntfile.js` changes, this task runs the linter
  (`jshint`) on that one file and reloads the configuration.
* `delta:assets` - When any file within `src/assets/` changes, all asset files
  are copied to `build/assets/`.
* `delta:html` - When `src/index.html` changes, it is compiled as a Grunt
  template, so script names, etc., are dynamically replaced with the correct
  values configured dynamically by Grunt.
* `delta:less` - When any `*.less` file within `src/` changes, the
  `src/less/main.less` file is linted and copied into
  `build/assets/ng-boilerplate.css`.
* `delta:jssrc` - When any JavaScript file within `src/` that does not end in
  `.spec.js` changes, all JavaScript sources are linted, all unit tests are run,
  and the all source files are re-copied to `build/src`.
* `delta:coffeesrc` - When any `*.coffee` file in `src/` that doesn't match
  `*.spec.coffee` changes, the Coffee scripts are compiled independently into
  `build/src` in a structure mirroring where they were in `src/` so it's easy to
  locate problems. For example, the file
  `src/common/titleService/titleService.coffee` is compiled to
  `build/src/common/titleService/titleService.js`.
* `delta:tpls` - When any `*.tpl.html` file within `src/` changes, all templates
  are put into strings in a JavaScript file (technically two, one for
  `src/common/` and another for `src/app/`) that will add the template to
  AngularJS's
  [`$templateCache`](http://docs.angularjs.org/api/ng.$templateCache) so
  template files are part of the initial JavaScript payload and do not require
  any future XHR.  The template cache files are `build/template-app.js` and
  `build/template-common.js`.
* `delta:jsunit` - When any `*.spec.js` file in `src/` changes, the test files
  are linted and the unit tests are executed.
* `delta:coffeeunit` - When any `*.spec.coffee` file in `src/` changes, the test
  files are linted, compiled their tests executed.

As covered in the previous section, `grunt watch` will execute a full build
up-front and then run any of the aforementioned `delta:*` tasks as needed to
ensure the fastest possible build. So whenever you're working on your project,
start with:

```sh
$ grunt watch
```

And everything will be done automatically!

### Build vs. Compile

To make the build even faster, tasks are placed into two categories: build and
compile. The build tasks (like those we've been discussing) are the minimal
tasks required to run your app during development.

Compile tasks, however, get your app ready for production. The compile tasks
include concatenation, minification, compression, etc. These tasks take a little
bit longer to run and are not at all necessary for development so are not called
automatically during build or watch.

To initiate a full compile, you simply run the default task:

```sh
$ grunt
```

This will perform a build and then a compile. The compiled site - ready for
uploading to the server! - is located in `bin/`, taking a cue from
traditional software development. To test that your full site works as
expected, open the `bin/index.html` file in your browser. Voila!

### Live Reload!

`ngBoilerplate` also includes [Live Reload](http://livereload.com/), so you no
longer have to refresh your page after making changes! You need a Live Reload
browser plugin for this:

- Chrome - [Chrome Webstore](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
- Firefox - [Download from Live Reload](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
- Safari - [Download from Live Reload](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)
- Internet Explorer - Surely you jest.

Note that if you're using the Chrome version with `file://` URLs (as is the
default with `ngBoilerplate`) you need to tell Live Reload to allow it. Go to
`Menu -> Tools -> Extensions` and check the "Allow access to file URLs" box next
to the Live Reload plugin.

When you load your page, click the Live Reload icon in your toolbar and
everything should work magically. w00t!

If you'd prefer to not install a browser extension, then you must add the
following to the end of the `body` tag in `index.html`:

```html
<script src="http://localhost:35729/livereload.js"></script>
```

Boom!

## Roadmap

This is a project that is not broad in scope, so there's not really much of a
wish list here. But I would like to see a couple of things:

I'd like it to be a little simpler. I want this to be a universal starting
point. If someone is starting a new AngularJS project, she should be able to
clone, merge, or download its source and immediately start doing what she needs
without renaming a bunch of files and methods or deleting spare parts. What I
have works for a first release, but I just think there is a little too much here
right now.

I'd also like to see a simple generator. Nothing like Yeoman, as there already
is one of those, but just something that allows the user to say "I want
Bootstrap but not Font Awesome and my app is called 'coolApp'. Gimme." Perhaps a
custom download builder like UI Bootstrap has. Like that. Then again, perhaps
some Yeoman generators wouldn't be out of line. I don't know. What do you think?

Naturally, I am open to all manner of ideas and suggestions. See the
"Contributing" section below.

### To Do

See the [issues list](http://github.com/joshdmiller/ng-boilerplate/issues). And
feel free to submit your own!

### Contributing

This is an opinionated kickstarter, but the opinions are fluid and
evidence-based. Don't like the way I did something? Think you know of a better
way? Have an idea to make this more useful? Let me know! You can contact me
through all the usual channels or you can open an issue on the GitHub page. If
you're feeling ambitious, you can even submit a pull request - how thoughtful
of you!

So join the team! We're good people.

# The Tools Used in `ngBoilerplate`

## Introduction

`ngBoilerplate` is standards-based, so it uses all the usual tools to manage
and develop client-side code. If you've developed modern, highly-organized
JavaScript projects before, you are probably already familiar with at least most
of these tools. What follows is a simple description of the tools of which this
project makes use and how they fit in to the `ngBoilerplate` picture.

## Git

[Git](http://git-scm.com/) is a distributed version control system.
`ngBoilerplate` uses git to manage its codebase. While in theory you don't have
to use Git once you download `ngBoilerplate`, this project makes the assumption
that you do. If you're on GitHub, I assume you already have a basic
understanding of Git, which is all you need to make effective use of this
project. You just need to be able to commit and push and junk - nothing funky.
If you're not familiar with it, check out the documentation linked to above.
GitHub also has a great [help section](https://help.github.com/).

## Node.js & NPM

[Node.js](http://nodejs.org) is a platform based on Chrome's JavaScript runtime,
called [V8](http://code.google.com/p/v8/). It allows you to develop all kinds of
software using the JavaScript you already know and love.

A great feature of Node.js is its wide variety of existing libraries and tools.
As the developer community is absolutely massive and incredibly active, Node.js
has a basic package manager called NPM that you can use to install Node.js-based
software and libraries from the command line.

While `ngBoilerplate` makes heavy use of Node.js behind the scenes, you as the
application developer don't need to really think about it much. Most of the
interaction with Node.js will occur through Grunt (see next section), so you
really only need to know how get the initial setup working.

`package.json` is an NPM package description file written in JSON. It contains
basic metadata about your application, like its name, version, and dependencies.
By default, several packages are required for the build process to work; so when
you first start with `ngBoilerplate` you have to tell NPM to install the
packages; this is covered in detail in the [main README](README.md). Some of
the required packages are Grunt build tasks (see below), while others are
command-line tools either we (or the build system) need, like Karma, Grunt, and
Bower.

Don't worry about knowing Node.js in order to use `ngBoilerplate`; Grunt is
where the magic happens.

## Grunt.js

[Grunt](http://gruntjs.com) is a JavaScript task runner that runs on top of
Node.js. Most importantly, Grunt brings us automation. There are lots of steps
that go into taking our manageable codebase and making it into a
production-ready website; we must gather, lint, test, annotate, and copy files
about. Instead of doing all of that manually, we write (and use others') Grunt
tasks to do things for us.

When we want to build our site, we can just type:

```sh
$ grunt
```

This will do everything needed and place our built code inside a folder called
`bin/`. Even more magical, we can tell Grunt to watch for file changes we make
so it can re-build our site on-the-fly:

```sh
$ grunt watch
```

The built files will be in `build/`. See the main [README](README.md) for more
info.

The next time we change a source file, Grunt will re-build the changed parts of
the site. If you have a Live Reload plugin installed in your browser, it will
even auto-refresh your browser for you. You lazy bum.

Grunt is controlled through `Gruntfile.js`. This file is heavily documented in
the source, so I will only provide a high-altitude overview here. Also note that
unless you need to modify the build process, you don't need to know anything
else from this section. The two commands above really are all you need to know
to get started with `ngBoilerplate`. But for those curious or looking to go a
little more advanced, here's what you'll find.

First, we tell Grunt which tasks we might want to use:

```js
// ...
grunt.loadNpmTasks('grunt-recess');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-jshint');
// ...
```

Each of these tasks must already be installed. Remember the dependencies from
`package.json` that NPM installed for us? Well, this is where they get used!

Then we get the opportunity to tell the tasks to behave like we want by
defining a configuration object. While we can (and do) define all sorts of
custom configuration values that we reference later on, tasks look for
configuration properties of their own name. For example, the `clean` task just
takes an array of files to delete when the task runs:

```js
clean: [ '<%= build_dir %>', '<%= compile_dir %>' ],
```

In Grunt, the `<%= varName %>` is a way of re-using configuration variables.
In the `build.config.js`, we defined what `build_dir` meant:

```js
build_dir: 'build',
```

When the clean task runs, it will delete the `build/` folder entirely so that
when our new build runs, we don't encounter any problems with stale or old
files. Most tasks, however, have considerably more complicated configuration
requirements, but I've tried to document what each one is doing and what the
configuration properties mean. If I was vague or ambiguous or just plain
unclear, please file an issue and I'll get it fixed. Boom - problem solved.

After our configuration is complete, we can define some of our own tasks. For
example, we could do the build by running all of the separate tasks that we
installed from NPM and configured as above:

```sh
$ grunt clean
$ grunt html2js
$ grunt jshint
$ grunt karma:continuous
$ grunt concat
$ grunt ngmin:dist
$ grunt uglify
$ grunt recess
$ grunt index
$ grunt copy
```

But how automated is that? So instead we define a composite task that executes
all that for us. The commands above make up the `default` tasks, which can be
run by typing *either* of these commands:

```js
$ grunt
$ grunt default
```

We also define the `watch` task discussed earlier. This is covered in more
detail in the main (README)[README.md].

Grunt is the engine behind `ngBoilerplate`. It's the magic that makes it move.
Just getting started, you won't need to alter `Gruntfile.js` at all, but
as you get into more advanced application development, you will probably need to
add more tasks and change some steps around to make this build your own.
Hopefully, this readme and the documentation within `Gruntfile.js` (as well as
of course the documentation at gruntjs.com) will set you on the right path.

## Bower

[Bower](bower.io) is a package manager for the web. It's similar in many
respects to NPM, though it is significantly simpler and only contains code for
web projects, like Twitter Bootstrap and its AngularJS counterpart Angular
Bootstrap. Bower allows us to say that our app depends in some way on these
other libraries so that we can manage all of them in one simple place.

`ngBoilerplate` comes with a `bower.json` file that looks something like this:

```js
{
  "name": "ng-boilerplate",
  "version": "0.2.0-SNAPSHOT",
  "devDependencies": {
    "angular": "~1.0.7",
    "angular-mocks": "~1.0.7",
    "bootstrap": "~2.3.2",
    "angular-bootstrap": "~0.3.0",
    "angular-ui-router": "~0.0.1",
    "angular-ui-utils": "~0.0.3"
  },
  "dependencies": {}
}
```

This file is fairly self-explanatory; it gives the package name and version
(duplicated from `package.json`, but this is unavoidable) as well as a list of
dependencies our application needs in order to work. If we simply call

```sh
$ bower install
```

it will read these three dependencies and install them into the `vendor/` folder
(along with any dependencies they have) so that we can use them in our app. If
we want to add a new package like AngularUI's
[ngGrid](http://angular-ui.github.io/ng-grid/), then we can tell Bower to
install that from the web, place it into the `vendor/` folder for us to use, and
then add it as a dependency to `bower.json`:

```js
$ bower install angular-grid --save-dev
```

Bower can also update all of our packages for us at a later date, though that
and its many other awesome features are beyond the scope of this simple
overview.

One last thing to note is that packages installed with Bower are not
standardized, so we cannot automatically add them to the build process; anything
installed with Bower (or placed in the `vendor/` directory manually) *must* be
added to your `build.config.js` file manually; look for the Bower libs included
in `ngBoilerplate` by default in there to see what I mean.

## Where to Go From Here

That's it! Now that you have a basic understanding of the tools involved, read
through the [main README](README.md) to dive another level deeper and apply what
you've learned for great good. I promise it will all make sense it short order.

Happy programming!

