#Ref Topics

#Javascript:

Execution context, especially lexical scope and closures.
Hoisting, function & block scoping and function expressions & declarations.
Binding – specifically call, bind, apply and lexical this.
Object prototypes, constructors and mixins.
Composition and high order functions.
Event delegation and bubbling.
Type Coercion using typeof, instanceof and Object.prototype.toString.
Handling asynchronous calls with callbacks, promises, await and async.
When to use function declarations and expressions.

#DOM

Selecting or finding nodes using document.querySelector and in older browsers document.getElementsByTagName.
Traversal up and down – Node.parentNode, Node.firstChild, Node.lastChild and Node.childNodes.
Traversal left and right – Node.previousSibling and Node.nextSibling.
Manipulation – add, remove, copy, and create nodes in the DOM tree. You should know operations such as how to change the text content of a node and toggle, remove or add a CSS classname.
Performance – touching the DOM can be expensive when you have many nodes, you should at least know about document fragments and node caching.

#CSS 

Layout – sitting elements next to each other and how to place elements in two columns vs three columns.
Responsive design – changing an element’s dimensions based on the browser width size.
Adaptive design – changing an element’s dimensions based on specific break points.
Specificity – how to calculate a selector’s specificity and how the cascade affects attributes.
Appropriate namespacing and naming of classnames.

#Html

Semantic markup.
Tag attributes, such as disabled, async, defer and when to use data-*.
Knowing how to declare your doctype (most people are not writing new pages every day and forget this) and what meta tags are available to use.
Accessibility concerns, for example, making sure an input checkbox has a larger responding area (use label “for”). Also, role=”button”, role=”presentation”, etc.

# System Design

Rendering – client-side (CSR), server-side (SSR) and universal rendering.
Layout – if you’re designing a system used by multiple development teams, you need to think about building components and if you require teams to follow a consist markup to use said components.
State management such as choosing between unidirectional data flow or two-way data binding. You should also think about if your design will follow a passive or reactive programming model, and how components related to each other for example Foo–> Bar or Foo –>Bar.
Async flow – your components may need to communicate in real-time with the server. The design you propose should consider XHR vs bidirectional calls. If your interviewer asks you to support older browsers, your design will need to choose between hidden iFrames, script tags or XHR for messaging. If not, you could propose using websockets or you might decide server-sent events (SSE) are better.
Separation of concerns – Model-View-Controller (MVC), Model-View-ViewModel (MVVM) and Model-View-Presenter (MVP) patterns.
Multi-device support – Will your design use the same implementation for the web, mobile web, and hybrid apps or will they be separate implementations? If you were building a site like Pinterest, you might consider three columns on the web but only one column on mobile devices. How would your design handle this?
Asset delivery – In large applications, it’s not uncommon to have independent teams owning their own codebases. These different codebases probably have dependencies on each other and each usually has their own pipeline to release changes to production. Your design should consider how assets are built with dependencies (code splitting), tested (unit and integration tests) and deployed. You should also think about how you will vend assets through a CDN or inline them to reduce network latency.

#Web Performance

Critical rendering path.
Service workers.
Image optimizations.
Lazy loading and bundle splitting.
General implications of HTTP/2 and server-push.
When to prefetch and preload resources.
Reduce browser reflows and when to promote an element to the GPU.
Differences between the browser layout, compositing and painting.

# Data Structures & Algorithms

    -   memory management helps
    -   O(N) and O(N Log N)

# Genearal Topics 

HTTP requests – GET and POST along with associated headers such as Cache-Control, ETag, Status Codes, and Transfer-Encoding.
REST vs RPC.
Security – when to use JSONP, CORs, and iFrame policies.

#JavaScript Inheritance Patterns

http://davidshariff.com/blog/javascript-inheritance-patterns/

=================================================================

#Concepts:

javascript objects
Prototypal inheritance
Scoping and hosting
Closures
JavaScript Callback (Higher-Order) Functions
The event loop
Event bubbling
Apply, call, and bind
Callbacks and promises, async/await
Variable and function hoisting
Currying
localstorage
Map, filter, reduce , sort of arrays

#Design Pattern:

Decorator
Factory
Singleton
Revealing module
Facade
Observer
MVC, MVP, MVVM

https://medium.freecodecamp.org/cracking-the-front-end-interview-9a34cd46237

#Data Structure Concepts:

Linked lists
Hashtables
Stacks and queues
Trees (binary trees and heaps)
Graphs

#Sorting Concepts:

Binary search
Bubble sort
Insertion sort
Merge sort
Quick sort
Selection sort

https://www.interviewcake.com/question/javascript/balanced-binary-tree
http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/
https://medium.freecodecamp.org/learn-these-core-javascript-concepts-in-just-a-few-minutes-f7a16f42c1b0
https://medium.com/@madasamy/15-javascript-concepts-that-every-nodejs-programmer-must-to-know-6894f5157cb7
https://gist.github.com/ericelliott/263f24b5ad987e2f09d2 

# RefLink

1. https://ponyfoo.com/articles/es6
2. https://github.com/sudheerj/reactjs-interview-questions
