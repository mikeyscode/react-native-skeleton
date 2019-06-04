import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import { AddOrder } from '../actions/orderAction';
import { bindActionCreators } from 'redux';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello World!</Text>
                <Button onPress={() => {
                        this.props.AddOrder(
                            {name: 'Added Order', cost: 1.75, size: 'Venti', tag: '98766'}
                        );
                        Alert.alert('Clicked');
                    }}
                    title='Click' 
                    color='#27251F'
                />
                

                <Text style={{ marginTop: 20 }}>
                    Properties:
                    {JSON.stringify(this.props)}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { orders } = state
    return { orders }    
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        AddOrder,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);