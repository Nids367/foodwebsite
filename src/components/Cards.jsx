function Cards( {title,imageUrl}){
return(<>
     <div className="p-10 px-30 text-center">
     
    <div className="max-w-sm mx-auto w-52 bg-white shadow-lg rounded-lg overflow-hidden ">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      </div>
    </div>
    </div>
    </>
  )
}



export default Cards;