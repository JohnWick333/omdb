import axios from 'axios';
import React,{ useState } from 'react';

const useFetch = async (url: string)=> {
  const response = await axios.get(url);
  return response;
}

export default useFetch;