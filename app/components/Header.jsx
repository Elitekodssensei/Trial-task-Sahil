import IndexPage from "./Swap";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <div className="transaction-history-container ml-48">
          <nav className="my-4">
            <ul className="flex">
              <li className="mr-4">
                <a href="#all" className="text-white-500 hover:text-blue-700">
                  All
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#uniswap"
                  className="text-white-500 hover:text-blue-700"
                >
                  Uniswap
                </a>
              </li>
              <li>
                <a
                  href="#pancakeswap"
                  className="text-white-500 hover:text-blue-700"
                >
                  PancakeSwap
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
