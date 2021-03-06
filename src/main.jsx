import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

import item1 from 'pages/item1/item1';
import item2 from 'pages/item2/item2';
import item3 from 'pages/item3/item3';
import item4 from 'pages/item4/item4';
import item5 from 'pages/item5/item5';
import item6 from 'pages/item6/item6';

function App(props) {
  return (
    <LocaleProvider locale={zhCN}>
      <div>
        {props.children}
      </div>
    </LocaleProvider>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

const routers = (
  <Router history={browserHistory}>
    <Route exact path="/" component={App}>
      <IndexRoute component={item1} />
      <Route exact path="item1" component={item1} />
      <Route exact path="item2" component={item2} />
      <Route exact path="item3" component={item3} />
      <Route exact path="item4" component={item4} />
      <Route exact path="item5" component={item5} />
      <Route exact path="item6" component={item6} />
    </Route>
  </Router>
);

ReactDOM.render(routers, document.getElementById('app'));
