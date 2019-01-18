---
path: "/blog/building-your-first-react-app"
date: "2017-11-07"
title: "Building your first React app with create-react-app and stop worrying about webpack configuration"
cover: "./cover.jpg"
---

## What is React?

### JS


**`js:copy=true:title=''`**

```js:copy=true:title=''
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
```

**`js:copy=true:title=index.js`**

```js:copy=true:title=index.js4
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
```

**`js:title=index.js:copy=true`**

```js:title=index.js:copy=true
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
```

**`js:title=index.js`**

```js:title=index.js
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
```

**`js:copy=true`**

```js:copy=true
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
console.log('HELLO');
console.log('WORLD');
```

---
---
---

```js{1}:copy=true:highlight=true:share=fb399
console.log("4");
	console.log('4');
       console.log(`4`);
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero, blanditiis excepturi molestias soluta ut rem, at voluptatibus minus et, expedita sunt porro distinctio nam enim odio molestiae a ea.

```js{1}:copy=true:highlight=true:share=vk19:title=example.js
const x = `Hello world`;
const x = `Hello world`;
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero, blanditiis excepturi molestias soluta ut rem, at voluptatibus minus et, expedita sunt porro distinctio nam enim odio molestiae a ea.

```js{1-3}:copy=true:title=index.jsx
const x = `Hello world`;
const x = `Hello world`;
const x = `Hello world`;
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero, blanditiis excepturi molestias soluta ut rem, at voluptatibus minus et, expedita sunt porro distinctio nam enim odio molestiae a ea.

```js{1}:title=index.js:copy=true
const x = `Hello world`;
const x = `Hello world`;
const x = `Hello world`;
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```css{3, 6, 8-9}
@font-face {
	font-family: "Open Sans";
	src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
		url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
@font-face {
	font-family: "Open Sans";
	src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
		url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
@font-face {
	font-family: "Open Sans";
	src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
		url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

### HTML

Lorem `html›<meta http-equiv="x-ua-compatible" content="ie=edge">` ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque numquam tenetur assumenda nihil aspernatur `html›<noscript id="gatsby-noscript">JS me!</noscript>` corrupti natus. Quia vitae adipisci tempora! Voluptatum necessitatibus `html›<div class="yo">hi</div>`deserunt sed adipisci sit numquam labore iure.

```html:title=index.html:copy=true:share=telegram5
<footer>
	<p class="MuiTypography-root-74 MuiTypography-body1-83 MuiTypography-alignCenter-97">© 2019, Built with&nbsp;<a href="https://www.github.com/iamskok/gatsby-dev-blog-starter">Gatsby Dev Blog Starter</a></p>
</footer>
```

### Sass code block example

```sass{1-2,4,7-8}:copy=true:title=style.scss
$primary: #bada55;
$secondary: 'red';

a: {
	&:link,
	&:visited,
	&:hover,
	&:active {
		display: inline-block;
		color: $primary;
		background-color: #fff;
		padding: 10px 25px;
		text-align: center;
		text-decoration: none;
	}
}
```

### CSS

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed possimus, quidem rem ut tenetur earum totam facilis sint dignissimos inventore, commodi odit, perspiciatis non perferendis. Nisi quae necessitatibus, saepe commodi.

#### css{1}:title=style.css:copy=true

```css{1}:title=style232145115.scss:copy=true
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed possimus, quidem rem ut tenetur earum totam facilis sint dignissimos inventore, commodi odit, perspiciatis non perferendis. Nisi quae necessitatibus, saepe commodi.

#### css{1}:test=foooooooo:copy=true:title=style.css

```css{1}:test=foooooo212222:copy=true:title=style1.css
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css{1}:test=foooooooo:title=style.css:copy=true

```css{1}:test=foooooooo222:title=style.css:copy=true
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css{1}:copy=true:title=style.css:test=foooooooo

```css{1}:copy=true:title=style.css:test=foooooooo
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css{1}:title=style.css:test=foooooooo:copy=true

```css{1}:title=style.css:test=foooooooo:copy=true
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css{1}:title=style.css:copy=true:test=fooooooooo

