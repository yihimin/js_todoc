// services/DataApiContext.js
import React, { createContext } from 'react';
import FakeClient from './FakeClient';
import ApiClient from './ApiClient';
import DataApi from './DataApi';

// 데이터 소스를 설정하는 스위치 (주석을 바꿔서 사용)
// const client = new ApiClient(); // 실제 데이터 연결 (진데이터)
const client = new FakeClient(); // 목데이터 연결

const dataApi = new DataApi(client);

// DataApiContext 생성
export const DataApiContext = createContext(dataApi);

// DataApiProvider 컴포넌트
export const DataApiProvider = ({ children }) => {
  return (
    <DataApiContext.Provider value={dataApi}>
      {children}
    </DataApiContext.Provider>
  );
};
