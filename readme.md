coower - Amazon ECS cluster service search for Alfred
==============================

Prerequisites
----------------
You need [Node.js 4+](https://nodejs.org) and [Alfred 3](https://www.alfredapp.com) with the paid [Powerpack](https://www.alfredapp.com/powerpack/) upgrade.

Install
----------------
Install by npm
```
$ npm install -g coower
```
Adjust the config.json placed in '~/Library/Preferences/alfy-nodejs/config.json'
(Alfred 3 config could be possible located here '/Users/{user}/Library/Application Support/Alfred 3/Workflow Data/com.codebud7.coower')
```
{
  "coower-csvFileUri": "https://sample.com/my.csv",
  "coower-authToken": "toky",
  "coower-awsUri":"https://amazon.com/ecs/"
}
```

Key Combinations
----------------

Key Combination        | Action
---------------------- | ------
`enter`                | Open build plan in default browser
`ctrl`                | Open deploy plan in default browser
`cmd`                | Open branch overview in default browser

Related
----------------
- Create Alfred workflows with ease - [alfy](https://github.com/sindresorhus/alfy)
- Scaffold out an Alfred workflow - [yeoman alfred generator](https://github.com/SamVerschueren/generator-alfred)
- Icon made by Freepik from www.flaticon.com
- Alfred workflow updater - [alfred-updater](https://github.com/SamVerschueren/alfred-updater)

License
----------------
MIT © [Sebastian Puskeiler](https://twitter.com/ebud7)
