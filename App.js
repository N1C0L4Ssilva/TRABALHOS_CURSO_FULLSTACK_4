import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

// //  -- == Paginas == --
// //  -- == MicroAtividade 2 == --
import PizzaTranslator from './Pages/MicroAtividade2/Pagina';
// //  -- == MicroAtividade 3 == --
import ListaDinamica from './Pages/MicroAtividade3/Pagina';
// //  -- == MicroAtividade 4 == --
import FlatListBasics from './Pages/MicroAtividade4/Pagina';
import SectionListBasics from './Pages/MicroAtividade4/SectionList';
// //  -- == MicroAtividade 5 == --
import DisplayAnImage from './Pages/MicroAtividade5/DisplayAnImage';
import DisplayAnImageWithStyle from './Pages/MicroAtividade5/DisplayAnImageStyle';
// //  -- == MissãoPratica == --
import DadosFornecedor from './Pages/MissaoPratica/DadosFornecedor/Pagina';
import ListaFornecedor from './Pages/MissaoPratica/ListaFornecedor/Pagina';
import CadastroFornecedor from './Pages/MissaoPratica/CadastroFornecedor/Pagina';

export default function App() {
  return (
    <View>
      {/* <PizzaTranslator/> */}
      {/* <ListaDinamica/> */}
      {/* <FlatListBasics/> */}
      {/* <SectionListBasics/> */}
      {/* <DisplayAnImage/> */}
      {/* <DisplayAnImageWithStyle/> */}
      {/* <DadosFornecedor/> */}
      {/* <ListaFornecedor/> */}
      <CadastroFornecedor/>
    </View> 
  );
}