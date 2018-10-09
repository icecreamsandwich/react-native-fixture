import React from 'react';
import {
  ActivityIndicator,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class ScheduleView extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true, bgColor : ""};
    dataSource = [];
    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount(){
    var customData = require('../fixture_sample.json');
    this.setState({
      isLoading: false,
      showView : false,
      dataSource: customData,
    });
  }


  setBgColor(){
    var colors = Array("red","blue","green","yellow","magenta","blue");
    var bgColor = items[Math.floor(Math.random()*items.length)];
    return {
      borderRadius: 12,
      background: bgColor,
    }
  }

  showDetails(i){
    //  alert("id of the TouchableHighlight :" + i)
    this.setState({
      showView: true,
    });
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
    * content, we just wanted to give you a quick view of your config */
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}> All Match details given below </Text>
          </View>
          {this.state.dataSource.map(function(teams, i) {
            return (
              <TouchableOpacity style={[styles.buttonGmail, this.setBgColor()]} onPress={()=>this.showDetails(i) } underlayColor="#999" key={i}>
                <Text style={styles.buttonText}>{teams.Team_1} Vs {teams.Team_2}</Text>
                <Text>{teams.date}
                  {teams.venue}</Text>
              </TouchableOpacity>
            );
          }, this)}
        </ScrollView>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    buttonGmail: {
      // backgroundColor: '#3cba54',
      marginBottom: 15,
      padding: 15,
      // borderRadius: 5
    },
    buttonText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#666666',
      fontSize: 18
    }
  });
