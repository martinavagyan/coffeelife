import * as React from 'react';
import {Wrapper, Title, Field, Color, Text} from './styled';

const wrap = shouldWrap => component => (shouldWrap ? <Wrapper>{component}</Wrapper> : component);

const ToolTip = ({name, fields, withContainer}) =>
  wrap(withContainer)(
    <React.Fragment>
      <Title>{name}</Title>
      {fields.map(field => (
        <Field key={field.label}>
          <Color color={field.color} />
          <Text>
            {field.label}: {field.value}
          </Text>
        </Field>
      ))}
    </React.Fragment>
  );

export default ToolTip;
