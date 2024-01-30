

const VioletProgressBar = () => {
  const percentage = 60;

  return (
    <div className="relative h-2 bg-white rounded-full overflow-hidden border-[0.5px] border-violet-200">
      <div
        className="h-full bg-violet-500"
        style={{ width: `${percentage}%`, transition: 'width 0.5s ease-in-out' }}
      >
      </div>
    </div>
  );
};


const Ranking = () => {
  return (
    <div className='px-2 mt-4'>
    <div className='flex flex-col rounded-lg'>
      <p className='text-[10px] font-bold text-violet-500 mb-3'>Your Ranking</p>
      <VioletProgressBar/>
      <p className='text-[7px] font-bold text-violet-400 my-3 text-center'>Hurray! You are in the top <span className="text-[10px] font-bold text-violet-600">40%</span></p>
      </div>  
    </div>
  )
}

export default Ranking