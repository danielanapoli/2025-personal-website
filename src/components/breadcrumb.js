import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumb() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/#/academic">Academic Projects</Breadcrumb.Item>
      <Breadcrumb.Item active>Paper Publications</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Breadcrumb;