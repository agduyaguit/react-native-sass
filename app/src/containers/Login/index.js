import React from 'react';
import { Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
//import Styles from './index.scss';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.onHandleTextChange = this.onHandleTextChange.bind(this);
	}

	onHandleTextChange(input) {
		this.setState(input);
	}

	render() {
		const { username, password } = this.state;

		return (
			<KeyboardAvoidingView behavior="padding" style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
				<Text>Hi There!</Text>

				<TextInput
					value={username}
					onChangeText={(text) => this.onHandleTextChange({ username: text })}
					// style={Styles.input}
				/>

				<TextInput
					value={password}
					secureTextEntry
					onChangeText={(text) => this.onHandleTextChange({ password: text })}
					// style={Styles.input}
				/>

				<TouchableOpacity>
					<Text>Sign In</Text>
				</TouchableOpacity>

			</KeyboardAvoidingView>
		);
	}
}

export default Login;
