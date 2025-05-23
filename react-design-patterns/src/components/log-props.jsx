export const logProps = Compoenent => {
  return (props) => {
    console.log(props);
    
    return <Compoenent {...props} />
  }
}
