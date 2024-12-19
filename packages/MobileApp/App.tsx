import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Logo from './src/images/logo.png';
import Custom from './src/images/custom1.jpg';
import Header1 from './src/images/header1.jpg';
import Header2 from './src/images/header2.jpg';
import Header3 from './src/images/header3.jpg';
import Project1 from './src/images/project1.jpg';
import Project2 from './src/images/project2.jpg';
import Project3 from './src/images/project3.jpg';
import Project4 from './src/images/project4.jpg';

function App(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slidingDATA.length);
    }, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.firstView}>
            <ScrollView horizontal>
              <View style={styles.logoView}>
                <Image source={Logo} style={styles.logo} />
              </View>
              {tabsDATA?.map(item => {
                return (
                  <View style={styles.tabView}>
                    <Text>{item}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.secondView}>
            <View style={styles.slidingImageView}>
              <Image
                source={slidingDATA[currentSlide]?.image}
                style={styles.slidingImage}
                resizeMode={'stretch'}
              />
            </View>
            <View style={styles.slidingTextView}>
              <Text>{slidingDATA[currentSlide]?.heading}</Text>
              <Text>{slidingDATA[currentSlide]?.details}</Text>
            </View>
          </View>
          <View>
            <ScrollView horizontal style={styles.thirdView}>
              {thirdSectionDATA?.map(item => {
                return (
                  <View
                    style={[
                      styles.thirdViewItem,
                      {backgroundColor: item.color},
                    ]}>
                    <Text style={styles.fourthText}>{item?.heading}</Text>
                    <Text style={styles.fourthText}>{item?.description}</Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View>
            <Text>Latest Projects</Text>
            <ScrollView horizontal>
              {latestProjectDATA?.map(item => {
                return (
                  <View style={styles.fourthViewItem}>
                    <Image
                      source={item.image}
                      style={{width: 200, height: 200}}
                    />
                    <View style={styles.fourthTextView}>
                      <Text style={styles.fourthText}>{item?.description}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View>
            <View style={styles.fifthView}>
              <View style={styles.fifthImageView}>
                <Image source={Custom} style={styles.fifthImage} />
              </View>
              <View style={styles.fifthViewText}>
                <Text>JUST FEW WORDS</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, aut.jhbjk wnkjndkml kmdmdlkmakmdla jndlqndlkn
                  dlkndlkw jwndlwndln
                </Text>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomView}>
            <Text>Popular Articles</Text>
            <Text>Subpage</Text>
            <Text>Error 404</Text>
            <Text>Example</Text>
            <Text>Typography</Text>
            <Text>All Template Positions</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  logoView: {
    width: 100,
    height: 100,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  tabView: {
    width: 100,
    height: 100,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'red',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  firstView: {
    paddingBottom: 20,
  },
  secondView: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  slidingImageView: {
    width: '30%',
    height: 120,
  },
  slidingImage: {
    width: '100%',
    height: '100%',
  },
  slidingTextView: {
    width: '70%',
    padding: 10,
  },
  thirdView: {
    flexDirection: 'row',
  },
  thirdViewItem: {
    width: 200,
    height: 120,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  fourthViewItem: {
    width: 200,
    marginRight: 20,
  },
  fourthTextView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  fourthText: {
    color: 'white',
  },
  fifthView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  fifthImageView: {width: '40%', height: 150},
  fifthImage: {
    width: '100%',
    height: '100%',
  },
  fifthViewText: {
    width: '60%',
    padding: 10,
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
    marginTop: 20,
  },
});

export default App;
const tabsDATA = [
  'HOME',
  'FEATURES',
  'EXAMPLES',
  'PAGES',
  'LANGUAGES',
  'CONTACT US',
];
const slidingDATA = [
  {
    name: 'image1',
    image: Header1,
    heading: 'STARTING YOUR OWN BUSINESS',
    details:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque fugiat  provident possimus et atque culpa vitae minus repellendus autem?',
  },
  {
    name: 'image2',
    image: Header2,
    heading: 'MICROSOFT OFFICE TRAINING',
    details:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque fugiat  provident possimus et atque culpa vitae minus repellendus autem?',
  },
  {
    name: 'image3',
    image: Header3,
    heading: 'ANDROID DEVELOPMENT',
    details:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde neque fugiat  provident possimus et atque culpa vitae minus repellendus autem?',
  },
];

const thirdSectionDATA = [
  {
    heading: 'TIME MACHINE',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    color: '#017eba',
    class: 'fa-solid fa-clock fa-6x',
  },
  {
    heading: 'ANALYTICS',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    color: '#a0b046',
    class: 'fa-solid fa-tv fa-6x',
  },
  {
    heading: 'WORLDWIDE SERVICES',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    color: '#f78145',
    class: 'fa-solid fa-earth-asia fa-6x',
  },
];

const latestProjectDATA = [
  {
    name: 'Project1',
    image: Project1,
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    name: 'Project2',
    image: Project2,
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    name: 'Project3',
    image: Project3,
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
  {
    name: 'Project4',
    image: Project4,
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  },
];
