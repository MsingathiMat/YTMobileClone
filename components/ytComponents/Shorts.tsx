import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const Shorts = () => {

  const DeviceWidth = Dimensions.get('screen').width
  return (
    
<View style={{

flexDirection:'row',
gap:10
}}>



<ImageBackground
 borderRadius={10}
 style={{

  height:300,
  width:(DeviceWidth-30)/2,
  

 
  }}
source={require('../../assets/shortsImages/img3.jpeg')}>

<View style={{

 
}}>

<Entypo style={{

marginLeft:'auto',
padding:10
}}

name="dots-three-vertical" size={18} color="white" />
</View>


<View style={{

  flex:1
}}>


</View>
<View style={{


height:70,
alignItems:'center',
justifyContent:'center',

}}>

<Text style={{color:'white', textAlign:'center'}}>Just a day in my life and i am having fun</Text>
</View>


</ImageBackground>

<ImageBackground
 borderRadius={10}
 style={{

  height:300,
  width:(DeviceWidth-30)/2,
  

 
  }}
source={require('../../assets/shortsImages/img3.jpeg')}>

<View style={{

 
}}>

<Entypo style={{

marginLeft:'auto',
padding:10
}}

name="dots-three-vertical" size={18} color="white" />
</View>


<View style={{

  flex:1
}}>


</View>
<View style={{


height:70,
alignItems:'center',
justifyContent:'center',

}}>

<Text style={{color:'white', textAlign:'center'}}>Just a day in my life and i am having fun</Text>
</View>


</ImageBackground>
</View>
 

  
 
  )
}

export default Shorts