import React, { Component } from 'react'
import { StyleSheet,View,ScrollView, } from 'react-native';

import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGopay from '../../../containers/organisms/HomeGopay';


class Home extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView style={{flex:1,backgroundColor:'white'}}>
                {/* Search Bar */}
                <SearchFeature/>
                {/* Gopay */}
                <HomeGopay/>
                {/* Main Feature */}
                <HomeMainFeature/>
                <View style={{height:17,backgroundColor:'#F2F2F4', marginTop:20}}></View>
                {/* News Section */}
                <GoNews onPress ={() => this.props.navigation.navigate('NewsDetail')}/>
                {/* Internal Informaion Section */}
                <GoInfo/>
                {/* Gofood Banner Section */}
                <GoBanner/>
                {/* Nearby Go-Food */}
                <ScrollableProducts/> 
          </ScrollView>
          <NavBar/>
        </View>
        )
    }
}

export default Home;