```css{1}:title=style.css:copy=true:test=fooooooo
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css:title=style.css:copy=true

```css:title=style.css:copy=true
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css:copy=true:title=style.css

```css:copy=true:title=style.css
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css:copy=true:foo=bar

```css:copy=true:foo=bar
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css:foo=bar:copy=true

```css:foo=bar:copy=true
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css:foo=bar:title=style.css

```css:foo=bar:title=style.css
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css:title=style.css:foo=bar

```css:title=style.css:foo=bar
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css:test=gatsby:copy=true:title=style.css

```css:test=gatsby:copy=true:title=style.css
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css{}:test=gatsby:copy=true:title=style.css

```css{}:test=gatsby:copy=true:title=style.css
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```

#### css{1}:test=gatsby:copy=true:title=style.css

```css{1}:test=gatsby:copy=true:title=style.css
a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}
```


### CSS

Lorem ipsum dolor sit amet, `css›font-family: "Open Sans"` consectetur adipisicing elit. Dignissimos odit laudantium, facilis `css›url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2")` consequatur ipsum sed mollitia ratione error dolores molestias illum odio `css›@media print` ad ullam explicabo molestiae magni! Odio, adipisci sint.

```css{2-3, 9}:title=style.css
@font-face {
	font-family: "Open Sans";
	src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
		url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}

a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}

img {
	opacity: 0.5;
	filter: alpha(opacity=50);
}

@media print {
	p {
		font-family: georgia, times, serif;
	}
}
```

```css{1}:title=style.css
@font-face {
	font-family: "Open Sans";
	src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
		url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}

a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}

img {
	opacity: 0.5;
	filter: alpha(opacity=50);
}

@media print {
	p {
		font-family: georgia, times, serif;
	}
}
```

```css:title=style.css
@font-face {
	font-family: "Open Sans";
	src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
		url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}

a:link, a:visited, a:hover, a:active {
	background-color: green;
	color: white;
	padding: 10px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
}

img {
	opacity: 0.5;
	filter: alpha(opacity=50);
}

@media print {
	p {
		font-family: georgia, times, serif;
	}
}
```

#### Sass

Lorem ipsum dolor sit amet, consectetur adipisicing elit. A enim pariatur `scss›$font-stack: Helvetica`cupiditate ipsum, neque consequatur `scss›@include transform(rotate(30deg))` rem id facilis hic voluptatum officiis totam dolor quis nemo dolores, adipisci fugiat. Officia, `scss›@mixin transform($property)` pariatur.

```scss{3-4, 8}:copy=true
@import 'reset';

$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
	font: 100% $font-stack;
	color: $primary-color;
}

.nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {display: inline-block;}

	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}

@mixin transform($property) {
	-webkit-transform: $property;
	-ms-transform: $property;
	transform: $property;
}

.box {@include transform(rotate(30deg));}
```

### JavaScript

Lorem ipsum `js›import React from "react";`dolor sit amet, consectetur adipisicing elit. Commodi quia in maiores neque! Error delectus illo `js›console.log('wow')` itaque natus quaerat quam hic obcaecati odit sit, iure exercitationem aperiam facere, tempore magni!

```javascript{6-9}:copy=true
import React from "react";
import warning from "warning";
import PropTypes from "prop-types";
import invariant from "invariant";
import createContext from "create-react-context";
import { polyfill } from "react-lifecycles-compat";
import { startsWith, pick, resolve, match, insertParams, validateRedirect } from "./lib/utils";
import { globalHistory, navigate, createHistory, createMemorySource } from "./lib/history";
var createNamedContext = function createNamedContext(name, defaultValue) {
	var Ctx = createContext(defaultValue);
	Ctx.Consumer.displayName = name + ".Consumer";
	Ctx.Provider.displayName = name + ".Provider";
	return Ctx;
};
const users = ['Mark, Marry'];
const user = users[0];
console.log(`Hello ${user}`);
```

