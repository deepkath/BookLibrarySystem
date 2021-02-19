import React from 'react';
import { ThemeContext } from '../../context/ContextCreator';

export const PageWrapper = (props) =>  {
    return (
        <ThemeContext.Consumer>
        {
            (context) => (
                <div className={`page-wrapper ${context.theme.classname}`}>
                    {props.children}
                </div>
            )
        }
        </ThemeContext.Consumer>
    );
}