import { h, render } from 'preact';
import { Container, Text } from './styles';

function App() {
	return (
		<Container>
			<Text>Hello, I was built using Preact and Styled-Component</Text>
		</Container>
	);
}

render(<App />, document.getElementById('root'));
