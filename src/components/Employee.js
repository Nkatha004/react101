// This is a child component
// displays the props value only and doesn't change it
// To change the prop values use the parent component

function Employee(props){
    return (
        <>
            <h3>Employee {props.name}</h3>
            
            <p> {props.role ? props.role : 'No role'} </p>
        </>
    )
}

export default Employee;