import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, StatusBar, FlatList } from 'react-native';
import { getCEPData, getCityCode } from '../../helpers/cepService';
import { getWeatherData } from '../../helpers/weatherService';
import { format } from 'date-fns';

const HomeScreen = () => {
  const [cep, setCEP] = useState('');
  const [cepData, setCEPData] = useState(null);
  const [cityCode, setCityCode] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleCEPSubmit = async () => {
    try {
      const data = await getCEPData(cep);
      console.log('Dados do CEP recebidos:', data);

      if (data.city) {
        setCEPData({ ...data });
        setError(null);

        try {
          const code = await getCityCode(data.city);
          console.log('Código da cidade:', code);

          setCityCode(code);
          
          try {
            const weatherResponse = await getWeatherData(code, 6);
            console.log('Dados de clima recebidos:', weatherResponse);
            setWeatherData({ ...weatherResponse });
          } catch (weatherError) {
            console.error('Erro ao obter dados de clima:', weatherError);
            setError('Erro ao obter dados de clima. Verifique o CEP e tente novamente.');
            setWeatherData(null);
          }
        } catch (cityCodeError) {
          console.error('Erro ao obter código da cidade:', cityCodeError);
          setError('Erro ao obter código da cidade. Verifique o CEP e tente novamente.');
          setWeatherData(null);
        }
      } else {
        setError('CityCode não disponível nos dados do CEP. Verifique o CEP e tente novamente.');
        setCEPData(null);
        setCityCode(null);
        setWeatherData(null);
      }
    } catch (error) {
      console.error('Erro ao obter dados do CEP:', error);
      setError('Erro ao obter dados do CEP. Verifique o CEP e tente novamente.');
      setCEPData(null);
      setCityCode(null);
      setWeatherData(null);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#080808" barStyle="light-content"/>
      <View style={{ padding: 20 }}>
        <Text style={styles.h1}>Bem-vindo ao Clima.ly!</Text>

        <TextInput
          label="CEP"
          value={cep}
          onChangeText={setCEP}
          keyboardType="numeric"
          style={styles.textInput}
        />

        <Button title="Buscar Dados do CEP" onPress={handleCEPSubmit} style={{ marginVertical: 10 }} />

        {error && <Text style={{ color: 'red' }}>{error}</Text>}

        {cepData && (
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.h2}>Dados do CEP:</Text>
            <Text style={styles.h2}>CEP: {cepData.cep}</Text>
            <Text style={styles.h2}>Cidade: {cepData.city}</Text>
            <Text style={styles.h2}>Código da Cidade: {cityCode}</Text>
            <Text style={styles.h2}>Bairro: {cepData.neighborhood}</Text>
            <Text style={styles.h2}>Estado: {cepData.state}</Text>
            <Text style={styles.h2}>Rua: {cepData.street}</Text>
          </View>
        )}

        {weatherData && (
          <View style={{ marginVertical: 10 }}>
            <Text style={styles.h2}>Previsão do Tempo:</Text>
            <FlatList
              data={weatherData.clima}
              keyExtractor={(item) => item.data}
              renderItem={({ item }) => (
                <View style={styles.weatherItem}>
                  <Text>Data: {format(new Date(item.data), 'dd/MM/yyyy')}</Text>
                  <Text>Condição: {item.condicao_desc}</Text>
                  <Text>Máxima: {item.max}°C</Text>
                  <Text>Mínima: {item.min}°C</Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#099CFA',
  },
  h1: {
    fontSize: 30,
    color: '#FFF',
  },
  h2: {
    fontSize: 15,
    color: '#FFF',
  },
  weatherItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 8,
  },
  textInput: {
    marginVertical: 10,
    marginTop: 12,
    backgroundColor: '#444445',
    color: '#FFF',
  },
});

export default HomeScreen;