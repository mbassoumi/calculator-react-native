import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import colors from "../config/colors";

let width = Dimensions.get('window').width;

export default class Lcd extends Component {

    /**
     * Mounting Cycle:
     *      - constructor(object props)
     *      - componentWillMount()
     *      - render() -> React Element
     *      - componentDidMount()
     */


    /**
     * Updating Cycle:
     *      - componentWillReceiveProps(object nextProps)
     *      - shouldComponentUpdate(object nextProps, object nextState) -> boolean
     *      - componentWillUpdate(object nextProps, object nextState)
     *      - render() -> React Element
     *      - componentDidUpdate(object prevProps, object prevState)
     */

    state = {
        text: "",
    };

    /**
     *
     * @param props
     */
    constructor(props) {
        /**
         * The component class is instantiated.
         * The parameters to the constructor are the element's initial props, as specified by the parent element.
         * You can optionally specify an initial state for the element by assigning an object to this.state.
         * At this point, no native UI has been rendered yet for this element.
         */

        super(props);
        this.children = this.props.children;

    }

    componentWillMount() {
        /**
         * This method is invoked only once,
         * before rendering occurs for the first time.
         * At this point, there is still no native UI rendered for this element.
         */
    }

    componentDidMount() {
        /**
         * This method is invoked only once, after rendering occurs for the first time.
         * At this point, the native UI for this element has finished rendering, and may be accessed through this.refs for direct manipulation.
         * If you need to make async API calls or execute delayed code with setTimeout, that should generally be done in this method.
         */
    }

    /**
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        /**
         * The parent of this component has passed a new set of props.
         * This component will re-render.
         * You may optionally call this.setState() to update this component's internal state before the render method is called.
         */
        // console.log('componentWillReceiveProps');
        // console.log(nextProps);
        this.children = nextProps.children;
    }

    /**
     *
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Based on the next values of props and state, a component may decide to re-render or not to re-render.
         * The base class's implementation of this method always returns true (the component should re-render).
         * For optimization, override this method and check if either props or state have been modified,
         * e.g. run an equality test of each key/value in these objects.
         * Returning false will prevent the render method from being called.
         */
        // console.log('shouldComponentUpdate');
        // console.log(nextProps);
        // console.log(nextState);
        return true;
    }

    /**
     *
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate(nextProps, nextState) {
        /**
         * This method is invoked, after the decision has been made to re-render.
         * You may not call this.setState() here, since an update is already in progress.
         */
        // console.log('componentWillUpdate');
        // console.log(nextProps);
        // console.log(nextState);
    }

    /**
     *
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
        /**
         * This method is invoked after re-rendering occurs.
         * At this point, the native UI for this component has been updated to reflect the React Element returned from the render() method.
         */
        // console.log('componentDidUpdate');
        // console.log(prevProps);
        // console.log(prevState);
    }


    render() {
        /**
         * Mounting Cycle:
         *      - The render method must return a React Element to render (or null, to render nothing).
         *
         * Updating Cycle:
         *      - This method is called, assuming shouldComponentUpdate returned true.
         *        The render method must return a React Element to render (or null, to render nothing).
         */

        return (
            <View style={styles.header}>
                <View style={styles.underlineView}>
                    <Text style={styles.description}>
                        Calculator LCD ...
                    </Text>
                </View>
                <Text style={(this.children.isEqual) ? styles.equal : styles.title}  >
                    {this.children.lcd_text}
                </Text>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: colors.lcdBackground,
        // padding: 100,
    },
    title: {
        // textAlign: 'center',
        padding: 15,
        color: colors.lcdTextColor,
    },
    equal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: colors.answer,
        fontWeight: 'bold',
        fontSize: 0.1*width,
    },

    description: {
        padding: 10,
        paddingBottom: 0,
        // underlineColorAndroid: "black",
        // color: colors.lcdTextColor,
    },
    underlineView:{
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginRight: 5,
        marginLeft:5,
        // paddingRight: 3,
    }


});