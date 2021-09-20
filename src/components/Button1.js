const Button1 = () => {
    const onClick = () =>{
        console.log('click');
    }
    return (
      <div>
        <button color="blue" text="Add" onClick= {onClick} />
      </div>
      
    )
}

export default Button1
