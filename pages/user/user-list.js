import tableStyles from "../common/style/table.module.css"

const Table = ({ columns,colspan, data }) => {
    return (
        <table className={tableStyles.table}>
        <thead>
            {/**<th key={column} className={tableStyles.td}>{column}</th> */}
            <tr className={tableStyles.tr}>
                {columns.map((column) => (
                    <th key={column} className={tableStyles.td}>{column}</th>
            ))}
            </tr> 
        </thead>
        <tbody>
            <tr className={tableStyles.tr}>
                { data.length == 0 ?<td colSpan={colspan} className={tableStyles.td}> 데이터가 없습니다. </td>
                :<td colSpan={colspan} className={tableStyles.td}> 데이터가 있습니다. </td>}
            </tr>
        </tbody>
        </table>
    );
}

export default function UserList(){
    const columns = ["Username", "Password", "Name", "Telephone"];
    const data = []
    
    return (<>
        <h1>User List</h1>
        {data.length !=0 && <h3>회원수 : {data.length}</h3>}
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>
)}