import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginBottom: 5,
  },
});

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Add Todo</Text>
        <TextInput
          style={{ height: 45, borderColor: 'gray', borderWidth: 1 }}
          onSubmitEditing={e => {
            this.props.actions.create({
              todo: { description: e.nativeEvent.text },
            });
          }}
          keyboardType="default"
        />
        <View style={styles.instructions}>
          <TodoList
            items={this.props.data}
            removeTodo={this.props.actions.destroy}
          />
        </View>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

export default TodoApp;
