const Shimmer = () => {
  return (
    <div className='shimmer-container'>
      {Array.from({ length: 10 }, (_, index) => (
        <div className='shimmer-card' key={index}></div>
      ))}
    </div>
  )
}

export default Shimmer
