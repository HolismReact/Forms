import { Form, Text, Boolean } from '@Form'

const inputs = <>
    <Text
        column='Label'
        placeholder='Label'
    />
    <Text
        column='Placeholder'
        placeholder='Placeholder'
    />
    <Text
        column='Hint'
        placeholder='Hint'
    />
    <Boolean
        column='IsRequired'
        placholder=""
    />
</>

const EditForm = () => {
    return <Form
        entityType='form'
        inputs={inputs}
    />
}

export default EditForm