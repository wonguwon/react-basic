import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('constructor: 컴포넌트 생성');
  }

  // 부모 컴포넌트로부터 props가 바뀔 때마다 호출
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps: 새로운 props 또는 state에 따라 상태를 업데이트');
    // 상태를 반환하거나, null을 반환하여 업데이트하지 않음
    return null;
  }

  // 컴포넌트가 마운트되었을 때 호출 (처음 렌더링될 때)
  componentDidMount() {
    console.log('componentDidMount: 컴포넌트가 마운트되었습니다.');
  }

  // 컴포넌트가 업데이트되기 전에 호출
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: 컴포넌트 업데이트 여부를 결정');
    // true를 반환하면 리렌더링을 진행, false면 리렌더링을 방지
    return true;
  }

  // getDerivedStateFromProps 이후에 호출되며, 렌더링 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: 렌더링 직전에 호출됩니다.');
    return null;  // 반환값은 componentDidUpdate에 전달됩니다.
  }

  // 컴포넌트가 업데이트된 후 호출
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: 컴포넌트가 업데이트되었습니다.');
    console.log('이전 props:', prevProps);
    console.log('이전 state:', prevState);
  }

  // 컴포넌트가 언마운트될 때 호출
  componentWillUnmount() {
    console.log('componentWillUnmount: 컴포넌트가 언마운트됩니다.');
  }

  // 상태 변경을 위한 메서드
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render: 컴포넌트 렌더링');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
