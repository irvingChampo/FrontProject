import React, { useEffect, useState } from 'react';
import Header from "../../Molecule/Header/Header"
import "./sensores.css"
import TemperatureHumidityChart from './TemperatureHumidityChart';
import img from "../../../public/src/img/ultrasonico.png"

const Sensores = () => {
  const [data, setData] = useState([]);
  const [latestData, setLatestData] = useState({});

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setData((prevData) => [...prevData, receivedData]);
      setLatestData(receivedData);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <section className='container-sensores'>
      <Header imgSrc={img} title={"Sensores"}/>
      <h1>Grafica del DHT11</h1>
      <div className='container-datos' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TemperatureHumidityChart data={data} />
        <div className='Sensores' style={{ marginLeft: '20px' }}>
          <h2>Sensores</h2>
          <p><strong>Distancia:</strong> {latestData.distance ?? 'N/A'} cm</p>
          <p><strong>Movimiento:</strong> {latestData.movement ? 'Detectado' : 'No detectado'}</p>
        </div>
      </div>
    </section>
  );
};

export default Sensores;
