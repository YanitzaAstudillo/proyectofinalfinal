import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Grafico = ({ clinicas }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    const equivalencias = {
      'alajuela': 'alajuela',
      'heredia': 'heredia',
      'cartago': 'cartago',
      'san josé': 'san jose',
      'san jose': 'san jose',
      'limón': 'limon',
      'limon': 'limon',
      'puntarenas': 'puntarenas',
      'guanacaste': 'guanacaste',
};

    const conteo = {
      alajuela: 0,
      heredia: 0,
      cartago: 0,
      'san josé': 0,
      limon: 0,
      puntarenas: 0,
      guanacaste: 0,
    };

    clinicas.forEach((c) => {
    const original = c.nombre_Provincia?.toLowerCase()?.trim();
    const clave = equivalencias[original];
    if (clave && conteo[clave] !== undefined) {
      conteo[clave]++;
    }
  });

    const option = {
      title: {
        text: 'Cantidad de Clínicas por provincia',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      },
      xAxis: {
        type: 'category',
        data: [
          'Alajuela',
          'Heredia',
          'San José',
          'Limón',
          'Guanacaste',
          'Puntarenas',
          'Cartago',
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Clínicas',
          type: 'bar',
          data: [
            conteo.alajuela,
            conteo.heredia,
            conteo['san josé'],
            conteo.limon,
            conteo.guanacaste,
            conteo.puntarenas,
            conteo.cartago,
          ],
          barWidth: '50%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#80FFA5' },
              { offset: 1, color: '#00DDFF' },
            ]),
          },
        },
      ],
    };

    chartInstance.setOption(option);
    const handleResize = () => chartInstance.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.dispose();
    };
  }, [clinicas]);

  return <div ref={chartRef} style={{ width: '100%', height: '360px' }} />;
};

export default Grafico;
