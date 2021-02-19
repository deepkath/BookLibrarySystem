import React from 'react';
import { ThemeContext } from '../../context/ContextCreator';
import {themes} from '../../context/themes';

export const ThemeSwitch = (props) =>  {
    return (
        <ThemeContext.Consumer>
        {
            (context) => (
                <button className="btn-switch" onClick={context.toggleTheme}>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAiklEQVRIie2UYQ6AIAiFX63Dde86iR3E/uTmTEtAli6+zT84eOB8AMYfWQEcADzxuCuXjWOIxuJVTJmYl3RdqHljFoqwWR7uqjqPIL1UlxNTIb3QZxNThNX9HRJS1P1dEi7FWfW6/NWhy/S3SjcbgPzEe4vCb1C813SHD+FjEzZhNWGJvzdBrjEoJxKwS2qOSwUyAAAAAElFTkSuQmCC"/>
					{(context.theme.name == themes.dark.name)? themes.light.name: themes.dark.name}
				</button>
            )
        }
        </ThemeContext.Consumer>
    );
}