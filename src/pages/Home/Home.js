import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar } from 'react-native';
import { getCEPData } from '../../helpers/cepService';
import { getWeatherData } from '../../helpers/weatherService';

const HomeScreen = () => {
  const [cep, setCEP] = useState('');
  const [cepData, setCEPData] = useState(null);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const handleCEPSubmit = async () => {
    try {
      const data = await getCEPData(cep);
      console.log('Dados do CEP recebidos:', data);

      // Verifique se a resposta da API de CEP inclui o cityCode
      if (data.cityCode !== undefined && data.cityCode !== null) {
        // Use um objeto novo para forçar a atualização
        setCEPData({ ...data });
        setError(null);

        // Agora, chame a API de previsão do tempo com o cityCode
        try {
          const weatherResponse = await getWeatherData(data.cityCode, 6);
          console.log('Dados de clima recebidos:', weatherResponse);

          // Use um objeto novo para forçar a atualização
          setWeatherData({ ...weatherResponse });
        } catch (weatherError) {
          console.error('Erro ao obter dados de clima:', weatherError);
          setError('Erro ao obter dados de clima. Verifique o CEP e tente novamente.');
        }
      } else {
        setError('Erro ao obter o cityCode do CEP. Verifique o CEP e tente novamente.');
        setCEPData(null);
      }
    } catch (error) {
      console.error('Erro ao obter dados do CEP:', error);

      setError('Erro ao obter dados do CEP. Verifique o CEP e tente novamente.');
      setCEPData(null);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#080808" barStyle="light-content"/>
      <View style={{ padding: 20 }}>
        <Text>Bem-vindo ao App de Clima!</Text>

        <TextInput
          label="CEP"
          value={cep}
          onChangeText={setCEP}
          keyboardType="numeric"
          style={{ marginVertical: 10 }}
        />

        <Button title="Buscar Dados do CEP" onPress={handleCEPSubmit} style={{ marginVertical: 10 }} />

        {error && <Text style={{ color: 'red' }}>{error}</Text>}

        {cepData && (
          <View style={{ marginVertical: 10 }}>
            <Text>Dados do CEP:</Text>
            <Text>CEP: {cepData.cep}</Text>
            <Text>Cidade: {cepData.city}</Text>
            <Text>Bairro: {cepData.neighborhood}</Text>
            <Text>Serviço: {cepData.service}</Text>
            <Text>Estado: {cepData.state}</Text>
            <Text>Rua: {cepData.street}</Text>
          </View>
        )}

        <Button
          title="Buscar Previsão do Tempo"
          onPress={() => console.log('Botão de busca de tempo pressionado')} 
          style={{ marginVertical: 10 }}
        />

        {weatherData && (
          <View style={{ marginVertical: 10 }}>
            <Text>Dados de Clima:</Text>
            {/* Exiba os dados do clima conforme necessário */}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default HomeScreen;