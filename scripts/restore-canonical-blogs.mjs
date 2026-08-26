/**
 * Restore the three previously redirected posts as indexable, self-canonical blogs.
 * Usage: node --env-file=.env.local scripts/restore-canonical-blogs.mjs
 */
import { createClient } from '@supabase/supabase-js';

function env(name) {
  return String(process.env[name] || '')
    .trim()
    .replace(/^['"]+|['"]+$/g, '')
    .replace(/\s+/g, '');
}

const url = env('NEXT_PUBLIC_SUPABASE_URL');
const key = env('NEXT_PUBLIC_SUPABASE_ANON_KEY');
if (!url || !key) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const sb = createClient(url, key);
const AUTHOR = 'ZamZam Print Support, US Remote Printer Technicians';
const IMAGE = 'https://www.zamzamprint.com/side-view-employee-using-printer.jpg';

function excerpt(md) {
  return md
    .replace(/[#>*`\[\]]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 220);
}

const posts = [
  {
    slug: 'router-not-working-fix-guide-usa',
    title: 'Router Not Working? Fix Wi-Fi, Internet & Printer Drops (USA, 2026)',
    date_posted: '2026-01-18',
    meta_title: 'Router Not Working? Fast Wi-Fi Fix Guide (2026)',
    meta_description:
      'Router not working in the USA? Power-cycle, check WAN lights, reset Wi-Fi, and rejoin 2.4GHz. Printers offline too? Call ZamZam for remote help.',
    meta_keywords:
      'router not working, router not working usa, wifi not working, internet down, wireless printer offline, 2.4ghz wifi, remote printer support',
    faqs: [
      {
        question: 'Why is my router not working even though the lights are on?',
        answer:
          'Power lights only mean the router has electricity. If the WAN/Internet light is off, red, or blinking, the ISP link is down. Power-cycle the modem first, then the router, and confirm the WAN cable is seated. A solid Wi-Fi light with no internet usually means the local network is up but the ISP session failed.',
      },
      {
        question: 'How do I restart a router the right way?',
        answer:
          'Unplug the modem and router. Wait a full 60 seconds. Plug the modem in first and wait until its online light is stable (often 1–2 minutes). Then plug the router in. After Wi-Fi returns, reboot your computer and wireless printer so they grab a fresh IP.',
      },
      {
        question: 'Should my printer use 2.4GHz or 5GHz Wi-Fi?',
        answer:
          'Most home printers only join 2.4GHz. If your mesh or ISP gateway uses one combined SSID, the printer may try 5GHz and drop offline. Create or enable a dedicated 2.4GHz network, reconnect the printer there, and keep phones on 5GHz if you want faster browsing.',
      },
      {
        question: 'Will resetting my router disconnect my wireless printer?',
        answer:
          'Yes. A factory reset wipes the Wi-Fi name, password, and DHCP reservations. After the reset, reconnect phones first, then add the printer again on the 2.4GHz SSID. If it still shows offline in Windows, switch the printer port from WSD to a Standard TCP/IP port.',
      },
      {
        question: 'When should I call my ISP versus a technician?',
        answer:
          'Call the ISP when no device can reach websites and the modem WAN light never comes online. Call a technician when the internet works on phones but Windows, Wi-Fi printers, or a single PC stay offline — that is usually a local network, driver, or port issue.',
      },
    ],
    content: `Your router is the front door for every device in the house — laptops, phones, smart TVs, and the wireless printer that suddenly shows **Offline**. In US homes the usual pattern is the same: lights are on, Wi-Fi names still appear, but nothing actually loads.

This guide walks through the order that fixes most “router not working” cases without a factory reset. Work top to bottom. Stop when the internet returns, then reconnect the printer last so it does not grab a broken IP.

## Quick checks before you touch settings

Look at the hardware before you log into the admin page.

- Confirm the wall outlet and power brick are live (a cheap night-light on the same strip is a useful test).
- Reseat the coax or fiber cable into the modem, then the Ethernet cable from **modem WAN** to **router Internet/WAN**.
- If you use an ISP combo gateway (Xfinity, Spectrum, AT&T, Verizon, Google Fiber), treat that box as both modem and router unless you added your own router behind it.
- Note the lights: Power, WAN/Internet, Wi-Fi, and LAN. A dead WAN light is an ISP problem. A dead Wi-Fi light is a local radio/firmware problem.

If **no device** in the house can open a website, skip printer troubleshooting. Fix the WAN path first.

## The 60-second power cycle that actually works

A two-second unplug does almost nothing. The modem needs time to drop its ISP session and request a new one.

1. Unplug the modem **and** the router (or the single gateway).
2. Wait **60 seconds**. Do not skip this.
3. Plug in the **modem/gateway only**. Wait until the online/WAN light is solid — often 1–2 minutes.
4. Plug the router in (if it is a separate box). Wait for Wi-Fi to broadcast.
5. Reboot one phone and one computer. Confirm a webpage loads.
6. Only then power-cycle the printer and reconnect it to the same SSID.

This single sequence clears stuck DHCP leases, frozen radios, and half-open ISP sessions more often than any button in the admin UI.

## Read the lights (what they actually mean)

| Light | Healthy | Problem |
| --- | --- | --- |
| Power | Solid | Off or blinking forever — power supply or failed board |
| WAN / Internet | Solid | Off, red, or endless blink — ISP, coax/fiber, or WAN cable |
| Wi-Fi | Solid or slow blink | Off — radio disabled, firmware crash, or band turned off |
| LAN | Flicker when a PC is plugged in | No flicker — bad Ethernet port or cable |

If WAN never comes up after a correct power cycle, you need the ISP. Do not factory-reset yet — that only adds a new Wi-Fi password to debug.

## ISP, cables, and “everyone is down”

US cable and fiber outages are common after storms, node upgrades, and neighborhood maintenance.

- Try a phone **off Wi-Fi** (cellular). If cellular works and home Wi-Fi does not, it is your local network.
- Try a laptop on **Ethernet** into the router. If Ethernet works and Wi-Fi does not, the radio or 2.4/5 GHz split is the issue.
- Check the ISP outage page or app (Xfinity, Spectrum, AT&T, Verizon, Google Fiber, T-Mobile Home Internet).
- If a technician already replaced the gateway, the Wi-Fi name often changed. Every printer still looking for the old SSID will sit offline.

## Wi-Fi name, password, and the 2.4GHz trap

Printers are the canary. Phones roam to 5GHz and look fine while the HP, Canon, Brother, or Epson stays on a ghost 2.4GHz network.

**Do this:**

- Log into the router (usually \`192.168.1.1\`, \`192.168.0.1\`, or \`10.0.0.1\`). Find the address with \`ipconfig\` → Default Gateway on Windows.
- If the ISP uses a **Smart/One Wi-Fi** name that mixes 2.4 and 5 GHz, create a dedicated **2.4GHz SSID** for printers (example: \`HomeWiFi-2G\`).
- Use WPA2-Personal. Some older printers still fail on WPA3-only networks.
- Avoid spaces and odd symbols in the password if the printer keypad is painful.
- After changes, forget the old network on the printer and join the 2.4GHz name again.

Mesh systems (Eero, Google, Orbi, TP-Link Deco) sometimes “band steer” a printer onto a node it cannot hold. Park the printer near the main node during setup, then assign a DHCP reservation so its IP does not change overnight.

## When the internet is back but the printer is still offline

The router is working. Windows is not.

- On the printer, print a network config page and confirm the IP and SSID.
- In Windows: Settings → Bluetooth & devices → Printers & scanners → your printer → Printer properties → **Ports**. Prefer a **Standard TCP/IP Port** using that IP, not WSD.
- Restart the Print Spooler (services.msc → Print Spooler → Restart).
- Turn off “Use Printer Offline” in the queue menu.
- If you assigned a static IP or reservation, update the Windows port to match.

Those steps are what we do on remote sessions when the Wi-Fi is healthy and the queue is not.

## Firmware, factory reset, and last resorts

Update firmware from the maker’s app or support site **only** when the WAN is already working. A failed flash on a dead connection makes the night worse.

Factory reset the router only if:

- You cannot log in (unknown password), or
- The radio never comes back after firmware, or
- Guest network / parental controls are blocking the printer MAC.

After a reset you must rebuild Wi-Fi names, reservations, and printer connections from scratch. Write the new 2.4GHz password down before you leave the admin page.

## Still stuck?

If phones browse fine but Windows printing, scanning, or a single PC will not stay on the network, that is a local configuration job — ports, drivers, and mesh steering — not a new router. A US tech can walk the same checks over a secure remote session, usually in under 20 minutes, and you only pay if printing works again.
`,
  },
  {
    slug: 'gmail-account-recovery-guide-usa',
    title: 'Gmail Account Recovery Guide (USA): Get Back In Safely',
    date_posted: '2026-01-22',
    meta_title: 'Gmail Account Recovery Guide for the USA (2026)',
    meta_description:
      'Locked out of Gmail in the USA? Use Google’s official recovery, backup codes, and 2-Step Verification. Need to print an email again? Remote US help is available.',
    meta_keywords:
      'gmail account recovery, recover gmail account usa, forgot gmail password, google account recovery, 2-step verification, print gmail, remote printer support',
    faqs: [
      {
        question: 'What is the official way to recover a Gmail account in the USA?',
        answer:
          'Use Google’s own recovery flow at accounts.google.com/signin/recovery. Enter the Gmail address, prove you own the account with the recovery phone, recovery email, or backup codes, then follow the prompts. Do not use third-party “unlock” sites or anyone asking for your password.',
      },
      {
        question: 'How long does Gmail recovery take?',
        answer:
          'If you still have the recovery phone or email, many people get back in the same session. If Google needs extra checks, it can take a few hours to a few days. Repeat the form from a familiar device and location when possible — that often helps more than trying from a brand-new PC.',
      },
      {
        question: 'What if I no longer have the recovery phone or email?',
        answer:
          'Use backup codes from 2-Step Verification if you saved them. Otherwise Google will ask questions only the owner would know (when the account was created, frequent contacts, last password you remember). There is no legitimate paid bypass. If Google still cannot verify you, the account may not be recoverable.',
      },
      {
        question: 'Can a technician recover Gmail for me?',
        answer:
          'A real tech will not ask for your Gmail password or 2-Step codes. They can help you open the official recovery page, print a needed PDF once you are back in, or fix a printer that will not print from Chrome. Account ownership stays with you and Google.',
      },
      {
        question: 'Why can’t I print from Gmail after I recover the account?',
        answer:
          'After a password reset, Chrome may still hold an old session, and Windows may still point at an offline printer. Sign out of Google in the browser, sign back in, then confirm the printer is online and the spooler is running. If Gmail opens but jobs never leave the queue, the printer — not Gmail — is the remaining issue.',
      },
    ],
    content: `Locked out of Gmail is stressful, especially when the message you need is a ticket, tax form, or school document you planned to print. This USA-focused walkthrough uses **only Google’s official recovery tools**. Skip any site, text, or caller that offers to “unlock Gmail” for a fee.

You will: try the official recovery form, use backup methods you already set up, lock the account down after you get in, then fix printing if Chrome still cannot reach the printer.

## Start here: official Google recovery

1. Open [Google Account recovery](https://accounts.google.com/signin/recovery) in a browser.
2. Enter the full Gmail address (\`you@gmail.com\` or a Workspace address you use with Gmail).
3. Choose **Forgot password** or **Forgot email** depending on which part you lost.
4. Complete the checks Google shows: recovery SMS/call, recovery email, backup codes, or passkey.

Use a device and network you have used with this account before when you can (home Wi-Fi, your usual laptop). Google’s extra “this doesn’t look like you” prompts are stricter on a brand-new PC at a hotel.

Help articles live on [Google Account Help](https://support.google.com/accounts). If a page asks you to install a “recovery extension” or pay a refundable deposit, close it.

## If you still have the recovery phone or email

This is the fast path.

- **SMS / voice:** Enter the code Google sends. Codes expire quickly — request a new one instead of guessing.
- **Recovery email:** Open that inbox on another device if this PC is the one you are locked out of.
- **Passkey / hardware key:** Use the same phone or security key you enrolled.

After you are in, go to [myaccount.google.com/security](https://myaccount.google.com/security) and confirm the recovery phone and email are still numbers and inboxes you control. People lose Gmail a second time because a discarded SIM was still listed as recovery.

## If you turned on 2-Step Verification

Password alone is not enough, which is the point.

- Try the Google prompt on a signed-in phone.
- Use **backup codes** you printed or saved when you enabled 2-Step. Each code works once.
- Use an authenticator app code if you set one up.
- Use a security key if that is how you sign in.

If you lost the phone **and** the backup codes, use the recovery form and tell Google you cannot use 2-Step. Success is not guaranteed. That is why printing backup codes (or storing them in a password manager) matters.

## Forgotten address, disabled account, or “unusual activity”

**Forgot which Gmail you used.** Google can help only if you remember a recovery phone or a secondary email. Try addresses you actually used (work, school, old ISP).

**Account disabled.** Google sometimes disables accounts for ToS or automated abuse flags. The appeal path is inside Google’s disabled-account flow — not a printer shop, not a random “hacker” on social media.

**“Google detected unusual activity.”** Change the password after you get in, review [recent security activity](https://myaccount.google.com/notifications), and sign out other devices. If you truly did not request the recovery, someone else may be trying — do not share codes with them.

## After you get back in: lock it down

Do this the same day, before you print anything.

1. Set a new unique password (password manager recommended).
2. Confirm 2-Step Verification is on.
3. Generate a fresh set of backup codes and store them offline.
4. Remove old phones, PCs, and “less secure apps” you do not recognize.
5. Review forwarding and filters — hijacks often add a silent forward.

## Printing from Gmail again (Windows)

Recovery does not fix a printer that was already offline.

- In Chrome, sign out of Google and sign back in so print dialogs see the new session.
- Try **Print** on a single email (Ctrl+P) and pick the real printer, not “Save as PDF,” if you need paper.
- If the job sits in the queue: open Printers & scanners, clear “Use Printer Offline,” and restart Print Spooler.
- Wireless printers that dropped during a router change need the current 2.4GHz Wi-Fi and a TCP/IP port — the same checks as any Windows print failure.

If Gmail is open and the PC is fine but pages never print, that is a printer/driver problem. A US remote session can clear the queue, repair the port, and get the document out without a house call.

## What we will never ask for

We will not ask for your Gmail password, 2-Step codes, backup codes, or recovery SMS. If anyone claiming to “recover Gmail” wants those, hang up. Official recovery stays between you and Google; we only help with the Windows and printer side once you can see the message you need on paper.
`,
  },
  {
    slug: 'speed-up-slow-computer-windows-11-10-ultimate-guide',
    title: 'Speed Up a Slow Computer on Windows 11/10 (Ultimate Guide)',
    date_posted: '2026-01-25',
    meta_title: 'Speed Up Slow Computer on Windows 11/10 (2026)',
    meta_description:
      'Windows 11/10 crawling? Clear startup apps, free disk space, and reset the print spooler. Still slow? Get a US tech on a remote session in minutes.',
    meta_keywords:
      'speed up slow computer, windows 11 slow, windows 10 slow, startup programs, print spooler, disk cleanup, remote printer support',
    faqs: [
      {
        question: 'Why did my Windows 11 PC suddenly get slow?',
        answer:
          'The usual mix is too many startup apps, a nearly full drive, a stuck Windows Update, or a runaway process such as the Print Spooler after a failed print job. Heat and a dying hard drive also feel like “Windows got slow overnight.” Task Manager tells you which of those it is in under a minute.',
      },
      {
        question: 'What should I disable in Startup to speed up Windows?',
        answer:
          'Keep antivirus, GPU control panels you actually use, and your password manager. Disable chat apps, game launchers, trial OEM utilities, and cloud backup tools you do not need at logon. In Task Manager → Startup apps, sort by Startup impact and turn Off the High impact items you do not need immediately.',
      },
      {
        question: 'Can a stuck printer make the whole PC slow?',
        answer:
          'Yes. A crashed Print Spooler or a huge backlog in C:\\Windows\\System32\\spool\\PRINTERS can spike disk and CPU. Restart the Print Spooler service, clear the queue, and remove ghost WSD printers. If Explorer feels fine after that, the “slow PC” was print subsystem drag.',
      },
      {
        question: 'Is Disk Cleanup enough or do I need a new drive?',
        answer:
          'If the system drive has less than about 15% free space, Windows will feel heavy. Storage Sense and Disk Cleanup help. If the PC still uses a spinning HDD and you are not low on space, an SSD upgrade is the single biggest hardware speed-up. Software tweaks cannot match that.',
      },
      {
        question: 'When should I get remote help instead of more tweaks?',
        answer:
          'Get help when Task Manager shows a process you cannot identify, printing still hangs the PC, or you are not comfortable editing services. A US tech can check startup, spooler, and drivers over a secure session and leave you with a PC that opens and prints at a normal speed.',
      },
    ],
    content: `A slow Windows PC is rarely one setting. It is usually **startup bloat + a full drive + one stuck service** (often printing). This guide is the order we use on US remote sessions for Windows 11 and Windows 10: measure first, then cut what actually costs time.

Do the sections in order. Reboot once after startup changes. If the machine is still painful, the bottleneck is hardware or malware — not another animation tweak.

## Measure before you change anything

Open **Task Manager** (Ctrl+Shift+Esc).

- **CPU** pegged at idle → background update, antivirus scan, or a crashed service.
- **Memory** at 90%+ with a browser open → too little RAM or a leak.
- **Disk** at 100% for minutes → HDD, a stuck update, or Search Indexer on a dying drive.
- **GPU** high while you are on the desktop → hardware acceleration or a stuck overlay.

On the **Startup apps** tab, sort by **Startup impact**. That list is where most “it takes five minutes to log in” stories come from.

Optional: Settings → System → About and note RAM and whether the system drive is SSD or HDD. An old 5400 RPM disk will never feel like a new laptop no matter how many “cleaner” apps you install. Uninstall those cleaners.

## Cut startup apps (biggest free win)

Windows 11: Task Manager → **Startup apps**. Windows 10: Task Manager → **Startup**.

Turn **Off** anything you do not need before the desktop appears:

- Game launchers (Steam, Epic, Xbox extras you do not use at logon)
- Chat tools you can open yourself (Teams, Discord, Slack)
- Manufacturer extras (trial McAfee, “support” widgets, RGB tools)
- Cloud sync you only need once a day

Keep: your real antivirus, GPU driver tray if you use it, and a password manager.

Then: Settings → Apps → **Startup** (Windows 11) and double-check the same list. Reboot and time the logon. If it is already better, stop here unless printing is still slow.

## Free disk space without sketchy cleaners

Windows needs headroom on **C:**.

1. Settings → System → Storage → **Temporary files**. Remove Downloads only if you know what is in there.
2. Enable **Storage Sense** so Windows trims temp files on a schedule.
3. Settings → Windows Update → Update history / Advanced options → uninstall a failed update only if you know it is stuck (or use the built-in troubleshooter).
4. Empty the Recycle Bin. Move giant video folders off C: if the drive is small.

If C: is still over ~85% full, uninstall unused apps (Settings → Apps) before you hunt registry tweaks. Registry “boosters” are not a strategy.

## Restart the Print Spooler (yes, it can freeze the PC)

A jammed queue does not only block paper. On some PCs the spooler sits at high disk or CPU until you kill it.

1. Press Win+R, type \`services.msc\`, open **Print Spooler**.
2. Click **Stop**.
3. Delete leftover jobs in \`C:\\Windows\\System32\\spool\\PRINTERS\` (you may need admin). Do not delete the folder, only the stuck files inside.
4. Start Print Spooler again.
5. In Printers & scanners, remove duplicate “ghost” copies of the same printer. Prefer one TCP/IP printer over a stack of WSD entries.

If the PC was slow **only when you printed**, you just found the cause. Then fix the printer itself (offline, Wi-Fi, driver) so the queue does not refill.

## Windows Update, visuals, and power

- Let Windows Update finish. A download sitting at 99% will keep the disk busy.
- Settings → System → Power: on a laptop, use **Balanced** or Better performance when plugged in. “Battery saver” throttles the CPU on purpose.
- Settings → Accessibility / Performance options → **Adjust for best performance** only if this is a very old HDD machine and you accept a plainer UI. On an SSD this is optional.

## Malware and junk overlays

Run **Windows Security** → Virus & threat protection → Quick scan. If you installed a “PC booster” last week, uninstall it. Those tools often add more startup items than they remove.

Browser: fewer extensions, fewer pinned auto-play tabs. Chrome with 40 tabs will make 8 GB of RAM look like a bug.

## When the hardware is the limit

Software cannot hide:

- 4 GB of RAM on Windows 11
- A clicking or extremely loud HDD
- CPU temperatures that throttle (laptop vents packed with dust)
- A disk that Task Manager shows at 100% even after cleanup

SSD + 8 GB RAM (16 GB is more comfortable) is the upgrade path that actually feels new. Until then, the steps above still make logon and printing usable.

## Still slow after this list?

If Task Manager still shows a mystery process, printing still hangs Explorer, or you are not sure which startup item is safe, a US technician can do the same pass with you on a secure remote session: spooler, drivers, and startup — then leave the PC in a state that opens and prints without a five-minute wait.
`,
  },
];

for (const post of posts) {
  const row = {
    ...post,
    author: AUTHOR,
    image: IMAGE,
    description: excerpt(post.content),
  };

  const { data: existing, error: findErr } = await sb
    .from('blogs')
    .select('id')
    .eq('slug', post.slug)
    .maybeSingle();

  if (findErr) {
    console.error('FIND_FAIL', post.slug, findErr.message);
    process.exitCode = 1;
    continue;
  }

  if (existing?.id) {
    const { error } = await sb.from('blogs').update(row).eq('id', existing.id);
    if (error) {
      console.error('UPD_FAIL', post.slug, error.message);
      process.exitCode = 1;
    } else {
      console.log('UPDATED', post.slug, existing.id);
    }
  } else {
    const { data, error } = await sb.from('blogs').insert(row).select('id').single();
    if (error) {
      console.error('INS_FAIL', post.slug, error.message);
      process.exitCode = 1;
    } else {
      console.log('INSERTED', post.slug, data.id);
    }
  }
}