### JSX

Lorem ipsum dolor sit amet, consectetur `jsx›<Card raised={true} className={classes.card} />` adipisicing elit. Soluta veniam illum doloremque qui autem nesciunt, perspiciatis cum amet sit, nostrum ipsa, vero ipsum aut sunt! Soluta temporibus quod deserunt rem?

```jsx{3,7-9,31-34}
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import theme from './theme';

const oneColumnLayout = '(max-width: 640px) calc(100vw - 30px)';
const twoColumnLayout = '(min-width: 641px) and (max-width: 960px) calc(50vw - 40px)';
const defaultLayout = '450px';
const imgSizes = `${oneColumnLayout}, ${twoColumnLayout}, ${defaultLayout}`;
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const ImgMediaCard = (props) => {
	const {classes} = props;

	return (
		<Card raised={true} className={classes.card}>
			<CardActionArea href={props.link}>
				<Img
					imgStyle={{marginBottom: 0}}
					fluid={{...props.cover, sizes: imgSizes, aspectRatio: 16/9}}
				/>
				<CardContent className={classes.content}>
					<Typography variant="body1" className={classes.excerpt}>
						{props.excerpt}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
```

### Bash

Lorem `bash›cat << EOF >> INSTALLED_FILES` ipsum dolor sit amet, consectetur adipisicing elit. Commodi ea expedita architecto nisi magni quod molestias corporis, sapiente, illum ex hic, non, pariatur qui veniam laboriosam amet. Amet, deleniti. Quas.

```bash
pwd
/usr/home/chris/bin
ls -la
total 2
drwxr-xr-x   2 chris  chris     11 Jan 10 16:48 .
drwxr--r-x  45 chris  chris     92 Feb 14 11:10 ..
-rwxr-xr-x   1 chris  chris    444 Aug 25  2013 backup
-rwxr-xr-x   1 chris  chris    642 Jan 17 14:42 deploy

%{__python} setup.py install --root=${RPM_BUILD_ROOT} --record="INSTALLED_FILES"

touch DIRS
for i in `cat INSTALLED_FILES`; do
  if [ -f ${RPM_BUILD_ROOT}/$i ]; then
	echo $i >>FILES
  fi
  if [ -d ${RPM_BUILD_ROOT}/$i ]; then
	echo %dir $i >>DIRS
  fi
done

# Make sure we match foo.pyo and foo.pyc along with foo.py (but only once each)
sed -e "/\.py[co]$/d" -e "s/\.py$/.py*/" DIRS FILES >INSTALLED_FILES

mkdir -p ${RPM_BUILD_ROOT}/%{_mandir}/man1/
cp docs/man/* ${RPM_BUILD_ROOT}/%{_mandir}/man1/
cat << EOF >> INSTALLED_FILES
%doc %{_mandir}/man1/*"
EOF
```

### TypeScript

Lorem `typescript›function createZoo(): Animal[]` ipsum dolor sit amet, consectetur adipisicing elit. Molestias in praesentium vero accusantium eaque, consequuntur sapiente odio. At itaque, aut asperiores, consequuntur rerum numquam quos magnam ducimus illo laudantium aliquid!

```typescript
declare module "gulp-clone" {
	function Clone(): NodeJS.ReadWriteStream;
	namespace Clone {
		export function sink() : NodeJS.ReadWriteStream & {tap: () => NodeJS.ReadWriteStream};
	}
	export = Clone;
}

declare module "gulp-insert" {
	export function append(text: string | Buffer): NodeJS.ReadWriteStream;
	export function prepend(text: string | Buffer): NodeJS.ReadWriteStream;
	export function wrap(text: string | Buffer, tail: string | Buffer): NodeJS.ReadWriteStream;
	export function transform(cb: (contents: string, file: {path: string, relative: string}) => string): NodeJS.ReadWriteStream; // file is a vinyl file
}

declare module "sorcery";

function createZoo(): Animal[] {
	return [new Rhino(), new Elephant(), new Snake()];
}

enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}

interface LabelledValue {
	label?: string;
}

function printLabel(labelledObj: LabelledValue) {
	console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

class Person {
	private name: string;
	private age: number;
	private salary: number;

	constructor(name: string, age: number, salary: number) {
		this.name = name;
		this.age = age;
		this.salary = salary;
	}

	toString(): string {
		return `${this.name} (${this.age}) (${this.salary})`; // As of version 1.4
	}
}
```

