import React, {
  View,
  Component,
  ListView,
  TouchableHighlight,
  Text,
} from 'react-native';

const TodoItem = actions => ({description, index}) => (
  <TouchableHighlight onPress={actions.removeTodo.bind(null, 0)}>
    <View>
      <Text>
        {description}
      </Text>
      <View>
      </View>
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
