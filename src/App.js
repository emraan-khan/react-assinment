import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {


const data = [
  {
    "name": "Parent 1",
    "children": [
      {
        "name": "Child 1.1",
        "children": [
          {
            "name": "Grandchild 1.1.1",
            "children": [
              {
                "name": "Great Grandchild 1.1.1.1",
                "children": []
              }
            ]
          },
          {
            "name": "Grandchild 1.1.2",
            "children": []
          }
        ]
      },
      {
        "name": "Child 1.2",
        "children": []
      }
    ]
  },
  {
    "name": "Parent 2",
    "children": [
      {
        "name": "Child 2.1",
        "children": []
      },
      {
        "name": "Child 2.2",
        "children": [
          {
            "name": "Grandchild 2.2.1",
            "children": []
          }
        ]
      }
    ]
  }
];

function Node({ node }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div onClick={toggle} style={{ cursor: 'pointer' }}>
        {node.name}
      </div>
      {isOpen && node.children && (
        <ul>
          {node.children.map((child, index) => (
            <Node key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

  return (
    <div className="App">
       <h1>Parent List</h1>
      <ul>
        {data.map((item, index) => (
          <Node key={index} node={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
