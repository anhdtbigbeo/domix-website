import https from 'https';
import querystring from 'querystring';

const cookie = `_octo=GH1.1.121978565.1788780219; cpu_bucket=xlg; preferred_color_mode=light; tz=Etc%2FGMT-7; _device_id=9fd4245fb620a582777f16cd4dc88d35; datadome=wU3E3AvzMDt~TiiWTSdRUAzCilRZo3_UpNUC4QvoIi37jvxlH2lG1wAF5ZYQDKu4N0DY2ocPcxIid~mns4AWRS5eA37t8rfq0BfewhKkhDPNOjVXhsVuSJR6rwRDShJV; saved_user_sessions=287572109%3A2l3LfvfqrfM0XX31lEVdva-FB5_EysvjjqCyP7Px_EL-hT1Z; user_session=2l3LfvfqrfM0XX31lEVdva-FB5_EysvjjqCyP7Px_EL-hT1Z; __Host-user_session_same_site=2l3LfvfqrfM0XX31lEVdva-FB5_EysvjjqCyP7Px_EL-hT1Z; tz=Etc%2FGMT-7; color_mode=%7B%22color_mode%22%3A%22auto%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22dark%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark%22%2C%22color_mode%22%3A%22dark%22%7D%7D; logged_in=yes; dotcom_user=anhdtbigbeo; last_write_ms=1788780274162; _gh_sess=Qc0XJYR3BDGH%2BxqjPON230p0XMdCXrMDCiMJfVwtAvl9HKzJo3eVZch6IR9hsY7jSevA67dOZoXrZeyGbSd7ga3zegIBa60KBYX%2F6CNORX3Z7iADUSugpIC5LXWkUu07tZZcB%2FYnfmKgRSx%2Fyv8WA%2BHPFzgDx%2BJYAtqugWd3oVtQyVsEXMNMC9pt0RYE2KqPYpepXs6edqABbm3MG%2BE8NxOr8KnspUaxKjxA%2BHk4UR28WpIjyiD39GBSSp4J03CJnnk9aIaVqhrzdfBB%2Bl46GK7trqq%2BgUXMBJBDzYGukiF96zHjrk7ySTZNlC%2BRs28j2gzlRO%FH4hO3HRDE1WRdi9trCOYdztPrwPrY0ULEmvho%2Br6QmLKbz8sKAZyzL%2FJ%2FJzmoSxZrk4jb6Zfu3OsLr8jwIecxcu30DTvToifoHsMDTLjTQF2jbQ8RkITGtE7fMN9G1%2BI1wfQxLVPB05zGOpYbJVMEGE2fLjMMO1xDA40hZXrjPOT5DsA4nqDNMIRTPO4V2xMVkcfe1vTJ4rbGpms2k8gB28Y7EIW3OdEtqRSzTjOJMEfFqAJBPtbqi0%2BMJOI6N1IoAZPYVSQ39WDDZgsQv25J3WP1v4059sTbO9QPn8pjuHE0r7u5YyVHTZhbChyo%2BbKk5zLCZp6o4PxAlGXqTkNqaf4xDLZTecrsNgwYQx0PhAKQhORW3k3wGyZ5fXjv5BZRqSsDQglXHDj6pm1V0VNFA6hzleNZXeX%2Bov1FjN%2F5KQLQeQuSxZXSOlP22YbBFYp1HcKs705BCcwc%2BCVRzm9xLm4hLdZNrf2yU7vHb2zLzR2a4oi%2B8FaoiWGvpGcbxv1xQvbTI%TFMcjv7gDN22uZODcyU5UGxT%FGxBnyKa9Ih045eEbiNwe6LXLDoqFa4Bw%3D%3D--PtUfcS%2FojdtV9QMw--Gd22mCsSaHHqrza6Uqw8%2FA%3D%3D`;

function request(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: d }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function main() {
  console.log("--> Fetching profile page to get authenticity token...");
  const profRes = await request({
    hostname: 'github.com',
    path: '/anhdtbigbeo',
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Cookie': cookie
    }
  });

  const tokenMatch = profRes.body.match(/name="authenticity_token"\s+value="([^"]+)"/i) || profRes.body.match(/value="([^"]+)"\s+name="authenticity_token"/i);
  if (!tokenMatch) {
    console.log("No token found!");
    return;
  }

  const token = tokenMatch[1];
  console.log("Token obtained:", token);

  const postData = querystring.stringify({
    'authenticity_token': token,
    'owner': 'anhdtbigbeo',
    'repository[name]': 'domix-website',
    'repository[description]': 'DOMIX Technology Official Website - domixios.com',
    'repository[visibility]': 'public',
    'repository[auto_init]': '0'
  });

  console.log("--> POSTing to /repositories...");
  const createRes = await request({
    hostname: 'github.com',
    path: '/repositories',
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      'Cookie': cookie,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'Origin': 'https://github.com',
      'Referer': 'https://github.com/new'
    }
  }, postData);

  console.log("Creation Status:", createRes.status);
  console.log("Redirect Location:", createRes.headers.location);

  if (createRes.status === 302 && createRes.headers.location) {
    console.log("SUCCESS! Created repository at:", createRes.headers.location);
  } else {
    console.log("Response Body Preview:", createRes.body.slice(0, 300));
  }
}

main().catch(console.error);
