import Header from "../component/Header.jsx";
import {Button} from "react-bootstrap";


export default function News() {

    return (
      <div>
          <Header title={'title'}
                  leftChild={ <Button text={'leftChild'}/> }
                  rightChild={ <Button text={'rightChild'}/> }
          />

      </div>
    );
}
