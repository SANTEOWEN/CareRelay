# React Native Learnings

## Installations 
Create new expo app for react native
`npx create-expo-app@latest "nameofproject"`

---

Installing **Nativewind** for styling
1. You will need to install nativewind and its peer dependencies tailwindcss, react-native-reanimated and react-native-safe-area-context.
```shell
>npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
```

2. Run npx **tailwindcss init** to create a **tailwind.config.js** file
Add the paths to all of your method files in your tailwind.config.js file.
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Create a CSS file and add the Tailwind directives.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
**!** From here onwards, replace ./global.css with the relative path to the CSS file you just created.

3. **Add the Babel preset**
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```
4. **Create or modify your metro.config.js**
Create a **metro.config.js** file in the root of your project if you don't already have one, then add the following configuration:
```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```
5. **Import your CSS file**
```js
import "./global.css"
 
export default App() {
  /* Your App */
}
```

6. Modify your `app.json`
Switch the bundler to use the [Metro bundler](https://docs.expo.dev/guides/customizing-metro/#web-support)
```json
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```



---
## Routing and Navigations
1. First import the Link method fronm `expo-router`
```js
import { Link } from 'expo-router'
```
2. Then use the link method on the component like this
```Js
<Link href="/Profile">Profile</Link>
``` 
Make sure to create another component for the `href`
