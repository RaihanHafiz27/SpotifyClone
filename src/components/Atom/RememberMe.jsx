export function RememberMe() {
  return (
    <div div className="block mt-2">
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" checked />
        <div className="w-10 h-4 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-slate-600 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[8px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Ingat aku
        </span>
      </label>
    </div>
  );
}
