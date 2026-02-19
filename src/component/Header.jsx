export default function Header({ onReload }) {
  return (
    <header class="flex justify-between items-center p-4 bg-white shadow">
      <h1 class="text-xl font-bold flex items-center gap-2">
        <span class="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full">
          <div class="w-[40px] h-[40px] text-white" data-lucide="chef-hat"></div>
        </span>
        Recipe Discover
      </h1>
      <button onClick={onReload}
        class="bg-orange-500 items-center gap-2 flex text-white px-4 py-2 rounded-lg hover:bg-orange-600">
        <span>
          <div class="w-[30px] h-[30px] te" data-lucide="refresh-ccw"></div>
        </span>
        Get Random Recipe
      </button>
    </header>
  );
}
