import {View, Text, TouchableOpacity, FlatList, Alert, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Style from './Style';
import {TextInput} from 'react-native-paper';
import database from '@react-native-firebase/database';
import Auth from '@react-native-firebase/auth';

const Home = ({navigation}) => {
  const [inputText, setInputText] = useState(null);
  const [list, setList] = useState([]);
  const [isUpdate, setisUpdate] = useState(false);
  const [selectedCardIndex, setselectedCardIndex] = useState(null);
  const [ind, setindex] = useState(0);

console.log(ind,'66')

  useEffect(() => {
    getDatabase();
  }, []);
  // const newarr = [];
  const handleSubmit = async () => {
    try {
      if (inputText?.length > 0) {
        // newarr.push(inputText)
        // console.log(ind,'26')
        const response = await database().ref(`todo/${ind}`).set({
          value: inputText,
        });
        setindex(Number(ind+1))
        console.log(response);
        setInputText('');
        alert('Todo successfully added');
      } else {
        alert('Warning! Please enter value and try again');
      }
    } catch (error) {
      console.log(error, '00');
    }
  };

  const getDatabase = async () => {
    try {
      // const data = await database().ref('todo').once('value');
      const data = await database()
        .ref('todo')
        .on('value', temdata => {
          console.log(data);
          setList(temdata.val());
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      if (inputText?.length > 0) {
        const response = await database()
          .ref(`todo/${selectedCardIndex}`)
          .update({
            value: inputText,
          });
        console.log(response);
        setInputText('');
        setisUpdate(false);
        alert('Todo successfully updated');
      } else {
        alert('Warning! Please enter value and try again');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardPress = (cardIndex, cardValue) => {
    try {
      setisUpdate(true);
      setselectedCardIndex(cardIndex);
      setInputText(cardValue);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (cardIndex, cardValue) => {
    try {
      Alert.alert('Alert', `Are you sure you want to delete ${cardValue} ?`, [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Ok',
          onPress: async () => {
            try {
              const response = await database()
                .ref(`todo/${cardIndex}`)
                .remove();
              console.log(response);
              setInputText('');
              setisUpdate(false);
              alert('Todo successfully deleted');
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]);
      // setisUpdate(true);
      // setselectedCardIndex(cardIndex);
      // setInputText(cardValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={Style.container}>
      <View
        style={{
          marginTop: '5%',
          alignItems: 'center',
          flexDirection: 'row',
          marginHorizontal: '5%',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20, fontWeight: '800', color: '#000000'}}>
          Add Your Todos
        </Text>
        <TouchableOpacity onPress={ async ()=>{
           await Auth().signOut();
           navigation.navigate('Login');
        }} activeOpacity={0.7}>
          <Text style={{color: 'red', fontWeight: '800', fontSize: 16}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Style.inputContainer}>
        <TextInput
          mode="outlined"
          label=""
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type Here..."
        />
      </View>

      {!isUpdate ? (
        <TouchableOpacity
          onPress={handleSubmit}
          activeOpacity={0.7}
          style={[Style.buttonStyle, {backgroundColor: 'green'}]}>
          <Text style={Style.btnText}>ADD TODO</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleUpdate}
          activeOpacity={0.7}
          style={Style.buttonStyle}>
          <Text style={Style.btnText}>UPDATE TODO</Text>
        </TouchableOpacity>
      )}

      <View style={Style.titleTextContainer}>
        <Text style={Style.titleText}>TODO LIST</Text>
      </View>

        <View style={{flex: 1, marginBottom: '5%'}}>
        <FlatList
          data={list}
          renderItem={item => {
            const cardIndex = item.index;
            // console.log(item);
            if (item.item !== null) {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleCardPress(cardIndex, item.item.value)}
                  onLongPress={() => handleDelete(cardIndex, item.item.value)}
                  style={Style.cardContainer}>
                  <Text style={Style.cardStyle}>{item.item.value}</Text>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>

    </View>
  );
};

export default Home;
