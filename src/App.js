import './App.css';
import React,{useState} from 'react';
import ShopList from './components/ShopList';
import ShopHeader from './components/ShopHeader';

function App() {
  const defaultList = [
    {
      name:"공유",
      type:"t-shirt",
      price:15000
    },
    {
      name:"전지현",
      type:"shirt",
      price:20000
    },
    {
      name:"손예진",
      type:"pants",
      price:15000
    },
    {
      name:"신채경",
      type:"t-shirt",
      price:25000
    },
  ];
  const [lists,setLists] = useState(defaultList);
  const types = defaultList.map((list) => list.type);
  const typelist = types.filter((item,index) => types.indexOf(item) === index);
  console.log(typelist);

  //항목이 종류별로 변경되도록 함수만들기
  const onChange = (clicktype) => {
    setLists(defaultList.filter((list) =>list.type === clicktype));
  }
  return (
    <div className='inner'>
      <ShopHeader />
      <ShopList lists={lists} onChange={onChange} typelist={typelist}/>
    </div>
  );
}

export default App;
