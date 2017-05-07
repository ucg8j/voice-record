import React, { Component }   from 'react';
import { Tabs, Tab }					from 'material-ui';
import { withRouter }					from 'react-router-dom';

/* component styles */
import { styles } from './styles.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    /* default */
    this.state = {
    	currentRoute: '/record'
    }
  }


  componentDidMount	() {
  	const { pathname } = this.props.location;
  	this.handleChange(pathname, false);
  }

  /* update the route */
	handleChange=(route, updateURL) => {
		this.setState({
			currentRoute: route
		});

		if(updateURL !== false) { this.pushRoute(route); }
	}

	/* sync the url with the route */
	pushRoute(route) {
		const { history } = this.props;

		switch(route) {
		case '/record':
			history.push('/record');
			break
		case '/recordings':
			history.push('/recordings');
			break;
		default:
		break;
		}
	}

  render() {
    return (
      <div className={styles}>
      	<Tabs
      		className="tabs"
      		value={this.state.currentRoute}
      		onChange={this.handleChange}>
      		<Tab label="Record"
      				value={'/record'}>
      		</Tab>
      		<Tab label="Listen"
      				value={'/recordings'}>
      		</Tab>
      	</Tabs>
      </div>
    );
  }
}

export default withRouter(Navigation);