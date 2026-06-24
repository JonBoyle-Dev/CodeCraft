export type Lesson = {
  id: string;
  title: string;
  description: string;
  xp: number;
  track: 'html' | 'css' | 'js' | 'python';
  content: string;
  challenge: {
    prompt: string;
    starterCode: string;
    solution: string;
    hint: string;
  };
};

export type Track = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  lessons: Lesson[];
};

export const tracks: Track[] = [
  {
    id: 'html',
    name: 'HTML',
    description: 'Build the skeleton of every website',
    icon: '🌐',
    color: '#F7971E',
    lessons: [
      {
        id: 'html-1',
        title: 'What is HTML?',
        description: 'Learn what HTML is and why it matters',
        xp: 50,
        track: 'html',
        content: `HTML stands for **HyperText Markup Language**. It is the building block of every webpage you've ever visited.

Think of HTML like the skeleton of a human body — it gives structure to everything on a page.

HTML uses **tags** to define elements:

\`\`\`html
<h1>Hello, World!</h1>
<p>This is a paragraph.</p>
\`\`\`

Every tag has an opening \`<tag>\` and a closing \`</tag>\`.`,
        challenge: {
          prompt: 'Write an <h1> tag with the text "CodeCraft" inside it.',
          starterCode: '<!-- Write your h1 tag here -->\n',
          solution: '<h1>CodeCraft</h1>',
          hint: 'Use <h1> to open and </h1> to close. Put your text in between.',
        },
      },
      {
        id: 'html-2',
        title: 'Headings & Paragraphs',
        description: 'Structure your content with h1–h6 and p tags',
        xp: 60,
        track: 'html',
        content: `HTML has **6 heading levels** — from \`<h1>\` (biggest) to \`<h6>\` (smallest).

\`\`\`html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<p>This is a paragraph of text.</p>
\`\`\`

Use headings to organise your page like chapters in a book.`,
        challenge: {
          prompt: 'Create a page with an h1 title, an h2 subtitle, and a paragraph of your choice.',
          starterCode: '<!-- Add your heading and paragraph here -->\n',
          solution: '<h1>My Page</h1>\n<h2>Welcome</h2>\n<p>This is my first webpage!</p>',
          hint: 'You need three tags: <h1>, <h2>, and <p>.',
        },
      },
      {
        id: 'html-3',
        title: 'Links & Images',
        description: 'Connect pages and display images',
        xp: 75,
        track: 'html',
        content: `Links use the \`<a>\` tag with an \`href\` attribute:

\`\`\`html
<a href="https://www.example.com">Click here</a>
\`\`\`

Images use the \`<img>\` tag with a \`src\` attribute:

\`\`\`html
<img src="cat.png" alt="A cute cat" />
\`\`\`

The \`alt\` text describes the image for screen readers and when the image fails to load.`,
        challenge: {
          prompt: 'Write a link to "https://www.google.com" with the text "Search the web".',
          starterCode: '<!-- Write your anchor tag here -->\n',
          solution: '<a href="https://www.google.com">Search the web</a>',
          hint: 'Use <a href="...">text</a> — put the URL inside the href quotes.',
        },
      },
    ],
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Style and beautify your HTML',
    icon: '🎨',
    color: '#21D4FD',
    lessons: [
      {
        id: 'css-1',
        title: 'What is CSS?',
        description: 'Add colour, fonts, and style to your HTML',
        xp: 50,
        track: 'css',
        content: `CSS stands for **Cascading Style Sheets**. It controls how your HTML looks.

\`\`\`css
h1 {
  color: blue;
  font-size: 32px;
}
\`\`\`

This makes every \`<h1>\` tag appear in blue at 32px size.

CSS has three parts:
1. **Selector** — what to style (\`h1\`)
2. **Property** — what to change (\`color\`)
3. **Value** — what to set it to (\`blue\`)`,
        challenge: {
          prompt: 'Write CSS to make all <p> tags have red text.',
          starterCode: '/* Write your CSS rule here */\n',
          solution: 'p {\n  color: red;\n}',
          hint: 'Use p as the selector, and color: red; as the property.',
        },
      },
    ],
  },
  {
    id: 'js',
    name: 'JavaScript',
    description: 'Make your pages interactive and dynamic',
    icon: '⚡',
    color: '#F9F871',
    lessons: [
      {
        id: 'js-1',
        title: 'Variables & Data',
        description: 'Store and use information in your programs',
        xp: 60,
        track: 'js',
        content: `Variables store data so you can use it later.

\`\`\`javascript
let name = "Alex";
let age = 14;
let isCoder = true;

console.log(name); // Alex
\`\`\`

Use \`let\` for values that can change, and \`const\` for values that stay fixed:

\`\`\`javascript
const PI = 3.14159;
\`\`\``,
        challenge: {
          prompt: 'Create a variable called "score" with the value 100, then log it.',
          starterCode: '// Write your variable here\n',
          solution: 'let score = 100;\nconsole.log(score);',
          hint: 'Use let score = 100; then console.log(score);',
        },
      },
    ],
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Write powerful programs with simple syntax',
    icon: '🐍',
    color: '#4BC0C8',
    lessons: [
      {
        id: 'py-1',
        title: 'Your First Python Program',
        description: 'Print text to the screen',
        xp: 50,
        track: 'python',
        content: `Python is one of the most popular programming languages in the world. It reads almost like English!

\`\`\`python
print("Hello, World!")
\`\`\`

The \`print()\` function outputs text to the screen. It's the first thing almost every programmer learns.`,
        challenge: {
          prompt: 'Write a print statement that outputs "I am a coder!"',
          starterCode: '# Write your print statement here\n',
          solution: 'print("I am a coder!")',
          hint: 'Use print() and put your text in quotes inside the brackets.',
        },
      },
    ],
  },
];
