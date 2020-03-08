import * as React from 'react';
import { Wrapper, Title, Field, Color, Text } from './styled';

const ToolTip = ({ name, fields }) => (
	<Wrapper>
		<React.Fragment>
			<Title>{name}</Title>
			{fields.map((field) => (
				<Field key={field.label}>
					<Color color={field.color} />
					<Text>
						{field.label}: {field.value}
					</Text>
				</Field>
			))}
		</React.Fragment>
	</Wrapper>
);

export default ToolTip;
