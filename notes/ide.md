---
date: 2020-08-25
tags:
  - dev
---

# IDE

I've coded in multiple dev environments, including Clion, Eclipse, Xcode, IntelliJ, Racket, VSCode, ...
⬇️Among these, Atom is definitely my favorite

## [Atom](https://atom.io)
My IDE of choice. As you can see in my [sync-settings](https://atom.io/packages/sync-settings) backup, I use a ton of plugins. Honorable mentions include:
- Platformio Terminal

### [Snippets](https://gist.github.com/dnnsmnstrr/92968648b5ea54edbee216e87e52c15e#file-snippets-cson)
The Backup also contains a bunch of custom snippets. Here are some of my most used:

#### [[JS]]
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
