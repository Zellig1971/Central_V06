import { useEffect, memo, Fragment, useRef } from "react";

// datatable
import useDataTable from '../../components/hooks/useDatatable.js'

import {
  Row,
  Col,
  Card,
  Dropdown,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

//apexcharts
import Chart from "react-apexcharts";

// Redux Selector / Action
import { useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

//router-dom
import { Link } from "react-router-dom";

//component
import CustomToggle from "../../components/dropdowns";
import ChoicesJs from "../../components/choices";

//select

const options3 = [
  { value: "Enter Amount in BTC", label: "Enter Amount in BTC" },
  { value: "100", label: "100" },
  { value: "200", label: "200" },
  { value: "500", label: "500" },
];
const options4 = [
  { value: "Enter Amount in USD", label: "Enter Amount in USD" },
  { value: "34,85.10", label: "34,85.10" },
  { value: "34,85.11", label: "34,85.11" },
  { value: "34,85.12", label: "34,85.12" },
];


  // datatable
const svg1 = `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" transform="translate(0 0.5)" fill="#E9ECEF"></rect>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5455 7.7002H9.86621V15.2194H6.40039V17.7258H9.86621V25.245H15.5455C18.5431 25.245 19.1891 24.932 20.4809 24.3061C20.5812 24.2575 20.6854 24.207 20.7949 24.1547C22.3145 23.4278 23.4955 22.4044 24.3379 21.0843C25.1802 19.7643 25.6014 18.2271 25.6014 16.4726C25.6014 14.7181 25.1802 13.1809 24.3379 11.8608C23.4955 10.5408 22.3145 9.51734 20.7949 8.79048C19.2752 8.06362 17.5254 7.7002 15.5455 7.7002ZM14.0869 17.7258V21.9114H15.3374C17.161 21.9114 18.6155 21.4227 19.701 20.4452C20.7865 19.4677 21.3293 18.1435 21.3293 16.4726C21.3293 14.8016 20.7865 13.4774 19.701 12.4999C18.6155 11.5224 17.161 11.0337 15.3374 11.0337H14.0869V15.2194H18.1236V17.7258H14.0869Z" fill="#7016d0"></path>
  </svg>`

const svg2 = `<svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_223_7052)">
  <path d="M7.36789 0.5L7.20703 1.04676V16.9125L7.36789 17.0731L14.7326 12.7199L7.36789 0.5Z" fill="#0B0B50"></path>
  <path d="M7.36765 0.5L0.00292969 12.7199L7.36765 17.0732V9.3724V0.5Z" fill="#E1E6EF"></path>
  <path d="M7.36799 18.4678L7.27734 18.5783V24.23L7.36799 24.4948L14.7371 14.1167L7.36799 18.4678Z" fill="#0B0B50"></path>
  <path d="M7.36765 24.4943V18.4673L0.00292969 14.1162L7.36765 24.4943Z" fill="#E1E6EF"></path>
  <path d="M7.36816 17.0732L14.7328 12.72L7.36816 9.37256V17.0732Z" fill="currentColor"></path>
  <path d="M0.00292969 12.72L7.36753 17.0732V9.37256L0.00292969 12.72Z" fill="#0B0B50"></path>
  </g>
  <defs>
  <clipPath id="clip0_223_7052">
  <rect width="14.74" height="24" fill="white" transform="translate(0 0.5)"></rect>
  </clipPath>
  </defs>
  </svg>`

const svg3 = `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_328_7031)">
  <path d="M31.5214 20.3692C29.3836 28.9452 20.6947 34.1585 12.131 32.0206C3.55473 29.8829 -1.65852 21.1944 0.479358 12.6307C2.61711 4.05473 11.2934 -1.15852 19.8696 0.979359C28.4334 3.10461 33.6592 11.7931 31.5214 20.3692Z" fill="url(#paint0_linear_328_7031)"></path>
  <path d="M23.6178 14.5062C23.9303 12.3812 22.3178 11.2312 20.0928 10.4687L20.8178 7.58115L19.0678 7.14365L18.3678 9.95615C17.9053 9.84365 17.4303 9.73115 16.9553 9.63115L17.6553 6.80615L15.9053 6.36865L15.1928 9.24365C14.8053 9.15615 14.4303 9.06865 14.0678 8.98115V8.96865L11.6428 8.36865L11.1803 10.2437C11.1803 10.2437 12.4803 10.5437 12.4553 10.5562C13.1678 10.7312 13.2928 11.2062 13.2678 11.5812L12.4428 14.8687C12.4928 14.8812 12.5553 14.8937 12.6303 14.9312C12.5678 14.9187 12.5053 14.9062 12.4428 14.8812L11.2928 19.4812C11.2053 19.6937 10.9803 20.0187 10.4928 19.8937C10.5053 19.9187 9.21777 19.5812 9.21777 19.5812L8.34277 21.5937L10.6303 22.1687C11.0553 22.2812 11.4678 22.3812 11.8803 22.4937L11.1553 25.4062L12.9053 25.8437L13.6303 22.9562C14.1053 23.0812 14.5803 23.2062 15.0303 23.3187L14.3178 26.1937L16.0678 26.6312L16.7928 23.7187C19.7928 24.2812 22.0428 24.0562 22.9803 21.3437C23.7428 19.1687 22.9428 17.9062 21.3678 17.0812C22.5303 16.8187 23.3928 16.0562 23.6178 14.5062ZM19.6053 20.1312C19.0678 22.3062 15.3928 21.1312 14.2053 20.8312L15.1678 16.9687C16.3553 17.2687 20.1803 17.8562 19.6053 20.1312ZM20.1553 14.4687C19.6553 16.4562 16.6053 15.4437 15.6178 15.1937L16.4928 11.6937C17.4803 11.9437 20.6678 12.4062 20.1553 14.4687Z" fill="white"></path>
  </g>
  <defs>
  <linearGradient id="paint0_linear_328_7031" x1="15.9913" y1="0.49232" x2="15.9913" y2="32.4968" gradientUnits="userSpaceOnUse">
  <stop offset="1" stop-color="#F9AA4B"></stop>
  <stop offset="1" stop-color="#F7931A"></stop>
  </linearGradient>
  <clipPath id="clip0_328_7031">
  <rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect>
  </clipPath>
  </defs>
  </svg>`

  const tableData = [
    {
      img: svg1,
      name: 'Dash DASH',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '5.03%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg1,
      name: 'Dash DASH',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '5.03%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg2,
      name: 'Ethereum ETH',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '3.33%',
      d_percent: '15.45%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg3,
      name: 'Bitcoin BTC',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '0.02%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg3,
      name: 'Bitcoin BTC',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '0.02%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    }
  ];
  const columns = [
    {
      title: 'Name',
      data: null,
      render: function (row) {
        return `<div class="d-flex align-items-center">${row.img}<h6 class="mb-0 ms-2">${row.name}</h6></div>`
      }
    },
    {
      title: '',
      data: null,
      render: function (row) {
        return `<span class="badge bg-soft-success">${row.buy}</span>`
      }
    },
    {
      title: 'Price',
      data: 'price'
    },
    {
      title: '24h%',
      data: null,
      render: function (row) {
        return `<svg class="me-1" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4.5L0.535898 0L7.4641 0L4 4.5Z" fill="#C03221"></path>
        </svg>
        ${row.h_percent}`
      }
    },
    {
      title: '7d%',
      data: null,
      render: function (row) {
        return `<svg class="me-1 text-danger" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0.5L7.4641 5H0.535898L4 0.5Z" fill="currentColor"></path>
        </svg>
        ${row.d_percent}`
      }
    },
    {
      title: 'Market Cap',
      data: 'market_cap'
    },
    {
      title: 'Volume(24h)',
      data: 'volume'
    }
  ];

const Crypto = memo((props) => {
  useSelector(SettingSelector.theme_color);

  const getVariableColor = () => {
    let prefix =
      getComputedStyle(document.body).getPropertyValue("--prefix") || "bs-";
    if (prefix) {
      prefix = prefix.trim();
    }
    const color1 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary`
    );
    const color2 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}secondary`
    );
    const color3 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}primary-tint-20`
    );
    const color4 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}warning`
    );
    const color5 = getComputedStyle(document.body).getPropertyValue(
      `--${prefix}tertiray`
    );
    return {
      primary: color1.trim(),
      secondary: color2.trim(),
      primary_light: color3.trim(),
      warning: color4.trim(),
      tertiray: color5.trim(),
    };
  };
  const variableColors = getVariableColor();
  const colors = [
    variableColors.primary,
    variableColors.secondary,
    variableColors.tertiray,
  ];
  useEffect(() => {
    return () => colors;
  });

  const chart1 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#1AA053"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };

  const chart2 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#1AA053"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart3 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#C03221"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart4 = {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      legend: {
        show: false,
      },
      colors: ["#7016d0"],
      grid: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "Bitcoin",
        data: [10, 21, 15, 31, 29, 42, 39, 61, 41, 51, 32, 51, 51, 55, 60],
      },
    ],
  };
  const chart5 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#7016d0",
            downward: "#08B1BA",
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      grid: {
        show: true,
        strokeDashArray: 7,
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [6629.81, 6650.5, 6623.04, 6633.33],
          },
          {
            x: new Date(1538780400000),
            y: [6632.01, 6643.59, 6620, 6630.11],
          },
          {
            x: new Date(1538782200000),
            y: [6630.71, 6648.95, 6623.34, 6635.65],
          },
          {
            x: new Date(1538784000000),
            y: [6635.65, 6651, 6629.67, 6638.24],
          },
          {
            x: new Date(1538785800000),
            y: [6638.24, 6640, 6620, 6624.47],
          },
          {
            x: new Date(1538787600000),
            y: [6624.53, 6636.03, 6621.68, 6624.31],
          },
          {
            x: new Date(1538789400000),
            y: [6624.61, 6632.2, 6617, 6626.02],
          },
          {
            x: new Date(1538791200000),
            y: [6627, 6627.62, 6584.22, 6603.02],
          },
          {
            x: new Date(1538793000000),
            y: [6605, 6608.03, 6598.95, 6604.01],
          },
          {
            x: new Date(1538794800000),
            y: [6604.5, 6614.4, 6602.26, 6608.02],
          },
          {
            x: new Date(1538796600000),
            y: [6608.02, 6610.68, 6601.99, 6608.91],
          },
          {
            x: new Date(1538798400000),
            y: [6608.91, 6618.99, 6608.01, 6612],
          },
          {
            x: new Date(1538800200000),
            y: [6612, 6615.13, 6605.09, 6612],
          },
          {
            x: new Date(1538802000000),
            y: [6612, 6624.12, 6608.43, 6622.95],
          },
          {
            x: new Date(1538803800000),
            y: [6623.91, 6623.91, 6615, 6615.67],
          },
          {
            x: new Date(1538805600000),
            y: [6618.69, 6618.74, 6610, 6610.4],
          },
          {
            x: new Date(1538807400000),
            y: [6611, 6622.78, 6610.4, 6614.9],
          },
          {
            x: new Date(1538809200000),
            y: [6614.9, 6626.2, 6613.33, 6623.45],
          },
          {
            x: new Date(1538811000000),
            y: [6623.48, 6627, 6618.38, 6620.35],
          },
          {
            x: new Date(1538812800000),
            y: [6619.43, 6620.35, 6610.05, 6615.53],
          },
          {
            x: new Date(1538814600000),
            y: [6615.53, 6617.93, 6610, 6615.19],
          },
          {
            x: new Date(1538816400000),
            y: [6615.19, 6621.6, 6608.2, 6620],
          },
          {
            x: new Date(1538818200000),
            y: [6619.54, 6625.17, 6614.15, 6620],
          },
          {
            x: new Date(1538820000000),
            y: [6620.33, 6634.15, 6617.24, 6624.61],
          },
          {
            x: new Date(1538821800000),
            y: [6625.95, 6626, 6611.66, 6617.58],
          },
          {
            x: new Date(1538823600000),
            y: [6619, 6625.97, 6595.27, 6598.86],
          },
          {
            x: new Date(1538825400000),
            y: [6598.86, 6598.88, 6570, 6587.16],
          },
          {
            x: new Date(1538827200000),
            y: [6588.86, 6600, 6580, 6593.4],
          },
          {
            x: new Date(1538829000000),
            y: [6593.99, 6598.89, 6585, 6587.81],
          },
          {
            x: new Date(1538830800000),
            y: [6587.81, 6592.73, 6567.14, 6578],
          },
          {
            x: new Date(1538832600000),
            y: [6578.35, 6581.72, 6567.39, 6579],
          },
          {
            x: new Date(1538834400000),
            y: [6579.38, 6580.92, 6566.77, 6575.96],
          },
          {
            x: new Date(1538836200000),
            y: [6575.96, 6589, 6571.77, 6588.92],
          },
          {
            x: new Date(1538838000000),
            y: [6588.92, 6594, 6577.55, 6589.22],
          },
          {
            x: new Date(1538839800000),
            y: [6589.3, 6598.89, 6589.1, 6596.08],
          },
          {
            x: new Date(1538841600000),
            y: [6597.5, 6600, 6588.39, 6596.25],
          },
          {
            x: new Date(1538843400000),
            y: [6598.03, 6600, 6588.73, 6595.97],
          },
          {
            x: new Date(1538845200000),
            y: [6595.97, 6602.01, 6588.17, 6602],
          },
          {
            x: new Date(1538847000000),
            y: [6602, 6607, 6596.51, 6599.95],
          },
          {
            x: new Date(1538848800000),
            y: [6600.63, 6601.21, 6590.39, 6591.02],
          },
        ],
      },
    ],
  };
  const chart6 = {
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      colors: ["#c03221"],
      xaxis: {
        type: "datetime",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          minHeight: 20,
          maxHeight: 20,
        },
      },
      yaxis: {
        tickAmount: 4,
        floating: false,

        labels: {
          minWidth: 20,
          maxWidth: 20,
          offsetY: -7,
          offsetX: 0,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      fill: {
        opacity: 0.5,
      },
      tooltip: {
        x: {
          format: "yyyy",
        },
        fixed: {
          enabled: false,
          position: "topRight",
        },
      },
      grid: {
        show: true,
        strokeDashArray: 7,
        yaxis: {
          lines: {
            offsetX: -30,
          },
        },
      },
    },
    series: [
      {
        data: [
          {
            x: 1996,
            y: 500,
          },
          {
            x: 1997,
            y: 400,
          },
          {
            x: 1998,
            y: 429,
          },
          {
            x: 1999,
            y: 342,
          },
          {
            x: 2000,
            y: 448,
          },
          {
            x: 2001,
            y: 234,
          },
          {
            x: 2002,
            y: 325,
          },
          {
            x: 2003,
            y: 316,
          },
          {
            x: 2004,
            y: 218,
          },
          {
            x: 2005,
            y: 430,
          },
          {
            x: 2006,
            y: 355,
          },
          {
            x: 2007,
            y: 466,
          },
          {
            x: 2008,
            y: 337,
          },
          {
            x: 2009,
            y: 452,
          },
          {
            x: 2010,
            y: 377,
          },
        ],
      },
    ],
  };

  // datatable
