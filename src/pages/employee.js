import {
  useQuery,
  gql
} from '@apollo/client'
import _ from 'lodash'

const EMPLOYEES_QUERY = gql`
  query Query {
    employees {
      id
      name
      age
      sex
      tasks {
        title
        is_complete
        created_at
      }
    }
  }
`

function EmployeeList() {
  const { loading, error, data } = useQuery(EMPLOYEES_QUERY)

  if (loading)
    return <p>Loading...</p>

  if (error)
    return <p>Error :(</p>

  return (
    <div className='employee'>
      <div className='employee-header'>
        <div>Name</div>
        <div className='tcentered'>Age</div>
        <div className='tcentered'>Sex</div>
      </div>
      { _.map(data.employees,e => (
      <div key={e.id} className='employee-details'>
        <div>{ e.name }</div>
        <div className='tcentered'>{ e.age }</div>
        <div className='tcentered'>{ e.sex }</div>
      </div>
      ))}
    </div>
  )
}

const Employee = () => (
  <>
    <h1>
      Employee
    </h1>

    <EmployeeList />
  </>
)

export default Employee
