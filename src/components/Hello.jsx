function Hello({ onClick }) {
  return (
    <h1 className="hello-heading">
      <button type="button" onClick={onClick}>
        Hello from hitman
      </button>
    </h1>
  )
}

export default Hello