### TSX

Lorem ipsum `tsx›class Clicker extends React.Component<any, IState>` dolor sit amet, consectetur adipisicing elit. Recusandae iure quod ea, accusantium nulla dolorum reiciendis, doloribus modi possimus accusamus architecto, a unde! Suscipit exercitationem cumque sint repellat similique labore.

```tsx
import * as React from 'react';

interface IState {
	clicks: number;
}

export class Clicker extends React.Component<any, IState> {
	constructor(props) {
		super(props);

		this.state = {
			clicks: 0,
		};
	}

	public clickHandler = () => {
		this.setState({ clicks: this.state.clicks + 1 });
	}

	public render() {
		return (
			<div>
				<p>You have clicked the button {this.state.clicks} time(s).</p>
				<p>
					<button onClick={this.clickHandler}>click me</button>
				</p>
			</div>
		);
	}
}
```

# Ruby

Lorem ipsum dolor sit amet, `ruby›extend ActiveSupport::Autoload` consectetur adipisicing elit. Necessitatibus fuga accusamus inventore enim eius, eos commodi quos culpa rerum vitae rem et, deserunt. Consequuntur error eligendi, animi aspernatur! Tempore, molestiae.

```ruby{5,6,10-14}
require "active_support"
require "active_support/rails"
require "action_view/version"
module ActionView
  extend ActiveSupport::Autoload
  ENCODING_FLAG = '#.*coding[:=]\s*(\S+)[ \t]*'
  eager_autoload do
	autoload :Base
	autoload :Context
	autoload :CompiledTemplates, "action_view/context"
  autoload :TestCase
  def self.eager_load!
	super
	ActionView::Helpers.eager_load!
	ActionView::Template.eager_load!
  end
end
require "active_support/core_ext/string/output_safety"
ActiveSupport.on_load(:i18n) do
  I18n.load_path << File.expand_path("action_view/locale/en.yml", __dir__)
end
```

### PHP

Lorem ipsum dolor sit amet, `php›$this->firstName = $firstName`consectetur adipisicing elit. Accusantium minus corporis sequi, doloremque reprehenderit cumque eum obcaecati natus? Sunt non beatae ex, eaque, delectus fugiat magnam libero autem consectetur repellendus.

```php
function getAdder($x) {
	return function($y) use ($x) {
		return $x + $y;
	};
}

$adder = getAdder(8);
echo $adder(2); // prints "10"

class Person
{
	public $firstName;
	public $lastName;

	public function __construct(string $firstName, string $lastName = '') { // optional second argument
		$this->firstName = $firstName;
		$this->lastName = $lastName;
	}

	public function greet() {
		return 'Hello, my name is ' . $this->firstName .
			(($this->lastName != '') ? (' ' . $this->lastName) : $this->lastName) . '.';
	}

	public static function staticGreet($firstName, $lastName) {
		return 'Hello, my name is ' . $firstName . ' ' . $lastName . '.';
	}
}
```

### C

Lorem ipsum dolor sit `c›double pop(void);` amet, consectetur adipisicing elit. Magni fuga culpa ad quam atque error at eveniet sint sit numquam voluptate blanditiis, modi quibusdam odit autem earum facere officia optio.

