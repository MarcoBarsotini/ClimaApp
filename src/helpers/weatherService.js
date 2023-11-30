import axios from 'axios';

const BASE_URL = 'https://brasilapi.com.br/api/cptec/v1/clima/previsao';

const getWeatherData = async (cityCode, days) => {
  try {
    const response = await axios.get(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}/${days}`);
    console.log('Resposta da API de clima:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados de clima:', error);

    if (error.response) {
      console.error('Resposta da API de clima:', error.response.data);
    }

    throw error;
  }
};

export { getWeatherData };