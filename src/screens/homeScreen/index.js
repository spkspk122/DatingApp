import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-deck-swiper';
import {iconpathurl} from '../../constant/iconpathurl';
import {baseStyle} from '../../constant/themes';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../utlis/constants';

function HomeScreen() {
  const cards = [
    {id: 1, img: iconpathurl.logo},
    {id: 2, img: iconpathurl.signupBanner},
    {id: 3, img: iconpathurl.cardImg},
    // Add more cards as needed
  ];

  const renderCard = card => {
    return (
      <View
        style={{
          borderWidth: 1,
          alignSelf: 'center',
          width: '90%',
          backgroundColor: 'white',
          height: '80%',
          marginTop: '15%',
          borderRadius: 15,
          elevation: 5,
        }}>
        {/* <View
          style={{
            borderRadius: 50,
            // backgroundColor: 'red',
            borderWidth: 1,
            borderColor: 'red',
            height: '75%',
          }}> */}
        <ImageBackground
          source={card.img}
          style={{
            height: '85%',
            width: '95%',

            alignSelf: 'center',

            marginTop: '10%',
            marginLeft: '5%',
          }}>
          <View style={{alignSelf: 'center', backgroundColor: '#000000'}}>
            <Text
              style={[
                baseStyle.txtStyleOutPoppinBold(
                  heightPercentageToDP('2%'),
                  colors.white,
                ),
              ]}>
              She likes you
            </Text>
          </View>
        </ImageBackground>
        {/* </View> */}
      </View>
    );
  };

  const onSwiped = index => {
    console.log('Swiped card index:', index);
  };
  return (
    <Swiper
      cards={cards}
      renderCard={renderCard}
      onSwiped={onSwiped}
      stackSize={3} // Number of cards visible in the stack
      infinite // Enable infinite swiping
      backgroundColor="white" // Background color of the card stack
      cardHorizontalMargin={20} // Horizontal margin between cards
      cardVerticalMargin={60} // Vertical margin between cards
      stackSeparation={10} // Vertical separation between stacked cards
    />
    // <View
    //   style={{
    //     borderWidth: 1,
    //     alignSelf: 'center',
    //     width: '90%',
    //     backgroundColor: 'red',
    //     height: '50%',
    //     marginTop: '15%',
    //   }}>
    //   <Image
    //     source={iconpathurl.signupBanner}
    //     style={{
    //       height: '50%',
    //       width: '80%',
    //       resizeMode: 'cover',
    //       alignSelf: 'center',
    //       backgroundColor: 'white',
    //       marginTop: '15%',
    //     }}
    //   />
    // </View>
  );
}
export default HomeScreen;
