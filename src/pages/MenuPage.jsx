import Cards from "../components/Cards";

function Menu(){
    return(
        <>
        <div>
                <h1 className="text-6xl font-cursiv text-center ">OUR MENU</h1>
                <div className='flex flex-wrap px-80'>
                    <Cards imageUrl="https://lh3.googleusercontent.com/p/AF1QipOcbffBmXJEGZDwihhLnAcX7VZTsmf5KSkcXSOu=s1360-w1360-h1020"
                        title="Starters" />
                    <Cards imageUrl="https://lh3.googleusercontent.com/p/AF1QipPRPiaKR60J1XftHiImQe9G7O_F5WqWqhiwZY6b=s1360-w1360-h1020"
                        title="Main Course" />
                    <Cards imageUrl="https://lh3.googleusercontent.com/p/AF1QipP9LtbOrVi9l4OG2VVognhdgYHYKWvjgegxn8iY=s1360-w1360-h1020"
                        title="South Indian" />
                    <Cards imageUrl="https://lh3.googleusercontent.com/p/AF1QipP9sStGsnrOuntaQxqKuupJY4UmN50JYra5kJPV=s1360-w1360-h1020"
                        title="Italian" />
                    <Cards imageUrl="https://lh3.googleusercontent.com/p/AF1QipNjFdGKymSA7Oa_lcMDbjlmLGvxUJCo7HWBRmXk=s1360-w1360-h1020"
                        title="Desserts" />
                    <Cards imageUrl="https://www.cookwithmanali.com/wp-content/uploads/2022/04/Cold-Coffee.jpg"
                        title="Beverages" />
                </div>
            </div>
        </>
    )
}
export default Menu