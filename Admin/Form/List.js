import { List } from '@List'

const headers = <>
    <th>Key</th>
    <th>Title</th>
</>

const row = (item) => <>
    <td>{item.key}</td>
    <td>{item.title}</td>
</>

const Forms = () => {
    return <List
        title="Forms"
        entityType='form'
        headers={headers}
        row={row}
    />
}

export default Forms;
export { Forms }