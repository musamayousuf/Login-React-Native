import React from 'react';
import { StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Image 
            style={{width:'100%', height:300}}
            source = {require('./assets/pic.png')}
            resizeMode = "contain"
            />

            <Text style={{fontSize : 40, fontWeight:'bold'}} > Hello!</Text>
            <Text style={{fontSize:15, color :'grey',textAlign:'center',marginHorizontal: 20 }}> Welcome</Text>

            <View style={{flexDirection : 'row', margin :20, paddingVertical:20}}>
            <TouchableOpacity 
            style={{backgroundColor : '#0d47a1', padding : 10, width:150, borderRadius:30,marginHorizontal : 2}}
            >
            <Text style={{textAlign:'center', color:'#fff',fontSize : 18}}> Login</Text>

            </TouchableOpacity>   
            
            <TouchableOpacity 
            style={{backgroundColor : '#FFF', padding : 10, width:150,marginHorizontal : 2 , borderColor : '#000000', borderWidth:1, borderRadius :30  }}
            >
            <Text style={{textAlign:'center', color:'#0d47a1',fontSize : 18}}> Sign up</Text>

            </TouchableOpacity>   
            

            
            
            </View>

            <Text style={{fontSize : 16, marginTop : 10}}> Or via social media</Text>
            
            <View style={{flexDirection : 'row', marginTop : 20}}>
            <View style={{height:40, width:40, borderRadius:40/2,backgroundColor:'#3f51b5' , marginHorizontal:10, 
            alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize: 20 , fontWeight :'bold' , color : '#fff'}}>f</Text>


              </View>

              <View style={{height:40, width:40, borderRadius:40/2,backgroundColor:'#f44336 ' , marginHorizontal:10,justifyContent:'center' , alignItems : 'center'}}>
              <Text style={{fontSize: 20 , fontWeight :'bold' , color : '#fff'}}>G</Text>
              </View>

              <View style={{height:40, width:40, borderRadius:50/2,backgroundColor:'#1565c0' , marginHorizontal:10 ,justifyContent:'center' , alignItems : 'center'}}>
              <Text style={{fontSize: 20 , fontWeight :'bold' , color : '#fff'}}>in</Text>
              </View>

            </View>
             


            

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
