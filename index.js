import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import  registerComponent from "./src/extensions/navigation";

AppRegistry.registerComponent(appName, () => registerComponent);
console.disableYellowBox = true;
