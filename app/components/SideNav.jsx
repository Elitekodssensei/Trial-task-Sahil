

// components/SideNavBar.js

'use client';

const SideNavBar = ({ connectMetamask, logout, getAccountAddress }) => {
  return (
    <div className="sidenav bg-gray-900 h-full w-48 fixed top-0 left-0 pt-20">
      {getAccountAddress ? (
        <div>
          <p className="text-white mb-2">Connected Account:</p>
          <div className="flex flex-wrap items-center">
            <p className="text-white truncate">{getAccountAddress}</p>
          </div>
          <button
            className="block w-full mt-4 py-2 px-4 bg-gray-800 text-white border-none text-left cursor-pointer transition duration-300 hover:bg-gray-700"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="block w-full py-2 px-4 bg-gray-800 text-white border-none cursor-pointer transition duration-300 hover:bg-gray-700"
          onClick={connectMetamask}
        >
          Connect Metamask
        </button>
      )}
    </div>
  );
};
export default SideNavBar;
