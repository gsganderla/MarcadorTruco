import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

  container: {
    backgroundColor: '#383535', 
    flex: 1,
  },
  header: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: 'Roboto'
  },
  section: {
    height: '30%',
  },
  assection: {
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  subTitleNos: {
  fontSize: 26,
  fontFamily: 'Roboto',
  fontWeight: "bold",
  color: '#4AA5F9'
  },
  subTitleEles: {
    fontSize: 26,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    color: '#C08DF3'
  },
  textValorUm: {
    fontSize: 142,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    color: '#4AA5F9'
  },
  textValorDois: {
    fontSize: 142,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    color: '#C08DF3'
  },
  footer: {
    height: '40%',
  },
  greenButton: {
    backgroundColor: '#589D52',
    width: '25%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  redButton: {
    backgroundColor: 'red',
    width: '25%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  textButton: {
    color: 'white',
    fontSize: 24,
  },
  zerarButton: {
    width: '80%',
    backgroundColor: '#DE9609',
    height: '50%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})