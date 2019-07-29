import { createStackNavigator, createAppContainer } from "react-navigation";
import App from "../../App";


const navigationApp = createStackNavigator({
    App: {
        screen: App, navigationOptions: ({ navigation }) => ({
            title: `Profile`,
        }),
    }
},
    {
        initialRouteName: "App",
    });


export default createAppContainer(navigationApp);