```c
#include <ctype.h>
#include <math.h>

#define MAXOP 100
#define NUMBER '0'
#define MAXVAL 100
#define BUFSIZE 100

void dup_stack(void);
int getop(char[]);
void push(double);
double pop(void);
void print_stack(void);
void reverse(void);
int getch(void);
void ungetch(int);

char buf[BUFSIZE];
int bufp = 0;
int sp = 0;
double val[MAXVAL];
static int ungetchar = '\0';

int main()
{
	int type;
	double op2;
	char s[MAXOP];

	while((type = getop(s)) != EOF)
	{
		switch(type)
		{
			case NUMBER:
				push(atof(s));
				break;
			case '#':
				dup_stack();
				break;
			case '*':
				push(pop() * pop());
				break;
			case '-':
				op2 = pop();
				push(pop() - op2);
				break;
			case '/':
				op2 = pop();
				if(op2 != 0.0)
					push(pop() / op2);
				else
					printf("error: zero divisor\n");
				break;
			case 's':
				push(sin(pop()));
				break;
			case '\n':
				printf("\t%.8g\n", pop());
				break;
			default:
				printf("error: unknown command %s\n", s);
				break;
		}
	}
	return 0;
}

void push(double f)
{
	if(sp < MAXVAL)
		val[sp++] = f;
	else
		printf("error: stack full\n");
}
```

### Java

Lorem ipsum dolor sit amet, `java›String binaryString = Long.toBinaryString(NUMBER)` consectetur adipisicing elit. Ipsum provident modi est aut adipisci sit ducimus quasi ab, dicta dolorum nihil quis neque veritatis nisi laudantium in! Eveniet, doloremque ipsum.

```java
package com.github.chrishantha.sample.memoryleak;

import java.util.Objects;

public abstract class Key {

	protected final String KEY;

	public Key(final long NUMBER, final long LENGTH) {
		String binaryString = Long.toBinaryString(NUMBER);
		StringBuilder keyBuilder = new StringBuilder();
		long limit = LENGTH - binaryString.length();
		for (long i = 0; i < limit; i++) {
			keyBuilder.append('0');
		}
		keyBuilder.append(binaryString);
		KEY = keyBuilder.toString();
	}

	@Override
	public final int hashCode() {
		return Objects.hash(KEY);
	}

	@Override
	public final String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append(this.getClass().getSimpleName());
		builder.append(" [key=");
		builder.append(KEY);
		builder.append("]");
		return builder.toString();
	}
}
```

### Python

Lorem ipsum dolor sit amet, `python›dirs.append(("%s-js" % contrib_name, path))` consectetur adipisicing elit. Animi, quisquam quam. Minus consequatur, voluptatum dicta molestias accusamus, autem praesentium perspiciatis aspernatur vero quia voluptate iure obcaecati non blanditiis ipsum quasi.

```python{3,4,23-24}
import os
from argparse import ArgumentParser
from subprocess import PIPE, Popen, call
import django
from django.conf import settings
from django.core.management import call_command
HAVE_JS = ['admin']
def _get_locale_dirs(resources, include_core=True):
	"""
	Return a tuple (contrib name, absolute path) for all locale directories,
	optionally including the django core catalog.
	If resources list is not None, filter directories matching resources content.
	"""
	contrib_dir = os.path.join(os.getcwd(), 'django', 'contrib')
	dirs = []
	# Collect all locale directories
	for contrib_name in os.listdir(contrib_dir):
		path = os.path.join(contrib_dir, contrib_name, 'locale')
		if os.path.isdir(path):
			dirs.append((contrib_name, path))
			if contrib_name in HAVE_JS:
				dirs.append(("%s-js" % contrib_name, path))
	if include_core:
		dirs.insert(0, ('core', os.path.join(os.getcwd(), 'django', 'conf', 'locale')))
	return dirs
```

### GraphQL

Lorem ipsum dolor sit amet, `graphql›sort: {fields:[frontmatter___date], order: DESC}` consectetur adipisicing elit. Ipsum nesciunt, placeat modi accusamus voluptates enim magni tempora qui deleniti similique autem libero voluptatibus neque incidunt, veritatis, rerum accusantium adipisci ut?

