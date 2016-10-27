import React, { Component } from 'react';
import { TextInput, MapView } from 'react-native';
import { Container, Content, Header, Title } from 'native-base';
import { connectModule } from 'redux-modules';

import locationModule from '../../../_shared/modules/location';
import TodoList from '../../components/TodoList';
import styles from './style';

@connectModule(locationModule)
export default class App extends Component {
  componentDidMount() {
    const { actions = {} } = this.props;
    actions.hydrate();
  }

  render() {
    const {
      actions = {},
      collection = [],
      region,
    } = this.props || {};
    return (
      <Container>
        <Header>
          <Title>
            spotnotes
          </Title>
        </Header>

        <Content>
          <TextInput
            style={{ height: 45, borderColor: 'gray', borderWidth: 1 }}
            onSubmitEditing={e => {
              actions.create({ description: e.nativeEvent.text });
            }}
            keyboardType="default"
          />
          <TodoList collection={collection} />
          <MapView
            style={styles.map}
            region={region}
          />
        </Content>
      </Container>
    );
  }
}
