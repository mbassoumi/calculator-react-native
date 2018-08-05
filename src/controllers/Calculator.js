import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NumberButton from "../components/NumberButton";
import colors from "../config/colors"
import Lcd from "../components/Lcd";


export default class Calculator extends Component {

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


    buttonsArray = [
        [
            {
                title: "1",
                accessibilityLabel: "add 1",
                color: colors.numberButton,
                value: "1"
            },
            {
                title: "2",
                accessibilityLabel: "add 2",
                color: colors.numberButton,
                value: "2"
            },
            {
                title: "3",
                accessibilityLabel: "add 3",
                color: colors.numberButton,
                value: "3"
            },
            {
                title: "+",
                accessibilityLabel: "plus",
                color: colors.operatorButton,
                value: "+"
            },
        ],
        [
            {
                title: "4",
                accessibilityLabel: "add 4",
                color: colors.numberButton,
                value: "4"
            },
            {
                title: "5",
                accessibilityLabel: "add 5",
                color: colors.numberButton,
                value: "5"
            },
            {
                title: "6",
                accessibilityLabel: "add 6",
                color: colors.numberButton,
                value: "6"
            },
            {
                title: "-",
                accessibilityLabel: "minus",
                color: colors.operatorButton,
                value: "-"
            },
        ],
        [
            {
                title: "7",
                accessibilityLabel: "add 7",
                color: colors.numberButton,
                value: "7"
            },
            {
                title: "8",
                accessibilityLabel: "add 8",
                color: colors.numberButton,
                value: "8"
            },
            {
                title: "9",
                accessibilityLabel: "add 9",
                color: colors.numberButton,
                value: "9"
            },
            {
                title: "*",
                accessibilityLabel: "multiply",
                color: colors.operatorButton,
                value: "*"
            },
        ],
        [
            {
                title: "<-",
                accessibilityLabel: "delete",
                color: colors.operatorButton,
                value: "del"
            },
            {
                title: "0",
                accessibilityLabel: "add 0",
                color: colors.numberButton,
                value: "0"
            },
            {
                title: "/",
                accessibilityLabel: "divide",
                color: colors.operatorButton,
                value: "/"
            },
            {
                title: "=",
                accessibilityLabel: "equal",
                color: colors.operatorButton,
                value: "="
            },
        ],


    ];

    state = {
        lcd_text: '',
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
        // console.log('---------------------------------------------------------');
        super(props);
        // console.log('constructor calculator');

    }

    componentWillMount() {
        /**
         * This method is invoked only once,
         * before rendering occurs for the first time.
         * At this point, there is still no native UI rendered for this element.
         */
        // console.log('---------------------------------------------------------');
        // console.log('componentWillMount calculator');
    }

    componentDidMount() {
        /**
         * This method is invoked only once, after rendering occurs for the first time.
         * At this point, the native UI for this element has finished rendering, and may be accessed through this.refs for direct manipulation.
         * If you need to make async API calls or execute delayed code with setTimeout, that should generally be done in this method.
         */
        // console.log('componentDidMount calculator');
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
        // console.log('---------------------------------------------------------');
        // console.log('componentWillReceiveProps calculator');
        // console.log(nextProps);
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
        // console.log('---------------------------------------------------------');
        // console.log('shouldComponentUpdate calculator');
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
        // console.log('---------------------------------------------------------');
        // console.log('componentWillUpdate calculator');
        // console.log(nextProps);
        // console.log(nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        /**
         * This method is invoked after re-rendering occurs.
         * At this point, the native UI for this component has been updated to reflect the React Element returned from the render() method.
         */
        // console.log('---------------------------------------------------------');
        // console.log('componentDidUpdate calculator');
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
        // console.log('render');

        this.mapArrayToButtons();

        return (

            <View style={styles.parentView}>


                <View style={styles.lcd}>
                    <Lcd>
                        {this.state.lcd_text}
                    </Lcd>
                </View>

                <View style={styles.numbers}>

                    {
                        this.buttonsArray.map((prop, key) => {
                            return (
                                <View style={styles.rowData} key={key}>
                                    {
                                        prop.map((prop, key) => {
                                            return (
                                                <NumberButton
                                                    key={key}
                                                    onPress={this.setNumber}
                                                    title={prop['title']}
                                                    accessibilityLabel={prop['accessibilityLabel']}
                                                    color={prop['color']}
                                                    value={prop['value']}
                                                />
                                            )
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }


    setNumber = (number) => {
        if (number == "del") {
            this.setState({
                lcd_text: this.state.lcd_text.substring(0, this.state.lcd_text.length - 1),
            });
        } else if (this.checkIfNumberIsOperator(number)) {
            const temp_str = this.state.lcd_text;
            const last_element = temp_str.substring(temp_str.length - 1, temp_str.length);
            if (number == "-"){
                if (last_element == "-"){
                    this.setState({
                        lcd_text: this.state.lcd_text.substring(0, this.state.lcd_text.length - 1),
                    });
                } else {
                    this.setState({
                        lcd_text: this.state.lcd_text + number,
                    });
                }
            } else {
                // while (true) {
                //     if (this.checkIfLastElementIsOperator()) {
                //         this.setState({
                //             lcd_text: this.state.lcd_text.substring(0, this.state.lcd_text.length - 1) + number,
                //         });
                //     }else {
                //         break;
                //     }
                // }
                if (this.checkIfLastElementIsOperator()) {
                    this.setState({
                        lcd_text: this.state.lcd_text.substring(0, this.state.lcd_text.length - 1) + number,
                    });
                } else if(this.state.lcd_text == "" || last_element == ""){
                    //do nothing
                }else {
                    this.setState({
                        lcd_text: this.state.lcd_text + number
                    });
                }
            }

        } else if (number == "=") {
            if (this.checkIfLastElementIsOperator()) {
                this.setState({
                    lcd_text: this.state.lcd_text.substring(0, this.state.lcd_text.length - 1),
                });
            }
        } else {
            this.setState({
                lcd_text: this.state.lcd_text + number
            });
        }

        // console.log(number);
        // console.log(this.state.lcd_text);
    };

    checkIfNumberIsOperator = (number) => {
        if (number == "+"
            || number == "-"
            || number == "*"
            || number == "/"
        ) {
            return true;
        } else {
            return false;
        }
    };

    checkIfLastElementIsOperator = () => {
        const temp_str = this.state.lcd_text;
        const last_element = temp_str.substring(temp_str.length - 1, temp_str.length);
        if (last_element == "+"
            || last_element == "-"
            || last_element == "*"
            || last_element == "/"
    ) {
            return true;
        } else {
            return false;
        }
    };

    mapArrayToButtons = () => {
        this.buttonsArray.map((prop, key) => {
            return (
                <View style={styles.rowData}>
                    {
                        prop.map((prop, key) => {
                            return (
                                <NumberButton
                                    key={key}
                                    onPress={this.setNumber}
                                    title={prop['title']}
                                    accessibilityLabel={prop['accessibilityLabel']}
                                    color={prop['color']}
                                    value={prop['value']}
                                />
                            )
                        })
                    }
                </View>
            )
        })
    };

}


const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.background,
        // backgroundColor: colors.background,
    },
    rowData: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    lcd: {
        flex: 1,
        // backgroundColor: colors.lcdBackground,
        padding: 10,
    },
    numbers: {
        flex: 2,
    },

});