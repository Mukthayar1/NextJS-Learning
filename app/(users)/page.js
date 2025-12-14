const Home = () => {

  return (
    <div className="w-screen h-screen bg-amber-950 flex justify-center items-center">
      <div className="grid grid-cols-3 flex-wrap gap-4">


        {[0, 1, 2, 3, 4, 5].map(() => (
          <div className="w-[250px] h-[250px] bg-white flex flex-col rounded-2xl items-center justify-center gap-3">
            {/* <div className="h-[80px] w-[80px] rounded-full bg-pink-300 flex justify-center items-center">
              <p>MM</p>
            </div> */}
            <h1 className='font-bold text-black'>Muhammad Mukthayar</h1>
            <div className="flex flex-col justify-center items-center">
              <p className='font-light text-gray-400 text-xs'>Muhammad Mukthayar</p>
              <p className='font-light text-gray-400 text-xs'>Muhammad Mukthayar</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Home
