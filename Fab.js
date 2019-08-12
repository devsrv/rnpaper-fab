import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Alert
} from 'react-native';

import { FAB } from 'react-native-paper';

export default class FabComponent extends Component {
    state = {
        disableFab: false
    }

    handleFabPress = () => {
        Alert.alert(
            'Alert Title',
            'You pressed the floating button',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Button
                        onPress={() => {
                                this.setState((prevState) => {
                                    return {
                                        disableFab: ! prevState.disableFab
                                    }
                                })
                            }
                        }
                        title={this.state.disableFab? 'Enable FAB' : 'Disable FAB'}
                        color="#488c51"
                    />
                </View>

                <FAB
                    style={styles.fab}
                    small={false}
                    icon="apple"
                    disabled={this.state.disableFab}
                    onPress={this.handleFabPress}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
  });
  