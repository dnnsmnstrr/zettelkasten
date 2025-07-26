---
date: 2020-08-25
tags:
  - dev
---
# IDE

I've coded in multiple dev environments, including CLion, Eclipse, Xcode, IntelliJ, Racket, VSCode, ...
Among these, Atom was definitely my favorite so far ([RIP](https://github.blog/news-insights/product-news/sunsetting-atom/) 2022 🪦)

## VSCode
Since Atom was retired, I have switched to VSCode as my main IDE.

Extensions I frequently use:
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [TailwindCSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Svelte](https://marketplace.visualstudio.com/items?itemName=1YiB.svelte-bundle) + [shadcn](https://marketplace.visualstudio.com/items?itemName=Selemondev.vscode-shadcn-svelte)

## [Atom](https://atom.io)
My IDE of choice. As you can see in my [sync-settings](https://atom.io/packages/sync-settings) backup, I use a ton of plugins. Notable mentions include:
- atom-notes
- quokka
- markdown-preview-enhanced
- project-manager
- script
- Platformio Terminal
- wakatime

### [Snippets](https://gist.github.com/dnnsmnstrr/92968648b5ea54edbee216e87e52c15e#file-snippets-cson)
The Backup also contains a bunch of custom snippets. Here are some of my most used:

#### [[js]]
```cson
  'Arrow function':
    'prefix': 'ar'
    'body': '(${1}) => {${2}}'

# Hooks
  'useState const':
    'prefix': 'cs'
    'body': 'const [${1:variable}, set${1/(.+)/\\u$1/}] = useState(${2})'

  'useEffect':
    'prefix': 'ue'
    'body': 'useEffect(() => {$2}, [${1}])'

# Debugging
  'console.log':
    'prefix': 'l'
    'body': "console.log('${1:variable}', ${1:variable})"
```

<script src="https://gist.github.com/dnnsmnstrr/92968648b5ea54edbee216e87e52c15e.js"></script>
