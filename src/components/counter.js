import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class Counter extends Component{
  render(){
    console.log(this.props.count);
    return(
      <Container>
                <Header>
                    <Body>
                        <Title>Redux Counter</Title>
                    </Body>
                </Header>
                <Content padder>
                <Card>
                <CardItem>
                            <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
                                {this.props.count}
                            </Text>
                </CardItem>
                </Card>
                        <Button dark bordered onPress= {() => this.props.increment()}>
                             <Text>Increment</Text>
                         </Button>
                         <Button dark bordered onPress= {() => this.props.decrement()}>
                              <Text>Decrement</Text>
                          </Button>
                 </Content>
            </Container>
    );
  }
}

function mapStateToProps(state){
return{
 count : state.count
};
}
function matchDispatchToProps(dispatch){
return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
