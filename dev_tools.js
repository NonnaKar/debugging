// **********          Get Started with Debugging JavaScript in Chrome DevTools


// Step 1: Reproduce the bug
// Finding a series of actions that consistently reproduces a bug is always the first step to debugging.


// Step 2: Get familiar with the Sources panel UI
// DevTools provides a lot of different tools for different tasks, such as changing CSS, profiling page load performance, and monitoring network requests. The Sources panel is where you debug JavaScript.
// Open DevTools by pressing Command+Option+I (Mac) or Control+Shift+I (Windows, Linux). This shortcut opens the Console panel.
// Click the Sources tab.

// Figure 4. The 3 parts of the Sources panel UI
// The File Navigator pane. !!! Every file that the page requests is listed here.
// The Code Editor pane. !!! After selecting a file in the File Navigator pane, the contents of that file are displayed here.
// The JavaScript Debugging pane. !!! Various tools for inspecting the page's JavaScript. If your DevTools window is wide, this pane is displayed to the right of the Code Editor pane.


// Step 3: Pause the code with a breakpoint
//   The console.log() method may get the job done, but breakpoints can get it done faster. 

// 1. In the JavaScript Debugging pane, click Event Listener Breakpoints to expand the section. 
// 2. Next to the Mouse event category, click Expand Expand icon. DevTools reveals a list of mouse events, such as click and mousedown. Each event has a checkbox next to it.
// 3. Check the click checkbox. DevTools is now set up to automatically pause when any click event listener executes.

// Back on the demo, click it again. DevTools pauses the demo and highlights a line of code in the Sources panel.


// Step 4: Step through the code
// On the Sources panel of DevTools, click Step into next function call 'Step into next function' to step through the execution of the onClick() function, one line at a time. 
// Click Step over next function call 'Step over next function'. DevTools executes inputsAreEmpty() without stepping into it. Notice how DevTools skips a few lines of code. 
// This is because inputsAreEmpty() evaluated to false, so the if statement's block of code didn't execute.


// Step 5: Set a line-of-code breakpoint
// Line-of-code breakpoints are the most common type of breakpoint. When you've got a specific line of code that you want to pause on, use a line-of-code breakpoint.
// 1. Look at the last line of code. To the left of the code you can see the line number of this particular line of code.
//    DevTools puts a blue icon on top of 'number'. This means that there is a line-of-code breakpoint on this line. DevTools now always pauses before this line of code is executed.   
// 2. Click Resume script execution.


// Step 6: Check variable values
// The values of 'addend1, addend2,' and sum look suspicious. They're wrapped in quotes, which means that they're strings. This is a good hypothesis for the explaining the cause of the bug. Now it's time to gather more information. DevTools provides a lot of tools for examining variable values.


// Method 1: The Scope pane
// When you're paused on a line of code, the Scope pane shows you what local and global variables are currently defined, along with the value of each variable. 
// It also shows closure variables, when applicable. 
// Double-click a variable value to edit it. 
// When you're not paused on a line of code, the Scope pane is empty.


// Method 2: Watch Expressions
// The 'Watch Expressions' tab lets you monitor the values of variables over time. As the name implies, Watch Expressions aren't just limited to variables. You can store any valid JavaScript expression in a Watch Expression. Try it now:

// 1. Click the Watch tab.
// 2. Click Add Expression Add Expression.
// 3. Type typeof sum.

// Press Enter. DevTools shows typeof sum: "string". The value to the right of the colon is the result of your Watch Expression.
// As suspected, sum is being evaluated as a string, when it should be a number. 
// You've now confirmed that this is the cause of the bug.


// Method 3: The Console
// In addition to viewing console.log() messages, you can also use the Console to evaluate arbitrary JavaScript statements. In terms of debugging, you can use the Console to test out potential fixes for bugs. Try it now:

// 1. If you don't have the Console drawer open, press Escape to open it. It opens at the bottom of your DevTools window.
// 2. In the Console, type parseInt(addend1) + parseInt(addend2). This statement works because you are paused on a line of code where addend1 and addend2 are in scope.
// 3. Press Enter. DevTools evaluates the statement and prints out 6, which is the result you expect the demo to produce.


