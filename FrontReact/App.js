import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastro from './Cadastro';
import Login from './Login';
import Financeiro from './Financeiro';
import CustoApto from './CustoApto';
import Denuncia from './Denuncia';
import Reserva from './Reserva';
import Agendamento from './Agendamento';
import Historico from './Historico';
import Churrasqueira from './Churrasqueira';
import Lixo from './Lixo';
import AgendamentoLixo from './AgendamentoLixo';
import Assembleia from './Assembleia';
import AgendamentoAssembleia from './AgendamentoAssembleia';
import Vagas from './Vagas';
import Home from './Home';
import { UtilsContexto } from "./Context";


export default function App() {

  const Stack = createStackNavigator();

  const [usuarios, setUsuarios] = useState({usuariosArray:[]});

  return (
    <NavigationContainer>
      <UtilsContexto.Provider value={{ usuarios, setUsuarios }}>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={Cadastro} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
          <Stack.Screen name="Financeiro" options={{ headerShown: false }} component={Financeiro} />
          <Stack.Screen name="CustoApto" options={{ headerShown: false }} component={CustoApto} />
          <Stack.Screen name="Denuncia" options={{ headerShown: false }} component={Denuncia} />
          <Stack.Screen name="Reserva" options={{ headerShown: false }} component={Reserva} />
          <Stack.Screen name="Agendamento" options={{ headerShown: false }} component={Agendamento} />
          <Stack.Screen name="Historico" options={{ headerShown: false }} component={Historico} />
          <Stack.Screen name="Churrasqueira" options={{ headerShown: false }} component={Churrasqueira} />
          <Stack.Screen name="Lixo" options={{ headerShown: false }} component={Lixo} />
          <Stack.Screen name="AgendamentoLixo" options={{ headerShown: false }} component={AgendamentoLixo} />
          <Stack.Screen name="Assembleia" options={{ headerShown: false }} component={Assembleia} />
          <Stack.Screen name="AgendamentoAssembleia" options={{ headerShown: false }} component={AgendamentoAssembleia} />
          <Stack.Screen name="Vagas" options={{ headerShown: false }} component={Vagas} />
          
        </Stack.Navigator>
      </UtilsContexto.Provider>
    </NavigationContainer>
  );

}