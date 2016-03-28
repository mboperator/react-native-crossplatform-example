import React, {
  View,
  Component,
  ListView,
  Text,
} from 'react-native';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    console.log('CONSTRUCTOR', this.props.items);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.items),
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('NEW PROPS', nextProps);
    const dataSource = this.state.dataSource.cloneWithRows(nextProps.items);
    this.setState({ dataSource });
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={row => {
            return (<Text>{row.description}</Text>);
          }}
        />
      </View>
    );
  }
}
