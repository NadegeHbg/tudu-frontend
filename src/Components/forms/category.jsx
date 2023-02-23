// import { CheckIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";


const Category = () => {
    const { register,
        handleSubmit,
    } = useForm();

    const handleAddCat = (data) => {
        console.log(data)

    };

    const onErrors = (errors) => { console.error(errors) };

    return (
        <form onSubmit={handleSubmit(handleAddCat, onErrors)}>
            <input type="text" name="category" placeholder="+ New category" {...register('category')} />
            <input type="submit" value="submit" />
        </form>
    )

}

export default Category;