```graphql
query BlogQuery {
	site {
		siteMetadata {
			title
			author
		}
	}
	allMarkdownRemark(
		limit: 2000
		sort: { fields: [frontmatter___date], order: DESC }
	) {
		edges {
			node {
				id
				excerpt(pruneLength: 140)
				frontmatter {
					title
					date
					path
					cover {
						publicURL
						childImageSharp {
							fluid(
								maxWidth: 290
								srcSetBreakpoints: [
									290,
									330,
									2440
							]) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
}
```

### SQL

Lorem `sql›insert into dept values (1,'ACCOUNTING')` ipsum dolor sit amet, consectetur adipisicing elit. Itaque quis perspiciatis explicabo labore necessitatibus voluptatum, quia ullam earum aperiam, tempora quisquam non molestiae vero sapiente ex, reiciendis! Ad, voluptas laborum.

```sql
CREATE TABLE emp (
empno INT PRIMARY KEY,
ename VARCHAR(10),
job VARCHAR(9),
mgr INT NULL,
hiredate DATETIME,
sal NUMERIC(7,2),
comm NUMERIC(7,2) NULL,
dept INT)
begin
insert into emp values
    (1,'JOHNSON','ADMIN',6,'12-17-1990',18000,NULL,4)
insert into emp values
    (2,'HARDING','MANAGER',9,'02-02-1998',52000,300,3)
insert into emp values
    (3,'TAFT','SALES I',2,'01-02-1996',25000,500,3)
insert into emp values
    (4,'HOOVER','SALES I',2,'04-02-1990',27000,NULL,3)
insert into emp values
    (5,'LINCOLN','TECH',6,'06-23-1994',22500,1400,4)
insert into emp values
    (6,'GARFIELD','MANAGER',9,'05-01-1993',54000,NULL,4)
insert into emp values
    (7,'POLK','TECH',6,'09-22-1997',25000,NULL,4)
insert into emp values
    (8,'GRANT','ENGINEER',10,'03-30-1997',32000,NULL,2)
insert into emp values
    (9,'JACKSON','CEO',NULL,'01-01-1990',75000,NULL,4)
insert into emp values
    (10,'FILLMORE','MANAGER',9,'08-09-1994',56000,NULL,2)
insert into emp values
    (11,'ADAMS','ENGINEER',10,'03-15-1996',34000,NULL,2)
insert into emp values
    (12,'WASHINGTON','ADMIN',6,'04-16-1998',18000,NULL,4)
insert into emp values
    (13,'MONROE','ENGINEER',10,'12-03-2000',30000,NULL,2)
insert into emp values
    (14,'ROOSEVELT','CPA',9,'10-12-1995',35000,NULL,1)
end
CREATE TABLE dept (
deptno INT NOT NULL,
dname VARCHAR(14),
loc VARCHAR(13))
begin
insert into dept values (1,'ACCOUNTING','ST LOUIS')
insert into dept values (2,'RESEARCH','NEW YORK')
insert into dept values (3,'SALES','ATLANTA')
insert into dept values (4, 'OPERATIONS','SEATTLE')
end
```

![First image](1.jpg)

Sit amet, consectetur adipisicing elit. Dignissimos natus perferendis illo, maiores eum quia minima placeat sapiente minus aut, ducimus nemo, sit. Reiciendis tempora nulla, illum iusto vero accusantium.

![Second image](2.jpg)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos non consectetur laborum quis assumenda et unde velit magnam voluptate, vero explicabo neque optio reprehenderit maiores. Atque at rem nobis.

Nulla minus, sunt eos accusamus reiciendis, dolorum quidem error consequuntur amet expedita eaque. Nesciunt earum minus, expedita officia in dignissimos blanditiis deleniti, cumque ullam molestiae aspernatur. Suscipit magni facilis necessitatibus.

![Third image](3.jpg)

Expedita quidem nisi, vero ad odio vel, vitae eligendi reiciendis recusandae minima harum eaque similique sapiente, temporibus facere. Quas, corporis nisi voluptatum praesentium explicabo cumque ipsum quibusdam cum quis odit!
