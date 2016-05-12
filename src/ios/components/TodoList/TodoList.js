import React, {
  View,
  Component,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 50,
    width: 380,
    paddingTop: 15,
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  left: {
    flex: 2,
  },
  right: {
    flex: 1,
    textAlign: 'right',
  },
});

const TodoItem = actions => ({ description, index }) => (
  <TouchableHighlight
    activeOpacity={1}
    underlayColor="indigo"
    onPress={() => actions.removeTodo({ index: 0 })}
  >
    <View style={styles.item}>
      <Text style={styles.left}>
        {description}
      </Text>
      <Text style={styles.right}>
        Another one
      </Text>
    </View>
  </TouchableHighlight>
);

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(this.props.items),
    };
  }

  componentWillReceiveProps(nextProps) {
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.items);
    this.setState({ dataSource });
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={TodoItem({ removeTodo: this.props.removeTodo })}
        />
      </View>
    );
  }
}
