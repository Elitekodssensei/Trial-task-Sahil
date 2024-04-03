// pages/index.js (or any other appropriate file in pages directory)
'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IndexPage({ swapData, loading }) {
  console.log('swapData', swapData);
  return (
    <div className="ml-48 mt-20">
      <h1 className="mt-8 mb-4">Swap Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Sender</th>
              <th className="px-4 py-2">Recipient</th>
              <th className="px-4 py-2">Amount 0</th>
              <th className="px-4 py-2">Amount 1</th>
              <th className="px-4 py-2">Transaction ID</th>
              <th className="px-4 py-2">Block Number</th>
              <th className="px-4 py-2">Gas Used</th>
              <th className="px-4 py-2">Gas Price</th>
              <th className="px-4 py-2">Timestamp</th>
              <th className="px-4 py-2">Token 0 ID</th>
              <th className="px-4 py-2">Token 0 Symbol</th>
              <th className="px-4 py-2">Token 1 ID</th>
              <th className="px-4 py-2">Token 1 Symbol</th>
            </tr>
          </thead>
          <tbody>
            {swapData?.map((value, key) => (
              <tr key={key}>
                <td className="px-4 py-2">{value?.sender}</td>
                <td className="px-4 py-2">{value?.recipient}</td>
                <td className="px-4 py-2">{value?.amount0}</td>
                <td className="px-4 py-2">{value?.amount1}</td>
                <td className="px-4 py-2">{value?.transaction?.id}</td>
                <td className="px-4 py-2">{value?.transaction?.blockNumber}</td>
                <td className="px-4 py-2">{value?.transaction?.gasUsed}</td>
                <td className="px-4 py-2">{value?.transaction?.gasPrice}</td>
                <td className="px-4 py-2">{value?.timestamp}</td>
                <td className="px-4 py-2">{value?.token0?.id}</td>
                <td className="px-4 py-2">{value?.token0?.symbol}</td>
                <td className="px-4 py-2">{value?.token1?.id}</td>
                <td className="px-4 py-2">{value?.token1?.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default IndexPage;
