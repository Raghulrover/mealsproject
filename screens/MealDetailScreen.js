import { useLayoutEffect } from 'react';

import { ScrollView, View, Text, Image, StyleSheet, Button } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';

import { MEALS } from '../data/dummy-data';

function MealDetailScreen({ route, navigation }){
    
    const mealId = route.params.mealId;

    const selectedMeals = MEALS.find((meal) => mealId === meal.id);

    function headerButtonPressHandler(){
        console.log("pressed");
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight : ()=> {
                return <IconButton icon='star' color='white' onPress={headerButtonPressHandler}/>
            }
        });
    },[navigation, headerButtonPressHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style = {styles.image} source={{ uri : selectedMeals.imageUrl}}/>
            <Text style={styles.title}>{selectedMeals.title}</Text>
            <MealDetails duration={selectedMeals.duration} complexity={selectedMeals.complexity} affordability={selectedMeals.affordability} textStyle={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data= { selectedMeals.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeals.steps}/>
                </View>
            </View> 
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
   rootContainer : {
        marginBottom : 24
   },
   image : {
    width : '100%',
    height : 350
   },
   title : {
    fontSize : 24,
    fontWeight : 'bold',
    margin : 8,
    textAlign : 'center',
    color : 'white'
   },
   detailText : {
    color : 'white'
   },
   listContainer : {
    width : '80%'
   },
   listOuterContainer : {
    alignItems : 'center'
   }
});