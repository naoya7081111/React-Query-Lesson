import { VFC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ClassicalFetchA } from './components/ClassicalFetchA';
import { ClassicalFetchB } from './components/ClassicalFetchB';
import { Layout } from './components/Layout';
import { MainContext } from './components/MainContext';
import { MainRTKit } from './components/MainRTKit';
import { ReactQueryA } from './components/ReactQueryA';
import { ReactQueryB } from './components/ReactQueryB';
import { StateProvider } from './context/StateProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,                 
      refetchOnWindowFocus: false,  
    }
  }
})
//fetchに失敗したときにリトライするか　※デフォルトは３回
//マウスをウィンドウに当てているときはfetchを自動で取りに行く設定 ※デフォルトはtrue

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ReactQueryA />} />
              <Route path="/query-B" element={<ReactQueryB />} />
              <Route path="/fetch-a" element={<ClassicalFetchA />} />
              <Route path="/fetch-b" element={<ClassicalFetchB />} />
              <Route path="/main-context" element={<MainContext />} />
              <Route path="/main-rtkit" element={<MainRTKit />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;