const svg1 = `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" transform="translate(0 0.5)" fill="#E9ECEF"></rect>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5455 7.7002H9.86621V15.2194H6.40039V17.7258H9.86621V25.245H15.5455C18.5431 25.245 19.1891 24.932 20.4809 24.3061C20.5812 24.2575 20.6854 24.207 20.7949 24.1547C22.3145 23.4278 23.4955 22.4044 24.3379 21.0843C25.1802 19.7643 25.6014 18.2271 25.6014 16.4726C25.6014 14.7181 25.1802 13.1809 24.3379 11.8608C23.4955 10.5408 22.3145 9.51734 20.7949 8.79048C19.2752 8.06362 17.5254 7.7002 15.5455 7.7002ZM14.0869 17.7258V21.9114H15.3374C17.161 21.9114 18.6155 21.4227 19.701 20.4452C20.7865 19.4677 21.3293 18.1435 21.3293 16.4726C21.3293 14.8016 20.7865 13.4774 19.701 12.4999C18.6155 11.5224 17.161 11.0337 15.3374 11.0337H14.0869V15.2194H18.1236V17.7258H14.0869Z" fill="#7016d0"></path>
  </svg>`

const svg2 = `<svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_223_7052)">
  <path d="M7.36789 0.5L7.20703 1.04676V16.9125L7.36789 17.0731L14.7326 12.7199L7.36789 0.5Z" fill="#0B0B50"></path>
  <path d="M7.36765 0.5L0.00292969 12.7199L7.36765 17.0732V9.3724V0.5Z" fill="#E1E6EF"></path>
  <path d="M7.36799 18.4678L7.27734 18.5783V24.23L7.36799 24.4948L14.7371 14.1167L7.36799 18.4678Z" fill="#0B0B50"></path>
  <path d="M7.36765 24.4943V18.4673L0.00292969 14.1162L7.36765 24.4943Z" fill="#E1E6EF"></path>
  <path d="M7.36816 17.0732L14.7328 12.72L7.36816 9.37256V17.0732Z" fill="currentColor"></path>
  <path d="M0.00292969 12.72L7.36753 17.0732V9.37256L0.00292969 12.72Z" fill="#0B0B50"></path>
  </g>
  <defs>
  <clipPath id="clip0_223_7052">
  <rect width="14.74" height="24" fill="white" transform="translate(0 0.5)"></rect>
  </clipPath>
  </defs>
  </svg>`

