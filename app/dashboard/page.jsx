'use client';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
import Header from '../components/Header';
import SideNavBar from '../components/SideNav';
import IndexPage from '../components/Swap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
const supabase = createClientComponentClient();

export default function Dashboard() {
    const router=useRouter()
  const [web3, setWeb3] = useState(null);
  const getAccountAddress = localStorage.getItem('accountAddress');
  const [swapData, setSwapData] = useState([]);
  const [loading, setLoading] = useState(false);

  const connectMetamask = async () => {
    debugger;
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accs = await web3Instance.eth.getAccounts();
        localStorage.setItem('accountAddress', accs[0]);
        fetchData(accs[0]);
      } else {
        console.error('Metamask not found');
      }
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  };

  async function fetchData(address) {
    setLoading(true);
    try {
      const URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
      const query = `
    {
  swaps(where: {
    
    sender: "{address}" 
  }) {
    sender
    recipient
    amount0
    amount1
    transaction {
      id
      blockNumber
      gasUsed
      gasPrice
    }
    timestamp
    token0 {
      id
      symbol
    }
    token1 {
      id
      symbol
    }
  }
}
`;
      const { data } = await axios.post(URL, { query: query });
      setSwapData(data?.data?.swaps);
      console.log('data', data?.data?.swaps);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }
  const logout = async () => {
    Swal.fire({
      text: 'Are you sure to Log out',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Log out',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await supabase.auth.signOut();
        setWeb3(null);
        localStorage.setItem('accountAddress', '');
        router.push("/")
       
      } else {
        console.log('cancel');
      }
    });
  };
  return (
    <>
      <div className="page">
        <SideNavBar
          connectMetamask={connectMetamask}
          logout={logout}
          getAccountAddress={getAccountAddress}
        />
      </div>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Header />
        </div>
      </nav>
      <IndexPage swapData={swapData} loading={loading} />
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs"></footer>
    </>
  );
}
