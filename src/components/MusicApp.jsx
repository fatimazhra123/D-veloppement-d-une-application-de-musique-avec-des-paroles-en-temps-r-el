import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');
function MusicApp() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.maincontainer}>
        {/*image */}
        <View style={[style.imageWrapper, style.elevation]}>
          <Image
            source={require('../components/assets/imagesMusic/BobbyRichards.jpg')}
            style={style.musicImage}/>
        </View>
        {/* son content */}
        <View>
          <Text style={style.songTitle}> Song Title</Text>
          <Text style={style.songArtists}> song artists</Text>
        </View>
        {/*slider */}

        <View>
          <Slider
            value={10}
            style={{
              width: 350,
              height: 40,
              marginTop: 25,
              flexDirection: 'row',
            }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#FCE22A"
            thumbTintColor="#FCE22A"
            maximumTrackTintColor="#30E3DF"
            onSlidingComplete={() => {}}
          />
        </View>
        {/*music progress*/}
        <View style={style.musicProgress} justifyContent="space-between">
          <Text style={style.musicProTitle}> 00:00</Text>
          <Text style={style.musicProTitle}> 00:00</Text>
        </View>

        {/*music controls*/}
        <View style={style.musicControlerContainer} justifyContent="space-between">
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-back-outline" size={35} color="#FCE22A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle-outline" size={70} color="#FCE22A" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
          <Ionicons name="play-skip-forward-outline" size={35} color="#FCE22A" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.bottomIconWrapper} justifyContent="space-between">
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#888888" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#888888" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MusicApp;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderWidth: 1,
  },
  bottomIconWrapper: {
    flexDirection: 'row',
    width: '80%',
  },
  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  elevation: {
    elevation: 5,
    shadowColor: '#ccc',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shodowRadius: 3.84,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
    color: '#EEEEEE',
  },
  songArtists: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
    color: '#EEEEEE',
  },
  musicProgress: {
    width: 340,
    flexDirection: 'row',
  },
  musicProTitle: {
    color: '#fff',
    fontWeight: '500',
  },
  musicControlerContainer: {
    flexDirection:'row',
    alignItems:'center',
   
   
  },
});
