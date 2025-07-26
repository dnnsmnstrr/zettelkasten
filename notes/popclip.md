---
id: 9ni7IRzeaNszIctQIGPjH
title: Popclip
desc: ""
updated: 1638868970489
created: 1638820744136
tags:
  - macos
---
# [Popclip](https://pilotmoon.com/popclip/)

## Extensions
Popclip offers many [extensions](https://pilotmoon.com/popclip/extensions/), I like these:
- [Activate](https://pilotmoon.com/popclip/extensions/ext/Alfred.popclipextz) [[alfred]]
- [Brackets](https://pilotmoon.com/popclip/extensions/ext/Brackets.popclipextz)
- [Character](https://pilotmoon.com/popclip/extensions/ext/CharCount.popclipextz) / [Word](https://pilotmoon.com/popclip/extensions/ext/WordCount.popclipextz) Count
- [Formatting](https://pilotmoon.com/popclip/extensions/ext/Formatting.popclipextz)
- [Run in Terminal](https://pilotmoon.com/popclip/extensions/ext/RunCommand.popclipextz)
- [Sort selected Lines](https://pilotmoon.com/popclip/extensions/ext/Sort.popclipextz)
- [ChatGPT](https://pilotmoon.com/popclip/extensions/ext/ChatGPT.popclipext) [[ai]]

### Extension Snippets
It is possible to create extensions using code [snippets](https://github.com/pilotmoon/PopClip-Extensions#snippets). Here are some of my own creations:

#### Prompt
Use this prompt with [[ChatGPT]] to quickly [create extensions](https://twitter.com/PopClipApp/status/1639020436183977986?s=20).

```txt
I want you to act as a PopClip extension creator. I will describe what the extension should do, and you should reply with the extension code, with no additional text.
Here is an example of a PopClip extension:

// #popclip
// name: Remove Periods
// icon: •X
// language: javascript
const noPeriodsText = popclip.input.text.replace (/ /g, "');
popclip.pasteText (noPeriodsText);

Note the name should be short (16 chars or less) and the icon should be one or two characters.
As a test, please create an extension to make the text all caps.
```

#### Copy URL from address bar as markdown link with title
```yaml
# (inspired by https://forum.popclip.app/t/copy-from-address-bar-as-markdown-url-with-title/293/5)
# popclip extension to copy URL from address bar as markdown with title
name: Copy +MD Link
title: Copy
icon: symbol:doc.on.doc
javascript: |
  if (popclip.input.text === popclip.context.browserUrl) {
    popclip.copyText(`[${popclip.context.browserTitle}](${popclip.input.text})`)
  } else {
    popclip.performCopy()
  }
```

#### Get [[redirect]] using my [[api]]
```yaml
# popclip extension to get redirect from my api
name: Redirect API
title: Redirect
icon: symbol:arrow.up.arrow.down.circle
url: https://dnnsmnstrr.vercel.app/api/redirect/***
```

#### Quickly spend time for a daily on Gitlab
```yaml
# popclip extension to spend time on gitlab
name: Gitlab Time Tracking
title: Spend
icon: symbol:clock
javascript: |
  popclip.pressKey('R')
  const time = popclip.input.text.trim()
  return '/spend ' + time
after: paste-result
```

### Extension-API
Documented here: https://github.com/pilotmoon/PopClip-Extensions

  - `***` or `{popclip text}` - Selected text