// Step 7: Apply a fix
// You've found a fix for the bug. All that's left is to try out your fix by editing the code and re-running the demo. 
// You don't need to leave DevTools to apply the fix. 
// You can edit JavaScript code directly within the DevTools UI. Try it now:

// 1. Click Resume script execution.
// 2. In the Code Editor, replace line 31, var sum = addend1 + addend2, with var sum = parseInt(addend1) + parseInt(addend2).
// 3. Press Command+S (Mac) or Control+S (Windows, Linux) to save your change.
// 4. Click Deactivate breakpoints. It changes blue to indicate that it's active. While this is set, DevTools ignores any breakpoints you've set.
// 5. Try out the demo with different values. The demo now calculates correctly.


// **********          JavaScript Debugging Reference


// The Debugger

// The debugger is the most powerful tool in the browser developer tools, and it’s found in the Sources panel.Debugger
// The top part of the screen shows the files navigator.
// You can select any file and inspect it on the right. This is very important to set breakpoints, as we’ll see later.
// The bottom part is the actual debugger.


// Breakpoints

// When the browser loads a page, the JavaScript code is executed until a breakpoint is met.
// At this point the execution is halted and you can inspect all about your running program.
// You can check the variables values, and resume the execution of the program one line at a time.
// But first, what is a breakpoint? In its simple form, a breakpoint is a breakpoint instruction put in your code. When the browser meets it, it stops.
// This is a good option while developing. Another option is to open the file in the Sources panel and click the number on the line you want to add a breakpoint:
// Clicking again the breakpoint will remove it.
// After you add a breakpoint you can reload the page and the code will stop at that execution point when it finds the breakpoint.
// As you add the breakpoint you can see in the Breakpoints panel that form.js on line 7 has the breakpoint. You can see all your breakpoints there, and disable them temporarily.

// There are other types of breakpoints as well:

// - XHR/fetch breakpoints: triggered when any network request is sent
// - DOM breakpoints: triggered when a DOM element changes
// - Event listener breakpoints: triggered when some event happens, like a mouse click


// Scope

// In this example I set a breakpoint inside an event listener, so I had to submit a form to trigger the it.
// Now all the variables that are in the scope are printed, with their respective values. You can edit those variables by double clicking them.


// Watch variables and expressions

// Right to the Scope panel there’s the Watch panel.
// It has a + button which you can use to add any expression. For example adding name will print the name variable value, in the example Flavio. You can add name.toUpperCase() and it will print FLAVIO:


// Resume the execution

// Now the scripts are all halted since the breakpoint stopped the execution.
// There is a set of buttons above the “Paused on breakpoint” banner that let you alter this state.
// The first is in blue. Clicking it resumes the normal script execution.
// The second button is step over, and it resumes execution until the next line, and stops again.
// The next button perform a step into operation: goes into the function being executed, letting you go into the details of it.
// Step out is the opposite: goes back to the outer function calling this one.
// Those are the main ways to control the flow during debugging.


// Edit scripts

// From this devtools screen you can edit any script, also while the script is halted in its execution. Just edit the file and press cmd-S on Mac or ctrl-S on Windows/Linux.
// Of course the changes are not persisted to disk unless you are working locally and set up workspaces in the devtools, a more advanced topic.


// Inspect the call stack

// The call stack is great to see how many functions levels you are deep into the JavaScript code. It lets you move up in the stack too by clicking each function name.


// Blackbox scripts

// Often times you work with libraries where you don’t want to “step into”, you trust them and you don’t want to see their code in the call stack, for example. Like in the above case for validator.min.js, which I use for email validation.
// I trust it does a good job, so I can right-click it in the call stack and press Blackbox script. From then on, it’s impossible to step into this script code, and you happily work on just your own application code.


// Use the browser devtools to debug Node.js

// Since Node.js is built on the same engine of Chrome, v8, you can link the 2 and use the Chrome DevTools to inspect the execution of Node.js applications.
// Open your terminal and run.
// Then in Chrome type this URL: about://inspect.
// Click the Open dedicated DevTools for Node link next to the Node target, and you’ll have access to Node.js in the browser DevTools.
