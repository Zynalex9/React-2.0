interface TodoProps {
  title: string;
  description: string;
  date?: Date; 
}

const Todo = ({ title, description, date }: TodoProps) => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg shadow-2xl text-white m-4 w-60">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-200 mb-4">{description}</p>
      {date && <span className="text-sm text-gray-400">{date.toDateString()}</span>}
      <div className="flex justify-end">
        <button className="bg-white text-cyan-600 px-4 py-1 rounded-full font-semibold shadow hover:bg-gray-100 transition duration-300">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Todo;
