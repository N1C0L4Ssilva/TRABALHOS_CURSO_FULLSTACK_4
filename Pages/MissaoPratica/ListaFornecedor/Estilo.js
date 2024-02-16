import { StyleSheet } from 'react-native';

const CoresStyle={
  'Black':'#000000',
  'White':'#ffffff',
  'PlaceHolder':'#7C7C7C',
  'BackColor':'#909090',
  'TopColor':'#d9d9d9'
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    marginTop:25,
    padding:0
  },
  NavBar:{
    width: '100%',
    height: 35,
    backgroundColor: CoresStyle.TopColor,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
  },
  NavButton:{
    width: 25,
    height: 25,
    backgroundColor: CoresStyle.BackColor,
    borderRadius: 5,
  },
  NavSpan:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    width: '92%',
    height: '100%',
    marginLeft: 5,
    borderRadius: 6,
    backgroundColor: CoresStyle.BackColor
  },

  main:{
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    margin: 5,
  },
  MainDiv:{
    padding: 5,
    marginBottom: 5,
    borderColor: 'Black',
    borderStyle: 'solid',
    borderWidth: .5,
    backgroundColor: CoresStyle.White,
    borderRadius:5
  },

});

export default styles;
