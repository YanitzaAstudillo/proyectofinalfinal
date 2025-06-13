import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import llamadosClinic from '../services/llamadosClinic.jsx';

const Grafico = () => {
  const chartRef = useRef(null);
  const [clinicasAlajuela, setClinicasAlajuela] = useState([]);
  const [clinicasHeredia, setClinicasHeredia]= useState([]);
  const [clinicasCartago, setClinicasCartago]= useState([]);
  const [clinicasSanjose, setClinicasSanjose]= useState([]);
  const [clinicasLimon, setClinicasLimon]= useState([]);
  const [clinicasPuntarenas, setClinicasPuntarenas]=useState([]);
  const [clinicasGuanacaste, setClinicasGuanacaste]=useState([]);


  useEffect(() => {
    async function traerClinicas() {
      const dato = await llamadosClinic.getClinicas();
      const filtroAlajuela = dato.filter(
        (provincia) => provincia.nombre_provincia === "alajuela"
      );
       const filtroHeredia = dato.filter(
        (provincia) => provincia.nombre_provincia === "heredia"
      );
       const filtroCartago=dato.filter(
        (provincia)=> provincia.nombre_provincia=== "cartago"
      );
       const filtroSanjose =dato.filter(
        (provincia)=> provincia.nombre_provincia === "san josé"
      );
       const filtroLimon= dato.filter(
        (provincia)=> provincia.nombre_provincia=== "limon"
       );
       const filtroPuntarenas=dato.filter(
        (provincia) => provincia.nombre_provincia=== "puntarenas"
       );
       const filtroGuanacaste=dato.filter(
        (provincia) => provincia.nombre_provincia=== "guanacaste"
       );

      setClinicasHeredia(filtroHeredia);
      setClinicasAlajuela(filtroAlajuela);
      setClinicasCartago(filtroCartago);
      setClinicasSanjose(filtroSanjose);
      setClinicasLimon(filtroLimon);
      setClinicasPuntarenas(filtroPuntarenas);
      setClinicasGuanacaste(filtroGuanacaste);
    }
    traerClinicas();
  }, []);



  useEffect(() => {
    const chartDom = chartRef.current;
    const chartInstance = echarts.init(chartDom);

    const option = {
      color: ['#80FFA5'],
      title: {
        text: 'Cantidad de Clínicas por provincia'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ["Alajuela","Heredia","San José","Limón","Guanacaste","Puntarenas","Cartago"]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Clínicas',
          type: 'bar',
          data: [clinicasAlajuela.length,clinicasHeredia.length,clinicasCartago.length,clinicasSanjose.length,clinicasLimon.length,clinicasPuntarenas.length,clinicasGuanacaste.length],
          barWidth: '50%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#80FFA5' },
              { offset: 1, color: '#00DDFF' }
            ])
          }
        }
      ]
    };

    chartInstance.setOption(option);

    const resizeChart = () => chartInstance && chartInstance.resize();
    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
      chartInstance && chartInstance.dispose();
    };
  }, [clinicasAlajuela]);

  return <div ref={chartRef} style={{ width: '50%', height: '360px' }} />;
};

export default Grafico;