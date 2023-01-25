import useFetch from "./useFetch";

function TreeMenu() {
    const [items] = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <div>
            {items && items.map((item) => (
                <div className='col-md-12' key={item.id}>
                    {item.id}
                </div>
            ))}
        </div>
    )
}

export default TreeMenu;