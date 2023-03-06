# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: Javascript Syntax eXchange? I forget what the acronym means but it's what allows javascript to play with HTML's toys.

Researched answer: Dang, I was close. The acronym is Javascript Syntax eXtension, or just Javascript XML. An interesting Syntactical difference would be the need to dance around Javascript's reserved keywords, like how "for" in HTMLspeak would be "HTMLfor".
***something about the phrase "syntactic sugar" really irks me...***
1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: A package manager, similar to NPM, that we use to install/run React and Jest.

***yarn is a long continuous length of interlocked fibres, used in sewing, crocheting, knitting, weaving, embroidery, ropemaking, and the production of textiles. Yarn is the package manager. gotta watch that Capitalization!***

Researched answer: running [yarn] in my terminal gives me the yarn.lock file and a node_modules folder.

3. What is a React component?

Your answer: a react component is a bit of code in its' own file, made to be reuseable in different applications. say you have a pretty box or CSS animation that you like, If you create it as a react component you can use it wherever and whenever you like!
**I'd say you could probably make a decent side hustle out of creating quality component libraries, but all these programmers just wanna "share" their code for "free" because "an open web is a better web". Dang cyber-hippies!**

Researched answer: What my prior answer says, but way smarter and more official sounding.

4. What is the difference between state values and props in React?

Your answer: state values can change, props are static.

Researched answer: Ok so apparently this topic is way more complex and technical than I realized, and there are a ton of fiddly little differences between the two, but in general a component's prop(ertie)s are much more static than its state values.

5. What is the DOM?

Your answer: Blind guess on the acronym; Document Object Manager? Regardless of what it's called, The DOM is like a transit hub, handling the import/exporting of components inside the react application.
***...heh...***
Researched answer: On the right track, but not quite deep enough. the Documents Object Model isn't quite like a Transit Hub, but more like a deployment strategy. It's what handles changes to the UI on a page, updating based on user input. React brings a Virtual DOM, greatly improving this method by internally breaking the app into a 'tree' of components, only updating whatever is necessary instead of the whole app whenever an individual element is manipulated.
 **Hey, I was close on that acronym too!**
6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: Spans are smaller! IIRC a <div> tag will start a whole new page element, which may create blocking issues (stage blocking, not programmer blocking) with other elements on a page. spans are only as big as the thing inside it, so won't take up any extra horizontal space.

Researched answer: Mostly got it, though I wasn't aware what exactly 'inline' styling meant before. great for highlighting stuff!

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: taking the stuff we've been doing with Javascript objects and applying that logic to as many things as possible while programming.
***...But this one goes to 11...***

2. Ruby: high level user-friendly (abstracted AF so it's legible by humans) programming language invented by Yukihiro "Matz" Matsumoto in the 90's during his hipster phase, because C-based languages weren't 'elegant' enough for him. 
***I jest, of course. 90's japan is an interesting period of history, and why/how anyone would create a new programming language in the middle of a huge recession must be a fascinating story.***

3. Implicit return: Does what it says on the tin. lets you skip writing explicit 'return' statements in languages that support it. Like Ruby.

4. Ruby blocks: Kinda like functions in other languages. They are the chunks of code that actually 'do' stuff.
***countdown to the Stephen Universe jokes starts now.***

5. Ruby hashes: Those are what we call the key-value pair containers in Ruby. like the objects we know in Javascript but a bit more versatile since any data type can be used as the key.