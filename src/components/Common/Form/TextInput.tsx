import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form'
import { FormFieldProps, Form, Label } from 'semantic-ui-react';

interface IProps extends FieldRenderProps<string, HTMLElement>, FormFieldProps {

}

const TextInput: FC<IProps> = ({ placeholder, type, icon, input, meta: { touched, error } }) => {
    return (
        <Form.Input
            fluid
            type={ type }
            iconPosition="left"
            placeholder={ placeholder }
        >
            <input { ...input } />
            { touched && error && (
                <Label basic color="red">
                    {error}
                </Label>
            ) }
            <i aria-hidden="true" className={ icon } ></i>
        </Form.Input>
    );
}

export default TextInput;
