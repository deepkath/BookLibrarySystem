import React from 'react';
import {ThemeContext} from './ContextCreator';
import {themes} from './themes';
import {fetchFromStorage, saveToStorage} from '../helper/storageUtil';

export class ThemeProvider extends React.Component {
    toggleTheme = () => {
        let newTheme = (this.state.theme.name == themes.dark.name)? themes.light: themes.dark;
        saveToStorage('savedTheme',newTheme);
        this.setState({
            theme: newTheme
        });
    }

    state = {
        theme : fetchFromStorage('savedTheme') || themes.dark,
        toggleTheme: this.toggleTheme
    }
	
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}