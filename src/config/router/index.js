import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home,NewsDetail, Orders,OrderDetail,ScanQRCode} from '../../containers/pages';


const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
        },
        NewsDetail: {
            screen: NewsDetail,
        },
    },
    {
        headerMode:'none',
        initialRouteName:'Home'
    }
);

const OrderStack = createStackNavigator(
    {
        Orders: {
            screen: Orders,
        },
        OrderDetail: {
            screen: OrderDetail,
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Orders'
    }
);

const ScanStack = createStackNavigator(
    {
        ScanQRCode: {
            screen: ScanQRCode,
        }
    },
    {
        headerMode:'none',
        initialRouteName:'ScanQRCode'
    }
);


const AppNavigator = createSwitchNavigator(
    {
        HomeStack: {
            screen: HomeStack,
        },
        OrderStack: {
            screen: OrderStack,
        },
        ScanStack: {
            screen: ScanStack,
        },
    },
    {
        headerMode:'none',
        initialRouteName:'ScanStack'
    }
  );
  
  export default createAppContainer(AppNavigator);