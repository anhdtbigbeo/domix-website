import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const possibleGitPaths = [
  'git',
  'C:\\Program Files\\Git\\cmd\\git.exe',
  'C:\\Program Files (x86)\\Git\\cmd\\git.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Git', 'cmd', 'git.exe'),
];

const ghDesktopBase = path.join(process.env.LOCALAPPDATA || '', 'GitHubDesktop');
if (fs.existsSync(ghDesktopBase)) {
  const dirs = fs.readdirSync(ghDesktopBase);
  dirs.forEach(dir => {
    if (dir.startsWith('app-')) {
      possibleGitPaths.push(path.join(ghDesktopBase, dir, 'resources', 'app', 'git', 'cmd', 'git.exe'));
    }
  });
}

let foundGit = null;
for (const gitPath of possibleGitPaths) {
  try {
    const res = execSync(`"${gitPath}" --version`, { encoding: 'utf-8' });
    console.log(`FOUND GIT at: ${gitPath} -> ${res.trim()}`);
    foundGit = gitPath;
    break;
  } catch (e) {
    // continue
  }
}

if (!foundGit) {
  console.log("GIT_NOT_FOUND");
  process.exit(1);
}

const projectDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\domix-website';

function run(cmd) {
  console.log(`Running: ${cmd}`);
  try {
    const out = execSync(`"${foundGit}" ${cmd}`, { cwd: projectDir, encoding: 'utf-8' });
    console.log(out);
  } catch (err) {
    console.error("Error output:", err.stderr || err.stdout || err.message);
  }
}

console.log("--> Initializing and pushing code to anhdtbigbeo/domix-website.git...");
run('init');
run('add .');
run('commit -m "Fix 3D Ocean Water Orb asset imports and image paths for production"');
run('branch -M main');
run('remote remove origin');
run('remote add origin https://github.com/anhdtbigbeo/domix-website.git');
run('push -u origin main');
