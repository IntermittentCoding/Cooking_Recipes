// CSS Examples
import React, { Component } from 'react';
import cls from 'classnames';
import grid from 'getbase/scss/styles.scss';
import styles from './style.scss';
import logo from './logo.svg';

class App extends Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    setInterval(this.increment, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.increment);
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React | Count: {this.state.count}</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/components/App/index.js</code> and save to reload.
        </p>
        <div className={cls(grid['container-m'], styles.marginTop)}>
            Klasa container-m
            Tutaj jest uzyty grid <a href="http://getbase.org/docs/grid.html">asd</a> można też korzystac z SASS. Tutaj jest uzyty grid <a href="http://getbase.org/docs/grid.html">asd</a> można też korzystac z SASS.
            Tutaj jest uzyty grid <a href="http://getbase.org/docs/grid.html">asd</a> można też korzystac z SASS. Tutaj jest uzyty grid <a href="http://getbase.org/docs/grid.html">asd</a> można też korzystac z SASS.
        </div>
        <div className={cls(grid.container, styles.marginTop)}>
            Klasa container
            Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS. Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS.
            Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS. Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS.
        </div>
        <div className={cls(grid['container-l'], styles.marginTop)}>
            Klasa container-l
            Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS. Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS.
            Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS. Tutaj jest uzyty grid <a>http://getbase.org/docs/grid.html</a> można też korzystac z SASS.
        </div>
      </div>
    );
  }
}

export default App;
