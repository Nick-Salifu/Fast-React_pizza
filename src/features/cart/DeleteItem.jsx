import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice"

function DeleteItem() {
    const dispatch = useDispatch({pizzaId});

    return (
        <Button type='small' onClick={()=> dispatch(deleteItem(pizzaId))}>delete</Button>
    )
}

export default DeleteItem
