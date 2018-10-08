import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

export default class ScheduleView extends React.Component {

  constructor(props){
      super(props);
      this.state ={ isLoading: true};
      dataSource = [];
    }

  componentDidMount(){
    var customData = require('./fixture_sample.json');
       this.setState({
         isLoading: false,
         dataSource: customData,
       }, function(){

       });
     }

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
              <TouchableHighlight style={styles.buttonGmail} onPress={()=> } underlayColor="#999" key={i}>
                    <Text style={styles.buttonText}>{teams.Team1} Vs {teams.Team2} </Text>
              </TouchableHighlight>

              <View style={styles.welcomeContainer}>
               <Text>{teams.date}
               {teams.venue}</Text>
              </View>
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
  button: {
    backgroundColor: '#cccccc',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonGmail: {
    backgroundColor: '#3cba54',
    marginBottom: 15,
    padding: 15,
    borderRadius: 5
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 18
  }
});
