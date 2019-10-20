HOW TO USE THE EPICTURE PROJECT ? 

To use the project, clone the repository then execute:  

- yarn install  
- Define the ANDROID_SDK_ROOT environment variable 
- react-native upgrade –legacy-true (If you don't have an android folde) 
- react-native link  
- react-native start  
- react-native run-android  

To build the android APK, clone the repository and execute these commands: 

- yarn install  
- Define the ANDROID_SDK_ROOT environment variable 
- react-native upgrade –legacy-true (If you don't have an android folder) 
- react-native link  
- cd android && ./gradlew assembleRelease 

You must have a device connected to your computer or an emulator launched to be able to run the project. After those commands, the application would appear on your device. You can now use it


Created by Steeven REGNAULT and Julien MONTAGNE.
