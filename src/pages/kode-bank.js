import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@rocketseat/gatsby-theme-docs/src/components/Layout';
import Seo from '@rocketseat/gatsby-theme-docs/src/components/SEO';

export default function KodeBank() {
  const [kode, setKode] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.tokovoucher.net/open-api/metode-topup');
        const data = await res.json();
        setKode(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout title="Metode Pembayaran Deposit">
      <Seo title="Metode Pembayaran Deposit" />
    
      <p>Metode pembayaran deposit yang tersedia pada Toko Voucher.</p>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Bank</th>
            <th>Kode</th>
             <th>
              Status
             </th>
             
          </tr>
        </thead>
        <tbody>
          
          {kode.map((item, index) => (
            <tr key={index}>
               <td><img src={item.image} alt={item.nama} height={20}/></td>
              <td>{item.nama}</td>
              <td>{item.kode ||'-'}</td>
              <td>{item.status===1?'Aktif':'Gangguan'}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
