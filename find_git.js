import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const possibleGitPaths = [
  'git',
  'C:\\Program Files\\Git\\cmd\\git.exe',
  'C:\\Program Files (x86)\\Git\\cmd\\git.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Git', 'cmd', 'git.exe'),
  path.join(process.env.LOCALAPPDATA || '', 'GitHubDesktop', 'app-3.4.1', 'resources', 'app', 'git', 'cmd', 'git.exe'),
  path.join(process.env.LOCALAPPDATA || '', 'GitHubDesktop', 'app-3.4.0', 'resources', 'app', 'git', 'cmd', 'git.exe'),
  path.join(process.env.LOCALAPPDATA || '', 'GitHubDesktop', 'app-3.3.15', 'resources', 'app', 'git', 'cmd', 'git.exe'),
  path.join(process.env.LOCALAPPDATA || '', 'GitHubDesktop', 'app-3.3.8', 'resources', 'app', 'git', 'cmd', 'git.exe'),
];

// Dynamically search GitHubDesktop app dirs
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
} else {
  // Initialize repo locally if not initialized
  const projectDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\domix-website';
  try {
    execSync(`"${foundGit}" init`, { cwd: projectDir, stdio: 'inherit' });
    execSync(`"${foundGit}" add .`, { cwd: projectDir, stdio: 'inherit' });
    try {
      execSync(`"${foundGit}" commit -m "Deploy DOMIX Website for domixios.com"`, { cwd: projectDir, stdio: 'inherit' });
    } catch (e) {
      console.log("Commit warning (maybe already committed):", e.message);
    }
    execSync(`"${foundGit}" branch -M main`, { cwd: projectDir, stdio: 'inherit' });
    console.log("GIT LOCAL REPO INITIALIZED SUCCESSFULLY!");
  } catch (err) {
    console.error("Error running git commands:", err);
  }
}
