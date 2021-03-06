/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const items = [
  {
    id: 1,
    title: 'Black high heels party sandle',
    price: '1500',
    image: require('./app/assets/sandle.jpg'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem accumsan nunc porttitor elementum ac at eros. Mauris sit amet sodales erat. Suspendisse aliquam venenatis euismod. Proin hendrerit urna quis nulla mattis, eget auctor mi porttitor.'
  },
  {
    id: 2,
    title: 'Converse',
    price: '2500',
    image: require('./app/assets/converse.jpg'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et lorem accumsan nunc porttitor elementum ac at eros. Mauris sit amet sodales erat. Suspendisse aliquam venenatis euismod. Proin hendrerit urna quis nulla mattis, eget auctor mi porttitor.'
  }
]


export default class App extends Component {
  state = {
    descriptionVisible: false
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.toolbar}>
            <Icon name="bars" size={24} color="#fcfcfc" />
            <Text style={styles.title} >the Shop</Text>
            <Icon onPress={()=>this.setState({cartVisible: true})} name="shopping-cart" size={24} color="#fcfcfc" />
          </View>
        </View>
        <ScrollView style={styles.content}>
          {items.map(item=> {
            return(
              <TouchableOpacity onPress={()=>this.setState({descriptionVisible: true})} key={item.id} >
                <View style={styles.product}>
                  <Image style={styles.productImage} source={item.image} />
                  <View style={styles.productDescription}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.productPrice} >Rs. {item.price}</Text>
                    <TouchableOpacity>
                      <View style={styles.button} >
                        <Text style={styles.buttonText}>ADD TO CART</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.descriptionVisible}
          onRequestClose={() => {this.setState({descriptionVisible: false})}}>
          <View style={[styles.header, {position: 'absolute', top: 0, left: 0, zIndex: 1000}]}>
            <View style={[styles.toolbar, {backgroundColor: '#00000055'}]}>
              <Icon onPress={()=>this.setState({descriptionVisible: false})} name="arrow-left" size={24} color="#fff" />
              <Text style={styles.title} >the product</Text>
              <Icon name="heart" color='#ff045c' size={24} />
            </View>
          </View>
          <ScrollView containerStyle={{padding: 20}}>
            <Image source={items[0].image} style={styles.productImage} />
            <View style={styles.productDescription}>
              <Text style={styles.productTitle}>{items[0].title}</Text>
              <Text style={styles.productPrice} >Rs. {items[0].price}</Text>
              <View style={styles.divider}></View>
              <Text>
                {items[0].description}
              </Text>
              <View style={styles.divider}></View>
              <Text style={styles.featureText}>Color: <Text style={styles.bold}>Black</Text></Text>
              <Text style={styles.featureText} >Size: <Text style={styles.bold}>Medium</Text></Text>
              <Text style={styles.featureText} >Heel: <Text style={styles.bold}>4 cm</Text></Text>
            </View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity>
                <View style={[styles.buttonOutline, {marginRight: 10}]}>
                  <Text style={styles.buttonOutlineText}>50 Favourites</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={[styles.buttonOutline, {marginLeft: 10}]}>
                  <Text style={styles.buttonOutlineText}>22 Reviews</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity>
            <View style={styles.button} >
              <Text style={styles.buttonText}>ADD TO CART</Text>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = {};
