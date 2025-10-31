import Card from "react-bootstrap/Card";

const DashboardCard = ({ title, value, color }) => {
  return (
      <div>
    <Card
      border={color}
      style={{ width: "12rem", margin: "10px", flex: "1 1 200px" }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default DashboardCard