const svg3 = `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_328_7031)">
  <path d="M31.5214 20.3692C29.3836 28.9452 20.6947 34.1585 12.131 32.0206C3.55473 29.8829 -1.65852 21.1944 0.479358 12.6307C2.61711 4.05473 11.2934 -1.15852 19.8696 0.979359C28.4334 3.10461 33.6592 11.7931 31.5214 20.3692Z" fill="url(#paint0_linear_328_7031)"></path>
  <path d="M23.6178 14.5062C23.9303 12.3812 22.3178 11.2312 20.0928 10.4687L20.8178 7.58115L19.0678 7.14365L18.3678 9.95615C17.9053 9.84365 17.4303 9.73115 16.9553 9.63115L17.6553 6.80615L15.9053 6.36865L15.1928 9.24365C14.8053 9.15615 14.4303 9.06865 14.0678 8.98115V8.96865L11.6428 8.36865L11.1803 10.2437C11.1803 10.2437 12.4803 10.5437 12.4553 10.5562C13.1678 10.7312 13.2928 11.2062 13.2678 11.5812L12.4428 14.8687C12.4928 14.8812 12.5553 14.8937 12.6303 14.9312C12.5678 14.9187 12.5053 14.9062 12.4428 14.8812L11.2928 19.4812C11.2053 19.6937 10.9803 20.0187 10.4928 19.8937C10.5053 19.9187 9.21777 19.5812 9.21777 19.5812L8.34277 21.5937L10.6303 22.1687C11.0553 22.2812 11.4678 22.3812 11.8803 22.4937L11.1553 25.4062L12.9053 25.8437L13.6303 22.9562C14.1053 23.0812 14.5803 23.2062 15.0303 23.3187L14.3178 26.1937L16.0678 26.6312L16.7928 23.7187C19.7928 24.2812 22.0428 24.0562 22.9803 21.3437C23.7428 19.1687 22.9428 17.9062 21.3678 17.0812C22.5303 16.8187 23.3928 16.0562 23.6178 14.5062ZM19.6053 20.1312C19.0678 22.3062 15.3928 21.1312 14.2053 20.8312L15.1678 16.9687C16.3553 17.2687 20.1803 17.8562 19.6053 20.1312ZM20.1553 14.4687C19.6553 16.4562 16.6053 15.4437 15.6178 15.1937L16.4928 11.6937C17.4803 11.9437 20.6678 12.4062 20.1553 14.4687Z" fill="white"></path>
  </g>
  <defs>
  <linearGradient id="paint0_linear_328_7031" x1="15.9913" y1="0.49232" x2="15.9913" y2="32.4968" gradientUnits="userSpaceOnUse">
  <stop offset="1" stop-color="#F9AA4B"></stop>
  <stop offset="1" stop-color="#F7931A"></stop>
  </linearGradient>
  <clipPath id="clip0_328_7031">
  <rect width="32" height="32" fill="white" transform="translate(0 0.5)"></rect>
  </clipPath>
  </defs>
  </svg>`

  const tableData = [
    {
      img: svg1,
      name: 'Dash DASH',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '5.03%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg1,
      name: 'Dash DASH',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '5.03%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg2,
      name: 'Ethereum ETH',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '3.33%',
      d_percent: '15.45%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg3,
      name: 'Bitcoin BTC',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '0.02%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    },
    {
      img: svg3,
      name: 'Bitcoin BTC',
      buy: 'Buy',
      price: '$40,796.55',
      h_percent: '0.02%',
      d_percent: '2.69%',
      market_cap: '$757,571,44,834',
      volume: '894,546 BTC'
    }
  ];
  const columns = [
    {
      title: 'Name',
      data: null,
      render: function (row) {
        return `<div class="d-flex align-items-center">${row.img}<h6 class="mb-0 ms-2">${row.name}</h6></div>`
      }
    },
    {
      title: '',
      data: null,
      render: function (row) {
        return `<span class="badge bg-soft-success">${row.buy}</span>`
      }
    },
    {
      title: 'Price',
      data: 'price'
    },
    {
      title: '24h%',
      data: null,
      render: function (row) {
        return `<svg class="me-1" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4.5L0.535898 0L7.4641 0L4 4.5Z" fill="#C03221"></path>
        </svg>
        ${row.h_percent}`
      }
    },
    {
      title: '7d%',
      data: null,
      render: function (row) {
        return `<svg class="me-1 text-danger" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0.5L7.4641 5H0.535898L4 0.5Z" fill="currentColor"></path>
        </svg>
        ${row.d_percent}`
      }
    },
    {
      title: 'Market Cap',
      data: 'market_cap'
    },
    {
      title: 'Volume(24h)',
      data: 'volume'
    }
  ];

const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
  });

  return (
    <Fragment>
      <Row>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <svg
                    className="me-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_207_7366)">
                      <path
                        d="M23.641 14.9019C22.0377 21.3339 15.521 25.2439 9.09824 23.6405C2.66605 22.0371 -1.24389 15.5208 0.359518 9.09805C1.96283 2.66605 8.47002 -1.24389 14.9022 0.359519C21.325 1.95346 25.2444 8.46983 23.641 14.9019Z"
                        fill="url(#paint0_linear_207_7366)"
                      />
                      <path
                        d="M17.7131 10.5045C17.9475 8.91074 16.7381 8.04824 15.0693 7.47637L15.6131 5.31074L14.3006 4.98262L13.7756 7.09199C13.4287 7.00762 13.0725 6.92324 12.7162 6.84824L13.2412 4.72949L11.9287 4.40137L11.3943 6.55762C11.1037 6.49199 10.8225 6.42637 10.5506 6.36074V6.35137L8.73184 5.90137L8.38496 7.30762C8.38496 7.30762 9.35996 7.53262 9.34121 7.54199C9.87559 7.67324 9.96934 8.02949 9.95059 8.31074L9.33184 10.7764C9.36934 10.7857 9.41621 10.7951 9.47246 10.8232C9.42559 10.8139 9.37871 10.8045 9.33184 10.7857L8.46934 14.2357C8.40371 14.3951 8.23496 14.6389 7.86934 14.5451C7.87871 14.5639 6.91309 14.3107 6.91309 14.3107L6.25684 15.8201L7.97246 16.2514C8.29121 16.3357 8.60059 16.4107 8.90996 16.4951L8.36621 18.6795L9.67871 19.0076L10.2225 16.842C10.5787 16.9357 10.935 17.0295 11.2725 17.1139L10.7381 19.2701L12.0506 19.5982L12.5943 17.4139C14.8443 17.8357 16.5318 17.667 17.235 15.6326C17.8068 14.0014 17.2068 13.0545 16.0256 12.4357C16.8975 12.2389 17.5443 11.667 17.7131 10.5045ZM14.7037 14.7232C14.3006 16.3545 11.5443 15.4732 10.6537 15.2482L11.3756 12.3514C12.2662 12.5764 15.135 13.017 14.7037 14.7232ZM15.1162 10.4764C14.7412 11.967 12.4537 11.2076 11.7131 11.0201L12.3693 8.39512C13.11 8.58262 15.5006 8.92949 15.1162 10.4764Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_207_7366"
                        x1="11.9935"
                        y1="-0.00575999"
                        x2="11.9935"
                        y2="23.9976"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#F9AA4B" />
                        <stop offset="1" stopColor="#F7931A" />
                      </linearGradient>
                      <clipPath id="clip0_207_7366">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="mb-0">Bitcoin</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton36"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Year</Dropdown.Item>
                    <Dropdown.Item to="#">Month</Dropdown.Item>
                    <Dropdown.Item to="#">Week</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3> $34.850,10</h3>
                  <small className="text-success">+ 0.8%</small>
                  <small className="ms-2">(BTC/USDT)</small>
                </div>
                <Chart
                  options={chart1.options}
                  series={chart1.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#E9ECEF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6596 5.3999H7.40015V11.0393H4.80078V12.9191H7.40015V18.5585H11.6596C13.9078 18.5585 14.3923 18.3238 15.3612 17.8543C15.4364 17.8179 15.5145 17.78 15.5966 17.7408C16.7364 17.1956 17.6221 16.428 18.2539 15.438C18.8856 14.448 19.2015 13.2951 19.2015 11.9792C19.2015 10.6633 18.8856 9.5104 18.2539 8.52036C17.6221 7.53033 16.7364 6.76276 15.5966 6.21761C14.4569 5.67247 13.1445 5.3999 11.6596 5.3999ZM10.5657 12.9191V16.0583H11.5035C12.8712 16.0583 13.9621 15.6918 14.7763 14.9587C15.5904 14.2255 15.9974 13.2324 15.9974 11.9792C15.9974 10.726 15.5904 9.73283 14.7763 8.99971C13.9621 8.26658 12.8712 7.90002 11.5035 7.90002H10.5657V11.0393H13.5932V12.9191H10.5657Z"
                      fill="#7016d0"
                    />
                  </svg>
                  <h6 className="mb-0 ms-2">Dash</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton38"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Year</Dropdown.Item>
                    <Dropdown.Item to="#">Month</Dropdown.Item>
                    <Dropdown.Item to="#">Week</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3>$34.850,10</h3>
                  <small className="text-success">+ 0.8%</small>
                  <small className="ms-2">LTC/USDT</small>
                </div>
                <Chart
                  options={chart2.options}
                  series={chart2.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#E9ECEF" />
                    <g clipPath="url(#clip0_223_7456)">
                      <path
                        d="M12.2759 3L12.1553 3.41007V15.3094L12.2759 15.4298L17.7995 12.1649L12.2759 3Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M12.2755 3L6.75195 12.1649L12.2755 15.4299V9.6543V3Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M12.276 16.4757L12.208 16.5586V20.7974L12.276 20.996L17.8028 13.2124L12.276 16.4757Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M12.2755 20.996V16.4757L6.75195 13.2124L12.2755 20.996Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M12.2764 15.4298L17.7998 12.1649L12.2764 9.6543V15.4298Z"
                        fill="currentColor"
                      />
                      <path
                        d="M6.75195 12.1649L12.2754 15.4298V9.6543L6.75195 12.1649Z"
                        fill="#0B0B50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_223_7456">
                        <rect
                          width="11.055"
                          height="18"
                          fill="white"
                          transform="translate(6.75 3)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h6 className="mb-0 ms-2">Etherum</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton39"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Year</Dropdown.Item>
                    <Dropdown.Item to="#">Month</Dropdown.Item>
                    <Dropdown.Item to="#">Week</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3> $34.850,10</h3>
                  <small className="text-danger">- 0.8%</small>
                  <small className="ms-2">ETH/USDT</small>
                </div>
                <Chart
                  options={chart3.options}
                  series={chart3.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex align-items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="currentColor" />
                    <path
                      d="M15.1875 4.5H11.4375L9.09375 12.2273L7.21875 12.6818L6.75 14.5L8.625 14.0455L6.75 19.5H17.0625L18 16.7727H11.4375L12.375 13.5909L15.1875 12.2273L15.6562 10.4091L13.3125 11.3182L15.1875 4.5Z"
                      fill="white"
                    />
                  </svg>
                  <h6 className="mb-0 ms-2">LiteCoin</h6>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray"
                    size="sm"
                    id="dropdownMenuButton40"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">Year</Dropdown.Item>
                    <Dropdown.Item to="#">Month</Dropdown.Item>
                    <Dropdown.Item to="#">Week</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h3> $34.850,10</h3>
                  <small className="text-danger">- 0.8%</small>
                  <small className="ms-2">(LTC/USDT)</small>
                </div>
                <Chart
                  options={chart4.options}
                  series={chart4.series}
                  type="line"
                  height="80px"
                ></Chart>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="7" xl="8">
          <Row>
            <Col lg="12">
              <Card className="card-block card-stretch card-height">
                <div className="flex-wrap card-header d-flex justify-content-between align-items-center">
                  <div className="header-title">
                    <h4>Market Overview</h4>
                  </div>
                  <div className="d-flex align-items-center form-group mb-0">
                    <Form.Check>
                      <Form.Check.Input
                        type="radio"
                        defaultValue=""
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <Form.Check.Label htmlFor="flexRadioDefault1">
                        ETH
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check className="ms-3">
                      <Form.Check.Input
                        type="radio"
                        defaultValue=""
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <Form.Check.Label htmlFor="flexRadioDefault2">
                        XMR
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check className="ms-3">
                      <Form.Check.Input
                        type="radio"
                        defaultValue=""
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <Form.Check.Label htmlFor="flexRadioDefault3">
                        LTC
                      </Form.Check.Label>
                    </Form.Check>
                    <Form.Check className="ms-3">
                      <Form.Check.Input
                        type="radio"
                        defaultValue=""
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <Form.Check.Label htmlFor="flexRadioDefault4">
                        XMR
                      </Form.Check.Label>
                    </Form.Check>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      to="#"
                      variant="text-gray dropdown-toggle"
                      size="sm"
                      id="dropdownMenuButton40"
                    >
                      This Week
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item to="#">This Year</Dropdown.Item>
                      <Dropdown.Item to="#">This Month</Dropdown.Item>
                      <Dropdown.Item to="#">This Week</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <Card.Body>
                  <Chart
                    options={chart5.options}
                    series={chart5.series}
                    type="candlestick"
                    height="280"
                  ></Chart>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-block card-stretch card-height">
                <Card.Header>
                  <div className=" flex-wrap d-flex align-items-center justify-content-between">
                    <div className="header-title">
                      <h4>Quick Trade</h4>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        to="#"
                        variant="text-gray dropdown-toggle"
                        size="sm"
                        id="dropdownMenuButton30"
                      >
                        561,511 Btc
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item to="#">661,511 Btc</Dropdown.Item>
                        <Dropdown.Item to="#">61,511 Btc</Dropdown.Item>
                        <Dropdown.Item to="#">861,511 Btc</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Header>
                <Card.Body>
                  <InputGroup className="mb-3">
                    <span className="input-group-text" id="basic-addon3">
                      Amount BTC
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="1,200000"
                      aria-label="1,200000"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <span className="input-group-text" id="basic-addon4">
                      Price BPL
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="0,000000"
                      aria-label="0,000000"
                      aria-describedby="basic-addon4"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <span className="input-group-text" id="basic-addon5">
                      Total BPL
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="0,000000"
                      aria-label="0,000000"
                      aria-describedby="basic-addon5"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <span className="input-group-text" id="basic-addon5">
                      Total AOT
                    </span>
                    <Form.Control
                      type="text"
                      className="form-control "
                      id="total-bpl"
                      aria-describedby="basic-addon5"
                      placeholder="0,000000"
                    />
                  </InputGroup>
                  <div className="grid-cols-2 d-grid gap-card">
                    <Button type="button" variant="success">
                      BUY{" "}
                      <svg
                        className="ms-2"
                        width="18"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.9785 3.53978L13.0276 12.0773L4.48926 12.0903"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M13.0263 12.0773L2.38157 1.50895"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                    <Button type="button" variant="danger">
                      SELL{" "}
                      <svg
                        width="18"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.98869 15.469L7.9607 6.93139L16.499 6.93945"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M7.96191 6.93166L18.5804 17.5263"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-block card-stretch card-height">
                <Card.Header>
                  <div className="header-title">
                    <h4>Account Summary</h4>
                  </div>
                </Card.Header>
                <Card.Body className="mb-5">
                  <div className="d-flex align-items-center p-3 mb-2 bg-soft-gray rounded">
                    <div className="bg-soft-primary avatar-40 rounded">
                      <svg
                        width="25"
                        viewBox="0 0 31 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.0785 8.21373H23.9029C21.029 8.21878 18.7009 10.4888 18.6957 13.2908C18.6918 16.0992 21.0225 18.3793 23.9029 18.3831H30.0837V18.8292C30.0837 23.7281 27.1138 26.625 22.0881 26.625H8.91384C3.88681 26.625 0.916992 23.7281 0.916992 18.8292V8.15938C0.916992 3.26049 3.88681 0.375 8.91384 0.375H22.0829C27.1087 0.375 30.0785 3.26049 30.0785 8.15938V8.21373ZM7.82884 8.20235H16.0538H16.059H16.0694C16.6851 8.19982 17.1829 7.71069 17.1803 7.10907C17.1777 6.50872 16.6748 6.02338 16.059 6.02591H7.82884C7.21699 6.02844 6.72051 6.51251 6.71792 7.11034C6.71533 7.71069 7.2131 8.19982 7.82884 8.20235Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.4"
                          d="M21.3885 13.9326C21.6935 15.3198 22.9097 16.2957 24.2982 16.2704H29.0377C29.6154 16.2704 30.084 15.7919 30.084 15.2005V11.5086C30.0827 10.9185 29.6154 10.4388 29.0377 10.4375H24.1866C22.6072 10.4426 21.3315 11.7536 21.334 13.3692C21.334 13.5583 21.3526 13.7474 21.3885 13.9326Z"
                          fill="currentColor"
                        />
                        <ellipse
                          cx="24.2503"
                          cy="13.3542"
                          rx="1.45833"
                          ry="1.45833"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="ms-4" style={{ width: "100%" }}>
                      <p className="mb-1">Total Invested</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-flex align-items-center">
                          $3.45K{" "}
                          <svg
                            className="ms-2"
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.77181 1.0415L5.77181 13.5415"
                              stroke="#1AA053"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0.751159 6.08301L5.77116 1.04134L10.792 6.08301"
                              stroke="#1AA053"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </h5>
                        <h6 className=" text-success mb-0">
                          <svg
                            className="ms-2 me-1"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="5"
                              y="0.5"
                              width="2"
                              height="12"
                              rx="1"
                              fill="currentColor"
                            />
                            <rect
                              y="7.5"
                              width="2"
                              height="12"
                              rx="1"
                              transform="rotate(-90 0 7.5)"
                              fill="currentColor"
                            />
                          </svg>
                          64%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3 mb-2 bg-soft-gray rounded">
                    <div className="bg-soft-primary avatar-40 rounded">
                      <svg
                        width="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M6.05875 25.5C2.995 25.5 0.5 22.9622 0.5 19.8443L0.5 13.6429C0.5 10.5314 2.9875 8 6.04625 8H19.9412C23.0063 8 25.5 10.5378 25.5 13.6569V19.8558C25.5 22.9686 23.0125 25.5 19.9538 25.5H18.7787H6.05875Z"
                          fill="currentColor"
                        />
                        <path
                          d="M12.3186 0.776472L8.68231 4.33371C8.30731 4.70136 8.30731 5.29302 8.68481 5.65946C9.06231 6.02467 9.67106 6.02346 10.0461 5.65702L12.0373 3.70797V5.57667V16.0646C12.0373 16.582 12.4686 17.002 12.9998 17.002C13.5323 17.002 13.9623 16.582 13.9623 16.0646V3.70797L15.9536 5.65702C16.3286 6.02346 16.9373 6.02467 17.3148 5.65946C17.5036 5.47563 17.5986 5.2358 17.5986 4.99476C17.5986 4.75615 17.5036 4.51632 17.3173 4.33371L13.6823 0.776472C13.5011 0.599949 13.2561 0.500122 12.9998 0.500122C12.7448 0.500122 12.4998 0.599949 12.3186 0.776472Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="ms-4" style={{ width: "100%" }}>
                      <p className="mb-1">Total Change</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-flex align-items-center">
                          $3.45K{" "}
                          <svg
                            className="ms-2 me-1"
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.22819 13.9585V1.4585"
                              stroke="#C03221"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.2488 8.91699L6.22884 13.9587L1.20801 8.91699"
                              stroke="#C03221"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </h5>
                        <h6 className=" text-danger mb-0">
                          <svg
                            width="10"
                            viewBox="0 0 10 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ms-2 me-1"
                          >
                            <rect
                              y="2.5"
                              width="2"
                              height="10"
                              rx="1"
                              transform="rotate(-90 0 2.5)"
                              fill="currentColor"
                            />
                          </svg>
                          31%
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center p-3  bg-soft-gray rounded">
                    <div className="bg-soft-primary avatar-40 rounded">
                      <svg
                        width="25"
                        viewBox="0 0 31 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M23.6002 7.64026C27.1746 7.64026 30.084 10.6441 30.084 14.3361L30.084 21.6749C30.084 25.3578 27.1819 28.3542 23.6148 28.3542L7.40399 28.3542C3.82815 28.3542 0.917319 25.3518 0.917319 21.6598L0.917319 14.321C0.917319 10.6381 3.82086 7.64026 7.3894 7.64026L8.76024 7.64026L23.6002 7.64026Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.2971 20.3879L20.5394 16.0597C20.9769 15.6124 20.9769 14.8925 20.5365 14.4466C20.0961 14.0023 19.3859 14.0037 18.9484 14.4496L16.6253 16.8196L16.6253 1.78643C16.6253 1.1569 16.1221 0.645874 15.5009 0.645874C14.8811 0.645874 14.3794 1.1569 14.3794 1.78643L14.3794 16.8196L12.0548 14.4496C11.6173 14.0037 10.9071 14.0023 10.4667 14.4466C10.2465 14.6703 10.1357 14.9621 10.1357 15.2554C10.1357 15.5457 10.2465 15.8375 10.4638 16.0597L14.7061 20.3879C14.9176 20.6027 15.2034 20.7242 15.5009 20.7242C15.7998 20.7242 16.0857 20.6027 16.2971 20.3879"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="ms-4" style={{ width: "100%" }}>
                      <p className="mb-1">Day Change</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="mb-0 d-flex align-items-center">
                          $3.45K{" "}
                          <svg
                            className="ms-2 me-1"
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.77181 1.0415L5.77181 13.5415"
                              stroke="#1AA053"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0.751159 6.08301L5.77116 1.04134L10.792 6.08301"
                              stroke="#1AA053"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </h5>
                        <h6 className=" text-success mb-0">
                          <svg
                            className="ms-2 me-1"
                            width="12"
                            height="13"
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="5"
                              y="0.5"
                              width="2"
                              height="12"
                              rx="1"
                              fill="currentColor"
                            />
                            <rect
                              y="7.5"
                              width="2"
                              height="12"
                              rx="1"
                              transform="rotate(-90 0 7.5)"
                              fill="currentColor"
                            />
                          </svg>
                          64%
                        </h6>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="12">
              <Card className="card-block card-stretch card-height">
                <Card.Header>
                  <div className="flex-wrap  d-flex justify-content-between">
                    <div className="header-title">
                      <h4>Recent Trading Activities</h4>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        to="#"
                        variant="text-gray dropdown-toggle"
                        size="sm"
                        id="dropdownMenuButton72"
                      >
                        Monthly
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item to="#">This Week</Dropdown.Item>
                        <Dropdown.Item to="#">This Month</Dropdown.Item>
                        <Dropdown.Item to="#">This Year</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Header>
                <Card.Body className="card-body ">
                  <div className="table-responsive border rounded">
                    <table id="datatable" ref={tableRef} className="table" data-toggle="data-table"></table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg="5" xl="4">
          <Card className="portfolio-card bg-primary">
            <div className=" p-4 d-flex align-items-center justify-content-between flex-wrap pb-0">
              <div className="header-title">
                <h6 className="mb-2">My Portfolio</h6>
                <h3 className="mb-2">$526,246.00</h3>
                <p className="mb-0 text-danger bg-white p-1 px-3 rounded">
                  $526.23(-2.42%) Today
                </p>
              </div>
              <div className="text-end">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M14.6756 0H5.33333C1.92889 0 0 1.92889 0 5.33333V14.6667C0 18.0711 1.92889 20 5.33333 20H14.6756C18.08 20 20 18.0711 20 14.6667V5.33333C20 1.92889 18.08 0 14.6756 0Z"
                    fill="white"
                  />
                  <path
                    d="M5.36866 7.36914C4.91533 7.36914 4.54199 7.74247 4.54199 8.2047V15.0758C4.54199 15.5291 4.91533 15.9025 5.36866 15.9025C5.83088 15.9025 6.20421 15.5291 6.20421 15.0758V8.2047C6.20421 7.74247 5.83088 7.36914 5.36866 7.36914Z"
                    fill="white"
                  />
                  <path
                    d="M10.0357 4.08887C9.58232 4.08887 9.20898 4.4622 9.20898 4.92442V15.0755C9.20898 15.5289 9.58232 15.9022 10.0357 15.9022C10.4979 15.9022 10.8712 15.5289 10.8712 15.0755V4.92442C10.8712 4.4622 10.4979 4.08887 10.0357 4.08887Z"
                    fill="white"
                  />
                  <path
                    d="M14.6402 10.9956C14.178 10.9956 13.8047 11.3689 13.8047 11.8312V15.0756C13.8047 15.5289 14.178 15.9023 14.6314 15.9023C15.0936 15.9023 15.4669 15.5289 15.4669 15.0756V11.8312C15.4669 11.3689 15.0936 10.9956 14.6402 10.9956Z"
                    fill="white"
                  />
                </svg>
                <p className="mb-0 text-white mt-2">+1.2%</p>
              </div>
            </div>
            <Card.Body className="pt-0">
              <hr />
              <h4 className="mb-3">Assets</h4>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_223_7038)">
                      <path
                        d="M31.5214 20.3692C29.3836 28.9452 20.6947 34.1585 12.131 32.0206C3.55473 29.8829 -1.65852 21.1944 0.479358 12.6307C2.61711 4.05473 11.2934 -1.15852 19.8696 0.979359C28.4334 3.10461 33.6592 11.7931 31.5214 20.3692Z"
                        fill="url(#paint0_linear_223_7031)"
                      />
                      <path
                        d="M23.6178 14.5062C23.9303 12.3812 22.3178 11.2312 20.0928 10.4687L20.8178 7.58115L19.0678 7.14365L18.3678 9.95615C17.9053 9.84365 17.4303 9.73115 16.9553 9.63115L17.6553 6.80615L15.9053 6.36865L15.1928 9.24365C14.8053 9.15615 14.4303 9.06865 14.0678 8.98115V8.96865L11.6428 8.36865L11.1803 10.2437C11.1803 10.2437 12.4803 10.5437 12.4553 10.5562C13.1678 10.7312 13.2928 11.2062 13.2678 11.5812L12.4428 14.8687C12.4928 14.8812 12.5553 14.8937 12.6303 14.9312C12.5678 14.9187 12.5053 14.9062 12.4428 14.8812L11.2928 19.4812C11.2053 19.6937 10.9803 20.0187 10.4928 19.8937C10.5053 19.9187 9.21777 19.5812 9.21777 19.5812L8.34277 21.5937L10.6303 22.1687C11.0553 22.2812 11.4678 22.3812 11.8803 22.4937L11.1553 25.4062L12.9053 25.8437L13.6303 22.9562C14.1053 23.0812 14.5803 23.2062 15.0303 23.3187L14.3178 26.1937L16.0678 26.6312L16.7928 23.7187C19.7928 24.2812 22.0428 24.0562 22.9803 21.3437C23.7428 19.1687 22.9428 17.9062 21.3678 17.0812C22.5303 16.8187 23.3928 16.0562 23.6178 14.5062ZM19.6053 20.1312C19.0678 22.3062 15.3928 21.1312 14.2053 20.8312L15.1678 16.9687C16.3553 17.2687 20.1803 17.8562 19.6053 20.1312ZM20.1553 14.4687C19.6553 16.4562 16.6053 15.4437 15.6178 15.1937L16.4928 11.6937C17.4803 11.9437 20.6678 12.4062 20.1553 14.4687Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_223_7038"
                        x1="15.9913"
                        y1="0.49232"
                        x2="15.9913"
                        y2="32.4968"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="#F9AA4B" />
                        <stop offset="1" stopColor="#F7931A" />
                      </linearGradient>
                      <clipPath id="clip0_223_7038">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="ms-2">
                    <h6>Bitcoin</h6>
                    <p className="mb-0">BTC 0.00548765</p>
                  </div>
                </div>
                <h5 className="text-white">$24,564</h5>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9ECEF" />
                    <g clipPath="url(#clip0_4_2734)">
                      <path
                        d="M16.3679 4L16.207 4.54676V20.4125L16.3679 20.5731L23.7326 16.2199L16.3679 4Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 4L9.00391 16.2199L16.3686 20.5732V12.8724V4Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.368 21.9678L16.2773 22.0783V27.73L16.368 27.9948L23.7371 17.6167L16.368 21.9678Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 27.9943V21.9673L9.00391 17.6162L16.3686 27.9943Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.3672 20.5732L23.7318 16.22L16.3672 12.8726V20.5732Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.00391 16.22L16.3685 20.5732V12.8726L9.00391 16.22Z"
                        fill="#0B0B50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_2735">
                        <rect
                          width="14.74"
                          height="24"
                          fill="white"
                          transform="translate(9 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="ms-2">
                    <h6>Ethereum</h6>
                    <p className="mb-0">ETH 1.58235483</p>
                  </div>
                </div>
                <h5 className="text-white">$13,846</h5>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#E9ECEF" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6596 5.3999H7.40015V11.0393H4.80078V12.9191H7.40015V18.5585H11.6596C13.9078 18.5585 14.3923 18.3238 15.3612 17.8543C15.4364 17.8179 15.5145 17.78 15.5966 17.7408C16.7364 17.1956 17.6221 16.428 18.2539 15.438C18.8856 14.448 19.2015 13.2951 19.2015 11.9792C19.2015 10.6633 18.8856 9.5104 18.2539 8.52036C17.6221 7.53033 16.7364 6.76276 15.5966 6.21761C14.4569 5.67247 13.1445 5.3999 11.6596 5.3999ZM10.5657 12.9191V16.0583H11.5035C12.8712 16.0583 13.9621 15.6918 14.7763 14.9587C15.5904 14.2255 15.9974 13.2324 15.9974 11.9792C15.9974 10.726 15.5904 9.73283 14.7763 8.99971C13.9621 8.26658 12.8712 7.90002 11.5035 7.90002H10.5657V11.0393H13.5932V12.9191H10.5657Z"
                      fill="#7016d0"
                    />
                  </svg>
                  <div className="ms-2">
                    <h6>Dash</h6>
                    <p className="mb-0">DASH 25.13234672</p>
                  </div>
                </div>
                <h5 className="text-white">$31,486</h5>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9ECEF" />
                    <g clipPath="url(#clip0_4_2734)">
                      <path
                        d="M16.3679 4L16.207 4.54676V20.4125L16.3679 20.5731L23.7326 16.2199L16.3679 4Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 4L9.00391 16.2199L16.3686 20.5732V12.8724V4Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.368 21.9678L16.2773 22.0783V27.73L16.368 27.9948L23.7371 17.6167L16.368 21.9678Z"
                        fill="#0B0B50"
                      />
                      <path
                        d="M16.3686 27.9943V21.9673L9.00391 17.6162L16.3686 27.9943Z"
                        fill="#E1E6EF"
                      />
                      <path
                        d="M16.3672 20.5732L23.7318 16.22L16.3672 12.8726V20.5732Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9.00391 16.22L16.3685 20.5732V12.8726L9.00391 16.22Z"
                        fill="#0B0B50"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4_2736">
                        <rect
                          width="14.74"
                          height="24"
                          fill="white"
                          transform="translate(9 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="ms-2">
                    <h6>ETH 1.58235483</h6>
                    <p className="mb-0">BTC 0.00548765</p>
                  </div>
                </div>
                <h5 className="text-white">$13,846</h5>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <div className="header-title">
                <h6 className="mb-2">Bitcoin</h6>
                <div className="d-flex align-items-center">
                  <h3 className="mb-2">$34,85.10 </h3>{" "}
                  <small className="ms-2">(USD)</small>
                </div>
                <p className="mb-0 text-danger">$526.23(-2.42%) Today</p>
              </div>
            </Card.Header>
            <Card.Body>
              <Chart
                options={chart6.options}
                series={chart6.series}
                type="area"
                height="215"
              ></Chart>
              <Row className="mt-3">
                <Col lg="6">
                  <ChoicesJs
                    options={options3}
                    className="js-choice"
                    select="one"
                  />
                </Col>
                <Col lg="6">
                  <ChoicesJs
                    options={options4}
                    className="js-choice"
                    select="one"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <div className="flex-wrap d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="mb-0">Transaction Hisory</h4>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    as={CustomToggle}
                    to="#"
                    variant="text-gray dropdown-toggle"
                    size="sm"
                    id="dropdownMenuButton71"
                  >
                    This Monthly
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item to="#">This Year</Dropdown.Item>
                    <Dropdown.Item to="#">This Month</Dropdown.Item>
                    <Dropdown.Item to="#">This Week</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>

            <Card.Body>
              <small className="">15 APR 2020</small>
              <div className="d-flex align-items-center justify-content-between mt-3 mb-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M15.554 4.79639C18.005 4.79639 20 6.85618 20 9.38782V14.4201C20 16.9456 18.01 19.0002 15.564 19.0002L4.448 19.0002C1.996 19.0002 0 16.9414 0 14.4098V9.3775C0 6.85205 1.991 4.79639 4.438 4.79639H5.378L15.554 4.79639Z"
                      fill="#1AA053"
                    />
                    <path
                      d="M10.5459 13.5374L13.4549 10.5695C13.7549 10.2627 13.7549 9.76911 13.4529 9.46338C13.1509 9.15867 12.6639 9.15968 12.3639 9.46541L10.7709 11.0905L10.7709 0.782097C10.7709 0.35042 10.4259 0 9.99994 0C9.57494 0 9.23094 0.35042 9.23094 0.782097L9.23094 11.0905L7.63694 9.46541C7.33694 9.15968 6.84994 9.15867 6.54794 9.46338C6.39694 9.61675 6.32094 9.81685 6.32094 10.018C6.32094 10.217 6.39694 10.4171 6.54594 10.5695L9.45494 13.5374C9.59994 13.6847 9.79594 13.768 9.99994 13.768C10.2049 13.768 10.4009 13.6847 10.5459 13.5374Z"
                      fill="#1AA053"
                    />
                  </svg>
                  <div className="ms-3">
                    <h6 className="mb-0">Bought Bitcoin</h6>
                    <small>Visa Debit Card ***4</small>
                  </div>
                </div>
                <div className="d-grid">
                  <small className="text-success mb-0">+0.00548765 BTC </small>
                  <small className="text-end mb-0">+546 USD</small>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between  flex-wrap mb-3">
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M4.447 20.5C1.996 20.5 0 18.4698 0 15.9755L0 11.0144C0 8.52515 1.99 6.5 4.437 6.5L15.553 6.5C18.005 6.5 20 8.53024 20 11.0256V15.9846C20 18.4748 18.01 20.5 15.563 20.5H14.623H4.447Z"
                      fill="#C03221"
                    />
                    <path
                      d="M9.45504 0.721275L6.54604 3.56706C6.24604 3.86119 6.24604 4.33451 6.54804 4.62766C6.85004 4.91984 7.33704 4.91886 7.63704 4.62571L9.23004 3.06647V4.56144V12.9517C9.23004 13.3657 9.57504 13.7017 10 13.7017C10.426 13.7017 10.77 13.3657 10.77 12.9517V3.06647L12.363 4.62571C12.663 4.91886 13.15 4.91984 13.452 4.62766C13.603 4.4806 13.679 4.28874 13.679 4.0959C13.679 3.90501 13.603 3.71315 13.454 3.56706L10.546 0.721275C10.401 0.580057 10.205 0.500196 10 0.500196C9.79604 0.500196 9.60004 0.580057 9.45504 0.721275"
                      fill="#C03221"
                    />
                  </svg>
                  <div className="ms-3">
                    <h6 className="mb-0">Sold Dash</h6>
                    <Link to="#">www.crypto.com</Link>
                  </div>
                </div>
                <div className="d-grid">
                  <small className="text-success mb-0">
                    + 25.13234672 DASH{" "}
                  </small>
                  <small className="text-end mb-0">+750 USD</small>
                </div>
              </div>
              <small className="">16 APR 2020</small>
              <div className="d-flex align-items-center justify-content-between flex-wrap mt-3 mb-4">
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M15.554 4.79639C18.005 4.79639 20 6.85618 20 9.38782V14.4201C20 16.9456 18.01 19.0002 15.564 19.0002L4.448 19.0002C1.996 19.0002 0 16.9414 0 14.4098V9.3775C0 6.85205 1.991 4.79639 4.438 4.79639H5.378L15.554 4.79639Z"
                      fill="#1AA053"
                    />
                    <path
                      d="M10.5459 13.5374L13.4549 10.5695C13.7549 10.2627 13.7549 9.76911 13.4529 9.46338C13.1509 9.15867 12.6639 9.15968 12.3639 9.46541L10.7709 11.0905L10.7709 0.782097C10.7709 0.35042 10.4259 0 9.99994 0C9.57494 0 9.23094 0.35042 9.23094 0.782097L9.23094 11.0905L7.63694 9.46541C7.33694 9.15968 6.84994 9.15867 6.54794 9.46338C6.39694 9.61675 6.32094 9.81685 6.32094 10.018C6.32094 10.217 6.39694 10.4171 6.54594 10.5695L9.45494 13.5374C9.59994 13.6847 9.79594 13.768 9.99994 13.768C10.2049 13.768 10.4009 13.6847 10.5459 13.5374Z"
                      fill="#1AA053"
                    />
                  </svg>
                  <div className="ms-3">
                    <h6 className="mb-0">Bought Etherum</h6>
                    <small>Visa Debit Card ***4</small>
                  </div>
                </div>
                <div className="d-grid">
                  <small className="text-success mb-0">+0.00548765 BTC </small>
                  <small className="text-end mb-0">+546 USD</small>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap mb-4">
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M15.554 4.79639C18.005 4.79639 20 6.85618 20 9.38782V14.4201C20 16.9456 18.01 19.0002 15.564 19.0002L4.448 19.0002C1.996 19.0002 0 16.9414 0 14.4098V9.3775C0 6.85205 1.991 4.79639 4.438 4.79639H5.378L15.554 4.79639Z"
                      fill="#1AA053"
                    />
                    <path
                      d="M10.5459 13.5374L13.4549 10.5695C13.7549 10.2627 13.7549 9.76911 13.4529 9.46338C13.1509 9.15867 12.6639 9.15968 12.3639 9.46541L10.7709 11.0905L10.7709 0.782097C10.7709 0.35042 10.4259 0 9.99994 0C9.57494 0 9.23094 0.35042 9.23094 0.782097L9.23094 11.0905L7.63694 9.46541C7.33694 9.15968 6.84994 9.15867 6.54794 9.46338C6.39694 9.61675 6.32094 9.81685 6.32094 10.018C6.32094 10.217 6.39694 10.4171 6.54594 10.5695L9.45494 13.5374C9.59994 13.6847 9.79594 13.768 9.99994 13.768C10.2049 13.768 10.4009 13.6847 10.5459 13.5374Z"
                      fill="#1AA053"
                    />
                  </svg>
                  <div className="ms-3">
                    <h6 className="mb-0">Bought Litecoin</h6>
                    <small>Visa Debit Card ***4</small>
                  </div>
                </div>
                <div className="d-grid">
                  <small className="text-success mb-0">+0.00548765 BTC </small>
                  <small className="text-end mb-0">+546 USD</small>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M4.447 20.5C1.996 20.5 0 18.4698 0 15.9755L0 11.0144C0 8.52515 1.99 6.5 4.437 6.5L15.553 6.5C18.005 6.5 20 8.53024 20 11.0256V15.9846C20 18.4748 18.01 20.5 15.563 20.5H14.623H4.447Z"
                      fill="#C03221"
                    />
                    <path
                      d="M9.45504 0.721275L6.54604 3.56706C6.24604 3.86119 6.24604 4.33451 6.54804 4.62766C6.85004 4.91984 7.33704 4.91886 7.63704 4.62571L9.23004 3.06647V4.56144V12.9517C9.23004 13.3657 9.57504 13.7017 10 13.7017C10.426 13.7017 10.77 13.3657 10.77 12.9517V3.06647L12.363 4.62571C12.663 4.91886 13.15 4.91984 13.452 4.62766C13.603 4.4806 13.679 4.28874 13.679 4.0959C13.679 3.90501 13.603 3.71315 13.454 3.56706L10.546 0.721275C10.401 0.580057 10.205 0.500196 10 0.500196C9.79604 0.500196 9.60004 0.580057 9.45504 0.721275"
                      fill="#C03221"
                    />
                  </svg>
                  <div className="ms-3">
                    <h6 className="mb-0">Sold Dash</h6>
                    <Link to="#">www.crypto.com </Link>
                  </div>
                </div>
                <div className="d-grid">
                  <small className="text-success mb-0">
                    + 25.13234672 DASH{" "}
                  </small>
                  <small className="text-end mb-0">+750 USD</small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

Crypto.displayName = "Crypto";
export default Crypto;
