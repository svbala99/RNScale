# RNScale

[![GithubFollow @svbala99](https://img.shields.io/github/last-commit/svbala99/RNScale?)](https://github.com/svbala99/)[![GithubFollow @svbala99](https://img.shields.io/github/languages/count/svbala99/RNScale?color=orange)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/languages/top/svbala99/RNScale?color=blueviolet)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/languages/code-size/svbala99/RNScale?color=pink)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/repo-size/svbala99/RNScale)](https://github.com/svbala99/) [![GithubFollow @svbala99](https://img.shields.io/github/commit-activity/m/svbala99/RNScale?color=%23DB62B2%20)](https://github.com/svbala99/)

### A simple app in react native to use the scale for weight and height measurement by providing the sliding experience to the user.

### Download the ipa from:  [Github link](https://github.com/svbala99/RNScale/raw/master/RNScale.ipa), [Diawi Link](https://i.diawi.com/WBXrkq)
### Downliad the APK from: [Google Drive Link](https://drive.google.com/drive/folders/1xi_V7x8wm6UcgTfZhS5QzoFwuJK0Nzv1?usp=sharing),  [Diawi link](https://i.diawi.com/Je4zVB)

## Constraints
- It's a slider scale by which user will be able to move left or right on a horizontal scale and up or down on a Vertical scale to select a value.

### Prerequisites: 
- Scale should start from a certain value and not zero.
- I should be able to handle Integers & decimals
- Scale of Height should be on feet+inches.
- The slide should be smooth and the value displayed should be in sync with the value on the scale.

## Screenshots

<img src="https://github.com/svbala99/RNScale/raw/master/Simulator%20Screen%20Shot%20-%20iPhone%2013%20-%202022-05-29%20at%2018.28.07.png" width="180" height="400"/>

## Features

- Custom built Slider to get height and weight values from the user.

## Technology

- React Native : For Cross platform mobile app development
- Node JS: For runtime environment
- Javascript : For application development
- VS code : Code editor IDE
- Linting: eslint

## Installation

This App requires [Node.js](https://nodejs.org/) v10+ to run.

##### Download the repo and install dependencies

```sh
git clone git@github.com:svbala99/RNScale.git
cd RNScale
npm i
```

##### Start the development server

```sh
npm start
```

##### Install the app first time in Android (in Dev mode)

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Android Studio IDE by clicking "Run" button after opening "Android" project in it
- Supported Machines: Windows / Linux / Mac

```sh
npm run android
```

##### Install the app first time in iPhones (iOS) - Dev mode

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Xcode IDE by clicking "Build" & "Run" button after opening "iOS" folder in it
- Supported Machines: Mac only

```sh
cd ios && pod install && cd ..
npm run ios
```

## To generate iOS ipa file
- Set the scheme to "Any iOS Simulator"
- Xcode -> product -> clean
- Xcode -> product -> Archive
- After 15mins, build will be archived, you can export the build now
- In the archive window opened, choose "development" method of distribution
- Choose "Automatically manage signing"
- Select the location you want to export and click OK

## To generate Android APK

```bash
gradlew assembleRelease (APK file)
gradlew bundleRelease (AAB file)
```
- For more details: https://reactnative.dev/docs/signed-apk-android
Note: If you run in Linux, issue ./gradlew instead of gradlew

## Output file location

You will find the APK file in:

```bash
~PROJECT_LOCATION\android\app\build\outputs\apk\release
```

## Install the released APK

```bash
adb install app-release.apk
```

## Packages used

| Package                   | Version |
| ------------------------- | ------- |
| React                     | 17      |
| React Native              | 0.68.2    |
| [@react-native-community/slider](https://www.npmjs.com/package/@react-native-community/slider)        | 4.2.2       | 

## License

GNU GPL

[![React Native](https://reactnative.dev/img/oss_logo.png)](https://reactnative.dev/)
