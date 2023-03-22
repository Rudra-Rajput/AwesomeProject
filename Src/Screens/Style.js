import { StyleSheet } from "react-native";

export default StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
   },
   textStyle: {
    textAlign: 'center',
    marginTop: '8%',
    fontSize: 22,
    fontWeight: '800',
    color: '#000000'
   },
   inputContainer: {
      marginTop: '5%',
      marginHorizontal: '5%'
   },
   buttonStyle: {
      marginTop: '6%',
      marginHorizontal: '5%',
      backgroundColor: 'red',
      paddingVertical: 8,
      borderRadius: 5,
   },
   btnText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
      textAlign: 'center',
      letterSpacing: 1
   },
   passIconContainer: {
      position: 'absolute',
      right: 10,
      top: 20,
   },
   cardContainer: {
     width: '90%',
     borderRadius: 10,
     alignSelf: 'center',
     backgroundColor: 'blue',
     marginTop: '4%',
     justifyContent: 'center',
     alignItems: 'center',
     paddingVertical: 10,
   },
   cardStyle: {
      color: 'white',
      fontSize: 17,
      fontWeight: '600',
      letterSpacing: 1,
   },
   titleTextContainer: {
      marginTop: '10%',
      marginLeft: '6%'
   },
   titleText: {
      fontSize: 20,
      color: '#000000',
      fontWeight: '800'
   }
});



