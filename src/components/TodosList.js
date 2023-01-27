const TodoList = () => (
  <div className="border border-gray-300 rounded p-6 flex flex-col items-center justify-center w-1/2">
    <div className="w-full text-center text-5xl m-4">
      Todos
    </div>
    <form className="w-full flex justify-start items-center gap-4 m-4">
      <input className="grow p-2 border border-gray-400 rounded" />
      <button type="submit" className="w-1/5 p-2 bg-emerald-600 rounded text-white hover:bg-emerald-700 transition-colors">
        Add
      </button>
    </form>
    <div className="w-full flex flex-col items-stretch justify-center gap-2">
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>

      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
      <div className="border border-gray-400 rounded p-2 flex items-center justify-center">
        <div className="grow text-xl">
          Todo 1
        </div>
        <button type="button" className="w-1/5 bg-red-500 hover:bg-red-600 transition-colors p-2 rounded text-white">Remove</button>
      </div>
    </div>
  </div>
);

export default TodoList;
