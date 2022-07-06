import REACT, {useState, Component} from "react"
import axios from 'axios';

function AddProduct() {
    const [input, setInput] = useState({
        productname: '',
        image: '',
        brand: '',
        category:'',
        description: '',
        price:'',
    })
    function handleChange(event) {
        const {name, value} = event.target;
        setInput(prevInput =>{
            return {
                ...prevInput,
                [name]: value
            }
        }
            )}
            function handleClick(event) {
                event.preventDefault();
                console.log(input);
            }
    return <div className="container">
        <h1>add a product</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="productname" autoComplete="form-control" value={input.productname} placeholder="name of the product"/>
            </div>
            <div className="form-group">
                <input onChange={handleChange} name="productname" autoComplete="form-control" value={input.productname} placeholder="name of the product"/>
            </div>

            <div className="form-group">
                <textarea onChange={handleChange} name="description" autoComplete="off" value={input.description} className="form-control" placeholder="description"></textarea>
            </div>
            <button onClick={handleClick} className="btn btn-lg btn-info">Add Product</button>
                    </form>
    </div>
}

export default AddProduct