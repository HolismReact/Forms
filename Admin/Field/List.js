import { List } from '@List'

const headers = <>
    <th>Key</th>
</>

const row = (item) => <>
    <td>{item.key}</td>
</>

const Fields = () => {
    return <List
        title='Fields'
        entityType='field'
        headers={headers}
        row={row}
    />
}

export default Fields
export { Fields }