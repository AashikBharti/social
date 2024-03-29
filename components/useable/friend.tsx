

function Friend() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-blue-500"></div>
      <div className="w flex items-center justify-between p-2 gap-10">
        <span className="text-sm font-semibold">Mayank Bharti</span>
        <span className="text-sm text-slate-400">10 min</span>
      </div>
    </div>
  );
}

export default Friend;
