import { View, Text, ScrollView, StyleSheet, SafeAreaView, Pressable, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

export const challenges = [
  { id: 'c1', title: 'Build a Profile Page', difficulty: 'Easy', track: 'HTML', xp: 100, emoji: '👤', description: 'Use HTML to build a personal profile page with a heading, a short bio paragraph, and an unordered list of your hobbies.', starterCode: '<!-- Build your profile page here -->\n<h1>Your Name</h1>\n', solution: '<h1>Jane Doe</h1>\n<p>Hi! I love coding and gaming.</p>\n<ul>\n  <li>Coding</li>\n  <li>Gaming</li>\n  <li>Reading</li>\n</ul>', hint: 'Use <h1> for your name, <p> for your bio, and <ul> with <li> items for hobbies.' },
  { id: 'c2', title: 'Style a Menu', difficulty: 'Easy', track: 'CSS', xp: 120, emoji: '🎨', description: 'Write CSS to style a navigation menu. Make the background dark, text white, and add a hover colour change.', starterCode: '/* Style the nav and nav a elements */\nnav {\n\n}\nnav a {\n\n}\nnav a:hover {\n\n}', solution: 'nav {\n  background-color: #333;\n  padding: 10px;\n}\nnav a {\n  color: white;\n  text-decoration: none;\n  margin: 0 10px;\n}\nnav a:hover {\n  color: #6C63FF;\n}', hint: 'Set background-color on nav, color: white on nav a, and a different color on nav a:hover.' },
  { id: 'c3', title: 'Click Counter', difficulty: 'Medium', track: 'JS', xp: 200, emoji: '🖱️', description: 'Write JavaScript that counts how many times a button is clicked and displays the count on the page.', starterCode: '// Track the count and update the display\nlet count = 0;\n\nfunction handleClick() {\n  // Add your code here\n}', solution: 'let count = 0;\n\nfunction handleClick() {\n  count++;\n  document.getElementById("display").textContent = "Count: " + count;\n}', hint: 'Increment count with count++, then update a DOM element\'s textContent.' },
  { id: 'c4', title: 'Number Guesser', difficulty: 'Medium', track: 'Python', xp: 180, emoji: '🎲', description: 'Write a Python program that picks a random number 1–10 and lets the user guess until they get it right.', starterCode: 'import random\n\nsecret = random.randint(1, 10)\n# Write your guessing loop here', solution: 'import random\n\nsecret = random.randint(1, 10)\nguess = 0\nwhile guess != secret:\n    guess = int(input("Guess (1-10): "))\n    if guess < secret:\n        print("Too low!")\n    elif guess > secret:\n        print("Too high!")\nprint("Correct!")', hint: 'Use a while loop that keeps running until guess equals secret.' },
  { id: 'c5', title: 'Dark Mode Toggle', difficulty: 'Hard', track: 'CSS + JS', xp: 300, emoji: '🌙', description: 'Build a dark mode toggle. Clicking a button switches the page between a light and dark theme using a CSS class.', starterCode: '// Toggle a "dark" class on document.body\nfunction toggleDark() {\n  // Your code here\n}', solution: 'function toggleDark() {\n  document.body.classList.toggle("dark");\n}', hint: 'Use document.body.classList.toggle("dark") — it adds the class if missing, removes it if present.' },
  { id: 'c6', title: 'FizzBuzz', difficulty: 'Easy', track: 'Python', xp: 100, emoji: '🔢', description: 'The classic! Print numbers 1–30. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for both print "FizzBuzz".', starterCode: '# Write FizzBuzz for numbers 1 to 30\n', solution: 'for i in range(1, 31):\n    if i % 15 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)', hint: 'Check for multiples of both 3 AND 5 first (i % 15 == 0), then check each separately.' },
  { id: 'c7', title: 'Java Calculator', difficulty: 'Medium', track: 'Java', xp: 220, emoji: '🧮', description: 'Write a Java method that takes two numbers and an operator (+, -, *, /) as a char, and returns the result.', starterCode: 'public static double calculate(double a, double b, char op) {\n    // Return the result based on op\n}', solution: 'public static double calculate(double a, double b, char op) {\n    if (op == \'+\') return a + b;\n    if (op == \'-\') return a - b;\n    if (op == \'*\') return a * b;\n    if (op == \'/\') return a / b;\n    return 0;\n}', hint: 'Use a series of if statements comparing op to each operator character.' },
  { id: 'c8', title: 'Delphi Grade Checker', difficulty: 'Easy', track: 'Delphi', xp: 110, emoji: '📝', description: 'Write a Delphi program that reads a score (0-100) and prints the grade: A (90+), B (70+), C (50+), or F.', starterCode: "program GradeChecker;\nvar\n  score: Integer;\nbegin\n  score := 75; // Change this to test\n  // Write your if/then/else here\nend.", solution: "program GradeChecker;\nvar\n  score: Integer;\nbegin\n  score := 75;\n  if score >= 90 then\n    WriteLn('A')\n  else if score >= 70 then\n    WriteLn('B')\n  else if score >= 50 then\n    WriteLn('C')\n  else\n    WriteLn('F');\nend.", hint: 'Use nested if/else if in Delphi. Remember: no semicolon before else!' },
  { id: 'c9', title: 'Git Feature Workflow', difficulty: 'Easy', track: 'Git', xp: 120, emoji: '🌿', description: 'Write the four Git commands to: create and switch to a branch called "add-login", stage all files, commit with message "Add login page", then merge back into main.', starterCode: '# 1. Create and switch to branch\n\n# 2. Stage all files\n\n# 3. Commit with message "Add login page"\n\n# 4. Switch back to main and merge', solution: 'git checkout -b add-login\ngit add .\ngit commit -m "Add login page"\ngit checkout main\ngit merge add-login', hint: 'Use git checkout -b to create and switch in one step. Merge requires switching to main first.' },
  { id: 'c10', title: 'Fix the .gitignore', difficulty: 'Easy', track: 'Git', xp: 100, emoji: '🔒', description: 'This .gitignore is missing two critical entries. Add the line to ignore the .env file (secrets) and the node_modules/ folder (dependencies).', starterCode: '# .gitignore\ndist/\n*.log\n# Add the two missing entries below', solution: '# .gitignore\ndist/\n*.log\n.env\nnode_modules/', hint: 'The secrets file is .env (with a dot) and the dependencies folder is node_modules/ (with a slash).' },
  { id: 'c11', title: 'GitHub Actions CI', difficulty: 'Medium', track: 'GitHub', xp: 220, emoji: '🐙', description: 'Write a GitHub Actions workflow that triggers on push to main, runs on ubuntu-latest, checks out the code, and runs "npm test".', starterCode: 'name: Run Tests\non:\n  # Trigger on push to main\n\njobs:\n  test:\n    runs-on: # VM image\n    steps:\n      # Checkout the repo\n      # Run npm test', solution: 'name: Run Tests\non:\n  push:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm test', hint: 'The checkout action is actions/checkout@v4. The VM image for Linux is ubuntu-latest.' },
  { id: 'c12', title: 'Azure Pipeline', difficulty: 'Medium', track: 'Azure', xp: 240, emoji: '☁️', description: 'Complete this Azure Pipelines YAML so it triggers on main, uses ubuntu-latest, installs dependencies, and deploys to App Service using the AzureWebApp@1 task.', starterCode: 'trigger:\n  - ___\n\npool:\n  vmImage: ___\n\nsteps:\n  - script: npm install && npm run build\n    displayName: Build\n\n  - task: ___@1\n    inputs:\n      appName: "my-webapp"', solution: 'trigger:\n  - main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n  - script: npm install && npm run build\n    displayName: Build\n\n  - task: AzureWebApp@1\n    inputs:\n      appName: "my-webapp"', hint: 'The pipeline triggers on "main", uses "ubuntu-latest", and the deploy task is "AzureWebApp".' },
  { id: 'c13', title: 'AWS Lambda Handler', difficulty: 'Medium', track: 'AWS', xp: 200, emoji: '🟠', description: 'Write a Node.js AWS Lambda handler that reads a "name" from the query string and returns a JSON response with statusCode 200 and body { message: "Hello, <name>!" }.', starterCode: 'exports.handler = async (event) => {\n  const name = event.queryStringParameters?.name || "World";\n  // Return a response object\n};', solution: 'exports.handler = async (event) => {\n  const name = event.queryStringParameters?.name || "World";\n  return {\n    statusCode: 200,\n    body: JSON.stringify({ message: `Hello, ${name}!` })\n  };\n};', hint: 'Return an object with statusCode and body. Use JSON.stringify() to convert the body object to a string.' },
  { id: 'c14', title: 'IAM Policy: Allow S3 Read', difficulty: 'Hard', track: 'AWS', xp: 280, emoji: '🔑', description: 'Write an IAM policy JSON document that allows the s3:GetObject and s3:ListBucket actions on a bucket called "codecraft-assets" and all its objects.', starterCode: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "___",\n      "Action": [\n        "___",\n        "s3:ListBucket"\n      ],\n      "Resource": [\n        "arn:aws:s3:::codecraft-assets",\n        "___"\n      ]\n    }\n  ]\n}', solution: '{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [\n        "s3:GetObject",\n        "s3:ListBucket"\n      ],\n      "Resource": [\n        "arn:aws:s3:::codecraft-assets",\n        "arn:aws:s3:::codecraft-assets/*"\n      ]\n    }\n  ]\n}', hint: 'Effect is "Allow". GetObject applies to objects (bucket/*) and ListBucket applies to the bucket itself.' },
];

const difficultyColor: Record<string, string> = {
  Easy: Colors.success,
  Medium: Colors.xp,
  Hard: Colors.error,
};

export default function ChallengesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.heading}>⚔️ Challenges</Text>
        <Text style={styles.sub}>Test your skills and earn bonus XP</Text>

        {challenges.map((c) => (
          <Pressable
            key={c.id}
            style={({ pressed }) => [
              styles.card,
              { opacity: pressed ? 0.8 : 1 },
              Platform.OS === 'web' && ({ cursor: 'pointer' } as any),
            ]}
            onPress={() => router.push({ pathname: '/challenge/[id]', params: { id: c.id } })}
          >
            <Text style={styles.emoji}>{c.emoji}</Text>
            <View style={styles.info}>
              <Text style={styles.title}>{c.title}</Text>
              <Text style={styles.track}>{c.track}</Text>
            </View>
            <View style={styles.right}>
              <Text style={[styles.diff, { color: difficultyColor[c.difficulty] ?? Colors.textMuted }]}>
                {c.difficulty}
              </Text>
              <Text style={styles.xp}>+{c.xp} XP</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 20 },
  heading: { fontSize: 26, fontWeight: 'bold', color: Colors.text, marginBottom: 4 },
  sub: { fontSize: 14, color: Colors.textMuted, marginBottom: 24 },
  card: { backgroundColor: Colors.card, borderRadius: 14, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 12, gap: 12 },
  emoji: { fontSize: 28 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600', color: Colors.text },
  track: { fontSize: 12, color: Colors.textMuted, marginTop: 2 },
  right: { alignItems: 'flex-end' },
  diff: { fontSize: 12, fontWeight: 'bold' },
  xp: { fontSize: 13, color: Colors.xp, fontWeight: 'bold', marginTop: 4 },
});
