import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/ytComponents/TopBar";
import FilterBar from "../../components/ytComponents/FilterBar";
import Shorts from "../../components/ytComponents/Shorts";

const index = () => {

  const [Active,SetActive] = useState("")

  const handleClick = (Title:string)=>{

    SetActive(Title)
    
  }

  return (
    <SafeAreaView>
     <ScrollView>



     <View>
        {/* Top BAr */}
        <TopBar />

        {/* Filter Bar */}

       <FilterBar ActiveColor="navy" BackgroundColor="orange" TextColor="white">


       <FilterBar.FilterButton BackColor="orange" SelectedColor="green" ActiveItem ={Active} OnFilterPress={handleClick} Title="Music"/>
       
       <FilterBar.FilterButton BackColor="purple" SelectedColor="black" ActiveItem ={Active} OnFilterPress={handleClick} Title="Best"/>
       <FilterBar.FilterButton Color="black" BackColor="gray" SelectedColor="yellow" ActiveItem ={Active} OnFilterPress={handleClick} Title="New to you"/>
       
       
       </FilterBar>


        <View
        
        style={{

      
         height:'100%',
         padding:10,
         gap:10
        }}
        >

          <Shorts/>
          <Shorts/>

          <Shorts/>
          <Shorts/>
        </View>
      </View>
     </ScrollView>
    </SafeAreaView>
  );
};

export default index;
