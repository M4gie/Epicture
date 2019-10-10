import React from 'react';
import {Text} from "react-native";

const LayoutContainer = (props) => {
    const {title} = props;
    return (
        <>
            <Text>coucou je suis le header</Text>
            <Text>{title}</Text>
            {props.children}
        </>
    );
};

export default LayoutContainer;
