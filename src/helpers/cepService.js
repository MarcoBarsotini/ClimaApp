import axios from 'axios';

const CEP_BASE_URL = 'https://brasilapi.com.br/api/cep/v1';

const getCEPData = async (cep) => {
  try {
    const response = await axios.get(`${CEP_BASE_URL}/${cep}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados do CEP:', error);
    throw error;
  }
};

export { getCEPData };