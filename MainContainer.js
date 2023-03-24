import { View, SafeAreaView, StyleSheet, Image, Text, TouchableWithoutFeedback, Touchable, TouchableOpacity, LogBox} from "react-native";
import React from "react";
import { countryCodes } from "./assets/country-codes";
import { flagImages } from "./flags";
import FlipCard from 'react-native-flip-card'

LogBox.ignoreLogs(['touchEvent.location']);



export default function MainContainer() {
  const [countryIndex, setCountryIndex] = React.useState(Math.floor(Math.random() * 194));
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isNext, setIsNext] = React.useState(false);

  return (
    <SafeAreaView style={{ padding: 5, backgroundColor: "#d2f7dc" }}>
      <View style={styles.contentContainer}>
        <TouchableWithoutFeedback onPress={() => {
            setIsFlipped(!isFlipped);
        }}>
        {/* <View style={styles.flipCard}> */}

            <FlipCard 
                style={styles.flipCard}
                friction={10}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={isNext}
                flip={isFlipped}
                clickable={true}
                useNativeDriver={true}
                >

                <View style={styles.side} >
                    <Image
                        style={styles.flagImage}
                        source={flagImages[countryCodes[countryIndex]['alpha2']]}
                    />
                </View>

                <View style={styles.side} >
                    <Text style={styles.anwerText}>{countryCodes[countryIndex]['name']}</Text>
                </View>

        </FlipCard>

        {/* </View> */}
        </TouchableWithoutFeedback>
        <TouchableOpacity 
            style={{position: 'absolute', bottom: 30}} 
            onPress={() => {
                // setIsFlipped(!isFlipped);
                setCountryIndex(Math.floor(Math.random() * 194));
                setIsNext(true);

                setIsFlipped(true);

                setTimeout(() => {
                    setIsNext(false);
                }, 300);
                
                
                
                setCountryIndex(Math.floor(Math.random() * 194));

                console.log(Object.keys(countryCodes)[countryIndex]);
            }}
        >

            <View style={styles.nextBtn}>
                <Text style={styles.nextBtnText}>Nächste</Text>
            </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    side: {
        width: '92%',
        aspectRatio: 3/2,
        backgroundColor: "lightgray",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,


    },
    flipCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        marginTop: 150,
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    flagImage: {
        height: '100%',
        aspectRatio: 3/2,
        backgroundColor: "white",
        borderRadius: 8,

    },
    anwerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    nextBtn: {
        width: '100%',
        height: 50,
        backgroundColor: "#00a86b",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    nextBtnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10,
        paddingHorizontal: 100,
    },
    card: {
        width: "100%",
        height: "100%",
    }
});


// isNext==true
// true
// true

// false
// false

// isNext==false
// true
// false