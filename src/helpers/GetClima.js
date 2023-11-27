import React, { useState, useEffect } from 'react';

const GetAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const resultado = await response.json();
        setData(resultado);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  },[]);

};
export default GetAPI;