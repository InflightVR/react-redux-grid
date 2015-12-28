import React, { PropTypes, Component } from 'react';
import MenuItem from './MenuItem.jsx';
import { connect } from 'react-redux';
import { keyGenerator, keyFromObject } from '../../../util/keygenerator';
import { prefix } from '../../../util/prefix';
import { emptyFn } from '../../../util/emptyFn';
import { CLASS_NAMES } from '../../../constants/GridConstants';

class Menu extends Component {

    static defaultProps = {
        menu: React.PropTypes.array
    }

    getMenuItem(item) {

        const { store } = this.props;

        const menuProps = {
            data: item,
            key: keyFromObject(item),
            store
        };

        return <MenuItem { ...menuProps } />;
    }

    render() {

    	const { menu } = this.props;

    	const menuProps = {
    		className: prefix(CLASS_NAMES.GRID_ACTIONS.MENU.CONTAINER)
    	};
    	
    	const menuItems = menu && menu.length > 0 
    		? menu.map(this.getMenuItem.bind(this))
    		: null;

        return (
            <ul { ...menuProps }>
            	{ menuItems }
            </ul>
        )
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Menu);