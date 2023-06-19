const parentStyle = {
  background: "beige",
  border:"1px solid red",
  padding:"10px"
};

const ParentComponent = ({ children }) => {
  return (
    <div style={parentStyle}>
      <h3>Im the Parent Component 👨‍🦳</h3>
      {children}
    </div>
  );
};

export default ParentComponent;
