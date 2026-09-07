import https from 'https';
import querystring from 'querystring';
import fs from 'fs';

const cookie = `_octo=GH1.1.121978565.1788780219; cpu_bucket=xlg; preferred_color_mode=light; tz=Etc%2FGMT-7; _device_id=9fd4245fb620a582777f16cd4dc88d35; datadome=wU3E3AvzMDt~TiiWTSdRUAzCilRZo3_UpNUC4QvoIi37jvxlH2lG1wAF5ZYQDKu4N0DY2ocPcxIid~mns4AWRS5eA37t8rfq0BfewhKkhDPNOjVXhsVuSJR6rwRDShJV; saved_user_sessions=287572109%3A2l3LfvfqrfM0XX31lEVdva-FB5_EysvjjqCyP7Px_EL-hT1Z; user_session=2l3LfvfqrfM0XX31lEVdva-FB5_EysvjjqCyP7Px_EL-hT1Z; __Host-user_session_same_site=2l3LfvfqrfM0XX31lEVdva-FB5_EysvjjqCyP7Px_EL-hT1Z; tz=Etc%2FGMT-7; color_mode=%7B%22color_mode%22%3A%22auto%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22dark%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; logged_in=yes; dotcom_user=anhdtbigbeo; last_write_ms=1788780274162; _gh_sess=Qc0XJYR3BDGH%2BxqjPON230p0XMdCXrMDCiMJfVwtAvl9HKzJo3eVZch6IR9hsY7jSevA67dOZoXrZeyGbSd7ga3zegIBa60KBYX%2F6CNORX3Z7iADUSugpIC5LXWkUu07tZZcB%2FYnfmKgRSx%2Fyv8WA%2BHPFzgDx%2BJYAtqugWd3oVtQyVsEXMNMC9pt0RYE2KqPYpepXs6edqABbm3MG%2BE8NxOr8KnspUaxKjxA%2BHk4UR28WpIjyiD39GBSSp4J03CJnnk9aIaVqhrzdfBB%2Bl46GK7trqq%2BgUXMBJBDzYGukiF96zHjrk7ySTZNlC%2BRs28j2gzlRO%2FH4hO3HRDE1WRdi9trCOYdztPrwPrY0ULEmvho%2Br6QmLKbz8sKAZyzL%2FJ%2FJzmoSxZrk4jb6Zfu3OsLr8jwIecxcu30DTvToifoHsMDTLjTQF2jbQ8RkITGtE7fMN9G1%2BI1wfQxLVPB05zGOpYbJVMEGE2fLjMMO1xDA40hZXrjPOT5DsA4nqDNMIRTPO4V2xMVkcfe1vTJ4rbGpms2k8gB28Y7EIW3OdEtqRSzTjOJMEfFqAJBPtbqi0%2BMJOI6N1IoAZPYVSQ39WDDZgsQv25J3WP1v4059sTbO9QPn8pjuHE0r7u5YyVHTZhbChyo%2BbKk5zLCZp6o4PxAlGXqTkNqaf4xDLZTecrsNgwYQx0PhAKQhORW3k3wGyZ5fXjv5BZRqSsDQglXHDj6pm1V0VNFA6hzleNZXeX%2Bov1FjN%2F5KQLQeQuSxZXSOlP22YbBFYp1HcKs705BCcwc%2BCVRzm9xLm4hLdZNrf2yU7vHb2zLzR2a4oi%2B8FaoiWGvpGcbxv1xQvbTI%2FTMcjv7gDN22uZODcyU5UGxT%2FGxBnyKa9Ih045eEbiNwe6LXLDoqFa4Bw%3D%3D--PtUfcS%2FojdtV9QMw--Gd22mCsSaHHqrza6Uqw8%2FA%3D%3D`;

function makeRequest(url, method = 'GET', postData = null, extraHeaders = {}) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Cookie': cookie,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        ...extraHeaders
      }
    };

    if (postData) {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      options.headers['Content-Length'] = Buffer.byteLength(postData);
    }

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body }));
    });

    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function run() {
  console.log("--> Fetching GitHub new repo page to get authenticity token...");
  const pageRes = await makeRequest('https://github.com/new');
  console.log("Status Code:", pageRes.statusCode);

  // Extract csrf-token or authenticity_token
  let authToken = null;
  const metaMatch = pageRes.body.match(/<meta[^>]*name="csrf-token"[^>]*content="([^"]+)"/i) 
                 || pageRes.body.match(/<meta[^>]*content="([^"]+)"[^>]*name="csrf-token"/i);
  
  if (metaMatch) {
    authToken = metaMatch[1];
  } else {
    const inputMatch = pageRes.body.match(/name="authenticity_token"\s+value="([^"]+)"/i)
                    || pageRes.body.match(/value="([^"]+)"\s+name="authenticity_token"/i);
    if (inputMatch) {
      authToken = inputMatch[1];
    }
  }

  if (!authToken) {
    console.log("Could not find csrf-token or authenticity_token. Body length:", pageRes.body.length);
    // Write body snippet for debug
    fs.writeFileSync('github_new_page.html', pageRes.body);
    return;
  }

  console.log("Found token:", authToken.slice(0, 15) + "...");

  const postData = querystring.stringify({
    'authenticity_token': authToken,
    'owner': 'anhdtbigbeo',
    'repository[name]': 'domix-website',
    'repository[description]': 'DOMIX Technology Official Website - domixios.com',
    'repository[visibility]': 'public',
    'repository[auto_init]': 'false'
  });

  console.log("--> Sending POST to create repo domix-website...");
  const createRes = await makeRequest('https://github.com/repositories', 'POST', postData, {
    'Origin': 'https://github.com',
    'Referer': 'https://github.com/new'
  });

  console.log("Create Repo Response Code:", createRes.statusCode);
  console.log("Redirect location:", createRes.headers.location);

  if (createRes.statusCode === 302 || createRes.statusCode === 200 || createRes.headers.location?.includes('domix-website')) {
    console.log("SUCCESS! Repository https://github.com/anhdtbigbeo/domix-website created!");
  } else {
    console.log("Response body preview:", createRes.body.slice(0, 500));
  }
}

run().catch(console.error);
