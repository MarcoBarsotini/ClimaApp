import axios from 'axios';

const CEP_BASE_URL = 'https://brasilapi.com.br/api/cep/v1';
const CITY_BASE_URL = 'https://brasilapi.com.br/api/cptec/v1/cidade';

const getCEPData = async (cep) => {
  try {
    const response = await axios.get(`${CEP_BASE_URL}/${cep}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados do CEP:', error);
    throw error;
  }
};

const getCityCode = async (cityName) => {
  try {
    const response = await axios.get(`${CITY_BASE_URL}/${cityName}`);
    console.log('Resposta da API de cidade:', response.data);

    if (Array.isArray(response.data) && response.data.length > 0) {
      const cityData = response.data[0];
      if (cityData.id) {
        return cityData.id;
      } else {
        throw new Error('ID da cidade não encontrado na resposta da API de cidade.');
      }
    } else {
      throw new Error('Resposta inválida da API de cidade.');
    }
  } catch (error) {
    console.error('Erro ao obter código da cidade:', error);
    throw error;
  }
};

export { getCEPData, getCityCode };